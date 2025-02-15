const { WAConnection, MessageType, Presence } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Load or create session
const sessionFilePath = path.join(__dirname, 'session.json');
let sessionData;
if (fs.existsSync(sessionFilePath)) {
    sessionData = require(sessionFilePath);
}

// Initialize the WhatsApp bot
const conn = new WAConnection();

// Load the session if it exists
if (sessionData) {
    conn.loadAuthInfo(sessionData);
}

// Developer's number
const developerNumber = '26776660902@s.whatsapp.net'; // Replace with your number

// Event: When the connection is opened
conn.on('open', () => {
    console.log('Connected to WhatsApp!');

    // Save session data to a file
    const authInfo = conn.base64EncodedAuthInfo();
    fs.writeFileSync(sessionFilePath, JSON.stringify(authInfo, null, 2));
    console.log('Session saved to session.json');

    // Set presence to available
    conn.updatePresence(conn.user.jid, Presence.available);

    // Send deployment success message
    const userJid = conn.user.jid; // User's JID
    const currentDate = new Date().toLocaleDateString(); // Current date
    const commands = 'hello, time, help'; // Available commands

    const deploymentMessage = `*Queenora-MD ᴄᴏɴɴᴇᴄᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*\n\n` +
    
    
        `ᴏᴡɴᴇʀ ɴᴀᴍᴇ: Romeo bw iii\n\n` +
        
        
        `ᴘʀᴇғɪx: ɴᴜʟʟ\n\n` .
        
        
        `ᴜsᴇʀ: ${userJid}\n\n` +
        
        
        `ᴄᴜʀʀᴇɴᴛ ᴅᴀᴛᴇ: ${currentDate}\n\n` +
        
        
        `ᴘʟᴜɢɪɴs: ${commands}\n\n` +
        
        
        `ᴛʜᴀɴᴋ ʏᴏᴜ ғᴏʀ ᴄʜᴏᴏsɪɴɢ queenora ɪ ʜᴏᴘᴇ ʏᴏᴜ ᴅᴏ ʜᴀᴠᴇ ᴀ ɢʀᴇᴀᴛ ᴛɪᴍᴇ\n\n` +
        
        
        `© ROMEO BW III`;
        
        `ᴘʟᴇᴀsᴇ ʏᴏᴜ ᴄᴀɴ ᴀʟsᴏ sᴜʙsᴄʀɪʙᴇ ᴛᴏ ᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴍᴏʀᴇ ᴜᴘᴅᴀᴛᴇs ʀᴇʟᴀᴛᴇᴅ ᴛᴏ ᴏᴜʀ ʙᴏᴛ QUEENORA MD

    // Send the message to the developer's number
    conn.sendMessage(developerNumber, deploymentMessage, MessageType.text)
        .then(() => console.log('Deployment success message sent to developer.'))
        .catch(err => console.error('Failed to send deployment message:', err));
});

// Event: When the connection is closed
conn.on('close', ({ reason, isReconnecting }) => {
    console.log(`Connection closed due to ${reason}, reconnecting: ${isReconnecting}`);
    if (!isReconnecting) {
        console.log('Attempting to reconnect...');
        conn.connect();
    }
});

// Event: When a new message is received
conn.on('chat-update', async (chatUpdate) => {
    if (chatUpdate.messages && chatUpdate.count) {
        const message = chatUpdate.messages.all()[0];
        if (message.key.fromMe) return; // Ignore messages sent by the bot

        const sender = message.key.remoteJid; // Sender's JID
        const text = message.message.conversation || message.message.extendedTextMessage?.text; // Message text

        console.log(`Received message from ${sender}: ${text}`);

        // Handle different commands
        switch (text.toLowerCase()) {
            case 'hello':
                await conn.sendMessage(sender, 'Hello! How can I help you?', MessageType.text);
                break;
            case 'time':
                const currentTime = new Date().toLocaleTimeString();
                await conn.sendMessage(sender, `Current time is ${currentTime}`, MessageType.text);
                break;
            case 'help':
                await conn.sendMessage(sender, 'Available commands: hello, time, help', MessageType.text);
                break;
            default:
                await conn.sendMessage(sender, 'I did not understand that command. Type "help" for a list of commands.', MessageType.text);
        }
    }
});

// Event: When the connection encounters an error
conn.on('error', (err) => {
    console.error('Connection error:', err);
});

// Event: When the connection is successfully authenticated
conn.on('authenticated', () => {
    console.log('Successfully authenticated!');
});

// Event: When the connection is waiting for a QR code
conn.on('qr', (qr) => {
    console.log('Scan the QR code below to log in:');
    generateQRCode(qr);
});

// Function to generate QR code in the terminal
function generateQRCode(qr) {
    const qrcode = require('qrcode-terminal');
    qrcode.generate(qr, { small: true });
}

// Connect to WhatsApp
(async () => {
    await conn.connect();
})();

// Command line interface for sending messages
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', async (input) => {
    const [command, ...args] = input.split(' ');
    switch (command) {
        case 'send':
            if (args.length < 2) {
                console.log('Usage: send <jid> <message>');
                return;
            }
            const [jid, ...messageParts] = args;
            const message = messageParts.join(' ');
            await conn.sendMessage(jid, message, MessageType.text);
            console.log(`Message sent to ${jid}`);
            break;
        case 'exit':
            rl.close();
            process.exit(0);
            break;
        default:
            console.log('Unknown command. Available commands: send, exit');
    }
});

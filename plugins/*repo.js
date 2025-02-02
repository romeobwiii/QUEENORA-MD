const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📁",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 ʜᴇʟʟᴏ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ
     ${pushname}*
          
📍THE REPO LINK FOR QUEENORA MD❤️‍🔥👇

👨‍💻◦ https://github.com/romeobwiii/QUEENORA-MD.git

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾 𝖬𝗒 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ NOT YET
📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖥𝗈𝗅𝗅𝗈𝗐 𝖬𝗒 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://whatsapp.com/channel/0029Vb3i75L3bbUyFPFwoN3x

> *© POWERED BY ROMEO BW III*
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/gLgdgLjT/IMG-20250201-WA0143.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

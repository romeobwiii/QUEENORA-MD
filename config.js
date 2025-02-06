const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
///=================When editing, do not accidentally delete anything !!MAIN-CONFIG=================================
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"UKMhRr9t/FJghh5iFqfej6uA042mofnh77GkbD3pjX0="},"public":{"type":"Buffer","data":"P5gfhyp0DXRyiZJWqRxn+wpO40A4WoIn4i2vlBmyPkg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"kOkRRS3AKKuAgM9RvMehvcOJfgxQBUI/v95+hTutDmc="},"public":{"type":"Buffer","data":"bOkA1+PAZkFdHK8f09mqrVUCrFe7m0Yo8N8LM1XgNG0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aOk4MTbG6sXaSEAUGfHK/JjWMwTNmhziJj66Uxebkmw="},"public":{"type":"Buffer","data":"B+WAKqQN8M853B38s0gG9vwZkf5ezFnmziyiKzTxxR0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qCVP0WwFQovnaTDVrR3mWiy1WYhdUMrW1/5v1FVtiXc="},"public":{"type":"Buffer","data":"C2HHAe52S/jAgtklsIwqUVLqV5FTgcV0dWYRNmYgIiY="}},"signature":{"type":"Buffer","data":"wDAEueVmhpYYTardwmV73vxWOhwqy1T6di3i5DmBXZkx/P9ETGzkxPutvXC+OcEbaDltIhgvh+/WlmFM2at4Bw=="},"keyId":1},"registrationId":120,"advSecretKey":"6BeaeQUwKYzm6ffed52nLUU58f1Phw8Nb3jQmnQ7HwM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Sb-Cwis3QxS9TOZvjMqYSA","phoneId":"b63b1a0c-fb10-4842-8040-fb3e69de292d","identityId":{"type":"Buffer","data":"s2Qd9TJtGvsLLPAtgJYzZtJsBKk="},"registered":true,"backupToken":{"type":"Buffer","data":"2CYsm9JhFpva4v7W+tmwVy3CWx4="},"registration":{},"pairingCode":"Y9W7P94E","me":{"id":"26776660902:81@s.whatsapp.net","name":"𝐑𝐎𝐌𝐈𝐄 𝐎𝐍 𝐓𝐇𝐈𝐑𝐃"},"account":{"details":"COH5waYDEPL8k70GGCEgACgA","accountSignatureKey":"DoBp0QtBTCx5s7nUTlgJQgWwdN0i3mpqMbq02wagtTU=","accountSignature":"23e9BERlbnlhRqTEDJ2pvNwzWL9IaFGjS6Y13aHzl1FZyf2/1WkAim7cxHYvyj/tX/GXFQDXpRwCcfhlN4T+AA==","deviceSignature":"CcB6fDwIVWMskd/dT3MkfzIKX6QK5ebHxtbthAT/0nrt7SWmOFxhsPtJIxtbukxIBBgimKry+cx0RU6PcCtgDw=="},"signalIdentities":[{"identifier":{"name":"26776660902:81@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQ6AadELQUwsebO51E5YCUIFsHTdIt5qajG6tNsGoLU1"}}],"platform":"smba","lastAccountSyncTimestamp":1738866303}",  // ADD Your Session Id 
MODE: process.env.MODE || "public",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", //add true or false
BOT_NAME: process.env.BOT_NAME || "QUEENORA MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true", //add true or false
AUTO_STICKER: process.env.AUTO_STICKER || "true", //add true or false
AUTO_REPLY: process.env.AUTO_REPLY || "true", //add true or false
ANTI_LINK: process.env.ANTI_LINK || "true", //add true or false
ANTI_BAD: process.env.ANTI_BAD || "true", //add true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", //add true or false
AUTO_REACT: process.env.AUTO_REACT || "true", //add true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //add true or false
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
///==================Do not change anything below=========================
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/gLgdgLjT/IMG-20250201-WA0143.jpg", //do not change alive img url
ALIVE_MSG: process.env.ALIVE_MSG || "ʜɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ🚀", // change alive msg if you wish
};

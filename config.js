const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
///=================When editing, do not accidentally delete anything !!MAIN-CONFIG=================================
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lqSXUvRENnaVhGdDAxaGxxdEhYNFd4dU5kbjQyOTZVWk1TdXo4b3ZWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejF5VitrRU9yaDVUbTlOYTZjNVpCVGxsY0tzQXlZY2pmNXdrU0Y4ZGhUQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxT1ZYaFdyOUV0d0FQM0VvWklWRmR0WEtySDQ3cTZRN2ZPUW02cTlGU1dBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0ZzF5bmtuTVF5ZGpISU13STJlLzZBUjhza3Z2U283NWgzMGRSaW1NTUJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJcTdSV3ZwdDNPRGlHRFFicU1vUzAzditSSk5ZcHoxTlpmSGZaeEFWa3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJKWmN2NmZJSmtWM3RBZ3VsZ0pMbC9id21FV0RHaWluTHY2V1YwS2Riekk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hIWDM4RWlLMkxJZjAvNVh2WGExK2xLcm5NcjhlenVUSCtBNGVvVFJsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXdBN3JBdEw3d1BjS1V3OU8xODUyUXZWQ0RPYXh6UzBtRzBoOXhqcmtIdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml2aEZCN0t1LytCM2JmY1VPclZnZVdnZ0ZpRDhwRTI0M0FDU0ZoQ2kvTGtMYXVjL0FZK3R2UFVGMUtpUGpteEFNbHFBUU9zME9CZVBSUFdtQm10WGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiQy96c0ZZM0l4amQyWGpYMXNZY1dBVzd2ckkwNGFiellaallETy8yLzVWcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWDVsMXRlQVJSNmFnWGhaeWFFTE1jdyIsInBob25lSWQiOiIwZTMyYmUxYy1iYjdmLTQ5NjgtOWI5OC05YTA4OTQzZWUyZDUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1pCQWdXb2ZNTzcya2h4dTQxN2hRUnF3NVBFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJBQ2tTL29aWWNxWEUxd093ZlpNdTNVbFV4Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2M1BIRFI3NCIsIm1lIjp7ImlkIjoiMjY3NzY2NjA5MDI6ODhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QkfCdkI7wnZCM8J2QhPCdkI4g8J2QgfCdkJYg8J2QiPCdkIjwnZCIIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKUHh4dG9FRU1uT3VyMEdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjVlVWdUFIdTNjVzVIQkRLVHBrWUlqOGRaRzE5Ym5RdG1jME5JT2pSS2prPSIsImFjY291bnRTaWduYXR1cmUiOiJ6aVNUbndVOFYrZFh2UkNHMW5ybnhLWjIyN1I5dDBBZURXYXJ4cUxLeWtySy9NVXhySThGSzdkWmV5RVhsZ1lhU1hxeWgrb0JZZ1BaR2M3QWNvaXRBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYzh6c1I5bmxEME56aHErTm9la0NQOVlvRmhNWVdQeU5ERWt2cHZWZEFqVkhVdDF6UEZCZG5wbXlDc1JiM01LQ2xZaVQ1TUNTVUdvTGRmeEtLQW51Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjc3NjY2MDkwMjo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYRlZGYmdCN3QzRnVSd1F5azZaR0NJL0hXUnRmVzUwTFpuTkRTRG8wU281In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5NDk5MzUxfQ==",  // ADD Your Session Id 
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
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kq248w.jpeg", //do not change alive img url
ALIVE_MSG: process.env.ALIVE_MSG || "ʜɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ🚀", // change alive msg if you wish
};

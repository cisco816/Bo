const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://lakiya:Baj618@hqj1@cluster0.k03glqt.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://giub.com/SuhailMd";
global.gurl  =process.env.GURL  || "https://whats.com/channel/0029Va9thusJP20y643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VasJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋʏ ❖" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94783337816";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_35_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYwLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNixcbiAgICAgICAgNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDc5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNixcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0MixcbiAgICAgICAgNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc0LFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNb3dadThVNE9vd2JuOVh4a1U0cXVrTUE5Sk9TaXBPdVRDamNiYmZ6RnhvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFa0FGdmd6d1RsQ25SYmY5RFpiMUV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgyZTViNzE2LTY4YmQtNDY2Ni04ODI1LTczYTM2ODQ1ZDhiZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgMzcsXG4gICAgICAyMTYsXG4gICAgICA2NCxcbiAgICAgIDExNyxcbiAgICAgIDIyNixcbiAgICAgIDIyOCxcbiAgICAgIDEsXG4gICAgICAxOTMsXG4gICAgICAyNDQsXG4gICAgICAxNjksXG4gICAgICAxNzcsXG4gICAgICA3NyxcbiAgICAgIDk3LFxuICAgICAgODksXG4gICAgICAxMzAsXG4gICAgICAyNDIsXG4gICAgICAxNTQsXG4gICAgICAxNTAsXG4gICAgICA2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyMzMsXG4gICAgICAxMDMsXG4gICAgICAyMjQsXG4gICAgICA5NCxcbiAgICAgIDExLFxuICAgICAgMTQzLFxuICAgICAgMjIxLFxuICAgICAgMjI0LFxuICAgICAgNTQsXG4gICAgICA1OCxcbiAgICAgIDUxLFxuICAgICAgMjAsXG4gICAgICA5NCxcbiAgICAgIDg4LFxuICAgICAgNzIsXG4gICAgICAxOTEsXG4gICAgICA1MCxcbiAgICAgIDIwNSxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYU01MQVFURVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjU2NzEwMTg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI1OTgwMjgyNzMyNTQ0OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnpGeEo0RkVKVzNnTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmU01WRXBCeFZtV1dZcmd4d2FNNkhQMm81Qi9kWlVVOXQzSjNGWTRJSDJBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJ5aE1CT2g0MmVydWRjSGR6NjdqVFRFRHJ0YlQvZCtCMkNSR1NLQ09ZZU82WHEzZlZ2MEJMYktYYXhNTzZVR1poaFBVTE9sZ0l1cHN3N1hzRzVZUUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZlaWMvak42VFdJeWY1ZVpod2NzN0NhNFpETlBsc3VaZ20rTVZ5VW10WVRWZmVOaG1WZUpJR3FPTk9xUHMwb21IWEZtZ2Q1bGpIVkY5d2dvQlFiTkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI1NjcxMDE4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTY3MTcwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZGR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkZHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYXV2OVVhTHFVN0ZJMTg3SkNzSWpiWDVvWi84SWx4cndqT2V2THpuaFUydz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDA2MjE0ODEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2NzE3MDc2MjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "> ʟᴀᴋʏ ❖" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʟᴀᴋʏ_Mᴅ",
  ownername:process.env.OWNER_NAME|| "❝ɪᴛꜱ ᴍᴇ❞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

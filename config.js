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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_57_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjExLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3LFxuICAgICAgICA0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM4LFxuICAgICAgICAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY1LFxuICAgICAgICA4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlo4TFlVTjlLKyt6T1lZU2ZBNVU5aEJHTUo0cWh5anB4dFJ2L3RnM1FaVms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTM0NDE3OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIxRTIwMjM2NjQ3MkFFOTkwNzIxQTUwRUYwQkVDMUVEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTMwMjI2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzEzNDQxNzkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFOTNBRkI0OTQ4NUQ3MUE5MzlCMDBGQzE2RjhDMThFOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzMDIyNjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid2tnQV9GSnVSMS01YW13WkQxUEZpQVwiLFxuICBcInBob25lSWRcIjogXCI5MGJkZjA0NC1iNTdlLTQ0YWItYjUxOC0wOTcyNTI5NmNjZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICAyMTksXG4gICAgICAyMjAsXG4gICAgICA1NixcbiAgICAgIDE1MixcbiAgICAgIDIyNSxcbiAgICAgIDE2OCxcbiAgICAgIDI1NSxcbiAgICAgIDI4LFxuICAgICAgMzAsXG4gICAgICAxMDIsXG4gICAgICAxNTYsXG4gICAgICAxNDAsXG4gICAgICA2NixcbiAgICAgIDksXG4gICAgICAxMzcsXG4gICAgICAxNzAsXG4gICAgICAxMzcsXG4gICAgICAxMjksXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICA0MSxcbiAgICAgIDIsXG4gICAgICAyMjAsXG4gICAgICAyMTIsXG4gICAgICA3NSxcbiAgICAgIDc0LFxuICAgICAgMTIzLFxuICAgICAgMTY0LFxuICAgICAgMTc4LFxuICAgICAgMTMwLFxuICAgICAgMjMyLFxuICAgICAgMjIsXG4gICAgICAyMzksXG4gICAgICAxMjYsXG4gICAgICAyNDUsXG4gICAgICAxNjksXG4gICAgICA5NyxcbiAgICAgIDU5LFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4yWEtDM0VOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxMzQ0MTc5MzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzk2MjA2NDA2NTc2NDA6MThAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pyTXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUtkdlo4R0VQTHc2Yk1HR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDdzBJclB6cHhyYnRYcm5Dekdwa1owQlo3eHdqVmVqQ1MxR2l2cGdXdmdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNLWW5qK1RqVU9CbUVTc0o5alVoSzlYTXhkMy9zRkdhNU83WlQ1cVFGTGxjenQvUi9yRnBQVXlDRGYvN29aeXNRQ3JTTWJtTW02ZHhxNkpUWGkrbkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImY2dTlReU9GMXRmVEV2bHh6UWZaUUlscnZjMzBUcDg0SFpoSVBkbkZ3R1BHZmdiMitWU2d2Z3ZSbmsxRXlhNW5KZzRwc3hLL25UYi9OMlA2QkpQa0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzEzNDQxNzkzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzAyMjYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkdaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKR1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3cmZJTkx2MHZ3WHV3ZnhXQ1gyT2grVUVkcGZqZWRmUU5Ya2ZSajBkWEYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NzY2Mjc2NTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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

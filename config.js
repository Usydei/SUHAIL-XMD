const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "SUHAIL_09_22_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDczLFxuICAgICAgICAzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDksXG4gICAgICAgIDUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc4LFxuICAgICAgICA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQwLFxuICAgICAgICA1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTMGRWNWdxaElPcFRzSzZCR3RhNnIxOEtuT2hLNVdOT3ZGSjlvZ04vQy9zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpLW5MNjdMV1ROU0dqUlluNzZkRHJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImEyNDkwMWYwLTZmMDQtNDdjYy1hNDE3LTJhNDg0YmMxYzNhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDEyMixcbiAgICAgIDI0MCxcbiAgICAgIDcxLFxuICAgICAgOSxcbiAgICAgIDEzOSxcbiAgICAgIDUsXG4gICAgICAxMjgsXG4gICAgICA0MSxcbiAgICAgIDk2LFxuICAgICAgMTU1LFxuICAgICAgNTEsXG4gICAgICAxMTMsXG4gICAgICAyNTMsXG4gICAgICA2LFxuICAgICAgMTQ4LFxuICAgICAgOTMsXG4gICAgICAxNzcsXG4gICAgICAxOTQsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAyMDcsXG4gICAgICAxNTYsXG4gICAgICAxMzgsXG4gICAgICAxMjUsXG4gICAgICAyMDcsXG4gICAgICAxODIsXG4gICAgICAxMzIsXG4gICAgICAxMDAsXG4gICAgICAyLFxuICAgICAgMTU2LFxuICAgICAgNjAsXG4gICAgICAxODcsXG4gICAgICAyNTMsXG4gICAgICAxNDgsXG4gICAgICAxOTEsXG4gICAgICAxOTcsXG4gICAgICA1NixcbiAgICAgIDEzMCxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjgxVFYzM0RQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNjYxODcwMDI6ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMTUzMjk2ODU5MTU3OTo4MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJRzJ2NnNDRU0zdWxMc0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllnNHI1VW5mTjdpNHNuTlFLaCt5UDJUTnF2TTlad0IyMnkwdmw3d3lKdzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS1dFREpKUXZhRnZ0bDZ6QWZYNnRZZlQraGEweWl3emYyYWRUMTlsa0NKT2VVWkRUU3ZkUlMwNnN4Q1NobWJYOEUySERoSW45ZU1vc1lZcVZHb2dOQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicDVqRjBsNE1BZi9iQjN4UElVTG81UHJCZW1BRkViNGFDd2FDZTlwUVUzem5MeGl3T0hwZnJkYzVTc2dWS0c4cGZsOFQ4K2UxMExVVDdmZWFHQ0RuQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTY2MTg3MDAyOjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDY4NjU0NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923166187002";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

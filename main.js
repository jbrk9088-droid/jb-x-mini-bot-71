case "menu":

let menu = `
╔═══『 JB X MINI BOT 71 』═══

👑 Owner : JB PAPA 71
⚡ Version : 1.0

╭─「 MAIN MENU 」
│ .menu
│ .ping
│ .alive
│ .owner
╰────────

╭─「 DOWNLOAD 」
│ .song
│ .video
│ .tiktok
│ .fb
╰────────

╭─「 GROUP 」
│ .welcome on/off
│ .antilink on/off
│ .kick
│ .promote
╰────────

╭─「 FUN 」
│ .joke
│ .meme
│ .quote
╰────────

Telegram:
${config.TELEGRAM}

WhatsApp Channel:
${config.WHATSAPP_CHANNEL}

`

await sock.sendMessage(from,{
image:{url: config.MENU_IMAGE},
caption: menu
})
break

let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Runtime'
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let anu = `RUNTIME HANA BOTZ
Bot Aktif Selama :
${uptime}`
  conn.sendButtonImg(m.chat, fla + teks, anu, wm2, 'Back', '.help', m) 
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}

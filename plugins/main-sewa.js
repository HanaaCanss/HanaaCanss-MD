let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'sewa bot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai Kakk👋
Ini List Harga Sewanya Kakk
╔═══〔 Pembayaran Via 〕══➣
╠➥ PRIVATE CHAT = FREE
╠➥ 1 GRUP / BULAN = 5K
╠➥ 1 GRUP PERMANENT = 15K
╔═══〔 Pembayaran Via 〕══➣
╠➥ Dana : ${dana}
╠➥ Pulsa : ${pulsa}
╔═══〔 FITUR 〕══➣
╠➥ 24 JAM ONLINE
╠➥ FAST RESPOND
╠➥ VVIP BOT / PREMIUM
╠➥ FITUR 200+
╚═══════════════════➣

Arigatou!

Contact person Owner:
wa.me/${numberowner} (Owner)`
  conn.sendButtonImg(m.chat, fla + teks, anu, wm2, 'Back', '.help', m) 
}
handler.help = ['sewabot', 'sewa']
handler.tags = ['xp', 'info']
handler.command = /^(sewabot|sewa)$/i

module.exports = handler
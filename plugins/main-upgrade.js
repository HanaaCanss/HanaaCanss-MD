let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Upgrade & Support'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo kakk 👋
━━━〔 ıll *Upgrade Prem* llı 〕━━㉿
━━━━━━━━━━━━━━━━━━━━
━━━〔 ıll *HARGA* llı 〕━━㉿
⬡ *1 BULAN* 5.000
⬡ *PERMANEN :* 10.000
┗━━━━━━━━━━━━━━━━━━㉿
┏━━━〔 ıll *PAYMENT* llı 〕━━㉿
⬡ *DANA:* ${dana}
⬡ *GOPAY:* ${gopay}
⬡ *PULSA:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━㉿
Jika anda berminat hubungi nomor di bawah!!

⟩» *jangan lupa donasi kak* «⟨

${saweria}

Terimakasih yang sudah mendonasikan untuk bot ini

Contact person Sewa Bot:
wa.me/${numberowner} (Owner)
`
  conn.send3ButtonImg(m.chat, fla + teks, anu, wm, 'Donasi', '.donasi', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['upgrade']
handler.tags = ['info']
handler.command = /^(upgrade|upgradeakun)$/i

module.exports = handler

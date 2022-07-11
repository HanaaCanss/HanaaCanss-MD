let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo kakk 👋
━━━〔 ıll *Sewa Bot* llı 〕━━㉿

〔 ıll *HARGA* llı 〕
⬡ *PERMANENT 1 grup:* 5.000
⬡ *PERMANEN 2 grup:* 7.000
⬡ *PERMANEN 3-6 grup:* 10.000

〔 ıll *PAYMENT* llı 〕
⬡ *QRIS:* Klik Tombol Payment Di Bawah
⬡ *PULSA:* ${pulsa}

Support All Payment

*Note :*
⬡ Screenshot Bukti Pembayaran
⬡ Hubungi Owner Sebelum Membeli
⬡ Dana Yang Sudah Masuk Tidak Akan Di Kembalikan

Jika anda berminat hubungi nomor di bawah!!
Contact person Sewa Bot:
wa.me/${numberowner} (Owner)

⟩» *jangan lupa donasi kak* «⟨

${saweria}

Terimakasih yang sudah mendonasikan untuk bot ini

`
  conn.send3ButtonImg(m.chat, fla + teks, anu, wm, 'Donasi', '.donasi', 'Payment', '.payment', 'Menu', '.menu', m) 
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewahana)$/i

module.exports = handler

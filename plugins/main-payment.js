//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = payment[Math.floor(Math.random() * payment.length)]
	conn.sendButtonImg(m.chat, url, '*QRIS ALL PAYMENT*\nscan -> isi nominal -> bayar\n\n_Note: Screenshot Pembayaran & Kirim Ke Owner!_', wm2, 'Back', '.menu', m)
}
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^(payment)$/i

module.exports = handler

global.payment = [
"https://telegra.ph/file/7d7fb2c2fc02043cc6e6f.jpg",
"https://i.postimg.cc/1XL1rH8m/20220711-102827.jpg"
]
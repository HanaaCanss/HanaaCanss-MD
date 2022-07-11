//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = kobo[Math.floor(Math.random() * kobo.length)]
	conn.sendButtonImg(m.chat, url, 'Nihhh Kakk🍭', wm2, 'Next', '.kobo', m)
}
handler.help = ['kobo']
handler.tags = ['hololive']
handler.command = /^(kobo)$/i

module.exports = handler

global.kobo = [
"https://i.postimg.cc/BvSXgK2M/Kobo-Kanaeru-full-3615742.jpg",
"https://i.postimg.cc/bYt1C4ZM/Kobo-Kanaeru-full-3615737.jpg",
"https://i.postimg.cc/28dhmvF7/Kobo-Kanaeru-full-3615738.png",
"https://i.postimg.cc/2S2WLDtq/Kobo-Kanaeru-full-3615740.jpg",
"https://i.postimg.cc/PxBYfQR2/Kobo-Kanaeru-full-3615741.jpg"
]

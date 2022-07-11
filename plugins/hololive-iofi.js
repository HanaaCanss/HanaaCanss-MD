//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = iofi[Math.floor(Math.random() * iofi.length)]
	conn.sendButtonImg(m.chat, url, 'Nihhh Kakk🍭', wm2, 'Next', '.iofi', m)
}
handler.help = ['iofi']
handler.tags = ['hololive']
handler.command = /^(iofi)$/i

module.exports = handler

global.iofi = [
"https://i.postimg.cc/GtL8mgjP/Airani-Iofifteen-full-3004292.png",
"https://i.postimg.cc/59gQR1xs/Airani-Iofifteen-full-3027392.jpg",
"https://i.postimg.cc/5NtQcGyb/Airani-Iofifteen-full-3040965.jpg",
"https://i.postimg.cc/8zJFc6LY/Airani-Iofifteen-full-3068626.png",
"https://i.postimg.cc/85DsZXx8/Airani-Iofifteen-full-3109885.jpg"

]

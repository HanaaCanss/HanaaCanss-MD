//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = anya[Math.floor(Math.random() * anya.length)]
	conn.sendButtonImg(m.chat, url, 'Nihhh Kakk🍭', wm2, 'Next', '.anya', m)
}
handler.help = ['anya']
handler.tags = ['hololive']
handler.command = /^(anya)$/i

module.exports = handler

global.anya = [
"https://i.postimg.cc/vHL1VsKr/20220712-000923.png"
]
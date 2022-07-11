//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = reine[Math.floor(Math.random() * reine.length)]
	conn.sendButtonImg(m.chat, url, 'Coming soon.', wm2, 'Next', '.reine', m)
}
handler.help = ['reine']
handler.tags = ['hololive']
handler.command = /^(reine)$/i

module.exports = handler

global.reine = [
"https://i.postimg.cc/vHL1VsKr/20220712-000923.png"
]
//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = ollie[Math.floor(Math.random() * ollie.length)]
	conn.sendButtonImg(m.chat, url, 'Coming soon.', wm2, 'Next', '.ollie', m)
}
handler.help = ['ollie']
handler.tags = ['hololive']
handler.command = /^(ollie)$/i

module.exports = handler

global.ollie = [
"https://i.postimg.cc/vHL1VsKr/20220712-000923.png"
]
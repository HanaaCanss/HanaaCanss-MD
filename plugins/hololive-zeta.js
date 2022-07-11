//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = zeta[Math.floor(Math.random() * zeta.length)]
	conn.sendButtonImg(m.chat, url, 'Coming soon.', wm2, 'Next', '.zeta', m)
}
handler.help = ['zeta']
handler.tags = ['hololive']
handler.command = /^(zeta)$/i

module.exports = handler

global.zeta = [
"https://i.postimg.cc/vHL1VsKr/20220712-000923.png"
]
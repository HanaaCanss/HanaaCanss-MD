//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = kaela[Math.floor(Math.random() * kaela.length)]
	conn.sendButtonImg(m.chat, url, 'Coming soon.', wm2, 'Next', '.kaela', m)
}
handler.help = ['kaela']
handler.tags = ['hololive']
handler.command = /^(kaela)$/i

module.exports = handler

global.kaela = [
"https://i.postimg.cc/vHL1VsKr/20220712-000923.png"
]
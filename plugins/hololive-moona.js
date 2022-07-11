//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = moona[Math.floor(Math.random() * moona.length)]
	conn.sendButtonImg(m.chat, url, 'Nihhh Kakk🍭', wm2, 'Next', '.moona', m)
}
handler.help = ['moona']
handler.tags = ['hololive']
handler.command = /^(moona)$/i

module.exports = handler

global.moona = [
"https://i.postimg.cc/BvSXgK2M/Kobo-Kanaeru-full-3615742.jpg",
"https://i.postimg.cc/FF8k41QH/Moona-Hoshinova-full-2909987.jpg",
"https://i.postimg.cc/xTmJTY0y/Moona-Hoshinova-full-2988559.png",
"https://i.postimg.cc/K8yK1VjX/Moona-Hoshinova-full-2993118.jpg",
"https://i.postimg.cc/ZnGWFsLd/Moona-Hoshinova-full-3034219.jpg"
]

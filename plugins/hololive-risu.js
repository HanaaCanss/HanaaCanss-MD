//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = risu[Math.floor(Math.random() * risu.length)]
	conn.sendButtonImg(m.chat, url, 'Nihhh Kakk🍭', wm2, 'Next', '.risu', m)
}
handler.help = ['risu']
handler.tags = ['hololive']
handler.command = /^(risu)$/i

module.exports = handler

global.risu = [
"https://i.postimg.cc/FFwXmksz/Ayunda-Risu-full-3045882.png",
"https://i.postimg.cc/T36858bX/Ayunda-Risu-full-3288360.png",
"https://i.postimg.cc/1zmLMpMC/Ayunda-Risu-full-3305382.png",
"https://i.postimg.cc/3RWzQYs2/Ayunda-Risu-full-3333089.png",
"https://i.postimg.cc/W3KC2xVC/Ayunda-Risu-full-3342927.jpg",",
]
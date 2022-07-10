//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = donghua[Math.floor(Math.random() * donghua.length)]
	conn.sendButtonImg(m.chat, url, 'Punya Nya Jastin 😅👆', wm2, 'Next', '.donghua', m)
}
handler.help = ['donghua']
handler.tags = ['anime']
handler.command = /^(donghua)$/i

module.exports = handler

global.donghua = [
"https://i.postimg.cc/ZnHF6C5d/IMG-20220710-WA0094.jpg",
"https://i.postimg.cc/MHqmcyqw/IMG-20220710-WA0095.jpg",
"https://i.postimg.cc/LXMz7zqP/IMG-20220710-WA0096.jpg",
"https://i.postimg.cc/90LZrKLP/IMG-20220710-WA0097.jpg",
"https://i.postimg.cc/J4T5nDgw/IMG-20220710-WA0098.jpg",
"https://i.postimg.cc/mgJ33xB8/IMG-20220710-WA0099.jpg",
"https://i.postimg.cc/FHd3HP3c/IMG-20220710-WA0100.jpg",
"https://i.postimg.cc/FK0Sj7PH/IMG-20220710-WA0101.jpg",
"https://i.postimg.cc/Df6qj47W/IMG-20220710-WA0102.jpg",
"https://i.postimg.cc/vHS5MRgb/IMG-20220710-WA0103.jpg",
"https://i.postimg.cc/26mZTrJF/IMG-20220710-WA0104.jpg",
"https://i.postimg.cc/Hx27hF1G/IMG-20220710-WA0105.jpg",
"https://i.postimg.cc/Y2zx5yzC/IMG-20220710-WA0106.jpg",
"https://i.postimg.cc/QCJSSf0V/IMG-20220710-WA0107.jpg",
"https://i.postimg.cc/LXfxg9Pt/IMG-20220710-WA0109.jpg",
"https://i.postimg.cc/HngBQq0f/IMG-20220710-WA0110.jpg",
"https://i.postimg.cc/J4KPkds2/IMG-20220710-WA0111.jpg",
"https://i.postimg.cc/rpRJ7VQB/IMG-20220710-WA0112.jpg",
"https://i.postimg.cc/CMGvFKSY/IMG-20220710-WA0113.jpg",
"https://i.postimg.cc/FshT1QHS/IMG-20220710-WA0114.jpg",
"https://i.postimg.cc/4dz1N8Cw/IMG-20220710-WA0115.jpg",
"https://i.postimg.cc/kGgt3w72/IMG-20220710-WA0116.jpg",
"https://i.postimg.cc/wxwmcKkL/IMG-20220710-WA0117.jpg",
"https://i.postimg.cc/ZqN8VfqZ/IMG-20220710-WA0118.jpg",
"https://i.postimg.cc/PJX1fTQr/IMG-20220710-WA0119.jpg",
"https://i.postimg.cc/fTWvDj8j/IMG-20220710-WA0120.jpg",
"https://i.postimg.cc/3xdCDr5k/IMG-20220710-WA0121.jpg",
"https://i.postimg.cc/sD25tf2T/IMG-20220710-WA0125.jpg",
]
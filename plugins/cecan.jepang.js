//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = cecanjepang[Math.floor(Math.random() * cecanjepang.length)]
	conn.sendButtonImg(m.chat, url, 'NihhKakk✨', wm2, 'Next', '.cecanjepang', m)
}
handler.help = ['cecanjepang']
handler.tags = ['cecan']
handler.command = /^(cecanjepang)$/i

module.exports = handler

global.cecanjepang = [
"https://a.top4top.io/p_1962cau3w1.jpg",
"https://k.top4top.io/p_1962w2hyp1.jpg",
"https://j.top4top.io/p_1962ufc7p1.jpg",
"https://h.top4top.io/p_19629eev81.jpg",
"https://d.top4top.io/p_1962ahcw21.jpg",
"https://c.top4top.io/p_1962qiubc1.jpg",
"https://b.top4top.io/p_1962ck87p1.jpg",
"https://l.top4top.io/p_1962i85aq1.jpg",
"https://i.top4top.io/p_19629cg431.jpg",
"https://g.top4top.io/p_1962o5sp41.jpg",
"https://f.top4top.io/p_1962vn5rc1.jpg",
"https://e.top4top.io/p_1962nvj4g1.jpg",
"https://d.top4top.io/p_1962847na1.jpg",
"https://c.top4top.io/p_1962tt38s1.jpg",
"https://b.top4top.io/p_1962vpyp71.jpg",
"https://a.top4top.io/p_1962fyik51.jpg",
"https://k.top4top.io/p_1962q7ura1.jpg",
"https://l.top4top.io/p_19625eppj1.jpg",
"https://j.top4top.io/p_196252lk91.jpg",
"https://i.top4top.io/p_1962p9nlk1.jpg"
]


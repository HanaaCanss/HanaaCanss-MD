//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = cosplay[Math.floor(Math.random() * cosplay.length)]
	conn.sendButtonImg(m.chat, url, 'Nihh Kakk🍬', wm2, 'Next', '.cosplay', m)
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^(cosplay)$/i

module.exports = handler

global.cosplay = [
"https://i.ibb.co/WD3ZK2K/main-qimg-4bce93181d6bc8e544036cda41e70291-lq.jpg",
"https://i.ibb.co/NZ6Lfyd/6a60fcb180b9b7f18e23724c66f043b6.jpg",
"https://i.ibb.co/JjvM45P/animesher-com-tenten-ino-cosplayers-cute-cosplay-girls-best-anime-cosplay-1176896.jpg",
"https://i.ibb.co/yNrRrP1/886000bd60ebcdee06845aa2af8f07ee.jpg",
"https://i.ibb.co/MSHTvbS/e5f286ded660f38e8f4db73c8dfafba8.jpg",
"https://i.ibb.co/0JcZ8mh/8f93b9d3f67264f8a8a46f33d9bd1cc6.jpg",
"https://i.ibb.co/grygDDx/744d6ae02467fff7dd3a3d026dc1ae4f.jpg",
"https://i.ibb.co/z2jYxq7/FTFou-FUUUAAb9k-V.jpg",
"https://i.ibb.co/nMmkB1y/x279605-jpg-pagespeed-ic-PEc-Mo-Faq0m.jpg",
"https://i.ibb.co/5GtHGtH/45c33cfbb9c2cf44d18c43335e9d240e.jpg",
"https://i.ibb.co/qBfCjLb/1625759106-34-Anime-Naruto-Character-Tarumi-Mei-Cn-senyamiku.jpg",
"https://i.ibb.co/vXPKRQL/top-cosplayer-enako-nailed-the-90.jpg",
"https://i.ibb.co/NSBfwjj/av5-MOVZ-700b.jpg",
"https://i.ibb.co/0MWj850/350cb91f3a7498de8d4ea0297dcb28be.jpg",
"https://i.ibb.co/swqh54v/5fa786f41f042a9eee0c937e-Senya-Miku-3.jpg",
"https://i.ibb.co/Q87p21y/58064-56582-4627.jpg",
"https://i.ibb.co/SR9xrqc/9eb7b9b8d3b7fbaa0b6030de4159e425.jpg",
"https://i.ibb.co/cDKyJSc/Dinb-XAa-U8-AAo7-Db.jpg",
"https://i.ibb.co/Y832qKP/d2d26333a1e3dc6d6c616a5b3d8fd105.jpg"

]
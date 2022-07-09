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
"https://i.ibb.co/Y832qKP/d2d26333a1e3dc6d6c616a5b3d8fd105.jpg",
"https://i.ibb.co/0BxmfLp/15d120fd8d65d19a50266981d6e0978a.jpg",
"https://i.ibb.co/myvn4Z6/e8282c7fac9f6548a7429695af1b0c61.jpg",
"https://i.ibb.co/LvtZT81/9fcac149fe0965cdc158888ffbf8350b.jpg",
"https://i.ibb.co/Wn9NjJN/70aca088d3e16b644ee70afcd2ff9e99.jpg",
"https://i.ibb.co/9V7v6Ly/8364cf41efc8fc99a2b5eea1ab70cb56.jpg",
"https://i.ibb.co/b3HvCRq/63ebe41d3835a4e693f2fdab70c31076.jpg",
"https://i.ibb.co/q9xVPsn/cc5ef38752f5c608353751717ff8395f.jpg",
"https://i.ibb.co/RcL6NG5/c4427cde8ae04a6f4d45a64e3a2f97e9.jpg",
"https://i.ibb.co/FKRns41/b4fd3a56696450ba5b7b7d7f7f2a7414.png",
"https://i.ibb.co/Y7RJYbM/1a2865ae26d70b6a477c8311d43c735b.jpg",
"https://i.ibb.co/DM2ydxq/6098dae77714a052109ae5822c219885.jpg",
"https://i.ibb.co/47FM8bP/42736e56ddfe7c399a7bd45e04ee4f27.jpg",
"https://i.ibb.co/27dYbZ5/3a3efc8f03eb6122b0e04841f4177c2c.jpg",
"https://i.ibb.co/bFs7v2F/10c96a967c607b49f24d239bdb21d162.jpg",
"https://i.ibb.co/bLCMRSF/Japanese-Teen-Girls-Swimsuit-Women-2021-Cute-Anime-Cosplay-Bikini-Costume-2-Pieces-Swimwear-Lolita-H.webp",
"https://i.ibb.co/7RJwDzb/animesher-com-anna-cosplay-k-cosplay-cute-anime-girl-635889.jpg",
"https://i.ibb.co/nj9ndmp/25bed47c9e4e198a6a577946559a93be.jpg",
"https://i.ibb.co/1K6T6mj/a00e570f19b591a63a0b51a7f9b698b8.jpg",
"https://i.ibb.co/rMJ1qJw/Anime-Cosplay-Working-Cell-Platelets-Cosplay-Cute-Costume-Halloween-Haikyuu-Japanese-Cos-Women-Top-s.jpg",
"https://i.ibb.co/f9j8f40/e396a7e586e845348b2baa540705c7dd.jpg",
"https://i.ibb.co/0yQ5DGb/7fa9ed3e213db5dae77d0bb8aee53cd8.jpg",
"https://i.ibb.co/q5VPN3Z/de1ce301f927c0568343095c93415e45.jpg",
"https://i.ibb.co/gWZX0sx/ef6c48d482734b8a8e3f935c7f49a408.jpg",
"https://i.ibb.co/BKHg6Hv/ba82f7794da9216d20164c944831f80e.jpg",
"https://i.ibb.co/F4FgMpF/soul-land-xiaowu-cosplay-1639628587-112001ed.jpg",
"https://i.ibb.co/VTXsZvT/30839424e3b601edc0f8dcf4b533a51e.jpg",
"https://i.ibb.co/DDmX9RC/3794fe189d0b5193c39b5c1bc9df907d.jpg"
]
let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '6285828764046-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'LiST PRICE PREMIUM AKUN', 
    orderTitle: `hanaabotz`,
    thumbnail: 'https://telegra.ph/file/3c83bc5fa0cbcdc6a1e75.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.reply(m.chat, price1, ftroli)
}

handler.help = ['upgrade','upgradeprem']
handler.tags = ['info']
handler.command = /^(upgrade|upgradeprem)?$/i

module.exports = handler

let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.waifu.pics/sfw/neko'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nyaww~🐾', wm2, 'NEXT', '.randomneko', m)
}
handler.help = ['randomneko']
handler.tags = ['anime']
handler.command = /^(randomneko)$/i

module.exports = handler

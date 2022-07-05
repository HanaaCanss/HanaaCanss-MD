//BUATAN HANAA OM JANGAN DI APUS
//©HANAACANSS
let handler = async (m, { conn, command }) => {
let nyenye = `https://api.zeeoneofc.xyz/api/cecan/${command}?apikey=${zeeone}`
    conn.sendButtonImg(m.chat, nyenye, 'Nihh Kakk✨', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['vietnam','japan','korea','thailand','malaysia','indonesia','china']
handler.tags = ['cecan']
handler.command = /^(vietnam|japan|korea|thailand|malaysia|indonesia|china)$/i
handler.register = false
handler.limit = true
module.exports = handler
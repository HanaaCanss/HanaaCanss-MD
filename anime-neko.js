let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw 'Error Website Lagi Down Kakk'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, json.url, '', 'Nyawww~🐾', wm2, 'NEXT', '.randomneko', m)
}
handler.help = ['randomneko']
handler.tags = ['anime']
handler.command = /^(randomneko)$/i

handler.limit = false

module.exports = handler
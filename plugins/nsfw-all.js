//Case Buatan Hanaa Jangan Diganti Ganti Tar Eror
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api-rikubotz.herokuapp.com/api/nsfw/${command}?apikey=${hanakey}'
  if (!res.ok) throw 'Error Website sedang down')
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.result, '', 'Tcihhh Dasarr', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'cum', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'jahy', 'maid', 'manga', 'neko', 'orgy', 'panties', 'pussy','sfwneko', 'tentacles', 'thighs', 'yuri']
handler.tags = ['nsfw','premium']
handler.command = /^(ahegao|ass|bdsm|blowjob|cum|ero|femdom|foot|gangbang|glasses|hentai|jahy|maid|manga|neko|orgy|panties|pussy|sfwneko|tentacles|thighs|yuri)$/i
handler.premium = true
handler.register = true
module.exports = handler
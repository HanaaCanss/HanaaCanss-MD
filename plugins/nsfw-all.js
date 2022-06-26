let handler = async (m, { conn, command }) => {
let nyenye = `https://apikeyhanaa.herokuapp.com/api/nsfw/${command}?apikey=${zenzkey}`
    conn.sendButtonImg(m.chat, nyenye, 'TcihhhDasarr', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'cum', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'jahy', 'maid', 'manga', 'neko', 'orgy', 'panties', 'pussy','sfwneko', 'tentacles', 'thighs', 'yuri']
handler.tags = ['nsfw']
handler.command = /^(ahegao|ass|bdsm|blowjob|cum|ero|femdom|foot|gangbang|glasses|hentai|jahy|maid|manga|neko|orgy|panties|pussy|sfwneko|tentacles|thighs|yuri)$/i
handler.premium = true
handler.register = true
handler.limit = true
//buatan hyzer sama hanaa euyy jangan di delete
module.exports = handler
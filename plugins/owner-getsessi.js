let fs = require('fs')

let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File hanaa.data.json')
   // let seso = await fs.readFileSync('./index.js.data.json') // klo lu run di panel
    let sesi = await fs.readFileSync('./hanaa.data.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'hanaa.data.json' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['host']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.rowner = true

module.exports = handler

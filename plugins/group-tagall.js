let handler = async(m, { conn, text, participants }) => {
  let teks = `   ⊙─〔 ıll *TAG ALL* llı 〕─⊙
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` ㇱ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n⫹⫺ 𝙷𝚊𝚗𝚊𝚊𝙲𝚊𝚗𝚜𝚜できる`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall|tagal|tall|t)$/i

handler.group = true
handler.admin = true
handler.botadmin = true
module.exports = handler

let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Prem Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5 } detik`)
    for (let i of anu) {
    	let iklan = 'https://i.postimg.cc/C58xN0WB/20220712-194515.png'
    await delay(500)
    conn.send2ButtonImg(i, iklan, `${pesan}`,wm2, 'Menu', '.menu', 'OWNER', '.owner', null).catch(_ => _)
    }
  m.reply(`Sukses Mengirim Advertise Ke ${anu.length} Group`)
}
handler.help = ['iklan <teks>']
handler.tags = ['owner']
handler.command = /^((iklan|advertise)$/i

handler.premium = false
handler.limit = true
handler.owner = true

module.exports = handler

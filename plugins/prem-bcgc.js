let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Prem Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5 } detik`)
    for (let i of anu) {
    await delay(500)
    conn.sendBut(i, `${pesan}`,wm2, 'OWNER', '.owner', null).catch(_ => _)
    }
  m.reply(`Sukses Mengirim Broadcast Prem Ke ${anu.length} Group`)
}
handler.help = ['bcgcprem <teks>']
handler.tags = ['premium']
handler.command = /^((broadcastgc|bcgc)prem)$/i

handler.premium = true

module.exports = handler

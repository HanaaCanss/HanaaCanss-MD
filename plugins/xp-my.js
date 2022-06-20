let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let toos = fs.readFileSync('./media/bank.jpg')
    let anu =`╔═══❑ 「 BALANCE 」 ❑════
╠🍭╠➥📇 *Name*: ${user.name}
╠🍭╠➥🆔 *Nomor* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
╠🍭╠➥🎨 *Age* : ${user.registered ? '' + user.age : ''}
╠🍭╠➥🎫 *Limit*: ${user.limit}
╠🍭╠➥💹 *Money*: ${user.money}
╠🍭╠➥📍 *Role*: ${user.role}
╠🍭╠➥💳 *Bank* : ${user.atm}
╠🍭╠➥🎟 ️ *Limit Game* : ${user.glimit}
╠🍭╠➥📊 *Level*: ${user.level}
╚══❑ ✨ *Exp*: ${user.exp}
`
    conn.sendButtonImg(m.chat, toos, anu, wm2, 'Inventory 🐦', '.inv', m) 
}
handler.help = ['dompet', 'dompet @user', 'bank', 'bank @user']
handler.tags = ['xp', 'rpg']
handler.command = /^(my|dompet|bank)$/i

module.exports = handler

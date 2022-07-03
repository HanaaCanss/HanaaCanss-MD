/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Ini List Harga Sewanya:

LIST:
PER GRUP 1 BULAN = 5K
PER GRUP PERMANENT = 20K

PEMBAYARAN VIA:
Dana : 083187631714
Pulsa : 083187631714

FITUR:
24 JAM ONLINE
FAST RESPOND
VVIP / PREMIUM
300+ FITUR

_*JIKA INGIN MEMBELI HUBUNGI OWNER TERLEBIH DAHULU YAHH*_`
conn.sendBut(m.chat, esce, wm3, 'Arigatou', 'arigatou', m) 
}
handler.help = ['sewabot', 'sewa']
handler.tags = ['xp','info']
handler.command = /^(sewabot|sewa)$/i

module.exports = handler

import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭═══《《【𝗪𝗶𝘁𝘁𝘆-𝗕𝗼𝘁】》》══╮
╿   
╿➪ *𝗛ola, ${taguser}*
╿≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣║
╿➪ *Owner:* @gabrielacosta_15
╿➪ *Numero:* wa.me/5493491456806
╿➪ *Bot ofc:* wa.me/3726188894
╿➪ *Fecha:* ${date}
╿➪ *Tiempo activo:* ${uptime}
╿➪ *Usuarios:* ${rtotalreg}
╰══╡★★★★★★★★★★╞══╯

╒⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯╕
╿ *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
╿≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣┃
≔ 🎖️ 𝐍𝐢𝐯𝐞𝐥: ${level} 
≔ 🧰 𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐢𝐚: ${exp}
≔ ⚓ 𝐑𝐚𝐧𝐠𝐨: ${role}
≔ 💎 𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬: ${limit}
≔ 💸 𝐖𝐢𝐭𝐭𝐲𝐂𝐨𝐢𝐧𝐬: ${money}
≔ 🪙 𝐓𝐨𝐤𝐞𝐧𝐬: ${joincount}
≔ 🎟️ 𝐏𝐫𝐞𝐦𝐢𝐮𝐦: ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╘⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯╛
╒⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯╕
╿ *< 𝔹𝕆𝕋 𝕆𝔽ℂ 𝕆 𝕊𝕌𝔹 𝔹𝕆𝕋 />*
╿≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣┃
≔ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
╘⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯╛

╒⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯╕
╿ *< 𝕃𝕀𝕊𝕋𝔸 𝔻𝔼 𝕄𝔼ℕ𝕌𝕊 />*
╿≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
≔🔖 *${usedPrefix}menu2 | ${usedPrefix}menustickers*
≔🃏 *${usedPrefix}menu3 | ${usedPrefix}menujuegos*
≔📥 *${usedPrefix}menu4 | ${usedPrefix}menudescargas*
≔⚖️ *${usedPrefix}menu5 | ${usedPrefix}menurpg*
╘⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯╛
`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

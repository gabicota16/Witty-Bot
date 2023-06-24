let handler = async (m, { conn, isPrems}) => { //lastmiming 
 const fkontak = { 
         "key": { 
         "participants":"0@s.whatsapp.net", 
             "remoteJid": "status@broadcast", 
             "fromMe": false, 
             "id": "Halo"     
         }, 
         "message": { 
             "contactMessage": { 
                 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
             } 
         }, 
         "participant": "0@s.whatsapp.net" 
     } 
  
 let user = global.db.data.users[m.sender] 
 let premium = user.premium   
 let minar = `${pickRandom(['Que pro 😎 has minado', 
 '🌟✨ Genial!! Obtienes', 
 'WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes', 
 'Has Minado!!', 
 '😲 Lograste Minar la cantidad de', 
 'Tus Ingresos subiran gracias a que minaste', 
 '⛏️⛏️⛏️⛏️⛏️ Minando', 
 '🤩 SII!!! AHORA TIENES', 
 'La minaria esta de tu lado, por ello obtienes', 
 '😻 La suerte de Minar', 
 '♻️ Tu Mision se ha cumplido, lograste minar', 
 '⛏️ La Mineria te ha beneficiado con', 
 '🛣️ Has encontrado un Lugar y por minar dicho lugar Obtienes', 
 '👾 Gracias a que has minado tus ingresos suman', 
 'Felicidades!! Ahora tienes','⛏️⛏️⛏️ Obtienes'])}` 
  
 let pp = 'data:image/jpeg;base64,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' 
  
 let aqua = `${pickRandom([0, 2, 3, 1, 5])}` * 1 
 let aquapremium = `${pickRandom([2, 4, 6, 7, 5, 9])}` * 1 
  
 let rock = `${pickRandom([6, 9, 0, 12, 2])}` * 1 
 let rockpremium = `${pickRandom([13, 9, 17, 20, 25])}` * 1 
  
 let pancingan = `${pickRandom([1, 0, 2, 1, 0, 0, 0])}` * 1 
 let pancinganpremium = `${pickRandom([1, 3, 4, 9, 2, 5, 8])}` * 1 
  
 const recompensas = {         
   aqua: premium ? aquapremium : aqua, 
   rock: premium ? rockpremium : rock, 
   pancingan: premium ? pancinganpremium : pancingan, 
 } 
 //let xp = Math.floor(Math.random() * 2000) 
 let money = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1 
 let moneypremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1 
  
 let time = user.lastcoins + 600000 //10 min  
 if (new Date - user.lastcoins < 600000) return await conn.reply(m.chat, `*⏱️ 𝙑𝙪𝙚𝙡𝙫𝙖 𝙚𝙣 ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖𝙧 𝙢𝙞𝙣𝙖𝙣𝙙𝙤 ${global.rpgshopp.emoticon('money')}⛏️*\n\n*𝙂𝙚𝙩 𝙗𝙖𝙘𝙠 𝙞𝙣 ${msToTime(time - new Date())} 𝙩𝙤 𝙢𝙞𝙣𝙚 ${global.rpgshopp.emoticon('money')}⛏️*`, fkontak,  m) 
 user.money += premium ? moneypremium : money   
 let texto = '' 
 for (let reward of Object.keys(recompensas)) { 
     if (!(reward in user)) continue 
     user[reward] += recompensas[reward] 
 texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`} 
  
 let gat = `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*\n\n🍁 𝗕 𝗢 𝗡 𝗢\n${texto}\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}` 
 await conn.sendFile(m.chat, pp, 'witty.jpg', gat, fkontak) 
 /*conn.sendHydrated(m.chat, `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*`,`🍁 𝗕 𝗢 𝗡 𝗢\n` + texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, pp, md, '𝓦𝓲𝓽𝓽𝔂 - 𝓑𝓸𝓽', null, null, [ 
 ['𝙈𝙞𝙣𝙖𝙧 𝙀𝙓𝙋 ⚡', `.minar`], 
 ['𝙈𝙞𝙣𝙖𝙧 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 💎', `.minar3`], 
 ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `.menu`] 
 ], m,)*/ 
 user.lastcoins = new Date * 1   
 } 
 handler.help = ['minar2'] 
 handler.tags = ['gata'] 
 handler.command = ['minar2', 'miming2', 'mine2', 'minarwittycoins', 'minarcoins', 'minarwitty']  
 handler.fail = null 
 handler.exp = 0 
 export default handler 
  
 function msToTime(duration) { 
 var milliseconds = parseInt((duration % 1000) / 100), 
 seconds = Math.floor((duration / 1000) % 60), 
 minutes = Math.floor((duration / (1000 * 60)) % 60), 
 hours = Math.floor((duration / (1000 * 60 * 60)) % 24) 
  
 hours = (hours < 10) ? "0" + hours : hours 
 minutes = (minutes < 10) ? "0" + minutes : minutes 
 seconds = (seconds < 10) ? "0" + seconds : seconds 
  
 return minutes + " m y " + seconds + " s "  
 }   
  
 function pickRandom(list) { 
 return list[Math.floor(Math.random() * list.length)]}

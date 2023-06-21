let fila, columna, sopaNube, sopaPalabra, sopaDir, userSP, cambioLetra, diamante = null  
  let intentos = 0  
  let handler = async (m, { conn, text, usedPrefix, command}) => {  
  
  if (!userSP) {  
  userSP = m.sender.split("@")[0]  
  await conn.reply(m.chat, `*@${m.sender.split("@")[0]} REGISTRADO EN EL JUEGO* ✅`, m, { mentions: [m.sender] })  
  }  
  
  async function generarSopaDeLetras() {  
  const LADO = 16 // Si es alto o bajo, puede dar error, deja como esta  
  let sopaDeLetras = new Array(LADO);  
  
  for (let i = 0; i < LADO; i++) {  
  sopaDeLetras[i] = new Array(LADO)  
  }  
  
  const PALABRAS = ['MESSI', 'CAMPEON']  
  const PALABRA = PALABRAS[Math.floor(Math.random() * PALABRAS.length)]  
  
  let filaInicial = Math.floor(Math.random() * LADO)  
  let columnaInicial = Math.floor(Math.random() * LADO)  
  const DIRECCIONES = ["horizontal", "vertical", "diagonalDerecha", "diagonalIzquierda"]  
  const DIRECCION = DIRECCIONES[Math.floor(Math.random() * DIRECCIONES.length)]  
  
  let palabraAgregada = false  
  while (!palabraAgregada) {  
  filaInicial = Math.floor(Math.random() * LADO)  
  columnaInicial = Math.floor(Math.random() * LADO)  
  
  // Algoritmo para garantizar la palabra   
  let palabraEntra = true;  
  for (let i = 0; i < PALABRA.length; i++) {  
  if (DIRECCION === "horizontal" && (columnaInicial + i >= LADO)) {  
  palabraEntra = false  
  break;  
  } else if (DIRECCION === "vertical" && (filaInicial + i >= LADO)) {  
  palabraEntra = false  
  break;  
  } else if (DIRECCION === "diagonalDerecha" && (filaInicial + i >= LADO || columnaInicial + i >= LADO)) {  
  palabraEntra = false  
  break;  
  } else if (DIRECCION === "diagonalIzquierda" && (filaInicial + i >= LADO || columnaInicial - i < 0)) {  
  palabraEntra = false  
  break;  
  }  
  }  
  
  // Si la palabra entra, agregar a la sopa de letras  
  if (palabraEntra) {  
  for (let i = 0; i < PALABRA.length; i++) {  
  if (DIRECCION === "horizontal") {  
  sopaDeLetras[filaInicial][columnaInicial + i] = PALABRA.charAt(i)  
  } else if (DIRECCION === "vertical") {  
  sopaDeLetras[filaInicial + i][columnaInicial] = PALABRA.charAt(i)  
  } else if (DIRECCION === "diagonalDerecha") {  
  sopaDeLetras[filaInicial + i][columnaInicial + i] = PALABRA.charAt(i)  
  } else {  
  sopaDeLetras[filaInicial + i][columnaInicial - i] = PALABRA.charAt(i)  
  }  
  }  
  palabraAgregada = true;  
  }  
  }  
  
  // Diseño   
  const LETRAS_POSIBLES = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ"  
  const numerosUni = ["⓿", "❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾", "❿", "⓫", "⓬", "⓭", "⓮", "⓯", "⓰", "⓱", "⓲", "⓳", "⓴"]  
  let sopaDeLetrasConBordes = ""  
  sopaDeLetrasConBordes += "   *╭" + "┄".repeat(LADO) + '┄┄' + "╮*\n" + [...Array(LADO).keys()].map(num => numerosUni[num]).join(" ") + "\n"  
  //sopaDeLetrasConBordes += "   *╭" + "┄".repeat(LADO) + '┄┄' + "╮*\n"  
  
  for (let i = 0; i < LADO; i++) {  
  let fila = numerosUni[i] + " "  
  
  for (let j = 0; j < LADO; j++) {  
  if (sopaDeLetras[i][j]) {  
  fila += sopaDeLetras[i][j] + " "  
  } else {  
  let letraAleatoria = LETRAS_POSIBLES.charAt(Math.floor(Math.random() * LETRAS_POSIBLES.length))  
  fila += letraAleatoria + " "  
  }  
  }  
  fila += ""  
  sopaDeLetrasConBordes += "   *╰" + "┄".repeat(LADO) + '┄┄' + "╯*"  
  }  
  //sopaDeLetrasConBordes += "   *╰" + "┄".repeat(LADO) + '┄┄' + "╯*"  
  sopaDeLetrasConBordes = sopaDeLetrasConBordes.replace(/[a-zA-Z]/g, letra => LETRAS_POSIBLES[letra.charCodeAt() - 65] || letra)  
  
  await m.reply(`🔠 *SOPA DE LETRAS* 🔠  
  *PALABRA:* \`\`\`"${PALABRA}"\`\`\`  
  *TIENE 3 MINUTOS PARA ENCONTRAR LA RESPUESTA CORRECTA!!*  
    
  *ESCRIBA EL NÚMERO DE FILA Y COLUMNA DEL COMIENZO DE LA PRIMERA LETRA _"${PALABRA.charAt(0)}"_ DE LA PALABRA _"${PALABRA}"_ TIENE _${intentos}_ INTENTOS!!*  
    
  *EJEMPLO:*  
  ❇️ \`\`\`${usedPrefix + command} 28\`\`\`  
  ➡️ \`\`\`FILA 2\`\`\`    ⬇️ \`\`\`COLUMNA 8\`\`\``.trim())  
  await m.reply(`🔠 *${PALABRA.split("").join(" ")}* 🔠\n\n` + sopaDeLetrasConBordes.trimEnd())  
  fila = filaInicial   
  columna = columnaInicial  
  sopaNube = sopaDeLetrasConBordes  
  sopaPalabra = PALABRA   
  sopaDir = DIRECCION.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^./, str => str.toUpperCase())  
  }  
  
  // Condiciones del juego  
  cambioLetra = sopaDir  
  let tagUser = userSP + '@s.whatsapp.net'  
  if (userSP != m.sender.split("@")[0]) {  
  await conn.reply(m.chat, `*@${tagUser.split("@")[0]} ESTA JUGANDO SOPA DE LETRAS 🔠 ACTUALEMENTE*`, m, { mentions: [tagUser] })  
  return  
  }  
  if (intentos === 0) {  
  intentos = 3    
  generarSopaDeLetras()  
  resetUserSP(sopaDir)  
  
  async function resetUserSP() {  
  await new Promise((resolve) => setTimeout(resolve, 2 * 60 * 1000)) // 2 min  
  if (intentos !== 0) {  
  await conn.reply(m.chat, `*@${m.sender.split("@")[0]} TE QUEDA UN MINUTO!!* 😨`, m, { mentions: [m.sender] })  
  }  
  await new Promise((resolve) => setTimeout(resolve, 3 * 60 * 1000)) // 3 min  
  if (intentos !== 0) {  
  await conn.reply( m.chat, `*@${m.sender.split("@")[0]} EL TIEMPO SE HA ACABADO!!* 😧\n\n*LA PALABRA _"${sopaPalabra}"_ SE ENCONTRABA EN LA DIRECCIÓN _${sopaDir}_ DE LA FILA _${fila}_ Y COLUMNA _${columna}_*`, m, { mentions: [m.sender] })  
  fila = null, columna = null, sopaNube = null, sopaPalabra = null, sopaDir = null, userSP = null, cambioLetra = null  
  intentos = 0  
  }  
  }}else {  
  if (`${fila}${columna}` == text) {  
  if (sopaPalabra.length <= 4) {  
  diamante = 4  
  } else if (sopaPalabra.length <= 8) {  
  diamante = 8  
  } else if (sopaPalabra.length <= 11) {  
  diamante = 24  
  } else {  
  diamante = 32  
  }  
  global.db.data.users[m.sender].limit += diamante  
  
  await m.reply(`\`\`\`🎊 HAS GANADO ${diamante} ${rpgshop.emoticon('limit')}!!\`\`\`\n\n*CORRECTO!! LA PALABRA _"${sopaPalabra}"_ SE ENCONTRABA EN LA DIRECCIÓN _${cambioLetra}_ DE LA FILA _${fila}_ Y COLUMNA _${columna}_*`)  
  fila = null, columna = null, sopaNube = null, sopaPalabra = null, sopaDir = null, userSP = null, cambioLetra = null  
  intentos = 0  
  return  
  }else{  
  if (intentos === 1) {  
  fila = null, columna = null, sopaNube = null, sopaPalabra = null, sopaDir = null, userSP = null, cambioLetra = null  
  intentos = 0  
  await m.reply(`🫡 *AGOTASTE LOS INTENTOS!! LA PALABRA _"${sopaPalabra}"_ SE ENCONTRABA EN LA DIRECCIÓN _${cambioLetra}_ DE LA FILA _${fila}_ Y COLUMNA _${columna}_*`)  
  return    
  } else {  
  intentos -= 1  
  await m.reply(`😮‍💨 *INCORRECTO. TE QUEDAN _${intentos}_ INTENTOS!!*${intentos === 1 ? '' : `\n*PALABRA A ENCONTRAR:* \`\`\`${sopaPalabra}\`\`\``}\n\n${intentos === 1 ? `\`\`\`💡 PISTA!!\`\`\`\n*LA PALABRA _${sopaPalabra}_ SE ENCUENTRA EN LA DIRECCIÓN _"${cambioLetra}"_*\n\n` : ''}${sopaNube}`)  
  return  
  }}  
  }}  
  
  handler.command = /^(sopita)$/i  
  export default handler
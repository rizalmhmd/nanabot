let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `https://wa.me/${nomorown.split`@`[0]}`
  let teksnomor = `${htki} *OWNER* ${htka}
โฆ https://wa.me/${nomorown.split`@`[0]} โฆ
------- ${nameown} -------
๐ฐ๐ ๐ ๐ฎ๐: wa.me/6281255642719 nomor new gua sv aja
๐ฐ๐ ๐๐๐ฐ๐ ๐๐ข๐ง๐ค : wa.me/62895326032289 
๐ฃ๐๐ง๐ ๐๐ง ๐๐ง๐๐ก2 ๐ฅ๐ฎ ๐ฌ๐๐ฆ๐ ๐๐๐ฐ๐ ๐๐ข๐ง๐ค ๐ ๐ ๐ข๐๐ฎ๐ฉ ๐ฅ๐ฎ ๐๐ข๐๐ฎ๐ง๐ข๐
๐ฎ *Note:*
โข Owner  tidak menerima save contact tol
โข Owner berhak blockir tanpa alasan
โข Berbicaralah yang sopan & tidak spam
โข No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *๐ Nama* : สษชแดสสษขแดษดแดขแดข
${htjava} *โ๏ธ Nama RL* : แดสส
${htjava} *โ๏ธ Gender* : Boys
${htjava} *๐ Agama* : Islam
${htjava} *โฐ Tanggal lahir* : 3 แดแดสส 2006
${htjava} *๐จ Umur* : 16
${htjava} *๐งฎ Kelas* : 1 sแดแด
${htjava} *๐งฉ Hobby* : แดแดแดษชาษชแดแดsษช แดแดสแดษดษขแดแดแด สแดษดแดแด,ษดษขแดแดษชษดษข,สแดแดแดแดแด,แดแดสแด๐ฟ
${htjava} *๐ฌ Sifat* : ASIK DAH KALAU DAH KENAL
${htjava} *๐บ๏ธ Tinggal* : แดแดสแดษชแด, แดแดษดษขษขแดสแดษดษข
${htjava} *โค๏ธ แดแดแดแดส?* : NแดษดแดIแดแดแด:3

${htjava} *๐ท ษชษดsแดแดษขสแดแด* : ${sig}
โขยทโโโโโโโโโโโโโโโโโโโโโโโโโโยทโข
`
  let teks = 'Pilih dibawah kak ! o(ใ๏ผพโฝ๏ผพใ)o'
const sections = [
   {
	title: `${htjava} OWNER โโโโโโโโโยทโข`,
	rows: [
	    {title: "๐ฑ โข Nomor", rowId: ".owner nomor"},
	{title: "๐จ โข Biodata", rowId: ".owner bio"},
	]
    },{
	title: `${htjava} SUPPORT ME โโโโโโโยทโข`,
	rows: [
	    {title: "๐น โข Donasi", rowId: ".donasi"},
	{title: "๐ โข Sewa", rowId: ".sewa"},
	{title: "๐ โข Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "๐ท Instagram", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler

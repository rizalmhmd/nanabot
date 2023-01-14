import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let pp = 'https://telegra.ph/file/24ddd490fb668978bf0fa.jpg'
const ftex = {
            key: { 
                 fromMe: false,
                 participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
                       },
            message: { 
               "extendedTextMessage": {
                        "text": 'By Riell',
                        "title": botdate,
                        "jpegThumbnail": await (await fetch(pp)).buffer(),
                               }
                             } 
                            }
conn.reply(m.chat, author, ftex)
}
handler.command = ['ftext']

export default handler
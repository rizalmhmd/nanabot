import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `👋Hai, ${ucapan()}

${user.banned ? '📮Maaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi' : `💬 Ada yg bisa ${this.user.name} bantu?`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : '📮𝐍𝐨𝐭𝐞 : 𝐣𝐚𝐧𝐠𝐚𝐧 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭𝐧𝐲𝐚 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐑𝐢𝐞𝐥𝐥𝐗𝐃', [user.banned ? 'OWNER' : 'OWNER', user.banned ? '.owner' : '.owner'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari 🌆"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}


// jasa buat plugins by FokusDotId (Fokus ID)
let date = new Date()

let day = date.getDay()
let tgl = date.getDate()
let bln = date.getMonth()
let jam = date.getHours()
let thn = date.getFullYear()

let ucapan = 'selamat malam'
let fullDay = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
let fullMonth = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

if (jam <= 3) ucapan = 'selamat malam'
else if (jam <= 11) ucapan = 'selamat pagi'
else if (jam <= 14) ucapan = 'selamat siang'
else if (jam <= 19) ucapan = 'selamat sore'

document.getElementById('ucapan').innerHTML = ucapan
document.getElementById('tanggal').innerHTML = `${fullDay[day]}, ${tgl} ${fullMonth[bln]} ${thn}`
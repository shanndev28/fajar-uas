document.getElementById('batal').addEventListener('click', function () {
    document.getElementById('nama').value = ''
    document.getElementById('pesan').value = ''
    document.getElementById('email').value = ''
    document.getElementById('subjek').value = ''
})

document.getElementById('kirim').addEventListener('click', function () {
    let nama = document.getElementById('nama').value
    let pesan = document.getElementById('pesan').value
    let email = document.getElementById('email').value
    let subjek = document.getElementById('subjek').value

    if (nama === '' || pesan === '' || email === '' || subjek === '') {
        alert('Harap mengisi semua input')
    } else if (!/@/.test(email)) {
        alert('Masukkan email dengan benar')
    } else {
        if (!['gmail.com', 'yahoo.com', 'outlook.com'].includes(email.split('@')[1])) {
            alert('Email tidak didukung')
        } else {
            alert(`terimakasih kak ${nama}, pesan kamu sudah berhasil terkirim :)`)

            document.getElementById('nama').value = ''
            document.getElementById('pesan').value = ''
            document.getElementById('email').value = ''
            document.getElementById('subjek').value = ''
        }
    }

})
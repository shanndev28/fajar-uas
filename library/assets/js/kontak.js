document.getElementById('batal').addEventListener('click', function () {
    document.getElementById('nama').value = ''
    document.getElementById('kota').value = ''
    document.getElementById('alamat').value = ''
    document.getElementById('komentar').value = ''
})

document.getElementById('kirim').addEventListener('click', function () {
    let nama = document.getElementById('nama').value
    let kota = document.getElementById('kota').value
    let alamat = document.getElementById('alamat').value
    let komentar = document.getElementById('komentar').value

    if (nama === '' || komentar === '' || kota === '' || alamat === '') {
        alert('Harap mengisi semua input')
    } else {
        alert(`terimakasih kak ${nama}, komentar kamu sudah berhasil terkirim :)`)

        document.getElementById('nama').value = ''
        document.getElementById('kota').value = ''
        document.getElementById('alamat').value = ''
        document.getElementById('komentar').value = ''
    }

})
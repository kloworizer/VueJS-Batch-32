var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 6000},
    {name: 'komik', timeSpent: 1000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
let waktu = 10000
const exec = async() => {
    let sisawaktu = await readBooksPromise(waktu, books[0])
    sisawaktu = await readBooksPromise(sisawaktu, books[1])
    sisawaktu = await readBooksPromise(sisawaktu, books[2])
    sisawaktu = await readBooksPromise(sisawaktu, books[3])
}

exec()
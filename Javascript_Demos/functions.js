var degisken = "Değer";


function sayiUret(ustlimit = 49){
    console.log(degisken)
    return Math.ceil(Math.random() * ustlimit);
}

//keyword

console.log(degisken)

console.log(sayiUret())

var sayi1 = sayiUret(6000)
var sayi2 = sayiUret(60)
var sayi3 = sayiUret(60)
var sayi4 = sayiUret(60)
var sayi5 = sayiUret()
var sayi6 = sayiUret()


console.log('kolon : ' + sayi1 + ' '+
                         sayi2 + ' '+
                         sayi3 + ' '+
                         sayi4 + ' '+
                         sayi5 + ' '+
                         sayi6 + ' ')
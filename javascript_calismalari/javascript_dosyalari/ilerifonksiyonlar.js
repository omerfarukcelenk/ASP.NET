var selamFonksiyonu1 = function selam(){
    console.log("Merhaba");
}
selamFonksiyonu1();

const selamFonksiyonu2 = () => {
    console.log("Merhaba 2");
    console.log("Birşey");
}

selamFonksiyonu2();


const selamFonksiyonu3 = (mesaj) => {
    console.log(mesaj);
}

selamFonksiyonu3("Naber la");


var topla = (sayi1,sayi2)=>{
    return sayi1+sayi2;
}

let toplam = topla(3,4)
console.log(toplam)
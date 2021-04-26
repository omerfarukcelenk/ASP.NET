class Personel{
    
    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }
    
    
    kaydet(){
        console.log("Personel Kaydedildi: '${this.ad}'");
    }
}

const personel1 = new Personel("Engin","Demiroğ");

personel1.kaydet();
personel1.ad="Engin";
console.log(personel1.ad);
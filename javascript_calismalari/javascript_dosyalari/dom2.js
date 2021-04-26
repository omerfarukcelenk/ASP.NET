var intro1 = document.getElementById("intro1");

var mesaj = document.getElementById("mesaj");

mesaj.innerHTML = intro1.innerHTML;

var tumListeler = document.getElementsByTagName("ul");
var sehirler = tumListeler[0];

tumElemanlar = sehirler.getElementsByTagName("li");

for(i=0;i<tumElemanlar.length;i++){
    alert(tumElemanlar[i].innerHTML);
}
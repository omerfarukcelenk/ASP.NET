var isimelemanlar─▒ = document.getElementsByName("musteriAdi");

var ismim = document.getElementById("ismim").addEventListener("mouseover",rengiDegistir);

function rengiDegistir(){
    document.getElementById("divrenk").style.color = "blue" ;
    var isimelemanlar─▒ = document.getElementsByName("musteriAdi");
    isimelemanlar─▒[0].value = "osman"
}
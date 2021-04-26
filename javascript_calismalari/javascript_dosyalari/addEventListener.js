var isimelemanları = document.getElementsByName("musteriAdi");

var ismim = document.getElementById("ismim").addEventListener("mouseover",rengiDegistir);

function rengiDegistir(){
    document.getElementById("divrenk").style.color = "blue" ;
    var isimelemanları = document.getElementsByName("musteriAdi");
    isimelemanları[0].value = "osman"
}
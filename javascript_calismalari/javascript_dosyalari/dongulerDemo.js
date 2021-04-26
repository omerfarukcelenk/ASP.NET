var kullanicilar = [
    {email:"omerfar0133@gmail.com",sifre:"965787"},
    {email:"selobaba3321@gmail.com",sifre:"965787"}
]

var tivitler =[
    {email:"omerfar0133@gmail.com",tivit:"bugün niye herkes sinirli"},
    {email:"omerfar0133@gmail.com",tivit:"bugün niye herkes sinirli 2"},
    {email:"selobaba3321@gmail.com",tivit:"bugün niye herkes datli"}
]

var email = prompt("email?");
var sifre = prompt("sifre?");

function kullanıcıVarmi(email,sifre){
    console.log(email);
    console.log(sifre);
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar[i].sifre == sifre){
            return true;
        }
    }
    return false;
}


function giris()
{
    if(kullanıcıVarmi(email,sifre))
    {
        console.log(tivitler);
    }
    else{
        console.log("kullanıcı adı veya şifresi hatalı");
    }
}
giris(email,sifre)

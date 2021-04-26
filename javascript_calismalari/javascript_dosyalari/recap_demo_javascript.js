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

function giris()
{
    if( (email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||  (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre) )
    {
        console.log(tivitler);
    }
    else{
        console.log("kullanıcı adı veya şifresi hatalı");
    }
}
giris(email,sifre)

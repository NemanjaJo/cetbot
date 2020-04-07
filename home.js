
function Provera(){ 
var email=document.getElementById("email").value;
var name=document.getElementById("name").value;
var password=document.getElementById("password").value;
var passwordrt=document.getElementById("passwordrt").value;
var er=document.getElementById("err");
er.innerHTML="";
    try {
        if(email==""     
        || name=="" 
        || password=="")
        throw "Morate popuniti sva polja!";
        else if(name.length<=3)
        throw "Username mora sadrzati najmanje 4 karaktera";
        else if(password!=passwordrt)
        throw "Sifre se ne poklapaju!";
        else if(EmailCheck(email)==false)
        throw "Vas email mora sadrzati @";
        else if(password.length<4)
        throw "Vasa sifra je slaba, unesite vise karaktera!";
        else {
            localStorage.setItem("korisnik",name);
           window.location.href="index.html";  
        }
    }
    catch (error)
    {
        er.innerHTML=error;
    }
}
function EmailCheck(arg)
{
 for(var i=0;i<arg.length;i++)
 {
   if(arg.charAt(i)=="@")
   return true;
 }
 return false;
}
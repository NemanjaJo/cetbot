function proveri()
{
    
    
    var forma = document.forma;
    var ime=forma.ime.value;
    var email=forma.email.value;
    var poruka=document.getElementById("por").value;
    document.getElementById("er").innerHTML="";

    try {
        if(ime==""||email==""||poruka=="")
        {
        document.getElementById("er").style="color:red";
        throw "Morate popuniti sva polja!";
        }
        else if(Et(email)==false)
        {
        document.getElementById("er").style="color:red";
        throw "Vas email mora da sadrzi @";
        }
        else {
            document.getElementById("er").style="color:green";
            throw "Vasa poruka je poslata!"; 
        }
        
    }
    catch(error)
    {
        document.getElementById("er").innerHTML=error;
    }
    
    
}
function Et(tekst){
    for(var i=0;i<tekst.length;i++)
    {
      if(tekst.charAt(i)=="@")
        return true;
    }
    return false;
}
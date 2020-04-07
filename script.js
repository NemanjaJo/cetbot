var json = {
"passus1" : [
{
"tekst":"Na sajtu www.telefoni.com su prikazani svi najaktuelniji modeli i cene koje se svakodnevno azuriraju. Internet prodaja mobilniSvet.net posluje po principu porucivanja mobilnih telefona sa isporukom na Vasu adresu sirom Srbije i Bosne i Hercegovine."
}
],
"passus2" :[
{
"tekst":"Artikli prikazani na sajtu su deo nase ponude i ne podrazumeva da su dostupni u svakom trenutku. Raspolozivost mozete proveriti pozivanjem Call Centra.",
}
],
"passus3" :[
{
"tekst":"Online shop se bavi prodajom iskljucivo NOVIH I ORIGINALNIH mobilnih telefona"
}
]
};
document.getElementById("ispis").innerHTML=
json.passus1[0].tekst+"<br><br>"
+json.passus2[0].tekst+
"<br><br>"+json.passus3[0].tekst;

document.getElementById("welcome").innerHTML="Dobrodosao: "+localStorage.getItem("korisnik");




function kupi()
{
    alert('Uspesno ste kupili proizvod');
}
var i=0;
var images=[];
var time=3000;

images[0]="1.jpg";
images[1]="2.jpg";
images[2]="3.jpg";

function Slider()
{
    var slajder=document.getElementById('slide');
    slajder.src=images[i];
    if(i< images.length-1)
    i++;
    else i=0;

    setTimeout("Slider()",time);
}
window.onload=Slider;





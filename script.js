var kitalalando=0;
var uzenet;
var tippBox;
var tippSzam = 5;
window.onload=function(){
    uzenet=document.getElementById("üzenet")
    tippBox=document.getElementById("tipp")
    uzenet.innerText="lek a játékba";
    kitalalando=Math.round(Math.random()*100);
    console.log("kitalalando: "+kitalalando);

    document.getElementById("gomb").onclick=tippelt;
};

function tippelt(){
     console.log("Megnyomtak!"+tippBox.value);
if(tippBox.value.length!=0)
{
   
   document.getElementById("tippszam").innerHTML='<b>'+(tippSzam--)+'</b>';



   tipp=parseInt(tippBox.value);
   var vissza="";
   if(tipp > kitalalando) vissza="Túl nagy a tipped";
   else if(tipp < kitalalando) vissza="Túl kicsi a tipped";
   else vissza="Gratulálunk eltaláltad"; 
   uzenet.innerText=vissza;
}
};


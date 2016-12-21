var opciones=["Piedra","Papel","Tijeras"]; //array
var marcadorUsuario=0;
var marcadorMaquina=0;

function calcular(valor){
var aleatorio;
var divresulado;
var piedra=0;
var papel=1;
var tijera=2;
var gana = "<span style='color:yellow;'> Ganaste wii</span>";
var pierde = "<span style='color:red;'> Perdiste buu</span>";
var empata = "<span style='color:blue;'> Empate :/ </span>";

aleatorio=Math.floor(Math.random()*3);
divresulado=document.getElementById("resultado");
divmarcador=document.getElementById("marcador");
mensaje="";

var opcionUsuario=valor;
var opcionMaquina=aleatorio;

mensaje +="<div>Elegiste <b>" + opciones[opcionUsuario]+"</b></div>";
mensaje +="<div>La máquina eligió <b>"+ opciones[opcionMaquina]+"</b></div>";

mensaje +="<div style='font-size:1.3em; padding:10px;'>";
//definir si gana, pierde o empata
if(opcionUsuario==piedra)
{
if(opcionMaquina==piedra)
{
mensaje += empata;
}
if(opcionMaquina==papel)
{
mensaje += "La piedra pierde ante el papel, chaaale" + pierde;
marcadorMaquina++;
}
if(opcionMaquina==tijera)
{
mensaje += "La piedra rompe las tijeras, yaaaay" + gana;
marcadorUsuario++;
}
}

if(opcionUsuario==papel)
{
if(opcionMaquina==piedra)
{
mensaje += "El papel envuelve a la piedra, niceee" + gana;
marcadorUsuario++;
}
if(opcionMaquina==papel)
{
mensaje += empata;
}
if(opcionMaquina==tijera)
{
mensaje += "El papel pierde ante las tijeras, buuuu" + pierde;
marcadorMaquina++;
}
}

if(opcionUsuario==tijera)
{
if(opcionMaquina==piedra)
{
mensaje += "Las tijeras pierden ante la piedra, ni sigas intentando" + pierde;
marcadorMaquina++;
}
if(opcionMaquina==papel)
{
mensaje += "Las tijeras cortan el papel, ya era hora que ganaras" + gana;
marcadorUsuario++;
}
if(opcionMaquina==tijera)
{
mensaje += empata;
}
}
mensaje +="</div>";

//comentarios de pruebaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

//--- imprimimos resultados----
divresulado.innerHTML=mensaje;
divmarcador.innerHTML="<div>Marcador: Máquina <b>"+ marcadorMaquina +"</b> - <b>"+ marcadorUsuario +"</b> Usuario </div>";

}

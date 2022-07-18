function ChangeBackground() {

var colores = {0:["IndianRed", "#CD5C5C"] , 
1:["LightCoral" , "#F08080"], 2:["Silver" , "#C0C0C0"],
3:["Olive" , "#808000"], 4:["Aqua" , "#00FFFF"],
5:["Teal" , "#008080"], 6:["Amarillo" , "#FFFF00"],
7:["Rojo" , "#FF0000"], 8:["Verde" , "#008000"],
9:["Azul" , "#0000FF"], 10:["Morado" , "#6C3483"],}

  let fondo = document.getElementById("body");
  const TextoColor = document.getElementById("TextoColor");
  var seleccion = Math.floor(Math.random()*10);

    var NombreColor = colores[seleccion][0];
    var Cfondo = colores[seleccion][1];

    body.style.backgroundColor = Cfondo;
    TextoColor.innerText = NombreColor.toString();

}

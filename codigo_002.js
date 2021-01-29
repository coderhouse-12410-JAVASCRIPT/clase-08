// Obtenemos el div
var myElementByID = document.getElementById("myTexto");

myElementByID.value = 'Por favor ingresar datos'

console.log(myElementByID);

// <div> <- ParentNode -> remove el Child parrafo
//    <p id="myParrafo"> blabla </p>
// </div>

var parrafo = document.getElementById("myParrafo");
parrafo.parentNode.removeChild(parrafo); 

// <div id="contenedor">
// <- insertar aca una etiqueta p
//  <div id="bla">
//  </div>
// </div>

var myContenedor = document.getElementById("contenedor");

for( let i=0; i < 10; i++) {
    var myNewParrafo = document.createElement('p');
    myNewParrafo.innerHTML = "Este es mi nuevo parrafo copado " + i;
    myContenedor.appendChild(myNewParrafo);
}


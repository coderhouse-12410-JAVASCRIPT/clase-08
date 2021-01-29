
// Tenemos Este Div y adentro un P
//  <div id="header">
//     <p> Esto es un curso de Javascript en <strong>CoderHouse</strong>, gracias!</p>
//  </div>

// Obtenemos el div
var myElementByID = document.getElementById("header");

console.log(myElementByID);

myElementByID.innerText = "Hola, cambie";

var myElementByClass = document.getElementsByClassName("MyP");

// Trato de obtener el <p>
var myElementByTag = document.getElementsByTagName("p");

console.log(myElementByTag);

function MySuperButton(){
    this.buttonName = "mySuper Boton"
    this.myHTMLElement = "";// Creo un elemento con todo lo que quiero....
}


var miPrimerBoton = new MySuperButton()
var miSegundoBoton = new MySuperButton()


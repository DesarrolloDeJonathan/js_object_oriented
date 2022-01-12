// Cambiamos la extencion ya que estamos trabajando con metodos

import { PlatziClass } from "./main.mjs";
// Creamos una instancia de la clase que estamos importando

const clase67 = new PlatziClass({
  name: "JavaScript: orientado a objetos, basado en prototipos",
  videoID: "wertyuio;p87htreghtyuioouyjtrh",
});
/*
  ahora no podemos acceder a las funciones
  viedoPlay()
  videoStop()
  No funcionara ya que no las estamos exportando
*/

// Debemos hacer los con la clase (instancia) atravez de su metodo .reproduccir
clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

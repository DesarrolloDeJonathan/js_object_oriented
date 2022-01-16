/*
const objUno = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  edit_a() {
    this.a = "AAAAAAA";
  },
};

// Esta variable contendra a objUno con todas sus propiedades en string
const stringified_complex_object = JSON.stringify(objUno);

// Luego lo transformamos de nuevo a objeto
// Con esto evitamos que se toque estos objetos cuando hagamos una edicion en cualquiera de ellos
const objDos = JSON.parse(stringified_complex_object);

// El problema es que estos  no trabajan con metodos o funciones que tenga dentro el objeto a transformar
console.log(objUno.edit_a());
// Vemos que no esta el metodo
console.log(objDos);
*/

// Ejemplo de estructura de una funcion recursiva, no necesarimente tiene que ser igual
// function recursiva() {
//   if (/** Validacion */) {
//     // Lamados recursivos
//   }else {
//     // Llamados sin recursividad
//   }
// }

// Funciones Recursivas
const numeritos = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 435678, 7, 2, 3];
// Sin recursividad
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index];
//   console.log({ index, numerito });
//   // const element = array[index];
// }

// Lo mismo con recursividad
function recursiva(arrayNumbers) {
  if (arrayNumbers != 0) {
    const firstNum = arrayNumbers[0];
    console.log(firstNum);
    arrayNumbers.shift();
    return recursiva(arrayNumbers);
  }
}

const objUno = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  edit_a() {
    this.a = "A transform method";
  },
};

// const stringified_complex_object = JSON.stringify(objUno);
// const objDos = JSON.parse(stringified_complex_object);

// Creamos una funcion para saber si algo es un objeto
function isObject(subject) {
  // Validaremos con typeof si es igual a un objeto
  return typeof subject == "object";
  // Esta forma de comprobacion nos dara mejores resultados
  // return Object.prototype.toString.call(subject) == "[object Object]";
}
// Y otra para determinar si es un array
function isArray(subject) {
  // En este caso llamaremos al super prototipo array a su metodo estatico isArray y enviarle subject
  return Array.isArray(subject);
}

// Recbiremos un valor que evaluaremos en esta funcion deepCopy
function deepCopy(subject) {
  let copySubject;

  // Validamos si es un objeto o un array
  const subjectIsObject = isObject;
  const subjectIsArray = isArray;

  // Identificamos que es subject para darle determinado tratamiento
  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    // sino es ninguna de las dos podemos devolver sin mas
    return subject;
  }

  // Iteracion por cada una de las llaves o elementos de subject
  // Le agregara una llave a cada una de las iteraciones
  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      // llamado recursivo para hacer la validacion nuevamente
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        // Haremos push de cada una de las propiedades
        copySubject.push(subject[key]);
      } else {
        // Va a ser igual al elemto copia
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
}

// Demostracion
const objectDeep = deepCopy(objUno);
console.group("objectDeep Copy");
// Tenemos la copia del objeto completo incluyendo metodos y objetos
console.log(objectDeep);
// Ahora podemos alterar el original sin modificar la copia
console.log((objUno.a = "A de objUno"));
console.log(objUno);
console.log(objectDeep);
// Lo mismo si editamos objetos dentro de otros objetos
console.log((objUno.c.e = "EEEEEEEE"));
console.log(objectDeep);
console.groupEnd();
console.group("objectDeep Copy fallo en metodo");
// Tambien podemos llamar a los metodos dentro de nuestra copia
console.log(objectDeep.edit_a()); //Uncaught TypeError: objectDeep.edit_a is not a function
console.log(objectDeep);
console.log(objUno);
console.groupEnd();
// Ejemplo de estructura de una funcion recursiva, no necesarimente tiene que ser igual
// function recursiva() {
//   if (/** Validacion */) {
//     // Lamados recursivos
//   }else {
//     // Llamados sin recursividad
//   }
// }

// Funciones Recursivas
// const numeritos = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 435678, 7, 2, 3];
// Sin recursividad
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index];
//   console.log({ index, numerito });
//   // const element = array[index];
// }

// Lo mismo con recursividad
// function recursiva(arrayNumbers) {
//   if (arrayNumbers != 0) {
//     const firstNum = arrayNumbers[0];
//     console.log(firstNum);
//     arrayNumbers.shift();
//     return recursiva(arrayNumbers);
//   }
// }

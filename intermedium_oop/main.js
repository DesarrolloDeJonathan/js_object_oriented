const jonny = {
  name: "Jonny",
  age: 18,
  approvedCourses: ["Curso Uno"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

// Podriamos hacer jonny.addCourse('Curso') o jonny.name etc

// Pero esta vez usaremos los metodos o propiedades estaticas del super prototipo object
// Estos dos nos muestran un array con cada una de las propiedades que guardamos en el objeto jonny
// console.log(Object.keys(jonny));
// console.log(Object.getOwnPropertyNames(jonny));
// Este mostrara un array de arrays donde llave y valor se muestran como arrays
// Podremos acceder a ellas por medio de sus indices
// console.log(Object.entries(jonny));

// Aplicando getOwnPropertyDescriptors veremos otas propiedades dentro del objeto
// console.log(Object.getOwnPropertyDescriptors(jonny));
/* Resultado en consola
  Y vemos que se anade: writable enumerable configurable
{name: {…}, age: {…}, approvedCourses: {…}, addCourse: {…}}
addCourse: {writable: true, enumerable: true, configurable: true, value: ƒ}
age: {value: 18, writable: true, enumerable: true, configurable: true}
approvedCourses: {value: Array(1), writable: true, enumerable: true, configurable: true}
name: {value: 'Jonny', writable: true, enumerable: true, configurable: true}
*/

/* Usaremos un metodo estatico del super prototipo object
   para crear nuevas propiedades en nuestro objeto
   pero con la posibilidad de editar
*/
/* Este metodo estatico recibe tres argumentos:
    nombre del objeto donde vamos a trabajar
    nombre de la nueva propiedad que vamos a crear,
    y por ultimo un objeto con la lista de parametros
*/

console.log(Object.getOwnPropertyDescriptors(jonny));

Object.defineProperty(jonny, "navigator", {
  value: "Chrome",
  enumerable: false,
  writable: true,
  configurable: true,
});
console.group("enumerable");
console.log(Object.keys(jonny)); // no se enumera la propiedad navigator
console.log(Object.getOwnPropertyNames(jonny)); // Este si la muestra en la lista
console.groupEnd();

Object.defineProperty(jonny, "editor", {
  value: "VSCode",
  enumerable: true,
  writable: false,
  configurable: true,
});
console.group("writable");
console.log((jonny.editor = "atom")); // Muestra Atom en consola al parecer lo guardo
console.log(jonny.editor); // Pero vemos que no se aplico el cambio
console.log(delete jonny.editor); // Si bien no pueden cambiarme el editor si pueden borrarlo
console.log(jonny.editor); // resultado undefined
console.groupEnd();

Object.defineProperty(jonny, "terminal", {
  value: "WLS",
  enumerable: true,
  writable: true,
  configurable: false,
});

console.group("configurable");
// Para estas tres formas obtendremos el mismo resultado
console.log(jonny.terminal);
console.log(Object.keys(jonny));
console.log(Object.getOwnPropertyNames(jonny));

console.log((jonny.terminal = "cmder")); // Podemos alterar el nombre
console.log(delete jonny.terminal); // mas no borrarlo
console.log(jonny.terminal);
console.groupEnd();

Object.defineProperty(jonny, "pruebaNasa", {
  value: "👽",
  enumerable: false,
  //* Solo se muestra con getOwnPropertyDescriptors, pero no con Keys si tiene valor false
  writable: false,
  //* Lo podemos editar si tiene true, pero no si tiene false
  configurable: false,
  //* Lo podemos borrar si tiene true, pero no si tiene false
});

console.group("Prueba de la NASA");
console.log(jonny.pruebaNasa);
console.log(Object.keys(jonny));
console.log(Object.getOwnPropertyNames(jonny));
console.table(Object.getOwnPropertyDescriptors(jonny));
console.groupEnd();

//* Object.seal(Miguel); //* Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
//* Object.freeze(Miguel); //* Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

// Otros metodos estaticos del super prototipo object
const stif = {
  name: "Steven",
  age: 26,
  approvedCourses: ["Curso Dos"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

console.group("metodos epeciales");
// Con Object.seal evita que se borren las propiedades es decir que configurable sera igual a false
// Object.seal(stif);
// console.table(Object.getOwnPropertyDescriptors(stif));

// Y con Object.freeze evitamos que sean eliminadas o alterar las propiedades de mi objeto
Object.freeze(stif);
console.table(Object.getOwnPropertyDescriptors(stif));
console.log((stif.name = "Kardocito"));
console.log(delete stif.name); // False al intentar eliminarlo
console.log(stif.name); // Aun que parece que se altero el nombre sigue siendo el mismo

console.groupEnd();

const jonny = {
  name: "Jonny",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

// Podriamos hacer jonny.addCourse('Curso') o jonny.name etc

// Pero esta vez usaremos los metodos o propiedades estaticas del super prototipo object
// Estos dos nos muestran un array con cada una de las propiedades que guardamos en el objeto jonny
console.log(Object.keys(jonny));
console.log(Object.getOwnPropertyNames(jonny));
// Este mostrara un array de arrays donde llave y valor se muestran como arrays
// Podremos acceder a ellas por medio de sus indices
console.log(Object.entries(jonny));

// Aplicando getOwnPropertyDescriptors veremos otas propiedades dentro del objeto
console.log(Object.getOwnPropertyDescriptors(jonny));
/* Resultado en consola
  Y vemos que se anade: writable enumerable configurable
{name: {…}, age: {…}, approvedCourses: {…}, addCourse: {…}}
addCourse: {writable: true, enumerable: true, configurable: true, value: ƒ}
age: {value: 18, writable: true, enumerable: true, configurable: true}
approvedCourses: {value: Array(1), writable: true, enumerable: true, configurable: true}
name: {value: 'Jonny', writable: true, enumerable: true, configurable: true}
*/

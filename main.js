const natalia = {
  // Atributos
  name: "Natalia",
  age: 20,
  cusosAprobados: [
    "Curso definitivo de HTML y CSS",
    "Curso practico de HTML y CSS",
  ],

  // Metodos
  /* Forma un poco más larga para hacer métodos
          aprobarCurso:function () {
          }
    */
  // Otra forma de hacer metodos
  aprobarCurso(nuevoCurso) {
    // this hace referencia al objeto que envuelve a esta function
    this.cusosAprobados.push(nuevoCurso);
  },
};
// Añadimos otro cuso de esta forma, luego lo pasaremos a un método
// natalia.cusosAprobados.push('Curso de Responsive Desing')

// Prototipo que sera el molde para crear nuevos estudiantes
function Student(name, age, cusosAprobados) {
  this.name = name;
  this.age = age;
  this.cusosAprobados = cusosAprobados;
  /*  Forma de trabajar metodos dentro de los prototipos
      this.aprobarCurso = function name(nuevoCurso) {
        this.cusosAprobados.push(nuevoCurso);
      };
  */
}
// Metodos por fuera de la funccion prototype Student usando la herramienta proto
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cusosAprobados.push(nuevoCurso);
};

// Instancia del prototipo Student
const juanita = new Student("Juanita Alejandra", 25, [
  ("Introduccion a los video juegos", "Produccion de personajes"),
]);

// Dentro juanita que es una instacia del proto Student podremos acceder
// al metodo aprobarCurso(nuevoCurso)
// Esto funciona por que en el proto Student viene heredado del objeto incial
juanita.aprobarCurso("Unreal Engine");

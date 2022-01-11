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

class Student_class {
  // Si se hace de esta forma se tendran que enviar en ese mismo orden
  // << constructor(name, age, cusosAprobados) { >> y entre mas parametros se ingresen mas complicado se hace ademas que tendrias que recordar el orden de los parametros para asi mismo cargar la informacion

  // En vez de eso podemos recibir todo en un solo parametro de tipo objeto
  // Podra recicir los parametros en desorden
  // Podemos asignar valores por defecto en caso de su ausencia en el envio
  constructor({
    email,
    name,
    age,
    cusosAprobados = [],
    instagram,
    twitter,
    facebook,
  }) {
    this.name = name;
    this.age = age;
    this.cusosAprobados = cusosAprobados;
  }

  // Métodos
  aprobarCurso(nuevoCurso) {
    this.cusosAprobados.push(nuevoCurso);
  }
}

// Ya no le enviaremos varios parametros en vez eso usaremos un objeto literal que tenga las propiedades que necesitamos
// Podremos enviarlas en desorden
const migelito = new Student_class({
  name: "Miguel",
  age: 34,
  cusosAprobados: [
    "Analisis de negocios para ciencia de datos",
    "Principos de visuacizacion de datos",
  ],
});
const sutanito = new Student_class({
  cusosAprobados: [
    "Analisis de negocios para ciencia de datos",
    "Principos de visuacizacion de datos",
  ],
  name: "Sutano",
  email: "sutanito@mail.com",
  age: 41,
});

/* Esta es la forma y orden en que tendriamos que pasar los parametros al constructor
si el constructor resive los parametros asi:
 << constructor(name, age, cusosAprobados) {} >>

const migelito = new Student_class(
  'Miguel',
  34,
  [
    'Analisis de negocios para ciencia de datos',
    'Principos de visuacizacion de datos'
  ]
)
*/

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

// El mombre cambia por que ya no es una fabrica de objetos sino un Prototipo
function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;

  // const private = {
  //   "_name": name,
  //   "_courses": courses,
  // };

  // const public = {
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get courses() {
  //     return private["_courses"];
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  // creamos una constante objeto private donde vamos a guardar informacion que no queremos que puedan acceder o 'jaquear' personas curiosas
  const private = {
    _learningPaths: [],
  };

  // Crearemos un nuevo atributo dentro de this (Student.prototype)
  // Le asignamos un getter y un setter
  Object.defineProperty(this, "learningPaths", {
    get() {
      return private["_learningPaths"];
    },
    set(newLp) {
      // Validamos si cada _learningPaths son realmente un LearningPath
      if (newLp instanceof LearningPath) {
        private["_learningPaths"].push(newLp);
      } else {
        // Cada vez que traten de asignar un learningPaths al principo de la instanciasion de nuestro prototipo
        // Y tambien cada vez que estemos llamando a setter
        console.warn(
          "Alguno de los LPs no es una instancia dell prototipo LearningPath",
        );
      }
    },

    // esto hace que no podamos cambiar ni set ni get y de ninguna manera a _learningPaths
    // configurable: false, pero realmente no es tan necesario ya que tendria que hacer un asignasion que no podria set
  });

  // Para que cada uno de los learningPaths que enviemos desde un principio cuando estamos instanciando a Student
  // por cada uno de ellos llamaremos al setter de arriba
  for (learningPathIndex in learningPaths) {
    // Para verificar y asignarle, en caso que la validacion sea correcta
    // que ese nuevo this.learningPaths debe ir dentro de learningPaths[learningPathIndex]
    this.learningPaths = learningPaths[learningPathIndex];
  }
}

// Para manipular el atributo de un objeto con ciertos valores
// Le pasamos el objeto que vamos a manipular, la propiedad que queremos trabajar
// y un objeto con las propiedades que le vamos asignar

// Object.defineProperty(Student.prototype); esto lo podemos definir con this al ser un proto
// Dentro su propiedad proto podriamos asignales sus metodos
// Student.prototype.learningPaths = function name(params) {}

const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
  email: "juanito@frijoles.co",
  name: "Juanito",
  // Prueba de 'jaqueo'
  learningPaths: [escuelaWeb, escuelaData, { name: "escuela DEL IMPOSTOR" }],
});

const jonny = new Student({
  email: "yonoc@cualmail.co",
  name: "Jonny C",
  learningPaths: [escuelaWeb, escuelaData],
});

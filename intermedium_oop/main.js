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

// Para crear nuevas rutas de aprendizaje con estos criterios(fabricara estos objetos)
function createLearningPath({ name = requiredParam("name"), courses = [] }) {
  // Para interactuar con lo privado usaremos getter & setters que estan publicos
  const private = {
    _name: name,
    _courses: courses,
  };

  const public = {
    // Para acceder al nombre de la ruta de aprendizaje
    get name() {
      return private["_name"];
    },
    // De momento no omitiremos esta hasta definir que roles podran editar este campo
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get courses() {
      return private["_courses"];
    },
  };

  return public;
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
    _learningPaths: learningPaths,
  };

  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    // Validaciones para la propiedad privada _learningPaths
    get learningPaths() {
      return private["_learningPaths"];
    },
    set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn("Tu LP no tiene la propiedad name");
        return;
      }

      if (!newLP.courses) {
        console.warn("Tu LP no tiene courses");
        return;
      }

      if (!isArray(newLP.courses)) {
        console.warn("Tu LP no es una lista (*de cursos)");
        return;
      }

      // Aqui en vez de hacer una asignacion usamos el metodo push para empujar newLP
      // Y newLP no pase de ser un array a un objeto, sino que se agrege a la lista
      private["_learningPaths"].push(newLP);
    },
  };

  return public;
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });
const jonny = createStudent({
  email: "yonoc@cualmail.co",
  name: "Jonny C",
  age: 55,
});

// Esta la usamos para crear una escuela pero no se esta comprobando que learningPaths se cree en createLearningPaths
// const escuelaData = createLearningPath({
//   name: "Escuela de Data Science",
//   courses: [],
// });

// al estar trabajndo con get & set podremos declararla de esta forma apesar que sean funciones
// jonny.learningPaths = "Nueva ruta de aprendizaje"; dara erro al no ser un objeto con los datos esperados
// Esta la usamos para crear una ruta dentro del studiante y es lo mismo ya que ha heredado
// En este momento estamos validando que valores tienen mas no que tipo son
// y no estamos validando si nuestro learningPaths son objetos creados en nuestra funcion createLearningPath
// jonny.learningPaths = { name: "Escuela de desarrolo Web", courses: [] };
// console.log(jonny.learningPaths);

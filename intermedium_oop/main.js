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

// El mombre cambia por que ya no es una fabrica de objetos sino un Prototipo
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

  if (isArray(learningPaths)) {
    // Si validamos que el la varaible learningPath si es un array ira cargando los learningPathIndex dentro de este array vacio
    this.learningPaths = [];
    // Ya validamos que es un array y sabemos que puede haber elementos en este
    // Preguntamos si cada indice del array es una isntacia de LearningPath
    // learningPathIndex es la pocision dentro del array o en el array learningPaths
    for (learningPathIndex in learningPaths) {
      console.log(learningPaths[learningPathIndex]);
      console.log(learningPaths[learningPathIndex] instanceof LearningPath);

      // Si cada uno es realmente un LearningPath
      if (learningPaths[learningPathIndex] instanceof LearningPath) {
        console.log(learningPaths);
        console.log(learningPaths);
        // Empujara la nueva propiedad con la posicion de learningPathIndex dentro del array learningPath
        this.learningPaths.push(learningPaths[learningPathIndex]);
        console.log(learningPaths);
        console.log(learningPaths[learningPathIndex]);
      }
    }
  }

  // const private = {
  //   "_name": name,
  //   "_learningPaths": learningPaths,
  // };

  // const public = {
  //   email,
  //   age,
  //   approvedCourses,
  //   socialMedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },
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
  //   get learningPaths() {
  //     return private["_learningPaths"];
  //   },
  //   set learningPaths(newLP) {
  //     if (!newLP.name) {
  //       console.warn("Tu LP no tiene la propiedad name");
  //       return;
  //     }

  //     if (!newLP.courses) {
  //       console.warn("Tu LP no tiene courses");
  //       return;
  //     }

  //     if (!isArray(newLP.courses)) {
  //       console.warn("Tu LP no es una lista (*de cursos)");
  //       return;
  //     }

  //     private["_learningPaths"].push(newLP);
  //   },
  // };

  // return public;
}

const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
  email: "juanito@frijoles.co",
  name: "Juanito",
  // Con la logica aplicada en el condicional de arriaba este al no ser una instasia de LearningPath
  // perdera relevacia y no se mostrara con lo asi antes
  learningPaths: [escuelaWeb, escuelaData, { name: "escuela DEL IMPOSTOR" }],
});

const jonny = new Student({
  email: "yonoc@cualmail.co",
  name: "Jonny C",
  learningPaths: [escuelaWeb, escuelaData],
});

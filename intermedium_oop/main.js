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
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    // readName() {
    //   return private["_name"];
    // },
    // changeName(newName) {
    //   private._name = newName;
    // },

    // Remplazamos las funciones método anteriores por estas
    // En vez de llamar a la propiedad privada se hara por medio de estas funciones
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length !== 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
  };

  // Object.defineProperty(public, "readName", {
  //   writable: false,
  //   configurable: false,
  // });
  // Object.defineProperty(public, "changeName", {
  //   writable: false,
  //   configurable: false,
  // });

  return public;
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });
const jonny = createStudent({
  email: "yonoc@cualmail.co",
  name: "Jonny C",
  age: 55,
});

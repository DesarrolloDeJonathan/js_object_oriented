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

// Objeto literal
const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const jonny = deepCopy(studentBase);
const stivi = deepCopy(studentBase);

// Object.defineProperty(jonny, "name", {
//   value: "Juanito",
//   // Pondremos esta en false las demas sabemos que vienen por defecto en true
//   configurable: false,
// });

// Este atajo tambien evita que borremos las propiedades de nuestros objetos en menos codigo
// Es decir con el configurable: false
Object.seal(jonny);
// juan.name = "Juanito";

// La usamos para saber si el objeto tiene todas sus propiedades protegidas con seal
// Es decir con el configurable: false
console.log(Object.isSealed(jonny));

// Establecemos writable: false y configurable: false
// Ahora no se podra borrar ni sobrescribir
Object.freeze(stivi);
// Y con este comprobamos que las
console.log(Object.isFrozen(stivi));

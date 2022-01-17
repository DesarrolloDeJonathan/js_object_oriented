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

// **RORO ** => Recibir un Objecto, y Retornamos otro Objeto
// Esta funcion la creamos para establecer un parametro como obligatorio
function requiredParam(param) {
  throw new Error(`${param}es obligatorio`);
}

// Fabirica de objetos
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
  /* Dividiremos el codigo en partes declarando esta variable objeto dentro de la funcion createStudent
     Contendra las propiedades que no queremos que se cambien directamente
     Para hacerlo tendran que usar los metodos dentro de public
    */
  const private = {
    /* variable con convencion de guion bajo indicando que es privada */
    _name: name,
  };

  /* Las propiedades que podran ser trabajadas sin restriciones, sin ninguna validacion */
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
    /* La usamos para actualizar el nombre y hacer una validacion/es a name
    // Tambien podriamos hacer una validacion para comprobar que el email no se repite
    // Para que solo se pueda cambiar la propiedad name por medio de esta funcion implementaremos otras soluciones
    */
    changeName(newName) {
      private["_name"] = newName;
    },
    /* Necesitaremos tambien como ver el nombre definido como "privado"*/
    readName() {
      return private["_name"];
    },
  };

  // Esto lo hacemos para proteger nuestra propiedad metodo changeName()
  // La desventaja es que no podremos aplicar polimorfismo cuando aplicamos esta proteccion
  // Ya que no podemos editarla, pero en este caso no queremos que estas funciones sean alteradas
  // Los demas atributos no seran afectados con esta proteccion
  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });
  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });

  return {};
}

const jonny = createStudent({
  email: "yonoc@cualmail.co",
  name: "Jonny C",
});

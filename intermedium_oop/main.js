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
// const studentBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourses: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//     twitter: undefined,
//     instagram: undefined,
//     facebook: undefined,
//   },
// };

// **RORO ** => Recibir un Objecto, y Retornamos otro Objeto
// Esta funcion la creamos para establecer un parametro como obligatorio
function requiredParam(param) {
  // Lanzara un nuevo objeto Error con el mensaje y el nombre que esta recibiendo como parametro:
  // el nombre de la llave name del objeto que recibe por parametro la funcion createStudent({})
  throw new Error(`${param}es obligatorio`);
}

// Fabirica de objetos
// Levara solo un parametro y sera un objeto que dentro tendra las propiedades que esperamos recibir
// No importa el orden de llegada o de salida, las propiedades faltantes seran undefinded por defecto
// a menos que sea requerida como obligatoria esa propiedad
function createStudent({
  // Al llamar a la funcion createStudent() sin este valor mostrara error e indicara que es obligatorio
  // Por defecto tendra el valor de requerido y lanzara error a no ser que envie ese valor y sobrescribiendo el valor por defecto
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  // Parametro por defecto
  approvedCourses = [],
  learningPaths = [],
  // Por defecto este parametro tendra el varlor de un objeto vacio
  // Y en caso que no se envie nada no tendra error y continuara la ejecucion
  //
} = {}) {
  return {
    // Retornaresmos de esta manera ya que no alteraremos sus valores
    name,
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };
}

// Este objeto se cargara con todo undefined a menos que
const vacio = createStudent({});
// Si no enviamos ningun parametro u objeto vamos a tener un error
// Pues en la funcion createStudent() asumimos que se envia un objeto con esas propiedades,
// y al ser  por defecto indefinido = al retorno que es indefinido dara error
// Esto lo solucionamos o lo perdonamos por asi decirlo haciendo que el parametro de la funcion por defecto sea un objeto vacio
const vacio = createStudent();

const jonny = createStudent({
  email: "yonoc@cualmail.co",
  name: "Jonny C",
  age: 25,
});

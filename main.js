// Definicion de clase course
class Course {
  constructor({ name, classes = [], commets = [] }) {
    // nomenclatura de _guionBajo al incio se usa para hacer saber al resto que no llamen o modifiquen estos metodos o atributos desde afuera ya que son "privados" o eso es lo que lograremos haciendo:
    // Para eso escondemos el atributo _name dentro del prototipo Course
    //Luego solo tendran que entrar por el get o el set
    this._name = name;
    this.classes = classes;
  }

  // Para conseguir el valor de los atributos haremos lo siguiente:
  // palabra calve get nombreAtributo y transformado a metodo con ({ retunr this._marcadoComoPrivado })
  get name() {
    return this._name;
    // Para llamar el valor del metodo con nomenclatura privada lo hariamos de esta forma << cursoProgBasica.name() >>
  }

  // Para llamar ese valor con get lo haremos: << cursoProgBasica.name >> sin los parentesis
  set name(nuevoNombre) {
    if (nuevoNombre === "Curso Malicioso de Programacion Basica") {
      console.warn("Wey... no 👨‍💻👀");
    } else {
      this._name = nuevoNombre;
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programacion Basica",
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML & CSS",
});

// Definicion de LearningPath
class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, "HTML & CSS Practico"],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, "Data Bussines", "Marketing Digital"],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Video Juegos",
  courses: [cursoProgBasica, "Introduccion a Unity", "Unreal Engine"],
});

// Defincion de Student
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approved = [],
    learningPaths = [],
  }) {
    // Al llamar this.atributo = atribito debe terminar la linea con punto y coma;
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      // Dentro del objeto no aplica
      twitter: twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const jose = new Student({
  name: "jose",
  username: "arturo",
  email: "artur@mail.com",
  twiter: "artuiter",
});

const jose1 = new Student({
  name: "jose",
  username: "arturo",
  email: "arturito@mail.com",
  instagram: "artuiter",
});

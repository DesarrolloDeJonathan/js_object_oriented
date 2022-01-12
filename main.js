// Funciones secretas, por ahora podrian ser accedidas desde cualquier parte
function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

/*
Con export son para definir cuales son las partes que podremos ejecutar desde cualquier otro script en nuestro codigo
*/
// Quitaremos la palabra reservada expert pues hemos eliminado la compatibilidad con modulos
class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    // Las funciones recibiran este parametro secreto que estamos pasando
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

// Definicion de clase course
class Course {
  constructor({
    name,
    classes = [],
    commets = [],
    /*se agregan  estos parametros para la comprobacion*/
    isFree = false,
    lang = "spanish",
  }) {
    // nomenclatura de _guionBajo al incio se usa para hacer saber al resto que no llamen o modifiquen estos metodos o atributos desde afuera ya que son "privados" o eso es lo que lograremos haciendo:
    // Para eso escondemos el atributo _name dentro del prototipo Course
    //Luego solo tendran que entrar por el get o el set
    this._name = name;
    this.classes = classes;
    this.commets = commets;
    // Tambien lo hacemos aqui
    this.isFree = isFree;
    this.lang = lang;
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
  // El valor por defecto isFree es false aqui cambiamos su valor
  isFree: true,
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML & CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML & CSS",
  lang: "english",
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
class StudentMom {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
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

// Aplicando herencia de clase StudentMama
// Para que las subclases puedan heredad usamos extends claseMadre
class FreeStudent extends StudentMom {
  // Para hereda el constructor de clase StudentMom
  constructor(props) {
    // usamos la palabra reservada super(props) que pasara todos estos agumentos en props al constructor
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos",
      );
    }
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés",
      );
    }
  }
}

class BasicStudent extends StudentMom {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés",
      );
    }
  }
}

class ExpertStudent extends StudentMom {
  constructor(props) {
    super(props);
  }
  // Para usuarios Expert no hay ningun tipo de comprobacion
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const jose = new BasicStudent({
  name: "jose",
  username: "arturo",
  email: "artur@mail.com",
  twiter: "artuiter",
});

const arturo = new FreeStudent({
  name: "jose",
  username: "arturo",
  email: "arturito@mail.com",
  instagram: "artuiter",
});

console.log(arturo.approveCourse(cursoDefinitivoHTML));
console.log(arturo.approveCourse(cursoPracticoHTML));
console.log(jose.approveCourse(cursoDefinitivoHTML));
console.log(jose.approvedCourses[0]);

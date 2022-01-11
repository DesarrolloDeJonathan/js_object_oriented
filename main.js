// Definicion de clase course
class Course {
  constructor({ name, classes = [], commets = [] }) {
    this.name = name;
    this.classes = classes;
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

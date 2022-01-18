function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es un parametro obligatorio.");
}

class LearningPath {
  constructor({ name = requiredParam("name"), courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

class Student {
  constructor({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this._learningPaths = this.setterCall(learningPaths);
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
  }

  get learningPaths() {
    return this._learningPaths;
  }

  set learningPaths(newLearningPath) {
    if (newLearningPath instanceof LearningPath) {
      this._learningPaths.push(newLearningPath);
    } else {
      console.warn(
        "Alguno de los LPs no es una instancia de los prototipos LearningPath",
      );
    }
  }

  setterCall(learningPaths) {
    this._learningPaths = [];
    learningPaths.forEach((learningPath) => {
      this.learningPaths = learningPath;
    });
    return this._learningPaths;
  }
}

const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escueal de Data Science" });

const jonny = new Student({
  email: "yonoc@cualmail.co",
  name: "Jonny C",
  learningPaths: [escuelaWeb, escuelaData, { name: "Escuela DEL IMPOSTOR" }],
});

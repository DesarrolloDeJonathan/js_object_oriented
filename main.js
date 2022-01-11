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

/*
// Con objetos literales abarcariamos muchas más líneas de código

const josatan6 = new Student({
  name: "Josatán",
  username: "Jonathan",
  email: "jostan@mail.com",
  twitter: "JotanDev",
});

const josatan = {
  name: "Josatán",
  username: "Jonathan",
  points: 100,
  socialMedia: {
    twitter: "@JotanDev_twitter",
    instagram: "@JotanDev_instagram",
    facebook: "@JotanDev_facebook",
  },
  aprovedCourses: ["HTML & CSS", "HTML & CSS Práctico"],
  //
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: ["HTML & CSS", "HTML & CSS Práctico", "Responsive Desing"],
    },
    {
      name: "Escuela de Video Juegos",
      courses: ["Producción de VGS", "Ureal Engine", "Unity 3D"],
    },
    {},
  ],
};

const meganito = {
  name: "Megano",
  username: "MengaDev",
  points: 100,
  socialMedia: {
    twitter: "@MengaDev_twitter",
    instagram: undefined,
    facebook: "@MenganDev_facebook",
  },
  aprovedCourses: ["Data Business", "DataViz AI"],
  //
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: ["HTML & CSS", "HTML & CSS Práctico", "Responsive Desing"],
    },
    {
      name: "Escuela de Data Science",
      courses: ["Data Business", "DataViz", "Tableau"],
    },
  ],
}; */

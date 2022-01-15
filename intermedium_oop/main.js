const objUno = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  edit_a() {
    this.a = "AAAAAAA";
  },
};

// Esta variable contendra a objUno con todas sus propiedades en string
const stringified_complex_object = JSON.stringify(objUno);

// Luego lo transformamos de nuevo a objeto
// Con esto evitamos que se toque estos objetos cuando hagamos una edicion en cualquiera de ellos
const objDos = JSON.parse(stringified_complex_object);

// El problema es que estos  no trabajan con metodos o funciones que tenga dentro el objeto a transformar
console.log(objUno.edit_a());
// Vemos que no esta el metodo
console.log(objDos);

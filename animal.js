class Animal {
    constructor(nombre, tipo, sonido) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.sonido= sonido;
    }

    hacersonido() {
       console.log("Hola, soy " + this.nombre + this.sonido);

    }
}
const animal1 =new Animal("roco", "perro", "guau");
animal1.hacersonido()



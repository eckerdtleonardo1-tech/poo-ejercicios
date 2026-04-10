class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarPrecio() {
       console.log("el precio es " + this.precio);

    }
}
const producto1 =new Producto("martillo" , "900$");
producto1.mostrarPrecio()


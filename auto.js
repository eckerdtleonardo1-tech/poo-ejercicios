class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }

    acelerar(){
        this.velocidad += 10;
    }

}


const auto1 = new Auto("Ford", "Fiesta");
const auto2 = new Auto("Toyota", "Corolla");
const auto3 = new Auto("toyota", "etios");

auto1.acelerar();
console.log("La velocidad del coche 1 es " + auto1.velocidad);
class CuentaBancaria {
    constructor(titular , saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo = this.saldo + monto
       console.log("se retiro al saldo de" + this.titular + " y ahora es de " + this.saldo);

    }

    retirar(monto) {
        this.saldo = this.saldo - monto
        console.log("se retiro al saldo de " + this.titular + "y ahora es de" + this.saldo);
    }
}
const titular1 =new CuentaBancaria("martin" , 900);
titular1.depositar(70)
titular1.retirar(50)


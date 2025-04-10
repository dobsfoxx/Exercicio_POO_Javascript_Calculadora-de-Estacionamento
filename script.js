class ContaBancaria {
    #saldo;
    constructor() {
        this.#saldo = 0;
    }
    depositar(valor) {
        this.#saldo += valor;
        return this.#saldo;
    }
    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente!");
            return this.#saldo;
        }
        this.#saldo -= valor;
        return this.#saldo;
    }
    consultarSaldo() {
        return this.#saldo;
    }}

    class CaixaEletronico{
        constructor({conta}){
            this.conta = conta;
        }
        depositar(){
            const valorDeposito = document.getElementById("valorDeposito").value;
            this.conta.depositar(parseFloat(valorDeposito));
            document.getElementById("resultado").innerText = `Depósito realizado com sucesso! Saldo atual: ${this.conta.consultarSaldo()}`;
        }
        sacar(){
            const valorSaque = document.getElementById("valorSaque").value;
            this.conta.sacar(parseFloat(valorSaque));
            document.getElementById("resultado").innerText = `Saque realizado com sucesso! Saldo atual: ${this.conta.consultarSaldo()}`;
        }
        consultarSaldo(){
            document.getElementById("resultado").innerText = `Saldo atual: ${this.conta.consultarSaldo()}`;

        }
    
    }
    const conta = new ContaBancaria();
    const caixaEletronico = new CaixaEletronico( conta );
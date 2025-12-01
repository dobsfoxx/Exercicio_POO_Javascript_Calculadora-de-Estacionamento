class Park {
    constructor() {
        this.minutos = 0;
        this.final = 0;
    }

    calcularEstacionamento() {
        const minutos = parseFloat(document.getElementById("minutos").value);

        if (isNaN(minutos)) {
            alert("Por favor, insira um número válido de minutos.");
            return;
        }
        if (minutos < 30) {
            alert("Valor Insuficiente para o cálculo. O mínimo é 30 minutos.");
            return;
        }

        this.minutos = minutos;
        let finalCalculado = ((this.minutos * 0.025) + 0.25);

        if (this.minutos > 100) {
            finalCalculado = this.minutos * 0.025;
        }

        this.final = parseFloat(finalCalculado.toFixed(2));
        document.getElementById("resultado").innerHTML = "Valor a pagar: R$ " + this.final.toFixed(2);
    }

    calcularTroco() {
        const valor = parseFloat(document.getElementById("valor").value);


        if (isNaN(valor)) {
            alert("Por favor, insira um valor válido.");
            return;
        }

        if (valor < this.final) {
            alert("Valor insuficiente para o pagamento.");
            return;
        }

        const troco = (valor - this.final).toFixed(2);
        document.getElementById("resultadoTroco").innerHTML = "Pago com Sucesso! Troco: R$ " + troco;
        document.getElementById("valor").value = "";
        document.getElementById("minutos").value = "";
    }
}

const estacionamento = new Park();


const calcularEstacionamento = () => {
    estacionamento.calcularEstacionamento();
};

const calcularTroco = () => {
    estacionamento.calcularTroco();
};






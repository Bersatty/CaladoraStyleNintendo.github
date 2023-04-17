class Display {
    constructor(displayValorActual , displayValorAnterior){

        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.valorActual ="";
        this.valorAnterior = "";
        this.calculador = new Calculadora();
        this.tipoOperacion = "";
        this.signos = {
            suma:"+",
            resta:"-",
            multiplicar:"*",
            dividir:"/",
        } 
    }
    
    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores()
    }
    
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual ;
        this.displayValorAnterior.textContent  = `${this.valorAnterior} ${this.signos[this.tipoOperacion]||""}
        `
    }
    
    borrartodo(){
        this.valorActual="";
        this.valorAnterior="";
        this.tipoOperacion ="";
        this.imprimirValores()
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores()
    }
    
    calcular(){
        const valor_Anterior = parseFloat(this.valorAnterior)
        const valor_Actual = parseFloat(this.valorActual)

        if( isNaN(valor_Actual) || isNaN(valor_Anterior))return 
        this.valorActual = this.calculador[this.tipoOperacion](valor_Anterior , valor_Actual).toString()
    }

    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular()
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual= "";
        this.imprimirValores()

    }



}

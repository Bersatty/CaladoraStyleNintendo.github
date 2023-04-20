

class Display {
    constructor(displayValorActual , displayValorAnterior){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.valorActual ="";
        this.valorAnterior = "0";
        this.resultado = ""
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
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] ||""}`

    }
        
    resetearValores(){
        this.valorActual="";
        this.valorAnterior = "0"
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
        this.resultado = this.calculador.operacion(this.tipoOperacion,valor_Anterior , valor_Actual)
        this.valorAnterior = this.resultado.toString()
        this.valorActual = ""
    }

    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular()
        this.tipoOperacion = tipo;
        this.imprimirValores()
    }
}
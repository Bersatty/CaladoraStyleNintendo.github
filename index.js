

const displayValorActual = document.getElementById("valor-Actual");
const displayValorAnterior = document.getElementById("valor-Anterior");
const botonesNumeros = document.querySelectorAll(".num")
const botonesOperadores = document.querySelectorAll(".numoperador")


const display = new Display(displayValorActual , displayValorAnterior)


botonesNumeros.forEach( boton => {
    boton.addEventListener("click", ()=>{
        display.agregarNumero(boton.innerHTML)
    })
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener("click", ()=>{
        display.computar(boton.value)
    })
})
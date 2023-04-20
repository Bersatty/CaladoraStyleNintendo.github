class Calculadora {
    operacion(operador, num1, num2) {
      switch (operador) {
        case 'suma':
          return num1 + num2;
        case 'resta':
          return num1 - num2;
        case 'multiplicar':
          return num1 * num2;
        case 'dividir':
          return num1 / num2;
        default:
          return num2 ;
      }
    }
  }
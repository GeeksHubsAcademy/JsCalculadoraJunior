
let controlCifras = document.getElementById("cifras");
let controlOperaciones = document.getElementById("operacion");

let arraySimbolos = ['+','-','*','/','C','='];

let operando1 = "";
let operando2 = "";
let operacion = "";
let resultado = 0;

controlCifras.innerHTML = 0;

let operar = false;

const pulsaBoton = (valor) => {
    
    //comprobamos si la tecla pulsada es un símbolo

    if(arraySimbolos.includes(valor)){
        
        if(valor === "="){

            switch(operacion) {
                case '+':
                    controlOperaciones.innerHTML = `${operando1} + ${operando2}`;
                    controlCifras.innerHTML = parseFloat(operando1) + parseFloat(operando2);
                break;

                case '-':
                    controlOperaciones.innerHTML = `${operando1} - ${operando2}`;
                    controlCifras.innerHTML = parseFloat(operando1) - parseFloat(operando2);
                break;

                case '*':
                    controlOperaciones.innerHTML = `${operando1} * ${operando2}`;
                    controlCifras.innerHTML = parseFloat(operando1) * parseFloat(operando2);
                break;

                case '/':
                    controlOperaciones.innerHTML = `${operando1} / ${operando2}`;
                    resultado = parseFloat(operando1) / parseFloat(operando2);
                    
                    if(resultado === Infinity){
                        controlCifras.innerHTML = "ERROR";
                    }else{
                        controlCifras.innerHTML = resultado;
                    }
                    
                break;

                default:
                    console.log("Error en la operación");
                break;


            }
            
        }else{

            if(valor == 'C'){

                operando1 = "";
                operando2 = "";
                operacion = "";
                controlOperaciones.innerHTML = "";
                controlCifras.innerHTML = 0;
                operar = false;

            }else {

                operar = true;
                controlOperaciones.innerHTML = valor;
                operacion = valor;

            }
            

            
        }

        
        
    }else{

        //En este caso no se trata de un símbolo sino de un número
        if(!operar){
            operando1 += valor;
            controlCifras.innerHTML = operando1;
        }else{
            operando2 += valor;
            controlCifras.innerHTML = operando2;
        }
        
    }

}

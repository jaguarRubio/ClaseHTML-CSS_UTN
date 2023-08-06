/** DADA UNA ACCION POR EL USUARIO MOSTRAR POR PANTALLA LA TABLA DE MULTIPLICAR
 * SUMAR, DIVIDIR Y RESTAR, SEGUN EL VALOR QUE INGRESE EL USUARIO
 */
const prompt = require("prompt-sync")(({sigint:true}));



console.log('Calculadora aritmética');

function Inicio(){
    console.log(`1. Adición\n2. Sustracción\n3. Multiplicación\n4.División`)
    op = parseInt(prompt('Ingrese número:'));

    
        comprob = function(op1){
        if(!isNaN(op1) && Number.isInteger(op1)){
            flag = true;
        }else{
            flag = false;
        }
        while(!flag){
            console.log('error');
            op = parseInt(prompt('Ingrese número:'));
            comprob(op);
        }}
        comprob(op);

        n0 = parseInt(prompt('Ingrese número A:'));
        n1 = parseInt(prompt('Ingrese número B:'));
        comprobII = function(N0, N1){
            if((!isNaN(N0) && Number.isInteger(N0)) && (!isNaN(N1) && Number.isInteger(N1))){
                flag = true;
            }else{
                flag = false;
            }
            while(!flag){
                console.log('error');
                n0 = parseInt(prompt('Ingrese número A:'));
                n1 = parseInt(prompt('Ingrese número B:'));
                comprobII(n0, n1);
            }}
        comprobII(n0, n1);
        aritm = function(o, n, nn){
            switch (o) {
                case 1:
                  r = n + nn
                  break;
                case 2:
                  r = n - nn
                  break;
                // ...
                case 3:
                  r = n * nn
                  break;
                default:
                  r = n / nn
                  break;
              }
              return r;
        }
        return aritm(op, n0, n1);
}

console.log(Inicio());
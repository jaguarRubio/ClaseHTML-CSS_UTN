/** DADA UNA ACCION POR EL USUARIO MOSTRAR POR PANTALLA LA TABLA DE MULTIPLICAR
 * SUMAR, DIVIDIR Y RESTAR, SEGUN EL VALOR QUE INGRESE EL USUARIO
 */
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
            Inicio();
        }}
        comprob();

        n0 = parseInt(prompt('Ingrese número:'));
        n1 = parseInt(prompt('Ingrese número:'));
        comprobII = function(n0, n1){
            if((!isNaN(n0) && Number.isInteger(n0)) && (!isNaN(n1) && Number.isInteger(n1))){
                flag = true;
            }else{
                flag = false;
            }
            while(!flag){
                console.log('error');
                Inicio();
            }}
        comprobII();
        aritm = function(n){
            switch (n) {
                case 1:
                  r = n0 + n1
                  break;
                case 2:
                  r = n0 - n1
                  break;
                // ...
                case 3:
                  r = n0 * n1
                  break;
                default:
                  r = n0 / n1
                  break;
              }
              return r;
        }
        aritm();
}

Inicio();
/* DADA DOS VARIABLES  REALIZAR CON ESAS VARIABLES LAS OPERACIONES MATEMATICAS SIGUIENTE (+,-,*,/)
 * MEDIANTE UN SWITCH
*/
/* CALCULAR SI UN NUMERO ES PRIMO O NO */
/** REALIZAR LA TABLA DE MULTIPLICAR DE UN VALOR X HASTA EL 10
 * 1*1 = 1
 * 1*2=2
 * 1*3=3
 * 1*10=10
 */
/**TODOS LOS DEBERAS MOSTRAR POR LA CONSOLA */
// Power Point debajo de las consignas respondidas arriba
const prompt = require("prompt-sync")(({sigint:true}));




//1.
console.log("Insert two numbers")
var A = parseInt(prompt("Input number A"));
var B = parseInt(prompt("Input number B"));

console.log("Arithmetic operation.\n1. Adition\n2. Sustraction\n3. Multiplication\n4. Division")
var op = parseInt(prompt("Option:"));

switch(op){
    case 1:
        R = A + B;
        op = "+"
    break;
    case 2:
        R = A - B;
        op = "-"
    break;
    case 3:
        R = A * B;
        op = "×"
    break;
    default:
        R = A / B;
        op = "÷"
    break;
}

console.log(`${A} ${op} ${B} = ${R}`);



//2.
console.log("Discover if a number is prime")
var A = parseInt(prompt("N: "))

let barrilPri = [2];

for(let x = 3; x <= A; x++){
    for(z = 0; z < barrilPri.length; z++){
        if(x%barrilPri[z] == 0){
            break;
        }
        else if(x/barrilPri[z] >= barrilPri[z]){
            continue;
        }
        else{
            barrilPri.push(x);
            break;
        }
    }
}
let flag = barrilPri.includes(A);
console.log(`is it prime? ${flag}`)



//3.
console.log("Multiply table");
var A = parseInt(prompt("N:"));

for(x=0; x<=10; x++){
    console.log(`${A} × ${x} = ${A*x}`)
}

//Power
/*1- Ingresar nombre por prompt
2- Comparar el nombre ingresado con tu nombre
3- Si es igual a tu nombre mostrar por consola un mensaje de éxito, caso contrario mostrar un mensaje de error.*/

//1.
nom = prompt("input name: ");
console.log(nom);

//2.
nom = prompt("input name: ");
selfName=["Matías", "Ma'tias", "Matias"]
compar = nom.toLowerCase() == selfName[0].toLowerCase() ? true :
nom.toLowerCase() == selfName[1].toLowerCase() ? true : 
nom.toLowerCase() == selfName[2].toLowerCase() ? true : false;

//3.
console.log(`same name like author?: ${compar}`)
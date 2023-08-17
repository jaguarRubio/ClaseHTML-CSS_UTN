/**  ACTIVIDAD AGREGAR 10 OBJETOS PERSONAS EN AL ARRAY CON DATA DIFERENTE...
 * 1.-FILTRADO POR NOMBRE (COINCIDA)(SOLICITAR AL USUARIO EL NOMBRE O PALABRA A BUSCAR)
 * 2.- MOSTRAR EL PROMEDIO DE EDADES
 */
// Power Point debajo de las consignas respondidas arriba
const prompt = require("../node_modules/prompt-sync")(({sigint:true}))



let caja = [];

function Person(firstN, lastN, address, birthday, state, condition){
    obj = {
        firstN,
        lastN,
        address,
        birthday,
        state
    }
    if(condition){
        caja.push(obj);
    }
    else{
        caja.unshift(obj);
    }
}

Person('Matías Ezequiel','Sallago','0000',2001,0,true);
Person('Rodrigo','Castillo','0001',2002,1,true);
Person('Agustín','Schumaster','0010',2001,1,true);
Person('Adrian','Shephard','0011',1999,0,true);
Person('Fabian','Rosas','0100',2001,0,true);
Person('Guillermo','Hoyos','0101',2000,1,true);
Person('Mariano','Acosta','0110',2001,1,true);
Person('Nacho','Mendoza','0111',2001,0,true);
Person('Ezequiel','Salvatierra','1000',2002,0,true);
Person('Angel','Circelli','1001',2002,1,true);

console.table(caja);

let mapa = caja.map((elm) => {
    nombre = {
        nombre: elm.firstN + ' '+ elm.lastN
    };
    return nombre;
})                      //[nombre] (nombre es objeto con atributo nombre)

console.table(mapa);
//console.table(mapa)

input = prompt('search:');
//console.log(input)

let searchResult = mapa.filter((elm) => {
    input = input.toLowerCase();
    nombreCompleto=elm.nombre.toLowerCase();
    return nombreCompleto.includes(input)
});

//console.table(caja);

console.table(searchResult);

console.log('age average')

suma = 0;

for(let x=0; x < caja.length; x++){
    suma += 2023 - caja[x].birthday;
}
ageAverage = suma / caja.length; ''

console.log(`is ${ageAverage}`)


function funPromed(){
    sumua=0;
    caja.forEach((elm) => {
        sumua += 2023-elm.birthday;
    })
    promedio = sumua / caja.length
    return promedio
}
console.log(funPromed());


const reduc = caja.reduce((acum, elm)=>{
    return acum + (2023-elm.birthday)
},0);
promedio = reduc / caja.length

console.log(promedio)

//Había una actividad semejante en alguna parte
mi_nombre = "Matias Sayago"
mi_nombre = mi_nombre.replace("i","í")
mi_nombre_con_diacriticos = mi_nombre.replace("Sa","Sá")
console.log(mi_nombre_con_diacriticos);

// Power point
/*Crearemos la función suma() así como la rango() y utilizaremos las dos para realizar una suma de una lista de números.

Nombre y apellido
Desarrola una función que muestre por consola el primer apellido de una persona, considerando una estructura similar del objeto que ves en la diapositiva. Además, desarrolla una función similar que muestre solo el nombre.

Edad par
Desarrolla una funcion que tome un objeto como el tienes a al derecha como parámetro y retorne verdadero o falso si la edad es par. Deberás calcular la edad dentro de la función.
*/

//1.
function suma1(set){
    sum=0;
    console.log(`sumandos: ${set.length}`)
    for(let x=0 ; x<set.length ; x++){
        sum += parseInt(set[x]);
    }
    return sum;
}
//NO CORRESPONDE >>
datas = prompt("Input the numbers separated by empty space:");
datas = datas.split(" "); // output:["2", "6", "8"]
console.log(suma1(datas));
//<<
function rango(n){
    caja=[]
    for(let x=1; x<=n; x++){
        caja.push(x)
    }
    return caja
};
data = prompt("input the number: ")
console.log(suma1(rango(data)));

//2.
person = {
    firstName:"Alan",
    lastName:"Turing",
    birthDay:1912,
    DidPass:1954,
}
function nom(per){
    return per.firstName;
}
function surnom(per){
    return per.lastName;
}
console.log(nom(person));
console.log(surnom(person));

//3.
function pair_oddAge(per){
    years_old = person.DidPass - person.birthDay;
    pair_odd = (years_old%2)==0 ? true : false; 
    return pair_odd;
}

console.log(`is age pair?: ${pair_oddAge(person)} (${person.birthDay}-${person.DidPass})`);
/**  ACTIVIDAD AGREGAR 10 OBJETOS PERSONAS EN AL ARRAY CON DATA DIFERENTE...
 * 1.-FILTRADO POR NOMBRE (COINCIDA)(SOLICITAR AL USUARIO EL NOMBRE O PALABRA A BUSCAR)
 * 2.- MOSTRAR EL PROMEDIO DE EDADES
 */
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

mi_nombre = "Matias Sayago"
mi_nombre = mi_nombre.replace("i","í")
mi_nombre_con_diacriticos = mi_nombre.replace("Sa","Sá")
console.log(mi_nombre_con_diacriticos);
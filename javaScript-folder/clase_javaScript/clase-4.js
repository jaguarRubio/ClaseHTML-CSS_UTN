const prompt = require("../node_modules/prompt-sync")(({sigint:true}))

/**1.-FILTRADO POR NOMBRE (COINCIDA)(SOLICITAR AL USUARIO EL NOMBRE O PALABRA A BUSCAR)
 * 2.- MOSTRAR EL PROMEDIO DE EDADES
 */

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
})

console.table(mapa);

mapa = mapa.map((elm) => {
    nombre = {
        nombre: elm.nombre.toLowerCase()
    }
    return nombre
})

//console.table(mapa)

input = prompt('search:');
input = input.toLowerCase();
//console.log(input)

let searchResult = mapa.filter((elm) => {
    return elm.nombre.includes(input)
});

//console.table(caja);

console.table(searchResult);

console.log('age average')

let ageAveragge = caja.map((elm) => {
    ag =  2023 - elm.birthday;
    // suma += ag;
    return ag;
})

suma = 0;

ageAveragge = ageAveragge.forEach(elm => {
    suma += elm;
    return suma
})

console.log(`is ${ageAveragge}`)

// average = suma / caja.birthday.length()

// console.log(`is ${average}`)


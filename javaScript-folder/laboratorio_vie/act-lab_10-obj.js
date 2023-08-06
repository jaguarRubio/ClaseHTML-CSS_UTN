/**  ACTIVIDAD AGREGAR 10 OBJETOS PERSONAS EN AL ARRAY CON DATA DIFERENTE...
 * 1.-FILTRADO POR NOMBRE (COINCIDA)(SOLICITAR AL USUARIO EL NOMBRE O PALABRA A BUSCAR)
 * 2.- MOSTRAR EL PROMEDIO DE EDADES
 */
const prompt = require("../node_modules/prompt-sync")(({sigint:true}));

var lastName = "Mendoza C&C Renegade X";

const person = {
    firstName:"PEDRO",
    lastName,
    birthday:20,
    status:false,
    address:{
        cp:1424,
        address:"CABA"
    }
}

person.firstName = "Carlos"

var {firstName, lastName, status, birthday} = person;
var {cp, address} = person.address;

console.log(firstName, lastName, status, birthday);

var Array = [firstName, lastName, status, birthday, [cp, address]];

console.log(Array);

var personArray = [];

const addPerson = (fn,ln,brd,address,status,condition) =>{
    let subject ={
        fn,
        ln,
        brd,
        address,
        status
    }
    if(condition){
        personArray.push(subject);
    }
    else{
        personArray.unshift(subject);
    }

}

//añadido 7 objetos
addPerson('Adrian','Shephard',1999,'0011',0,true);
addPerson('Fabian','Rosas', 2001,'0100', 0,true);
addPerson('Guillermo','Hoyos', 2000,'0101',1,true);
addPerson('Mariano','Acosta',2001, '0110',1,true);
addPerson('Nacho','Mendoza',2001, '0111',0,true);
addPerson('Ezequiel','Salvatierra',2002,'1000',0,true);
addPerson('Angel','Circelli',2002,'1001',1,true);

for(let i=1; i<=3; i++){
    let firstName = prompt("INGRESE EL NOMBRE: ");
    let lastName = prompt("INGRESE EL APELLIDO: ");
    let birthday = parseInt(prompt("INGRESE LA EDAD: "));
    let address = prompt("INGRESE LA DIRECCION: ");
    let status = parseInt(prompt("INGRESE EL STATUS: "));
    addPerson(firstName,lastName,birthday,address,status,true);
}

console.log(personArray)
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
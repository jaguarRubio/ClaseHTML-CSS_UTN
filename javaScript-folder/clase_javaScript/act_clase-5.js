/** 1.- EVITAR QUE EL USUARIO INGRESE DATOS VACIOS.
 *  2.- EVITAR DUPLICIDAD DE DATOS POR EL DNI
 */
// Power Point debajo de las consignas respondidas arriba

var dataInput = () => {
    let firstN = document.getElementById("Firstname");
    let lastN = document.getElementById("Lastname");
    let birthD = document.getElementById("birthD");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");
    if(DNI_detector()){
        console.log("Error, DNI repeated")
    }

    subject(firstN.value, lastN.value, birthD.value, address.value, status.value, dni.value)
    //reanudar valores
    firstN.value = "";
    lastN.value = "";
    birthD.value = "";
    address.value = "";
    status.value = "";
    dni.value = "";
    console.table(caja)
};

let caja = [];

function subject(nom, Lnom, ag, addrss, stat, dni){
    objSub = {
        nom,
        Lnom,
        ag,
        addrss,
        stat,
        dni,
    }

    caja.push(objSub)
};

function DNI_detector(){
    cont=0;
    flag=false;
    caja.forEach((elm0) => {
        caja.forEach((elm1) =>{
            if(elm0 == elm1){
                cont += 1; 
            };

        });
});
    if(cont > 1){
        flag=true;
};
    return flag;
}

// Power point
/*PRACTICA - mostrar números mayores a 10
Del siguiente array de números:
let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10];
Realizar un programa que imprima por consola únicamente los números mayores a 10
*) Se imaginan que sentencia usar para recorrer los elementos? (no existe sólo una)
PRACTICA - Array de autos
En una agencia multimarca de autos tenemos un array con los autos a la venta estacionados en la playa:
let autos = ["VW Up", "Renault Sandero", "VW Gol", "Fiat Uno"];
Nos avisan que se vendió el Fiat Uno ubicado en el último lugar del estacionamiento. Entones tenés que eliminar el último elemento.
Luego, entra un nuevo vehiculo (un "Ford Fiesta"), por lo que hay que agregarlo en el final de la lista de autos.
PRACTICA - Array de autos
Por último, se encontró un error en la lista, equivocados se habia dado de alta un VW Up cuando en realidad se trataba de un VW Fox. Entonces hay que modificar la posición número 0 de nuestra "playa de estacionamiento" por el modelo correcto de auto.
Escribi el código necesario para cumplir con todos los requerimientos pedidos.
*/

//1.
let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10];
filterOver10 = numeros.filter((elm) => {
    return elm > 10    
})

console.log(`Over 10: ${filterOver10}`);


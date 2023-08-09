/** 1.- EVITAR QUE EL USUARIO INGRESE DATOS VACIOS.
 *  2.- EVITAR DUPLICIDAD DE DATOS POR EL DNI
 */

var dataInput = () => {
    let firstN = document.getElementById("Firstname");
    let lastN = document.getElementById("Lastname");
    let birthD = document.getElementById("birthD");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");
    if(DNI_detector){
        console.log("Error, DNI repeated")
    }
    else{
        console.log("esta bien")
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


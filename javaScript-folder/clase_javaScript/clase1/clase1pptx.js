/**1. Imprimir nombre por consola
2. Sumar dos números.
3. concatenar nombre y edad
4. comparar dos números si es mayor o menor.*/
const prompt = require("prompt-sync")(({sigint:true}))


console.log("name")
nom = prompt("Input name: ");
console.log(nom);

console.log("a + b")
n0 = parseInt(prompt("input number a: "));
n1 = parseInt(prompt("input number b: "));

sum = n0+n1;
console.log(`sum: ${sum}`);

console.log("name + years old")
nom = prompt("Input name: ");
age = parseInt(prompt("Input years old: "));

nom_age = nom + age;
console.log(nom_age);

console.log("a > b?")
n0 = parseInt(prompt("input number A: "));
n1 = parseInt(prompt("input number B: "));

compar = (a, b) => {
    result = a > b ? "A > B" : (b > a ? "B > A" : "A = B");
    return result
}

console.log(compar(n0, n1));
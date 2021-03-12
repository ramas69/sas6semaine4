let num = 0;
for (let i=1; i<=10; i++) {
    num +=i;
    console.log("Etape "+i+" : "+num)
}


/*let jeu = document.querySelector('.jeu');

let tab = ["pile", "face"];

function piece(){
    let monnaie =  tab[Math.floor(Math.random()*tab.length)];
    jeu.innerHTML = monnaie;

}*/


/* let text = document.querySelector(".texte");
let nombre = 0;
function increment(){
    nombre ++
   text.innerHTML = nombre;
}
 */


// let nombre = prompt("Table de mutiplication ?");

// for(let i= 0; i<10; i++){
//     console.log(nombre +" * "+ i+" = "+nombre*i);
// }


// que du nombre sinon NAN
// let question = parseInt(prompt("Quelle nombre ?"));
// let fin = false;
// while(!fin){
//     if(isNaN(question)){
//         console.log("recommence");
//         question = parseInt(prompt("Quelle nombre ?"));
//     }else{
//         console.log("le chiffre est "+ question)
//         fin = true;
        
//     }
// }

// nombre passe en parametre si modulo

// function siModulo(a){
//     if(a%3!=0){
//         console.log("pas divisible par 3")
        
//     }else{
//         console.log(a/3);
//     }
// }
// siModulo(20);

/*function caractere(a){
    if(a.length <= 8 ){
        console.log(a)
    }else{
        console.log("trop de caractere")
    }
}
caractere("ramatoulaye");*/

/*const voiture = {
immat: "zero",
marque: "mercedes",
annee : 2012
}

console.log(`la voiture d'immatriculation ${voiture.immat}, de marque ${voiture.marque}, date de ${voiture.annee}`)
*/

/*let nom = prompt("quel est le nom ?")
let age = prompt("quel est le age ?")

const personne = {
    pnom: nom,
    page: age,

    }
console.log(`nom: ${personne.pnom}, age: ${personne.page}`)*/

//ou
/*
const personne = {}
personne.nom =prompt("quel est le nom ?")
personne.age = prompt("quel est le age ?")

console.log(`nom: ${personne.nom}, age: ${personne.age}`)
*/




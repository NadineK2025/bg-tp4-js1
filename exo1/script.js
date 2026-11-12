"use strict"; // Mode strict, obligatoire au début du script (slide 52)
// Les commentaires // et /* */ (slide 37)
// Variables et constantes déclarées avec const (slides 38 et 52)
const nom = "John";    // Type primitif String (slide 38)
const prenom = "Doe";  // Type primitif String (slide 38)
const age = 30;        // Type primitif number, entier (slide 38)
const note = 15;       // Type primitif number (slide 38)
const pi = 3.14;       // Constante pi (slide 38)
// Chaque fonction est appelée par l'événement onclick du bouton (slides 15 et 18)
// Déclaration d'une fonction sans paramètre (slide 46)
function f1() {
    console.log(nom); // Affichage avec console.log (slide 34)
}
function f2() {
    console.log(prenom); // slide 34
}
function f3() {
    console.log(nom + "-" + prenom); // Concaténation de chaînes (slide 38)
}
function f4() {
    console.log(age); // slide 34
}
function f5() {
    console.log(note); // slide 34
}
function f6() {
    console.log(pi); // slide 34
}

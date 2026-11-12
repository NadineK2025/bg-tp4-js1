"use strict"; // Mode strict (slide 52)

// Chaque fonction est appelée par l'événement onclick du bouton (slides 15 et 18)
// Déclaration d'une fonction sans paramètre (slide 46)

function f1() {
    // Tableau de chaînes de caractères (slide 39)
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Boucle for..of pour parcourir le tableau (slide 45)
    for (const etudiant of etudiants) {
        console.log(etudiant); // Affichage avec console.log (slide 34)
    }
}

function f2() {
    // Objet avec trois propriétés : nom, prenom, age (slide 40)
    const etudiant = { nom: "John", prenom: "DOE", age: 30 };

    console.log(etudiant); // slide 34
}

function f3() {
    // Tableau d'objets (slide 41)
    const etudiants = [
        { id: 1, nom: "nom1", prenom: "prenom1", age: 21 },
        { id: 2, nom: "nom2", prenom: "prenom2", age: 22 },
        { id: 3, nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Boucle for..of (slide 45), accès aux propriétés avec le point (slide 40)
    for (const etudiant of etudiants) {
        // Affichage formaté avec les backticks (slide 38)
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
    }
}

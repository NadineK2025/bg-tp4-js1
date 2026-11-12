"use strict"; // Mode strict (slide 52)

// Données Students : tableau d'objets (slide 41)
// Ordre des données : (id, prénom, nom, note, absences)
const students = [
    { id: 1000, prenom: "JOHN",   nom: "DOE",     note: 14, absences: 5 },
    { id: 2000, prenom: "BOB",    nom: "CARLTON", note: 7,  absences: 1 },
    { id: 3000, prenom: "RAYANE", nom: "SMITH",   note: 13, absences: 3 }
];

// Fonction B : un seul paramètre de type float, retourne un booléen (slide 46 : paramètre et retour)
function B(note) {
    // Opérateur de comparaison >= (slide 42) : true si la note est au moins 10
    return note >= 10;
}

// Fonction A : appelée par le bouton (onclick, slides 15 et 18), elle appelle B (slide 46)
function A() {
    // Boucle for..of pour parcourir le tableau d'objets (slide 45)
    for (const student of students) {
        // Notation ternaire (slide 43) selon le booléen retourné par B
        const decision = B(student.note) ? "ADMIS" : "AJOURNÉ";

        // Affichage un par un avec console.log et backticks (slides 34 et 38)
        console.log(`${student.id}: ${decision}`);
    }
}

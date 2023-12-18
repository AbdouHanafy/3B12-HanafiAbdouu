// Invitation à consulter le CV
alert("Bienvenu chez mon CV");

// Confirmation pour consulter le CV
confirm("Tu veux vraiment consulter mon CV ?");


var correct = false;

while (!correct) {
    var a = prompt("Je teste votre IQ. sin^2(x) + cos^2(x) = ?");
    var result = Math.sin(a) ** 2 + Math.cos(a) ** 2;

    if (result === 1) {
        alert("Yaatik sa7a, Maalem");
        correct = true;
    } else {
        alert("Ghalet, Allah ghaleb. Réessaye !");
    }
}
var questionType = prompt("Choisis le type de question (sport/music) :");

if (questionType === "sport") {
    // Question sur le sport
    var sportQuestion = prompt("9adeh haz men ballon d'or messi ?");
    
    if (sportQuestion.toLowerCase() === "8") {
        alert("sa7it,jawk behy frére");
    } else {
        alert("ghalet,baz t7eb c.ronaldo hah");
    }
} else if (questionType === "music") {
    // Question sur la musique
    var musicQuestion = prompt("chkoun ghanna ya lili ya lili ?");
    
    if (musicQuestion.toLowerCase() === "balti") {
        alert("ya old enty sa7a y Maalem ");
    } else {
        alert("maghroum bel mezwed baz ");
    }
} else {
    alert("Type de question non reconnu");
}

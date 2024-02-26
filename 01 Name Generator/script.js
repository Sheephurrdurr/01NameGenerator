const adjectives = ["Black", "Giant", "Hairy", "Decrepit", "Beautiful", "Ugly", "Huge", "Tiny", "Promiscuous", "Excessively Hairy", "Tuna Carrying", "Smelly", "Three Eyed"];
const things = ["Stone", "Pot", "Dog", "Cat", "Person", "Lady", "Kevin", "Frog", "Crucible Knight", "Jesus", "De Guzman", "Stick Figure", "Obi-Wan", "Lizard", ""];


const element = document.getElementById("generateBtn");
element.addEventListener("click", nameGenerator);


function nameGenerator() { // Pick random object from adjectives & things array
    document.getElementById("nameInput").innerHTML =
    adjectives[Math.floor(Math.random() * adjectives.length)] + " " // Rounds down a pseudo-random value between 0 & 1 * amount of objects in adjectives array. 
        + things[Math.floor(Math.random() * things.length)];;;  
}


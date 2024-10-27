let x = parseInt(prompt("enter ur nb"));
let container = document.getElementById("container");

function createChristmasTree(x) {
    let star = document.createElement("div");
    star.className = "star";
    star.innerHTML = "★";
    container.appendChild(star);

    for (let i = 0; i < x; i++) {
    let level = document.createElement("div");
    level.className = "level";

    let spaces = " ".repeat(x - i - 1);

    let leaves = new Array(2 * i + 1).fill("*");

    leaves[0]='<span class="yellow">*</span>';
    leaves[Math.floor(leaves.length / 2)] = '<span class="red">*</span>';

    leaves[Math.floor(Math.random() * leaves.length)] ='<span class="purple">*</span>';
    leaves[Math.floor(Math.random() * leaves.length)] ='<span class="silver">*</span>';
    leaves[Math.floor(Math.random() * leaves.length)] ='<span class="blue">*</span>';
    leaves[Math.floor(Math.random() * leaves.length)] ='<span class="gold">*</span>';
    leaves[Math.floor(Math.random() * leaves.length)] ='<span class="pink">*</span>';


    leaves[leaves.length - 1] = '<span class="yellow">*</span>';
    
    level.innerHTML = spaces + leaves.join(" ") + spaces;
    container.appendChild(level);
    }

    let root = document.createElement("div");
    root.className = "root";
    container.appendChild(root);
}

createChristmasTree(x);

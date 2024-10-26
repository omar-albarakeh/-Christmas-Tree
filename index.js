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
    let leaves = "*".repeat(2 * i + 1).split("");
    level.innerHTML = spaces + leaves.join(" ") + spaces;
    container.appendChild(level);
    }

    let root = document.createElement("div");
    root.className = "root";
    root.innerHTML = "&nbsp;&nbsp;&nbsp;|||||&nbsp;&nbsp;&nbsp;";
    container.appendChild(root);
}

createChristmasTree(x);

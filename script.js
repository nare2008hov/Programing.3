var socket = io();
var side = 20, m = 40, n = 40;

let button = document.getElementById("button")
button.addEventListener("click", changeColor)

function changeColor() {
    if (button.addEventListener === "winter") {
        color = {
            green: "89CFF3",
            yellow: "A0E9FF",
            red: "A0E9FF",
            purple: "CDF5FD",
            blue: "white",
            pink: "AEDEFC",
        }
    }
}

let colors = {
    green: "89CFF3",
    yellow: "A0E9FF",
    red: "A0E9FF",
    purple: "CDF5FD",
    blue: "white",
    pink: "AEDEFC",
}

// function mousePressed() {
//     ellipse(mouseX, mouseY, 5, 5);
//     console.log(mouseX, mouseY);
// }


socket.on("MATRIX", drawMatrix);

function setup() {
    createCanvas(n * side, m * side);
    background('#e8e8e8');
}

function drawMatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(color.green)
            }
            else if (matrix[y][x] == 2) {
                fill(color.yellow)
            }
            else if (matrix[y][x] == 3) {
                fill(color.red)
            }
            else if (matrix[y][x] == 4) {
                fill(color.purple)
            }
            else if (matrix[y][x] == 5) {
                fill(color.blue)
            }
            else if (matrix[y][x] == 6) {
                fill(color.pink)
            }
            rect(x * side, y * side, side, side)
        }
    }
}


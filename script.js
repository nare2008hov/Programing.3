var matrix = [];

var side = 40;
var grassArr = []
var GrassEaterArr = []
let PredatorArr = []
let characterCount = 5;
let FishArr = [];
let AmenakerArr = [];


// console.log("kanach",grassArr.length)
// console.log("dexin",GrassEaterArr.length)
// console.log("karmir",PredatorArr.length)
function setup() {
    MatrixGenerator();
    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2)
                GrassEaterArr.push(gre);
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3)
                PredatorArr.push(pre)
            }
            else if (matrix[y][x] == 4) {
                var fish = new Fish(x, y, 4)
                FishArr.push(fish)
            }
            else if (matrix[y][x] == 5) {
                var amen = new Amenaker(x, y, 5)
                AmenakerArr.push(amen)
            }
        }
    }


}

function draw() 
{ 

    if (GrassEaterArr.length == 0 && PredatorArr.length > 0) {
        for (var i in PredatorArr) {
            PredatorArr[i].die()
        }
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in GrassEaterArr) {
        GrassEaterArr[i].eat()
    }
    for (var i in PredatorArr) {
        PredatorArr[i].eat()
    }
    for (var i in AmenakerArr) {
        AmenakerArr[i].eat()
    }

   
}

function MatrixGenerator() {
    for (var y = 0; y < side; ++y) {
        matrix[y] = [];
        for (var x = 0; x < side; ++x) {
            matrix[y][x] = Math.round(random(0, characterCount));
        }
    }
}
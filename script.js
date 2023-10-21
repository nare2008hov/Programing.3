    socket = io();
    var side = 20,m = 40, n = 40;
    var matrix = []

    function setup() {
    createCanvas(n * side, m * side);
    background('#e8e8e8');
    frameRate(5);
    } 


    function drawMatrix(data) {
    matrix = data.matrix;
    for (var y = 0; y < matrix.length; y++) {

    }

}

socket.on("matrix", drawMatrix);

function setup() {
    frameRate(40);
    createCanvas(n * side, m * side);
    background('#e8e8e8');
    }

function draw(m) {
    matrix = m 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            
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


    // for (var i in grassArr) {
    //     grassArr[i].mul()
    // }
    // for (var i in GrassEaterArr) {
    //     GrassEaterArr[i].eat()
    // }
    // for (var i in PredatorArr) {
    //     PredatorArr[i].eat()
    // }
    // for (var i in AmenakerArr) {
    //     AmenakerArr[i].eat()
    // }

   
}

// function MatrixGenerator() {
//     for (var y = 0; y < side; ++y) {
//         matrix[y] = [];
//         for (var x = 0; x < side; ++x) {
//             matrix[y][x] = Math.round(random(0, characterCount));
//         }
//     }
// }



socket.on('MATRIX', (m)=>{
    matrix = m
})

socket.on('MATRIX', (m)=>{
    draw(m)
})
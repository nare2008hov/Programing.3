let random = require("./random");
var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});


matrix = [];

var sideX = 35
var sideY = 70
grassArr = []
GrassEaterArr = []
PredatorArr = []
FishArr = [];
AmenakerArr = [];

var Grass = require('./class')
var GrassEater = require('./GrassEater')
var Fish = require('./Fish')
var Amenaker = require('./amenaker')
var Predator = require('./Predator')



function createMatrix() {
    for (let i = 0; i < sideX; i++) {
        matrix.push([])
        for (let j = 0; j < sideY; j++) {
            matrix[i].push(0)
        }
    }

    function character(char, qantity) {
        for (let i = 0; i < qantity; i++) {
            var x = Math.floor(random(sideX));
            var y = Math.floor(random(sideY))
            matrix[x][y] = char;
        }
    }

    character(1, 400);
    character(2, 150);
    character(3, 1);
    character(4, 2);

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

function playGame() {
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

    io.emit('MATRIX', matrix)
}


io.on('connection', function (socket) {
    socket.emit('MATRIX', matrix)
    createMatrix()
    setInterval(function () {
        playGame()
    }, 1000)
})



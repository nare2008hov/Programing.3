let random = require("./random");
var LivingCreater = require('./LivingCreater')
module.exports = class Predator extends LivingCreater{
    constructor(x, y, index) {
        super(x, y)
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        return super.chooseCell(character);
    }

    mul() {
        var newCell = random(this.chooseCell(2));
        if (newCell) {
            var newPre = new Predator(newCell[0], newCell[1], this.index);
            PredatorArr.push(newPre);
            matrix[newCell[1]][newCell[0]] = 3;
        }
        else {
            this.die()
        }
    }

    eat() {
        let foods = this.chooseCell(2)
        let food = random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 2
            this.x = newX
            this.y = newY
            for (var i in GrassEaterArr) {
                if (newX == GrassEaterArr[i].x && newY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.mul()
        }
        else {
            this.move()
        }

    }
    move() {
        this.energy--
        if (this.energy <= 0) {
            this.die()
        }
        else {
            let emptyCells = this.chooseCell(2)
            let newCell = random(emptyCells)
            if (newCell) {
                let newX = newCell[0]
                let newY = newCell[1]
                matrix[this.y][this.x] = 0
                matrix[newY][newX] = 3
                this.x = newX
                this.y = newY
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in PredatorArr) {
            if (this.x == PredatorArr[i].x && this.y == PredatorArr[i].y) {
                PredatorArr.splice(i, 1);
                break;
            }

        }
    }
}
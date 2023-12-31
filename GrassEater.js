var LivingCreater = require('./LivingCreater')
let random = require("./random");

module.exports = class GrassEater extends LivingCreater {
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
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    
    mul() {
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            var newGrassE = new GrassEater(newCell[0], newCell[1], this.index);
            GrassEaterArr.push(newGrassE);
            matrix[newCell[1]][newCell[0]] = 2;
        }
    }
    eat() {
        let foods = this.chooseCell(1)
        let food = random(foods)
        if (food) {

            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 2
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 9) {
                this.mul()
            }
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
            let emptyCells = this.chooseCell(0)
            let newCell = random(emptyCells)
            if (newCell) {
                let newX = newCell[0]
                let newY = newCell[1]
                matrix[this.y][this.x] = 0
                matrix[newY][newX] = 2
                this.x = newX
                this.y = newY
            }
        }
    }
    
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                GrassEaterArr.splice(i, 1);
                break;
            }

        }
    }
}
var LivingCreater = require('./LivingCreater')
let random = require("./random");

module.exports = class Amenaker extends LivingCreater {
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
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newAme = new Amenaker(newCell[0], newCell[1], this.index);
            AmenakerArr.push(newAme);
            matrix[newCell[1]][newCell[0]] = 5;
        }
        else{
            this.die()
        }
    }

    eat() {
        let foods = this.chooseCell(3)
        let food = random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 5    
            this.x = newX
            this.y = newY
            for (var i in PredatorArr) {
                if (newX == PredatorArr[i].x && newY ==PredatorArr[i].y) {
                    PredatorArr.splice(i, 1);
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
        } else {
            let emptyCells = this.chooseCell(0)
            let newCell = random(emptyCells)
            if (newCell) {
                let newX = newCell[0]
                let newY = newCell[1]
                matrix[this.y][this.x] = 0
                matrix[newY][newX] = 5
                this.x = newX
                this.y = newY
            }
        }
    }
    
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in AmenakerArr) {
            if (this.x == AmenakerArr[i].x && this.y == AmenakerArr[i].y) {
                AmenakerArr.splice(i, 1);
                break;
            }

        }
    }
}







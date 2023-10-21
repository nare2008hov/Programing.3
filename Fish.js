var LivingCreater = require('./LivingCreater')
let random = require("./random");

module.exports = class Fish extends LivingCreater{
    constructor(x, y, index) {
        super(x, y)
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
            var newGrassE = new Fish(newCell[0], newCell[1], this.index);
            FishArr.push(newGrassE);
            matrix[newCell[1]][newCell[0]] = 4;
        }
    }

    move() {
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
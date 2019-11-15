// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height
    }

    volume() {
        return this.length * this.width * this.height;
    }
 
    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

// 2. Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(attributes) {
        super(attributes);
    }

    volume() {
        if((this.length === this.width) && (this.length === this.height) && (this.width === this.height)) {
            return Math.pow(this.length, 3);
        } else {
            return `The length, the width, and the height must be the same in order to be considered as a cube!`
        }
    }

    surfaceArea() {
        if((this.length === this.width) && (this.length === this.height) && (this.width === this.height)) {
            return (this.length * this.length) * 6;
        } else {
            return `The length, the width, and the height must be the same in order to be considered as a cube!`
        }
    }
}

const cube1 = new CubeMaker({
    length: 2,
    width: 2,
    height: 2
})

const cube2 = new CubeMaker({
    length: 2,
    width: 4,
    height: 6
})

console.log(cube1.volume()); // 8
console.log(cube1.surfaceArea()); // 24
console.log(cube2.volume());
console.log(cube2.surfaceArea());
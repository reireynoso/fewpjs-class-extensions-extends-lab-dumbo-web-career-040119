// Your code here
class Polygon {
    constructor(array){
        this.array = array;
    }
    get countSides(){
        return this.array.length;
    }
    get perimeter(){
        let sum = 0;
        this.array.forEach(num => {
            sum += num;
        })
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid(){
        return ((this.array[0] + this.array[1] > this.array[2]) && (this.array[1] + this.array[2] > this.array[0]) && (this.array[0] + this.array[2] > this.array[1]));
    }
}

class Square extends Polygon {
    get area(){
        return this.array[0] * this.array[1];
    }

    get isValid(){
        return ((this.array[0] === this.array[1]) && (this.array[0] == this.array[2]) && (this.array[0] == this.array[2]))
    }
}
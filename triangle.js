function triangleType(sideA, sideB, sideC) {
    "use strict";
    if (arguments.length !== 3) {
        throw "there needs to be exactly 3 arguments";
    }
    if (typeof sideA !== "number" || typeof sideB !== "number" || typeof sideC !== "number") {
        throw "all arguments have to be numbers";
    }
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
        throw "all arguments have to be positive";
    }
    if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
        throw "it's only a valid triangle if any two side's sum are greater than the third side";
    }
    if (sideA === sideB && sideB === sideC) {
        return "equilateral";
    } else if (sideA === sideB || sideB === sideC || sideC === sideA) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

module.exports = triangleType;
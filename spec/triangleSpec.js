describe("triangle", function() {
  var triangleType = require('../triangle');

  it("should return equilateral if all sides are equal", function() {
    expect(triangleType(3,3,3)).toEqual('equilateral');
  });

  it("should return isosceles if two sides are equal", function() {
    expect(triangleType(3,3,2)).toEqual('isosceles');
  });

  it("should return scalene if no sides are equal", function() {
    expect(triangleType(3,4,2)).toEqual('scalene');
  });

  it("should throw error if no arguments provided", function() {
    expect(function() {triangleType()} ).toThrow("there needs to be exactly 3 arguments");
  });

  it("should throw error if 1 arguments provided", function() {
  	expect(function() {triangleType(8)} ).toThrow("there needs to be exactly 3 arguments");
  });

  it("should throw error if 2 arguments provided", function() {
    expect(function() {triangleType(11, 22)} ).toThrow("there needs to be exactly 3 arguments");
  });

  it("should throw error if an argument is 0", function() {
    expect(function() {triangleType(3,4,0)} ).toThrow("all arguments have to be positive");
  });

  it("should throw error if an argument is a negative number", function() {
    expect(function() {triangleType(3,-4,2)} ).toThrow("all arguments have to be positive");
  });

  it("should throw error if an argument is not a number", function() {
  	expect(function() {triangleType(3,'bear',2)} ).toThrow("all arguments have to be numbers");
  	expect(function() {triangleType({1: '1'},2,2)} ).toThrow("all arguments have to be numbers");
  	expect(function() {triangleType(1,[],2)} ).toThrow("all arguments have to be numbers");
  });

  it("should throw error if the sum of any two sides are not greater than the third side", function() {
  	expect(function() {triangleType(3,2,1)} ).toThrow("it's only a valid triangle if any two side's sum are greater than the third side");
  });

  it("should work with floats", function() {
    expect(triangleType(3.3,4.3,5.2)).toEqual('scalene');
  });

});
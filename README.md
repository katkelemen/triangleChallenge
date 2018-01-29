## Triangle challenge

Description: Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

### How to run

- ``` git clone https://github.com/katkelemen/triangleChallenge.git ```
- ``` npm install ```
- to run the tests: ``` npm test ```

### My steps of implementing

- I set up a testing environment using Jasmine from https://jasmine.github.io/setup/nodejs.html

- I wrote the first 3 tests and made them pass. This also checks if my environment is set up and running correctly. The basic idea is that if a triangle's all 3 sides are the same size, then it is an equilateral triangle, if 2 sides are the same size, then it is an isosceles triangle, otherwise its a scalene triangle.

- After this I started thinking of error cases, created the tests for them and made them pass. The function shouldn't return with a valid answer if:
    - there is less than 3 arguments provided
    - at least one of the arguments are 0 or negative
    - at least one of the arguments are not numbers
    - it should work with floating point numbers

- I wanted to be sure I didn't forget something so I checked if there is any other requirements for the 3 sides to form a triangle and realised I need to make a case for the inequality rule, which states that the length of a side of a triangle is less than the sum of the lengths of the other two sides and greater than the difference of the lengths of the other two sides.

- I had this function at that point:

``` javascript
function triangleType (sideA, sideB, sideC) {
	var positiveNumbers = sideA > 0 && sideB > 0 && sideC > 0;
	var validTriangle = sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB;
	if (positiveNumbers && validTriangle) {
		if (sideA === sideB && sideB === sideC) {
			return 'equilateral'
		} else if (sideA === sideB || sideB === sideC || sideC === sideA) {
			return 'isosceles'
		} else {
			return 'scalene'
		}
	}
	return null;
};
```

The problem here is that this returns with a null for all error cases so I rewrote it to throw errors that will tell the function user more explicitly about what went wrong.

I also used a linter to make sure my code is good quality and safe.
//function
function addThreeAndFive() {
    return 3+5;
}

//function calling
console.log(addThreeAndFive());

//function 2
function addTenAndThirty(){
    return 10+30;
}

//calling function 2
console.log(addTenAndThirty());

// working with parameters
function calculateSum(num1, num2) {
    return num1 + num2;
}
//console
console.log(calculateSum(7, 10));

console.log(calculateSum(20,  50));

console.log(calculateSum(200, 1000));

console.log(calculateSum(0.5, 0.7));

console.log(calculateSum(-10, 5));

//subtraction functions

function calculateDifference(num1, num2) {
    return num1 - num2;
}

//console for subtraction

console.log(calculateDifference(20, 10));
console.log(calculateDifference(100, 50));
console.log(calculateDifference(5, 15));   
console.log(calculateDifference(0.7, 0.2));
console.log(calculateDifference(-5, -10));

//multiplication function
function calculateProduct(num1, num2) {
    return num1 * num2;
}

//console for multiplication
console.log(calculateProduct(5, 10));
console.log(calculateProduct(7, 8));
console.log(calculateProduct(0.5, 0.2));
console.log(calculateProduct(-4, 6));
console.log(calculateProduct(-3, -3));

//division function
function calculateQuotient(num1, num2) {
    if (num2== 0) {
        return "Error: Division by zero is not allowed.";
    } else {
        return num1 / num2;
    }
}

//console for division
console.log(calculateQuotient(20, 4));
console.log(calculateQuotient(15, 3));
console.log(calculateQuotient(7, 0.5));
console.log(calculateQuotient(-12, 4));
console.log(calculateQuotient(-20, -5));
console.log(calculateQuotient(10, 0)); //division by zero case

//square function
function calculateSquare(num) {
    return num * num;
}

//console for square
console.log(calculateSquare(5));
console.log(calculateSquare(-4));
console.log(calculateSquare(0.5));
console.log(calculateSquare(0));
console.log(calculateSquare(-2.5));

//cube function
function calculateCube(num) {
    return num * num * num;
}

//console for cube
console.log(calculateCube(3));
console.log(calculateCube(-2));
console.log(calculateCube(1.5));
console.log(calculateCube(0));
console.log(calculateCube(-1.5));

//power function
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}
//console for power
console.log(calculatePower(2, 3));
console.log(calculatePower(5, 0)); 
console.log(calculatePower(4, -1));
console.log(calculatePower(-3, 2));
console.log(calculatePower(2, 4.5));

//square root function
function calculateSquareRoot(num) {
    if (num < 0) {
        return "Error: Cannot calculate square root of a negative number.";
    } else {
        return Math.sqrt(num);
    }   
}

//console for square root
console.log(calculateSquareRoot(16));
console.log(calculateSquareRoot(0));
console.log(calculateSquareRoot(2.25));
console.log(calculateSquareRoot(-4)); //negative number case
console.log(calculateSquareRoot(100));
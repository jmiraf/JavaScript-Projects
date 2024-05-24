//This is the addition function
function add_function() {
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition; //Print the result in HTML
}
//This is the subtraction function
function sub_function() {
    var subtraction = 8 - 4;
    document.getElementById("sub").innerHTML = "8 - 4 = " + subtraction; //Print the result in HTML
}
//This is the multiplication function
function multiplication() {
    var muldiv = 7 * 6;
    document.getElementById("mul").innerHTML = muldiv; //Print the result in HTML
}
//This is the division function
function division() {
    var muldiv = 48 / 6;
    document.getElementById("div").innerHTML = muldiv; //Print the result in HTML
}
//Multiple operators function
function multiple_function() {
    var multiple_ops = (1 + 2) * 10 / 2 - 5;
    document.getElementById("operators").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + multiple_ops; //Print the result in HTML

}
//This is the modulus function
function modulus_operator() {
    var modulus_op = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_op; //Print the result in HTML
}
//This is the negation function
function negation_operator() {
    var a = 5;
    document.getElementById("unary").innerHTML = -a; //Print the result in HTML
}

function random() {
    document.getElementById("random").innerHTML = Math.floor(Math.random() * 11); // Math.floor(Math.random() * 11) returns a random integer between 0 and 10 
}

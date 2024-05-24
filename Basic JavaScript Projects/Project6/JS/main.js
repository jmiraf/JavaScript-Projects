function ride_Function() {
    var Height = document.getElementById("height").value ;
    var can_ride = Height < 5 ? "You are too short " : "You are tall enough " ;
    document.getElementById("ride").innerHTML = can_ride + "to ride" ;
}
//A constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Tesla", "Cybertruck", 2024, "Silver");
var Jill = new Vehicle("Ford", "F-150", 2023, "Black");
var Jell = new Vehicle("Benz", "EQB SUV", 2024, "Blue");

//Function to display the results of the constructor
function myFunction() {
    document.getElementById("keywords").innerHTML = "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Make + " " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}

//Nested function
function add_Function() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("World!");
    document.getElementById("nested").innerHTML = start_string;
}
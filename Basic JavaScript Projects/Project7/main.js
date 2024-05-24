//Assigning local and global variables

function Add_numbers_1() {
    var x = 99; //local variable
    document.write(10 + x + "<br>"); //using local variable
}

function Add_numbers_2() {
    document.write(x + 11); //using global variable
    console.log(x); //using console.log to debug which variable is being used
}

Add_numbers_1();
Add_numbers_2();


function my_dictionary() {
	var Animal = { Species: "Cat", Color: "Brown", Breed: "Siamese", Age: 3, Sound: "Meow!" };
    // delete Animal.Sound;
	document.getElementById("dictionary").innerHTML = Animal.Sound;
}
function my_function() {
    // document.getElementById("test").innerHTML = 0/0 ; // the result would be NaN because you can't divide 0 by 0
    // document.getElementById("test").innerHTML = isNaN('This is a string') ; // this would dislay true
    document.getElementById("test").innerHTML = isNaN('007') ; // the result False because 007 is a number
}

function full_sentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete " ;
    var part4 = "sentence. " ;
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("concat").innerHTML = whole_sentence;
}

function slice_function() {
    var sentence = "All work and no play makes Johnny a dull boy. ";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}

function uppercase_function() {
    var text = "Hello World!";
    var upper = text.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}
// searches a string for a value and returns the position of the first match
function search_function() {
    var text2 = "Java is to JavaScript. What car is to Carpet. ";
    var search = text2.search("JavaScript");
    document.getElementById("search").innerHTML = search;
}

function string_method() {
    var x = 182 ;
    document.getElementById("number").innerHTML = x.toString() ;
}

function precision_method() {
    var x = 12983.3012987376112;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}
//converts a number to a string, rounded to two decimals
function fixed_method() {
    var x = 8.12945;
    document.getElementById("fixed").innerHTML = x.toFixed(2);
}
//returns the primitive value of a string
function valueof_method() {
    var y = "Oh Canada!";
    var result = y.valueOf();
    document.getElementById("valueof").innerHTML = result;
}
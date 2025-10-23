var age = 31;
console.log (age);
var name = 'Courtney';
console.log (name);
var size = 100;
var maxsize = (size * 4) + 15;
console.log ("Hi there! Welcome to my Portfolio");
var escapedText1 = "He said: \"Yes!\", that's for sure";
console.log (escapedText1);
var boolean1 = true;
console.log (boolean1);
var age = 39;
var name = "Anne";
var personparent = {
    name: name,
    age: age,
    child: {
        name: "Sara"
    }
};
console.log (personparent["name"]);
var emptyvariable = null;
console.log (emptyvariable);
var shortarray = [1,2,3];
console.log (shortarray[1]);
var mixedarray = [
    1,
    "Hiya",
    {}
    ["nested array"]
];
console.log (mixedarray);
var age = 31;
var name = "Courtney DeOrdio";
var hobby = "Skiing and Hiking";
var personparent = {
    name:name,
    age: age,
    hobby: hobby,
}
console.log (personparent);
function add (number1, number2) {
    return number1 + number2;
}
var result = add(10,10);
console.log (result);

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle'){
    x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}
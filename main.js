function Thing(name) {
    if (typeof name === 'string') {
        this.name = name;
    } else if (typeof name === 'number') {
        this.name = name.toString();
    }

    this.isMyTurn = function() {
        return false;
    }

    return this;
}

function BadThing(name) {
    var bt = new Object();
    bt.name = name;
    return bt;
}

var obj = new Object();
obj.name = "Tom";

var obj2 = {
    name: 'Sue'
}

var thing = new Thing('thing');
// var thing = new BadThing('thing');
var thing2 = new Thing(2);

console.log(thing.isMyTurn());
console.log(thing2.name);
console.log(thing == thing2);

console.log(obj);
console.log("obj: " + obj);
console.log(obj2);
console.log("obj2: " + obj2);
console.log(thing);
console.log("thing: " + thing);
console.log(thing2);
console.log("thing2: " + thing2);

console.log("typeof Tom: " + typeof obj);
console.log("typeof Sue: " + typeof obj2);
console.log("typeof thing: " + typeof thing);

console.log("is obj Object: " + (obj instanceof Object));
console.log("is obj2 Object: " + (obj2 instanceof Object));
console.log("is thing Object: " + (thing instanceof Object));

console.log("is obj Thing: " + (obj instanceof Thing));
console.log("is obj2 Thing: " + (obj2 instanceof Thing));
console.log("is thing BadThing: " + (thing instanceof BadThing));

console.log(obj.name);
document.write('<h3>' + obj.name + '</h3>');

console.log(obj2.name);
document.write('<h3>' + obj2.name + '</h3>');

console.log(thing.name);
document.write('<h3>' + thing.name + '</h3>');

console.log(thing2.name);
document.write('<h3>' + thing2.name + '</h3>');

var arr = new Array(1, 2, 3, 4, 5);
var arr2 = new Array(5);
var arr3 = [1, 2, 3, 4, 5];

for (var i = 0; i < arr2.length; i++) {
    arr2[i] = (i + 10);
}

arr2.length = 10;

var item = arr2.shift();
var item2 = arr3.pop();

arr2.push(5);
arr2.unshift(1);

function sort_numbers(a) {
    return a
}

arr2.sort(function(a, b) { return b - a });
arr2.reverse();

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(item);
console.log(item2);

console.log("typeof arr: " + typeof arr);
console.log("typeof arr2: " + typeof arr2);
console.log("typeof arr3: " + typeof arr3);

console.log("is arr Array: " + (arr instanceof Array));
console.log("is arr2 Array: " + (arr2 instanceof Array));
console.log("is arr3 Array: " + (arr3 instanceof Array));

console.log(typeof arr === 'object' && arr instanceof Array);
// Generic functions
var writeToConsole = function (value) {
    console.log(value);
};
writeToConsole(67890);
writeToConsole("Hello Again");
writeToConsole([4, 5, 6]);
var writeToConsoleUpperCase = function (value) {
    // Will not compile
    // console.log(value.toUpperCase());
};
var user = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30
};
var organization1 = {
    name: 'Sample Organization',
    location: 'Paris, France',
    members: [111, 222, 333]
};
console.log(organization1); // { name: 'Sample Organization', location: 'Paris, France', members: [ 111, 222, 333 ]}
var organization2 = {
    name: 'Another Organization',
    location: 'Brussels, Belgium',
    members: 'Independent'
};
console.log(organization2); // { name: 'Another Organization', location: 'Brussels, Belgium', members: 'Independent' }
// Generic class
var ArrayBuilder = /** @class */ (function () {
    function ArrayBuilder() {
        this._array = [];
    }
    ArrayBuilder.prototype.add = function (value) {
        this._array.push(value);
    };
    ArrayBuilder.prototype.writeToConsole = function () {
        console.log(this._array);
    };
    return ArrayBuilder;
}());
var example = new ArrayBuilder();
example.add(1);
example.add(2);
example.writeToConsole(); // [1, 2]
var example2 = new ArrayBuilder();
example2.add('one');
example2.add('two');
example2.writeToConsole(); // [one, two]

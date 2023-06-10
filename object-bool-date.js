// Bài 1-1
console.log("***** Bài 1-1 *****");
var person = {
    name: 'Trung',
    age: 23,
    occupation: 'IT'
};

function displayInformation(info) {
    return (`Name: ${info.name}, Age: ${info.age}, Occupation: ${info.occupation}`);
}

var display = displayInformation(person);
console.log(display);

//Bài 1-2
console.log("***** Bài 1-2 *****");
var calculator = {
    value: 0,
    display: function () {
        console.log(this.value);
    },
    add: function (number) {
        this.value += number;
    },
    subtract: function (number) {
        this.value -= number;
    },
    divine: function (number) {
        if (number > 0) {
            this.value /= number;
        } else {
            console.log("Cannot divine number <= 0");
        }
    },
    multiply: function (number) {
        this.value *= number;
    }
};


calculator.display();

calculator.add(5);
calculator.display();

calculator.subtract(3);
calculator.display();

calculator.divine(2)
calculator.display();

calculator.multiply(10);
calculator.display();

//Bài 2a
console.log("***** Bài 2a *****");

function isEvenNumber(number) {
    if (number % 2 === 0 && number !== 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isEvenNumber(0)

//Bài 2b
console.log("***** Bài 2b *****");

function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isLeapYear(2000)
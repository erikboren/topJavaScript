/*jshint esversion: 6 */
//from funfunfunctions ep 16,17
const food = {
    init: function(type){
        this.type = type;
    },
    eat: function() {
        console.log('you ate the ' + this.type);
    }
};

const waffle = Object.create(food);
waffle.init('waffle');
waffle.eat();
food.type = 'tomato'; //since waffle has type from waffle.init(), this will not affect waffle
waffle.eat();
// Object.create doees not create a new food Object. I creates an object with food as it's prototype
// If an object does not have the specified property it will fallback to it's prototype.

console.log(food.isPrototypeOf(waffle)); // can be used to check prototype.

//Factories vs. Prototypes
//Factories does not need this. Prototypes are slightly faster and memory efficient but not really neccesarry
 
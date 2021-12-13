function book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read == "yes" ? "have read":"have not read";

  this.info = function(){
    return title + " by " + author + " " + pages + " pages " + this.read;
  }
}

const theHobbit = new book("The Hobbit", "J.R.R Tolkien", "451","yes");

// console.log(theHobbit.info());

// prototypes

class Student {
  constructor() {
  }
  sayName() {
    console.log(this.name);
  }
}


function EighthGrader(name) {
    this.name = name
    this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("Carl")

carl.sayName()

console.log("Carls grade is: " + carl.grade)
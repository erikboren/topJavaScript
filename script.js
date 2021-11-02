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

console.log(theHobbit.info());

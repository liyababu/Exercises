Library Excercise using class

class Book{
  constructor(title,author,copyrightDate,ISBN,numberOfPages,numberOfTimes,bookDiscarded){
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ISBN = ISBN;
    this.numberOfPages = numberOfPages;
    this.numberOfTimes = numberOfTimes;
    this.bookDiscarded = bookDiscarded;
    
  }
}


// Define your Manual and Novel classes here:

class Manual extends Book{
  constructor(title,author,copyrightDate,ISBN,numberOfPages,numberOfTimes,bookDiscarded) {
      super(title,author,copyrightDate,ISBN,numberOfPages,numberOfTimes,bookDiscarded);
  }
      dispose(currentYear){
        if(currentYear-this.copyrightDate>5){
          this.bookDiscarded ="yes";
          console.log(Manual1)         
        }
        
      }
} 

class Novel extends Manual{
  constructor(title,author,copyrightDate,ISBN,numberOfPages,numberOfTimes,bookDiscarded){
    super(title,author,copyrightDate,ISBN,numberOfPages,numberOfTimes,bookDiscarded);
  }
    dispose(){
        if((this.numberOfTimes>100)){
          this.bookDiscarded ="yes";
          console.log(Novel1)
        }
        else{
          console.log(Novel1)
        }
    }
 
  
}
// Declare the objects for part 2 here:

let Manual1 = new Manual('Top Secret Shuttle Building Manual','Redacted',2013,0000000000000,1147,1,'No');
let Novel1 = new Novel('Pride and Prejudice','Jane Austen',1813,1111111111111,432,32,'No');
// Code part 3 here:
Manual1.dispose(2020);
Novel1.dispose();

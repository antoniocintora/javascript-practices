class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this.title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(isChecked) {
      this._isCheckedOut = isChecked;
    }
  
    toggleCheckOutStatus() {
      if (this._isCheckedOut === false) {
        this._isCheckedOut = true;
      } else if (this._isCheckedOut === true) {
        this._isCheckedOut = false;
      }
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthOfArray = this._ratings.length;
      return ratingsSum / lengthOfArray 
    }
  
    addRating(rating) {
      if (rating > 5) {
        console.log('You can only rate from 0 to 5.');
      } else if (rating <= 5){
      this._ratings.push(rating);
      }
    }
  };
  
  
  class Book extends Media {
    constructor(title, author, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }  
  
    get author() {
      return this._author;
    }
  
    get pages(){
      return this._pages;
    }
  
  };
  
  class Movie extends Media {
    constructor(title, director, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = [];
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  
    get movieCast() {
      return this._movieCast;
    }
  
    addMovieCast(title, actor, role) {
     this._movieCast.push(actor);
    }
  
  };
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());
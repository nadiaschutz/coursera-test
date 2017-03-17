function mixAndCook(){
console.log("mixing the ingridients");
 console.log("mpuring the mixture into the frying pan");
 console.log("cooking the first side");
 console.log("flipping it");
 console.log("cooking the other side");
};

var cheese = "cheddar"

function makeOmelette(){

  var cheese = "swiss"
  mixAndCook()
  var omelette=(cheese +" omelette");
  return omelette;
}
console.log (makeOmelette());

 


function makePancake(){
  mixAndCook();
  var pancake = (cheese + " pancake");
  return pancake;
}
console.log (makePancake());


function largestOfFour(arr) {
 
  var largestArr=[0,0,0,0];

  
  for (i=0; i<arr.length;i++){
    for (y=0; y<arr[i].length;y++){
      if (arr[i][y]>largestArr[i]) {
        largestArr[i] = arr[i][y];
        
    }
  }
 }

return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



function output(){
    var basePrice;
    var flatMarkupPrice=basePrice*0.05+basePrice;
    var people;
    var peopleMarkupPrice=(people*0.012*flatMarkupPrice)+flatMarkupPrice;
    
    if 
    
}

/*There's a couple ways you could do it. If I may suggest I think the most practical way would be an object with the markups.*/
        
let markup = {
  ...
  food : 0.13
  ...
}




var Car = function(wheels, seats, engines) {
  //Change this constructor
    this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

//Try it out here
var myCar=new Car(7, 5, 2);
    
    
var output = function(basePrice, people, markup){
    this.basePrice = basePrice;
    this.people = people;
    this.markup = markup;
  
}

var myOutput= new output(1,299.99, 3, food);
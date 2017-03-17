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



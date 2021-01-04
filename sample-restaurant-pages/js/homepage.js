//declare variables
var sideindex=0;
var drinkindex=0;
var dessertindex=0;
var sidesElts;
var drinksElts;
var dessertsElts;

// animate sides
function animateSides(){
 // retrieve the side images and hide them;
 sidesElts=$(".sides-wrapper").children("div.side").addClass("hide");
 if(sideindex >= 0){   
  sidesElts[sideindex].className=sidesElts[sideindex].className.replace("animate-side", "");
 }

 sideindex++;
 //if we reach the last element, get back to the first one
 if(sideindex >= sidesElts.length){
  sideindex=0;
 }
 sidesElts[sideindex].className=sidesElts[sideindex].className.replace("hide", "");
 sidesElts[sideindex].className+="animate-side"; 
}

// animate drinks
function animateDrinks(){
 // retrieve the drink images and hide them;
 drinksElts=$(".drinks-wrapper").children("div.drink").addClass("hide");
 if(drinkindex >= 0){  
  drinksElts[drinkindex].className=drinksElts[drinkindex].className.replace("animate-drink", "");
 }

 drinkindex++;
 //if we reach the last element, get back to the first one
 if(drinkindex >= drinksElts.length){
  drinkindex=0;
 }
 drinksElts[drinkindex].className=drinksElts[drinkindex].className.replace("hide", "");
 drinksElts[drinkindex].className+="animate-drink"; 
}

// animate drinks
function animateDesserts(){
 // retrieve the dessert images and hide them;
 dessertsElts=$(".desserts-wrapper").children("div.dessert").addClass("hide");
 if(dessertindex >= 0){  
  dessertsElts[dessertindex].className=
   dessertsElts[dessertindex].className.replace("animate-dessert", "");
 }

 dessertindex++;
 //if we reach the last element, get back to the first one
 if(dessertindex >= dessertsElts.length){
  dessertindex=0;
 }
 dessertsElts[dessertindex].className=dessertsElts[dessertindex].className.replace("hide", "");
 dessertsElts[dessertindex].className+="animate-dessert"; 

}

window.onload=function (){


 // retrieve side images and show only the first one
 sidesElts=$(".sides-wrapper").children("div.side");
 for(var i=1 ; i<sidesElts.length; i++){
  sidesElts[i].className+=" hide";
 }
 //animate side elements
 setInterval(animateSides,10000);

 // retrieve the drinks images and hide them except the first
 drinksElts=$(".drinks-wrapper").children("div.drink");
 for(var i=1 ; i<drinksElts.length; i++){
  drinksElts[i].className+=" hide";
 }
 //animate drink elements
 setInterval(animateDrinks,10000);

 // retrieve the dessert images and hide them except the first
 dessertsElts=$(".desserts-wrapper").children("div.dessert");
 for(var i=1 ; i<dessertsElts.length; i++){
  dessertsElts[i].className+=" hide";
 }
 //animate dessert elements
 setInterval(animateDesserts,10000);
}
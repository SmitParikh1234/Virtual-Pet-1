//Create variables here
var database;
var foodS,foodStock;
var dog;
var dogImage;
var happyDog;
var backgroundImage;

function preload(){

  //load images here
  happyDog = loadImage("happydog.png");
  dogImage = loadImage("dog1.png");
  backgroundImage = loadImage("park.jpg");

}

function setup () {

database = firebase.database();
createCanvas(500, 500);

dog = createSprite(270,270,20,30);
dog.addImage(dogImage);
dog.scale = 0.15;

foodStock = database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
  background(backgroundImage);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }


  
  

 
  
  drawSprites();
  //add styles here

  



textSize(21);
fill("black");
stroke("black");
text("PRESS THE UP ARROW KEY TO  ", 70,450,400,20);
text("FEED THE DOG", 170,480,300,20);
text("REMAINING FOOD : "+ foodS,137,350);

}

function readStock(data){
  foodS = data.val();
  }


function writeStock(x){
    if (x <= 0){
       x = 0;
       
     } else{
      x = x-1;
    }
   
   database.ref('/').update({
    Food:x
  })
  }

  
  
  





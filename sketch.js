//Create variables here
var dog, happyDog;
var foodS, foodStock;
var database;

function preload()
{
	dogImage = loadImage("images/dogImg.png")
  dogImage1 = loadImage("images/dogImg1.png");
}

function setup() {
	database = firebase.database();
  createCanvas(500, 500);

  dog = createSprite(250, 320, 0, 0);
  dog.addImage(dogImage)
  dog.scale = 0.2

  foodStock = database.ref("food");
  foodStock.on("value", readStock);

  
  
}


function draw() {  
  background(46, 139, 87);
  textSize(25);
  fill("blue")
  text("press 'up arrow' to feed DRACO", 70, 50)

  if (keyDown(UP_ARROW)){
    writeStock(foodS)
  }


  drawSprites();
  
  textSize(30);
  fill("blue");
  text("Milk Bottles: "+foodS, 150, 150)

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  database.ref("/").update({
    food:x
  })
}




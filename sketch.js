var formObj,question;
var posX = 400
var posY = 300
var answer;
var userAns;
var backGround,player,tree,cutter;

function preload() {
  backGround = loadImage("sprites/background.png.jpg");
  player = loadImage("sprites/player.png");
  tree = loadImage("sprites/tree.png");
  cutter = loadImage("sprites/tree cutter");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  formObj = new Form();
  formObj.display();
  
  
}

function draw() {
 background(backGround); 
 // formObj.generateQuestions(); 
  spawnQuestions();
 
  textSize(50);
  fill(255)
  text(question,posX,posY);
  posY = posY + 5;
 userAns = formObj.ansInput.value();
 console.log(userAns)
 if(userAns==answer){
   posY = displayHeight+1;
 }
}
function spawnQuestions() {
 if(posY>displayHeight){
formObj.generateQuestions();
 } 
}
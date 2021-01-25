var garden, backgroundImg;
var cat, catImg, cat_running, catStop, mouse, mouseImg, moise_teasing, mouseStop;
function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/tomOne.png");
    cat_running = loadAnimation("images/tomTwo.png", "images/tomThree.png");
    catStop = loadAnimation("images/tomFour.png");
    mouseImg = loadAnimation("images/jerryOne.png");
    mouse_teasing = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
    mouseStop =loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,750);
    //create tom and jerry sprites here
    garden = createSprite(500, 375);
    garden.addImage(backgroundImg);
    cat = createSprite(750, 620);
    cat.addAnimation("sitting", catImg);
    cat.scale = 0.11;
    mouse = createSprite(150, 620);
    mouse.addAnimation("standing", mouseImg);
    mouse.scale = 0.1;
}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2)
    {
        cat.velocityX = 0;
        cat.addAnimation("catLastImg", catStop);
        cat.changeAnimation("catLastImg", catStop);
        cat.scale = 0.13;    
        cat.x = 210;
        mouse.addAnimation("mouseLastImg", mouseStop);
        mouse.changeAnimation("mouseLastImg", mouseStop);
    }
    drawSprites();
}


function keyPressed()
{
  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW)
    {
        cat.velocityX = -5;
        cat.addAnimation("catRunning", cat_running);
        cat.changeAnimation("catRunning", cat_running);
        cat.scale = 0.15;
        mouse.addAnimation("mouseTeasing", mouse_teasing);
        mouse.changeAnimation("mouseTeasing", mouse_teasing);   
    }
}

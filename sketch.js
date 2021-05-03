var canvas;
var music,edges;
var surface1,surface2,surface3,surface4,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 //create 4 different surfaces
    surface1 = createSprite(110,580,185,20);
    surface1.shapeColor = "purple";

    surface2 = createSprite(305,580,185,20);
    surface2.shapeColor = "green";

    surface3 = createSprite(505,580,185,20);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(700,580,185,20);
    surface4.shapeColor = "red";
//create box sprite and give velocity
    
    box = createSprite(random(20,750),20,20,20);
    box.shapeColor = "white";
    box.velocityY=9;
    box.velocityX=4;
}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    edges = createEdgeSprites(); 
    box.bounceOff(edges)

    if (isTouching(box,surface1))
    {
        box.shapeColor= surface1.shapeColor;
        box.bounceoff(surface1);
        music.play();
    }

    if (isTouching(box,surface2))
    {
        box.shapeColor= surface2.shapeColor;
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if (isTouching(box,surface3))
    {
        box.shapeColor= surface3.shapeColor;
        box.bounceoff(surface3);
    }
    if (isTouching(box,surface4))
    {
        box.shapeColor= surface4.shapeColor;
        box.bounceoff(surface4);
    }

   //Bounce(box,surface1);
   // Bounce(box,surface3);
    //Bounce(box,surface4);
    

drawSprites();


    //add condition to check if box touching surface and make it box
}
function isTouching(o1,o2){
if( o1.x- o2.x < o1.width/2 + o2.width/2
    && o2.x - o1.x < o1.width/2 + o2.width/2 
    && o1.y- o2.y < o1.height/2 + o2.height/2
     && o2.y - o1.y < o1.height/2 + o2.height/2 ) {
   
  return true
    }
 else {
   return false
 }
}

function Bounce(o1,o2){
    if( o1.x- o2.x < o1.width/2 + o2.width/2
        && o2.x - o1.x < o1.width/2 + o2.width/2 ){

            o1.velocityX= o1.velocityX * ( -1)
            o2.velocityX= o2.velocityX * ( -1)


        }
        if(o1.y- o2.y < o1.height/2 + o2.height/2
         && o2.y - o1.y < o1.height/2 + o2.height/2 ) {
            o1.velocityY= o1.velocityY * ( -1)  
            o2.velocityY= o2.velocityY * ( -1)
            
         }
        }

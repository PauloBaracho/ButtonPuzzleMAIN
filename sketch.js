var player, rightEdge;
var bud1, bud2;
var redDoor, greenDoor;
var menuSoundtrack, gameSoundtrack;

var unlockDoor1 = 0;
var unlockDoor2 = 0;
var unlockCount = 0;
var gameStages = 1;
var INTRO = 1;
var INSTRUCTIONS = 2;
var PHASE1 = 3;
var PHASE2 = 4;

function preload() {
  menuSoundtrack = loadSound ("MenuSoundtrack.mp3");
  gameSoundtrack = loadSound ("GameSoundtrack.mp3");
}

function setup(){
    createCanvas(1500,1000);

    //menuSoundtrack.play();
    //menuSoundtrack.loop();

    //gameSoundtrack.play();
    //gameSoundtrack.loop();

    rightEdge = createSprite (1500,500,5,1500);

    player = createSprite (770,850,100,100)
    player.shapeColor = "cyan";

    bud1 = createSprite (770,400,100,100);
    bud1.shapeColor = "red";

    bud2 = createSprite (750,300,100,100);
    bud2.shapeColor = "red";

    redDoor = createSprite (770,27,200,50)
    redDoor.shapeColor = rgb(220,20,60);

    greenDoor = createSprite (redDoor.x, redDoor.y, redDoor.width, redDoor.height);
    greenDoor.shapeColor = rgb(0,255,127);
}

function draw() {
    background("black");

    if (gameStages === INTRO) {

      fill (rgb(220,20,60));
      textSize (200);
      text ("BUTTON",390,250);

      fill (rgb(0,255,127));
      textSize (200);
      text ("PUZZLES",350,480);

      fill ("white");
      textSize (100);
      text ("Press             to Start Playing",100,650);

      fill ("gold");
      textSize (100);
      text ("'Space'",375,650);

      fill (rgb(255,69,0));
      textSize (110);
      text ("OR",650,780);

      fill ("white");
      textSize (95);
      text ("Press           to View the Summary",50,910);

      fill ("gold");
      textSize (100);
      text ("'Shift'",320,910);

      player.visible = false;
      bud1.visible = false;
      bud2.visible = false;
      redDoor.visible = false;
      greenDoor.visible = false;
      rightEdge.visible = false;

      if (keyDown("space")) {
        gameStages = PHASE1;
      }

      if (keyDown("shift")) {
        gameStages = INSTRUCTIONS;
      }
    }

    if (gameStages === INSTRUCTIONS) {

      fill ("white")
      textSize (60);
      text ("You are a cube that got lost from the other polygons",50,100);

      fill ("white")
      textSize (60);
      text ("and you need to find your way back home.",200,180);

      fill ("white")
      textSize (60);
      text ("You are trapped in a mansion with several rooms, and",50,300);

      fill ("white")
      textSize (60);
      text ("to escape from it you must decipher the",250,380);

      fill (rgb(220,20,60))
      textSize (80);
      text ("BUTTON",370,500);

      fill (rgb(0,255,127))
      textSize (80);
      text ("PUZZLE",730,500);

      fill ("white")
      textSize (60);
      text ("present in each room.",420,600);

      fill ("white")
      textSize (90);
      text ("Good Luck on your Journey!",160,730);

      fill ("white")
      textSize (90);
      text ("  Press           to return to Menu ",100,900);

      fill ("gold")
      textSize (90);
      text (">           'ESC'                             <",80,900);

      if (keyWentDown ("esc")) {
        gameStages = INTRO;
      }
    }

    if (gameStages === PHASE1) {

      player.visible = true;
      bud1.visible = true;
      redDoor.visible = true;
      rightEdge.visible = false;

      if (player.isTouching (bud1)) {
        bud1.shapeColor = rgb (0,255,0);
        player.collide(bud1);
        redDoor.visible = false;
        greenDoor.visible = true;
      }

      if (player.collide(greenDoor) && greenDoor.visible === true) {
        gameStages = PHASE2;
        player.x = 770;
        player.y = 900;

        bud1.x = 100;
        bud1.y = 900;
        bud1.shapeColor = "red";
        greenDoor.visible = false;
      }
    }

    if (gameStages === PHASE2) {

      unlockCount = unlockDoor1 + unlockDoor2;

      bud2.x = 100;
      bud2.y = 100;
      bud2.visible = true;

      player.collide(redDoor);
      redDoor.x = 1473;
      redDoor.y = 500;
      redDoor.width = 50;
      redDoor.height = 200;

      greenDoor.x = redDoor.x;
      greenDoor.y = redDoor.y;
      greenDoor.width = redDoor.width;
      greenDoor.height = redDoor.height;
 
      if (player.isTouching (bud1)) {
        bud1.shapeColor = rgb (0,255,0);
        player.collide(bud1);
        unlockDoor1 = 1;
      }

      if (player.isTouching(bud2)) {
        bud2.shapeColor = rgb (0,255,0);
        player.collide(bud2);
        unlockDoor2 = 1;
      }

      if (unlockCount === 2) {
        greenDoor.visible = true;
        redDoor.visible = false;
      }
    }

    edges = createEdgeSprites ();
    player.collide(edges);
    player.collide(rightEdge);
    drawSprites();
    playerMoves(player);
}
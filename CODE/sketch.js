{//variables
        var player, playerSpeed = 10;
        var shapeGroup;
        var PLAY = 1;
        var END = 0;
        var MENU = 2;
        var gameState = PLAY;
        var score = 0;
        var backColor = "black", darkMode, lightMode;
        var textBack;
        var u, d, l, r;
        //var ;
        //var 
        var look = 0;
}

function setup() {
        //Canvas
        createCanvas(displayWidth, displayHeight);
        //Sprites
        textBack = createSprite(displayWidth/2, displayHeight/2, displayWidth/2, displayHeight/2);
        textBack.visible = false;
        u = createSprite(displayWidth / 2, displayHeight * 0.13, displayWidth, displayHeight * 0.01)
        u.shapeColor = "white";
        //d = createSprite(displayWidth/2, displayHeight*0.13, displayWidth, displayHeight*0.01)
        //d.shapeColor = "white";
        darkMode = createSprite(displayWidth / 2 - ((displayWidth * 0.05) / 2), displayHeight * 0.063, displayWidth * 0.05, displayHeight * 0.1);
        darkMode.shapeColor = "black";
        lightMode = createSprite(displayWidth / 2 + ((displayWidth * 0.05) / 2), displayHeight * 0.063, displayWidth * 0.05, displayHeight * 0.1);
        lightMode.shapeColor = "white";

        player = createSprite(displayWidth * 0.2,
                displayHeight / 2,
                displayHeight * 0.1,
                displayHeight * 0.1)
        player.shapeColor = "white";
        shapeGroup = new Group();
        score = 0

        if (gameState === MENU) {

                //MENU:
                player.visible = false;
                darkMode.visible = true;
                lightMode.visible = true;
                shape.visible = false;

        }
}

function draw() {
        //Background
        background(backColor);

        console.log(gameState);

        edges = createEdgeSprites();

        player.collide(u);
        player.collide(edges[3]);

        textSize(displayHeight * 0.05);
        fill("white");
        text("Light Mode", lightMode.x + displayWidth * 0.035, displayHeight * 0.095);
        textSize(displayHeight * 0.05);
        fill("black");
        text("Dark Mode", darkMode.x - displayWidth * 0.17, displayHeight * 0.095);

        //Dark/Light Modes
        if (mousePressedOver(lightMode)) {
                backColor = "white";
                player.shapeColor = "black";
                u.shapeColor = "black";
                //d.shapeColor = "black";
        }
        if (mousePressedOver(darkMode)) {
                backColor = "black";
                player.shapeColor = "white";
                u.shapeColor = "white";
                //d.shapeColor = "white";
        }

        //Game States

        if (gameState === MENU) {

                //MENU:
                player.visible = false;
                darkMode.visible = true;
                lightMode.visible = true;
                shape.visible = false;

        }

        else if (gameState === PLAY) {

                player.visible = true;
                darkMode.visible = false;
                lightMode.visible = false;
                shape.visible = false;

                spawnShapes();

                if (keyDown("W") || keyDown("UP_ARROW")) {
                        player.y -= playerSpeed;
                }
                if (keyDown("S") || keyDown("DOWN_ARROW")) {
                        player.y += playerSpeed;
                }

                if (player.isTouching(shapeGroup)) {
                        gameState = END;
                }

        }

        else if (gameState === END){
                shapeGroup.setVelocityXEach(0);
                textBack.visible = true;
                textSize(displayHeight * 0.2);
                fill("red");
                textAlign(CENTER, CENTER);
                text("YOU LOSE", displayWidth/2, displayHeight/2)
        }

        drawSprites();
}

/*function spawnShapes() {
  //Spawning Shapes
  if (frameCount % 40 === 0) {
    var shape = createSprite(displayWidth + displayWidth * 0.2, 120, 20, 10);
    shape.y = Math.round(random(displayHeight*0.2, displayHeight * 0.95));
    //shape.addImage(shapeImage);
    shape.scale = random(displayHeight * 0.01, displayHeight * 0.02);
    shape.velocityX = random(-9, -14);
    //shape.shapeColor = "red";

    //Generating random colors
    look += 1
    console.log(look);
    //var rand = Math.round(random(1,6));
    switch(look) {
      case 1: shape.shapeColor = "red";
              break;
      case 2: shape.shapeColor = rgb(214, 64, 0);
              break;
      case 3: shape.shapeColor = "orange";
              break;
      case 4: shape.shapeColor = "yellow";
              break;
      case 5: shape.shapeColor = rgb(153, 204, 0)
              break;
      case 6: shape.shapeColor = "green";
              break;
      case 7: shape.shapeColor = rgb(8, 161, 151);
              break;
      case 8: shape.shapeColor = rgb(36, 112, 188);//"darkblue";
              break;
      case 9: shape.shapeColor = rgb(102, 0, 255);
              break;
      case 10: shape.shapeColor = "purple";
              break;
      case 11: shape.shapeColor = rgb(204, 0, 82);
              break;
      //case 7: shape.shapeColor = "violet";
      //        color = v;
      //        break;
      default: break;
    }

    if(look === 11){
      look = 0;
    }
    
    //Lifetime of shapes
    shape.lifetime = displayWidth * 2;
    
    //Depth of shapes
    shape.depth = player.depth;
    shape.depth = shape.depth + 1;
    
    //Adding each shape to the shape group
    shapeGroup.add(shape);
  }
}*/

function spawnShapes() {
        //Spawning Shapes
        if (frameCount % 40 === 0) {
                var shape = createSprite(displayWidth + displayWidth * 0.2, 120, 20, 10);
                shape.y = Math.round(random(displayHeight * 0.2, displayHeight * 0.95));
                shapePos = Math.round(random(1, 5));
                switch (shapePos) {
                        case 1: shape.y = displayHeight * 0.2;
                                break;
                        case 2: shape.y = displayHeight * 0.375;
                                break;
                        case 3: shape.y = displayHeight * 0.55;
                                break;
                        case 4: shape.y = displayHeight * 0.725;
                                break;
                        case 5: shape.y = displayHeight * 0.9;
                                break;
                        default: break;
                }
                //shape.addImage(shapeImage);
                shape.scale = random(displayHeight * 0.01, displayHeight * 0.013);
                shape.velocityX = random(-9, -14);
                //shape.shapeColor = "red";

                //Generating random colors
                look += 1
                console.log(look);
                //var rand = Math.round(random(1,6));
                switch (look) {
                        case 1: shape.shapeColor = rgb(255, 0, 0);
                                break;
                        case 2: shape.shapeColor = rgb(255, 102, 0);
                                break;
                        case 3: shape.shapeColor = rgb(255, 153, 0);
                                break;
                        case 4: shape.shapeColor = rgb(249, 232, 1);
                                break;
                        case 5: shape.shapeColor = rgb(225, 255, 0);
                                break;
                        case 6: shape.shapeColor = rgb(153, 255, 51);
                                break;
                        case 7: shape.shapeColor = rgb(0, 255, 153);
                                break;
                        case 8: shape.shapeColor = rgb(0, 204, 255);//"darkblue";
                                break;
                        case 9: shape.shapeColor = rgb(108, 77, 219);
                                break;
                        case 10: shape.shapeColor = rgb(185, 56, 255);
                                break;
                        case 11: shape.shapeColor = rgb(225, 5, 104);
                                break;
                        default: break;
                }

                if (look === 11) {
                        look = 0;
                }

                //Lifetime of shapes
                shape.lifetime = displayWidth * 2;

                //Depth of shapes
                shape.depth = player.depth;
                shape.depth = shape.depth + 1;

                //Adding each shape to the shape group
                shapeGroup.add(shape);
        }
}
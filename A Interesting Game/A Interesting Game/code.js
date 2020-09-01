var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b2af4dc2-550d-415d-83ed-46b28f37ff43"],"propsByKey":{"b2af4dc2-550d-415d-83ed-46b28f37ff43":{"name":"court_1","frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"categories":["backgrounds"],"jsonLastModified":"2020-07-16 22:27:32 UTC","pngLastModified":"2020-01-29 19:48:00 UTC","version":"jdVV0fyG164aj2Z2zCJe3iVoKAhZIMyA","sourceUrl":"assets/api/v1/animation-library/gamelab/jdVV0fyG164aj2Z2zCJe3iVoKAhZIMyA/category_backgrounds/background_court.png","sourceSize":{"x":800,"y":800},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/jdVV0fyG164aj2Z2zCJe3iVoKAhZIMyA/category_backgrounds/background_court.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ground = createSprite(200,200,400,400);
ground.setAnimation("court_1");

var m= createSprite(12,9,10,10);

var w = createSprite(200,200,10,10);
w.shapeColor = "blue";

var f = createSprite(370,390,10,70);
f.shapeColor = "gold";
f.visible = false;

var cardboard1 = createSprite(10,70,100,15);
cardboard1.shapeColor = "black";
cardboard1.visible = false;

var cardboard2 = createSprite(74,31,70,15);
cardboard2.shapeColor = "black";
cardboard2.visible = false;

var cardboard3 = createSprite(117,58,15,70);
cardboard3.shapeColor = "black";
cardboard3.visible = false;

var cardboard4 = createSprite(200,40,100,15);
cardboard4.shapeColor = "black";
cardboard4.visible = false;

var cardboard5 = createSprite(298,340,15,70);
cardboard5.shapeColor = "black";
cardboard5.visible = false;

var cardboard6 = createSprite(350,310,60,15);
cardboard6.shapeColor = "black";
cardboard6.visible = false;

var cardboard7 = createSprite(115,110,100,15);
cardboard7.shapeColor = "black";
cardboard7.visible = false;

var cardboard8 = createSprite(260,35,15,70);
cardboard8.shapeColor = "black";
cardboard8.visible = false;

var cardboard9 = createSprite(255,150,15,110);
cardboard9.shapeColor = "black";
cardboard9.visible = false;

var cardboard10 = createSprite(70,190,15,70);
cardboard10.shapeColor = "black";
cardboard10.visible = false;

var cardboard11 = createSprite(150,217,15,130);
cardboard11.shapeColor = "black";
cardboard11.visible = false;

var cardboard12 = createSprite(60,220,90,15);
cardboard12.shapeColor = "black";
cardboard12.visible = false;

var cardboard13 = createSprite(95,260,70,15);
cardboard13.shapeColor = "black";
cardboard13.visible = false;

var cardboard14 = createSprite(389,266,25,15);
cardboard14.shapeColor = "black";
cardboard14.visible = false;

var cardboard15 = createSprite(60,300,100,15);
cardboard15.shapeColor = "black";
cardboard15.visible = false;

var cardboard16 = createSprite(170,310,70,15);
cardboard16.shapeColor = "black";
cardboard16.visible = false;

var cardboard17 = createSprite(209,309,15,150);
cardboard17.shapeColor = "black";
cardboard17.visible = false;

var cardboard18 = createSprite(250,200,190,15);
cardboard18.shapeColor = "black";
cardboard18.visible = false;

var cardboard19 = createSprite(340,180,15,250);
cardboard19.shapeColor = "black";
cardboard19.visible = false;

var cardboard20 = createSprite(360,80,25,15);
cardboard20.shapeColor = "black";
cardboard20.visible = false;

var cardboard21 = createSprite(383,150,25,15);
cardboard21.shapeColor = "black";
cardboard21.visible = false;

var cardboard22 = createSprite(360,230,25,15);
cardboard22.shapeColor = "black";
cardboard22.visible = false;

var b1 = createSprite(190,120,250,3);
b1.shapeColor = "black";
b1.visible = false;

var b2 = createSprite(190,260,250,3);
b2.shapeColor = "black";
b2.visible = false;

var b3 = createSprite(67,145,3,50);
b3.shapeColor = "black";
b3.visible = false;

var b4 = createSprite(67,235,3,50);
b4.shapeColor = "black";
b4.visible = false;

var b5 = createSprite(313,235,3,50);
b5.shapeColor = "black";
b5.visible = false;

var b6 = createSprite(313,145,3,50);
b6.shapeColor = "black";
b6.visible = false;

var b7 = createSprite(41,170,55,3);
b7.shapeColor = "black";
b7.visible = false;

var b8 = createSprite(41,210,55,3);
b8.shapeColor = "black";
b8.visible = false;

var b9 = createSprite(337,210,51,3);
b9.shapeColor = "black";
b9.visible = false;

var b10 = createSprite(337,170,51,3);
b10.shapeColor = "black";
b10.visible = false;

var b11 = createSprite(15,190,3,40);
b11.shapeColor = "black";
b11.visible = false;

var b12 = createSprite(361,190,3,40);
b12.shapeColor = "black";
b12.visible = false;

var deadly1 = createSprite(100,130,10,10);
deadly1.shapeColor = "red";
  deadly1.velocityY = 7;
  deadly1.visible = false;

var deadly2 = createSprite(215,130,10,10);
deadly2.shapeColor = "red";
    deadly2.velocityY = 7;
deadly2.visible = false;

var deadly3 = createSprite(165,250,10,10);
deadly3.shapeColor = "red";
    deadly3.velocityY = -7;
    deadly3.visible = false;

var deadly4 = createSprite(270,250,10,10);
deadly4.shapeColor = "red";
deadly4.velocityY = -7; 
deadly4.visible = false;

var k = createSprite(338,185,10,10);
k.shapeColor = "green";
k.visible = false;

var win = createSprite(200,200,10,10);
win.shapeColor = "lightblue";
win.visible = false;

var gamestate = "begin";

function draw() {
  background("white");

  if (keyDown("w")){
    m.y= m.y-4;
  }
  
  if (keyDown("s")){
  m.y= m.y+4;
  }
    
  if (keyDown("d")){
  m.x= m.x+4;
  }

  if (keyDown("a")){
  m.x= m.x-4;
  }  
  
  if (keyDown("UP_ARROW")){
    m.y= m.y-4;
  }
  
  if (keyDown("DOWN_ARROW")){
  m.y= m.y+4;
  }
    
  if (keyDown("LEFT_ARROW")){
  m.x= m.x-4;
  }

  if (keyDown("RIGHT_ARROW")){
  m.x= m.x+4;
  }  
  
  if (gamestate==="begin") {
   text("Get the Jewel! Move with WASD or Arrow keys", 100,100);  
  }
  
  
  if (m.y>180 && gamestate==="begin"){
  m.x = 10;
  m.y = 10;
  createEdgeSprites();
  cardboard1.visible = true;
  cardboard2.visible = true;
  cardboard3.visible = true;
  cardboard4.visible = true;
  cardboard5.visible = true;
  cardboard6.visible = true;
  cardboard7.visible = true;
  cardboard8.visible = true;
  cardboard9.visible = true;
  cardboard10.visible = true;
  cardboard11.visible = true;
  cardboard12.visible = true;
  cardboard13.visible = true;
  cardboard14.visible = true;
  cardboard15.visible = true;
  cardboard16.visible = true;
  cardboard17.visible = true;
  cardboard18.visible = true;
  cardboard19.visible = true;
  cardboard20.visible = true;
  cardboard21.visible = true;
  cardboard22.visible = true;
  f.visible = true;
  gamestate = "lv1";
  }
  
if (gamestate==="lv1") {
  m.bounceOff(edges);
  m.bounceOff(cardboard1);
  m.bounceOff(cardboard2);
  m.bounceOff(cardboard3);
  m.bounceOff(cardboard4);
  m.bounceOff(cardboard5);
  m.bounceOff(cardboard6);
  m.bounceOff(cardboard7);
  m.bounceOff(cardboard8);
  m.bounceOff(cardboard9);
  m.bounceOff(cardboard10);
  m.bounceOff(cardboard11);
  m.bounceOff(cardboard12);
  m.bounceOff(cardboard13);
  m.bounceOff(cardboard14);
  m.bounceOff(cardboard15);
  m.bounceOff(cardboard16);
  m.bounceOff(cardboard17);
  m.bounceOff(cardboard18);
  m.bounceOff(cardboard19);
  m.bounceOff(cardboard20);
  m.bounceOff(cardboard21);
  m.bounceOff(cardboard22);   
  text("Not so easily.",18,343);
  }  
  
  if (m.isTouching(f)){
  cardboard1.destroy();
  cardboard2.destroy();
  cardboard3.destroy();
  cardboard4.destroy();
  cardboard5.destroy();
  cardboard6.destroy();
  cardboard7.destroy();
  cardboard8.destroy();
  cardboard9.destroy();
  cardboard10.destroy();
  cardboard11.destroy();
  cardboard12.destroy();
  cardboard13.destroy();
  cardboard14.destroy();
  cardboard15.destroy();
  cardboard16.destroy();
  cardboard17.destroy();
  cardboard18.destroy();
  cardboard19.destroy();
  cardboard20.destroy();
  cardboard21.destroy();
  cardboard22.destroy();
  f.destroy();
  gamestate = "lv2";
  }
  
  if(gamestate==="lv2"){
   text("Looks like we have a winner!",190,190); 
  }
  
  if(m.isTouching(w)){
    w.destroy();
    gamestate= "lv3";
  }
  
  if (gamestate === "lv3"){
    m.bounceOff(b1);
    m.bounceOff(b2);
    m.bounceOff(b3);
    m.bounceOff(b4);
    m.bounceOff(b5);
    m.bounceOff(b6);
    m.bounceOff(b7);
    m.bounceOff(b8);
    m.bounceOff(b9);
    m.bounceOff(b10);
    m.bounceOff(b11);
    m.bounceOff(b12);
    b1.visible = true;
    b2.visible = true;
    b3.visible = true;
    b4.visible = true;
    b5.visible = true;
    b6.visible = true;
    b7.visible = true;
    b8.visible = true;
    b9.visible = true;
    b10.visible = true;
    b11.visible = true;
    b12.visible = true;
    deadly1.visible = true;
    deadly2.visible = true;
    deadly3.visible = true;
    deadly4.visible = true;
    k.visible = true;
    text("LOL you fell for that? Beat THIS to advance.",140,319);
    }
        
    deadly1.bounceOff(b1);
    deadly1.bounceOff(b2);
    deadly2.bounceOff(b1);
    deadly2.bounceOff(b2);
    deadly3.bounceOff(b1);
    deadly3.bounceOff(b2);
    deadly4.bounceOff(b1);
    deadly4.bounceOff(b2);
    
    if (m.isTouching(deadly1)|| m.isTouching(deadly2)|| m.isTouching(deadly3)|| m.isTouching(deadly4)){
    m.x = 40;
    m.y = 190;
  }
   
   if(gamestate ==="lv3" && m.isTouching(k)){
  b1.destroy();
  b2.destroy();
  b3.destroy();
  b4.destroy();
  b5.destroy();
  b6.destroy();
  b7.destroy();
  b8.destroy();
  b9.destroy();
  b10.destroy();
  b11.destroy();
  b12.destroy();
  deadly1.destroy();
  deadly2.destroy();
  deadly3.destroy();
  deadly4.destroy();
  k.destroy();
  win.visible = true;
  gamestate = "final";    

   }
    
  if(gamestate === "final"){
    gamestate = "done";
  }  
  
  if(m.isTouching(win) && gamestate==="done"){
    text("YOU WON!!!", 200,300);
  }
  
    
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";

    World.add(world, this.body);
  }

  life() {
    push();
  
    var rectWidth = 70;
    var rectHeight = 30;
    var rectSpacing = 10;
    var rectX = this.body.position.x - rectWidth * 1.5;
    var rectY = this.body.position.y - this.height / 2 - 50;
  
    // Draw "Player" text
    textSize(20);
    fill("white");
    textAlign(CENTER, CENTER);
    text("Player", this.body.position.x, rectY - 25);
  
    // Calculate the total width of the life bar
    var totalWidth = rectWidth * 3 + rectSpacing * 2;
  
    // Draw the life bar as a joined rectangle
    noStroke();
    fill("#808080");
    rect(rectX, rectY, totalWidth, rectHeight);
  
    // Calculate the remaining width for the lives
    var remainingWidth = totalWidth - rectWidth * playerArcherLife - rectSpacing * (playerArcherLife - 1);
  
    // Draw individual lives
    for (var i = 0; i < playerArcherLife; i++) {
      var lifeRectX = rectX + (rectWidth + rectSpacing) * i;
      fill(this.life1);
      rect(lifeRectX, rectY, rectWidth, rectHeight);
    }
  
    pop();
  }


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

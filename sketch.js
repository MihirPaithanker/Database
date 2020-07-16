var ball;
var database;

function setup(){
    createCanvas(500,500);
    database = firebase.database();

    ball = createSprite(250,250,10,10);
    
    ball.shapeColor = "red";
    position = database.ref("ball/position");
    //refers to databse
    position.on("value",readPosition);
    //reads database
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
        x: ball_position.x + x,
        y: ball_position.y + y
        // changes position when key is pressed
    })
    
}
function readPosition() {
    ball_position = data.val();
    ball.x = ball_position.x;
    ball.y = ball_position.y;
    // reads values from database
    
}
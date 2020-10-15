var ball,position,database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
   var ballRef = database.ref('position/ball');
    ballRef.on("value",readPosition,errorMessage)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition (data){
position=data.val();
ball.x=position.x;
ball.y=position.y;

}

function errorMessage(){

console.log("errorMessage");
}



function writePosition(x,y)
{

database.ref('position/ball').set({
    x:ball.x+x,
    y:ball.y+y

})








}








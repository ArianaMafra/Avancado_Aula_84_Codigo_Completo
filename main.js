canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;
roverX = 10;
roverY = 10;

backgroundImage = "mars.jpg";
roverImage = "rover.png";

function add(){
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;

    roverImageTag = new Image();
    roverImageTag.onload = uploadrover;
    roverImageTag.src= roverImage;

}

function uploadBackground(){
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(roverImageTag, roverX,roverY, roverWidth, roverHeight);
    
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        up();
        console.log("cima");
    }

    if(keyPressed=='40'){
        down();
        console.log("baixo");
    }

    if(keyPressed=='37'){
        left();
        console.log("esquerda");
    }

    if(keyPressed=='39'){
        right();
        console.log("direita");
    }

}
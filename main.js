canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1Img = "car1.png";
car2Img = "car2.png";

car1_width = 120;
car1_height = 70;

car2_width = 120;
car2_height = 70;

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 100;

background_img = "racing_track.jpg";

function add(){
    background_imgTag = new Image();
    background_img.onload = backgroundChange;
    background_imgTag.src = background_img;

    car1ImgTag = new Image();
    car1Img.onload = car1Change;
    car1ImgTag.src = car1Img;

    car2ImgTag = new Image();
    car2Img.onload = car2Change;
    car2ImgTag.src = car2Img;
}

function backgroundChange(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.height, canvas.width);
}

function car1Change(){
    ctx.drawImage(car1ImgTag, car1_x, car1_y, car1_height, car1_width);
}

function car2Change(){
    ctx.drawImage(car2ImgTag, car2_x, car2_y, car2_height, car2_width);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(e.keyCode);

    if(keypressed ='38'){
        car1up();
        console.log("car1 up")
    }

    if(keypressed ='40'){
        car1down();
        console.log("car1 down")
    }

    if(keypressed ='37'){
        car1left();
        console.log("car1 left")
    }

    if(keypressed ='39'){
        car1right();
        console.log("car1 right")
    }
    if(keypressed ='87'){
        car2up();
        console.log("car2 up W")
    }

    if(keypressed ='65'){
        car2left();
        console.log("car2 left A")
    }

    if(keypressed ='83'){
        car2down();
        console.log("car2 down S")
    }

    if(keypressed ='68'){
        car2right();
        console.log("car2 right D")
    }
}
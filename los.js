
//when window is loaded declare canvas and context
window.onload = function(){
    canvas = document.getElementById("paper"),
    context = canvas.getContext("2d");

    setInterval("mainLoop();", 32);
}
//draw your stuff inside mainloop (refreshes from setInterval above)
function mainLoop(){
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    //console.log(theDude.x + " " + theDude.y);
    //theDude.trackMouse();
    context.drawImage(img1, theDude.x, theDude.y, 100, 100);
    //theDude.x += 1;
    
}
//class for main sprite
class dude {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
    }
    trackMouse() {

    //grab mouse position
    //should this not be a class method?

    ///anyway check this out: https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
    //that should make it work
        mouseX = event.clientX;
        mouseY = event.clientY;
            while (theDude.x <= mouseX - 50) {
                //console.log('test');
                //console.log(theDude.x + " " + mouseX)
                theDude.x += 1;
            }
            while (theDude.y <= mouseY - 50) {
                theDude.y += 1;
            }
            
        
    }
 
}


//initialize stuff here
theDude = new dude(0, 0, "img.png");
var img1 = new Image();
img1.src = theDude.img;
var mouseX = 0;
var mouseY = 0;

//temporary controls
function keyDown(evt){
    switch(evt.keyCode) {
        case 87: //w
            theDude.y -= 20;
            break;
        case 65: // A
            theDude.x -= 20;
            break;
        case 83: // S
            theDude.y += 20;
            break;
        case 68: // D
            theDude.x += 20;
            break;
    }
    return false;
}
window.addEventListener('keydown', keyDown, true); 
window.addEventListener('mousedown', theDude.trackMouse, true);
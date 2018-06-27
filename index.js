let body = document.querySelector('body');
let isKeyDown = false;
let clickPos = {x: 0, y: 0};

function setKeyDown(isDown){
    isKeyDown = isDown;
}

body.onkeydown = function(e){
    setKeyDown(true);

};

body.onkeyup = function(e){
    setKeyDown(false);
}

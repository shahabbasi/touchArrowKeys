
let isKeyDown = false;
let clickPos = {x: 0, y: 0};
let releasePos = {x: 0, y: 0};


function setKeyDown(isDown){

    isKeyDown = isDown;
    if(!isDown){
        resultX = releasePos.x - clickPos.x;
        resultY = releasePos.y - clickPos.y;
        let result = 0;

        if(resultX != 0 & resultY != 0){
            result = resultY/resultX;
        }else{
            result = 1;
            //vertical move
        }

        if(result < 0.5 & result > -0.5){
            if(resultX < 0){
                document.querySelector('body').style.background = "black";
            }else{
                document.querySelector('body').style.background = "red"
            }
        }else{
            // out of swipe line
        }
    }
}

function onkeydown(e){
    clickPos = {x: e.clientX, y: e.clientY };
    setKeyDown(true);
};

function onkeyup(e){
    releasePos = {x: e.clientX, y: e.clientY };
    setKeyDown(false);
}

window.onmousedown = function(e){
    onkeydown(e);
}
window.onmouseup = function(e){
    onkeyup(e);
}
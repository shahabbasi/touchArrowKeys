
let isKeyDown = false;
let clickPos = {x: 0, y: 0};
let releasePos = {x: 0, y: 0};


function setKeyDown(isDown){

    isKeyDown = isDown;
    if(!isDown){
        resultX = releasePos.x - clickPos.x;
        resultY = releasePos.y - clickPos.y;
        let result = 0;

        if(resultX != 0)
            result = resultY/resultX;
        else
            console.log('vertical move');

        if(result < 0.5 & result > -0.5)
            console.log('swipe');
        else
            console.log('out of swipe line')
    }
}

function onkeydown(e){
    setKeyDown(true);
    clickPos = {x: e.clientX, y: e.clientY };
};

function onkeyup(e){
    setKeyDown(false);
    releasePos = {x: e.clientX, y: e.clientY };
}

body = document.querySelector('body');
body.onkeydown = (e)=>{
    onkeydown(e);
}
body.onkeyup = (e)=>{
    onkeyup(e);
}
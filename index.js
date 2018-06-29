class SwipeHandler{
    constructor(){
        this.isKeyDown = false;
        this.clickPos = {x: 0, y: 0};
        this.releasePos = {x: 0, y: 0};
    }

    setKeyDown(isDown){
        this.isKeyDown = isDown;
        if(isDown){
            this.clickPos = {x: e.clientX, y: e.clientY };
        }else{
            this.releasePos = {x: e.clientX, y: e.clientY };
        }
    }
    
    onkeydown = function(e){
        setKeyDown(true);
    };
    
    onkeyup = function(e){
        setKeyDown(false);
    }

}

const swipeHandler = new SwipeHandler();

body = document.querySelector('body');
body.onkeydown = (e)=>{
    swipeHandler.onkeydown(e);
}
body.onkeyup = (e)=>{
    swipeHandler.onkeyup(e);
}
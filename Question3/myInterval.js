function mySetInterval(callback,delay){
    let timerId;
    let active=true;

    function tick(){
        if(!active)return;

        callback();
        timerId=setTimeout(tick,delay);
    }
    timerId=setTimeout(tick,delay);

    return{
        stop:function(){
            active=false;
            clearTimeout(timerId);
        }
    }
}
function myClearInterval(intervalObj){
    if(intervalObj&& typeof intervalObj.stop==="function"){
        intervalObj.stop();
    }
}
export default {mySetInterval,myClearInterval};
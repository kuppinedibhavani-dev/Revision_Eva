function createCountdown(seconds,onTick,onComplete){
    const startTime=Date.now();
    const endTime=startTime+seconds*1000;

    function tick(){
        const now=Date.now();
        const remaining=Math.max(0,Math.round((endTime-now)/1000));
        onTick(remaining);


        if(remaining>0){
            const nextTick=1000-(now-startTime)%1000;
            setTimeout(tick,nextTick);
        }else{
            onComplete();
        }
    }
    tick();

}
export default createCountdown;
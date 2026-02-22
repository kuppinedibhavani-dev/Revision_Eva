async function runSequentialTasks(tasks,delay){
    const rexults=[];

    for(let i=0;i<length;i++){
        try{
            const result=await tasks[i]();
            results.push(result);

            if(i<tasks.length-1){
                await new Promise((resolve)=>setTimeout(resolve,delay));
            }

        }catch(error){
            throw new Error("Task failed:"+error.message);
        }
    }
    return results;
}
export default runSequentialTasks;
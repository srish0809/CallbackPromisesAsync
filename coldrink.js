async function getcoldrinks(butter){
    const husband= await new Promise((resolve,reject)=>{
        setTimeout(()=>{
     var butter=true;
     if(butter==true)
     {
        resolve('husband gets butter')
     }
     else{
       reject('didnt got butter')
     }
    
    },1000)
    })
    console.log(husband);
}
getcoldrinks();
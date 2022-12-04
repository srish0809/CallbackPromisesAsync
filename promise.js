const posts=[{title:'Post one', body:'This is post one'},{title:'Post two', body:'This is post two'}];

function getPost()
{
    setTimeout(()=>{
let output='';
for(let i=0;i<posts.length;i++)
{
    output+=`<li>${posts[i].title}</li>`;
}
document.body.innerHTML=output;
    },1000);
}


function createPost(post){
    return new Promise((resolve,reject)=>{

  
    setTimeout(()=>{
    posts.push(post);
   let error=false;
   if(!error){
    resolve();
   }
   else{
    reject('Kuch to gadbad hai!!');
   }
    },2000);
})
}


createPost({title:'Post Three', body:'This is post three'})
.then(getPost);


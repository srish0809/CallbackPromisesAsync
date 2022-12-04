const posts=[{title:'Post one', body:'this is post one'},{title:'Post two', body:'this is post two'}];

function getPost()
{
    setTimeout(()=>{
        let output='';
for(let i=0;i<posts.length;i++)
{
output+=`<li>${posts[i].title}</li>`
}document.body.innerHTML=output;
    },1000)
}


function createPost(post)
{
    return new Promise((resolve,reject ) =>{
        setTimeout(()=>{
            posts.push(post);
            let error=false;
            if(!error){
                resolve();
            }else{
                reject("something went wrong");
        }
            
                },2000)
    });
   
}
//createPost({title:'Post three', body:'this is post three'}).then(getPost).catch(err=> console.log(err));

//PROMISE ALL
const promise1=Promise.resolve('promise resolved');
const promise2=10;
const promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,'goodbye')

);
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));
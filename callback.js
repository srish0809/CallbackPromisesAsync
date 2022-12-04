const posts=[
    {title: 'POST ONE', body:'This is post one',createdAt:new Date().getTime()},
{title: 'POST TWO', body:'This is post two',createdAt:new Date().getTime()}
];
let timeC=0;
function getPost()
{
    clearInterval(timeC)
    
    setTimeout(()=>{
       let output='';
       for(let i=0;i<posts.length;i++)
       {
        output+=`<li>${posts[i].title} last updated ${Math.floor(new Date().getTime()-posts[i].createdAt)/1000}</li>`;
       }
       document.body.innerHTML=output;
    },1000);

}
function createPost(post, callback)
{
    setTimeout(()=>{
   posts.push({...post,createdAt:new Date().getTime()});
callback();
}
,2000);
}

function createPost4(post, callback1)
{
    setTimeout(()=>{
   posts.push({...post,createdAt:new Date().getTime()});
callback1();
}
,3000);}

createPost({title:'POST THREE', body:'This is post three '},getPost);
createPost4({title:'POST FOUR', body:'This is post four '},getPost);
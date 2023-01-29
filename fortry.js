const posts = [
    { title: 'Post One', body: 'This is post one',createdAt: new Date().getTime()} ,
    { title: 'Post Two', body: 'This is post two',createdAt: new Date().getTime()}
];
let intervalId;
function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        for(let i =0;i<posts.length;i++) {
            output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago</li>`;
        }
        document.body.innerHTML = output;
    }, 1000);
}
const createPost = async() =>  {
    const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        posts.push({...posts,createdAt: new Date().getTime()});
        resolve('callback');
    }, 2000);
});

let callback = await promise1;
console.log('This is post three');
return callback;
}

createPost().then((m) => console.log(m));
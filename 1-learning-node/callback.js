
// 5 saniyede bir yap
// setTimeout(() => {
//     console.log("merhaba")
// }, 5000)



// her saniye yap
// setInterval(() => {
//     console.log("Merhaba, ben her saniye çalışacağım.")
// }, 1000)



// const sayHi = (cb) => {
//     cb();
// }

// sayHi(() => {
//     console.log("Hello")
// })


// --------------------------------------------------------------------------
// CALLBACK DERSI

// DIŞARIDAN BİR VERİYİ FETCH ETME(ÇEKME) BU UZUN YOL
import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
//     console.log("Users Yüklendi!", users)

//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((data) => data.json())
//     .then((post) => {
//         console.log("Post 1 Yüklendi!", post)

//         fetch('https://jsonplaceholder.typicode.com/posts/2')
//         .then((data) => data.json())
//         .then((data) => console.log("Post 2 Yüklendi!", data))
//     })
// });




// KISA YOL İLE YUKARIDAKİ İŞLEMİN AYNISI
// async function getData(){
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("users:", users);
//     console.log("post 1:", post1);
//     console.log("post 2:", post2);
// }
// getData();



// ANONİM FONKSİYON OLUŞTURMA
// (async() => {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("users:", users);
//     console.log("post 1:", post1);
//     console.log("post 2:", post2);
// })();


// ----------------------------------------------------------------
// PROMISES DERSI

// FETCH İŞLEMİ YERİNE AXİOS İŞLEMİDE KULLANILABİLİR (DAHAKOLAY)
import axios from "axios";

// (async() => {
//     const {data : users} = await axios("https://jsonplaceholder.typicode.com/users");

//     const {data : post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const {data : post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("users:", users);
//     console.log("post 1:", post1);
//     console.log("post 2:", post2);
// })();




// fetch ile fonksiyon yazdıgımızda then ile nasıl devam debiliriz
// bir promise "then" oldugunda resolve a düşer, reject oldugunda hataya düşer "catch"
const getUsers = () => {
    return new Promise(async(resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data)
        // reject("bir sorun olustu")
    })
}

const getPost = (post_id) => {
    return new Promise(async(resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(data)
        // reject("bir sorun daha olustu")
    })
}

// önce user sonra post gelmeli
// (async () => {
//     try{
//         const users = await getUsers();
//         const post = await getPost(1)

//         console.log(users);
//         console.log(post);
//     }catch(e){
//         console.log(e);
//     }
// })()



Promise.all([getUsers(), getPost(1)])
.then(console.log)
.catch(console.log)


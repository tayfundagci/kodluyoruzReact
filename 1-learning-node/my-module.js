// const topla = function topla(a, b){
//     return a+b;
// }

// const topla = (a, b) => {
//     return a + b;
// }

export default (name) => {
    // console.log("hello " + name);
    console.log(`hello ${name}`)
}

const topla = (a, b) => a+b;
const cikar = (a, b) => a-b;

const text = 'Text';
const user = {
    name: "Tayfun",
    surname: "Dagci"
}

const users = [{
    name: "Ahmet",
    surname: "Tarik"
}, {
    name: "Yasin",
    surname: "Erbilen"
}]

export {topla, cikar, text, user, users}




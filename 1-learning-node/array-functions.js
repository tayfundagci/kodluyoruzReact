const users = [
    {
        name: "Mehmet",
        age: 10,
    },
    {
        name: "Mehmet",
        age: 29,
    },
    {
        name: "Sevilay",
        age: 40,
    },
];

/*
push
map
find
filter
some
every
includes
*/

// PUSH
// users.push('Ayşe');
// users.push('Fatma');
// console.log(users);



// MAP
// users.map((item) => {
//     console.log(item.name);
// })



// FIND
// const result = users.find((item) => item.name === "Mehmet" && item.age > 20);
// console.log(result);



// FILTER
// const filtered = users.filter(({name , age}) => name === "Mehmet" && age < 20)
// console.log(filtered);



// SOME
// const some = users.some(item => item.age === 10)
// console.log(some);



// EVERY (hepsi uyuyor mu)
// const every = users.every(item => item.age > 20)
// console.log(every);



// INCLUDES (içeriyor mu)
const meyveler = ['elma', 'armut', 'muz'];
const isIncluded = meyveler.includes('muz');
console.log(isIncluded);

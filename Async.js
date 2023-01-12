console.log('person1: show ticket');
console.log('person2: show ticket');

const preMovie = async () => {

const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve('ticket'), 3000);
});

const getPopcorn = new Promise((resolve, reject) => resolve('popcorn')); 
const addButter = new Promise((resolve, reject) => resolve('butter')); 
const getColdDrink = new Promise((resolve, reject) => resolve('coldDrink')); 
    
let ticket = await promiseWifeBringingTicks;
    console.log(`wife: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

let butter = await addButter;

console.log(`husband: I got some ${butter} on popcorn`);
console.log(`husband: anything else darling?`);
console.log(`wife: lets go we are getting late?`);
console.log(`husband: thank you for the reminder *grind*`);

let coldDrink = await getColdDrink;

console.log(`wife: Get some colddrink`);
console.log(`husband: Yes Sure!`);


return ticket;

}

preMovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: show ticket');
console.log('person5: show ticket');

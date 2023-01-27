console.log('person1: shows tickets');
console.log('person2: shows tickets');

const preMovie = async() => {
    const promiseWifeBringiningTics = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('ticket'),3000);
    });
    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
    const addButter = new Promise((resolve,reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve,reject) => resolve('drinks'));
    let ticket = await promiseWifeBringiningTics;
    console.log('wife: i have the tickets');
    console.log('husband: we should go');
    console.log('wife: no');

    let popcorn = await getPopcorn;

    console.log('wife: i have no money');
    console.log('husband: we need some');
    console.log('wife: yes');

    let butter= await addButter;

    console.log('wife: let get in');
    console.log('husband: yes lets have fun');
    console.log('wife: yes lets go');

    let drinks = await getColdDrinks;

    console.log('wife: i need drinks');
    console.log('husband: ok lets get some');

    return ticket;
}

preMovie().then((m) => console.log(m));

console.log('person3: shows tickets');
console.log('person4: shows tickets');
// // object destructuring

// // const person = {
// //     name: 'Zura',
// //     age: 17,
// //     location: {
// //         city: 'Tbilisi',
// //         temp: 54
// //     }
// // };

// // const { name, age } = person;
// // const { city, temp } = person.location;

// // console.log(`${name} is ${age}.`)

// // const book = {
// //     title: 'Ego is the Enemy',
// //     author: 'Ryan Holiday',
// //     publisher: {
// //         name: 'Penguin'
// //     }
// // };

// // const {name: publisherName = 'Self-Published'} = book.publisher;

// // console.log(publisherName);

// //
// // array destructuring
// //

// // const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// // const [, , state = 'New york'] = address;

// // console.log(`You are in ${state}`);

// const item = ['Coffe (hot)', '$3.00', '$3.50', '$3.75'];

// const [itemName, , mPrice ] = item;

// console.log(`A medium ${itemName} costs ${mPrice}`);
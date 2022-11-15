// //    string, Number, boalem, null, undefined

// const name = 'John';
// const age = 30;

// //  concatenation
// console.log('My name is ' + name + ' and i am ' + age);
// //  Template String
// const hello = `My name is ${name} and I am ${age}`;

// console.log(hello);

// // Arrays - variables that hold multiple value

// const fruits = ['apple', 'oranges', 'pears'];

// fruits[3] = 'grapes';

// fruits.push('mangos');

// fruits.unshift('strawberies');

// fruits.pop();

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('oranges'))

// console.log(fruits);

// const person == {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// } 

// const x = 20;

// if(x === 10) {
//     console.log('x os 10')
// } else if(x > 10) {
//    console.log('x is greater than 10')
// }

// const btn = document.querySelector('.btn'); 

// btn.addEventListener('click', (e) => {
//    e.preventDefault();
// //    console.log('click')
// //    to change background
//    document.querySelector('#my-form').style.background = '#ccc';
// //    to change the body background color
//    document.querySelector('body').classList.add('bg-dark');
// });

  const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msg = document.querySelector('.msg');
  const userList = document.querySelector('#users');

  myForm.addEventListener('submit', onSubmit);

  function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields'

        setTimeout(() => msg.remove(), 2000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // clear field
        nameInput.value = '';
        emailInput.value = '';
    }
  }
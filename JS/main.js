// /// Single element selector.
// const form = document.getElementById('my-form');
// const form1 = document.querySelector('msg');
// console.log(form1)
// /// Muliple element selector.
// console.log(document.querySelectorAll('.item')) // This gives a node list.
// console.log(document.getElementsByClassName('item')) // This gives HTMLCollection.
// console.log(document.getElementsByTagName('li'))

// const ul = document.querySelector('.items');
// // ul.remove()
// // ul.lastElementChild.remove();
// const text = ul.firstElementChild.textContent = 'Hello';
// ul.children[1].textContent = 'Siuu'
// ul.children[2].innerText = 'iuu'
// ul.lastElementChild.innerHTML = '<h1>Holla</h1>'
// const btn = document.querySelector('.btn');
// btn.style.background = 'blue'
// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//    console.log('clicked')
//    console.log(e.target.className)
//    document.querySelector('.items').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// })

const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSbumit);

function onSbumit(e){
    e.preventDefault();
    if(name.value === '' || email.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter both fields';

        setTimeout(() => msg.remove(),3300)
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value} \n ${email.value}`));
        userList.appendChild(li);


    name.value = '';
    email.value = '';
    }
}
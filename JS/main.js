// /// Single element selector.
// const form = document.getElementById('my-form');
// const form1 = document.querySelector('msg');
// console.log(form1)
// /// Muliple element selector.
// console.log(document.querySelectorAll('.item')) // This gives a node list.
// console.log(document.getElementsByClassName('item')) // This gives HTMLCollection.
// console.log(document.getElementsByTagName('li'))

const ul = document.querySelector('.items');
// ul.remove()
// ul.lastElementChild.remove();
const text = ul.firstElementChild.textContent = 'Hello';
ul.children[1].textContent = 'Siuu'
ul.children[2].innerText = 'iuu'
ul.lastElementChild.innerHTML = '<h1>Holla</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'blue'
"use strict";

// const box = document.getElementById("text");

// console.log('Найденный элемент: ', box);

// // получение по тегу label (результат - псевдомассив (массив без методов))
// // const label=document.getElementsByTagName('label')[2];
// const label = document.getElementsByTagName('label');

// console.log('Найденные элементы: ', label[2]);

 
// const contact = document.getElementsByClassName('contact');

// console.log('Найденные элементы: ', contact);


// современные методы
const aaa = document.querySelector('#myLife');  
const text = aaa.innerText; //получаем текст из тега
const myImg = document.querySelector('.avatar'); 
const newText = "С котом по жизни!"; //новый текст
let inc = 0; //счетчик нажатий на картинку


function even_or_odd(numbr) {
  return (numbr % 2 === 0) ? true : false;
}

function handleClick() {
    aaa.innerText = text;  
    inc++;
      if (!even_or_odd(inc) )  { 
        aaa.innerText = newText; 
        //return newText; 
      }  
  }


//навешиваем обработчик событий на аватар
myImg.addEventListener('click', handleClick);  

// setTimeout( () => {
//     addStylesTo(aaa);
//     //console.dir(aaa);
// }, 3000);

// function addStylesTo(p1) { 
//     console.log("Первоначальный текст: ", oldText);
//     p1.innerText = newText;
//      console.log("Новый вставляемый текст: ", p1.innerText);
    
//     //событие - возврат старого значения строки по клику мыши
//     p1.onclick = () => {
//         console.log('Нажато!'); 
//         // p1.innerText = oldText; 
//     };
// }



// используем единственный метод псевдомассива, в случае querySelectorAll
//item - это каждый элемент псевдомассива
// aaa.forEach( item => {
//   console.log(item); 
// });

// aaa.style.color = 'blue';
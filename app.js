const addButton = document.getElementById('addButton');
const inputContainer = document.getElementById('inputContainer');
let inputArray = document.getElementsByClassName('text');
let submitArray = document.getElementsByClassName('submit');




submitArray[0].addEventListener('click',(event)=>{
    let storage1 = localStorage.setItem('phrase1', `${inputArray[0].value}`)

    inputArray[0].value = localStorage.getItem('phrase1')
})
inputArray[0].value = localStorage.getItem('phrase1');


submitArray[1].addEventListener('click',()=>{
    let storage2 = localStorage.setItem('phrase2', `${inputArray[1].value}`)

    inputArray[1].value = localStorage.getItem('phrase2')
})
inputArray[1].value = localStorage.getItem('phrase2');

submitArray[2].addEventListener('click',()=>{
    let storage3 = localStorage.setItem('phrase3', `${inputArray[2].value}`)

    inputArray[2].value = localStorage.getItem('phrase3')
})
inputArray[2].value = localStorage.getItem('phrase3');

addButton.addEventListener('click', (event)=>{
    let newInput = document.createElement('div');
    newInput.setAttribute('class','formulaire');
    inputContainer.appendChild(newInput);
    newInput.innerHTML=`<input class="text" type="text">
    <input class="submit" placeholder="copier" type="submit">`;
    newInput.value= localStorage.getItem('phrase1') ;
})


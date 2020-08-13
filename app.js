const addButton = document.getElementById('addButton');
const inputContainer = document.getElementById('inputContainer');
let inputArray = document.getElementsByClassName('text');
let submitArray = document.getElementsByClassName('submit');
let test = document.getElementById('test');


submitArray[0].addEventListener('click',(event) => {
    let storage1 = localStorage.setItem('phrase1', `${inputArray[0].value}`)

    inputArray[0].value = localStorage.getItem('phrase1')

    const text = inputArray[0].value;
    navigator.clipboard.writeText(text);

})


inputArray[0].value = localStorage.getItem('phrase1');


submitArray[1].addEventListener('click',(event) => {
    let storage2 = localStorage.setItem('phrase2', `${inputArray[1].value}`)

    inputArray[1].value = localStorage.getItem('phrase2')

    const text = inputArray[1].value;
    navigator.clipboard.writeText(text);
})
inputArray[1].value = localStorage.getItem('phrase2');

submitArray[2].addEventListener('click',(event) => {
    let storage3 = localStorage.setItem('phrase3', `${inputArray[2].value}`)

    inputArray[2].value = localStorage.getItem('phrase3')
    const text = inputArray[2].value;
    navigator.clipboard.writeText(text);


})
inputArray[2].value = localStorage.getItem('phrase3');

addButton.addEventListener('click', (event) => {
    let newInput = document.createElement('div');
    newInput.setAttribute('class', 'formulaire');
    inputContainer.appendChild(newInput);
    newInput.innerHTML = `<input class="text" type="text">
    <input class="submit" placeholder="copier" type="submit">`;
    newInput.value = localStorage.getItem('phrase1');
})

// Quand je clique sur le bouton ça copie la phrase dans l'input correspondant
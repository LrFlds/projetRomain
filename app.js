const addButton = document.getElementById('addButton');
const inputContainer = document.getElementById('inputContainer');
let test = document.getElementById('test');
let nbInputs = localStorage.getItem('nbInputs')||0; //On récupère l'objet 'nbInputs' au démarrage (nombre d'inputs sur la page) ou 0 si aucun input n'est présent
const TEXT_SELECTOR = '.text';
const SUBMIT_SELECTOR = '.submit';
function addNewInput(id){
    let template = document.getElementsByTagName('template')[0]; // on cible l'élément <template> (modèle)
    let clone = document.importNode(template.content, true); // on clone le contenu du template, car le template renvoi un fragment du document (qui lui contient le container)
    let cloneText= clone.querySelector(TEXT_SELECTOR); // on cible l'input text du clone
    clone.querySelector(SUBMIT_SELECTOR).addEventListener('click',(event)=>{ //on ajoute un écouteur sur le bouton submit
    localStorage.setItem(`Phrase${id}`,cloneText.value); // on stocke la valeur de l'input text
    navigator.clipboard.writeText(cloneText.value); // on envoi la valeur de l'input dans le presse papier
    });
    cloneText.value = localStorage.getItem(`Phrase${id}`); //on attribut le localStorage à la valeur de l'input text
    inputContainer.appendChild(clone); //on place le clone dans le container
};
for(i=0; i < nbInputs; i++){  // on exécute la fonction au lancement de la page autant de fois qu'il y a d'inputs dans le local storage
    addNewInput(i+1);
}
addButton.addEventListener('click', (event) => { // bouton qui ajoute un input
    addNewInput(nbInputs+1); // on défini le paramètre pour faire correspondre le chiffre dans la clef du storage
    nbInputs++; // on ajoute 1 au nombre d'inputs
    localStorage.setItem('nbInputs',nbInputs); //on met à jour la valeur du storage
});

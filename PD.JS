const container = document.getElementById('container');
const button = document.getElementById('NON');
const buttonO = document.getElementById('OUI');
const audio = document.getElementById('audio');

function deplacerBouton() {
    const largeurConteneur = container.clientWidth;
    const hauteurConteneur = container.clientHeight;

    const nouvelleHauteur = Math.random() * (hauteurConteneur - button.offsetHeight);
    const nouvelleLargeur = Math.random() * (largeurConteneur - button.offsetWidth);

    button.style.top = `${nouvelleHauteur}px`;
    button.style.left = `${nouvelleLargeur}px`;
}

button.addEventListener('mouseover', deplacerBouton);

document.addEventListener('DOMContentLoaded', function () {
    button.style.position = 'absolute';
});

buttonO.addEventListener('click', () => {
    container.style.filter = 'blur(4px)';
    button.removeEventListener('mouseover', deplacerBouton);
    audio.play();
});

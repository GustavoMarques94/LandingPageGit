const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses(); //Removo a classe active da imagem que está selecionada
        panel.classList.add('active'); //Ao clicar na imagem, adiciono a classe active a imagem clicada
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })    
}
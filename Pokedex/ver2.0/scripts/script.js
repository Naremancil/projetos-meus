// modal sobre a página
/* 
houve uma atualização aqui no dia 12/12/2022 onde eu
achei um modo de fazer o botão identificar o elemento pai e saber
quem abrir e quem fechar
*/

const btn = document.querySelectorAll('.btn')
btn.forEach((el) => {
    el.addEventListener('click', (e) => {
        //console.log(e)
        
        if(e.target.innerText === "Sobre "){
            document.querySelector('#modal-info').classList.toggle('hide')
            document.querySelector('#fade').classList.toggle('hide')
        } else {
            e.target.offsetParent.classList.toggle('hide')
            document.querySelector('#fade').classList.toggle('hide')
        }
    })
})

//Pokemon!

/*  ****** Este é um teste pro audio



    const testeAudio = new Audio('./data/charmander/004Charmander.mp3')
    testeAudio.play();
*/





/*  ********** Decidi tentar fazer por Label

const charmander = document.querySelector("#charmander-image")

function playAudio(e){
    
}

charmander.addEventListener("click", (element) =>{
    if(element.){

    } else {
        console.log("nao")
    }
})*/

//console.log(pokemons)






/* ********** Descobri uma forma diferente de abrir e fechar modais na qual não vou me incomodar em precisar ver quem é o modal que eu estou abrindo, usando uma forma genérica de pegar eles de acordo com o abrir e fechar, só preciso ver quem é o elemento pai e dar toggle('hide') nele.

function closeModal(){
    document.querySelector("")
}

function toggleSquirtle(){
    document.querySelector("#modal-squirtle").classList.toggle('hide')
    fadeModal.classList.toggle('hide')

}

function toggleChar(){
    [document.querySelector("#modal-char"), fadeModal].forEach((element) => {
        const sound = new Audio('./data/charmander/charmander.mp3').play()
        element.classList.toggle("hide")
    })

    const buttomChar = document.querySelector("#close-charmander")
}

function toggleBulba(){
    [document.querySelector("#modal-bulba"), fadeModal].forEach((element) => {
        const sound = new Audio('./data/bulbasaur/bulbasaur.mp3').play()
        element.classList.toggle("hide")
    })

    const buttomBulba = document.querySelector("#close-bulba")
}

// Pega pra ver qual pokemon foi clicado
function whoIs(pokemonName){
    let pokeSound
    switch (pokemonName){
        case 'squirtle':
            pokeSound = new Audio('./data/squirtle/squirtle.mp3').play()
            toggleSquirtle();
            break;
        /*case 'charmander':
            pokeSound = new Audio('../data/squirtle/squirtle.mp3').play()
            toggleChar();
            break;
        case 'bulbasaur':
            pokeSound = new Audio('../data/squirtle/squirtle.mp3').play()
            toggleBulba();
            break;
        default: console.log("ta dando ruim");
    }
}

// armazena os pokemons
const pokemons = []

pokemons[0] = document.querySelector("#squirtle")
//pokemons[1] = document.querySelector("#charmander")
//pokemons[2] = document.querySelector("#bulbasaur")

// evento de click sobre o label
pokemons.forEach((element) => {
    element.addEventListener("click", (e) => {
        let pokeName = e.path[1].innerText
        //console.log(e.path[1].innerText)
        whoIs(pokeName)
    })
})*/

function squirtleModal(){
    document.querySelector('#modal-squirtle').classList.toggle('hide')
    document.querySelector('#fade').classList.toggle('hide')

    // Reproduzir o som do pokemon!
    pokeSound = new Audio('./data/squirtle/squirtle.mp3').play()
}

function charmanderModal(){
    document.querySelector('#modal-charmander').classList.toggle('hide')
    document.querySelector('#fade').classList.toggle('hide')

    // Reproduzir o som do pokemon!
    pokeSound = new Audio('./data/charmander/charmander.mp3').play()
}

function bulbasaureModal(){
    document.querySelector('#modal-bulbasaur').classList.toggle('hide')
    document.querySelector('#fade').classList.toggle('hide')

    // Reproduzir o som do pokemon!
    pokeSound = new Audio('./data/bulbasaur/bulbasaur.mp3').play()
}

function whoIs(name){
    switch(name){
        case 'squirtle':
            squirtleModal()
            break
        case 'charmander':
            charmanderModal()
            break
        case 'bulbasaur':
            bulbasaureModal()
            break
        default: return
    }
}

const pokemons = []

pokemons[0] = document.querySelector("#squirtle")
pokemons[1] = document.querySelector("#charmander")
pokemons[2] = document.querySelector("#bulbasaur")

// evento de click sobre o label
pokemons.forEach((element) => {
    element.addEventListener("click", (e) => {
        let pokeName = e.path[1].innerText
        //console.log(e.path[1].innerText)
        whoIs(pokeName)
    })
})
// modal sobre a página
const modalInfoOpen = document.querySelector("#modal-info-open")
const modalInfoClose = document.querySelector("#modal-info-close")
const fadeModal = document.querySelector("#fade")

var infoPag = [modalInfoOpen,modalInfoClose].forEach((element) => {
    element.addEventListener("click", (ev) => {
        document.querySelector("#modal-info").classList.toggle("hide")
        document.querySelector("#fade").classList.toggle("hide")
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



function toggleSquirtle(){

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
            break;*/
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
})
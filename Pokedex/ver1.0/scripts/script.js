var show = document.querySelector(".infos-pokemon")
var squirtle_info = document.getElementById("squirt")
var char_info = document.getElementById("char")
var bulba_info = document.getElementById("bulba")

function squirtle(){
    show.classList.toggle('hidden')
    squirtle_info.classList.toggle('hidden')
}

function charmander(){
    show.classList.toggle('hidden')
    char_info.classList.toggle('hidden')
}

function bulbasaur(){
    show.classList.toggle('hidden')
    bulba_info.classList.toggle('hidden')
}
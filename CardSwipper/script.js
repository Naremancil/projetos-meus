let contador = 1
document.querySelector(`input[class=slide1]`).checked = true

const inputs = document.querySelectorAll('input[name=slide]')

inputs.forEach(element => {
    element.addEventListener('click', e => {
        switch(e.target.id){
            case 'first':
                contador = 1
                break
            case 'second':
                contador = 2
                break
            case 'third':
                contador = 3
                break
            case 'forth':
                contador = 4
                break
            default: return;
        }
    })
})

setInterval(() => {
    jumpRow()
}, 3500) //conta em milissegundos

function reset(){
    contador = 1
    document.querySelector(`input[class=slide4]`).checked = false
    document.querySelector(`input[class=slide1]`).checked = true
}

function next(){
    contador ++
    document.querySelector(`input[class=slide${contador}]`).checked = true
    document.querySelector(`input[class=slide${contador-1}]`).checked = false
}

function jumpRow(){
    contador == 4 ? (
            // Verifica se chegou na ultima imagem e reseta o carrossel
            reset()
        ) : (
            // Vai pro próximo e desmarca o anterior
            next()
        )
}
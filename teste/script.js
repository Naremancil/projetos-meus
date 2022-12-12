const btn = document.querySelectorAll('.btn')

btn.forEach((el) => {
    el.addEventListener('click', (e) => {
        if(e.target.innerText === 'open'){
            e.target.nextElementSibling.classList.toggle('hide')
        } else {
            e.target.parentNode.classList.toggle('hide')
        }


        
        
    })
})
const buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen')

buttons.forEach((e, i) => {
    e.addEventListener('click', (e) => {

        if (e.target.innerText == '<' || e.target.innerText == 'C' || e.target.innerText == '=') {
            events(e);
        } else {
            screen.innerText += e.target.innerText
        }



    })

})


function events(element) {
    if (element.target.innerText == 'C') {
        screen.innerText = ''
    } if (element.target.innerText == '<') {
        console.log('apagar')
    } if (element.target.innerText == '=') {
        operation()
    }
}


function operation() {
    return console.log('ok')
}


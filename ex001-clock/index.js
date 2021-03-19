addEventListener('load',carregar)

function carregar(){
    var now = new Date()
    var hours = now.getHours()
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#img')
    msg.innerHTML = `Agora são ${hours} horas`
    if (hours >= 0 && hours < 12){
        document.body.style.background = '#f0d8c0'
        img.src = 'manha.png'
    } else if (hours < 18){
        document.body.style.background = '#bdcfdd'
        img.src = 'tarde.png'
    } else {
        document.body.style.background = '#423558'
        document.body.style.color = 'whitesmoke'
        img.src = 'noite.png'
    }
}
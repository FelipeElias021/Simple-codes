var verificar = document.querySelector('#verificar')
verificar.addEventListener('click',click)

function click(){
    var now = new Date()
    var ano = now.getFullYear()
    var resultado = document.querySelector('#resultado')
    var nasc = document.querySelector('#txtnasc').value
    var idade = ano - nasc
    var sex = document.getElementsByName('sex')
    var genero = ''
    var img = document.createElement('img')
    if (nasc > ano || nasc == 0) {
        alert('Verifique os dados, tente novamente')
    } else {
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                //criança
                img.setAttribute('src','bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','velho-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade < 10) {
                //criança
                img.setAttribute('src','bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src','velho-f.png')
            }
        }
        resultado.innerText = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}
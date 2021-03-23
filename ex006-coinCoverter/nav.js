const img = document.querySelector('.img');
const txtdolar = document.querySelector('#txtdolar');
const output = document.querySelector('.output');
//MANTER O FOCO DO TECLADO NO INPUT DIRETO
txtdolar.focus()

const btn = document.querySelector('.btn');
btn.addEventListener('click', e => {
    //SO ACEITAR VALORES MAIORES QUE ZERO
    if (txtdolar.value > 0) {
        //APAGAR SE JÁ TIVER ALGUMA INFORMAÇÃO
        output.innerHTML = ''
        const real = Number(txtdolar.value) * 5.5
        output.innerHTML += `<p>Você tem R$${real.toFixed(2).replace('.', ',')}</p>`
        if (real <= 20) {
            output.innerHTML += `<p>Situação ta ruim hein...</p>`
            img.setAttribute('src', 'https://images.pexels.com/photos/157520/pexels-photo-157520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
        } if (real >= 20 && real <= 1000) {
            output.innerHTML += `<p>Tá rico zé!</p>`
            img.setAttribute('src', 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
        } if (real > 1000) {
            output.innerHTML += `<p>Dá pra compra um corsa já!</p>`
            img.setAttribute('src', 'https://img0.icarros.com/dbimg/imgadicionalanuncio/1/184862449_1')
        }
    } else {
        alert('Por favor insira um número positivo')
        output.innerHTML = ''
        img.setAttribute('src', 'https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    }
    //APAGAR O NUMERO NO INPUT E COLOCAR O FOCO DO TECLADO NELE
    txtdolar.value = ''
    txtdolar.focus()
})

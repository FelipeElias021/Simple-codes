let btnadd = document.querySelector('#btnadd')
btnadd.addEventListener('click', adicionar)

let numero = document.querySelector('#txtnum')
let valores = []
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')

function Numeros(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false 
    }
}

function inlist(n,l) { 
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (Numeros(numero.value) && !inlist(numero.value, valores)) {
        valores.push(Number(numero.value))
        let itens = document.createElement('option')
        itens.innerHTML = `${numero.value} adicionado`
        lista.appendChild(itens)
        res.innerHTML = ''
    } else {
        alert('Número inválido, ou já adicionado')
    }
    numero.value = ''
    numero.focus()
} 

let btnjulgar = document.querySelector('#btnjulgar') 
btnjulgar.addEventListener('click',julgar)

function julgar() {
    if (valores.length >= 1) {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
        }
        let media = soma/total
        res.innerHTML += `<p>Total: ${total} valores</p>`
        res.innerHTML += `<p>Maior valor: ${maior}</p>`
        res.innerHTML += `<p>Menor valor: ${menor}</p>`
        res.innerHTML += `<p>Soma: ${soma}</p>`
        res.innerHTML += `<p>Média: ${media.toFixed(1)}</p>`
    } else {
        alert('Insira algum valor')
    }
}
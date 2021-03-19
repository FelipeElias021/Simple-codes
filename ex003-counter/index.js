var btn = document.querySelector('#btn');
btn.addEventListener('click',click);

function click(){
    var inicio = Number(document.querySelector('#txtinicio').value);
    var fim = Number(document.querySelector('#txtfim').value);
    var passo = Number(document.querySelector('#txtpasso').value);
    var res = document.querySelector('#res');
    if (inicio == 0 || fim == 0){
        res.innerText = 'Impossível contar';
    } else {
        res.style.textAlign += "justify";
        res.innerHTML = '<p>Contando</p>';
        if (passo <= 0) {
            alert('Passo inválido! Passo definido como 1');
            passo = 1
        }
        if (inicio < fim) {
            //Contagem crescente
            while (inicio <= fim) {
                res.innerHTML += `${inicio} &#x1F449 `;
                inicio += passo;
            }
        } else{
            //Contagem decrescente
            while (inicio >= fim) {
                res.innerHTML += `${inicio} \u{1F449} `;
                inicio -= passo;
            }   
        }
    } 
}
var btn = document.querySelector('#btn');
btn.addEventListener('click',click);

function click(){
    let num = Number(document.querySelector('#txtnum').value);
    let res = document.querySelector('#res');
    if (num == 0){
        alert('Insira um número')
    } else {
        let n = 1;
        res.innerHTML = ''
        while (n <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${n} = ${num*n}`
            res.appendChild(item)
            res.value = `tab${n}`
            n++;
        }
    }
}
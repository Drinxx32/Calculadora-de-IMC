let nome = document.querySelector('input#nome')
let peso = document.querySelector('input#peso')
let altura = document.querySelector('input#alt')
let res = document.querySelector('div#res')
let IMC = 0

res.innerHTML = ''
function calcular(){
    if (nome.value == 0 || peso.value == 0 || altura.value == 0){
        window.alert('Entradas Inválidas')
    } else {
    
        IMC = (peso.value / (altura.value * altura.value)).toFixed(2)
        res.innerHTML = `Oi ${nome.value} Seu IMC é ${IMC}`
        nome.value = ''
        peso.value = ''
        altura.value = ''
        nome.focus()
        
        

        
    }
    
}


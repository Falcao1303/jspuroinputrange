const slider = document.querySelector('#rangeline')
const numText = document.querySelector('#numbroller')
const numExtenso = document.querySelector('#extense')

slider.addEventListener('input', updateNumText)


function updateNumText(event) {
    currentValue = event.target.value
    numText.value = currentValue
    convertNumToExtense(currentValue)
}

function convertNumToExtense(n) {
    const unidade = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
    const dezenas1 = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
    const dezenas = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
    const centenas = ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']


    if (n < 10) {
        let splittedNum = String(n).split('')
        let digito1 = splittedNum[0]
        numExtenso.value = unidade[n]
    }
    if (n >= 10 && n < 20) {
        let splittedNum = String(n).split('')
        let digito1 = splittedNum[0]
        let digito2 = splittedNum[1]
        numExtenso.value = dezenas1[digito2]
    }
    if (n >= 20 && n < 100) {
        let splittedNum = String(n).split('')
        let digito1 = splittedNum[0]
        let digito2 = splittedNum[1]
        if (digito2 === '0') {
            numExtenso.value = dezenas[digito1 - 1]
        } else {
            numExtenso.value = dezenas[digito1 - 1] + ' e ' + unidade[digito2]
        }
    }
    if (n >= 100 && n < 1000) {
        let splittedNum = String(n).split('')
        let digito1 = Number(splittedNum[0])
        let digito2 = Number(splittedNum[1])
        let digito3 = Number(splittedNum[2])
        if (digito1 >= 1 && digito2 === 0 && digito3 === 0) {
            numExtenso.value = centenas[digito1 - 1]
        }
        if (digito1 === 1 && digito2 === 0 && digito3 > 0 && digito3 <= 9) {
            numExtenso.value = 'cento e ' + unidade[digito3]
        }
        if (digito1 === 1 && digito2 === 1 && digito3 <= 9) {
            numExtenso.value = 'cento e ' + dezenas1[digito3]
        }
        if (digito1 === 1 && digito2 > 1) {
            numExtenso.value = 'cento e ' + dezenas[digito2 - 1] + ' e ' + unidade[digito3]
        }
        if (digito1 > 1 && digito2 === 0 && digito3 > 0 && digito3 <= 9) {
            numExtenso.value = centenas[digito1 - 1] + ' e ' + unidade[digito3]
        }
        if (digito1 > 1 && digito2 === 1) {
            numExtenso.value = centenas[digito1 - 1] + ' e ' + dezenas1[digito3]
        }
        if (digito1 > 1 && digito2 > 1) {
            numExtenso.value = centenas[digito1 - 1] + ' e ' + dezenas[digito2 - 1] + ' e ' + unidade[digito3]
        }
    }
}
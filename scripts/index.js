const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const criptografar = () => {
    let palavra = capturaInput(0).toUpperCase()
    let retorno = ""
    let num = parseInt(capturaInput(1))

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == " ") {
            retorno += "-"
        } else {
            let letraCifrada = null
            let j = 0
            while (letraCifrada != palavra[i]) {
                letraCifrada = alfabeto[j]
                j++
            }
            if (j < alfabeto.length + num) {
                retorno += alfabeto[j + num]
            }
            else if (j > alfabeto.length + num) {
                retorno += alfabeto[j]
            }
            else {
                alert('Erro!')
            }
        }
    }
    console.log(retorno);
    
    devolveHTML(retorno)
}

const descriptografar = () => {
    let palavra = capturaInput(0).toUpperCase()
    let retorno = ""
    let num = parseInt(capturaInput(1))
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == "-") {
            retorno += " "
        } else {
            let letraCifrada = null
            let j = 26
            while (letraCifrada != palavra[i]) {
                letraCifrada = alfabeto[j]
                j--
            }
            if (j <= alfabeto.length - num) {
                retorno += alfabeto[j - num]
            }
            else if (j >= alfabeto.length - num) {
                retorno += alfabeto[j]
            }
            else {
                alert('Erro!')
            }
        }
        console.log(retorno);
        
    }
    devolveHTML(retorno)
}

const capturaInput = (position) => {
    return document.getElementsByTagName('input')[position].value
}

const devolveHTML = (elemento) => {
    document.getElementById('retorno').innerHTML = elemento;
}

const limpar = () => {
    console.log('entrou na função');
    
    devolveHTML("____________________")
    document.getElementsByTagName('input')[0].value = ""
    document.getElementsByTagName('input')[1].value = ""
}
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const criptografar = () => {
    let palavra = capturaInput()
    let retorno = ""
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
            if (j < alfabeto.length + 4) {
                retorno += alfabeto[j + 4]
            }
            else if (j > alfabeto.length + 4) {
                retorno += alfabeto[j]
            }
            else {
                alert('Erro!')
            }
        }
    }
    devolveHTML(retorno)
}

const descriptografar = () => {
    let palavra = capturaInput()
    let retorno = ""
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
            if (j < alfabeto.length - 4) {
                retorno += alfabeto[j - 4]
            }
            else if (j > alfabeto.length - 4) {
                retorno += alfabeto[j]
            }
            else {
                alert('Erro!')
            }
        }
    }
    devolveHTML(retorno)
}

const capturaInput = () => {
    return document.getElementsByTagName('input')[0].value
}

const devolveHTML = (elemento) => {
    document.getElementById('retorno').innerHTML = elemento;
}
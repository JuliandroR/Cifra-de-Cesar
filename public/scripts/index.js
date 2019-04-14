const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


const criptografar = () => {
    let palavra = capturaInput(0).toUpperCase()
    let retorno = ""

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == " ") {
            retorno += " "
        }
        else if (palavra[i] == "Á" || palavra[i] == "À" || palavra[i] == "Ã" || palavra[i] == "Â") {
            retorno += criptografador("A")

        }
        else if (palavra[i] == "É" || palavra[i] == "È" || palavra[i] == "Ê") {
            retorno += criptografador("E")
        }
        else if (palavra[i] == "Í" || palavra[i] == "Ì") {
            retorno += criptografador("I")
        }
        else if (palavra[i] == "Ó" || palavra[i] == "Ò" || palavra[i] == "Õ" || palavra[i] == "Ô") {
            retorno += criptografador("O")
        }
        else if (palavra[i] == "Ú" || palavra[i] == "Ù") {
            retorno += criptografador("U")
        }
        else if (palavra[i] == "Ç") {
            retorno += criptografador("C")
        }
        else {

            retorno += criptografador(palavra[i])
        }
    }

    devolveHTML(retorno)
}

const criptografador = (letra) => {
    let num = parseInt(capturaInput(1)) % (alfabeto.length % 3)
    let letraCifrada = null
    let j = 0
    while (letraCifrada != letra) {

        letraCifrada = alfabeto[j]
        j++
        if (j > alfabeto.length - 1) {
            break;
        }
    }

    if (j < alfabeto.length) {
        if (j < alfabeto.length + num) {
            return alfabeto[j + num]
        }
        else if (j > alfabeto.length + num) {
            return letra
        }
    }
    else {
        return letra;
    }
}

const descriptografar = () => {
    let palavra = capturaInput(0).toUpperCase()
    let retorno = ""
    let num = parseInt(capturaInput(1)) % (alfabeto.length % 3)
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == " ") {
            retorno += " "
        } else {
            let letraCifrada = null
            let j = alfabeto.length
            while (letraCifrada != palavra[i]) {
                letraCifrada = alfabeto[j]
                j--
            }
            if (j <= alfabeto.length - num) {
                retorno += alfabeto[j - num]
            }
            else if (j >= alfabeto.length - num) {
                retorno += palavra[i]
            }
            else {
                retorno += palavra[i]
            }
        }

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
    devolveHTML("____________________")
    document.getElementsByTagName('input')[0].value = ""
    document.getElementsByTagName('input')[1].value = ""
}

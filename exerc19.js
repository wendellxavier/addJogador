function addJogador(){
    const posicao = document.getElementById('posicao').value
    const nome = document.getElementById('nome').value
    const numero = document.getElementById('numero').value


    const confirmacao = confirm(`escalar ${nome} como ${posicao} ?`)

    if(confirmacao){
        const timeLista = document.getElementById('timeLista')
        const jogadorItem = document.createElement('li')
        jogadorItem.id = 'jogador-' + numero
        jogadorItem.innerText = posicao + " " + nome + " (" + numero + ")"
        timeLista.appendChild(jogadorItem)

        document.getElementById('posicao').value = ''
        document.getElementById('nome').value = ''
        document.getElementById('numero').value = ''
    }
}

function removerJogador(){
    const numero = document.getElementById('numeroRemover').value
    const removerJogador = document.getElementById('jogador-' + numero)

    const confirmacao = confirm(`Remover o jogador ${removerJogador.innerText} ?`)

    if (confirmacao){
        document.getElementById('timeLista').removeChild(removerJogador)
        document.getElementById('removerJogador').value = ''
    }
}
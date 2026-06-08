function alterna(botao) {
    const imagemD = document.querySelector('.imagem')
    const cardc = botao.closest('.card')
    const conteudocom = cardc.querySelector('.conteudocomp')
    const header = document.querySelector('header')
    const caixasC = document.querySelectorAll('.caixa > div')
    if (!cardc.classList.contains('aberto')){
        if(header) header.classList.add('escondido')
            if(imagemD) imagemD.classList.add('escondido')
            caixasC.forEach(bloco => {
        if (!bloco.contains(cardc)) bloco.classList.add('escondido')
            })
        
        cardc.classList.add('aberto')
        botao.innerText = '← Voltar para as Notícias';
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        if(header) header.classList.remove('escondido')
            if(imagemD) imagemD.classList.remove('escondido')
                caixasC.forEach(bloco => bloco.classList.remove('escondido'))
            conteudocom.style.display = 'none'
            cardc.classList.remove('aberto')
            botao.innerText = 'Ler Notícia Completa'
    }
}
function responder(elementoClica, marcou) {
    const explica = document.querySelector('.explicacao')
    const exper = document.querySelector('.expe')
    const alter = document.querySelectorAll('.opção')
    alter.forEach(botao => botao.disabled = true)
    if (marcou === 'a') {
        elementoClica.classList.add('correta');
        explica.style.display = 'block';
    } else {
        elementoClica.classList.add('incorreta');
        exper.style.display = 'block';
    }
}
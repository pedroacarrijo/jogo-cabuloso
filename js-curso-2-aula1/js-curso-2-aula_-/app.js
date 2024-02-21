let numerossorteados = [];
let numerolimite = 100;
let numerosecreto =numeroaleatorio();
let numerominimo = 1;
let numeromaximo = 100;
let tentativas = 1;
function exibirtexto(tag, texto) {
    let campo= document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
} function mensageminicial() {
    exibirtexto('h1', 'Jogo do número Secreto');
    exibirtexto('p', `Escolha um numero entre ${numerominimo} e ${numeromaximo}`);
}
 mensageminicial();

function verificarChute() {
    let chute= document.querySelector('input').value;
    if(numerosecreto==chute) {
        exibirtexto('h1', 'Acertou');
        let palavratentativa = tentativas ==1 ? ' tentativa' : 'tentativas';
        let mensagem = `você acertou com ${tentativas} ${palavratentativa}`;
        exibirtexto('p', `${mensagem}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute>numerosecreto) {
            exibirtexto('h1', 'Errou');
            exibirtexto('p',`Tente um número menor que ${chute}`);
        } else {
            exibirtexto('h1', 'Errou');
            exibirtexto('p',`Tente um número maior que ${chute}`);
        } tentativas++; 
    limparCampo() }
       
} function numeroaleatorio() {
      let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
      let quantidadeelementos = numerossorteados.length
      if (quantidadeelementos == numerolimite) {
            numerossorteados = [];
      }
      if (numerossorteados.includes(numeroEscolhido)) {
        return numeroaleatorio();
      } else {
        numerossorteados.push(numeroEscolhido);
        console.log(numerossorteados)
        return numeroEscolhido;
      } 
      
}  
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
 }  function reiniciarjogo() {
    numerosecreto = numeroaleatorio();
    limparCampo()
    tentativas = 1;
    mensageminicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
 } 

    

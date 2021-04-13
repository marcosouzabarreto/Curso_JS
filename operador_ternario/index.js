const pontuacaoUsuario = 1999;
const nivelUsuario = pontuacaoUsuario>=1000? 'usuario vip':'usuario comum';

const corUsuario = null;

const corPadrao = corUsuario||'Preto';
console.log(nivelUsuario, corPadrao);
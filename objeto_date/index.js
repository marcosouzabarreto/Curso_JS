
// const data = new Date('2019-04-1 20:20:12');
// console.log("Dia "+data.getDate());
// console.log("Mes "+data.getMonth());
// console.log("Ano "+data.getFullYear());
// console.log("Min "+data.getMinutes());
// console.log("Seg "+data.getSeconds());
// console.log("ms "+data.getMilliseconds());
// console.log("Dia da semana "+data.getDay());

// console.log(data.toString());
function zeroAEsquerda(num){
    return num>=10?num:`0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
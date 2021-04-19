function zeroAEsquerda(num){
    return num<10? `0${num}`:num
}
function dayInText(day){
    console.log(day);
    switch(day){
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terca';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sabado';
        default:
            return 0;
    }
}
function getMonthInText(month){
    switch(month){
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Marco';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
        default:
            return 0;
    }
}
function dateInText(date){
    const dia = dayInText(date.getDay());
    const data = date.getDate();
    const hora = date.getHours();
    const minutos = date.getMinutes();
    const mes = getMonthInText(date.getMonth());
    const ano = date.getFullYear();

    return `${dia}, ${data} de ${mes} de ${ano} ${zeroAEsquerda(hora)}:${zeroAEsquerda(minutos)}`
}


const dataCompleta = document.getElementById('data');
const date = new Date();
const dataEmTexto = dateInText(date);
dataCompleta.innerHTML = dateInText(date);



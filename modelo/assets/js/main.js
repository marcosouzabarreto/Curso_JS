const form = document.getElementById("formulario");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    peso = Number(inputPeso.value);
    altura = Number(inputAltura.value);
    
    if(!peso) {
        setResult("Peso invalido", false);
        return;
    } 

    if(!altura) {
        setResult("Altura invalida", false);
        return;
    }
    const imc = getImc(peso, altura);
    const imcLevel = getImcLevel(imc);
    const msg = `Seu IMC é ${imc} (${imcLevel})`
    setResult(msg, true);
});

function getImcLevel(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3'];
    if(imc>=39.9 ) return nivel[5];
    if (imc>=34.9) return nivel[4]; 
    if (imc>=29.9) return nivel[3];
    if (imc>=24.9) return nivel[2];
    if (imc>=18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura){
    const imc = peso/altura ** 2;
    return imc.toFixed(2);
}

function createParagraph(){
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid){
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = '';
    const p = createParagraph();

    if(isValid){
        p.classList.add('valid-result');
    } else {
        p.classList.add('non-valid-result');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}



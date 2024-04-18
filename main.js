const form = document.getElementById("form");


function valorValido(valor1, valor2){

    if(valor1 < valor2){
        return true
    }
    else{
        return false
    }
}
const segundoNumero = document.getElementById('segundo-numero');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `O segundo valor é maior que o primeiro`;
    const mensagemErro = `O segundo valor precisa ser maior que o primeiro`;
    const primeiroNumero = document.getElementById('primeiro-numero');
    const segundoNumero = document.getElementById('segundo-numero');

    if (valorValido(primeiroNumero.value, segundoNumero.value)){
        document.querySelector('.message').style.display ='none';
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block';
        segundoNumero.classList.remove('error')
        document.querySelector('.error-message').style.display ='none';
    


        primeiroNumero.value = ''
        segundoNumero.value = ''
    }
    else{
        document.querySelector('.message').style.display ='none';
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display ='block';
        segundoNumero.classList.add('error')
        document.querySelector('.success-message').style.display ='none';
    }
    
})




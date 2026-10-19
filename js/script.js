// lógica de login simuladaa
const btnLogin = document.getElementById('btn-login');

if (btnLogin) {
    btnLogin.addEventListener('click', function() {
        //pega os valores digitados nos campos 'login' e 'senha'
        const loginValor = document.getElementById('input-login').value;
        const senhaValor = document.getElementById('input-senha').value;

        // verifica se os campos login e senha estão em brancos
        if(loginValor.trim() !== '' && senhaValor.trim() !== '') {
            // Direciona o usuario para a página de reservas
            window.location.href = 'reservas.html';
        } else {
            alert("Os campos login e senha são obrigatórios.");
        }
    });
}
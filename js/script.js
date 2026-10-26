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



// REDIRECIONAMENTO DE NAVEGAÇÃO

// Lógica para o botão "+ Nova Reserva"
const btnNovaReserva = document.getElementById("btn-nova-reserva");

if (btnNovaReserva) {
    // ao clicar no botão '+ Nova Reserva'
    btnNovaReserva.addEventListener('click', function() {
        // Redireciona para a página 'fazer reserva'
        window.location.href = 'fazer-reserva.html';
    })
}


// Lógica para o botão "+ Novo Pet"
const btnNovoPet = document.getElementById("btn-novo-pet");;

if(btnNovoPet) {
    // ao clicar no botão '+ Novo Pet'
    btnNovoPet.addEventListener('click', function() {
        // redireciona para a pagina cadastrar pet
        window.location.href = 'cadastrar-pet.html';
    })
}


// logica para o botão '+ Novo usuario'
const btnNovoUsuario = document.getElementById('btn-novo-usuario');

if (btnNovoUsuario) {
    // ao clicar no botão 'Novo usuario'
    btnNovoUsuario.addEventListener('click', function() {
        // redireciona para a pagina 'cadastrar-usuario'
        window.location.href = 'cadastrar-usuario.html';
    })
}




// Logica do botão Limpar (global)

// Seleciona todos os botões com a classe correspondente
const botoesLimpar = document.querySelectorAll('.botao-branco-laranja');

botoesLimpar.forEach(botao => {
    // Verifica se o botão realmente é o de "Limpar"
    if (botao.textContent.trim().toLowerCase() === 'limpar') {
        
        botao.addEventListener('click', function(event) {
            event.preventDefault(); // Evita recarregar a página

            // Encontra a "area-trabalho" atual onde o botão foi clicado
            const areaTrabalho = botao.closest('.area-trabalho');
            
            if (areaTrabalho) {
                // Seleciona todos os campos
                // uso do :not(td input) para evitar que ele desmarque os checkboxes de dentro das tabelas!
                const campos = areaTrabalho.querySelectorAll('input:not(td input), select, textarea');
                
                // Percorre todos os campos encontrados e apaga o valor deles
                campos.forEach(campo => {
                    if (campo.type === 'checkbox' || campo.type === 'radio') {
                        campo.checked = false; // Desmarca se for caixa de seleção
                    } else {
                        campo.value = '';
                    }
                });
            }
        });
    }
});
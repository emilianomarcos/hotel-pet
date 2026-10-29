// lógica de login simuladaa
// const btnLogin = document.getElementById('btn-login');

// if (btnLogin) {
//     btnLogin.addEventListener('click', function() {
//         //pega os valores digitados nos campos 'login' e 'senha'
//         const loginValor = document.getElementById('input-login').value;
//         const senhaValor = document.getElementById('input-senha').value;

//         // verifica se os campos login e senha estão em brancos
//         if(loginValor.trim() !== '' && senhaValor.trim() !== '') {
//             // Direciona o usuario para a página de reservas
//             window.location.href = 'reservas.html';
//         } else {
//             alert("Os campos login e senha são obrigatórios.");
//         }
//     });
// }


// lógica de login com local storage

const btnLogin = document.getElementById('btn-login');

if (btnLogin) {
    btnLogin.addEventListener('click', function() {
        // Captura os valores digitados
        const loginValor = document.getElementById('input-login').value.trim();
        const senhaValor = document.getElementById('input-senha').value.trim();

        // simula a verificação em um banco de dados
        // defini que o login valido é 'gerente' e senha '123'
        if (loginValor === 'gerente' && senhaValor === '123') {
            
            //se usuário digitou corretamente, é gravado os dados no Local Storage
            localStorage.setItem('usuarioLogado', 'João da Silva');
            localStorage.setItem('funcaoUsuario', 'Gerente');
            
            //Redireciona para a página reservas
            window.location.href = 'reservas.html';
        } else {
            // Se errar, exibe um alerta e não deixa passar
            alert('Login ou senha incorretos! Dica: use "gerente" e "123".');
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

                // reseta a tabela para exibir todas as linhas
                const linhasTabela = areaTrabalho.querySelectorAll('.tabela-dados tbody tr');
                linhasTabela.forEach(linha => {
                    linha.style.display = ''; 
                })
            }
        });
    }
});



// Lógica de busca - página de pets

const btnPesquisarPets = document.getElementById('btn-pesquisar-pets');

if (btnPesquisarPets) {
    btnPesquisarPets.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores digitados e converte para minúsculas
        const idFiltro = document.getElementById('filtro-id-pet').value.trim().toLowerCase();
        const racaFiltro = document.getElementById('filtro-raca-pet').value.trim().toLowerCase();
        const nomeFiltro = document.getElementById('filtro-nome-pet').value.trim().toLowerCase();
        const tamanhoFiltro = document.getElementById('filtro-tamanho-pet').value.trim().toLowerCase();

        // Seleciona todas as linhas do corpo da tabela de pets
        const linhas = document.querySelectorAll('.tabela-dados tbody tr');

        // Analisa cada linha individualmente
        linhas.forEach(linha => {
            // Seleciona todas as colunas (td) da linha atual
            const colunas = linha.querySelectorAll('td');

            // Acessa o texto de cada coluna com base na posição (Index)
            const idLinha = colunas[1].textContent.trim().toLowerCase();
            const nomeLinha = colunas[2].textContent.trim().toLowerCase();
            const racaLinha = colunas[4].textContent.trim().toLowerCase();
            const tamanhoLinha = colunas[5].textContent.trim().toLowerCase();

            // Verifica se o conteúdo da tabela inclui o que foi digitado
            const id = idLinha.includes(idFiltro);
            const raca = racaLinha.includes(racaFiltro);
            const nome = nomeLinha.includes(nomeFiltro);
            const tamanho = tamanhoLinha.includes(tamanhoFiltro);

            // Se a linha corresponder a todos os filtros ativos, ela é exibida. Senão, é ocultada.
            if (id && raca && nome && tamanho) {
                linha.style.display = ''; // Mostra a linha
            } else {
                linha.style.display = 'none'; // Oculta a linha
            }
        });
    });
}





// Lógica de Busca - tela de reservas

const btnPesquisarReservas = document.getElementById('btn-pesquisar-reservas');

if (btnPesquisarReservas) {
    btnPesquisarReservas.addEventListener('click', function(event) {
        event.preventDefault();

        // Captura valores dos filtros de texto
        const idFiltro = document.getElementById('filtro-id-reserva').value.trim().toLowerCase();
        const proprietarioFiltro = document.getElementById('filtro-proprietario').value.trim().toLowerCase();
        const petFiltro = document.getElementById('filtro-pet-reserva').value.trim().toLowerCase();
        const totalFiltro = document.getElementById('filtro-total').value.trim().toLowerCase();
        
        // pegamos o status da opção selecionada
        const statusSelect = document.getElementById('filtro-status');
        const statusFiltro = statusSelect.options[statusSelect.selectedIndex].text.toLowerCase();

        // Captura os valores das datas
        const dataInicioFiltro = document.getElementById('filtro-data-inicio').value;
        const dataFimFiltro = document.getElementById('filtro-data-fim').value;

        //Seleciona todas as linhas da tabela de reservas
        const linhas = document.querySelectorAll('.tabela-dados tbody tr');

        linhas.forEach(linha => {
            const colunas = linha.querySelectorAll('td');
            
            const idLinha = colunas[1].textContent.trim().toLowerCase();
            const proprietarioLinha = colunas[2].textContent.trim().toLowerCase();
            const petLinha = colunas[3].textContent.trim().toLowerCase();
            const chegadaTexto = colunas[4].textContent.trim(); 
            const partidaTexto = colunas[5].textContent.trim(); 
            const statusLinha = colunas[6].textContent.trim().toLowerCase();
            const totalLinha = colunas[7].textContent.trim().toLowerCase();

        
            const formatarData = (dataBR) => {
                if (!dataBR) return '';
                const partes = dataBR.split('/');
                return partes.length === 3 ? `${partes[2]}-${partes[1]}-${partes[0]}` : dataBR;
            };

            const dataChegada = formatarData(chegadaTexto);
            const dataPartida = formatarData(partidaTexto);

           
            const id = idLinha.includes(idFiltro);
            const proprietario = proprietarioLinha.includes(proprietarioFiltro);
            const pet = petLinha.includes(petFiltro);
            const total = totalLinha.includes(totalFiltro);
            const status = statusFiltro === '' || statusLinha === statusFiltro;
            
           
            let data = true;
            if (dataInicioFiltro && dataChegada < dataInicioFiltro) {
                data = false; // Se a chegada for antes do início do filtro, esconde
            }
            if (dataFimFiltro && dataPartida > dataFimFiltro) {
                data = false; // Se a partida for depois do fim do filtro, esconde
            }

            
            if (id && proprietario && pet && total && status && data) {
                linha.style.display = '';
            } else {
                linha.style.display = 'none';
            }
        });
    });
}







// Lógica de Busca - tela de usuarios

const btnPesquisarUsuario = document.getElementById('btn-pesquisar-usuario');

if (btnPesquisarUsuario) {
    btnPesquisarUsuario.addEventListener('click', function(event) {
        event.preventDefault(); // previne que a pagina seja recarregada.

        // captura os valores dos campos
        const idUsuario = document.getElementById('filtro-id-usuario').value.trim().toLowerCase();
        const emailUsuario = document.getElementById('filtro-email-usuario').value.trim().toLowerCase();
        const nomeUsuario = document.getElementById('filtro-nome-usuario').value.trim().toLowerCase();
        
        const statusSelectUsuario = document.getElementById('filtro-status-usuario');
        const statusUsuario = statusSelectUsuario.options[statusSelectUsuario.selectedIndex].text.toLowerCase();
        
        const funcaoSelectUsuario = document.getElementById('filtro-funcao-usuario');
        const funcaoUsuario = funcaoSelectUsuario.options[funcaoSelectUsuario.selectedIndex].text.toLowerCase();
        
        const dataUsuario = document.getElementById('filtro-data-criacao').value;
        
        // seleciona todas as linhas da tabela de usuarios
        const linhas = document.querySelectorAll('.tabela-dados tbody tr');

        linhas.forEach(linha => {
            const colunas = linha.querySelectorAll('td');

            const idLinhaUsuario = colunas[2].textContent.trim().toLowerCase();
            const emailLinhaUsuario = colunas[3].textContent.trim().toLowerCase();
            const nomeLinhaUsuario = colunas[4].textContent.trim().toLowerCase();
            const funcaoLinhaUsuario = colunas[5].textContent.trim().toLowerCase();
            const statusLinhaUsuario = colunas[6].textContent.trim().toLowerCase();
            const dataFormUsuario = colunas[7].textContent.trim();

            // formata a data
            const formatarData = (dataBR) => {
                if(!dataBR) return '';
                const partes = dataBR.split('/');
                return partes.length === 3 ? `${partes[2]}-${partes[1]}-${partes[0]}` : dataBR;
            }
            const dataLinhaUsuario = formatarData(dataFormUsuario);

            const id = idLinhaUsuario.includes(idUsuario);
            const email = emailLinhaUsuario.includes(emailUsuario);
            const nome = nomeLinhaUsuario.includes(nomeUsuario);
            const funcao = funcaoUsuario === '' || funcaoLinhaUsuario === funcaoUsuario;
            const status = statusUsuario === '' || statusLinhaUsuario === statusUsuario;
            const data = dataUsuario === '' || dataLinhaUsuario === dataUsuario;

            if (id && email && nome && funcao && status && data) {
                linha.style.display = '';
            } else {
                linha.style.display = 'none';
            }
        });
       
    });
}
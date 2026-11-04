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





// LÓGICA PARA SALVAR VALOR DA DIÁRIA E VAGAS NO LOCALSTORAGE

const btnSalvarConfig = document.getElementById('btn-salvar-config');
const inputDiaria = document.getElementById('input-diaria');
const inputVagas = document.getElementById('input-vagas');

//carrega os dados quando a página for aberta
// se os inputs existirem na tela
if (inputDiaria && inputVagas) {
    // Busca os valores no Local Storage
    const diariaSalva = localStorage.getItem('configValorDiaria');
    const vagasSalvas = localStorage.getItem('configVagasDisponiveis');

    // se já existir valor salvo, os inputs são preechidos
    if (diariaSalva) {
        inputDiaria.value = diariaSalva;
    }
    if (vagasSalvas) {
        inputVagas.value = vagasSalvas;
    }
}

// salva os dados ao clicar no botão slavar
if (btnSalvarConfig) {
    btnSalvarConfig.addEventListener('click', function(event) {
        event.preventDefault();

        // captura os valores digitados
        const valorDiaria = inputDiaria.value.trim();
        const vagasDisponiveis = inputVagas.value.trim();

        // valida para não salvar vazio
        if (valorDiaria === '' || vagasDisponiveis === '') {
            alert('Preencha os campos antes de salvar');
            return; // interrompe a execução
        }

        // salva no local storage
        localStorage.setItem('configValorDiaria', valorDiaria);
        localStorage.setItem('configVagasDisponiveis', vagasDisponiveis);

        alert('Configurações salvas com sucesso!');
    })
}




// CADASTRAR NOVO PET LOCAL STORAGE

const btnSalvarPet = document.getElementById('btn-salvar-pet');

if (btnSalvarPet) {
    btnSalvarPet.addEventListener('click', function(event) {
        event.preventDefault();

        // captura os valores dos inputs
        const dono = document.getElementById('input-dono-pet').value.trim();
        const nome = document.getElementById('input-nome-pet').value.trim();
        const raca = document.getElementById('input-raca-pet').value.trim();

        const selectTipo = document.getElementById('input-tipo-pet');
        const tipo = selectTipo.options[selectTipo.selectedIndex].text;

        const selectTamanho = document.getElementById('input-tamanho-pet');
        const tamanho = selectTamanho.options[selectTamanho.selectedIndex].text;

        // inpede salvar se algum campo estiver vazio
        if (!dono || !nome || !raca || selectTipo.value === "" || selectTamanho.value === "") {
            alert('Por favor, preencha todos os campos do pet.');
            return; // Para a execução 
        }

        // gera id aleatorio de 10 digitos
        const idGerado = Math.floor(Math.random() * 9000000000) + 1000000000;

        // cria o objeto do novo pet
        const novoPet = {
            id: idGerado.toString(),
            proprietario: dono,
            nome: nome,
            tipo: tipo,
            raca: raca,
            tamanho: tamanho
        };

        // puxa a lista existente ou cria uma nova vazia
        let listaPets = JSON.parse(localStorage.getItem('tabelaPets')) || [];

        // adiciona o novo pet e salva
        listaPets.push(novoPet);
        localStorage.setItem('tabelaPets', JSON.stringify(listaPets));

        alert('Pet cadastrado com sucesso!');

        // direciona para a pagina pets
        window.location.href = 'pets.html';
    })
}






// RENDERIZA TABELA DE PETS LOCAL STORAGE (PAGINA PETS)


function carregarTabelaPets() {
    const tbodyPets = document.getElementById('tabela-pets-body');
    
    
    if (!tbodyPets) return;

    //Tenta buscar a lista do localStorage
    let listaPets = JSON.parse(localStorage.getItem('tabelaPets'));

    // Se lista não existe, criamos os dados originais
    if (!listaPets) {
        listaPets = [
            { id: "1234998450", proprietario: "José da Silva", nome: "Max", tipo: "Cachorro", raca: "Pastor Alemão", tamanho: "Grande" },
            { id: "1351518110", proprietario: "Maria da Silva", nome: "Ginger", tipo: "Gato", raca: "Não Definida", tamanho: "Pequeno" }
        ];
        
        localStorage.setItem('tabelaPets', JSON.stringify(listaPets));
    }

    //Limpa o HTML fixo que estava escrito no arquivo
    tbodyPets.innerHTML = '';

    // Percorre a lista do localStorage e cria cada linha dinamicamente
    listaPets.forEach(pet => {
        const linha = document.createElement('tr');
        
        linha.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${pet.id}</td>
            <td>${pet.nome}</td>
            <td>${pet.tipo}</td>
            <td>${pet.raca}</td>
            <td>${pet.tamanho}</td>
            <td>
                <a href="editar-pet.html" onclick="prepararEdicaoPet('${pet.id}')">Editar</a>
                <a href="visualizar-pet.html" onclick="prepararVisualizacaoPet('${pet.id}')">Visualizar</a>
                <a href="#" onclick="removerPet('${pet.id}')" style="color: red; margin-left: 10px;">Remover</a>
            </td>
        `;
        
        // Adiciona a linha criada dentro do tbody
        tbodyPets.appendChild(linha);
    });
}

carregarTabelaPets();





//VISUALIZAR PET

function prepararVisualizacaoPet(id) {
    localStorage.setItem('idPetEmVisualizacao', id);
}

function carregarDadosVisualizacaoPet() {
    const campoNomeVisualizar = document.getElementById('vis-nome-pet');

    if (!campoNomeVisualizar) return;

    const idPet = localStorage.getItem('idPetEmVisualizacao');
    const listaPets = JSON.parse(localStorage.getItem('tabelaPets')) || [];
    const petEncontrado = listaPets.find(pet => pet.id === idPet);

    if (petEncontrado) {
        document.getElementById('vis-dono-pet').textContent = petEncontrado.proprietario;
        document.getElementById('vis-id-pet').textContent = petEncontrado.id;
        campoNomeVisualizar.textContent = petEncontrado.nome;
        document.getElementById('vis-tipo-pet').textContent = petEncontrado.tipo;
        document.getElementById('vis-raca-pet').textContent = petEncontrado.raca;   
    } else {
        alert('Os dados desse pet não foram encontrados');
    }
}

carregarDadosVisualizacaoPet();





// EDITAR PET

//guarda o id do pet ao clicar em editar
function prepararEdicaoPet(id) {
    localStorage.setItem('idPetEmEdicao', id);
}

//carrega os dados nos inputs na pagina de edição de pet
function carregarDadosEdicaoPet() {
    const campoNomeEditar = document.getElementById('editar-nome-pet');

    if(!campoNomeEditar) return; // se não encontrar o campo para o script

    const idPet = localStorage.getItem('idPetEmEdicao');
    const listaPets = JSON.parse(localStorage.getItem('tabelaPets')) || [];
    const petEncontrado = listaPets.find(pet => pet.id === idPet);

    if (petEncontrado) {
        document.getElementById('editar-dono-pet').value = petEncontrado.proprietario;
        campoNomeEditar.value = petEncontrado.nome;
        document.getElementById('editar-raca-pet').value = petEncontrado.raca;

        // marcar a opção correta no select tipo
        const selectTipo = document.getElementById('editar-tipo-pet');
        if (selectTipo) {
            for (let i = 0; i < selectTipo.options.length; i++) {
                if (selectTipo.options[i].text === petEncontrado.tipo) {
                    selectTipo.selectedIndex = i;
                    break
                }
            }
        }

        // marcar a opção correta no slect tamannho
        const selectTamanho = document.getElementById('editar-tamanho-pet');
        if(selectTamanho) {
            for (let i = 0; i < selectTamanho.options.length; i++) {
                if (selectTamanho.options[i].text === petEncontrado.tamanho) {
                    selectTamanho.selectedIndex = i;
                    break;
                }
            }
        }
    } else {
        alert('pet não encontrado')
    }
}

carregarDadosEdicaoPet();

// salva as alterações feitas no formulario
const btnSalvarEdicaoPet = document.getElementById('btn-salvar-edicao-pet');

if (btnSalvarEdicaoPet) {
    btnSalvarEdicaoPet.addEventListener('click', function(event) {
        event.preventDefault();

        const idPet = localStorage.getItem('idPetEmEdicao');
        let listaPets = JSON.parse(localStorage.getItem('tabelaPets')) || [];
        const index = listaPets.findIndex(pet => pet.id === idPet);

        if (index !== -1) {
            listaPets[index].proprietario = document.getElementById('editar-dono-pet').value.trim();
            listaPets[index].nome = document.getElementById('editar-nome-pet').value.trim();
            listaPets[index].raca = document.getElementById('editar-raca-pet').value.trim();
            const selectTipo = document.getElementById('editar-tipo-pet');
            listaPets[index].tipo = selectTipo.options[selectTipo.selectedIndex].text;
            const selectTamanho = document.getElementById('editar-tamanho-pet');
            listaPets[index].tamanho = selectTamanho.options[selectTamanho.selectedIndex].text;

            //salva de volta no local stoage
            localStorage.setItem('tabelaPets', JSON.stringify(listaPets));

            alert('pet atualizado com sucesso');
            window.location.href = 'pets.html';

        }
    })
}


// logica do botão voltar (pagina de edição de pet)
const btnVoltarEdicaoPet = document.getElementById('btn-voltar-edicao-pet');

if (btnVoltarEdicaoPet){
    btnVoltarEdicaoPet.addEventListener('click', function() {
        window.location.href = 'pets.html';

    });
}





// FAZER NOVA RESERVA

//injetar os pets cadastrados no select
function carregarPetsNoSelect() {
    const selectPet = document.getElementById('reserva-pet');

    if(!selectPet) return; 

    const listaPets = JSON.parse(localStorage.getItem('tabelaPets')) || [];

    // limpa o select e deixa só a opção padrão
    selectPet.innerHTML = '<option value="">Selecione um pet...</option>';

    listaPets.forEach(pet => {
        const option = document.createElement('option');
        option.value = pet.nome;

        option.textContent = `${pet.nome} (${pet.tipo} - ${pet.raca})`;


        selectPet.appendChild(option);
    });
}

carregarPetsNoSelect();


// calcula o total das diárias
function ativarCalculoDiarias() {
    const inputChegada = document.getElementById('reserva-chegada');
    const inputPartida = document.getElementById('reserva-partida');
    const spanTotal = document.getElementById('reserva-total-texto');

    if (!inputChegada || !inputPartida || !spanTotal) return;

    function calcular() {
        if (inputChegada.value && inputPartida.value) {
            const data1 = new Date(inputChegada.value);
            const data2 = new Date(inputPartida.value);

            // diferença de dias
            const diferencaTempo = data2.getTime() - data1.getTime();
            let diferencaDias = Math.ceil(diferencaTempo / (1000 * 3600 * 24));

            if (diferencaDias < 0) {
                spanTotal.textContent = 'Data invalida';
                return;
            }

            if (diferencaDias === 0) diferencaDias = 1;

            //busca valor na pagina configuracoes
            const valorDiaria = parseFloat(localStorage.getItem('configValorDiaria')) || 40.00;
            const total = diferencaDias * valorDiaria;

            spanTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        } else {
            spanTotal.textContent = "R$ 0,00";
        }
    }

    inputChegada.addEventListener('change', calcular);
    inputPartida.addEventListener('change', calcular);
}
ativarCalculoDiarias();


// SALVAR NOVA RESERVA (LOCAL STORAGE)

const btnSalvarReserva = document.getElementById('btn-salvar-reserva');

if (btnSalvarReserva) {
    btnSalvarReserva.addEventListener('click', function(event) {
        event.preventDefault();

        // captura os elementos
        const selectPet = document.getElementById('reserva-pet');
        const dataChegada = document.getElementById('reserva-chegada').value;
        const dataPartida = document.getElementById('reserva-partida').value;
        const notas = document.getElementById('reserva-notas').value.trim();
        const spanTotal = document.getElementById('reserva-total-texto').textContent;

        // impede salvar caso falte o pet ou as datas
        if (selectPet.value === "" || !dataChegada || !dataPartida) {
            alert('Slecione o pet e preencha as datas');
            return;
        }

        // captura o pet
        const nomePet = selectPet.value; 
        const petsCadastrados = JSON.parse(localStorage.getItem('tabelaPets')) || [];
        const petEncontrado = petsCadastrados.find(pet => pet.nome === nomePet);
        const nomeDono = (petEncontrado && petEncontrado.proprietario) ? petEncontrado.proprietario : "Não informado";

        // formata data
        const formatarParaBR = (dataUS) => {
            const partes = dataUS.split('-');
            return `${partes[2]}/${partes[1]}/${partes[0]}`;
        };

        //cria objeto da nova reserva
        const novaReserva = {
            id: (Math.floor(Math.random() * 9000000000) + 1000000000).toString(),
            proprietario: nomeDono,
            pet: nomePet,
            chegada: formatarParaBR(dataChegada),
            partida: formatarParaBR(dataPartida),
            status: 'Reservado',
            total: spanTotal,
            notas: notas
        };

        //salva no local storage
        let listaReservas = JSON.parse(localStorage.getItem('tabelaReservas')) || [];
        listaReservas.push(novaReserva);
        localStorage.setItem('tabelaReservas', JSON.stringify(listaReservas));

        alert('Reserva efetuada com sucesso!');

        // redireciona para reservas.html
        window.location.href = 'reservas.html';
    });
}



// RENDERIZAR TABELA DE RESERVAS (LOCAL STORAGE)


function carregarTabelaReservas() {
    const tbodyReservas = document.getElementById('tabela-reservas-body');
    
    // Se não estiver na página de reservas para o script
    if (!tbodyReservas) return;

    let listaReservas = JSON.parse(localStorage.getItem('tabelaReservas'));

    // caso a lista não exita cria os dados padrão originais do seu projeto
    if (!listaReservas || listaReservas.length === 0) {
        listaReservas = [
            { id: "1234998450", proprietario: "José da Silva", pet: "Max", chegada: "02/05/2021", partida: "07/05/2021", status: "Reservado", total: "R$ 40,00", notas: "" },
            { id: "5235158364", proprietario: "Pedro Paulo", pet: "Luna", chegada: "10/05/2021", partida: "15/05/2021", status: "Em progresso", total: "R$ 40,00", notas: "" },
            { id: "4977554725", proprietario: "Fábio Santos", pet: "Rex", chegada: "17/05/2021", partida: "22/05/2021", status: "Finalizado", total: "R$ 40,00", notas: "" }
        ];
        localStorage.setItem('tabelaReservas', JSON.stringify(listaReservas));
    }

    
    tbodyReservas.innerHTML = '';

    // Desenha as linhas dinamicamente
    listaReservas.forEach(reserva => {
        const linha = document.createElement('tr');
        
        // Define a classe CSS do status 
        let classeStatus = '';
        if (reserva.status.toLowerCase() === 'reservado') classeStatus = 'status-reservado';
        else if (reserva.status.toLowerCase() === 'em progresso') classeStatus = 'status-progresso';
        else if (reserva.status.toLowerCase() === 'finalizado') classeStatus = 'status-finalizado';

        linha.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${reserva.id}</td>
            <td>${reserva.proprietario}</td>
            <td>${reserva.pet}</td>
            <td>${reserva.chegada}</td>
            <td>${reserva.partida}</td>
            <td><span class="${classeStatus}">${reserva.status}</span></td>
            <td>${reserva.total}</td>
            <td>
                <a href="editar-reserva.html" onclick="prepararEdicaoReserva('${reserva.id}')">Editar</a>
                <a href="ver-reserva.html" onclick="prepararVisualizacaoReserva('${reserva.id}')">Visualizar</a>
                <a href="#" onclick="removerReserva('${reserva.id}')">Remover</a>
            </td>
        `;
        
        tbodyReservas.appendChild(linha);
    });
}
carregarTabelaReservas();




// VISUALIZAR RESERVA (LOCAL STORAGE)

// armazena o id da reserva ao clicar em visualizar
function prepararVisualizacaoReserva(id) {
    localStorage.setItem('idReservaEmVisualizacao', id);
}

// carrega os dados 
function carregarDadosVisualizacaoReserva() {
    const campoIdVisualizar = document.getElementById('vis-id-reserva');

    if (!campoIdVisualizar) return;

    // puxa o ID salvo e a lista de reservas do local storage
    const idReserva = localStorage.getItem('idReservaEmVisualizacao');
    const listaReservas = JSON.parse(localStorage.getItem('tabelaReservas')) || [];

    // procura a reserva específica na lista
    const reservaEncontrada = listaReservas.find(reserva => reserva.id === idReserva);

    if (reservaEncontrada) {
        // preenche os textos na tela
        campoIdVisualizar.textContent = reservaEncontrada.id;

        const campoDono = document.getElementById('vis-dono-reserva');
        if (campoDono) {
            campoDono.textContent = reservaEncontrada.proprietario;
        }

        const campoPet = document.getElementById('vis-pet-reserva');
        if (campoPet) {
            campoPet.textContent = reservaEncontrada.pet;
        }

        const campoChegada = document.getElementById('vis-chegada-reserva');
        if (campoChegada) {
            campoChegada.textContent = reservaEncontrada.chegada;
        }
        
        const campoPartida = document.getElementById('vis-partida-reserva');
        if (campoPartida) {
            campoPartida.textContent = reservaEncontrada.partida;   
        }
        
        const campoStatus = document.getElementById('vis-status-reserva');
        if (campoStatus) {
            campoStatus.textContent = reservaEncontrada.status;
        }
        
        const campoTotal = document.getElementById('vis-total-reserva');
        if (campoTotal) {
            campoTotal.textContent = reservaEncontrada.total;
        }

        const campoNotas = document.getElementById('vis-notas-reserva');
        //caso não tenha nota, mostra texto padrão
        if (campoNotas) {
            campoNotas.textContent = reservaEncontrada.notas || "Nenhuma nota adicionada.";
        }
    } else {
        alert('Os dados dessa reserva não foram encontrados.');
    }
}

carregarDadosVisualizacaoReserva();






// EDITAR RESERVA - LOCAL STORAGE

//armazena o id da reserva quando clica em 'Editar'
function prepararEdicaoReserva(id) {
    localStorage.setItem('idReservaEmEdicao', id);
}

//mostra ou esconde os campos extras dependendo do status
function atualizarLayoutPorStatus() {
    const selectStatus = document.getElementById('editar-reserva-status');
    const blocoAndamento = document.getElementById('bloco-andamento');
    const blocoFinalizada = document.getElementById('bloco-finalizada');

    // caso alguns dos elementos não tenham na tela, para aqui.
    if (!selectStatus || !blocoAndamento || !blocoFinalizada) return;

    // começa escondendo os dois blocos para ficar mais limpo
    blocoAndamento.style.display = 'none';
    blocoFinalizada.style.display = 'none';

    // lê a opção selecionada e mostra apenas o bloco correto
    if (selectStatus.value === 'Em progresso') {
        blocoAndamento.style.display = 'block';
    } else if (selectStatus.value === 'Finalizado') {
        blocoFinalizada.style.display = 'block';
    }
}

//Preenche a tela de edição com os dados que já estavam salvos
function carregarDadosEdicaoReserva() {
    const campoChegada = document.getElementById('editar-reserva-chegada');

    if (!campoChegada) return;

    // pega o id salvo e busca a lista completa no local storage
    const idReserva = localStorage.getItem('idReservaEmEdicao');
    const listaReservas = JSON.parse(localStorage.getItem('tabelaReservas')) || [];

    // procura a reserva exata na lista
    const reservaEncontrada = listaReservas.find(reserva => reserva.id === idReserva);

    if (reservaEncontrada) {
        // Preenche os campos de Proprietário e Pet 
        document.getElementById('editar-reserva-dono').value = reservaEncontrada.proprietario;
        document.getElementById('editar-reserva-pet').value = reservaEncontrada.pet;

        // função para converter a data 
        const formatarParaInputDate = (dataBR) => {
            if (!dataBR) return '';
            const partes = dataBR.split('/');
            return partes.length === 3 ? `${partes[2]}-${partes[1]}-${partes[0]}` : dataBR;
        };

        // preenche data, anotações e valor
        campoChegada.value = formatarParaInputDate(reservaEncontrada.chegada);
        document.getElementById('editar-reserva-partida').value = formatarParaInputDate(reservaEncontrada.partida);
        document.getElementById('editar-reserva-notas').value = reservaEncontrada.notas || '';
        document.getElementById('editar-reserva-total-texto').textContent = reservaEncontrada.total;

        // Puxa as anotações feitas pelo funcionário
        const campoAnotacoesFunc = document.getElementById('editar-reserva-anotacoes-func');
        if (campoAnotacoesFunc) {
            campoAnotacoesFunc.value = reservaEncontrada.anotacoesFuncionario || '';
        }
        const selectStatus = document.getElementById('editar-reserva-status');
        selectStatus.value = reservaEncontrada.status;
        atualizarLayoutPorStatus(); 

        selectStatus.addEventListener('change', atualizarLayoutPorStatus);
    }
}

carregarDadosEdicaoReserva();

// recalcula o valor total caso o usuario mude as datas
function ativarCalculoDiariasEdicao() {
    const inputChegada = document.getElementById('editar-reserva-chegada');
    const inputPartida = document.getElementById('editar-reserva-partida');
    const spanTotal = document.getElementById('editar-reserva-total-texto');

    // Só continua se os campos existirem na página atual
    if (!inputChegada || !inputPartida || !spanTotal) return;

    function calcularEdicao() {
        // Confere se as duas datas foram preenchidas
        if (inputChegada.value && inputPartida.value) {
            const data1 = new Date(inputChegada.value);
            const data2 = new Date(inputPartida.value);
            
            // converte a diferença para dias
            const diferencaTempo = data2.getTime() - data1.getTime();
            let diferencaDias = Math.ceil(diferencaTempo / (1000 * 3600 * 24));

            // para caso a data partida for menor que a data chegada
            if (diferencaDias < 0) { 
                spanTotal.textContent = 'Data inválida'; 
                return; 
            }
            
            // Cobra no mínimo 1 diária 
            if (diferencaDias === 0) diferencaDias = 1;

            // Pega o valor base das Configurações ou 40,00 caso não tenha
            const valorDiaria = parseFloat(localStorage.getItem('configValorDiaria')) || 40.00;
            const total = diferencaDias * valorDiaria;
            
            // Exibe o valor formatado com vírgula
            spanTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }
    }
    
    // executa função "calcularEdicao" toda vez que o calendário é modificado
    inputChegada.addEventListener('change', calcularEdicao);
    inputPartida.addEventListener('change', calcularEdicao);
}
ativarCalculoDiariasEdicao();


// Salva
const btnSalvarEdicaoReserva = document.getElementById('btn-salvar-edicao-reserva');
if (btnSalvarEdicaoReserva) {
    btnSalvarEdicaoReserva.addEventListener('click', function(event) {
        event.preventDefault(); // Impede a página de recarregar ao clicar

        // Descobre qual reserva estamos mexendo e baixa a lista completa
        const idReserva = localStorage.getItem('idReservaEmEdicao');
        let listaReservas = JSON.parse(localStorage.getItem('tabelaReservas')) || [];
        
        // Acha a posição da reserva específica dentro do array
        const index = listaReservas.findIndex(reserva => reserva.id === idReserva);

        if (index !== -1) {
            
            const formatarParaBR = (dataUS) => {
                const partes = dataUS.split('-');
                return `${partes[2]}/${partes[1]}/${partes[0]}`;
            };

            // Substitui os dados velhos pelos dados novos
            listaReservas[index].chegada = formatarParaBR(document.getElementById('editar-reserva-chegada').value);
            listaReservas[index].partida = formatarParaBR(document.getElementById('editar-reserva-partida').value);
            listaReservas[index].status = document.getElementById('editar-reserva-status').value;
            listaReservas[index].notas = document.getElementById('editar-reserva-notas').value.trim();
            listaReservas[index].total = document.getElementById('editar-reserva-total-texto').textContent;
            
            // salva as anotações caso o usuario tenha preenchido
            const campoAnotacoesFunc = document.getElementById('editar-reserva-anotacoes-func');
            if (campoAnotacoesFunc) {
                listaReservas[index].anotacoesFuncionario = campoAnotacoesFunc.value.trim();
            }

            // Grava a lista atualizada no local Storage
            localStorage.setItem('tabelaReservas', JSON.stringify(listaReservas));
            alert('Reserva atualizada com sucesso!');
            
            // redireciona para a pagina reservas
            window.location.href = 'reservas.html'; 
        }
    });
}


// LOGICA DO BOTÃO VOLTAR - PAGINA EDITAR RESERVA

const btnVoltarEdicaoReserva = document.getElementById('btn-voltar-edicao-reserva');

if (btnVoltarEdicaoReserva) {
    btnVoltarEdicaoReserva.addEventListener('click', function() {
        window.location.href = 'reservas.html';
    });
}





// CADASTRAR NOVO USUÁRIO (LOCAL STORAGE)

const btnSalvarNovoUsuario = document.getElementById('btn-salvar-novo-usuario');

if (btnSalvarNovoUsuario) {
    btnSalvarNovoUsuario.addEventListener('click', function(event) {
        event.preventDefault();

        const email = document.getElementById('cadastro-usuario-email').value.trim();
        const nome = document.getElementById('cadastro-usuario-nome').value.trim();
        const sobrenome = document.getElementById('cadastro-usuario-sobrenome').value.trim();
        const telefone = document.getElementById('cadastro-usuario-telefone').value.trim();
        const funcao = document.getElementById('cadastro-usuario-funcao').value;

        if (!email || !nome) {
            alert('Por favor, preencha pelo menos o Nome e o E-mail.');
            return;
        }

        // Função para obter a data atual no formato DD/MM/AAAA
        const dataAtual = new Date();
        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const ano = dataAtual.getFullYear();
        const dataCriacao = `${dia}/${mes}/${ano}`;

        const novoUsuario = {
            id: (Math.floor(Math.random() * 90000) + 10000).toString(),
            email: email,
            nome: `${nome} ${sobrenome}`.trim(),
            telefone: telefone,
            funcao: funcao,
            status: 'Ativo',
            criadoEm: dataCriacao,
            foto: 'imagens/Avatar.png' // Imagem padrão temporária
        };

        let listaUsuarios = JSON.parse(localStorage.getItem('tabelaUsuarios')) || [];
        listaUsuarios.push(novoUsuario);
        localStorage.setItem('tabelaUsuarios', JSON.stringify(listaUsuarios));

        alert('Usuário cadastrado com sucesso!');
        window.location.href = 'usuarios.html';
    });
}


// RENDERIZAR TABELA DE USUÁRIOS

function carregarTabelaUsuarios() {
    const tbodyUsuarios = document.getElementById('tabela-usuarios-body');
    
    if (!tbodyUsuarios) return;

    let listaUsuarios = JSON.parse(localStorage.getItem('tabelaUsuarios'));

    // Cria os dados padrão se a lista estiver vazia (os 3 que estavam no seu HTML)
    if (!listaUsuarios || listaUsuarios.length === 0) {
        listaUsuarios = [
            { id: "12345", email: "joaodasilva@gmail.com", nome: "João da Silva", telefone: "Não informado", funcao: "Gerente", status: "Ativo", criadoEm: "19/02/2020", foto: "imagens/Avatar.png" },
            { id: "45678", email: "maria@pet.com", nome: "Maria da Silva", telefone: "Não informado", funcao: "Funcionário", status: "Inativo", criadoEm: "19/02/2020", foto: "imagens/Avatar.png" },
            { id: "78910", email: "josedasilva@pet.com", nome: "José da Silva", telefone: "Não informado", funcao: "Cliente", status: "Ativo", criadoEm: "19/02/2020", foto: "imagens/Avatar.png" }
        ];
        localStorage.setItem('tabelaUsuarios', JSON.stringify(listaUsuarios));
    }

    tbodyUsuarios.innerHTML = '';

    listaUsuarios.forEach(usuario => {
        const linha = document.createElement('tr');
        
        let classeStatus = usuario.status === 'Ativo' ? 'status-ativo' : 'status-inativo';

        linha.innerHTML = `
            <td><input type="checkbox"></td>
            <td><img src="${usuario.foto}" alt="" height="30px" style="border-radius:50%"></td>
            <td>${usuario.id}</td>
            <td>${usuario.email}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.funcao}</td>
            <td><span class="${classeStatus}">${usuario.status}</span></td>
            <td>${usuario.criadoEm}</td>
            <td>
                <a href="editar-perfil.html" onclick="prepararEdicaoUsuario('${usuario.id}')">Editar</a>
                <a href="visualizar-usuario.html" onclick="prepararVisualizacaoUsuario('${usuario.id}')">Visualizar</a>
                <a href="#" onclick="removerUsuario('${usuario.id}')">Remover</a>
            </td>
        `;
        tbodyUsuarios.appendChild(linha);
    });
}
carregarTabelaUsuarios();


function prepararEdicaoUsuario(id) {
    localStorage.setItem('idUsuarioEmEdicao', id);
}






// EDITAR USUÁRIO - LOCAL STORAGE


// Carrega os dados na tela editar-perfil
function carregarDadosEdicaoUsuario() {
    const campoNome = document.getElementById('edicao-usuario-nome');
    
    // Se não encontrou o campo, para o script (não está na tela de editar perfil)
    if (!campoNome) return; 

    const idUsuario = localStorage.getItem('idUsuarioEmEdicao');
    const listaUsuarios = JSON.parse(localStorage.getItem('tabelaUsuarios')) || [];
    const usuarioEncontrado = listaUsuarios.find(u => u.id === idUsuario);

    if (usuarioEncontrado) {
        document.getElementById('edicao-usuario-email').value = usuarioEncontrado.email;
        document.getElementById('edicao-usuario-telefone').value = usuarioEncontrado.telefone || '';
        document.getElementById('edicao-usuario-funcao').value = usuarioEncontrado.funcao;
        
        // separa nome e sobrenome
        const partesNome = usuarioEncontrado.nome.split(' ');
        campoNome.value = partesNome[0]; 
        
        
        const campoSobrenome = document.getElementById('edicao-usuario-sobrenome');
        if (campoSobrenome) {
            campoSobrenome.value = partesNome.slice(1).join(' '); 
        }
    }
}
carregarDadosEdicaoUsuario();

// Salva as alterações
const btnSalvarEdicaoUsuario = document.getElementById('btn-salvar-edicao-usuario');

if (btnSalvarEdicaoUsuario) {
    btnSalvarEdicaoUsuario.addEventListener('click', function(event) {
        event.preventDefault();

        const idUsuario = localStorage.getItem('idUsuarioEmEdicao');
        let listaUsuarios = JSON.parse(localStorage.getItem('tabelaUsuarios')) || [];
        const index = listaUsuarios.findIndex(u => u.id === idUsuario);

        if (index !== -1) {
            // Captura os dados atualizados
            const email = document.getElementById('edicao-usuario-email').value.trim();
            const nome = document.getElementById('edicao-usuario-nome').value.trim();
            const sobrenome = document.getElementById('edicao-usuario-sobrenome').value.trim();
            const telefone = document.getElementById('edicao-usuario-telefone').value.trim();
            const funcao = document.getElementById('edicao-usuario-funcao').value;

            // Substitui na lista
            listaUsuarios[index].email = email;
            listaUsuarios[index].nome = `${nome} ${sobrenome}`.trim(); 
            listaUsuarios[index].telefone = telefone;
            listaUsuarios[index].funcao = funcao;

            // Grava e volta pra tabela
            localStorage.setItem('tabelaUsuarios', JSON.stringify(listaUsuarios));
            alert('Usuario atualizado com sucesso!');
            window.location.href = 'usuarios.html';
        }
    });
}





// VISUALIZAR USUÁRIO - LOCAL STORAGE


// Guarda o id do usuário clicado na tabela
function prepararVisualizacaoUsuario(id) {
    localStorage.setItem('idUsuarioEmVisualizacao', id);
}

// Preenche a tela visualizar-usuario.html com os dados do usuário
function carregarDadosVisualizacaoUsuario() {
    const campoNome = document.getElementById('vis-usuario-nome');

    // se não existir esse campo, não é a tela de visualização
    if (!campoNome) return;

    const idUsuario = localStorage.getItem('idUsuarioEmVisualizacao');
    const listaUsuarios = JSON.parse(localStorage.getItem('tabelaUsuarios')) || [];
    const usuarioEncontrado = listaUsuarios.find(u => u.id === idUsuario);

    if (usuarioEncontrado) {
        document.getElementById('vis-usuario-email').value = usuarioEncontrado.email;
        document.getElementById('vis-usuario-telefone').value = usuarioEncontrado.telefone || 'Não informado';

        const selectFuncao = document.getElementById('vis-usuario-funcao');
        if (selectFuncao) selectFuncao.value = usuarioEncontrado.funcao;

        // primeiro nome vai pro nome, o resto vai pro sobrenome
        const partesNome = usuarioEncontrado.nome.split(' ');
        campoNome.value = partesNome[0];

        const campoSobrenome = document.getElementById('vis-usuario-sobrenome');
        if (campoSobrenome) {
            campoSobrenome.value = partesNome.slice(1).join(' ');
        }

        // só troca a imagem se o usuário tiver foto
        const imgFoto = document.getElementById('vis-usuario-imagem');
        if (imgFoto && usuarioEncontrado.foto) {
            imgFoto.src = usuarioEncontrado.foto;
        }
    }
}

carregarDadosVisualizacaoUsuario();





//REMOVER PET - LOCAL STORAGE

function removerPet(id) {

    // puxa a lista atual de pets
    let listaPets = JSON.parse(localStorage.getItem('tabelaPets')) || [];

    // filtra a lista mantendo todos os pets, exceto o selecionado
    listaPets = listaPets.filter(pet => pet.id !== id);

    // salva nova lista no local stoare sem o pet removido
    localStorage.setItem('tabelaPets', JSON.stringify(listaPets));

    carregarTabelaPets();
}





// REMOVER USUARIO - LOCAL STORAGE

function removerUsuario(id) {
    
    //puxa a lista atual de usuarios
    let listaUsuarios = JSON.parse(localStorage.getItem('tabelaUsuarios')) || [];

    // fltra a lista de usuarios mantendo todos os usuarios exceto o selecionado
    listaUsuarios = listaUsuarios.filter(usuario => usuario.id !== id);

    // salva a nova lista no local storare sem o usuario removido
    localStorage.setItem('tabelaUsuarios', JSON.stringify(listaUsuarios));

    carregarTabelaUsuarios();
}





// REMOVER RESERVA - LOCAL STORAGE

function removerReserva(id) {

    //  puxa a lista atual de reservas
    let listaReservas = JSON.parse(localStorage.getItem('tabelaReservas')) || [];

    // filtra a lista de reservas, exceto a reserva selecionada
    listaReservas = listaReservas.filter(reserva => reserva.id !== id);

    // slava a nova lista no local storage sem a reserva removida
    localStorage.setItem('tabelaReservas', JSON.stringify(listaReservas));

    carregarTabelaReservas();
}





// LOGICA DE SAIR 

function fazerLogout() {
    
    // confirma se realmente o usuario deseja sair
    if (confirm('Tem certeza que deseja sair?')) {
        window.location.href = 'index.html';
    }
}
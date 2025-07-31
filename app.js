//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    // Validação: verificar se o nome não está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    // Validação: verificar se o nome já existe na lista
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }
    
    // Adicionar o nome à lista
    listaAmigos.push(nomeAmigo);
    
    // Atualizar a exibição da lista
    atualizarListaAmigos();
    
    // Limpar o campo de entrada
    inputAmigo.value = '';
    
    // Focar no campo de entrada para facilitar a adição de mais nomes
    inputAmigo.focus();
}

// Função para atualizar a exibição da lista de amigos
function atualizarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';
    
    listaAmigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = `${index + 1}. ${amigo}`;
        item.style.marginBottom = '5px';
        listaElement.appendChild(item);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    const resultadoElement = document.getElementById('resultado');
    
    // Validação: verificar se há pelo menos 2 pessoas na lista
    if (listaAmigos.length < 2) {
        alert('É necessário pelo menos 2 pessoas para fazer o sorteio!');
        return;
    }
    
    // Limpar resultado anterior
    resultadoElement.innerHTML = '';
    
    // Algoritmo melhorado para garantir um sorteio válido
    let sorteios = [];
    let tentativas = 0;
    const maxTentativas = 1000; // Evitar loop infinito
    
    do {
        tentativas++;
        sorteios = [];
        let pessoasDisponiveis = [...listaAmigos];
        
        // Para cada pessoa, sortear um amigo secreto
        for (let i = 0; i < listaAmigos.length; i++) {
            let pessoaAtual = listaAmigos[i];
            // Filtrar pessoas disponíveis (excluindo a própria pessoa)
            let opcoes = pessoasDisponiveis.filter(pessoa => pessoa !== pessoaAtual);
            
            // Se não há opções válidas, tentar novamente
            if (opcoes.length === 0) {
                break;
            }
            
            // Escolher uma pessoa aleatória das opções
            let indiceAleatorio = Math.floor(Math.random() * opcoes.length);
            let amigoSorteado = opcoes[indiceAleatorio];
            
            sorteios.push({
                pessoa: pessoaAtual,
                amigo: amigoSorteado
            });
            
            // Remover a pessoa sorteada das opções disponíveis
            pessoasDisponiveis = pessoasDisponiveis.filter(pessoa => pessoa !== amigoSorteado);
        }
        
        // Se conseguimos sortear para todos, sair do loop
        if (sorteios.length === listaAmigos.length) {
            break;
        }
        
    } while (tentativas < maxTentativas);
    
    // Se não conseguimos fazer um sorteio válido após muitas tentativas
    if (tentativas >= maxTentativas) {
        alert('Não foi possível fazer um sorteio válido. Tente novamente!');
        return;
    }
    
    // Exibir os resultados
    exibirResultados(sorteios);
}

// Função para exibir os resultados do sorteio
function exibirResultados(sorteios) {
    const resultadoElement = document.getElementById('resultado');
    
    // Adicionar título aos resultados
    const titulo = document.createElement('h3');
    titulo.textContent = '🎉 Resultado do Sorteio 🎉';
    titulo.style.textAlign = 'center';
    titulo.style.marginBottom = '15px';
    titulo.style.color = '#4B69FD';
    resultadoElement.appendChild(titulo);
    
    sorteios.forEach(sorteio => {
        const item = document.createElement('li');
        item.textContent = `${sorteio.pessoa} → ${sorteio.amigo}`;
        item.style.marginBottom = '10px';
        item.style.fontWeight = 'bold';
        resultadoElement.appendChild(item);
    });
    
    // Adicionar botão para novo sorteio
    const botaoNovoSorteio = document.createElement('button');
    botaoNovoSorteio.textContent = '🔄 Novo Sorteio';
    botaoNovoSorteio.style.marginTop = '15px';
    botaoNovoSorteio.style.padding = '10px 20px';
    botaoNovoSorteio.style.backgroundColor = '#4B69FD';
    botaoNovoSorteio.style.color = 'white';
    botaoNovoSorteio.style.border = 'none';
    botaoNovoSorteio.style.borderRadius = '25px';
    botaoNovoSorteio.style.cursor = 'pointer';
    botaoNovoSorteio.onclick = sortearAmigo;
    resultadoElement.appendChild(botaoNovoSorteio);
}

// Função para limpar a lista de amigos
function limparLista() {
    listaAmigos = [];
    atualizarListaAmigos();
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').focus();
}

// Função para permitir adicionar amigos pressionando Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
});

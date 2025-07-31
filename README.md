# 🎁 Amigo Secreto

Uma aplicação web interativa para realizar sorteios de amigo secreto de forma simples e divertida!

## 📋 Descrição

O **Amigo Secreto** é uma aplicação desenvolvida em HTML, CSS e JavaScript que permite organizar sorteios de amigo secreto de forma digital. A aplicação garante que cada participante receba um amigo secreto válido, evitando que alguém tire a si mesmo.

## ✨ Funcionalidades

### 🎯 Principais Recursos
- **Adicionar Participantes**: Interface intuitiva para adicionar nomes à lista
- **Sorteio Automático**: Algoritmo inteligente que garante sorteios válidos
- **Validações**: Prevenção de nomes duplicados e campos vazios
- **Interface Responsiva**: Design moderno e adaptável a diferentes dispositivos
- **Novo Sorteio**: Possibilidade de fazer múltiplos sorteios sem limpar a lista
- **Limpar Lista**: Botão para reiniciar completamente a aplicação

### 🎨 Interface
- Design moderno com cores atrativas
- Ícones intuitivos para melhor experiência do usuário
- Animações e feedback visual
- Layout responsivo para desktop e mobile

## 🚀 Como Usar

### 1. Adicionar Participantes
1. Digite o nome de um participante no campo de texto
2. Clique em "Adicionar" ou pressione Enter
3. O nome aparecerá na lista numerada abaixo
4. Repita o processo para adicionar mais participantes

### 2. Realizar o Sorteio
1. Certifique-se de ter pelo menos 2 pessoas na lista
2. Clique no botão "Sortear amigo"
3. Os resultados aparecerão no formato: `Pessoa → Amigo Secreto`
4. Use o botão "🔄 Novo Sorteio" para fazer outro sorteio

### 3. Gerenciar a Lista
- **Limpar Lista**: Remove todos os participantes e resultados
- **Novo Sorteio**: Faz um novo sorteio mantendo a lista atual

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização moderna e responsiva
- **JavaScript (ES6+)**: Lógica de programação e interatividade
- **Google Fonts**: Tipografia personalizada (Inter e Merriweather)

## 📁 Estrutura do Projeto

```
challenge-amigo-secreto_pt-main/
├── index.html          # Página principal da aplicação
├── style.css           # Estilos CSS
├── app.js              # Lógica JavaScript
├── assets/             # Pasta de recursos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Este arquivo
```

## 🎯 Algoritmo de Sorteio

O algoritmo implementado garante que:
- Ninguém tire a si mesmo como amigo secreto
- Todos os participantes recebam um amigo secreto
- O sorteio seja justo e aleatório
- Casos especiais sejam tratados adequadamente

### Como Funciona:
1. **Validação**: Verifica se há pelo menos 2 participantes
2. **Sorteio**: Para cada pessoa, escolhe aleatoriamente entre as opções disponíveis
3. **Verificação**: Garante que a escolha seja válida
4. **Tentativas**: Se necessário, tenta novamente até conseguir um sorteio válido
5. **Resultado**: Exibe todos os pares de amigo secreto

## 🎨 Design e UX

### Cores Utilizadas:
- **Primária**: `#4B69FD` (Azul)
- **Secundária**: `#FFF9EB` (Bege claro)
- **Terciária**: `#C4C4C4` (Cinza)
- **Botão**: `#fe652b` (Laranja)
- **Texto**: `#444444` (Cinza escuro)

### Tipografia:
- **Títulos**: Merriweather (serif)
- **Texto**: Inter (sans-serif)

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona bem em:
- **Desktop**: Layout otimizado para telas grandes
- **Tablet**: Adaptação para telas médias
- **Mobile**: Interface touch-friendly para smartphones

## 🔧 Instalação e Execução

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Como Executar
1. **Método Simples**:
   - Baixe todos os arquivos
   - Abra o arquivo `index.html` no navegador

2. **Método com Servidor Local**:
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # Usando Node.js
   npx serve .
   
   # Usando PHP
   php -S localhost:8000
   ```

## 🎯 Casos de Uso

### Ideal para:
- **Famílias**: Sorteios de Natal ou aniversários
- **Empresas**: Dinâmicas de equipe e confraternizações
- **Escolas**: Atividades educacionais e eventos
- **Grupos de amigos**: Organização de encontros e festas

### Exemplo de Uso:
1. Adicionar: João, Maria, Pedro, Ana, Carlos
2. Sortear: João → Maria, Maria → Pedro, Pedro → Ana, Ana → Carlos, Carlos → João
3. Resultado: Todos têm um amigo secreto válido!

## 🐛 Validações Implementadas

- ✅ Nome não pode estar vazio
- ✅ Nome não pode ser duplicado
- ✅ Mínimo de 2 participantes para sorteio
- ✅ Prevenção de loops infinitos
- ✅ Garantia de sorteio válido

## 🚀 Melhorias Futuras

Possíveis funcionalidades para versões futuras:
- [ ] Salvar listas de participantes
- [ ] Exportar resultados em PDF
- [ ] Modo escuro/claro
- [ ] Sons e animações
- [ ] Histórico de sorteios
- [ ] Configurações personalizadas

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio de programação. Sinta-se livre para usar, modificar e distribuir conforme necessário.

## 👨‍💻 Desenvolvimento

Desenvolvido com foco em:
- **Lógica de Programação**: Algoritmos eficientes e válidos
- **Experiência do Usuário**: Interface intuitiva e responsiva
- **Código Limpo**: Estrutura organizada e bem comentada
- **Acessibilidade**: Suporte a leitores de tela e navegação por teclado

---

**🎉 Divirta-se organizando seu amigo secreto! 🎉** 

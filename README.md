<!-- Exemplo de uso do template: https://github.com/kspencerl/lab-springboot-basic-api -->

# React.js

Construção de uma página com a biblioteca React.js.

## Tecnologias utilizadas
Linguagens, Frameworks e Bibliotecas utilizadas na construção do projeto.

<!-- Link com os badges para inserir abaixo https://devicon.dev/ -->
<div style="display: flex; gap: 10px;">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg">
</div>

## Onde Aplicar
Este projeto pode ser aplicado em diversas situações:
- Desenvolvimento de **sites** e aplicações **web**.
- Desenvolvimento de **componentes** reutilizáveis.
- **Integrações** com back-end.
- Construções de **dashboards**.

# Sumário

* [História do Desenvolvimento Front-End](#história-do-desenvolvimento-front-end)
* [O que é o React?](#o-que-é-o-react)
* [Introdução ao Lab](#introdução-ao-lab)
* [Step 1 - SetUp](#step-1---setup)
* [Step 2 - Entendendo o JSX](#step-2---entendendo-o-jsx)
* [Step 3 - Componentes e Props](#step-3---componentes-e-props)
  * [Hora de Praticar 01](#-hora-de-praticar-01)
* [Step 4 - Rotas](#step-5---rotas)
  * [Hora de Praticar 02](#-hora-de-praticar-02)
* [Step 5 - Estados](#step-4---estados)
  * [Hora de Praticar 03](#-hora-de-praticar-03)
* [Boas práticas](#boas-práticas)



## História do Desenvolvimento Front-End

O desenvolvimento front-end passou por várias fases, marcadas pelo uso de diferentes ferramentas. Três tecnologias se destacaram ao longo dessa jornada:

- HTML
- CSS
- JavaScript

### 🌐 O início:
No início, cada nova página de um site precisava de um código específico para cada funcionalidade. Isso significava:
- **Trabalho excessivo:** Repetição de tarefas já feitas.
- **Códigos mais pesados:** Muitos dados duplicados.


### 🚀 A Solução: Bibliotecas e Frameworks
Para resolver esses problemas, surgiram bibliotecas e frameworks que facilitaram a vida dos desenvolvedores. Um destaque é o React.js:
- Uma biblioteca JavaScript para criar aplicações front-end **dinâmicas e eficientes**.

### ✅ Benefícios do React.js
1. **Reutilização de Componentes:** Crie componentes reutilizáveis, economizando tempo e esforço.
2. **Virtual DOM:** Melhora a performance ao atualizar apenas os componentes necessários.
3. **Comunidade Ativa:** Suporte constante e muitas bibliotecas adicionais.


## O que é o React?

React é uma biblioteca em JavaScript desenvolvida pelo Facebook, projetada para otimizar tarefas simultâneas, como chats, status e conversas online. Essas operações são comuns em aplicações do Facebook.

### 🎯 Objetivo do React

O React visa criar **pequenas partes** individuais de uma tela, como:
- Botões
- Cards
- Rodapés
- Imagens

Isso resulta em uma aplicação que funciona de maneira independente, permitindo que cada "pequena parte" ou ``componente`` possa realizar suas próprias ações sem depender do resto da página. Seus benefícios são: 

1. **Reutilização:** Crie uma vez, use em qualquer lugar.
2. **Manutenção Facilitada:** Atualize componentes sem afetar o restante da aplicação.
3. **Desempenho Aprimorado:** Atualize apenas os componentes necessários.

### 🔍 Exemplo Prático: Web-Tech

Para entender melhor, observe a página do site Web-Tech abaixo:
Na página, você pode ver como os ``componentes`` individuais (botões, cards) são utilizados para criar uma interface dinâmica e eficiente.

![Página de Membros](/assets/member_page.png)

Observa-se que em cada retângulo vermelho temos uma parte, ou seção do site. Nessas regiões, notamos pequenas partes que realizam funções semelhantes, chamadas componentes.

### 🧩 O Poder dos Componentes
Os componentes são semelhantes na construção e design, diferenciando-se principalmente pelas informações que contêm.

### 🚫 Método Tradicional: HTML e CSS
Se quiséssemos construir essa página apenas com HTML e CSS, precisaríamos duplicar o mesmo código HTML várias vezes para obter o resultado desejado. Isso resultaria em:

- **Redundância:** Código duplicado
- **Manutenção difícil:** Alterações em várias partes

### ✅ Método Moderno: React
Com ferramentas como o **React**, não precisamos duplicar código e as alterações ficam centralizadas em um único componente. Vejamos um exemplo prático:
**Exemplo: Navbar**

**Sem** o uso de bibliotecas:
- Teríamos que inserir um código de navbar em cada nova página criada.

**Com** o uso do React:
- Podemos chamar a navbar uma única vez e aplicá-la em todas as páginas.

![Página de Mebros - Navbar](/assets/member_page_navbar.png)

![Página de Eventos](/assets/event_page.png)

Nos retângulos azuis, podemos ver a mesma **navbar** em duas páginas diferentes. Em uma aplicação simples com HTML e CSS, precisaríamos duplicar esse código, mas com a biblioteca React poderíamos ter somente um ``componente``. Isso é um pouco da grandeza do React.js, e é isso que iremos explorar no nosso lab.


## Introdução ao Lab

Nesse lab você irá aprender os principais conceitos para a criação de uma aplicação completa com a biblioteca React.js. Vamos abordar a construção do site da Web-Tech, disponível no **[link](https://webtech.network/)**, utilizando também conceitos como requisições em API!

### 🔍 Comparando React com códigos em HTML/JS:

#### HTML/JS

```html
<nav class="navbar">
    <a href="#" class="logo">Logo</a>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <button class="nav-toggle" id="navToggle">Menu</button>
</nav>
```
#### React/JSX

```jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#" className="logo">Logo</a>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="nav-toggle" onClick={toggleNav}>Menu</button>
    </nav>
  );
};

export default Navbar;
```

### ⭕ Similaridades:

- **Estrutura e Estilização:** Ambos usam HTML (ou JSX) para estrutura e CSS para estilização.

### ❌ Diferenças:

- Integração do JavaScript:
  - **HTML:** O JavaScript é separado do HTML e funciona de forma independente.
  - **React:** O JavaScript funciona integrado ao HTML por meio do JSX, uma extensão da sintaxe HTML dentro do JavaScript.

- Modularidade:
  - **HTML/CSS/JavaScript:** Não é modular. O código precisa ser duplicado sempre que usado em diferentes páginas.
  - **React:** Altamente modular. A navbar é um componente reutilizável que pode ser importado em qualquer parte da aplicação.

### 🚀 Conclusão da Comparação:
Iniciar com React é fácil, já que  é uma evolução natural para quem já conhece JavaScript e HTML. Ele combina ambas tecnologias para criar componentes reutilizáveis, dando facilidade na construção e manutenção de interfaces complexas. Assim, vamos iniciar nosso projeto dando um setup na aplicação!



## Step 1 - SetUp
 
### 1️. Instalando o Node.js e npm:

Primeiro, você precisa instalar o Node.js, que inclui o npm (Node Package Manager), essencial para gerenciar pacotes de software para Node.js. Baixe o instalador do Node.js no site oficial **[nodejs.org](nodejs.org)** e siga as instruções de instalação.

### 2️. Verificando instalação
Verifique se o Node.js e o npm foram instalados corretamente executando os seguintes comandos no terminal:

```sh
node -v
npm -v
```

### 3️. Instalando ‘create-react-app’

``create-react-app`` é uma ferramenta oficial para criar rapidamente aplicações React com uma configuração inicial padrão. No terminal rode o seguinte comando:

```sh
npm install -g create-react-app
```

### 4️. Criando seu primeiro projeto em React:
Para iniciar um novo projeto React, vamos usar a ferramenta Create React App, que configura automaticamente a estrutura inicial do projeto, incluindo todas as dependências necessárias.

```sh
npx create-react-app web_tech_page
```

### 5️. Estrutura do Projeto:

Depois de criar o projeto, a estrutura de diretórios será a seguinte:

```
web_tech_page/
├── public/
├── src/
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
└── .gitignore
```

- ``public/``: Contém arquivos estáticos públicos.
- ``src/``: Contém os arquivos de código-fonte.
- ``App.js``: Componente principal da aplicação.
- ``index.js``: Ponto de entrada da aplicação.


### 6. Executando o projeto:
Navegue até a pasta do projeto e execute o seguinte comando para seu projeto ser iniciado. 

```sh
npm start
```
Se tudo estiver certo, será iniciado na sua máquina um novo endereço http://localhost:3000/, dando acesso a sua mais nova aplicação. Pronto! Com isso podemos dar início a criação do nosso primeiro projeto em React. 




## Step 2 - Entendendo o JSX

JSX é uma extensão de sintaxe para JavaScript que permite escrever HTML dentro de arquivos JavaScript. É utilizado para descrever como a interface de usuário deve ser renderizada.

### 🧩 Exemplo simples de um código JSX:

```jsx
// src/components/HelloWorld.js
import React from 'react';

const HelloWorld = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
};

export default HelloWorld;
```

### 🌐 Como o navegador interpreta um código JSX?
Um navegador interpreta a princípio três linguagens principais:

- **HTML (HyperText Markup Language)**: linguagem padrão para estruturar e apresentar informações na web.
- **CSS (Cascading Style Sheets)**: responsável por estilizar o conteúdo HTML, inserindo cores, formatos e animações nas aplicações.
- **Javascript**: linguagem de programação responsável por adicionar 

É fato que posteriormente surgiram diversas outras ferramentas e tecnologias as quais transformaram o uso dessas linguagens, necessitando de maneiras para serem utilizadas pelos navegadores. Com o JSX o código é transpilado/ compilado para JavaScript por meio de ferramentas como Babel e WebPack. 


### ▶ Retorno de funções React.js

Por padrão, o código JSX é retornado como uma função, chamada createElement que possibilita a interpretação para códigos JavaScript. Ela possui três parâmetros principais, sendo eles:
- **type**: tipo da função podendo ser uma tag HTML ou outro componente React.
- **props**: atributos desejáveis no componente
- **children**: parte que contém conteúdo HTML ou outros componentes




## Step 3 - Componentes e Props

### 📦 Componentes:
- Componentes são blocos reutilizáveis de código que permitem criar interfaces de usuário complexas a partir de pequenas partes isoladas.

```jsx
// src/components/Header.js
import React from 'react';

const Header = () => (
    <header>
        <h1>WebTech PUC Minas</h1>
        <nav>
            <ul>
                <li>Sobre</li>
                <li>Labs</li>
                <li>Eventos</li>
                <li>Equipe</li>
                <li>Contato</li>
            </ul>
        </nav>
    </header>
);

export default Header;
```

### 🔧 Props:
Props são argumentos passados para componentes React que permitem personalizar e reutilizar componentes.

```jsx
import React from 'react';

const Saudacao = (props) => {
  return <h1>Olá, {props.nome}!</h1>;
};

export default Saudacao;
```
Você pode usar este componente passando diferentes valores para a prop ``nome``:

```jsx
<Saudacao nome="Maria" />
<Saudacao nome="João" />
```

### 👨‍🏫 Hora de Praticar 01

Vamos iniciar a criação dos nossos primeiros componentes em React.js, o Navbar e Footer. Nessa seção você irá aprender sobre os Links, que são muito similares com as tags <a> usadas em HTML. Eles se diferem dessas tags por não necessitarem recarregar a página quando acontece o clique sobre eles. Siga as instruções abaixo para a realização: 

- Vá para a pasta ``src`` e crie uma nova pasta chamada ``components``

- Dentro de components crie uma nova pasta chamada ``layout``

- Em ``layout``crie um arquivo nomeado de ``Navbar.js``

- No arquivo digite o código abaixo:

```jsx
// src/components/layout/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => (
    <header className={styles.navbar}>
        <h1><Link to="/">WebTech PUC Minas</Link></h1>
        <nav>
            <ul>
                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/labs">Labs</Link></li>
                <li><Link to="/">Eventos</Link></li>
                <li><Link to="/">Equipe</Link></li>
            </ul>
        </nav>
    </header>
);

export default Navbar;
```

##### Utilize o CSS: ``Navbar.module.css``

## Step 4 - Rotas 

### 🛣️ Rotas:
No React, usamos bibliotecas como ``react-router-dom`` para gerenciar a navegação entre diferentes páginas ou componentes. ``react-router-dom`` fornece componentes como ``Router``, ``Route``, ``Switch`` e ``Link`` para configurar as rotas da aplicação.


### 📝 Exemplo de configuração de rotas:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
```

### Detalhes sobre ``react-router-dom``:

- Router:
  - ``BrowserRouter`` é o componente principal que envolve toda a aplicação.
  - Controla a sincronização do URL com a interface do usuário.
- Route:
  - Define uma rota e o componente que será renderizado quando o URL corresponder ao caminho especificado.
  - O ``prop`` exact garante que o caminho deve corresponder exatamente.
- Switch:
  - Renderiza exclusivamente a primeira rota filha que corresponde ao caminho atual.
  - Evita que múltiplas rotas sejam renderizadas ao mesmo tempo.
- Link:
  - Usado para criar links de navegação que modificam o URL sem recarregar a página.
  - Substitui o uso de ``<a>`` para navegação interna.

### 👨‍🏫 Hora de Praticar 02

Agora iremos dar inicio ao nosso projeto criando o arquivo que será responsável por chamar todos os outros, o ``App.js``. Nele iremos chamar nosso componente ``Navbar`` e utilizar o nosso conhecimento sobre rotas. Siga as instruções abaixo para a realização: 

- Vá para a pasta ``src``

- Encontre um arquivo chamado ``App.js``

- Reescreva sobre o antigo código o código abaixo:


```jsx
// src/App.jsimport { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/pages/Home"
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/labs" Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

- Posteriormente, vá para ``src/components``

- Crie uma pasta chamada ``pages``

- Dentro de ``pages`` crie um arquivo chamado ``Home.js``

- Insira o código abaixo:


```jsx
// src/components/pages/Home.js
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home_page}>
      <h1>Bem vindo, a <span>WebTech!</span></h1>
    </div>
  );
}

export default Home;
```


##### Utilize o CSS: ``Home.module.css``

## Step 5 - Estados 

### 📊 Estados:
Estados são objetos que armazenam dados dinâmicos e podem mudar ao longo do tempo, permitindo que os componentes React sejam interativos e **reativos** a mudanças.

### 📝 Exemplo de componente com estado (usando hooks):

```jsx
import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default Contador;
```

### Como os estados funcionam:
- Definição do Estado Inicial:
  - Usamos ``useState`` para definir o estado inicial.
  - ``useState`` retorna um array com dois elementos: o valor atual do estado e uma função para atualizar o estado.

```jsx
const [contador, setContador] = useState(0);
```

- Atualização do Estado:
  - Usamos a função ``setContador`` para atualizar o estado.
  - Quando o estado é atualizado, o componente é re-renderizado para refletir as mudanças.

```jsx
<button onClick={() => setContador(contador + 1)}>Incrementar</button>
```

### 👨‍🏫 Hora de Praticar 03

Nesta tarefa, vamos integrar uma API externa do GitHub para obter dados sobre os Labs da organização WebTech. Utilizaremos uma variedade de componentes e técnicas de controle de estado que aprendemos neste laboratório. Siga os passos abaixo para concluir a tarefa com sucesso:

## Boas práticas

- Organização de Componentes
  - **Componentes Pequenos e Reutilizáveis:** Divida sua aplicação em componentes pequenos, independentes e reutilizáveis.
  - **Pastas por Funcionalidade:** Organize os arquivos do projeto por funcionalidade em vez de tipo de arquivo (ex: ``components/Button.js`` em vez de ``components/Buttons/Button.js``).

- Estado e Props
  - **Gerenciamento de Estado:** Use hooks como ``useState`` e ``useReducer`` para gerenciar o estado local dos componentes.
  - **Lift State Up:** Eleve o estado para o componente mais próximo comum quando necessário compartilhar dados entre componentes.
  - **Prop-Types:** Utilize ``PropTypes`` para documentar e validar os tipos de props que um componente deve receber.

```jsx
import PropTypes from 'prop-types';

const Saudacao = ({ nome }) => {
  return <h1>Olá, {nome}!</h1>;
};

Saudacao.propTypes = {
  nome: PropTypes.string.isRequired,
};
```

- Hooks
  - **useEffect**: Utilize useEffect para efeitos colaterais, mas certifique-se de limpar os efeitos, se necessário, para evitar vazamentos de memória.
  - **Custom Hooks**: Crie hooks personalizados para encapsular a lógica reutilizável.

#### Use Effect
```jsx
import React, { useEffect } from 'react';

const ComponenteFuncional = () => {
useEffect(() => {
  // Código para buscar dados ou configurar assinaturas

  return () => {
    // Código para limpar assinaturas
  };
}, []);

return <div>Olá, eu sou um componente funcional!</div>;
};

export default ComponenteFuncional;
```

#### Custom Hooks
```jsx
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;
```

- Estilização
  - **CSS Modules:** Use CSS Modules para escopo local de estilos e evitar conflitos de nomes.

```jsx
/* Button.module.css */
.button {
   background-color: blue;
   color: white;
 }

import styles from './Button.module.css';
```

## Contato
Seu nome - [seuemail@gmail.com](mailto:seuemail@gmail.com).

GitHub: [github.com/seuUser](https://github.com/seuUser)

## License

Este projeto é licenciado sob a [Nome da Licença](URL da Licença) - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.


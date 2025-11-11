Linguagem Base

O frontend será desenvolvido utilizando as seguintes linguagens e tecnologias principais:

HTML5 – estrutura das páginas

CSS3 – estilização e layout dos componentes

JavaScript – lógica e interação dinâmica

React.js – framework JavaScript utilizado para criação de interfaces reativas e componentizadas

Bibliotecas e Frameworks

Vite – ferramenta de build e ambiente de desenvolvimento rápido para React

React Router DOM – para controle das rotas e navegação entre páginas

Fetch API – para comunicação com o backend em PHP

React Icons – para ícones e elementos visuais

Integração com Backend

A comunicação entre o frontend e o backend será feita através de uma API REST desenvolvida em PHP.

O frontend enviará e receberá dados usando requisições HTTP (GET, POST, PUT, DELETE)

O consumo da API será feito utilizando Fetch, conectando-se aos endpoints da pasta /API

Os dados trafegarão em formato JSON

Controle de Versão

Plataforma utilizada: GitHub

O código será versionado por meio de commits e branches, garantindo histórico e colaboração entre membros

Cada atualização do frontend e backend será integrada ao repositório principal

Organização do Código

A estrutura do projeto será organizada da seguinte forma:

/Bando_de_Dados
 └── Arquivos relacionados à modelagem e estrutura do banco de dados.

/Diagrama de Classe de Uso
 └── Diagramas UML e de casos de uso do sistema.

/Modelagem
 └── Documentos de apoio e diagramas de modelagem do projeto.

/figma
 └── Protótipo visual da interface desenvolvido no Figma.

/frontend-adocao
 ├── /public
 │    └── (arquivos públicos, como ícones e imagens)
 ├── /src
 │    ├── /assets      
 │    ├── App.css        
 │    ├── App.tsx     
 │    ├── index.css     
 │    ├── main.tsx       
 │    └── (futuras pastas: /pages, /services, /routes)
 ├── .gitignore
 ├── README.md
 ├── eslint.config.js
 ├── index.html
 ├── package.json
 ├── package-lock.json
 ├── tsconfig.app.json
 ├── tsconfig.json
 ├── tsconfig.node.json
 └── vite.config.ts

/API
 ├── processa_login.php
 ├── processa_registro.php
 └── outros_endpoints.php

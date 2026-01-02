
# Portfolio

Aplicação front-end pessoal, desenvolvida com foco em boas práticas de desenvolvimento, organização de componentes, responsividade e integração com API externa. O projeto apresenta meus trabalhos de forma dinâmica, permitindo navegação fluida entre páginas e visualização de projetos diretamente do GitHub.

🔗 Projeto online: https://portfolio-opal-six-18.vercel.app/


## Diferenciais do Projeto

- Listagem dinâmica de projetos a partir da API do GitHub
- Componentes reutilizáveis e organizados
- Navegação entre páginas utilizando React Router Dom
- Estilização organizada com Sass
- Layout responsivo
- Código desenvolvido com TypeScript


## Estrutura do Projeto

O projeto segue uma organização baseada em componentes, com separação clara entre páginas, componentes reutilizáveis e estilos globais:

- **components**: Componentes reutilizáveis (Header, Footer, Container, Card), cada um com seus próprios estilos.
- **pages**: Páginas da aplicação (Home, Sobre, Projetos, Contatos, NotFound, PageBase), organizadas por rota.
- **PageBase**: componente interno utilizado para estruturar o layout (Header + Footer + Container). Não é uma página acessível ao usuário, mas facilita a criação das páginas visíveis.
- **styles**: Estilos globais, variáveis de cores e mixins Sass utilizados em toda a aplicação.
- **App.tsx**: Configuração principal da aplicação e rotas.
- **main.tsx**: Ponto de entrada do React.

# Funcionalidades

- Navegação entre páginas: Home, Sobre, Projetos, Contatos, PageBase e NotFound
- Listagem dinâmica de repositórios do GitHub em cards com links diretos
- Função de busca para filtrar projetos dinamicamente
- Menu hamburger funcional e responsivo
- Layout responsivo para diferentes tamanhos de tela
- Componentes estruturados com TypeScript e Arrow Functions
- Requisições assíncronas com hooks (useEffect)
- Renderização condicional baseada nos dados da API


## Tecnologias Utilizadas:

- **React**
- **TypeScript**
- **Vite**
- **Sass**
- **React Router DOM**
- **React Icons**
- **API Fetch**


## Como Executar o Projeto
    git clone https://github.com/denneraladim/portfolio.git
    npm install
     npm run dev  

## Responsividade

O layout foi desenvolvido com abordagem mobile-first, utilizando media queries e mixins do Sass para garantir adaptação a diferentes dispositivos, incluindo desktop, tablet e mobile.

  



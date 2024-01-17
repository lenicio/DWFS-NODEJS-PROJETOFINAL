# CRUD de Produtos - NodeJS com Express

Este projeto consiste em um sistema de gerenciamento de produtos implementado com NodeJS e Express. Projetado para operações CRUD (Create, Read, Update, Delete), utiliza SQLite3 como banco de dados, com Knex para a manipulação de dados. O sistema inclui autenticação JWT (JSON Web Token) para garantir a segurança e integridade das operações.

## Estrutura do Projeto

O projeto segue o padrão MVC (Model-View-Controller), organizado nas seguintes pastas:

- `controllers`: Contém os controladores que lidam com a lógica de negócio.
- `models`: Onde o modelo de dados é definido.
- `views`: Contém as views da aplicação. Neste caso, as views são arquivos HTML estáticos.
- `public`: Contém arquivos estáticos, como CSS e JavaScript.
- `routes`: Define as rotas da API e mapeia para os respectivos controladores.
- `middleware`: Contém o middleware de autenticação da API via JWT (JSON Web Token).

## Configuração e Instalação

Para configurar e instalar o projeto, siga estes passos:

1. Clone o repositório do projeto.
2. Navegue até a pasta do projeto e execute `npm install` para instalar as dependências.
3. Configure o banco de dados SQLite3 conforme necessário.

## Executando a Aplicação

Para executar a aplicação, execute o comando `npm start` na raiz do projeto. Isso iniciará o servidor na porta especificada.

## Rotas do Sistema

### Views

O sistema fornece as seguintes views:

- **Realizar login/registrar**

  - `GET /login`
  - Exibe a página de login/registrar.

- **Listar Todos os Produtos**

  - `GET /`
  - Retorna uma lista de todos os produtos.

## API Endpoints

- `Todas as rotas da API são prefixadas com /api/v1`
- `Todas as rotas da API requerem autenticação via JWT (JSON Web Token)`
- `Todas as rotas da API retornam dados no formato JSON`

### Gerenciamento de Produtos

A API fornece os seguintes endpoints para gerenciamento de produtos:

- **Listar Todos os Produtos**

  - `GET /api/v1/products`
  - Retorna todos os produtos.

- **Buscar Produto por ID**

  - `GET /api/v1/products/:id`
  - Retorna detalhes de um produto específico.

- **Criar Novo Produto**

  - `POST /api/v1/products`
  - Cria um novo produto. Requer `description`, `price` e `brand` no corpo da requisição.

- **Atualizar Produto**

  - `PUT /api/v1/products/:id`
  - Atualiza um produto existente. `description`, `price` e `brand` são campos opcionais.

- **Deletar Produto**
  - `DELETE /api/v1/products/:id`
  - Remove um produto do banco de dados.

### Gerenciamento de Usuários

A API fornece os seguintes endpoints para gerenciamento de usuários:

- **Autenticar Usuário**

  - `POST /api/v1/users/auth`
  - Autentica um usuário. Requer `email` e `password` no corpo da requisição. Retorna um token JWT para ser utilizado nas requisições subsequentes.

- **Listar Todos os Usuários**

  - `GET /api/v1/users`
  - Retorna todos os usuários.

- **Buscar Usuário por ID**

  - `GET /api/v1/users/:id`
  - Retorna detalhes de um usuário específico.

- **Criar Novo Usuário**

  - `POST /api/v1/users`
  - Cria um novo usuário. Requer `name`, `email` e `password` no corpo da requisição.

- **Atualizar Usuário**

  - `PUT /api/v1/users/:id`
  - Atualiza um usuário existente. `name`, `email` e `password` são campos opcionais.

- **Deletar Usuário**
  - `DELETE /api/v1/users/:id`
  - Remove um usuário do banco de dados.

## Modelo de Dados

A tabela `products` no SQLite3 segue a seguinte estrutura:

```sql
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL,
    brand TEXT NOT NULL
);
```

A tabela `users` no SQLite3 segue a seguinte estrutura:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Contribuições

Por este ser um projeto de estudo, contribuições não são aceitas. Sinta-se livre para fazer um fork do projeto e modificar como desejar.

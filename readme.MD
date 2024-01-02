# CRUD de Produtos - NodeJS com Express

Este projeto é uma aplicação de CRUD (Create, Read, Update, Delete) para gerenciamento de produtos, desenvolvida em NodeJS com o framework Express. A aplicação utiliza SQLite3 como banco de dados, com o query builder Knex para manipulação de dados.

## Estrutura do Projeto

O projeto segue o padrão MVC (Model-View-Controller), organizado nas seguintes pastas:
- `controllers`: Contém os controladores que lidam com a lógica de negócio.
- `models`: Onde o modelo de dados é definido.
- `routes`: Define as rotas da API e mapeia para os respectivos controladores.

## Configuração e Instalação

Para configurar e instalar o projeto, siga estes passos:

1. Clone o repositório do projeto.
2. Navegue até a pasta do projeto e execute `npm install` para instalar as dependências.
3. Configure o banco de dados SQLite3 conforme necessário.

## Executando a Aplicação

Para executar a aplicação, execute o comando `npm start` na raiz do projeto. Isso iniciará o servidor na porta especificada.

## API Endpoints

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

## Contribuições

Por este ser um projeto de estudo, contribuições não são aceitas. Sinta-se livre para fazer um fork do projeto e modificar como desejar.


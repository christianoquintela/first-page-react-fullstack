# firstPageReact-fullstack
Projeto criado para praticar conhecimentos **Dev Jr. fullstack**.

Plano de implementação de um sistema de autenticação com API REST/RESTFULL;

## Objetivo
O objetivo deste plano é implementar um sistema de autenticação com API REST/RESTFULL que utilize tokens JWT.
Os tokens serão salvos nos cookies do navegador do usuário.
Requisitos/Conhecimentos:
HTML5, CSS3, React, Lógica de programação, JavaScript, Node.js, MySQL(1 implementação)/MongoDB(2 implementação)
Frontend em React
Backend em Node.js
API REST
Tokens JWT
Salvamento de tokens nos cookies
Banco de dados mySQL/MariaDB linux

## Arquitetura
O sistema será composto por dois componentes principais:
1. Frontend: responsável pela interface com o usuário e pela interação com a API REST.
2. Backend: responsável pelo processamento das solicitações da API REST e pela geração de tokens JWT.

### Fluxo de autenticação
O fluxo de autenticação será o seguinte:
O usuário acessa a página de login do frontend.
O usuário insere suas credenciais de login (usuário e senha).
O frontend envia uma solicitação POST para a API REST de autenticação.
A API REST valida as credenciais do usuário.
A API REST gera um token JWT.
A API REST retorna o token JWT para o frontend.
O frontend salva o token JWT nos cookies do navegador do usuário.

## Implementação

### Frontend
O frontend será implementado usando o framework React.
Os componentes principais do frontend serão:
Componente de login: responsável pela exibição da página de login e pelo processamento do formulário de login.
Componente de autenticação: responsável por enviar a solicitação POST para a API REST de autenticação.
Componente de token: responsável por exibir o token JWT.

A implementação do frontend será dividida nas seguintes etapas:
Criação de um novo projeto React.
Instalação das dependências necessárias.
Criação dos componentes principais.
Implementação da lógica de login.
Implementação da lógica de exibição do token JWT.

### Backend
O backend será implementado usando a linguagem Node.js.
Os principais componentes do backend serão:
Classe de modelo de usuário: responsável por representar um usuário.
Classe de serviço de autenticação: responsável por validar as credenciais do usuário e gerar tokens JWT.
Classe de controlador de autenticação: responsável por lidar com as solicitações da API REST de autenticação.
Classe de conexão com banco de dados: responsável por conectar o backend ao banco de dados mySQL/MariaDb.

A implementação do backend será dividida nas seguintes etapas:

- Criação de um novo projeto Java.
- Instalação das dependências necessárias.
- Criação das classes principais.
- Implementação da lógica de autenticação.
- Implementação da lógica de geração de tokens JWT.
- Implementação da lógica de conexão com o banco de dados SQLite3.

## Testes

Após a implementação do sistema, será necessário realizar testes para garantir que ele esteja funcionando corretamente.

### Os principais testes a serem realizados serão:
1. Teste de login: deve verificar se o sistema é capaz de autenticar um usuário válido.
2. Teste de geração de tokens JWT: deve verificar se o sistema é capaz de gerar tokens JWT válidos.
3. Teste de validação de tokens JWT: deve verificar se o sistema é capaz de validar tokens JWT válidos.
4. Teste de conexão com o banco de dados SQLite3: deve verificar se o sistema é capaz de se conectar ao banco de dados SQLite3.

## Deploy

Após a conclusão dos testes, o sistema poderá ser implantado em produção.
A implantação pode ser feita em um servidor local ou em um servidor na nuvem.

## Considerações finais

Este plano de implementação fornece um guia geral para a implementação de um sistema de autenticação com API REST que utilize tokens JWT.
É importante adaptar este plano às necessidades específicas do projeto.
Adição de banco de dados mySQL/MariaDB
Para adicionar o banco de dados mySQL/MariaDB ao sistema, será necessário fazer as seguintes alterações:
Adicionar as dependências ao projeto.
Criar uma classe de conexão com o banco de dados.
Atualizar a classe de serviço de autenticação para armazenar os usuários no banco de dados.


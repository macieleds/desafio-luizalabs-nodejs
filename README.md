# Desafio Luizalabs - NodeJS

### Sobre o desafio
                

Desenvolvimento de uma API Rest para avaliação no processo seletivo de Desenvolvedores NodeJS do Luizalabs. 
                
				
### Sobre o código da aplicação

O código é totalmente aberto, de uso público e livre para modificações.

#### No desenvolvimento da aplicação foi utilizado:

+ NodeJS
+ Express
+ Mongoose (MongoDB)
+ npm - bcrypt (para criptografia de senha)
+ JWT - JSON Web Token (para gerar token de autenticação)
+ body-parser (conversão do body da requisição para o formato JSON)
+ Morgan (para exibição das requisições no servidor HTTP)

# Funcionalidades

A API permite que o usuário faça um CRUD de cadastro de clientes e adicione, consulte e exclua produtos de sua lista de favoritos em sua instância. As operações de produtos favoritos é protegida por autenticação. Logo, é necessário que o usuário crie uma conta e faça a autenticação para realizar essas operações.
Esse tutorial orienta sobre as funcionalidades da API utilizando o Postman.
Para subir a aplicação abra o prompt (cmd) ou o terminal de sua preferência, aponte para a pasta onde o projeto está e execute o comando **"nodemon server.js"** (sem as aspas).

### 1 - Criação de usuário

Para criação do usuário, será feita uma requisição POST em:
```sh
localhost:3000/clientes/cadastrar 
```
Nessa requisição serão informados, no corpo da requisição, o nome, email e senha, conforme exemplo abaixo:

![N|Solid](https://i.ibb.co/crywdQs/req-Cadastro.jpg)

### 2 - Autenticação de usuário

Para criação do usuário, será feita uma requisição POST em:
```sh
localhost:3000/clientes/autenticar
```
Nessa requisição serão informados, no corpo da requisição, o nome, email e senha **cadastrados anteriormente**, conforme exemplo abaixo. Nssa autenticação o password será criptografado e serão gerados um token e um ID que serão utilizados posteriormente para as operações na lista de produtos.

![N|Solid](https://i.ibb.co/fN3Y9G5/aut-Usuario.jpg)

### 3 - Inclusão de produtos na lista de favoritos

Para a inclusão de produtos, será feita uma requisição POST em:
```sh
localhost:3000/produtos/adicionar
```
Nessa requisição serão informados, no corpo da requisição, o reviewScore (OPCIONAL), price, image, brand, id e title.

![N|Solid](https://i.ibb.co/5jfjT3k/cadprod.jpg)

### 4 - Consultando a lista produtos favoritos do usuário

Para a inclusão de produtos, será feita uma requisição GET em:
```sh
localhost:3000/produtos
```
É importante ressaltar que essa consulta é baseada no usuário que gerou a instância, ou seja, no usuário logado e que, portanto, é necessário que seja passado o token gerado anteriormente ao header, conforme exemplo abaixo:

![N|Solid](https://i.ibb.co/hdt7XXR/req-Header.jpg)

E então a consulta será realizada:

![N|Solid](https://i.ibb.co/wgCCqNH/consulta-Lista.jpg)




### Contato

E-mail: maciel.eds@gmail.com 
Linkedin: https://www.linkedin.com/in/edison-maciel-6a83a14a/

<p class="has-line-data" data-line-start="2" data-line-end="3"><a href="https://nodesource.com/products/nsolid"><img src="https://cldup.com/dTxpPi9lDf.thumb.png" alt="N|Solid"></a></p>
<h1 class="code-line" data-line-start=4 data-line-end=5 ><a id="Desafio_Luizalabs__NodeJS_4"></a>Desafio Luizalabs - NodeJS</h1>
<h3 class="code-line" data-line-start=6 data-line-end=7 ><a id="Sobre_o_desafio_6"></a>Sobre o desafio</h3>
<p class="has-line-data" data-line-start="9" data-line-end="10">Foi criada uma aplicação, atendendo a determinados requisitos, para avaliação no processo seletivo para o quadro de Desenvolvedores NodeJS do Luizalabs.</p>
<h3 class="code-line" data-line-start=12 data-line-end=13 ><a id="Sobre_o_cdigo_da_aplicao_12"></a>Sobre o código da aplicação</h3>
<p class="has-line-data" data-line-start="14" data-line-end="15">O código é totalmente aberto, de uso público e livre para modificações.</p>
<h4 class="code-line" data-line-start=16 data-line-end=17 ><a id="No_desenvolvimento_da_aplicao_foi_utilizado_16"></a>No desenvolvimento da aplicação foi utilizado:</h4>
<ul>
<li class="has-line-data" data-line-start="18" data-line-end="19">NodeJS</li>
<li class="has-line-data" data-line-start="19" data-line-end="20">Express</li>
<li class="has-line-data" data-line-start="20" data-line-end="21">Mongoose</li>
<li class="has-line-data" data-line-start="21" data-line-end="22">NodeJS</li>
<li class="has-line-data" data-line-start="22" data-line-end="23">npm - bcrypt (para criptografia de senha)</li>
<li class="has-line-data" data-line-start="23" data-line-end="24">JWT - JSON Web Token (para gerar token de autenticação)</li>
<li class="has-line-data" data-line-start="24" data-line-end="25">body-parser (conversão do body da requisição para o formato JSON)</li>
<li class="has-line-data" data-line-start="25" data-line-end="27">Morgan (para exibição das requisições no servidor HTTP)</li>
</ul>
<h1 class="code-line" data-line-start=27 data-line-end=28 ><a id="Funcionalidades_27"></a>Funcionalidades</h1>
<p class="has-line-data" data-line-start="29" data-line-end="32">A API permite que o usuário faça um CRUD de cadastro de clientes e adicione, consulte e exclua produtos à sua lista de favoritos em sua instância. As operações de produtos favoritos é protegida por autenticação. Logo, é necessário que o usuário crie uma conta e faça a autenticação para realizar essas operações.<br>
Esse tutorial orienta sobre as funcionalidades da API utilizando o Postman.<br>
Para subir a aplicação abra o prompt (cmd) ou o terminal de sua preferência, aponte para a pasta onde o projeto está e execute o comando <strong>nodemon server.js</strong>.</p>
<h3 class="code-line" data-line-start=33 data-line-end=34 ><a id="1__Criao_de_usurio_33"></a>1 - Criação de usuário</h3>
<p class="has-line-data" data-line-start="35" data-line-end="36">Para criação do usuário, será feita uma requisição POST em:</p>
<pre><code class="has-line-data" data-line-start="37" data-line-end="39" class="language-sh">localhost:<span class="hljs-number">3000</span>/clientes/cadastrar 
</code></pre>
<p class="has-line-data" data-line-start="39" data-line-end="40">Nessa requisição será informado, no corpo da requisição, o nome, email e senha, conforme exemplo abaixo:</p>
<p class="has-line-data" data-line-start="41" data-line-end="42"><a href="https://nodesource.com/products/nsolid"><img src="https://i.ibb.co/crywdQs/req-Cadastro.jpg" alt="N|Solid"></a></p>
<h3 class="code-line" data-line-start=43 data-line-end=44 ><a id="2__Autenticao_de_usurio_43"></a>2 - Autenticação de usuário</h3>

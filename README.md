<p class="has-line-data" data-line-start="0" data-line-end="1"><a href="https://nodesource.com/products/nsolid"><img src="https://cldup.com/dTxpPi9lDf.thumb.png" alt="N|Solid"></a></p>
<h1 class="code-line" data-line-start=2 data-line-end=3 ><a id="Desafio_Luizalabs__NodeJS_2"></a>Desafio Luizalabs - NodeJS</h1>
<h3 class="code-line" data-line-start=4 data-line-end=5 ><a id="Sobre_o_desafio_4"></a>Sobre o desafio</h3>
<p class="has-line-data" data-line-start="7" data-line-end="8">Foi criada uma aplicação, atendendo a determinados requisitos, para avaliação no processo seletivo para o quadro de Desenvolvedores NodeJS do Luizalabs.</p>
<h3 class="code-line" data-line-start=10 data-line-end=11 ><a id="Sobre_o_cdigo_da_aplicao_10"></a>Sobre o código da aplicação</h3>
<p class="has-line-data" data-line-start="12" data-line-end="13">O código é totalmente aberto, de uso público e livre para modificações.</p>
<h4 class="code-line" data-line-start=14 data-line-end=15 ><a id="No_desenvolvimento_da_aplicao_foi_utilizado_14"></a>No desenvolvimento da aplicação foi utilizado:</h4>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">NodeJS</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">Express</li>
<li class="has-line-data" data-line-start="18" data-line-end="19">Mongoose</li>
<li class="has-line-data" data-line-start="19" data-line-end="20">NodeJS</li>
<li class="has-line-data" data-line-start="20" data-line-end="21">npm - bcrypt (para criptografia de senha)</li>
<li class="has-line-data" data-line-start="21" data-line-end="22">JWT - JSON Web Token (para gerar token de autenticação)</li>
<li class="has-line-data" data-line-start="22" data-line-end="23">body-parser (conversão do body da requisição para o formato JSON)</li>
<li class="has-line-data" data-line-start="23" data-line-end="25">Morgan (para exibição das requisições no servidor HTTP)</li>
</ul>
<h1 class="code-line" data-line-start=25 data-line-end=26 ><a id="Funcionalidades_25"></a>Funcionalidades</h1>
<p class="has-line-data" data-line-start="27" data-line-end="30">A API permite que o usuário faça um CRUD de cadastro de clientes e adicione, consulte e exclua produtos à sua lista de favoritos em sua instância. As operações de produtos favoritos é protegida por autenticação. Logo, é necessário que o usuário crie uma conta e faça a autenticação para realizar essas operações.<br>
Esse tutorial orienta sobre as funcionalidades da API utilizando o Postman.<br>
Para subir a aplicação abra o prompt (cmd) ou o terminal de sua preferência, aponte para a pasta onde o projeto está e execute o comando <strong>nodemon server.js</strong>.</p>
<h3 class="code-line" data-line-start=31 data-line-end=32 ><a id="1__Criao_de_usurio_31"></a>1 - Criação de usuário</h3>
<p class="has-line-data" data-line-start="33" data-line-end="34">Para criação do usuário, será feita uma requisição POST em:</p>
<pre><code class="has-line-data" data-line-start="35" data-line-end="37" class="language-sh">localhost:<span class="hljs-number">3000</span>/clientes/cadastrar 
</code></pre>
<p class="has-line-data" data-line-start="37" data-line-end="38">Nessa requisição será informado, no corpo da requisição, o nome, email e senha, conforme exemplo abaixo:</p>
<p class="has-line-data" data-line-start="39" data-line-end="40"><a href="https://nodesource.com/products/nsolid"><img src="https://i.ibb.co/crywdQs/req-Cadastro.jpg" alt="N|Solid"></a></p>
<h3 class="code-line" data-line-start=41 data-line-end=42 ><a id="2__Autenticao_de_usurio_41"></a>2 - Autenticação de usuário</h3>
<p class="has-line-data" data-line-start="43" data-line-end="44">Para criação do usuário, será feita uma requisição POST em:</p>
<pre><code class="has-line-data" data-line-start="45" data-line-end="47" class="language-sh">localhost:<span class="hljs-number">3000</span>/clientes/autenticar
</code></pre>
<p class="has-line-data" data-line-start="47" data-line-end="48">Nessa requisição será informado, no corpo da requisição, o nome, email e senha <strong>cadastrados anteriormente</strong>, conforme exemplo abaixo. Essa autenticação irá gerar um token e um ID que serão utilizados posteriormente para as operações na lista de produtos.</p>
<p class="has-line-data" data-line-start="49" data-line-end="50"><a href="https://nodesource.com/products/nsolid"><img src="https://i.ibb.co/fN3Y9G5/aut-Usuario.jpg" alt="N|Solid"></a></p>
<h3 class="code-line" data-line-start=51 data-line-end=52 ><a id="3__Incluso_de_produtos_na_lista_de_favoritos_51"></a>3 - Inclusão de produtos na lista de favoritos</h3>
<p class="has-line-data" data-line-start="53" data-line-end="54">Para a inclusão de produtos, será feita uma requisição POST em:</p>
<pre><code class="has-line-data" data-line-start="55" data-line-end="57" class="language-sh">localhost:<span class="hljs-number">3000</span>/produtos/adicionar
</code></pre>
<p class="has-line-data" data-line-start="57" data-line-end="58">Nessa requisição será informado, no corpo da requisição, o reviewScore (OPCIONAL), price, image, brand, id e title.</p>
<p class="has-line-data" data-line-start="59" data-line-end="60"><a href="https://nodesource.com/products/nsolid"><img src="https://i.ibb.co/5jfjT3k/cadprod.jpg" alt="N|Solid"></a></p>
<h3 class="code-line" data-line-start=61 data-line-end=62 ><a id="4__Consultando_a_lista_produtos_favoritos_do_usurio_61"></a>4 - Consultando a lista produtos favoritos do usuário</h3>
<p class="has-line-data" data-line-start="63" data-line-end="64">Para a inclusão de produtos, será feita uma requisição GET em:</p>
<pre><code class="has-line-data" data-line-start="65" data-line-end="67" class="language-sh">localhost:<span class="hljs-number">3000</span>/produtos
</code></pre>
<p class="has-line-data" data-line-start="67" data-line-end="68">É importante ressaltar que essa consulta é baseada no usuário que gerou a instância, ou seja, no usuário logado e que, portanto, é necessário que seja passado o token gerado anteriormente no header, conforme exemplo abaixo:</p>
<p class="has-line-data" data-line-start="69" data-line-end="70"><a href="https://nodesource.com/products/nsolid"><img src="https://i.ibb.co/hdt7XXR/req-Header.jpg" alt="N|Solid"></a></p>
<p class="has-line-data" data-line-start="71" data-line-end="72">E então a consulta será realizada:</p>
<p class="has-line-data" data-line-start="73" data-line-end="74"><a href="https://nodesource.com/products/nsolid"><img src="https://i.ibb.co/wgCCqNH/consulta-Lista.jpg" alt="N|Solid"></a></p>
<h3 class="code-line" data-line-start=78 data-line-end=79 ><a id="Contato_78"></a>Contato</h3>
<p class="has-line-data" data-line-start="80" data-line-end="82">E-mail: <a href="mailto:maciel.eds@gmail.com">maciel.eds@gmail.com</a><br>
Linkedin: <a href="https://www.linkedin.com/in/edison-maciel-6a83a14a/">https://www.linkedin.com/in/edison-maciel-6a83a14a/</a></p>

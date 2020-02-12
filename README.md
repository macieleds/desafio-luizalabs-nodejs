<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Desafio_Luizalabs__NodeJS_0"></a>Desafio Luizalabs - NodeJS</h1>
<h3 class="code-line" data-line-start=2 data-line-end=3 ><a id="Sobre_o_desafio_2"></a>Sobre o desafio</h3>
<p class="has-line-data" data-line-start="5" data-line-end="6">Desenvolvimento de uma API Rest para avaliação no processo seletivo para o quadro de Desenvolvedores NodeJS do Luizalabs.</p>
<h3 class="code-line" data-line-start=8 data-line-end=9 ><a id="Sobre_o_cdigo_da_aplicao_8"></a>Sobre o código da aplicação</h3>
<p class="has-line-data" data-line-start="10" data-line-end="11">O código é totalmente aberto, de uso público e livre para modificações.</p>
<h4 class="code-line" data-line-start=12 data-line-end=13 ><a id="No_desenvolvimento_da_aplicao_foi_utilizado_12"></a>No desenvolvimento da aplicação foi utilizado:</h4>
<ul>
<li class="has-line-data" data-line-start="14" data-line-end="15">NodeJS</li>
<li class="has-line-data" data-line-start="15" data-line-end="16">Express</li>
<li class="has-line-data" data-line-start="16" data-line-end="17">Mongoose (MongoDB)</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">NodeJS</li>
<li class="has-line-data" data-line-start="18" data-line-end="19">npm - bcrypt (para criptografia de senha)</li>
<li class="has-line-data" data-line-start="19" data-line-end="20">JWT - JSON Web Token (para gerar token de autenticação)</li>
<li class="has-line-data" data-line-start="20" data-line-end="21">body-parser (conversão do body da requisição para o formato JSON)</li>
<li class="has-line-data" data-line-start="21" data-line-end="23">Morgan (para exibição das requisições no servidor HTTP)</li>
</ul>
<h1 class="code-line" data-line-start=23 data-line-end=24 ><a id="Funcionalidades_23"></a>Funcionalidades</h1>
<p class="has-line-data" data-line-start="25" data-line-end="28">A API permite que o usuário faça um CRUD de cadastro de clientes e adicione, consulte e exclua produtos à sua lista de favoritos em sua instância. As operações de produtos favoritos é protegida por autenticação. Logo, é necessário que o usuário crie uma conta e faça a autenticação para realizar essas operações.<br>
Esse tutorial orienta sobre as funcionalidades da API utilizando o Postman.<br>
Para subir a aplicação abra o prompt (cmd) ou o terminal de sua preferência, aponte para a pasta onde o projeto está e execute o comando <strong>"nodemon server.js"</strong> (sem as aspas).</p>
<h3 class="code-line" data-line-start=29 data-line-end=30 ><a id="1__Criao_de_usurio_29"></a>1 - Criação de usuário</h3>
<p class="has-line-data" data-line-start="31" data-line-end="32">Para criação do usuário, será feita uma requisição POST em:</p>
<pre><code class="has-line-data" data-line-start="33" data-line-end="35" class="language-sh">localhost:<span class="hljs-number">3000</span>/clientes/cadastrar 
</code></pre>
<p class="has-line-data" data-line-start="35" data-line-end="36">Nessa requisição serão informados, no corpo da requisição, o nome, email e senha, conforme exemplo abaixo:</p>
<p class="has-line-data" data-line-start="37" data-line-end="38"><img src="https://i.ibb.co/crywdQs/req-Cadastro.jpg" alt="N|Solid"></p>
<h3 class="code-line" data-line-start=39 data-line-end=40 ><a id="2__Autenticao_de_usurio_39"></a>2 - Autenticação de usuário</h3>
<p class="has-line-data" data-line-start="41" data-line-end="42">Para criação do usuário, será feita uma requisição POST em:</p>
<pre><code class="has-line-data" data-line-start="43" data-line-end="45" class="language-sh">localhost:<span class="hljs-number">3000</span>/clientes/autenticar
</code></pre>
<p class="has-line-data" data-line-start="45" data-line-end="46">Nessa requisição serão informados, no corpo da requisição, o nome, email e senha <strong>cadastrados anteriormente</strong>, conforme exemplo abaixo. O password será criptografado e serão gerados um token e um ID que serão utilizados posteriormente para as operações de consulta e exclusão de usuário e na lista de produtos.</p>
<p class="has-line-data" data-line-start="47" data-line-end="48"><img src="https://i.ibb.co/fN3Y9G5/aut-Usuario.jpg" alt="N|Solid"></p>
<h3 class="code-line" data-line-start=49 data-line-end=50 ><a id="3__Consulta_de_usurio_49"></a>3 - Consulta de usuário</h3>
<p class="has-line-data" data-line-start="51" data-line-end="52">Para a realização da consulta do usuário, será feita uma requisição GET em:</p>
<pre><code class="has-line-data" data-line-start="53" data-line-end="55" class="language-sh">localhost:<span class="hljs-number">3000</span>/clientes/{_id}
</code></pre>
<p class="has-line-data" data-line-start="55" data-line-end="56">Nessa requisição será passado o _id gerado na autenticação do usuário.</p>
<p class="has-line-data" data-line-start="57" data-line-end="58"><img src="https://i.ibb.co/t48L66G/cons-Usuario.jpg" alt="N|Solid"></p>
<h3 class="code-line" data-line-start=59 data-line-end=60 ><a id="4__Alterao_de_dados_do_usurio_59"></a>4 - Alteração de dados do usuário</h3>
<p class="has-line-data" data-line-start="61" data-line-end="62">Para a realização da alteração de dados do usuário, será feita uma requisição PUT em:</p>
<pre><code class="has-line-data" data-line-start="63" data-line-end="65" class="language-sh">localhost:<span class="hljs-number">3000</span>/clientes/{_id}
</code></pre>
<p class="has-line-data" data-line-start="65" data-line-end="67">Nessa requisição será passado o _id gerado na autenticação do usuário.<br>
No corpo da requisição deverão ser passados os atributos nome, email e password e, em seus campos, os novos valores.</p>
<p class="has-line-data" data-line-start="69" data-line-end="70"><img src="https://i.ibb.co/LhfjBJT/alt-Usuario.jpg" alt="N|Solid"></p>
<h3 class="code-line" data-line-start=59 data-line-end=60 ><a id="4__Incluso_de_produtos_na_lista_de_favoritos_59"></a>5 - Inclusão de produtos na lista de favoritos</h3>
<p class="has-line-data" data-line-start="61" data-line-end="62">Para a inclusão de produtos, será feita uma requisição POST em:</p>
<pre><code class="has-line-data" data-line-start="63" data-line-end="65" class="language-sh">localhost:<span class="hljs-number">3000</span>/produtos/adicionar
</code></pre>
<p class="has-line-data" data-line-start="65" data-line-end="66">Nessa requisição serão informados, no corpo da requisição, o reviewScore (OPCIONAL), price, image, brand, id e title.</p>
<p class="has-line-data" data-line-start="67" data-line-end="68"><img src="https://i.ibb.co/5jfjT3k/cadprod.jpg" alt="N|Solid"></p>
<h3 class="code-line" data-line-start=69 data-line-end=70 ><a id="5__Consultando_a_lista_produtos_favoritos_do_usurio_69"></a>6 - Consultando a lista produtos favoritos do usuário</h3>
<p class="has-line-data" data-line-start="71" data-line-end="72">Para a inclusão de produtos, será feita uma requisição GET em:</p>
<pre><code class="has-line-data" data-line-start="73" data-line-end="75" class="language-sh">localhost:<span class="hljs-number">3000</span>/produtos
</code></pre>
<p class="has-line-data" data-line-start="75" data-line-end="76">É importante ressaltar que essa consulta é baseada no usuário que gerou a instância, ou seja, no usuário logado e que, portanto, é necessário que seja passado o token gerado anteriormente no header, conforme exemplo abaixo:</p>
<p class="has-line-data" data-line-start="77" data-line-end="78"><img src="https://i.ibb.co/hdt7XXR/req-Header.jpg" alt="N|Solid"></p>
<p class="has-line-data" data-line-start="79" data-line-end="80">E então a consulta será realizada:</p>
<p class="has-line-data" data-line-start="81" data-line-end="82"><img src="https://i.ibb.co/wgCCqNH/consulta-Lista.jpg" alt="N|Solid"></p>
<h3 class="code-line" data-line-start=86 data-line-end=87 ><a id="Contato_86"></a>Contato</h3>
<p class="has-line-data" data-line-start="88" data-line-end="90">E-mail: <a href="mailto:maciel.eds@gmail.com">maciel.eds@gmail.com</a><br>
Linkedin: <a href="https://www.linkedin.com/in/edison-maciel-6a83a14a/">https://www.linkedin.com/in/edison-maciel-6a83a14a/</a></p>

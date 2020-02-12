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
<p class="has-line-data" data-line-start="61" data-line-end="62">| Dropbox | <a href="https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md">plugins/dropbox/README.md</a> |</p>
<p class="has-line-data" data-line-start="65" data-line-end="66">You can also:</p>
<ul>
<li class="has-line-data" data-line-start="66" data-line-end="67">Import and save files from GitHub, Dropbox, Google Drive and One Drive</li>
<li class="has-line-data" data-line-start="67" data-line-end="68">Drag and drop markdown and HTML files into Dillinger</li>
<li class="has-line-data" data-line-start="68" data-line-end="70">Export documents as Markdown, HTML and PDF</li>
</ul>
<p class="has-line-data" data-line-start="70" data-line-end="71">Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As <a href="http://daringfireball.net">John Gruber</a> writes on the <a href="http://daringfireball.net/projects/markdown/">Markdown site</a></p>
<blockquote>
<p class="has-line-data" data-line-start="72" data-line-end="79">The overriding design goal for Markdown’s<br>
formatting syntax is to make it as readable<br>
as possible. The idea is that a<br>
Markdown-formatted document should be<br>
publishable as-is, as plain text, without<br>
looking like it’s been marked up with tags<br>
or formatting instructions.</p>
</blockquote>
<p class="has-line-data" data-line-start="80" data-line-end="81">This text you see here is <em>actually</em> written in Markdown! To get a feel for Markdown’s syntax, type some text into the left window and watch the results in the right.</p>
<h3 class="code-line" data-line-start=82 data-line-end=83 ><a id="Tech_82"></a>Tech</h3>
<p class="has-line-data" data-line-start="84" data-line-end="85">Dillinger uses a number of open source projects to work properly:</p>
<ul>
<li class="has-line-data" data-line-start="86" data-line-end="87"><a href="http://angularjs.org">AngularJS</a> - HTML enhanced for web apps!</li>
<li class="has-line-data" data-line-start="87" data-line-end="88"><a href="http://ace.ajax.org">Ace Editor</a> - awesome web-based text editor</li>
<li class="has-line-data" data-line-start="88" data-line-end="89"><a href="https://github.com/markdown-it/markdown-it">markdown-it</a> - Markdown parser done right. Fast and easy to extend.</li>
<li class="has-line-data" data-line-start="89" data-line-end="90"><a href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a> - great UI boilerplate for modern web apps</li>
<li class="has-line-data" data-line-start="90" data-line-end="91"><a href="http://nodejs.org">node.js</a> - evented I/O for the backend</li>
<li class="has-line-data" data-line-start="91" data-line-end="92"><a href="http://expressjs.com">Express</a> - fast node.js network app framework <a href="http://twitter.com/tjholowaychuk">@tjholowaychuk</a></li>
<li class="has-line-data" data-line-start="92" data-line-end="93"><a href="http://gulpjs.com">Gulp</a> - the streaming build system</li>
<li class="has-line-data" data-line-start="93" data-line-end="94"><a href="https://breakdance.github.io/breakdance/">Breakdance</a> - HTML to Markdown converter</li>
<li class="has-line-data" data-line-start="94" data-line-end="96"><a href="http://jquery.com">jQuery</a> - duh</li>
</ul>
<p class="has-line-data" data-line-start="96" data-line-end="98">And of course Dillinger itself is open source with a <a href="https://github.com/joemccann/dillinger">public repository</a><br>
on GitHub.</p>
<h3 class="code-line" data-line-start=99 data-line-end=100 ><a id="Installation_99"></a>Installation</h3>
<p class="has-line-data" data-line-start="101" data-line-end="102">Dillinger requires <a href="https://nodejs.org/">Node.js</a> v4+ to run.</p>
<p class="has-line-data" data-line-start="103" data-line-end="104">Install the dependencies and devDependencies and start the server.</p>
<pre><code class="has-line-data" data-line-start="106" data-line-end="110" class="language-sh">$ <span class="hljs-built_in">cd</span> dillinger
$ npm install <span class="hljs-operator">-d</span>
$ node app
</code></pre>
<p class="has-line-data" data-line-start="111" data-line-end="112">For production environments…</p>
<pre><code class="has-line-data" data-line-start="114" data-line-end="117" class="language-sh">$ npm install --production
$ NODE_ENV=production node app
</code></pre>
<h3 class="code-line" data-line-start=118 data-line-end=119 ><a id="Plugins_118"></a>Plugins</h3>
<p class="has-line-data" data-line-start="120" data-line-end="121">Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.</p>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Plugin</th>
<th>README</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dropbox</td>
<td><a href="https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md">plugins/dropbox/README.md</a></td>
</tr>
<tr>
<td>GitHub</td>
<td><a href="https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md">plugins/github/README.md</a></td>
</tr>
<tr>
<td>Google Drive</td>
<td><a href="https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md">plugins/googledrive/README.md</a></td>
</tr>
<tr>
<td>OneDrive</td>
<td><a href="https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md">plugins/onedrive/README.md</a></td>
</tr>
<tr>
<td>Medium</td>
<td><a href="https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md">plugins/medium/README.md</a></td>
</tr>
<tr>
<td>Google Analytics</td>
<td><a href="https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md">plugins/googleanalytics/README.md</a></td>
</tr>
</tbody>
</table>
<h3 class="code-line" data-line-start=132 data-line-end=133 ><a id="Development_132"></a>Development</h3>
<p class="has-line-data" data-line-start="134" data-line-end="135">Want to contribute? Great!</p>
<p class="has-line-data" data-line-start="136" data-line-end="138">Dillinger uses Gulp + Webpack for fast developing.<br>
Make a change in your file and instantaneously see your updates!</p>
<p class="has-line-data" data-line-start="139" data-line-end="140">Open your favorite Terminal and run these commands.</p>
<p class="has-line-data" data-line-start="141" data-line-end="142">First Tab:</p>
<pre><code class="has-line-data" data-line-start="143" data-line-end="145" class="language-sh">$ node app
</code></pre>
<p class="has-line-data" data-line-start="146" data-line-end="147">Second Tab:</p>
<pre><code class="has-line-data" data-line-start="148" data-line-end="150" class="language-sh">$ gulp watch
</code></pre>
<p class="has-line-data" data-line-start="151" data-line-end="152">(optional) Third:</p>
<pre><code class="has-line-data" data-line-start="153" data-line-end="155" class="language-sh">$ karma <span class="hljs-built_in">test</span>
</code></pre>
<h4 class="code-line" data-line-start=155 data-line-end=156 ><a id="Building_for_source_155"></a>Building for source</h4>
<p class="has-line-data" data-line-start="156" data-line-end="157">For production release:</p>
<pre><code class="has-line-data" data-line-start="158" data-line-end="160" class="language-sh">$ gulp build --prod
</code></pre>
<p class="has-line-data" data-line-start="160" data-line-end="161">Generating pre-built zip archives for distribution:</p>
<pre><code class="has-line-data" data-line-start="162" data-line-end="164" class="language-sh">$ gulp build dist --prod
</code></pre>
<h3 class="code-line" data-line-start=164 data-line-end=165 ><a id="Docker_164"></a>Docker</h3>
<p class="has-line-data" data-line-start="165" data-line-end="166">Dillinger is very easy to install and deploy in a Docker container.</p>
<p class="has-line-data" data-line-start="167" data-line-end="168">By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.</p>
<pre><code class="has-line-data" data-line-start="170" data-line-end="173" class="language-sh"><span class="hljs-built_in">cd</span> dillinger
docker build -t joemccann/dillinger:<span class="hljs-variable">${package.json.version}</span> .
</code></pre>
<p class="has-line-data" data-line-start="173" data-line-end="174">This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out <code>${package.json.version}</code> with the actual version of Dillinger.</p>
<p class="has-line-data" data-line-start="175" data-line-end="176">Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):</p>
<pre><code class="has-line-data" data-line-start="178" data-line-end="180" class="language-sh">docker run <span class="hljs-operator">-d</span> -p <span class="hljs-number">8000</span>:<span class="hljs-number">8080</span> --restart=<span class="hljs-string">"always"</span> &lt;youruser&gt;/dillinger:<span class="hljs-variable">${package.json.version}</span>
</code></pre>
<p class="has-line-data" data-line-start="181" data-line-end="182">Verify the deployment by navigating to your server address in your preferred browser.</p>
<pre><code class="has-line-data" data-line-start="184" data-line-end="186" class="language-sh"><span class="hljs-number">127.0</span>.<span class="hljs-number">0.1</span>:<span class="hljs-number">8000</span>
</code></pre>
<h4 class="code-line" data-line-start=187 data-line-end=188 ><a id="Kubernetes__Google_Cloud_187"></a>Kubernetes + Google Cloud</h4>
<p class="has-line-data" data-line-start="189" data-line-end="190">See <a href="https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md">KUBERNETES.md</a></p>
<h3 class="code-line" data-line-start=192 data-line-end=193 ><a id="Todos_192"></a>Todos</h3>
<ul>
<li class="has-line-data" data-line-start="194" data-line-end="195">Write MORE Tests</li>
<li class="has-line-data" data-line-start="195" data-line-end="197">Add Night Mode</li>
</ul>
<h2 class="code-line" data-line-start=197 data-line-end=199 ><a id="License_197"></a>License</h2>
<p class="has-line-data" data-line-start="200" data-line-end="201">MIT</p>
<p class="has-line-data" data-line-start="203" data-line-end="204"><strong>Free Software, Hell Yeah!</strong></p>

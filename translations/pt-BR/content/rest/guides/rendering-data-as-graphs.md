---
title: Representar dados como gráficos
intro: Aprenda a visualizar as linguagens de programação do seu repositório usando a biblioteca D3.js e o Ruby Octokit.
redirect_from:
  - /guides/rendering-data-as-graphs/
  - /v3/guides/rendering-data-as-graphs
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
 


Neste guia, vamos usar a API para obter informações sobre repositórios dos quais somos proprietários e as linguagens de programação que as compõem. Em seguida, vamos visualizar essas informações de algumas formas diferentes usando a biblioteca [D3.js][D3.js]. Para interagir com a API de {% data variables.product.product_name %}, vamos usar a excelente biblioteca do Ruby, [Octokit][Octokit].

Caso você ainda não o tenha feito, você deve ler o guia ["Princípios básicos da autentifcação"][basics-of-authentication] antes de iniciar este exemplo. Você pode encontrar o código-fonte completo para este projeto no repositório de [platform-samples][platform samples].

Vamos começar imediatamente!

### Configurar um aplicativo OAuth

Primeiro, [registra um novo aplicativo ][new oauth application] no {% data variables.product.product_name %}. Define as URLs principais e a chamada de retorno para `http://localhost:4567/`. Assim como fizemos[anteriormente][basics-of-authentication], vamos gerenciar a autenticação da API implementando um Rack middleware usando [sinatra-auth-github][sinatra auth github]:

``` ruby
require 'sinatra/auth/github'

module Example
  class MyGraphApp < Sinatra::Base
    # !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
    # Instead, set and test environment variables, like below
    # if ENV['GITHUB_CLIENT_ID'] && ENV['GITHUB_CLIENT_SECRET']
    #  CLIENT_ID        = ENV['GITHUB_CLIENT_ID']
    #  CLIENT_SECRET    = ENV['GITHUB_CLIENT_SECRET']
    # end

    CLIENT_ID = ENV['GH_GRAPH_CLIENT_ID']
    CLIENT_SECRET = ENV['GH_GRAPH_SECRET_ID']

    enable :sessions

    set :github_options, {
      :scopes    => "repo",
      :secret    => CLIENT_SECRET,
      :client_id => CLIENT_ID,
      :callback_url => "/"
    }

    register Sinatra::Auth::Github

    get '/' do
      if !authenticated?
        authenticate!
      else
        access_token = github_user["token"]
      end
    end
  end
end
```

Configure um arquivo _config.ru_ semelhante ao exemplo anterior:

``` ruby
ENV['RACK_ENV'] ||= 'development'
require "rubygems"
require "bundler/setup"

require File.expand_path(File.join(File.dirname(__FILE__), 'server'))

run Example::MyGraphApp
```

### Buscar informações do repositório

Dessa vez, para falar com a API {% data variables.product.product_name %}, vamos usar a [a biblioteca do Ruby, Octokit][Octokit]. Isso é muito mais fácil do que fazer diretamente um monte de chamadas de REST. Além disso, o Octokit foi desenvolvido por um GitHubber e é mantido ativamente, para que você saiba que vai funcionar.

É fácil a autenticação com a API através do Octokit. Basta passar seu login e token para o `Octokit::Client` do cliente:

``` ruby
if !authenticated?
  authenticate!
else
  octokit_client = Octokit::Client.new(:login => github_user.login, :oauth_token => github_user.token)
end
```

Vamos fazer algo interessante com os dados sobre nossos repositórios. Vamos ver as diferentes linguagens de programação que eles usam e contar quais são usadas com maior frequência. Para fazer isso, primeiro precisaremos de uma lista dos nossos repositórios na API. Com o Octokit, será algo parecido com isso:

``` ruby
repos = client.repositories
```

Em seguida, vamos iterar sobre cada repositório e contar a linguagem que {% data variables.product.product_name %} associa a ele:

``` ruby
language_obj = {}
repos.each do |repo|
  # sometimes language can be nil
  if repo.language
    if !language_obj[repo.language]
      language_obj[repo.language] = 1
    else
      language_obj[repo.language] += 1
    end
  end
end

languages.to_s
```

Ao reiniciar seu servidor, sua página web deve exibir algo que se parece com isso:

``` ruby
{"JavaScript"=>13, "PHP"=>1, "Perl"=>1, "CoffeeScript"=>2, "Python"=>1, "Java"=>3, "Ruby"=>3, "Go"=>1, "C++"=>1}
```

Até agora, tudo bem, mas isso não é não muito intuitivo para uma pessoa. Uma visualização seria excelente para nos ajudar a entender como as contagens de linguagens são distribuídas. Vamos alimentar nossas contagens em D3 para obter um gráfico de barras que represente a popularidade dos idiomas que usamos.

### Visualizar contagens de linguagem

D3.js, ou apenas D3, é uma biblioteca abrangente para criar muitos tipos de gráficos, gráficos e visualizações interativas. Usar D3 em detalhes está fora do âmbito deste guia, mas para um bom artigo introdutório consulte ["D3 para mortais"][D3 mortals].

D3 é uma biblioteca JavaScript, e gosta de trabalhar com dados como arrays. Então, vamos converter o nosso hash do Ruby em um array de JSON para uso por JavaScript no navegador.

``` ruby
languages = []
language_obj.each do |lang, count|
  languages.push :language => lang, :count => count
end

erb :lang_freq, :locals => { :languages => languages.to_json}
```

Estamos simplesmente iterando sobre cada par chave-valor no nosso objeto e empurrando-os para um novo array. A razão pela qual não fizemos isso anteriormente foi porque não queríamos iterar sobre o nosso objeto `language_obj` enquanto o estávamos criando.

Agora, _lang_freq.erb_ vai precisar de um pouco de JavaScript para ajudar a interpretação de um gráfico de barras. Por enquanto, você pode simplesmente usar o código fornecido aqui e consultar os recursos vinculados acima se quiser saber mais sobre como o D3 funciona:

``` html
<!DOCTYPE html>
<meta charset="utf-8">
<html>
  <head>
    <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.0.1/d3.v3.min.js"></script>
    <style>
    svg {
      padding: 20px;
    }
    rect {
      fill: #2d578b
    }
    text {
      fill: white;
    }
    text.yAxis {
      font-size: 12px;
      font-family: Helvetica, sans-serif;
      fill: black;
    }
    </style>
  </head>
  <body>
    <p>Check this sweet data out:</p>
    <div id="lang_freq"></div>

  </body>
  <script>
    var data = <%= languages %>;

    var barWidth = 40;
    var width = (barWidth + 10) * data.length;
    var height = 300;

    var x = d3.scale.linear().domain([0, data.length]).range([0, width]);
    var y = d3.scale.linear().domain([0, d3.max(data, function(datum) { return datum.count; })]).
      rangeRound([0, height]);

    // add the canvas to the DOM
    var languageBars = d3.select("#lang_freq").
      append("svg:svg").
      attr("width", width).
      attr("height", height);

    languageBars.selectAll("rect").
      data(data).
      enter().
      append("svg:rect").
      attr("x", function(datum, index) { return x(index); }).
      attr("y", function(datum) { return height - y(datum.count); }).
      attr("height", function(datum) { return y(datum.count); }).
      attr("width", barWidth);

    languageBars.selectAll("text").
      data(data).
      enter().
      append("svg:text").
      attr("x", function(datum, index) { return x(index) + barWidth; }).
      attr("y", function(datum) { return height - y(datum.count); }).
      attr("dx", -barWidth/2).
      attr("dy", "1.2em").
      attr("text-anchor", "middle").
      text(function(datum) { return datum.count;});

    languageBars.selectAll("text.yAxis").
      data(data).
      enter().append("svg:text").
      attr("x", function(datum, index) { return x(index) + barWidth; }).
      attr("y", height).
      attr("dx", -barWidth/2).
      attr("text-anchor", "middle").
      text(function(datum) { return datum.language;}).
      attr("transform", "translate(0, 18)").
      attr("class", "yAxis");
  </script>
</html>
```

Ufa! Novamente, não se preocupe com o que a maior parte deste código está fazendo. Aqui, a parte relevante é uma linha na parte superior--`var data = <%= languages %>;`--que indica que estamos passando o nosso array de `linguagens` criado previamente para o ERB para manipulação.

Como o guia "D3 para mortais" sugere, este não é necessariamente a melhor forma de utilizar o D3. No entanto, serve para ilustrar como você pode usar a biblioteca, junto com Octokit, para fazer algumas coisas realmente incríveis.

### Combinar diferentes chamadas de API

Agora é hora de fazer uma confissão: o atributo da `linguagem` dentro dos repositórios identifica apenas a linguagem "primária" definida. Isso significa que se você tiver um repositório que combina várias linguagens. aquela que tiver mais bytes de código será considerada a linguagem primária.

Vamos combinar algumas chamadas de API para obter uma _verdadeira_ representação de qual linguagem tem o maior número de bytes escritos em todo o nosso código. Um [treemap][D3 treemap] deve ser uma ótima forma de visualizar os tamanhos das nossas linguagens de codificação usadas, em vez de simplesmente contar. Precisamos construir um array de objetos que se pareçam com isto:

``` json
[ { "name": "language1", "size": 100},
  { "name": "language2", "size": 23}
  ...
]
```

Since we already have a list of repositories above, let's inspect each one, and call [the language listing API method][language API]:

``` ruby
repos.each do |repo|
  repo_name = repo.name
  repo_langs = octokit_client.languages("#{github_user.login}/#{repo_name}")
end
```

A partir daí, adicionaremos cumulativamente cada linguagem encontrado a uma "lista-mestre":

``` ruby
repo_langs.each do |lang, count|
  if !language_obj[lang]
    language_obj[lang] = count
  else
    language_obj[lang] += count
  end
end
```

Em seguida vamos formatar o conteúdo em uma estrutura que o D3 entende:

``` ruby
language_obj.each do |lang, count|
  language_byte_count.push :name => "#{lang} (#{count})", :count => count
end

# some mandatory formatting for D3
language_bytes = [ :name => "language_bytes", :elements => language_byte_count]
```

(For more information on D3 tree map magic, check out [this simple tutorial][language API].)

Para concluir, passamos esta informação JSON para o mesmo modelo de ERB:

``` ruby
erb :lang_freq, :locals => { :languages => languages.to_json, :language_byte_count => language_bytes.to_json}
```

Conforme fizemos anteriormente, aqui está um monte de JavaScript que você pode soltar diretamente no seu modelo:

``` html
<div id="byte_freq"></div>
<script>
  var language_bytes = <%= language_byte_count %>
  var childrenFunction = function(d){return d.elements};
  var sizeFunction = function(d){return d.count;};
  var colorFunction = function(d){return Math.floor(Math.random()*20)};
  var nameFunction = function(d){return d.name;};

  var color = d3.scale.linear()
              .domain([0,10,15,20])
              .range(["grey","green","yellow","red"]);

  drawTreemap(5000, 2000, '#byte_freq', language_bytes, childrenFunction, nameFunction, sizeFunction, colorFunction, color);

  function drawTreemap(height,width,elementSelector,language_bytes,childrenFunction,nameFunction,sizeFunction,colorFunction,colorScale){

      var treemap = d3.layout.treemap()
          .children(childrenFunction)
          .size([width,height])
          .value(sizeFunction);

      var div = d3.select(elementSelector)
          .append("div")
          .style("position","relative")
          .style("width",width + "px")
          .style("height",height + "px");

      div.data(language_bytes).selectAll("div")
          .data(function(d){return treemap.nodes(d);})
          .enter()
          .append("div")
          .attr("class","cell")
          .style("background",function(d){ return colorScale(colorFunction(d));})
          .call(cell)
          .text(nameFunction);
  }

  function cell(){
      this
          .style("left",function(d){return d.x + "px";})
          .style("top",function(d){return d.y + "px";})
          .style("width",function(d){return d.dx - 1 + "px";})
          .style("height",function(d){return d.dy - 1 + "px";});
  }
</script>
```

Et voila! São lindos retângulos que contém suas linguagens de repositório, com proporções relativas de que são fáceis de ver rapidamente. Talvez você precise ajustar a altura e a largura do diagrama da sua árvore, passado como os dois primeiros argumentos para `drawTreemap` acima, para obter todas as informações para serem exibidas corretamente.


[D3.js]: http://d3js.org/
[basics-of-authentication]: /rest/guides/basics-of-authentication
[basics-of-authentication]: /rest/guides/basics-of-authentication
[sinatra auth github]: https://github.com/atmos/sinatra_auth_github
[Octokit]: https://github.com/octokit/octokit.rb
[Octokit]: https://github.com/octokit/octokit.rb
[D3 mortals]: http://www.recursion.org/d3-for-mere-mortals/
[D3 treemap]: http://bl.ocks.org/mbostock/4063582
[language API]: /rest/reference/repos#list-repository-languages
[language API]: /rest/reference/repos#list-repository-languages
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/rendering-data-as-graphs
[new oauth application]: https://github.com/settings/applications/new

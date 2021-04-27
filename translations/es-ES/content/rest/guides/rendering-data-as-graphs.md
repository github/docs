---
title: Representar los datos en gráficas
intro: Aprende a visualizar los lenguajes de programación de tu repositorio utilizando la biblioteca D3.js y el Octokit de Ruby.
redirect_from:
  - /guides/rendering-data-as-graphs/
  - /v3/guides/rendering-data-as-graphs
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---
 


En esta guía vamos a utilizar la API para obtener información acerca de los repositorios que nos pertenecen y de los lenguajes de programación que los componen. Luego, vamos a visualizar la información en un par de formas diferentes utilizando la librería [D3.js][D3.js]. Para interactuar con la API de {% data variables.product.product_name %}, estaremos utilizando la excelente biblioteca de Ruby, [Octokit][Octokit].

Si aún no lo has hecho, deberías leer la guía de ["Fundamentos de la Autenticación"][basics-of-authentication] antes de comenzar con este ejemplo. Puedes encontrar el código fuente completo para este proyecto en el repositorio [platform-samples][platform samples].

¡Comencemos de inmediato!

### Configurar una aplicación de OAuth

Primero, [registra una aplicación nueva][new oauth application] en {% data variables.product.product_name %}. Configura la URL principal y la de rellamado como `http://localhost:4567/`. Tal como lo hemos hecho [antes][basics-of-authentication], vamos a gestionar la autenticación para la API implementando un recurso intermedio de Rack utilizando [sinatra-auth-github][sinatra auth github]:

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

Configura un archivo similar de _config.ru_ como en el ejemplo previo:

``` ruby
ENV['RACK_ENV'] ||= 'development'
require "rubygems"
require "bundler/setup"

require File.expand_path(File.join(File.dirname(__FILE__), 'server'))

run Example::MyGraphApp
```

### Obtener la información del repositorio

En esta ocasión, para poder hablar con la API de {% data variables.product.product_name %}, vamos a utilizar la [Biblioteca de Ruby, Octokit][Octokit]. Esto es mucho más fácil que hacer un montón de llamadas de REST directamente. Además, un Githubber desarrolló Octokit, y se mantiene activamente, así que sabes que funcionará.

Autenticarse con la API a través de Octokit es fácil. Solo pasa tu información de inicio de sesión y tu token en el constructor `Octokit::Client`:

``` ruby
if !authenticated?
  authenticate!
else
  octokit_client = Octokit::Client.new(:login => github_user.login, :oauth_token => github_user.token)
end
```

Vamos a hacer algo interesante con los datos acerca de nuestros repositorios. Vamos a ver los diferentes lenguajes de programación que utilizan y a contar cuáles se utilizan más a menudo. Para hacerlo, primero necesitamos tomar una lista de nuestros repositorios desde la API. Con Octokit, esto se ve así:

``` ruby
repos = client.repositories
```

Después, vamos a iterar sobre cada repositorio y a contar los lenguajes con los que {% data variables.product.product_name %} los asocia:

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

Cuando reinicias tu servidor, tu página web debe mostrar más o menos esto:

``` ruby
{"JavaScript"=>13, "PHP"=>1, "Perl"=>1, "CoffeeScript"=>2, "Python"=>1, "Java"=>3, "Ruby"=>3, "Go"=>1, "C++"=>1}
```

Hasta ahora vamos bien, pero no se ve muy amigable para un humano. Sería genial poder tener algún tipo de visualización para entender cómo se distribuye este conteo de lenguajes. Vamos a alimentar a D3 con nuestros conteos para obtener una gráfica de barras clara que represente la popularidad de los lenguajes que utilizamos.

### Visualizar los conteos de los lenguajes

D3.js, o simplemente D3, es una biblioteca completa para crear muchos tipos de gráficos, tablas, y visualizaciones interactivas. El utilizarlo a detalle va más allá del alcance de esta guía, pero para ver un buen artículo introductorio al respecto, revisa ["D3 para mortales"][D3 mortals].

D3 es una biblioteca de JavaScript a la que le gusta trabajar con matrices de datos. Así que, vamos a convertir a nuestro hash de Ruby en una matriz de JSON para que JavaScript la utilice en el buscador.

``` ruby
languages = []
language_obj.each do |lang, count|
  languages.push :language => lang, :count => count
end

erb :lang_freq, :locals => { :languages => languages.to_json}
```

Simplemente estamos iterando sobre cada par de clave-valor en nuestro objeto y lo estamos cargando en una matriz nueva. La razón por la cual no lo hicimos antes es porque no queríamos iterar sobre nuestro objeto de `language_obj` mientras lo estábamos creando.

Ahora, _lang_freq.erb_ va a necesitar algo de JavaScript para apoyar a que se interprete una gráfica de barras. Por ahora, puedes simplemente utilizar el código que se te proporciona aquí y referirte a los recursos cuyo enlace se señala anteriormente si quieres aprender más sobre cómo funciona D3:

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

¡Uf! Nuevamente, no te preocupes de la mayoría de lo que está haciendo este código. La parte relevante es lo que está hasta arriba--`var data = <%= languages %>;`--lo cual indica que estamos pasando nuestra matriz previamente creada de `languages` en el ERB para su manipulación.

Tal como sugiere la guía de "D3 para Mortales", esto no es necesariamente la mejor forma de utilizar D3. Pero nos sirve para ilustrar cómo puedes utilizar la biblioteca, junto con Octokit, para hacer algunas cosas verdaderamente increíbles.

### Combinar las diferentes llamadas de la API

Ahora es el momento de hacer una confesión: el atributo de `language` dentro de los repositorios solo identifica el lenguaje "primario" que se definió. Esto significa que, si tienes un repositorio que combine varios lenguajes, el que tenga más bytes de código se considera comoel primario.

Vamos a combinar algunas llamadas a la API para obtener una representación _fidedigna_ de qué lenguaje tiene la mayor cantidad de bytes escritos en todo nuestro código. Un [diagrama de árbol][D3 treemap] deberá ser la mejor forma de visualizar los tamaños de los lenguajes de código que utilizamos, en vez de obtener solo el conteo. Necesitaremos construir una matriz de objetos que se vea más o menos así:

``` json
[ { "name": "language1", "size": 100},
  { "name": "language2", "size": 23}
  ...
]
```

Como ya tenemos una lista de repositorios anteriormente, vamos a inspeccionar cada uno y a llamar al [método de la API para listar los lenguajes][language API]:

``` ruby
repos.each do |repo|
  repo_name = repo.name
  repo_langs = octokit_client.languages("#{github_user.login}/#{repo_name}")
end
```

Desde aquí, agregaremos en una lista acumulativa cada lenguaje que encontremos:

``` ruby
repo_langs.each do |lang, count|
  if !language_obj[lang]
    language_obj[lang] = count
  else
    language_obj[lang] += count
  end
end
```

Después de ésto, daremos formato al contenido en una estructura que entienda el D3:

``` ruby
language_obj.each do |lang, count|
  language_byte_count.push :name => "#{lang} (#{count})", :count => count
end

# some mandatory formatting for D3
language_bytes = [ :name => "language_bytes", :elements => language_byte_count]
```

(Para obtener más información sobre la magia del diagrama de árbo del D3, échale un vistazo a [este tutorial sencillo][language API].)

Para concluir, pasamos la información de JSON a la misma plantilla de ERB:

``` ruby
erb :lang_freq, :locals => { :languages => languages.to_json, :language_byte_count => language_bytes.to_json}
```

Como antes, hay mucho JavaScript que puedes dejar directamente en tu plantilla:

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

¡Y voilá! Hermosos rectángulos que contienen los lenguajes de tu repositorio con proporciones relativas que se pueden ver inmediatamente. Tal vez necesites modificar la altura y el ancho de tu diagrama de árbol para pasarlo como los primeros dos argumentos en el `drawTreemap` anterior y así lograr que se muestre adecuadamente toda la información.


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

---
title: Representar los datos en gráficas
intro: Aprende a visualizar los lenguajes de programación de tu repositorio utilizando la biblioteca D3.js y el Octokit de Ruby.
redirect_from:
  - /guides/rendering-data-as-graphs
  - /v3/guides/rendering-data-as-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: e613c2f707db1030b9e2e5c40de98f2628c0ca3b
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878372'
---
En esta guía vamos a utilizar la API para obtener información acerca de los repositorios que nos pertenecen y de los lenguajes de programación que los componen. A continuación, visualizaremos esa información de dos maneras diferentes desde la biblioteca [D3.js][D3.js]. Para interactuar con la API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, se usará la excelente biblioteca de Ruby: [Octokit][Octokit].

Si todavía no lo ha hecho, debe leer la guía ["Aspectos básicos de la autenticación"][basics-of-authentication] antes de empezar con este ejemplo. Puede encontrar el código fuente completo para este proyecto en el repositorio [platform-samples][platform samples].

¡Comencemos de inmediato!

## Configurar una aplicación de OAuth

En primer lugar, [registre una nueva aplicación][new oauth application] en {% data variables.product.product_name %}. Establezca las direcciones URL principales y de devolución de llamada en `http://localhost:4567/`. Como [antes][basics-of-authentication], vamos a controlar la autenticación de la API mediante la implementación de un middleware de Rack con [sinatra-auth-github][sinatra auth github]:

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

Configure un archivo _config.ru_ similar al del ejemplo anterior:

``` ruby
ENV['RACK_ENV'] ||= 'development'
require "rubygems"
require "bundler/setup"

require File.expand_path(File.join(File.dirname(__FILE__), 'server'))

run Example::MyGraphApp
```

## Obtener la información del repositorio

Esta vez, para poder comunicarnos con la API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, vamos a usar la [biblioteca de Ruby Octokit][Octokit]. Esto es mucho más fácil que hacer un montón de llamadas directas de REST. Además, Octokit lo desarrolló un experto de GitHub, y se mantiene continuamente, así que sabe que va a funcionar.

Autenticarse con la API a través de Octokit es fácil. Solo tiene que enviar el inicio de sesión y el token al constructor `Octokit::Client`:

``` ruby
if !authenticated?
  authenticate!
else
  octokit_client = Octokit::Client.new(:login => github_user.login, :oauth_token => github_user.token)
end
```

Vamos a hacer algo interesante con los datos acerca de nuestros repositorios. Vamos a ver los diferentes lenguajes de programación que utilizan y a contar cuáles se utilizan más a menudo. Para hacerlo, primero necesitamos tomar una lista de nuestros repositorios desde la API.
Con Octokit, esto se ve así:

``` ruby
repos = client.repositories
```

A continuación, vamos a iterar sobre cada repositorio y a contar los lenguajes con los que {% data variables.product.product_name %} se asocia:

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

Cuando reinicia el servidor, la página web debe tener un aspecto similar a este:

``` ruby
{"JavaScript"=>13, "PHP"=>1, "Perl"=>1, "CoffeeScript"=>2, "Python"=>1, "Java"=>3, "Ruby"=>3, "Go"=>1, "C++"=>1}
```

Hasta ahora vamos bien, pero no se ve muy amigable para un humano. Sería genial poder tener algún tipo de visualización para entender cómo se distribuye este recuento de lenguajes. Vamos a introducir nuestros recuentos en D3 para obtener un gráfico de barras claro que represente la popularidad de los lenguajes que utilizamos.

## Visualizar los conteos de los lenguajes

D3.js, o simplemente D3, es una biblioteca completa para crear muchos tipos de gráficos, tablas, y visualizaciones interactivas.
El uso detallado de D3 está fuera del ámbito de esta guía, pero si desea leer un buen artículo introductorio, consulte ["D3 for Mortals" (D3 para mortales][D3 mortals]).

D3 es una biblioteca de JavaScript a la que le gusta trabajar con matrices de datos. Vamos a convertir nuestro hash de Ruby en una matriz de JSON para que JavaScript la utilice en el explorador.

``` ruby
languages = []
language_obj.each do |lang, count|
  languages.push :language => lang, :count => count
end

erb :lang_freq, :locals => { :languages => languages.to_json}
```

Simplemente estamos iterando sobre cada par clave-valor de nuestro objeto y lo estamos cargando en una matriz nueva. La razón por la cual no lo hicimos antes es porque no queríamos iterar sobre nuestro objeto de `language_obj` mientras lo estábamos creando.

Vamos a necesitar implementar algo de JavaScript en _lang_freq.erb_ para admitir la representación de un gráfico de barras.
Por ahora, si quiere aprender más sobre cómo funciona D3, solo tiene que utilizar el código que se le proporciona aquí y hacer referencia a los recursos cuyo vínculo se señala anteriormente:

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

Por suerte, Nuevamente, no te preocupes de la mayoría de lo que está haciendo este código. La parte importante aquí es una línea en la parte superior (`var data = <%= languages %>;`) que indica que estamos trasladando nuestra matriz `languages` creada anteriormente en ERB para su manipulación.

Tal como sugiere la guía "D3 for Mortals" (D3 para mortales), esta no es necesariamente la mejor forma de utilizar D3. Pero nos sirve para ilustrar cómo se puede utilizar la biblioteca, junto con Octokit, para hacer algunas cosas verdaderamente increíbles.

## Combinar las diferentes llamadas de la API

Ahora es el momento de realizar una confesión: el atributo `language` de los repositorios solo identifica el lenguaje "primario" definido. Esto significa que, si tiene un repositorio que combine varios lenguajes, el que tenga más bytes de código se considerará el primario.

Vamos a combinar algunas llamadas API para obtener una representación _fidedigna_ de qué lenguaje tiene la mayor cantidad de bytes escritos en todo nuestro código. Un [gráfico de rectángulos][D3 treemap] es una excelente manera de visualizar los tamaños de nuestros lenguajes de codificación usados, en lugar de simplemente ver los recuentos. Necesitaremos construir una matriz de objetos que tenga más o menos este aspecto:

``` json
[ { "name": "language1", "size": 100},
  { "name": "language2", "size": 23}
  ...
]
```

Puesto que ya tenemos una lista de repositorios, vamos a inspeccionar cada uno de ellos y llamar [al método API de lista de lenguajes][language API]:

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

(Para obtener más información sobre la magia del gráfico de rectángulos de D3, consulte [este sencillo tutorial][language API]).

Para concluir, pasamos la información de JSON a la misma plantilla de ERB:

``` ruby
erb :lang_freq, :locals => { :languages => languages.to_json, :language_byte_count => language_bytes.to_json}
```

Como antes, aquí tiene un montón de JavaScript que puede volcar directamente en la plantilla:

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

¡Voilá! Hermosos rectángulos que contienen los lenguajes del repositorio con proporciones relativas que se pueden ver inmediatamente. Tal vez necesite modificar la altura y el ancho del gráfico de rectángulos, que se envía como los dos primeros argumentos del `drawTreemap` anterior, para lograr que se muestre adecuadamente toda la información.


[D3.js]: http://d3js.org/
[basics-of-authentication]: /rest/guides/basics-of-authentication
[sinatra auth github]: https://github.com/atmos/sinatra_auth_github
[Octokit]: https://github.com/octokit/octokit.rb
[D3 mortals]: http://www.recursion.org/d3-for-mere-mortals/
[D3 treemap]: https://www.d3-graph-gallery.com/treemap.html 
[language API]: /rest/reference/repos#list-repository-languages
[simple tree map]: http://2kittymafiasoftware.blogspot.com/2011/09/simple-treemap-visualization-with-d3.html
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/rendering-data-as-graphs
[new oauth application]: https://github.com/settings/applications/new

---
title: Rendu des données sous forme de graphes
intro: Découvrez comment visualiser les langages de programmation à partir de votre référentiel à l’aide de la bibliothèque D3.js et Ruby Octokit.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876783'
---
Dans ce guide, nous allons utiliser l’API pour récupérer des informations sur les dépôts dont nous sommes propriétaires et sur les langages de programmation qu’ils utilisent. Ensuite, nous allons visualiser ces informations de deux façons différentes à l’aide de la bibliothèque [D3.js][D3.js]. Pour interagir avec l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, nous allons utiliser l’excellente bibliothèque Ruby qui se nomme [Octokit.rb][Octokit].

Si vous ne l’avez pas déjà fait, vous devez lire le guide [« Principes de base de l’authentification »][basics-of-authentication] avant d’utiliser cet exemple. Vous trouverez le code source complet de ce projet dans le dépôt [platform-samples][platform samples].

Commençons !

## Configuration d’une application OAuth

Tout d’abord, [inscrivez une nouvelle application][new oauth application] dans {% data variables.product.product_name %}. Définissez les URL principales et les URL de rappel sur `http://localhost:4567/`. Comme [précédemment][basics-of-authentication], nous allons gérer l’authentification pour l’API en implémentant un intergiciel Rack à l’aide de [sinatra-auth-github][sinatra auth github] :

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

Configurez un fichier _config.ru_ similaire à celui de l’exemple précédent :

``` ruby
ENV['RACK_ENV'] ||= 'development'
require "rubygems"
require "bundler/setup"

require File.expand_path(File.join(File.dirname(__FILE__), 'server'))

run Example::MyGraphApp
```

## Récupération des informations sur les dépôts

Cette fois-ci, pour communiquer avec l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, nous allons utiliser la [bibliothèque Ruby Octokit][Octokit]. Cela est beaucoup plus facile que d’effectuer directement plusieurs appels REST. De plus, Octokit a été développée par un GitHubber et sa maintenance est régulièrement effectuée. Vous pouvez donc être sûr qu’elle fonctionnera.

L’authentification auprès de l’API via Octokit est facile. Il vous suffit de passer votre identifiant de connexion et votre jeton au constructeur `Octokit::Client` :

``` ruby
if !authenticated?
  authenticate!
else
  octokit_client = Octokit::Client.new(:login => github_user.login, :oauth_token => github_user.token)
end
```

Nous allons faire quelque chose d’intéressant avec les données concernant nos dépôts. Nous allons voir les différents langages de programmation qu’ils utilisent et compter ceux qui sont utilisés le plus souvent. Pour ce faire, nous devons d’abord obtenir la liste de nos dépôts auprès de l’API.
Avec Octokit, cela ressemble à ceci :

``` ruby
repos = client.repositories
```

Ensuite, nous allons itérer sur chaque dépôt et compter le langage que {% data variables.product.product_name %} lui associe :

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

Lorsque vous redémarrez votre serveur, votre page web doit afficher quelque chose qui ressemble à ceci :

``` ruby
{"JavaScript"=>13, "PHP"=>1, "Perl"=>1, "CoffeeScript"=>2, "Python"=>1, "Java"=>3, "Ruby"=>3, "Go"=>1, "C++"=>1}
```

Jusque-là, tout va bien, mais ça ne se comprend pas facilement. Une visualisation serait idéale pour nous aider à comprendre comment ces langages sont distribués. Nous allons ajouter ces comptes de langages dans D3 pour obtenir un graphique à barres représentant la popularité de chaque langage utilisé.

## Visualisation des comptes de langages

D3.js (ou plus simplement « D3 ») est une bibliothèque complète qui permet de créer de nombreux types de graphiques, de graphes et de visualisations interactives.
Nous n’allons pas aborder l’utilisation de D3 en détail dans ce guide. Cependant, pour une bonne introduction, nous vous conseillons de lire [« D3 for Mortals »][D3 mortals].

D3 est une bibliothèque JavaScript qui est particulièrement bien adaptée à l’utilisation de données sous forme de tableaux. Nous allons donc convertir notre hachage Ruby en tableau JSON afin que JavaScript puisse l’utiliser dans le navigateur.

``` ruby
languages = []
language_obj.each do |lang, count|
  languages.push :language => lang, :count => count
end

erb :lang_freq, :locals => { :languages => languages.to_json}
```

Nous allons simplement itérer chacune des paires clé-valeur de notre objet et les pousser (push) dans un nouveau tableau. La raison pour laquelle nous n’avons pas fait cela plus tôt est que nous ne voulions pas itérer sur notre objet `language_obj` pendant sa création.

Maintenant, _lang_freq.erb_ va avoir besoin de JavaScript pour prendre en charge le rendu d’un graphique à barres.
Pour l’instant, vous pouvez simplement utiliser le code fourni ici et vous référer aux ressources ci-dessus pour en savoir plus sur le fonctionnement de D3 :

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

Ouf ! Encore une fois, vous n’avez pas à vous soucier de ce que fait la plus grande partie de ce code. La partie qui nous intéresse ici est une ligne située en haut (`var data = <%= languages %>;`) qui indique que nous passons notre tableau `languages` dans ERB afin de le manipuler.

Comme le suggère le guide « D3 for Mortals », ce n’est pas nécessairement la meilleure façon d’utiliser D3. Toutefois, cela sert à montrer comment utiliser la bibliothèque, ainsi que Octokit, pour réaliser des choses vraiment étonnantes.

## Combinaison de différents appels d’API

Maintenant, nous devons vous dire quelque chose : l’attribut `language` qui se trouve dans les dépôts identifie uniquement le langage « principal » défini. Cela signifie que si vous disposez d’un dépôt qui combine plusieurs langages, celui avec le plus d’octets de code sera considéré comme le langage principal.

Nous allons combiner quelques appels d’API pour obtenir une _vraie_ représentation du langage qui a le plus grand nombre d’octets écrits dans l’ensemble du code. Le [compartimentage][D3 treemap] est un excellent moyen de visualiser la taille des langages de codage utilisés, plutôt que leur nombre. Nous devons construire un tableau d’objets qui ressemble à ceci :

``` json
[ { "name": "language1", "size": 100},
  { "name": "language2", "size": 23}
  ...
]
```

Maintenant que nous avons déjà la liste de dépôts ci-dessus, examinons chacun d’eux et appelons la [méthode d’API qui liste les langages][language API] :

``` ruby
repos.each do |repo|
  repo_name = repo.name
  repo_langs = octokit_client.languages("#{github_user.login}/#{repo_name}")
end
```

À présent, nous allons ajouter cumulativement chaque langage trouvé à une liste de langages :

``` ruby
repo_langs.each do |lang, count|
  if !language_obj[lang]
    language_obj[lang] = count
  else
    language_obj[lang] += count
  end
end
```

Après cela, nous allons mettre en forme le contenu dans une structure que D3 comprend :

``` ruby
language_obj.each do |lang, count|
  language_byte_count.push :name => "#{lang} (#{count})", :count => count
end

# some mandatory formatting for D3
language_bytes = [ :name => "language_bytes", :elements => language_byte_count]
```

(Pour plus d’informations sur le compartimentage D3, consultez [ce tutoriel simple][language API].)

Pour terminer, nous allons passer ces informations JSON au même modèle ERB :

``` ruby
erb :lang_freq, :locals => { :languages => languages.to_json, :language_byte_count => language_bytes.to_json}
```

Comme tout à l’heure, voici un ensemble de JavaScript que vous pouvez ajouter directement dans votre modèle :

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

Et voilà ! De beaux rectangles contenant les langages de vos dépôts, avec des proportions relatives qui sont compréhensibles en un coup d’œil. Pour que toutes les informations s’affichent correctement, vous devrez peut-être ajuster la hauteur et la largeur du compartimentage que vous avez passées comme les deux premiers arguments à `drawTreemap` ci-dessus.


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

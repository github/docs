---
title: Rendern von Daten als Graphen
intro: 'Hier erfährst du, wie du die Programmiersprachen aus deinem Repository mithilfe der D3.js-Bibliothek und Ruby Octokit visualisieren kannst.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876782'
---
In diesem Leitfaden verwenden wir die API, um Informationen zu Repositorys, die wir besitzen, und die Programmiersprachen, die sie bilden, zu fetchen. Anschließend werden wir diese Informationen auf verschiedene Weise mithilfe der [D3.js][D3.js]-Bibliothek visualisieren. Um mit der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API zu interagieren, verwenden wir die exzellente Ruby-Bibliothek [Octokit.rb][Octokit].

Falls du es noch nicht getan hast, solltest du den Leitfaden [„Grundlagen der Authentifizierung“][basics-of-authentication] lesen, bevor du die folgenden Beispiele durcharbeitest. Den vollständigen Quellcode für dieses Projekt findest du im Repository [platform-samples][platform samples].

Springen wir ins kalte Wasser!

## Einrichten einer OAuth-Anwendung

Zuerst [registrierst du eine neue Anwendung][new oauth application] für {% data variables.product.product_name %}. Stelle die Haupt- und Rückruf-URLs auf `http://localhost:4567/` ein. Wie [zuvor][basics-of-authentication] werden wir die Authentifizierung für die API behandeln, indem wir eine Rack-Middleware mithilfe von [sinatra-auth-github][sinatra auth github] implementieren:

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

Richte eine ähnliche _config.ru_-Datei wie im vorherigen Beispiel ein:

``` ruby
ENV['RACK_ENV'] ||= 'development'
require "rubygems"
require "bundler/setup"

require File.expand_path(File.join(File.dirname(__FILE__), 'server'))

run Example::MyGraphApp
```

## Fetche Repository-Informationen

Dieses Mal verwenden wir die [Octokit Ruby-Bibliothek][Octokit], um mit der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API zu sprechen. Dies ist viel einfacher als eine Reihe von REST-Aufrufen. Darüber hinaus wurde Octokit von einem GitHubber entwickelt und wird aktiv gepflegt, damit du weißt, dass es funktioniert.

Die Authentifizierung mit der API über Octokit ist einfach. Übergib einfach dein Anmeldung und Token an den `Octokit::Client`-Konstruktor:

``` ruby
if !authenticated?
  authenticate!
else
  octokit_client = Octokit::Client.new(:login => github_user.login, :oauth_token => github_user.token)
end
```

Lass uns etwas Interessantes mit den Daten zu unseren Repositorys tun. Wir werden die verschiedenen Programmiersprachen sehen, die sie verwenden, und zählen, welche am häufigsten verwendet werden. Dazu benötigen wir zunächst eine Liste unserer Repositorys aus der API.
Mit Octokit sieht das wie folgt aus:

``` ruby
repos = client.repositories
```

Als Nächstes durchlaufen wir jedes Repository und zählen die Sprache, die {% data variables.product.product_name %} damit verknüpft:

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

Wenn du den Server neu startest, sollte deine Webseite etwas anzeigen, das wie folgt aussieht:

``` ruby
{"JavaScript"=>13, "PHP"=>1, "Perl"=>1, "CoffeeScript"=>2, "Python"=>1, "Java"=>3, "Ruby"=>3, "Go"=>1, "C++"=>1}
```

So weit, so gut, aber nicht sehr menschenfreundlich. Eine Visualisierung wäre großartig, um uns zu helfen, zu verstehen, wie diese Sprachanzahl verteilt wird. Fügen wir unsere Anzahl in D3 ein, um ein übersichtliches Balkendiagramm zu erhalten, das die Beliebtheit der von uns verwendeten Sprachen darstellt.

## Visualisierung der Sprachanzahl

D3.js oder kurz D3 ist eine umfassende Bibliothek zum Erstellen vieler Arten von Diagrammen, Graphen und interaktiven Visualisierungen.
Die Verwendung von D3 wird über den Umfang dieses Leitfadens hinaus verwendet, aber für einen guten Einführungsartikel lies [„D3 für Normalsterbliche"][D3 mortals].

D3 ist eine JavaScript-Bibliothek und arbeitet gerne mit Daten als Arrays. So konvertieren wir unseren Ruby-Hash für die Verwendung durch JavaScript im Browser in ein JSON-Array.

``` ruby
languages = []
language_obj.each do |lang, count|
  languages.push :language => lang, :count => count
end

erb :lang_freq, :locals => { :languages => languages.to_json}
```

Wir durchlaufen einfach jedes Schlüsselwertpaar in unserem Objekt und pushen es in ein neues Array. Der Grund, aus dem wir dies zuvor nicht ausgeführt haben, besteht darin, dass wir unser `language_obj`-Objekt nicht durchlaufen wollten, während wir es erstellt haben.

Nun benötigt _lang_freq.erb_ einige JavaScript-Dateien, um das Rendern eines Balkengraphen zu unterstützen.
Jetzt kannst du einfach den hier bereitgestellten Code verwenden und auf die oben verknüpften Ressourcen verweisen, wenn du mehr über die Funktionsweise von D3 erfahren möchtest:

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

Puh! Noch einmal, mache dir sich keine Sorgen darüber, was der Großteil dieses Codes tut. Der relevante Teil hier ist eine Zeile am Anfang--`var data = <%= languages %>;`--die angibt, dass wir unser zuvor erstelltes `languages`-Array zur Manipulation an ERB übergeben.

Wie der Leitfaden „D3 für Normalsterbliche" andeutet, ist dies nicht unbedingt die beste Verwendung von D3. Aber es dient dazu, zu veranschaulichen, wie du die Bibliothek zusammen mit Octokit verwenden kannst, um einige wirklich erstaunliche Dinge zu machen.

## Kombinieren verschiedener API-Aufrufe

Jetzt ist es Zeit für ein Geständnis: das `language`-Attribut innerhalb von Repositorys identifiziert nur die „primäre" Sprache definiert. Das bedeutet, wenn du über ein Repository verfügst, das mehrere Sprachen kombiniert, wird dies mit den meisten Bytes des Codes als primäre Sprache betrachtet.

Kombinieren wir einige API-Aufrufe, um eine _echte_ Darstellung davon zu erhalten, in welcher Sprache die größte Anzahl von Bytes in unserem gesamten Code geschrieben wurde. Eine [Baumstruktur][D3 treemap] sollte eine hervorragende Möglichkeit sein, die Größen unserer verwendeten Codierungssprachen statt nur die Anzahl zu visualisieren. Wir müssen ein Array von Objekten konstruieren, das wie in etwa so aussieht:

``` json
[ { "name": "language1", "size": 100},
  { "name": "language2", "size": 23}
  ...
]
```

Da wir bereits eine Liste der oben aufgeführten Repositorys haben, überprüfen wir jede einzelne und rufen [die API-Methode für die Sprachauflistung][language API] auf:

``` ruby
repos.each do |repo|
  repo_name = repo.name
  repo_langs = octokit_client.languages("#{github_user.login}/#{repo_name}")
end
```

From there, we'll cumulatively add each language found to a "master list":

``` ruby
repo_langs.each do |lang, count|
  if !language_obj[lang]
    language_obj[lang] = count
  else
    language_obj[lang] += count
  end
end
```

Danach werden wir den Inhalt in eine Struktur formatieren, die D3 versteht:

``` ruby
language_obj.each do |lang, count|
  language_byte_count.push :name => "#{lang} (#{count})", :count => count
end

# some mandatory formatting for D3
language_bytes = [ :name => "language_bytes", :elements => language_byte_count]
```

(Weitere Informationen zu D3 Tree Map Magic findest du in [diesem einfachen Lernprogramm][language API].)

Zum Umschließen übergeben wir diese JSON-Informationen an dieselbe ERB-Vorlage:

``` ruby
erb :lang_freq, :locals => { :languages => languages.to_json, :language_byte_count => language_bytes.to_json}
```

Wie zuvor siehst du hier eine Reihe von JavaScripts, die du direkt in deine Vorlage ablegen kannst:

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

Et voila! Schöne Rechtecke, die deine Repositorysprachen enthalten, mit relativen Proportionen, die auf einen Blick leicht zu erkennen sind. Möglicherweise musst du die Höhe und Breite deiner Baumstruktur optimieren, die als die ersten beiden `drawTreemap`-Argumente oben übergeben wurden, damit alle Informationen ordnungsgemäß angezeigt werden.


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

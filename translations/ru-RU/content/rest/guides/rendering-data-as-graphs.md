---
title: Отрисовка данных в виде диаграмм
intro: 'Узнайте, как визуализировать языки программирования из репозитория с помощью библиотек D3.js и Ruby Octokit.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878373'
---
В этом руководстве мы используем API для получения сведений о принадлежащих нам репозиториях и языках программирования, которые в них применяются. Затем мы визуализируем эти сведения несколькими разными способами с помощью библиотеки [D3.js][D3.js]. Для взаимодействия с API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} мы используем отличную библиотеку Ruby, которая называется [Octokit][Octokit].

Перед тем как приступать к изучению этого примера ознакомьтесь с [руководством по основам проверки подлинности][basics-of-authentication], если вы еще этого не сделали. Полный исходный код этого проекта можно найти в репозитории [platform-samples][platform samples].

Давайте приступим!

## Настройка приложения OAuth

Сначала [зарегистрируйте новое приложение][new oauth application] на {% data variables.product.product_name %}. Задайте `http://localhost:4567/` в качестве основного URL-адреса и URL-адреса обратного вызова. Как и [ранее][basics-of-authentication], мы будем осуществлять проверку подлинности для API, реализовав ПО промежуточного слоя Rack с помощью [sinatra-auth-github][sinatra auth github]:

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

Настройте файл _config.ru_ аналогично предыдущему примеру:

``` ruby
ENV['RACK_ENV'] ||= 'development'
require "rubygems"
require "bundler/setup"

require File.expand_path(File.join(File.dirname(__FILE__), 'server'))

run Example::MyGraphApp
```

## Получение сведений о репозиториях

На этот раз для взаимодействия с API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} мы будем использовать [библиотеку Ruby Octokit][Octokit]. Это гораздо проще, чем напрямую совершать множество вызовов REST. Кроме того, библиотека Octokit была разработана пользователем GitHub и активно поддерживается, поэтому вы можете быть уверены, что она будет работать.

Проверка подлинности в API с помощью Octokit выполняется очень просто. Просто передайте имя входа и токен в конструктор `Octokit::Client`:

``` ruby
if !authenticated?
  authenticate!
else
  octokit_client = Octokit::Client.new(:login => github_user.login, :oauth_token => github_user.token)
end
```

Давайте сделаем что-нибудь интересное со сведениями о репозиториях. Мы узнаем, какие языки программирования в них применяются, и подсчитаем, какие из них используются чаще всего. Для этого сначала потребуется получить список репозиториев от API.
С помощью Octokit это можно сделать так:

``` ruby
repos = client.repositories
```

Затем мы переберем все репозитории и подсчитаем, с каким количеством из них связан каждый язык на {% data variables.product.product_name %}:

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

После перезапуска сервера веб-страница должна выглядеть примерно так:

``` ruby
{"JavaScript"=>13, "PHP"=>1, "Perl"=>1, "CoffeeScript"=>2, "Python"=>1, "Java"=>3, "Ruby"=>3, "Go"=>1, "C++"=>1}
```

Неплохо, но не очень удобно для восприятия. Визуализация поможет нам понять количественное распределение языков. Давайте подадим полученные цифры в D3, чтобы получить аккуратную гистограмму, на которой представлена популярность используемых языков.

## Визуализация количества языков

D3.js или просто D3 — это эффективная библиотека для создания диаграмм, графиков и интерактивных визуализаций множества типов.
Подробное описание использования D3 выходит за рамки этого руководства, однако вы можете ознакомиться с хорошей вводной статьей [D3 for Mortals][D3 mortals] (D3 для простых смертных).

D3 — это библиотека JavaScript, поэтому с данными предпочтительно работать в виде массивов. Поэтому давайте преобразуем хэш Ruby в массив JSON для использования на JavaScript в браузере.

``` ruby
languages = []
language_obj.each do |lang, count|
  languages.push :language => lang, :count => count
end

erb :lang_freq, :locals => { :languages => languages.to_json}
```

Мы просто перебираем каждую пару "ключ-значение" в объекте и помещаем ее в новый массив. Мы не сделали этого ранее, потому что не хотели выполнять итерацию по объекту `language_obj` во время его создания.

Теперь в файл _lang_freq.erb_ нужно добавить код JavaScript для отрисовки гистограммы.
Пока вы можете просто использовать приведенный здесь код, а чтобы узнать больше о том, как работает D3, обратитесь к ресурсам по ссылкам выше:

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

Наконец-то. Опять же, не особо важно, что делает большая часть этого кода. Нас интересует только строка вверху: `var data = <%= languages %>;`. Она указывает, что мы передаем ранее созданный массив `languages` в ERB для обработки.

Как говорится в руководстве D3 for Mortals, это, вероятно, не лучшее применение для D3. Но оно позволяет продемонстрировать, как эту библиотеку можно использовать с Octokit для реализации потрясающих возможностей.

## Сочетание разных вызовов API

Пора признаться кое в чем: атрибут `language` в репозитории указывает только язык, который определен как "основной". Это означает, что если есть репозиторий, в котором применяется несколько языков, основным считается язык, на котором написан наибольший объем кода.

Давайте объединим несколько вызовов API, чтобы получить _истинное_ представление о том, на каком языке написано наибольшая часть всего кода. [Диаграмма "дерево"][D3 treemap] должна отлично подойти для визуализации доли использования языков программирования, а не просто их числа. Нам потребуется создать массив объектов наподобие следующего:

``` json
[ { "name": "language1", "size": 100},
  { "name": "language2", "size": 23}
  ...
]
```

Так как у нас уже есть список репозиториев, давайте проверим каждый из них и вызовем [метод API для получения списка языков][language API]:

``` ruby
repos.each do |repo|
  repo_name = repo.name
  repo_langs = octokit_client.languages("#{github_user.login}/#{repo_name}")
end
```

Далее мы суммируем случаи обнаружения каждого языка:

``` ruby
repo_langs.each do |lang, count|
  if !language_obj[lang]
    language_obj[lang] = count
  else
    language_obj[lang] += count
  end
end
```

После этого мы отформатируем содержимое в виде структуры, которую поддерживает библиотека D3:

``` ruby
language_obj.each do |lang, count|
  language_byte_count.push :name => "#{lang} (#{count})", :count => count
end

# some mandatory formatting for D3
language_bytes = [ :name => "language_bytes", :elements => language_byte_count]
```

(Дополнительные сведения об абстракции диаграммы "дерево" в D3 см. в [этом простом учебнике][language API].)

В заключение мы передаем эти сведения JSON в тот же шаблон ERB:

``` ruby
erb :lang_freq, :locals => { :languages => languages.to_json, :language_byte_count => language_bytes.to_json}
```

Как и ранее, приведем код JavaScript, который можно напрямую добавить в шаблон:

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

Вуаля! Красивые прямоугольники, позволяющие с одного взгляда оценить относительную долю использования того или иного языка в репозиториях. Для правильного отображения всех сведений может потребоваться настроить высоту и ширину диаграммы "дерево", передаваемую в первых двух аргументах `drawTreemap` выше.


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

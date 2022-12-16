---
title: 데이터를 그래프로 렌더링
intro: D3.js 라이브러리 및 Ruby Octokit를 사용하여 리포지토리에서 프로그래밍 언어를 시각화하는 방법을 알아봅니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878374'
---
이 가이드에서는 API를 사용하여 소유한 리포지토리 및 이를 구성하는 프로그래밍 언어에 대한 정보를 페치합니다. 그런 다음, [D3.js][D3.js] 라이브러리를 사용하여 몇 가지 다른 방법으로 해당 정보를 시각화합니다. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API와 상호 작용하려면 우수한 Ruby 라이브러리인 [Octokit][Octokit]를 사용합니다.

아직 읽지 않은 경우 이 예제를 시작하기 전에 [“인증 기본 사항”][basics-of-authentication] 가이드를 읽어야 합니다. [platform-samples][platform samples] 리포지토리에서 이 프로젝트에 대한 전체 소스 코드를 찾을 수 있습니다.

지금 바로 시작하겠습니다!

## OAuth 애플리케이션 설정

먼저 {% data variables.product.product_name %}에 [새 애플리케이션을 등록][new oauth application] 합니다. 기본 및 콜백 URL을 `http://localhost:4567/`로 설정합니다. [이전][basics-of-authentication]과 마찬가지로 [sinatra-auth-github][sinatra auth github]를 사용하여 랙 미들웨어를 구현하여 API에 대한 인증을 처리하려고 합니다.

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

이전 예제와 유사한 _config.ru_ 파일을 설정합니다.

``` ruby
ENV['RACK_ENV'] ||= 'development'
require "rubygems"
require "bundler/setup"

require File.expand_path(File.join(File.dirname(__FILE__), 'server'))

run Example::MyGraphApp
```

## 리포지토리 정보 페치

이번에는 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API와 통신하기 위해 [Octokit Ruby 라이브러리][Octokit]를 사용합니다. 이는 REST 호출을 직접 만드는 것보다 훨씬 쉽습니다. 또한 Octokit는 GitHubber에 의해 개발되었으며 활발하게 유지 관리되므로 작동에는 문제가 없습니다.

Octokit를 통해 API로 인증하는 것은 쉽습니다. 로그인 및 토큰을 `Octokit::Client` 생성자에 전달하기만 하면 됩니다.

``` ruby
if !authenticated?
  authenticate!
else
  octokit_client = Octokit::Client.new(:login => github_user.login, :oauth_token => github_user.token)
end
```

리포지토리에 대한 데이터로 흥미로운 작업을 수행해 보겠습니다. 사용하는 다양한 프로그래밍 언어를 확인하고 어떤 것이 가장 자주 사용되는지 계산합니다. 이렇게 하려면 먼저 API의 리포지토리 목록이 필요합니다.
Octokit에서는 다음과 같습니다.

``` ruby
repos = client.repositories
```

다음으로 각 리포지토리를 반복하고 {% data variables.product.product_name %}이 연결된 언어를 계산합니다.

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

서버를 다시 시작하면 웹 페이지에 다음과 같은 내용이 표시됩니다.

``` ruby
{"JavaScript"=>13, "PHP"=>1, "Perl"=>1, "CoffeeScript"=>2, "Python"=>1, "Java"=>3, "Ruby"=>3, "Go"=>1, "C++"=>1}
```

지금까지는 좋았지만, 인간 친화적이진 않습니다. 시각화는 이러한 언어 계산이 배포되는 방식을 이해하는 데 도움이 됩니다. 사용하는 언어의 인기를 나타내는 깔끔한 막대 그래프를 얻기 위해 D3에 카운트를 피드해 보겠습니다.

## 언어 개수 시각화

D3.js(D3)는 다양한 종류의 차트, 그래프 및 대화형 시각화를 만들기 위한 포괄적인 라이브러리입니다.
D3 사용을 자세히 살펴보는 것은 이 가이드에서 다루지 않습니다. 좋은 소개 문서는 [“일반인을 위한 D3”][D3 mortals]을 확인하세요.

D3은 JavaScript 라이브러리이며 데이터를 배열로 사용하는 것을 좋아합니다. 따라서 브라우저에서 JavaScript에서 사용할 JSON 배열로 Ruby 해시를 변환해 보겠습니다.

``` ruby
languages = []
language_obj.each do |lang, count|
  languages.push :language => lang, :count => count
end

erb :lang_freq, :locals => { :languages => languages.to_json}
```

개체의 각 키-값 쌍을 반복하여 새 배열로 푸시하기만 하면 됩니다. 앞서 이 작업을 수행하지 않은 이유는 개체를 만드는 동안 `language_obj` 개체를 반복하고 싶지 않았기 때문입니다.

이제 _lang_freq.erb_ 는 막대 그래프 렌더링을 지원하기 위해 일부 JavaScript가 필요합니다.
지금은 여기에 제공된 코드를 사용하고 D3 작동 방식에 대해 자세히 알아보려면 위에 연결된 리소스를 참조할 수 있습니다.

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

휴우! 다시 말하지만, 이 코드의 대부분이 수행하는 작업에 대해 걱정하지 마세요. 여기서 관련 부분은 맨 위에 있는 선 방식입니다. `var data = <%= languages %>;` 이는 이전에 만든 `languages` 배열을 조작을 위해 ERB에 전달하고 있음을 나타냅니다.

“일반인을 위한 D3” 가이드에 나와 있듯이, 이것이 반드시 D3을 가장 잘 사용하는 것은 아닙니다. 하지만 그것은 어떻게 Octokit와 함께 라이브러리를 사용해서 정말 놀라운 것들을 만들 수 있는지를 보여 주는 역할을 합니다.

## 다른 API 호출 결합

이제 고백할 차례입니다. 리포지토리 내의 `language` 특성은 정의된 “기본” 언어만 식별합니다. 즉, 여러 언어를 결합하는 리포지토리가 있는 경우 코드 바이트가 가장 많은 리포지토리가 기본 언어로 간주됩니다.

몇 가지 API 호출을 결합하여 모든 코드에 기록된 바이트 수가 가장 많은 언어를 _실제로_ 표현해 보겠습니다. [트리맵][D3 treemap]은 단순히 개수가 아니라 사용되는 코딩 언어의 크기를 시각화하는 좋은 방법이어야 합니다. 다음과 같은 개체 배열을 구성해야 합니다.

``` json
[ { "name": "language1", "size": 100},
  { "name": "language2", "size": 23}
  ...
]
```

위 리포지토리 목록이 이미 있으므로 각 리포지토리를 검사하고 [API 메서드를 나열하는 언어][language API]를 호출해 보겠습니다.

``` ruby
repos.each do |repo|
  repo_name = repo.name
  repo_langs = octokit_client.languages("#{github_user.login}/#{repo_name}")
end
```

여기에서 찾은 각 언어를 언어 목록에 누적적으로 추가합니다.

``` ruby
repo_langs.each do |lang, count|
  if !language_obj[lang]
    language_obj[lang] = count
  else
    language_obj[lang] += count
  end
end
```

그런 다음, D3에서 이해할 수 있는 구조로 콘텐츠의 형식을 지정합니다.

``` ruby
language_obj.each do |lang, count|
  language_byte_count.push :name => "#{lang} (#{count})", :count => count
end

# some mandatory formatting for D3
language_bytes = [ :name => "language_bytes", :elements => language_byte_count]
```

(D3 트리 맵 매직에 대한 자세한 내용은 [이 간단한 자습서][language API]를 확인하세요.)

래핑을 위해 이 JSON 정보를 동일한 ERB 템플릿에 전달합니다.

``` ruby
erb :lang_freq, :locals => { :languages => languages.to_json, :language_byte_count => language_bytes.to_json}
```

이전과 마찬가지로 템플릿에 직접 드롭할 수 있는 JavaScript는 다음과 같습니다.

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

자, 보세요! 한눈에 보기 쉬운 상대적 비율이 포함된 리포지토리 언어를 포함하는 아름다운 사각형입니다. 모든 정보가 제대로 표시되도록 하려면 위의 `drawTreemap`에 처음 두 인수로 전달된 트리 맵의 높이와 너비를 조정해야 할 수 있습니다.


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

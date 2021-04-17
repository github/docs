---
title: 将数据渲染为图形
intro: 了解如何使用 D3.js 库和 Ruby Octokit 可视化仓库中的编程语言。
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
 


在本指南中，我们将使用 API 来获取有关我们拥有的仓库以及构成这些仓库的编程语言的信息。 然后，我们将使用 [D3.js][D3.js] 库来以几种不同的方式可视化这些信息。 为了与 {% data variables.product.product_name %} API 进行交互，我们将使用卓越的 Ruby 库 [Octokit][Octokit]。

在开始本示例之前，您应该阅读[“身份验证基础知识”][basics-of-authentication]指南（如果尚未阅读）。 您可以在[平台样本][platform samples]仓库中找到此项目的完整源代码。

我们马上开始！

### 设置 OAuth 应用程序

首先，请在 {% data variables.product.product_name %} 上[注册一个新应用程序][new oauth application]。 将主 URL 和回调 URL 设置为 `http://localhost:4567/`。 与[之前][basics-of-authentication]一样，我们将使用 [sinatra-auth-github][sinatra auth github] 实现 Rack 中间件，以处理 API 的身份验证：

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

设置与上一个示例类似的 _config.ru_ 文件：

``` ruby
ENV['RACK_ENV'] ||= 'development'
require "rubygems"
require "bundler/setup"

require File.expand_path(File.join(File.dirname(__FILE__), 'server'))

run Example::MyGraphApp
```

### 获取仓库信息

这次，为了与 {% data variables.product.product_name %} API 进行对话，我们将使用 [Octokit.rb][Octokit]。 这比直接进行一大堆 REST 调用要容易得多。 另外，Octokit 是由 GitHubber 开发的，并且一直在积极维护，因此可以确保有效性。

通过 Octokit 进行 API 身份验证非常简单。 只需将您的登录名和令牌传递到 `Octokit::Client` 构造函数：

``` ruby
if !authenticated?
  authenticate!
else
  octokit_client = Octokit::Client.new(:login => github_user.login, :oauth_token => github_user.token)
end
```

我们来用仓库的数据做一些有趣的事情。 我们将看到它们使用的不同编程语言，并计算出哪些是最常用的。 为此，我们首先需要从 API 获取仓库列表。 使用 Octokit 时，其代码如下所述：

``` ruby
repos = client.repositories
```

接下来，我们将遍历每个仓库，并计算 {% data variables.product.product_name %} 与之关联的语言：

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

当您重新启动服务器时，您的 web 页面应显示如下代码：

``` ruby
{"JavaScript"=>13, "PHP"=>1, "Perl"=>1, "CoffeeScript"=>2, "Python"=>1, "Java"=>3, "Ruby"=>3, "Go"=>1, "C++"=>1}
```

到目前为止，进展不错，但结果不是很人性化。 可视化将非常有助于我们理解这些语言计数是如何分布的。 我们来将这些计数输入到 D3 中，得到一个表示语言使用频率的简洁条形图。

### 可视化语言计数

D3.js（或仅 D3）是用于创建多种图表、图形和交互式可视化内容的综合库。 详细介绍 D3 的用法超出了本指南的范围，但我们推荐您阅读一篇不错的介绍性文章[“D3 for Mortals（面向大众的 D3)”][D3 mortals]。

D3 是一个JavaScript 库，喜欢以数组的形式处理数据。 因此，让我们将 Ruby 哈希转换为 JSON 数组，以供浏览器中的 JavaScript 使用。

``` ruby
languages = []
language_obj.each do |lang, count|
  languages.push :language => lang, :count => count
end

erb :lang_freq, :locals => { :languages => languages.to_json}
```

我们只需遍历对象中的每个键值对，然后将它们推入新的数组。 我们之前没有这样做是因为我们不想在创建 `language_obj` 对象的过程中遍历它。

现在，_lang_freq.erb_ 将需要一些 JavaScript 来支持渲染条形图。 以后，您只需使用此处提供的代码，如果您想详细了解 D3 的工作原理，您可以参考上面链接的资源：

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

唷！ 同样，不必担心这段代码的主要功能。 这里值得注意的是顶行--`var data = <%= languages %>;`--它表示我们正在将先前创建的 `languages` 数组传递到 ERB 中进行处理。

如“D3 for Mortals（面向大众的 D3）”所述，这未必是 D3 的最佳用法。 但它确实表明了您能够如何配合使用该库与 Octokit，做出一些真正令人惊叹的事情。

### 结合不同的 API 调用

现在是时候坦白了：仓库中的 `language` 属性仅标识定义的“主要”语言。 这意味着，如果您的仓库结合了多种语言，则代码字节最多的语言将被视为主要语言。

让我们结合几个 API 调用来_真正_呈现哪种语言在我们所有代码中写入的字节数最多。 相比简单的计数，[树形图][D3 treemap]应该是可视化编码语言使用量的好方法。 我们需要构造一个如下所示的对象数组：

``` json
[ { "name": "language1", "size": 100},
  { "name": "language2", "size": 23}
  ...
]
```

我们在前面已经获取了仓库列表，现在我们来检查每个仓库，然后调用[语言列表 API 方法][language API]：

``` ruby
repos.each do |repo|
  repo_name = repo.name
  repo_langs = octokit_client.languages("#{github_user.login}/#{repo_name}")
end
```

我们将从中找到的每种语言累加到“主列表”中：

``` ruby
repo_langs.each do |lang, count|
  if !language_obj[lang]
    language_obj[lang] = count
  else
    language_obj[lang] += count
  end
end
```

之后，我们将内容格式化为 D3 可以理解的结构：

``` ruby
language_obj.each do |lang, count|
  language_byte_count.push :name => "#{lang} (#{count})", :count => count
end

# some mandatory formatting for D3
language_bytes = [ :name => "language_bytes", :elements => language_byte_count]
```

（有关 D3 树图魔方的更多信息，请查看[这个简单教程][language API]。）

最后，我们将这些 JSON 信息传递到同一个 ERB 模板：

``` ruby
erb :lang_freq, :locals => { :languages => languages.to_json, :language_byte_count => language_bytes.to_json}
```

与以前一样，这里有一堆 JavaScript，您可以直接将它们放到模板中：

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

瞧！ 包含仓库语言信息的精美矩形，按相对比例显示，让您一目了然。 您可能需要调整树形图的高度和宽度（作为前两个参数传递到上述 `drawTreemap`），使所有信息适当显示。


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

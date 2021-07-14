---
title: データをグラフとしてレンダリングする
intro: D3.jsライブラリとRuby Octokitを使用して、リポジトリからプログラミング言語を視覚化する方法を学びましょう。
redirect_from:
  - /guides/rendering-data-as-graphs/
  - /v3/guides/rendering-data-as-graphs
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---
 


このガイドでは、APIを使用して、所有するリポジトリと、それを構成するプログラミング言語についての情報を取得します。 次に、[D3.js][D3.js]ライブラリを使用して、その情報をいくつかの方法で視覚化します。 To interact with the {% data variables.product.product_name %} APIやり取りを行うため、ここでは優れたRubyライブラリである[Octokit][Octokit]を使用します。

まだ[「認証の基本」][basics-of-authentication]ガイドを読んでいない場合は、それを読んでからこの例に取りかかってください。 このプロジェクトの完全なソースコードは、[platform-samples][platform samples]リポジトリにあります。

それでは早速始めましょう！

### OAuthアプリケーションの設定

まず、{% data variables.product.product_name %}で[新しいアプリケーションを登録][new oauth application]します。 コールバックURLは`http://localhost:4567/`と設定してください。 [以前][basics-of-authentication]行ったように、[sinatra-auth-github][sinatra auth github]を使用してRackミドルウェアを実装することにより、APIの認証を処理します。

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

前の例と同様に、_config.ru_ファイルを設定します。

``` ruby
ENV['RACK_ENV'] ||= 'development'
require "rubygems"
require "bundler/setup"

require File.expand_path(File.join(File.dirname(__FILE__), 'server'))

run Example::MyGraphApp
```

### リポジトリ情報のフェッチ

今回は、{% data variables.product.product_name %} APIと通信を行うため、[Octokit Rubyライブラリ][Octokit]を使用します。 これは、多くのREST呼び出しを直接行うよりもはるかに簡単です。 さらに、OctokitはGitHubberによって開発され、積極的にメンテナンスされているので、確実に動作します。

Octokit経由のAPIによる認証は簡単です。 ログインとトークンを`Octokit::Client`コンストラクタに渡すだけです。

``` ruby
if !authenticated?
  authenticate!
else
  octokit_client = Octokit::Client.new(:login => github_user.login, :oauth_token => github_user.token)
end
```

リポジトリに関するデータを使って面白いことをしてみましょう。 使用されているさまざまなプログラミング言語を表示し、どれが一番多く使われているかを数えます。 そのためには、まずAPIからリポジトリのリストを取得する必要があります。 Octokitでは、次のようにします。

``` ruby
repos = client.repositories
```

次に、各レポジトリで処理を繰り返し、{% data variables.product.product_name %}に関連付けられた言語を数えます。

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

サーバーを再起動すると、ウェブページには以下のように表示されているはずです。

``` ruby
{"JavaScript"=>13, "PHP"=>1, "Perl"=>1, "CoffeeScript"=>2, "Python"=>1, "Java"=>3, "Ruby"=>3, "Go"=>1, "C++"=>1}
```

ここまではうまくいきましたが、ちょっと取っつきにくいですね。 これらの言語数がどのような分布をしているかを把握するには、視覚化がとても役立つでしょう。 数えたものをD3にフィードし、使用する言語の人気を表す棒グラフを取得しましょう。

### 言語数の視覚化

D3.js (単にD3と表記することもある) は、多様なチャート、グラフ、インタラクティブな視覚化を作成するための包括的なライブラリです。 D3の詳細はこのガイドが扱う範囲を超えていますが、いい入門記事としては、[「D3 for Mortals」][D3 mortals]をご覧ください。

D3はJavaScriptのライブラリで、データを配列として扱うことを好みます。 ですから、ブラウザのJavaScriptで使用するため、RubyのハッシュをJSON配列に変換してみましょう。

``` ruby
languages = []
language_obj.each do |lang, count|
  languages.push :language => lang, :count => count
end

erb :lang_freq, :locals => { :languages => languages.to_json}
```

ここでは単純にオブジェクトの各キー/値ペアを次々と処理して、新しい配列に入れ込んでいます。 これをもっと前に行わなかったのは、`language_obj`オブジェクトを作成しながら次々と処理していきたくはなかったからです。

さて、棒グラフのレンダリングをサポートするため、_lang_freq.erb_には何らかのJavaScriptが必要となります。 さしあたっては、ここで提供しているコードを使うことにしましょう。D3のしくみについて詳しく学びたければ、上記でリンクした資料を参照してください。

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

いかがですか。 このコードが何をしているか詳しく知る必要はありません。 ここで注目してほしいのは、てっぺんの行の`var data = <%= languages %>;`の部分です。これは、以前に作成した`languages`の行列を、操作のためERBに渡すことを示しています。

「D3 for Mortals」のガイドが示すように、これは必ずしもD3の最善の利用法ではありません。 ただ、Octokitと一緒にライブラリを使って、とっても素晴らしいものを作る方法を説明するには役立ちます。

### さまざまなAPI呼び出しの組み合わせ

さて、ここで本当のことを言いましょう。リポジトリの`language`属性が識別するのは、「主な」言語として定義されたものだけです。 つまり、複数の言語が混ざったリポジトリでは、コードのバイト数が最も多い言語が主言語とみなされます。

いくつかのAPI呼び出しを組み合わせて、コード全体でどの言語のバイト数が最も多いかを_厳密に_表してみましょう。 コーディングに使われている言語のサイズを視覚化する方法としては、単純な数よりも[ツリーマップ][D3 treemap]を使った方が見栄えがいいでしょう。 次のようなオブジェクトの配列を構築する必要があります。

``` json
[ { "name": "language1", "size": 100},
  { "name": "language2", "size": 23}
  ...
]
```

すでに上記でリポジトリのリストを取得しているので、それぞれを調べて、[言語をリスト化するAPIメソッド][language API]を呼び出しましょう。

``` ruby
repos.each do |repo|
  repo_name = repo.name
  repo_langs = octokit_client.languages("#{github_user.login}/#{repo_name}")
end
```

そこから、見つかった各言語を言語のリストに次々に追加していきます。

``` ruby
repo_langs.each do |lang, count|
  if !language_obj[lang]
    language_obj[lang] = count
  else
    language_obj[lang] += count
  end
end
```

それから、コンテンツをD3が理解できる構造にフォーマットします。

``` ruby
language_obj.each do |lang, count|
  language_byte_count.push :name => "#{lang} (#{count})", :count => count
end

# some mandatory formatting for D3
language_bytes = [ :name => "language_bytes", :elements => language_byte_count]
```

(D3ツリーマップの魔力をもっと詳しく知りたければ、[この簡単なチュートリアル][language API]を確認しましょう。)

仕上げに、このJSON情報を同じERBテンプレートに渡します。

``` ruby
erb :lang_freq, :locals => { :languages => languages.to_json, :language_byte_count => language_bytes.to_json}
```

前と同じように、テンプレートに直接放り込めるJavaScriptをご用意しました。

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

これで一丁あがり! リポジトリの言語が書かれた美しい長方形です。大きさは言語の割合に比例していて、一目でわかりやすくなっています。 すべての情報を正しく表示するためには、上記`drawTreemap`の最初の2つの引数で、ツーマップの縦と横を調整する必要があるかもしれません。


[D3.js]: http://d3js.org/
[basics-of-authentication]: /rest/guides/basics-of-authentication
[basics-of-authentication]: /rest/guides/basics-of-authentication
[sinatra auth github]: https://github.com/atmos/sinatra_auth_github
[Octokit]: https://github.com/octokit/octokit.rb
[Octokit]: https://github.com/octokit/octokit.rb
[D3 mortals]: http://www.recursion.org/d3-for-mere-mortals/
[D3 treemap]: https://www.d3-graph-gallery.com/treemap.html
[language API]: /rest/reference/repos#list-repository-languages
[language API]: /rest/reference/repos#list-repository-languages
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/rendering-data-as-graphs
[new oauth application]: https://github.com/settings/applications/new

---
title: 認証の基本
intro: さまざまな認証方法について、いくつかの例で学びます。
redirect_from:
  - /guides/basics-of-authentication
  - /v3/guides/basics-of-authentication
  - /rest/basics-of-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



このセクションでは、認証の基本に焦点を当てます。 具体的には、アプリケーションの[ウェブフロー][webflow]を実装した、([Sinatra][Sinatra] を使う) Rubyサーバーを、いくつかの方法で作成します。

{% tip %}

このプロジェクトの完全なソースコードは、[platform-samples リポジトリ](https://github.com/github/platform-samples/tree/master/api/)からダウンロードできます。

{% endtip %}

### アプリケーションの登録

まず、[アプリケーションの登録][new oauth app]が必要です。 登録された各 OAuth アプリケーションには、一意のクライアント ID とクライアントシークレットが割り当てられます。 クライアントシークレットは共有しないでください。 共有には、文字列をリポジトリにチェックインすることも含まれます。

どのような情報を入力しても構いませんが、**認証コールバック URL** は例外です。 これが、アプリケーションの設定にあたってもっとも重要な情報と言えるでしょう。 認証の成功後に {% data variables.product.product_name %} がユーザに返すのは、コールバック URL なのです。

通常の Sinatra サーバーを実行しているので、ローカルインスタンスの場所は `http://localhost:4567` に設定されています。 コールバック URL を `http://localhost:4567/callback` と入力しましょう。

### ユーザ認証の承認

{% data reusables.apps.deprecating_auth_with_query_parameters %}

さて、簡単なサーバーの入力を始めましょう。 _server.rb_ というファイルを作成し、以下の内容を貼り付けてください。

``` ruby
require 'sinatra'
require 'rest-client'
require 'json'

CLIENT_ID = ENV['GH_BASIC_CLIENT_ID']
CLIENT_SECRET = ENV['GH_BASIC_SECRET_ID']

get '/' do
  erb :index, :locals => {:client_id => CLIENT_ID}
end
```

クライアント ID とクライアントシークレットは、[アプリケーションの設定ページ][app settings]から取得されます。 これらの値は、{% data variables.product.product_name %} やその他あらゆる公開の場には、**決して_保存しないでください_**。 これらの値は、[環境変数][about env vars]として保存することをお勧めします。この例でも、そのようにしています。

次に、_views/index.erb_に以下の内容を貼り付けてください。

``` erb
<html>
  <head>
  </head>
  <body>
    <p>
      Well, hello there!
    </p>
    <p>
      We're going to now talk to the GitHub API. Ready?
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=<%= client_id %>">Click here</a> to begin!</a>
    </p>
    <p>
      If that link doesn't work, remember to provide your own <a href="/apps/building-oauth-apps/authorizing-oauth-apps/">Client ID</a>!
    </p>
  </body>
</html>
```

(シナトラの仕組みに詳しくない方は、[Sinatraのガイド][Sinatra guide]を読むことをお勧めします。)

URLはアプリケーションに要求された[スコープ][oauth scopes]を`scope`クエリパラメータで定義していることにも注目しましょう。 このアプリケーションでは、プライベートのメールアドレスを読み込むため、`user:email`スコープをリクエストしています。

ブラウザで`http://localhost:4567`に移動します。 リンクをクリックすると、{% data variables.product.product_name %}に移動し、以下のようなダイアログが表示されます。 ![GitHubのOAuthプロンプト](/assets/images/oauth_prompt.png)

あなた自身を信用する場合は、[**Authorize App**]をクリックします。 おっと、 Sinatraが`404`エラーを吐き出しました。 いったい何が起こったのでしょうか。

さて、コールバックURLを`callback`に指定したときのことを覚えていますか。 そのときルートを設定しなかったので、{% data variables.product.product_name %}はアプリケーションを認証した後、ユーザをどこにドロップするかがわからなかったのです。 では、この問題を解決しましょう。

#### コールバックの設定

_server.rb_にルートを追加して、コールバックが実行すべきことを指定します。

``` ruby
get '/callback' do
  # get temporary GitHub code...
  session_code = request.env['rack.request.query_hash']['code']

  # ... and POST it back to GitHub
  result = RestClient.post('https://github.com/login/oauth/access_token',
                          {:client_id => CLIENT_ID,
                           :client_secret => CLIENT_SECRET,
                           :code => session_code},
                           :accept => :json)

  # extract the token and granted scopes
  access_token = JSON.parse(result)['access_token']
end
```

アプリケーションの認証に成功すると、{% data variables.product.product_name %}は一時的な`code`値を提供します。 このコードを、`access_token`と引き換えに、`POST`で{% data variables.product.product_name %}に戻す必要があります。 GETおよびPOSTのHTTPリクエストをを簡素化するために、 [rest-client][REST Client]を使用しています。 REST経由でAPIにアクセスすることは、おそらくないということに留意してください。 もっと本格的なアプリケーションであれば、[お好みの言語で書かれたライブラリ][libraries]を使った方がいいでしょう。

#### 付与されたスコープの確認

将来的に、ユーザは[あなたがリクエストしたスコープを編集][edit scopes post]できるようになり、アプリケーションのアクセス権は、最初に要求したものより少なくなるかもしれません。 ですから、このトークンでリクエストを行う前に、ユーザからトークンに付与されたスコープを確認すべきです。

付与されたスコープは、トークンの交換によるレスポンスの一部として返されます。

``` ruby
get '/callback' do
  # ...
  # Get the access_token using the code sample above
  # ...

  # check if we were granted user:email scope
  scopes = JSON.parse(result)['scope'].split(',')
  has_user_email_scope = scopes.include? 'user:email'
end
```

このアプリケーションでは、認証されたユーザのプライベートメールアドレスをフェッチするために必要な`user:email`スコープが付与されたかを確認するため`scopes.include?`を使用しています。 アプリケーションが他のスコープを要求していた場合は、それも確認します。

また、スコープ間には階層的な関係があるため、必要な最低限のスコープが付与されたか確認する必要があります。 たとえば、アプリケーションが `user`スコープを要求していた場合、`user:email`スコープしか付与されていないかもしれません。 この場合、アプリケーションが要求したスコープは付与されていないかもしれませんが、付与されたスコープで十分だったでしょう。

リクエストを行う前にのみスコープを確認するだけでは不十分です。確認時と実際のリクエスト時の間に、ユーザがスコープを変更する可能性があります。 このような場合には、成功すると思っていたAPIの呼び出しが`404`または`401`ステータスになって失敗したり、情報の別のサブセットを返したりします。

この状況にうまく対応できるように、有効なトークンによるリクエストに対するすべてのAPIレスポンスには、[`X-OAuth-Scopes`ヘッダ][oauth scopes]も含まれています。 このヘッダには、リクエストを行うために使用されたトークンのスコープのリストが含まれています。 それに加えて、OAuthアプリケーションAPIは、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}\[check a token for validity\]\[/v3/apps/oauth_applications/#check-a-token\]{% else %}\[check a token for validity\]\[/v3/apps/oauth_applications/#check-an-authorization\]{% endif %}にエンドポイントを提供します。 この情報を使用してトークンのスコープにおける変更を検出し、利用可能なアプリケーション機能の変更をユーザに通知します。

#### 認証リクエストの実施

最後に、このアクセストークンで、ログインしたユーザとして認証のリクエストを行うことができます。

``` ruby
# fetch user information
auth_result = JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user',
                                        {:params => {:access_token => access_token}}))

# if the user authorized it, fetch private emails
if has_user_email_scope
  auth_result['private_emails'] =
    JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user/emails',
                              {:params => {:access_token => access_token}}))
end

erb :basic, :locals => auth_result
```

この結果を使って、やりたいことができます。 この例では、それらを単純に_basic.erb_に直接書き出します。

``` erb
<p>Hello, <%= login %>!</p>
<p>
  <% if !email.nil? && !email.empty? %> It looks like your public email address is <%= email %>.
  <% else %> It looks like you don't have a public email. That's cool.
  <% end %>
</p>
<p>
  <% if defined? private_emails %>
  With your permission, we were also able to dig up your private email addresses:
  <%= private_emails.map{ |private_email_address| private_email_address["email"] }.join(', ') %>
  <% else %>
  Also, you're a bit secretive about your private email addresses.
  <% end %>
</p>
```

### 「永続的な」認証の実装

ウェブページにアクセスするたびに、ユーザにアプリケーションへのログインを求めるというのは非常に悪いモデルです。 たとえば、`http://localhost:4567/basic`に直接移動してみてください。 エラーになるでしょう。

「ここをクリック」というプロセスをすべてなくし、ユーザが{% data variables.product.product_name %}にログインしている限りそれを_記憶_して、このアプリケーションにアクセスできるとしたらどうでしょうか。 実のところ、_これからやろうとしていること_はまさにそういうことなのです。

上記に上げたサーバはかなり単純なものです。 インテリジェントな認証を入れるために、トークンを保存するためセッションを使用するよう切り替えます。 これにより、認証はユーザーに意識されないものになります。

また、セッション内のスコープを永続的にしているため、そのスコープを確認した後にユーザが更新した場合や、トークンを取り消した場合に対処する必要があります。 これを行うために、`rescue`ブロックを使用し、最初のAPI呼び出しが成功したことを確認し、トークンがまだ有効であることを確かめます。 次に、`X-OAuth-Scopes`レスポンスヘッダで、ユーザが`user:email`スコープを取り消していないことを確かめます。

_advanced_server.rb_というファイルを作成し、以下の行を貼り付けてください。

``` ruby
require 'sinatra'
require 'rest_client'
require 'json'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
# if ENV['GITHUB_CLIENT_ID'] && ENV['GITHUB_CLIENT_SECRET']
#  CLIENT_ID        = ENV['GITHUB_CLIENT_ID']
#  CLIENT_SECRET    = ENV['GITHUB_CLIENT_SECRET']
# end

CLIENT_ID = ENV['GH_BASIC_CLIENT_ID']
CLIENT_SECRET = ENV['GH_BASIC_SECRET_ID']

use Rack::Session::Pool, :cookie_only => false

def authenticated?
  session[:access_token]
end

def authenticate!
  erb :index, :locals => {:client_id => CLIENT_ID}
end

get '/' do
  if !authenticated?
    authenticate!
  else
    access_token = session[:access_token]
    scopes = []

    begin
      auth_result = RestClient.get('{% data variables.product.api_url_code %}/user',
                                   {:params => {:access_token => access_token},
                                    :accept => :json})
    rescue => e
      # request didn't succeed because the token was revoked so we
      # invalidate the token stored in the session and render the
      # index page so that the user can start the OAuth flow again

      session[:access_token] = nil
      return authenticate!
    end

    # the request succeeded, so we check the list of current scopes
    if auth_result.headers.include? :x_oauth_scopes
      scopes = auth_result.headers[:x_oauth_scopes].split(', ')
    end

    auth_result = JSON.parse(auth_result)

    if scopes.include? 'user:email'
      auth_result['private_emails'] =
        JSON.parse(RestClient.get('{% data variables.product.api_url_code %}/user/emails',
                       {:params => {:access_token => access_token},
                        :accept => :json}))
    end

    erb :advanced, :locals => auth_result
  end
end

get '/callback' do
  session_code = request.env['rack.request.query_hash']['code']

  result = RestClient.post('https://github.com/login/oauth/access_token',
                          {:client_id => CLIENT_ID,
                           :client_secret => CLIENT_SECRET,
                           :code => session_code},
                           :accept => :json)

  session[:access_token] = JSON.parse(result)['access_token']

  redirect '/'
end
```

コードの大部分は見慣れたもののはずです。 たとえば、ここでも{% data variables.product.product_name %} APIを呼び出すために`RestClient.get`を使用し、 またERBテンプレート (この例では`advanced.erb`) に結果をレンダリングするため結果を渡しています。

また、ここでは`authenticated?`メソッドを使い、ユーザがすでに認証されているかを確認しています。 認証されていない場合は、`authenticate!`メソッドが呼び出され、OAuthのフローを実行して、付与されたトークンとスコープでセッションを更新します。

次に、 _views_内に_advanced.erb_というファイルを作成し、以下のマークアップを貼り付けてください。

``` erb
<html>
  <head>
  </head>
  <body>
    <p>Well, well, well, <%= login %>!</p>
    <p>
      <% if !email.empty? %> It looks like your public email address is <%= email %>.
      <% else %> It looks like you don't have a public email. That's cool.
      <% end %>
    </p>
    <p>
      <% if defined? private_emails %>
      With your permission, we were also able to dig up your private email addresses:
      <%= private_emails.map{ |private_email_address| private_email_address["email"] }.join(', ') %>
      <% else %>
      Also, you're a bit secretive about your private email addresses.
      <% end %>
    </p>
  </body>
</html>
```

コマンドラインから`ruby advanced_server.rb`を呼び出します。このコマンドは、ポート`4567` (単純なSinatraアプリケーションを使用していた時と同じポート) でサーバーを起動します。 `http://localhost:4567` に移動すると、アプリケーションは`authenticate!`を呼び出し、`/callback`にリダイレクトします。 そして`/callback`で`/`に戻され、認証が終わっているので_advanced.erb_がレンダリングされます。

{% data variables.product.product_name %}のコールバックURLを`/`にするだけで、このラウンドトリップ経路を単純化できました。 ただし、_server.rb_と_advanced.rb_の両方が同じコールバックURLに依存しているため、動作は少し不安定になります。

また、このアプリケーションを{% data variables.product.product_name %}データにアクセスするよう認証したことがない場合、以前と同じ確認ダイアログが表示され、警告されるでしょう。

[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[Sinatra]: http://www.sinatrarb.com/
[about env vars]: http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables
[Sinatra guide]: https://github.com/sinatra/sinatra-book/blob/master/book/Introduction.markdown#hello-world-application
[REST Client]: https://github.com/archiloque/rest-client
[libraries]: /libraries/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[edit scopes post]: https://developer.github.com/changes/2013-10-04-oauth-changes-coming/
[new oauth app]: https://github.com/settings/applications/new
[app settings]: https://github.com/settings/developers

---
title: 認証の基本
intro: さまざまな認証方法について、いくつかの例で学びます。
redirect_from:
  - /guides/basics-of-authentication
  - /v3/guides/basics-of-authentication
  - /rest/basics-of-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 3e2796e83047f4e8bb6b7e9a503eee6dac63f019
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131388'
---
このセクションでは、認証の基本に焦点を当てます。 具体的には、複数の異なる方法でアプリケーションの [Web フロー][webflow]を実装する Ruby サーバー ([Sinatra][Sinatra] を使用) を作成します。

{% tip %}

このプロジェクトの完全なソース コードは、[platform-samples リポジトリから](https://github.com/github/platform-samples/tree/master/api/)ダウンロードできます。

{% endtip %}

## アプリを登録する

まず、[アプリケーションを登録する][new oauth app]必要があります。 登録した各 OAuth アプリケーションには、一意のクライアント ID とクライアント シークレットが割り当てられます。
クライアントシークレットは共有しないでください。 それには文字列をリポジトリにチェックインすることが含まれます。

**[承認コールバック URL]** を除き、必要に応じてすべての情報を入力できます。 これは間違いなく、アプリケーションの設定にあたって最も重要な情報です。 認証の成功後に {% data variables.product.product_name %} からユーザーに返されるのは、そのコールバック URL です。

通常の Sinatra サーバーを実行しているため、ローカル インスタンスの場所は `http://127.0.0.1:4567` に設定されています。 コールバック URL を「`http://127.0.0.1:4567/callback`」として入力しましょう。

## ユーザ認証の承認

{% data reusables.apps.deprecating_auth_with_query_parameters %}

さて、簡単なサーバーの入力を始めましょう。 _server.rb_ という名前のファイルを作成し、そこに、これを貼り付けます。

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

クライアント ID とクライアント シークレット キーは、[アプリケーションの構成ページ][app settings]から取得されます。{% ifversion fpt or ghec %}これらの値は、{% data variables.product.product_name %} や、その他あらゆるパブリックな場所には、**決して _保存 "しないで" ください。{% endif %}それらを [環境変数][about env vars]として保存することをお勧めします。ここでも、そのようにしています。_**

次に、_views/index.erb_ にこの内容を貼り付けます。

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
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=<%= client_id %>">Click here</a> to begin!
    </p>
    <p>
      If that link doesn't work, remember to provide your own <a href="/apps/building-oauth-apps/authorizing-oauth-apps/">Client ID</a>!
    </p>
  </body>
</html>
```

(Sinatra のしくみに詳しくない場合は、[Sinatra ガイド][Sinatra guide]を読むことをお勧めします。)

また、URL で `scope` クエリ パラメーターを使用して、アプリケーションに要求される[スコープ][oauth scopes]を定義していることにも注目してください。 このアプリケーションでは、プライベート メール アドレスを読み込むための `user:email` スコープを要求しています。

ブラウザーで `http://127.0.0.1:4567` にアクセスします。 リンクをクリックすると、{% data variables.product.product_name %} に移動し、次のようなダイアログが表示されます。![GitHub の OAuth プロンプト](/assets/images/oauth_prompt.png)

自分自身を信頼しているならば、 **[アプリの承認]** をクリックします。 おっと、 Sinatra が `404` エラーを吐き出しました。 いったい何が起こったのでしょうか。

さて、コールバック URL を `callback` に指定したときのことを覚えていますか。 そのときルートを設定しなかったので、{% data variables.product.product_name %} はアプリケーションを承認した後、ユーザーをどこに降ろせばよいかがわからなかったのです。 では、この問題を解決しましょう。

### コールバックの設定

_server.rb_ にルートを追加して、コールバックで何を実行すべきかを指定します。

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

アプリの認証に成功すると、{% data variables.product.product_name %} から一時的な `code` 値が提供されます。
このコードを `POST` し、`access_token` と引き換えに {% data variables.product.product_name %} に戻す必要があります。
GET と POST の HTTP 要求を簡略化するために、[rest-client][REST Client] を使用しています。
REST経由でAPIにアクセスすることは、おそらくないということに留意してください。 もっと本格的なアプリケーションの場合は、[好みの言語で書かれたライブラリ][libraries]を使用する方がよいでしょう。

### 付与されたスコープの確認

URL を直接変更すれば、ユーザはリクエストしたスコープを編集できます。 こうすると、アプリケーションに対して元々リクエストしたよりも少ないアクセスだけを許可できます。 トークンでリクエストを行う前に、ユーザからトークンに付与されたスコープを確認してください。 要求されたスコープと付与されたスコープの詳細については、「[OAuth アプリのスコープ](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes)」を参照してください。

付与されたスコープは、トークンの交換による応答の一部として返されます。

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

このアプリケーションでは、認証されたユーザーのプライベート メール アドレスをフェッチするのに必要な `user:email` スコープが付与されたかどうかを確認するために、`scopes.include?` を使用しています。 アプリケーションが他のスコープを要求していれば、それらについても確認します。

また、スコープ間には階層的な関係があるため、必要なスコープのうち最も下位レベルのものが付与されたか確認する必要があります。 たとえば、アプリケーションが `user` スコープを要求していた場合に、`user:email` スコープのみが付与されていることがあり得ます。 その場合、アプリケーションが要求したスコープは付与されていないかもしれませんが、付与されたスコープでも十分でしょう。

要求を行う前にだけスコープを確認するのでは不十分です。というのは、確認時と実際の要求時の間に、ユーザーがスコープを変更する可能性があるからです。
それが発生した場合、成功すると思っていた API 呼び出しが、`404` または `401` ステータスになって失敗したり、情報の別のサブセットが返されたりする可能性があります。

このような状況に適切に対応できるように、有効なトークンを使用して行われた要求に対するすべての API 応答には、[`X-OAuth-Scopes` ヘッダー][oauth scopes]も含まれています。
このヘッダーには、要求を行うために使用されたトークンのスコープのリストが含まれています。 それに加えて、OAuth Applications API には、{% ifversion fpt or ghes or ghec %}[トークンの有効性を確認](/rest/reference/apps#check-a-token){% else %}[トークンの有効性を確認](/rest/reference/apps#check-an-authorization){% endif %}するためのエンドポイントが用意されています。
この情報を使用してトークンのスコープ内での変更を検出し、利用可能なアプリケーション機能における変更をユーザーに通知します。

### 認証リクエストの実施

最後に、このアクセス トークンで、ログイン済みユーザーとして認証の要求を行うことができます。

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

この結果を使って、やりたいことができます。 この場合は、_basic.erb_ に直接ダンプします。

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

## 「永続的な」認証の実装

Web ページにアクセスするたびに、ユーザーにアプリケーションへのログインを求めるとしたら、それは非常に悪いモデルです。 たとえば、`http://127.0.0.1:4567/basic` に直接移動してみてください。 エラーになるでしょう。

_ここをクリック_ プロセスを全部なくし、ユーザーが {% data variables.product.product_name %} にログインしている限り、それを "記憶" して、このアプリケーションにアクセスできるとしたらどうでしょうか。 実のところ、_これからやろうとしていること_ はまさにそういうことなのです。

上記に上げたサーバはかなり単純なものです。 インテリジェントな認証を利用する目的で、トークンを保存するためにセッションを使用するように切り替えます。
これにより、認証はユーザーに意識されないものになります。

また、セッション内のスコープを永続的にしているため、そのスコープを確認した後にユーザーが更新した場合や、トークンを取り消した場合に対処する必要があります。 これを行うには、`rescue` ブロックを使用し、最初の API 呼び出しが成功したことを確認して、トークンがまだ有効であることを確かめます。 その後、`X-OAuth-Scopes` 応答ヘッダーを確認して、ユーザーが `user:email` スコープを取り消していないことを確かめます。

_advanced_server.rb_ というファイルを作成し、そこに、これらの行を貼り付けます。

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

コードの大部分は見慣れたもののはずです。 たとえば、ここでも {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API を呼び出すために `RestClient.get` を使用し、また ERB テンプレート (ここでは `advanced.erb`) に結果をレンダリングするために結果を渡しています。

また、ここでは `authenticated?` メソッドを使用して、ユーザーが既に認証されていることを確認しています。 そうでない場合は、`authenticate!` メソッドが呼び出され、OAuth フローを実行して、付与されたトークンとスコープでセッションを更新します。

次に、_advanced.erb_ という _ビュー_ にファイルを作成し、このマークアップを貼り付けます。

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

コマンド ラインから、`ruby advanced_server.rb` を呼び出します。これにより、ポート `4567` (単純な Sinatra アプリを使用したときと同じポート) でサーバーを起動します。
`http://127.0.0.1:4567` に移動すると、アプリで `authenticate!` が呼び出され、`/callback` にリダイレクトされます。 `/callback` によって `/` に戻り、認証が終わっているので _advanced.erb_ がレンダリングされます。

{% data variables.product.product_name %} のコールバック URL を `/` に変更するだけで、このラウンドトリップ経路を完全に簡略化できます。 しかし、_server.rb_ と _advanced.rb_ の両方が同じコールバック URL に依存しているため、機能させるには少し不安定なことを行う必要があります。

また、このアプリケーションを {% data variables.product.product_name %} データにアクセスするように認証したことがない場合、以前のポップアップと同じ確認ダイアログが表示され、警告されるでしょう。

[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[Sinatra]: http://www.sinatrarb.com/
[about env vars]: http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables
[Sinatra guide]: https://github.com/sinatra/sinatra-book/blob/master/book/Introduction.markdown#hello-world-application
[REST Client]: https://github.com/archiloque/rest-client
[libraries]: /libraries/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/basics-of-authentication
[new oauth app]: https://github.com/settings/applications/new
[app settings]: https://github.com/settings/developers

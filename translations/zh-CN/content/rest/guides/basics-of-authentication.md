---
title: 身份验证的基础知识
intro: 通过一些示例了解几种不同的身份验证方法。
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129066'
---
在本节中，我们将重点介绍身份验证的基础知识。 具体而言，我们将（使用 [Sinatra][Sinatra]）创建 Ruby 服务器，该服务器以多种不同的方式实现应用程序的 [Web 流][webflow]。

{% tip %}

可以在 [platform-samples 存储库](https://github.com/github/platform-samples/tree/master/api/)中下载此项目的完整源代码。

{% endtip %}

## 注册应用程序

首先需要[注册应用程序][new oauth app]。 每个注册的 OAuth 应用程序都分配有一个唯一的客户端 ID 和客户端密码。
不应共享客户端密钥！ 这包括将该字符串签入存储库。

可以随意填写每条信息，但授权回叫 URL 除外。 这往往是设置应用程序中最重要的部分。 它是在身份验证成功后，{% data variables.product.product_name %} 将用户返回到的回叫 URL。

由于我们运行的是常规 Sinatra 服务器，因此本地实例的位置设置为 `http://127.0.0.1:4567`。 让我们将回叫 URL 填写为 `http://127.0.0.1:4567/callback`。

## 接受用户授权

{% data reusables.apps.deprecating_auth_with_query_parameters %}

现在开始设置我们简单的服务器。 创建名为 server.rb 的文件，并将其粘贴到其中：

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

客户端 ID 和客户端密钥来自[应用程序的配置页][app settings]。{% ifversion fpt or ghec %} 永远不应将这些值存储在 {% data variables.product.product_name %} 中或任何其他公共位置。{% endif %} 我们建议将它们存储为[环境变量][about env vars] - 这正是我们在这里所做的。

接下来，在 views/index.erb 中粘贴此内容：

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

（如果你不熟悉 Sinatra 的工作原理，建议你阅读 [Sinatra 指南][Sinatra guide]。）

另请注意，URL 使用 `scope` 查询参数来定义应用程序请求的[范围][oauth scopes]。 对于我们的应用程序，我们请求 `user:email` 范围来读取私人电子邮件地址。

将浏览器导航到 `http://127.0.0.1:4567`。 单击链接后，应该会转到 {% data variables.product.product_name %}，并显示如下所示的对话框：![GitHub 的 OAuth 提示](/assets/images/oauth_prompt.png)

如果你相信自己，请单击“授权应用”。 哇！ Sinatra 显示 `404` 错误。 是什么原因呢？

还记得我们何时将回叫 URL 指定为了 `callback` 吗？ 我们没有为它提供路由，因此 {% data variables.product.product_name %} 在用户授权应用后不知道将他们放置在什么位置。 现在我们来解决这个问题！

### 提供回调

在 server.rb 中，添加一个路由以指定回叫应执行的操作：

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

在应用成功完成身份验证后，{% data variables.product.product_name %} 将提供一个临时的 `code` 值。
需要将此代码 `POST` 回 {% data variables.product.product_name %} 以换取 `access_token`。
为了简化 GET 和 POST HTTP 请求，我们将使用 [rest-client][REST Client]。
请注意，您可能永远不会通过 REST 访问 API。 对于更重要的应用程序，可能应该使用[采用所选语言编写的库][libraries]。

### 检查授予的作用域

用户可以通过直接更改 URL 来编辑您请求的范围。 这可以授予您的应用程序比您最初请求的更少的访问权限。 因此，在使用令牌发出任何请求之前，您应该检查用户为令牌授予的作用域。 有关请求的范围和已授予的范围的详细信息，请参阅“[OAuth 应用的范围](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes)”。

已授予的范围作为交换令牌的响应的一部分返回。

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

在我们的应用程序中，我们使用 `scopes.include?` 来检查我们是否被授予了获取经过身份验证的用户的私人电子邮件地址所需的 `user:email` 范围。 如果应用程序请求了其他范围，我们也会进行相应检查。

此外，由于作用域之间存在分层关系，因此你应该检查你是否被授予了最低层级的必需范围。 例如，如果应用程序请求 `user` 范围，则它可能仅被授予 `user:email` 范围。 在这种情况下，应用程序并未获得请求的范围，但已授予的作用域仍是足够的。

仅在发出请求之前检查范围是不够的，因为用户可能会在检查与实际请求之间的时间段更改范围。
如果发生这种情况，预期成功的 API 调用可能会失败，并显示 `404` 或 `401` 状态，或者返回不同的信息子集。

为了帮助你正常处理这些情况，对于使用有效令牌发出的请求，所有 API 响应还包含一个 [`X-OAuth-Scopes` 标头][oauth scopes]。
此标头包含用于发出请求的令牌的范围列表。 除此之外，OAuth 应用程序 API 还提供终结点以{% ifversion fpt or ghes or ghec %}[检查令牌有效性](/rest/reference/apps#check-a-token){% else %}[检查令牌有效性](/rest/reference/apps#check-an-authorization){% endif %}。
使用此信息来检测令牌范围的更改，并将可用的应用程序功能的更改告知用户。

### 发出经过身份验证的请求

最后，使用此访问令牌，你将能够将在用户登录时发出经过身份验证的请求：

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

我们可以用我们的结果做任何我们想做的事。 在这种情况下，我们只需将它们直接转储到 basic.erb 中：

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

## 实现“持久”身份验证

如果我们要求用户每次访问网页时都必须登录应用，这将是一个非常糟糕的模式。 例如，尝试直接导航到 `http://127.0.0.1:4567/basic`。 您会收到一个错误。

如果我们能够绕过整个“单击此处”的过程，并且记住，只要用户登录到 {% data variables.product.product_name %}，他们应该就能够访问此应用程序，应该怎么办呢？ 坚持此做法，因为这正是我们要做的。

我们的上述小服务器相当简单。 为了加入一些智能身份验证功能，我们将切换到使用会话来存储令牌。
这将使身份验证对用户透明化。

此外，由于我们在会话中保留范围，因此我们需要处理用户在经过我们检查后更新范围或撤消令牌的情况。 为此，我们将使用 `rescue` 块，并检查第一个 API 调用是否成功，以验证令牌是否仍然有效。 之后，我们将检查 `X-OAuth-Scopes` 响应头，以验证用户是否尚未撤销 `user:email` 范围。

创建名为 advanced_server.rb 的文件，并将以下行粘贴到其中：

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

许多代码应该看起来很熟悉。 例如，我们仍使用 `RestClient.get` 来调用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API，仍将结果传递到 ERB 模板（在此处称为 `advanced.erb`）中进行呈现。

此外，我们现在有 `authenticated?` 方法，用于检查用户是否已通过身份验证。 如果未通过，则调用 `authenticate!` 方法，该方法执行 OAuth 流并使用授予的令牌和范围更新会话。

接下来，在视图中创建一个名为 advanced.erb 的文件，并将此标记粘贴到其中 ：

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

从命令行调用 `ruby advanced_server.rb`，它会在端口 `4567`（在具有一个简单的 Sinatra 应用时使用的相同端口）上启动服务器。
导航到 `http://127.0.0.1:4567` 时，应用将调用重定向到 `/callback` 的 `authenticate!`。 然后 `/callback` 将我们发送回 `/`，并且由于我们已经过身份验证，因此会呈现 advanced.erb。

我们只需将 {% data variables.product.product_name %} 中的回叫 URL 更改为 `/` 即可完全简化此往返路由。 但是，由于 server.rb 和 advanced.rb 都依赖于同一回叫 URL，因此我们必须执行一些操作来使其正常运行 。

此外，如果我们从未授权此应用程序访问 {% data variables.product.product_name %} 数据，我们会在早期的弹出和警告窗口中看到相同的确认对话框。

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

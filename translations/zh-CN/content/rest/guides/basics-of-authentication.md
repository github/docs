---
title: 身份验证基础知识
intro: 通过一些示例了解几种不同的身份验证方法。
redirect_from:
  - /guides/basics-of-authentication
  - /v3/guides/basics-of-authentication
  - /rest/basics-of-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


在本节中，我们将重点介绍身份验证的基础知识。 具体来说，我们将创建一个 Ruby 服务器（使用 [Sinatra][Sinatra])， 以几种不同的方式实现应用程序的 [web 流][webflow]。

{% tip %}

您可以[从平台样本仓库](https://github.com/github/platform-samples/tree/master/api/)下载此项目的完整源代码。

{% endtip %}

### 注册您的应用程序

首先，您需要注册[您的应用程序][new oauth app]。 每个注册的 OAuth 应用程序都被分配了一个唯一的客户端 ID 和客户端密钥。 不应共享客户端密钥！ 也不应将该字符串检入您的仓库。

您可以根据喜好填写任何信息，但**授权回调 URL** 除外。 这往往是设置应用程序中最重要的部分。 它是在身份验证成功后，{% data variables.product.product_name %} 将用户返回到的回调 URL。

由于我们运行常规的 Sinatra 服务器，因此本地实例的位置设置为 `http://localhost:4567`。 回调 URL 应填写为 `http://localhost:4567/callback`。

### 接受用户授权

{% data reusables.apps.deprecating_auth_with_query_parameters %}

现在开始设置我们简单的服务器。 创建一个名为 _server.rb_ 的文件并将以下代码粘贴到其中：

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

客户端 ID 和客户端密钥[来自应用程序的配置页面][app settings]。 您应该**永_不_**将这些值存储在
{% data variables.product.product_name %}--或任何其他公共位置，因为它们很重要。 我们建议将它们存储为
[环境变量][about env vars]--我们正是这样做的。

接下来，在 _views/index.erb_ 中粘贴此内容：

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

（如果您不熟悉 Sinatra 的工作方式，建议您阅读 [ Sinatra 指南][Sinatra guide]）。

另请注意，URL 使用 `scope` 查询参数来定义应用程序请求的[作用域][oauth scopes]。 对于我们的应用程序，我们请求 `user:email` 作用域来读取私密电子邮件地址。

将浏览器导航到 `http://localhost:4567`。 单击链接后，您应该会转到 {% data variables.product.product_name %}，并显示如下所示的对话框： ![GitHub 的 OAuth 提示](/assets/images/oauth_prompt.png)

如果您觉得没问题，请单击 **Authorize App（授权应用程序）**。 哇！ Sinatra 弹出 `404` 错误。 是什么原因呢？

哦，还记得我们指定了一个回调 URL 用于 `callback` 吗？ 我们没有为它提供路由，因此 {% data variables.product.product_name %} 在用户授权应用程序后不知道将他们带去哪里。 现在我们来解决这个问题！

#### 提供回调

在 _server.rb_ 中，添加路由以指定回调应执行的操作：

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

在应用程序身份验证成功后，{% data variables.product.product_name %} 将提供一个临时的 `code` 值。 您需要将此代码 `POST` 到 {% data variables.product.product_name %} 以换取 `access_token`。 为了简化我们的 GET 和 POST HTTP 请求，我们使用 [rest-client][REST Client]。 请注意，您可能永远不会通过 REST 访问 API。 对于更重要的应用程序，您可能需要使用[一个用您选择的语言编写的库][libraries]。

#### 检查授予的作用域

Users can edit the scopes you requested by directly changing the URL. This can grant your application less access than you originally asked for. 因此，在使用令牌发出任何请求之前，您应该检查用户为令牌授予的作用域。 For more information about requested and granted scopes, see "[Scopes for OAuth Apps](/developers/apps/scopes-for-oauth-apps#requested-scopes-and-granted-scopes)."

授予的作用域在交换令牌的响应中返回。

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

在我们的应用程序中，我们使用 `scopes.include?` 来检查我们是否被授予获取经验证用户的私密电子邮件地址所需的 `user:email` 作用域。 如果应用程序请求了其他作用域，我们也会进行相应检查。

此外，由于作用域之间存在层次关系，因此您应该检查您是否被授予了最低层级的必需作用域。 例如，如果应用程序请求了 `user` 作用域，但可能只被授予 `user:email` 作用域。 在这种情况下，应用程序并未获得它要求的作用域，不过被授予的作用域仍是足够的。

仅在发出请求之前检查作用域是不够的，因为用户可能会在检查与实际请求之间的时间段更改作用域。 如果发生这种情况，您期望成功的 API 调用可能会以 `404` 或 `401` 状态失败，或者返回不同的信息子集。

为了帮助您妥善处理这些情况，使用有效令牌发出请求的所有 API 响应还包含一个 [`X-OAuth-Scopes` 标头][oauth scopes]。 此标头包含用于发出请求的令牌的作用域列表。 除此之外，OAuth 应用程序 API 还提供 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} \[检查令牌的有效性\]\[/v3/apps/oauth_applications/#check-a-token\]{% else %}\[检查令牌的有效性\]\[/v3/apps/oauth_applications/#check-an-authorization\]{% endif %} 的端点。 使用此信息来检测令牌作用域中的更改，并将可用应用程序功能的更改告知用户。

#### 发出经过身份验证的请求

最后，使用此访问令牌，您将能够将在用户登录时发出经过身份验证的请求：

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

我们可以用我们的结果做任何我们想做的事。 在这种情况下，我们将它们直接转储到 _basic.erb_ 中：

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

### 实现“持久”身份验证

如果我们要求用户每次访问网页时都必须登录应用程序，这将是一个非常糟糕的模式。 例如，尝试直接导航到 `http://localhost:4567/basic`。 您会收到一个错误。

如果我们能够绕过整个 “点击这里”过程会怎么样：只需_记住_，只要用户登录到
{% data variables.product.product_name %}，他们就应该能够访问此应用程序？ 不用担心，
因为_这正是我们要做的_。

我们的上述小服务器相当简单。 为了加入一些智能身份验证功能，我们将切换到使用会话来存储令牌。 这将使身份验证对用户透明化。

此外，由于我们在会话中保留作用域，因此我们需要处理用户在经过我们检查后更新作用域或撤消令牌的情况。 为此，我们将使用 `rescue` 块，并检查第一个 API 调用是否成功，以验证令牌是否仍然有效。 后，我们将检查 `X-OAuth-Scopes` 响应标头，以验证用户是否尚未撤消 `user:email` 作用域。

创建一个名为 _advanced_server.rb_ 的文件，并将以下行粘贴到其中：

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

许多代码应该看起来很熟悉。 例如，我们仍使用 `RestClient.get` 来调用 {% data variables.product.product_name %} API，仍将结果传递到 ERB 模板（在此处被称为 `advanced.erb`）中进行呈现。

此外，我们现在采用 `authenticated?` 方法来检查用户是否已通过身份验证。 如果否，则调用 `authenticate!` 方法，该方法执行 OAuth 流并使用授予的令牌和作用域更新会话。

接下来，在名为 _advanced.erb_ 的_视图_中创建一个文件，并将以下标记粘贴到其中：

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

从命令行调用 `ruby advanced_server.rb`，这将在端口 `4567`（即我们用于简单 Sinatra 应用程序的端口）上启动服务器。 当您导航到 `http://localhost:4567` 时，应用程序会调用 `authenticate!` 将您重定向到 `/callback`。 然后，`/callback` 将我们送回 `/`，由于我们已通过身份验证，因此将呈现 _advanced.erb_。

我们只需将 {% data variables.product.product_name %} 中的回调 URL 更改为 `/` 即可完全简化此往返路由。 但是，由于 _server.rb_ 和 _advanced.rb_ 都依赖于相同的回调 URL，因此我们必须费一点力气使其行之有效。

此外，如果我们从未授权此应用程序访问我们的 {% data variables.product.product_name %} 数据，我们会在早期的弹出和警告窗口中看到相同的确认对话框。

[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[Sinatra]: http://www.sinatrarb.com/
[about env vars]: http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables
[Sinatra guide]: https://github.com/sinatra/sinatra-book/blob/master/book/Introduction.markdown#hello-world-application
[REST Client]: https://github.com/archiloque/rest-client
[libraries]: /libraries/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[oauth scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[new oauth app]: https://github.com/settings/applications/new
[app settings]: https://github.com/settings/developers

---
title: 设置开发环境以创建 GitHub 应用程序
intro: '了解扩展和构建新 {% data variables.product.prodname_github_apps %} 的基础。'
redirect_from:
  - /apps/quickstart-guides/setting-up-your-development-environment
  - /developers/apps/setting-up-your-development-environment-to-create-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Development environment
ms.openlocfilehash: 61370cfa0643bcba91cfe78e077346cd40286e1e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085031'
---
## 简介

本指南将演练配置 GitHub 应用程序并在服务器上运行它所需的步骤。 GitHub 应用程序需要一些设置步骤来管理 web 挂钩事件并将 GitHub 上的应用程序注册连接到您的代码。 本指南中的应用程序可用作扩展和构建新 GitHub 应用程序的基础。

在本指南结束之前，您将注册 GitHub 应用程序并设置 web 服务器以接收 web 挂钩事件。 您将学习如何使用名为 Smee 的工具捕获 web 挂钩有效负载，并将它们转发到本地开发环境。 你将在本部分中配置的模板应用还没有进行任何特别的操作，但它将作为一个框架，你可以使用该框架开始使用 API 编写应用代码或完成其他[快速入门指南](/apps/quickstart-guides/)。 {% ifversion fpt or ghec %}可以在 [GitHub 市场](https://github.com/marketplace)中查看应用的成功示例，并[与 GitHub 配合使用](https://github.com/works-with)。{% endif %}

完成此项目后，您将了解如何验证为 GitHub 应用程序和安装设施，以及这些身份验证方法有何不同。

以下是配置模板 GitHub 应用程序的步骤：

1. [启动新的 Smee 通道](#step-1-start-a-new-smee-channel)
1. [注册新的 GitHub 应用](#step-2-register-a-new-github-app)
1. [保存私钥和应用 ID](#step-3-save-your-private-key-and-app-id)
1. [准备运行时环境](#step-4-prepare-the-runtime-environment)
1. [审查 GitHub 应用模板代码](#step-5-review-the-github-app-template-code)
1. [启动服务器](#step-6-start-the-server)
1. [在帐户上安装应用](#step-7-install-the-app-on-your-account)

{% data reusables.apps.app-ruby-guides %}

## 先决条件

您可能会发现对以下内容有基本的了解很有帮助：

* [GitHub 应用](/apps/about-apps)
* [Webhook](/webhooks)
* [Ruby 编程语言](https://www.ruby-lang.org/en/)
* [REST API](/rest)
* [Sinatra](http://sinatrarb.com/)

但是，任何经验水平都能跟上步伐。 我们会一路提供所需信息的链接。

在开始之前，您需要使用本快速入门中所用的模板代码克隆仓库。 打开您的终端应用程序并找到要存储代码的目录。 运行以下命令以克隆 [GitHub 应用模板](https://github.com/github-developer/github-app-template)存储库：

```shell
$ git clone https://github.com/github-developer/github-app-template.git
```

## 步骤 1。 启动新的 Sme 通道

为了帮助 GitHub 将 web 挂钩发送到您的本地计算机而不将其暴露在互联网上，您可以使用一个名为 Smee 的工具。 首先，转到 https://smee.io 并单击“启动新通道”。 如果你已经熟悉向 Internet（例如 [`ngrok`](https://dashboard.ngrok.com/get-started) 或 [`localtunnel`](https://localtunnel.github.io/www/)）公开本地计算机的其他工具，则可以随意使用这些工具。

![Smee 新通道按钮](/assets/images/smee-new-channel.png)

启动一个新的 Smee 通道并创建一个唯一的域，供 GitHub 发送 web 挂钩有效负载。 下一步需要了解此域。 下面是 `https://smee.io/qrfeVRbFbffd6vD` 的唯一域示例：

![Smee 唯一通道](/assets/images/smee-unique-domain.png)

接下来，返回终端并按照以下步骤运行 Smee 命令行接口 (CLI) 客户端：

{% note %}

注意：以下步骤与你在 Smee 通道页面中看到的“使用 CLI”说明略有不同。 不需要遵循“使用 Node.js 客户端”或“使用 Probot 的内置支持”说明。

{% endnote %}

1. 安装客户端：

    ```shell
    $ npm install --global smee-client
    ```

2. 运行客户端（将 `https://smee.io/qrfeVRbFbffd6vD` 替换为自己的域）：

    ```shell
    $ smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000
    ```

    应会看到如下输出：

    ```shell
    Forwarding https://smee.io/qrfeVRbFbffd6vD to http://127.0.0.1:3000/event_handler
    Connected https://smee.io/qrfeVRbFbffd6vD
    ```

`smee --url <unique_channel>` 命令告诉 Smee 将 Smee 通道接收到的所有 webhook 事件转发到计算机上运行的 Smee 客户端。 `--path /event_handler` 选项会将事件转发到 `/event_handler` 路由，我们将在 [后面的部分](#step-5-review-the-github-app-template-code)中介绍这些事件。 `--port 3000` 选项指定端口 3000，这是服务器将侦听的端口。 使用 Smee，您的计算机不需要向公共互联网开放即可从 GitHub 接收 web 挂钩。 您也可以在浏览器中打开 Smee URL 来检查 web 挂钩有效负载。

我们建议您在完成本指南其余步骤时保持此终端窗口打开并保持 Smee 连接。 虽然可以断开连接和重新连接 Smee 客户端而不会丢失唯一域（与 `ngrok` 不同），但你可能会发现保持连接状态并在不同的终端窗口中执行其他命令行任务更容易。

## 步骤 2. 注册新的 GitHub 应用程序

如果还没有 GitHub 帐户，现在是[加入的好时机](https://github.com/join)。 在继续之前，不要忘记验证您的电子邮件地址！ 若要注册新应用，请访问 GitHub 配置文件中的[应用设置页面](https://github.com/settings/apps)，然后单击“新建 GitHub 应用”。

![GitHub 网站，显示 **新应用程序**](/assets/images/new-app.png)

您将看到一个表单，您可以在其中输入有关应用程序的详细信息。 有关此页上字段的常规信息，请参阅“[创建 GitHub 应用](/apps/building-github-apps/creating-a-github-app/)”。 在本指南中，您需要在几个字段中输入特定数据：

{% note %}

注意：可以随时更新这些设置以指向托管服务器。

{% endnote %}

* 对于“主页 URL”，请使用 Smee 发布的域名。 例如：

    ![为主页 URL 填写 Smee 域的表单](/assets/images/homepage-url.png)

* 对于“web 挂钩 URL”，也请使用 Smee 发布的域名。 例如：

    ![为 web 挂钩 URL 填写 Smee 域的表单](/assets/images/webhook-url.png)

* 对于“web 挂钩密钥”，请创建密码来保护您的 web 挂钩端点。 这应该是只有您（和 GitHub 通过此表单）知道的密码。 此密钥很重要，因为您将从公共互联网接收有效负载，并且您将使用此密钥来验证 web 挂钩发送者。 请注意，GitHub 应用程序设置表示 web 挂钩密钥是可选的，在大多数情况下确实如此，但要使模板应用程序代码正常工作，您必须设置 web 挂钩密钥。

    ![填写 web 挂钩密钥的表单](/assets/images/webhook-secret.png)

* 在“权限和 Webhook”页面上，可以为应用指定一组权限，这决定了应用可以访问的数据量。 在“存储库权限”部分下，向下滚动到“元数据”并选择 `Access: Read-only`。 如果您决定扩展此模板应用程序，可以在以后更新这些权限。

* 在“权限和 Webhook”页面的底部，指定这是专用应用还是公共应用。 这是指谁可以安装它：是只有您自己，还是世界上任何人？ 现在，通过选择“仅在此帐户上”，将应用设为专用。

    ![GitHub 应用程序隐私](/assets/images/create_app.png)

单击“创建 GitHub 应用”以创建应用！

## 步骤 3. 保存私钥和应用程序 ID

创建应用后，将返回到[应用设置页面](https://github.com/settings/apps)。 您还有两件事要做：

* 为应用生成私钥。 稍后对应用进行身份验证时，需要此私钥。 向下滚动页面，然后单击“生成私钥”。 将生成的 `PEM` 文件（称为 _`app-name`_ - _`date`_ -`private-key.pem`）保存在可以再次找到它的目录中。

    ![私钥生成对话框](/assets/images/private_key.png)

* 记下 GitHub 为应用分配的应用 ID。 准备运行时环境时需要此信息。

    <img src="/assets/images/app_id.png" alt="Your app's ID number" width="200px"/>

## 步骤 4. 准备运行时环境

为了保证您的信息安全，我们建议将与应用程序相关的所有密钥放在应用程序可以找到的计算机内存中，而不是直接将它们放在代码中。 一个名为 [dotenv](https://github.com/bkeepers/dotenv) 的便捷开发工具将特定于项目的环境变量从 `.env` 文件加载到 `ENV`。 切勿将 `.env` 文件签入 GitHub。 这是一个本地文件，用于存储您不希望在公共互联网上公开的敏感信息。 `.env` 文件已包含在存储库的 [`.gitignore`](/github/getting-started-with-github/ignoring-files/) 文件中以防止这种情况发生。

在[先决条件部分](#prerequisites)下载的模板代码已经有一个名为 `.env-example` 的示例文件。 将示例文件从 `.env-example` 重命名为 `.env` 或创建名为 `.env` 的 `.env-example` 文件的副本。 你尚未安装 dotenv，但将在本快速入门中稍后运行 `bundle install` 时安装它。 注意：参考本指南中的步骤的快速入门可能会在 `.env-example` 文件中包含其他环境变量。 有关设置这些附加环境变量的指南，请参考 GitHub 上克隆的项目的快速入门指南。

需要将这些变量添加到 `.env` 文件中：

* _`GITHUB_PRIVATE_KEY`_ ：添加 [之前生成并保存](#step-3-save-your-private-key-and-app-id)的私钥。 使用文本编辑器打开 `.pem` 文件或使用命令行显示文件的内容：`cat path/to/your/private-key.pem`。 将文件的全部内容复制为 `.env` 文件中的 `GITHUB_PRIVATE_KEY` 的值。 注意：由于 PEM 文件不止一行，因此需要在值周围添加引号，如下例所示。
* _`GITHUB_APP_IDENTIFIER`_ ：使用在上一节中记下的应用 ID。
* _`GITHUB_WEBHOOK_SECRET`_ ：添加 webhook 密码。

下面是 `.env` 示例文件：

```
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
HkVN9...
...
-----END DSA PRIVATE KEY-----"
GITHUB_APP_IDENTIFIER=12345
GITHUB_WEBHOOK_SECRET=your webhook secret
```

## 步骤 5。 审查 GitHub 应用程序模板代码

模板应用程序代码已经包含每个 GitHub 应用程序都需要的一些代码。 本节将引导您浏览 GitHub 应用程序模板中已经存在的代码。 在本节中，您不需要完成任何步骤。 如果已经熟悉模板代码，可以直接跳到“[步骤 6. 启动服务器](#step-6-start-the-server)。”

在首选的文本编辑器中打开 `template_server.rb` 文件。 您会在整个文件中看到为模板代码提供更多上下文信息的注释。 我们建议您仔细阅读这些注释，甚至为您编写的新代码添加自己的注释。

在文件顶部，你会看到 `set :port 3000`，它将启动 Web 服务器时使用的端口设置为与在“[步骤 1. 启动新的 Smee 通道](#step-1-start-a-new-smee-channel)中将 Webhook 有效负载重定向到的端口相匹配。”

你将看到下一个代码是 `class GHApp < Sinatra::Application` 声明。 您将在此类中编写 GitHub 应用程序的所有代码。

模板中现成的类可执行以下操作：
* [读取环境变量](#read-the-environment-variables)
* [启用日志](#turn-on-logging)
* [定义前置过滤器](#define-a-before-filter)
* [定义路由处理程序](#define-a-route-handler)
* [定义帮助程序方法](#define-the-helper-methods)

### 读取环境变量

该类首先读取在“[步骤 4. 准备运行时环境](#step-4-prepare-the-runtime-environment)”中设置的三个环境变量，并将它们存储在变量中供以后使用：

``` ruby
# Expects that the private key in PEM format. Converts the newlines
PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

# Your registered app must have a secret set. The secret is used to verify
# that webhooks are sent by GitHub.
WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

# The GitHub App's identifier (type integer) set when registering an app.
APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']
```

### 启用日志

接下来是一个在开发过程中启用日志记录的代码块，这是 Sinatra 中的默认环境。 此代码在 `DEBUG` 级别打开日志记录，以便在开发应用时在终端中显示有用的输出：

``` ruby
# Turn on Sinatra's verbose logging during development
configure :development do
  set :logging, Logger::DEBUG
end
```

### 定义前置过滤器

Sinatra 使用[前置过滤器](https://github.com/sinatra/sinatra#filters)，让你可以在路由处理程序之前执行代码。 模板中的 `before` 块调用四个[帮助程序方法](https://github.com/sinatra/sinatra#helpers)。 模板应用在[后面的部分](#define-the-helper-methods)中定义这些帮助程序方法。

``` ruby
# Before each request to the `/event_handler` route
before '/event_handler' do
  get_payload_request(request)
  verify_webhook_signature
  authenticate_app
  # Authenticate the app installation in order to run API operations
  authenticate_installation(@payload)
end
```

### 定义路由处理程序

模板代码中包含空路由。 此代码处理对 `/event_handler` 路由的所有 `POST` 请求。 你将不会在本快速入门中编写此事件处理程序，但请参阅其他[快速入门指南](/apps/quickstart-guides/)，了解如何扩展此模板应用的示例。

``` ruby
post '/event_handler' do

end
```

### 定义帮助程序方法

此模板中的辅助方法可以完成大部分繁重的工作。 代码的这一部分中定义了四个辅助方法。

#### 处理 web 挂钩有效负载

第一种方法 `get_payload_request` 捕获 webhook 有效负载并将其转换为 JSON 格式，这样可以更轻松地访问有效负载的数据。

#### 验证 web 挂钩签名

第二种方法 `verify_webhook_signature` 执行 webhook 签名验证，确保 GitHub 生成了事件。 要详细了解 `verify_webhook_signature` 帮助程序方法中的代码，请参阅“[保护 webhook](/webhooks/securing/)。” 如果 web 挂钩是安全的，则此方法会将所有传入的有效负载记录到您的终端。 记录器代码有助于验证 Web 服务器是否正常运行，但是您以后可以随时删除它。

#### 验证为 GitHub 应用程序

若要进行 API 调用，你将使用 [Octokit 库](http://octokit.github.io/octokit.rb/)。 要对此库进行任何有意义的操作，都需要您（或者更确切地说是您的应用程序）进行身份验证。 GitHub 应用程序有两种身份验证方法：

- 使用 [JSON Web 令牌 (JWT)](https://jwt.io/introduction) 验证为 GitHub 应用。
- 使用安装访问令牌验证为 GitHub 应用程序的特定安装设施。

在[下一部分](#authenticating-as-an-installation)中，你将了解如何验证为安装。

利用[验证为 GitHub 应用](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)，可以执行以下几个操作：

 * 可以检索有关 GitHub 应用程序的高级别管理信息。
 * 为应用程序安装申请访问令牌。

例如，通过验证为 GitHub 应用程序，您可以检索已安装您的应用程序的帐户（组织帐户和个人帐户）列表。 不过这种身份验证方法不允许您使用 API 做很多事情。 要访问仓库的数据并代表安装设施执行操作，您需要验证为安装设施。 为此，您需要先验证为 GitHub 应用程序才能请求安装设施访问令牌。

在使用 Octokit.rb 库进行 API 调用之前，需要初始化验证为 GitHub 应用的 [Octokit 客户端](http://octokit.github.io/octokit.rb/Octokit/Client.html)。 `authenticate_app` 帮助程序方法就是这样做的！

``` ruby
# Instantiate an Octokit client authenticated as a GitHub App.
# GitHub App authentication requires that you construct a
# JWT (https://jwt.io/introduction/) signed with the app's private key,
# so GitHub can be sure that it came from the app an not altered by
# a malicious third party.
def authenticate_app
  payload = {
      # The time that this JWT was issued, _i.e._ now.
      iat: Time.now.to_i,

      # JWT expiration time (10 minute maximum)
      exp: Time.now.to_i + (10 * 60),

      # Your GitHub App's identifier number
      iss: APP_IDENTIFIER
  }

  # Cryptographically sign the JWT
  jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

  # Create the Octokit client, using the JWT as the auth token.
  @app_client ||= Octokit::Client.new(bearer_token: jwt)
end
```

上面的代码生成一个 [JSON Web 令牌 (JWT)](https://jwt.io/introduction)，并使用它（连同应用的私钥）来初始化 Octokit 客户端。 GitHub 通过使用应用程序存储的公钥验证令牌来检查请求的身份验证。 若要详细了解此代码的工作原理，请参阅“[验证为 GitHub 应用](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)”。

#### 验证为安装

“安装”是指已安装该应用的任何用户或组织帐户。 即使有人在多个仓库中安装应用程序，也只能算作一个安装设施，因为它们在同一个帐户内。 最后一个帮助程序方法 `authenticate_installation` 初始化验证为安装的 [Octokit 客户端](http://octokit.github.io/octokit.rb/Octokit/Client.html)。 此 Octokit 客户端是您用来进行经验证 API 调用的客户端。

``` ruby
# Instantiate an Octokit client authenticated as an installation of a
# GitHub App to run API operations.
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end
```

[`create_app_installation_access_token`](http://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method) Octokit 方法创建一个安装令牌。 此方法接受两个参数：

* 安装 设施(整数)：GitHub 应用程序安装设施的 ID
* 选项（哈希，默认为 `{}`）：一组可自定义的选项

每当 GitHub 应用收到 Webhook 时，它都包含一个具有 `id` 的 `installation` 对象。 使用验证为 GitHub 应用的客户端，将此 ID 传递给 `create_app_installation_access_token` 方法，以便为每个安装生成访问令牌。 由于您没有向该方法传递任何选项，因此这些选项默认为空哈希。 如果回顾[文档](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)，可以看到包含两个字段（`token` 和 `expired_at`）的 `create_app_installation_access_token` 响应。 模板代码选择响应中的令牌并初始化安装客户端。

使用此方法，您的应用程序每次收到新的 web 挂钩有效负载时，都会为触发事件的安装设施创建一个客户端。 此身份验证过程使您的 GitHub 应用程序能够在任何帐户上的所有安装设施中正常工作。

现在您可以开始进行 API 调用了！

## 步骤 6。 启动服务器

应用还没有执行任何操作，但是现在你可以让它在服务器上运行。

让 Smee 在您终端的当前选项卡中运行。 打开一个新选项卡，然后通过 `cd` 进入[克隆模板应用代码](#prerequisites)的目录。 此存储库中的 Ruby 代码将启动 [Sinatra](http://sinatrarb.com/) Web 服务器。 此代码有一些依赖项。 可以通过运行以下命令安装它们：

```shell
$ gem install bundler
```

后面是：

```shell
$ bundle install
```

安装依赖项后，您可以启动服务器：

```shell
$ bundle exec ruby template_server.rb
```

应该会看到如下所示的响应：

```shell
> == Sinatra (v2.0.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Version 3.11.2 (ruby 2.4.0-p0), codename: Love Song
> * Min threads: 0, max threads: 16
> * Environment: development
> * Listening on tcp://localhost:3000
> Use Ctrl-C to stop
```

如果看到错误，请确保已在包含 `template_server.rb` 的目录中创建了 `.env` 文件。

服务器运行后，你可以转到浏览器中的 `http://localhost:3000` 对其进行测试。 如果应用程序按预期工作，您将看到一个有用的错误页面：

<img src="/assets/images/sinatra-404.png" alt="Sinatra's 404 error page" width="500px"/>

很好！ 即使它是错误页面，它也是一个 Sinatra 错误页面，这意味着你的应用已按预期连接到服务器。 之所以会看到此消息，是因为您还没有给应用程序提供任何要显示的内容。

## 步骤 7. 在您的帐户上安装应用程序

您可以通过触发要接收的事件来测试服务器是否正在侦听您的应用程序。 你可以测试一个简单的事件，那就是在 GitHub 帐户上安装应用，此操作应该会发送 [`installation`](/webhooks/event-payloads/#installation) 事件。 如果应用收到它，你应该会在启动 `template_server.rb` 的终端选项卡中看到一些输出。

若要安装应用，请访问[应用设置页](https://github.com/settings/apps)，选择应用，然后单击边栏中的“安装应用”。 在用户名旁边，单击“安装”。

系统会询问您是在所有仓库还是所选仓库上安装应用程序。 如果你不想在所有存储库中安装该应用，也没关系！ 您可能需要创建一个沙箱仓库用于测试，并在那里安装您的应用程序。

<img src="/assets/images/install_permissions.png" alt="App installation permissions" width="500px"/>

单击“安装”后，查看终端中的输出。 你应看到与下面类似的内容：

```shell
> D, [2018-06-29T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
> D, [2018-06-29T15:45:43.773141 #30488] DEBUG -- : ----         action created
> 192.30.252.44 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0067
> D, [2018-06-29T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
> D, [2018-06-29T15:45:43.833062 #30488] DEBUG -- : ----         action created
> 192.30.252.39 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0019
```

好消息！ 这意味着您的应用程序收到了它已安装在您的 GitHub 帐户上的通知。 如果您看到以下图标，则表明您的应用程序正在服务器上按预期运行。 🙌

如果没有看到输出，请确保 Smee 在另一个终端选项卡中正常运行。如果需要重启 Smee，请注意还需要卸载并重新安装该应用以再次将 `installation` 事件发送到你的应用并在终端中查看输出 。 如果问题不在 Smee 上，请查看“[故障排除](#troubleshooting)”部分了解其他原因。

如果想知道上面的终端输出来自哪里，它是在 `template_server.rb` 中的[应用模板代码](#prerequisites) 中编写的。

## 故障排除

以下是一些常见问题和一些建议的解决方案。 如果您遇到任何其他问题，可以在 {% data variables.product.prodname_support_forum_with_url %} 中寻求帮助或建议。

* 问：我在尝试安装 Smee 命令行客户端时，收到以下错误：

    ```shell
    > npm: command not found
    ```

    答：你似乎没有安装 npm。 安装它的最佳方法是在 https://nodejs.org 下载 Node.js 包并按照相应系统的安装说明进行操作。 npm 将随 Node.js 一起安装。

* 问：我在运行服务器时，收到以下错误：

    ```shell
    > server.rb:38:in `initialize': Neither PUB key nor PRIV key: header too long (OpenSSL::PKey::RSAError)
    ```

    答：你可能没有完全正确地设置私钥环境变量。 你的 `GITHUB_PRIVATE_KEY` 变量应如下所示：

    ```
    GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
    ...
    HkVN9...
    ...
    -----END RSA PRIVATE KEY-----"
    ```

    仔细检查你是否已将正确的公钥复制到 `.env` 文件中。

* 问：我在运行服务器时，它出现故障并显示以下错误：

    ```shell
    > Octokit::Unauthorized ... 401 - Bad credentials`
    ```

    答：可能是验证为了 GitHub 应用，而不是安装。 确保遵循“[验证为安装](#authenticating-as-an-installation)”下的所有步骤，并为 API 操作使用 `@installation_client` 实例变量（使用安装访问令牌进行身份验证），而不是 `@app_client` 实例变量（通过 JWT 进行身份验证）。 `@app_client` 只能检索有关应用的高级信息并获取安装访问令牌。 它在 API 中做不了太多其他事情。

* 问：我的服务器没有监听事件！ Smee 客户端在终端窗口中运行，我正在将应用程序安装到 GitHub 上的仓库中，但是在运行服务器的终端窗口中没有看到任何输出。

    答：可能没有运行 Smee 客户端，运行 Smee 命令时使用了错误的参数，或者你的 GitHub 应用设置中可能没有正确的 Smee 域。 首先进行检查，确保 Smee 客户端正在终端选项卡中运行。如果这不是问题的原因，请访问[应用设置页面](https://github.com/settings/apps)并检查“[步骤 2. 注册新的 GitHub 应用](#step-2-register-a-new-github-app)”中显示的字段。 确保这些字段中的域与在“[步骤 1. 启动新的 Smee 通道](#step-1-start-a-new-smee-channel)”中的 `smee -u <unique_channel>` 命令中使用的域相匹配。 如果以上方法均不能解决问题，请检查是否在运行完整的 Smee 命令（包括 `--path` 和 `--port` 选项），例如：`smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000`（用自己的 Smee 域替换 `https://smee.io/qrfeVRbFbffd6vD`）。

* 问：我在调试输出中收到 `Octokit::NotFound` 404 错误：
    ```
    2018-12-06 15:00:56 - Octokit::NotFound - POST {% data variables.product.api_url_code %}/app/installations/500991/access_tokens: 404 - Not Found // See: /v3/apps/#create-a-new-installation-token:
    ```

    答：确保 `.env` 文件中的变量正确无误。 确保没有在任何其他环境变量文件（如 `bash_profile`）中设置相同的变量。 可以通过将 `puts` 语句添加到应用代码并重新运行代码来检查应用正在使用的环境变量。 例如，为确保拥有正确的私钥集，可以将 `puts PRIVATE_KEY` 添加到应用代码中：

    ```
    PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))
    puts PRIVATE_KEY
    ```

## 结束语

完成本指南后，您已了解开发 GitHub 应用程序的基本构建块！ 回顾一下：

* 注册新的 GitHub 应用程序
* 使用 Sme 接收 web 挂钩有效负载
* 通过 Sinatra 运行一个简单的 Web 服务器
* 验证为 GitHub 应用程序
* 验证为安装设施

## 后续步骤

现在，您在服务器上运行了 GitHub 应用程序。 它尚未执行任何特别的操作，但请查看其他[快速入门指南](/apps/quickstart-guides/)中的一些自定义 GitHub 应用模板的方法。

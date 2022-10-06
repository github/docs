---
title: 构建 CI 服务器
intro: 使用状态 API 构建您自己的 CI 系统。
redirect_from:
  - /guides/building-a-ci-server
  - /v3/guides/building-a-ci-server
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 5c2fcd462e9c07fb9c359525ece7896e10dd9649
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145129064'
---
[状态 API][status API] 负责将提交与测试服务绑定在一起，使你进行的每次推送都可以得到测试并体现在 {% data variables.product.product_name %} 拉取请求中。

本指南将使用该 API 来演示您可以使用的设置。
在我们的场景中，我们将：

* 在拉取请求被打开时运行我们的 CI 套件（我们将 CI 状态设置为待处理）。
* 在 CI 完成后，我们将相应地设置拉取请求的状态。

我们的 CI 系统和主机服务器将是我们想象中的虚拟物。 它们可能是 Travis、Jenkins 或其他完全不同的工具。 本指南的重点是设置和配置负责管理通信的服务器。

如果尚未下载，请务必[下载 ngrok][ngrok]，并了解如何[使用它][using ngrok]。 我们发现它在暴露本地连接方面是一款非常有用的工具。

注意：可以在 [platform-samples][platform samples] 存储库中下载此项目的完整源代码。

## 编写服务器

我们将编写一个快速的 Sinatra 应用程序，以证明我们的本地连接工作正常。
首先编写以下代码：

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

（如果你不熟悉 Sinatra 的工作原理，建议你阅读 [Sinatra 指南][Sinatra]。）

启动此服务器。 默认情况下，Sinatra 在端口 `4567` 上启动，因此你还需要配置 ngrok 开始监听。

为了使此服务器正常工作，我们需要使用 web 挂钩来设置一个仓库。
Web 挂钩应配置为在创建或合并拉取请求时触发。
继续创建一个您可以自由支配的仓库。 我们可以推荐 [@octocat 的 Spoon/Knife 存储库](https://github.com/octocat/Spoon-Knife)吗？
之后，你将在自己的存储库中创建新的 web 挂钩，向其馈送 ngrok 给你的 URL，并选择 `application/x-www-form-urlencoded` 作为内容类型：

![新的 ngrok URL](/assets/images/webhook_sample_url.png)

单击“更新 Webhook”。 应该会看到响应 `Well, it worked!`。
很好！ 单击“让我选择单个事件”，然后选择以下项：

* 状态
* 拉取请求

在发生相关操作时，{% data variables.product.product_name %} 会将这些事件发送到我们的服务器。 现在将服务器更新为直接立即处理拉取请求场景：

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "opened"
      process_pull_request(@payload["pull_request"])
    end
  end
end

helpers do
  def process_pull_request(pull_request)
    puts "It's #{pull_request['title']}"
  end
end
```

这是怎么回事？ {% data variables.product.product_name %} 发送的每个事件都附有 `X-GitHub-Event` HTTP 标头。 我们现在只关注拉取请求事件。 我们将从其中获取信息的有效负载，并返回标题字段。 在理想情况下，我们的服务器会关注每次更新拉取请求时的情况（而不仅仅是打开时的情况）。 这将确保每个新推送都通过 CI 测试。
但就此演示而言，我们只需关注它被打开时的情况。

要测试此概念验证，请在测试存储库的分支中进行一些更改，然后打开拉取请求。 您的服务器应该会做出相应的响应！

## 处理状态

服务器就位后，我们就可以开始实现第一个要求，即设置（和更新）CI 状态。 请注意，无论何时更新服务器，都可以单击“重新交付”，发送相同的有效负载。 不需要每次进行更改时都发出新的拉取请求！

由于我们在与 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 进行交互，因此我们将使用 [Octokit.rb][octokit.rb] 来管理我们的交互。 我们将使用[个人访问令牌][access token]配置该客户端：

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

之后，我们只需要在 {% data variables.product.product_name %} 上更新拉取请求以明确表示我们正在处理 CI：

``` ruby
def process_pull_request(pull_request)
  puts "Processing pull request..."
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
end
```

我们在这里做三件非常基本的事情：

* 查找仓库的全名
* 查找拉取请求的最后一个 SHA
* 将状态设置为“待处理”

就这么简单！ 从这里，你可以运行任何需要的进程来执行测试套件。 也许你会将代码传递给 Jenkins，或者通过其 API 调用另一个 Web 服务，例如 [Travis][travis api]。 之后，请务必再次更新状态。 在本示例中，我们只需将其设置为 `"success"`：

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
``` 

## 结束语

在 GitHub，我们多年来一直使用一个 [Janky][janky] 版本来管理 CI。
基本流程本质上与我们上面构建的服务器完全相同。
在 GitHub，我们：

* 在创建或更新（通过 Janky）时触发 Jenkins
* 等待关于 CI 状态的响应
* 如果代码为绿色，我们将合并拉取请求

所有这些通信都会流回我们的聊天室。 使用此示例并不需要构建自己的 CI 设置。
始终可以依赖 [GitHub 集成][integrations]。

[deploy API]: /rest/reference/repos#deployments
[status API]: /rest/reference/commits#commit-statuses
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/building-a-ci-server
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations

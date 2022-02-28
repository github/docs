---
title: 交付部署
intro: 使用部署 REST API，您可以构建与您的服务器和第三方应用程序交互的自定义工具。
redirect_from:
  - /guides/delivering-deployments
  - /guides/automating-deployments-to-integrators
  - /v3/guides/delivering-deployments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
---
 
  

[部署 API][deploy API] 为您托管在 {% data variables.product.product_name %} 上的项目提供在您自己的服务器上启动它们的功能。 结合 [状态 API][status API]，您将能够在您的代码到达 `master` 时协调部署。

本指南将使用该 API 来演示您可以使用的设置。 在我们的场景中，我们将：

* 合并拉取请求.
* 在 CI 完成后，我们将相应地设置拉取请求的状态。
* 合并拉取请求后，我们将在服务器上运行部署。

我们的 CI 系统和主机服务器将是我们想象中的虚拟物。 它们可能是 Heroku、Amazon 或其他完全不同的工具。 本指南的重点是设置和配置负责管理通信的服务器。

请务必[下载 ngrok][ngrok]（如果尚未下载），并了解如何[使用它][using ngrok]。 我们发现它在暴露本地连接方面是一款非常有用的工具。

注：您可以[从平台样本仓库][platform samples]下载此项目的完整源代码。

## 编写服务器

我们将编写一个快速的 Sinatra 应用程序，以证明我们的本地连接工作正常。 首先编写以下代码：

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

（如果您不熟悉 Sinatra 的工作方式，建议您阅读 [ Sinatra 指南][Sinatra]）。

启动此服务器。 默认情况下，Sinatra 在端口 `4567` 上启动，因此您还需要配置 ngrok 开始监听。

为了使此服务器正常工作，我们需要使用 web 挂钩来设置一个仓库。 Web 挂钩应配置为在创建或合并拉取请求时触发。 继续创建一个您可以自由支配的仓库。 我们可以推荐 [@octocat 的 Spoon/Knife 仓库](https://github.com/octocat/Spoon-Knife)吗？ 之后，您将在自己的仓库中创建新的 web 挂钩，向其馈送 ngrok 给您的 URL，并选择 `application/x-www-form-urlencoded` 作为内容类型：

![新的 ngrok URL](/assets/images/webhook_sample_url.png)

单击 **Update webhook**。 您应该会看到正文为 `Well, it worked!` 的响应。 太好了！ 单击 **Let me select individual events（让我选择单个事件）**，然后选择以下项：

* 部署
* 部署状态
* 拉取请求

在发生相关操作时，{% data variables.product.product_name %} 会将这些事件发送到我们的服务器。 我们将服务器配置为*仅*在合并拉取请求时立即处理：

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
      puts "A pull request was merged! A deployment should start now..."
    end
  end
end
```

发生了什么？ {% data variables.product.product_name %} 发送的每个事件都附有 `X-GitHub-Event` HTTP 标头。 我们现在只关注拉取请求事件。 当拉取请求被合并时（其状态为 `closed`，并且 `merged` 为 `true`），我们将启动部署。

要测试此概念验证，请在测试仓库的分支中进行一些更改，打开拉取请求，然后合并它。 您的服务器应该会做出相应的响应！

## 处理部署

服务器已就位，代码在接受审查，拉取请求已合并，现在我们需要部署项目。

我们将首先修改事件侦听器，以便在拉取请求被合并时对其进行处理，并开始关注部署：

``` ruby
when "pull_request"
  if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
    start_deployment(@payload["pull_request"])
  end
when "deployment"
  process_deployment(@payload)
when "deployment_status"
  update_deployment_status
end
```

根据拉取请求中的信息，我们将首先填写 `start_deployment` 方法：

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

部署可以附加一些元数据，其形式为 `payload` 和 `description`。 尽管这些值是可选的，但对于记录和表示信息很有帮助。

创建新部署时，将触发完全独立的事件。 因此我们的事件处理程序中有一个用于 `deployment` 的新 `switch` 单元。 在触发部署时，您可以根据此信息得到通知。

部署可能需要很长时间，因此我们需要侦听各种事件，例如，部署创建时间以及部署处于什么状态。

让我们模拟一个能够完成某些工作的部署，并注意它对输出的影响。 首先，我们来完成 `process_deployment` 方法：

``` ruby
def process_deployment
  payload = JSON.parse(@payload['payload'])
  # you can send this information to your chat room, monitor, pager, etc.
  puts "Processing '#{@payload['description']}' for #{payload['deploy_user']} to #{payload['environment']}"
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'pending')
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'success')
end
```

最后，我们将模拟将状态信息存储为控制台输出：

``` ruby
def update_deployment_status
  puts "Deployment status for #{@payload['id']} is #{@payload['state']}"
end
```

我们来分析一下发生了什么。 一个新的部署由 `start_support` 创建，它触发 `deployment` 事件。 我们从那里调用 `process_deployment` 来模拟正在进行的工作。 在处理过程中，我们还调用 `create_deployment_status`，当我们将状态切换到 `pending` 时，它让接收者知道发生了什么。

部署完成后，我们将状态设置为 `success`。

## 结论

在 GitHub，我们多年来一直使用 [Heaven][heaven] 版本来管理部署。 共同流程本质上与我们上面构建的服务器基本相同：

* 等待 CI 检查状态的响应（成功或失败）
* 如果所需的检查成功，则合并拉取请求
* Heaven 提取合并的代码，并将其部署到暂存和生产服务器上
* 同时。Heaven 还通过坐在我们聊天室中的 [Hubot][hubot] 通知所有人有关构建的信息

搞定！ 使用此示例并不需要构建自己的部署设置。 您始终可以依赖 [GitHub 集成][integrations]。

[deploy API]: /rest/reference/repos#deployments
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations

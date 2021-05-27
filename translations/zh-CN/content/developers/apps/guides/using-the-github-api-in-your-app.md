---
title: 在应用程序中使用 GitHub API
intro: 了解如何设置应用程序以侦听事件，并使用 Octokit 库执行 REST API 操作。
redirect_from:
  - /apps/building-your-first-github-app/
  - /apps/quickstart-guides/using-the-github-api-in-your-app
  - /developers/apps/using-the-github-api-in-your-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---
### 简介

本指南将帮助您构建 GitHub 应用程序并在服务器上运行它。 您构建的应用程序将为在安装该应用程序的仓库中所有打开的新议题添加标签。

此项目将引导您完成以下工作：

* 编程应用程序以侦听事件
* 使用 Octokit. rb 库执行 REST API 操作

{% data reusables.apps.app-ruby-guides %}

一旦完成了这些步骤，您就可以使用整套 GitHub API 开发其他类型的集成。 {% if currentVersion == "free-pro-team@latest" %}您可以在 [GitHub Marketplace](https://github.com/marketplace) 和[使用 GitHub](https://github.com/works-with) 中查看成功的应用程序示例。{% endif %}

### 基本要求

您可能会发现对以下内容有基本的了解很有帮助：

* [GitHub 应用程序](/apps/about-apps)
* [Web 挂钩](/webhooks)
* [Ruby 编程语言](https://www.ruby-lang.org/en/)
* [REST API](/rest)
* [Sinatra](http://sinatrarb.com/)

但是，任何经验水平都能跟上步伐。 我们会一路提供所需信息的链接。

在开始之前，您需要执行以下操作：

1. 克隆[在应用程序中使用 GitHub API](https://github.com/github-developer/using-the-github-api-in-your-app) 仓库。
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  在目录中，您将找到包含本快速入门将要使用的模板代码的 `template_server.rb` 文件以及包含已完成项目代码的 `server.rb` 文件。

1. 按照“[设置开发环境](/apps/quickstart-guides/setting-up-your-development-environment/)”快速入门中的步骤来配置和运行 `template_server.rb` 应用程序服务器。 如果您以前完成了[设置开发环境](/apps/quickstart-guides/setting-up-your-development-environment/)以外的其他 GitHub 应用程序快速入门，您应该注册一个_新_ GitHub 应用程序并启动一个新 Smee 通道以用于本快速入门。

  本快速入门包含与[设置开发环境](/apps/quickstart-guides/setting-up-your-development-environment/)快速入门相同的 `template_server.rb` 代码。 **注：**遵循[设置开发环境](/apps/quickstart-guides/setting-up-your-development-environment/)快速入门的同时，请确保使用[在应用程序中使用 GitHub API](https://github.com/github-developer/using-the-github-api-in-your-app) 仓库中包含的项目文件。

  如果在设置模板 GitHub 应用程序时遇到问题，请参阅[疑难解答](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting)部分。

### 构建应用程序

现在您已经熟悉了 `template_server.rb` 代码，您将创建可将 `needs-response` 标签自动添加到安装该应用程序的仓库中所有已打开议题的代码。

`template_server.rb` 文件包含尚未自定义的应用程序模板代码。 在本文件中，您将看到一些用于处理 web 挂钩事件的占位符代码，以及用于初始化 Octokit.rb 客户端的一些其他代码。

{% note %}

**注：**`template_server.rb` 包含许多代码注释，可补充本指南并解释其他技术细节。 您可能会发现，在继续本节之前通读该文件中的注释以概要了解代码的工作方式，将对您大有帮助。

您在本指南末尾创建的最终自定义代码存在于 [`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb) 中。 不过，尽可能等到最后再查看它吧！

{% endnote %}

以下是创建第一个 GitHub 应用程序要完成的步骤：

1. [更新应用程序权限](#step-1-update-app-permissions)
2. [添加事件处理](#step-2-add-event-handling)
3. [创建新标签](#step-3-create-a-new-label)
4. [添加标签处理](#step-4-add-label-handling)

### 步骤 1. 更新应用程序权限

如果您在[首次注册应用程序](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)时接受了默认权限，则意味着您的应用程序无法访问大多数资源。 对于此示例，您的应用程序将需要读取议题和写入标签的权限。

要更新应用程序的权限：

1. 从[应用程序设置页面](https://github.com/settings/apps)选择应用程序，然后单击边栏中的 **Permissions & Webhooks（权限和 web 挂钩）**。
1. 在“Permissions（权限）”部分，找到“Issues（议题）”，然后在其旁边的“Access（访问权限）”下拉列表中选择 **Read & write（读取和写入）**。 说明中表示，此选项将授予对议题和标签的访问权限，而这正是您所需要的。
1. 在“Subscribe to events（订阅事件）”部分，选择 **Issues（议题）**以订阅事件。
{% data reusables.apps.accept_new_permissions_steps %}

太好了！ 您的应用程序现在有权限执行所需的任务。 现在，您可以添加代码使其正常工作。

### 步骤 2. 添加事件处理

应用程序需要做的第一件事是侦听打开的新议题。 现在您已订阅 **Issues（议题）**事件，您将开始接收 [`issues`](/webhooks/event-payloads/#issues) web 挂钩，它在某些与议题相关的操作发生时触发。 您可以根据要在代码中执行的特定操作来过滤此事件类型。

GitHub 将 web 挂钩有效负载作为 `POST` 请求发送。 因为您已将 Smee web 挂钩有效负载转发到 `http://localhost/event_handler:3000`，因此您的服务器将在 `post '/event_handler'` 路由中接收 `POST` 请求有效负载。

您在[前提条件](#prerequisites)部分中下载的 `template_server.rb` 文件中已包括空 `post '/event_handler'` 路由。 空路由如下所示：

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

通过添加以下代码，使用此路由来处理 `issues` 事件：

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

GitHub 发送的每个事件都包含一个名为 `HTTP_X_GITHUB_EVENT` 的请求标头，它指示 `POST` 请求中的事件类型。 现在，您只关注 `issues` 事件类型。 每个事件都有一个附加的 `action` 字段，它指示触发事件的操作类型。 对于 `issues`，`action` 字段可以是 `assigned`、`unassigned`、`labeled`、`unlabeled`、`opened`、`edited`、`milestoned`、`demilestoned`、`closed` 或 `reopened`。

要测试事件处理程序，请尝试添加临时辅助方法。 稍后将在[添加标签处理](#step-4-add-label-handling)时进行更新。 现在，在代码的 `helpers do` 部分添加以下代码。 您可以将新方法放在其他任何辅助方法的上方或下方。 顺序无关紧要。

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

此方法接收 JSON 格式的事件有效负载作为参数。 这意味着您可以解析方法中的有效负载并深入挖掘所需的任何特定数据。 您可能会发现在某个时候检查整个有效负载很有帮助：尝试将 `logger.debug 'An issue was opened!` 更改为 `logger.debug payload`。 您看到的有效负载结构应该与 [`issues` web 挂钩事件文档中显示的](/webhooks/event-payloads/#issues)结构相匹配。

太好了！ 是时候测试更改了。

{% data reusables.apps.sinatra_restart_instructions %}

在浏览器中，访问安装应用程序的仓库。 在此仓库中打开一个新议题。 此议题可以谈论您喜欢的任何事情。 它仅用于测试。

回头查看终端时，您应该会在输出中看到一条消息：`An issue was opened!` 恭喜！ 您已将事件处理程序添加到应用程序中。 💪

### 步骤 3. 创建新标签

好，您的应用程序在有议题被打开时会告诉您。 现在，您希望它将标签 `needs-response` 添加到安装该应用程序的仓库中任何新打开的议题。

将标签_添加_到任何位置之前，您需要在仓库中_创建_自定义标签。 只需要这样做一次。 就本指南而言，请在 GitHub 上手动创建标签。 在仓库中，依次单击 **Issues（议题）**、**Labels（标签）**，然后单击 **New label（新建标签）**。 将新标签命名为 `needs-response`。

{% tip %}

**提示**：如果您的应用能够以编程方式创建标签，那岂不是很棒吗？ [它能](/rest/reference/issues#create-a-label)！ 完成本指南中的步骤后，请尝试添加代码，自行实现。

{% endtip %}

现在，标签有了，您可以对应用程序进行编程，以使用 REST API [将标签添加到任何新打开的议题中](/rest/reference/issues#add-labels-to-an-issue)。

### 步骤 4. 添加标签处理

恭喜！您来到了最后一步：向应用程序添加标签处理。 要完成此任务，您需要使用 [Octokit.rb Ruby 库](http://octokit.github.io/octokit.rb/)。

在 Octokit.rb 文档中，找到[标签方法](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html)列表。 您要使用的方法是 [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method)。

回到 `template_server.rb`，找到您以前定义的方法：

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

[`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method) 文档显示您需要向此方法传递三个参数：

* 仓库（`"owner/name"` 格式的字符串）
* 议题编号（整数）
* 标签（数组）

您可以解析有效负载以获取仓库和议题编号。 由于标签名称始终相同 (`needs-response`)，因此可以在标签数组中作为硬编码字符串传递它。 将这些片段放在一起，更新后的方法可能如下所示：

``` ruby
# When an issue is opened, add a label
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

尝试在测试仓库中打开一个新议题，看看会发生什么！ 如果没有任何反应，请尝试刷新。

在终端中看不到太多信息，_但是_您应该看到机器人用户已向该议题添加了标签。

{% note %}

**注：**当 GitHub 应用程序通过 API 执行操作（例如添加标签）时，GitHub 会显示这些操作由_机器人_帐户执行。 更多信息请参阅“[机器与机器人帐户](/apps/differences-between-apps/#machine-vs-bot-accounts)”。

{% endnote %}

如果是，恭喜！ 您已成功构建了一个可正常工作的应用程序！ 🎉

您可以在[应用程序模板仓库](https://github.com/github-developer/using-the-github-api-in-your-app)的 `server.rb` 中查看最终代码。

有关接下来可以做什么的想法，请参阅“[后续步骤](#next-steps)”。

### 疑难解答

以下是一些常见问题和一些建议的解决方案。 如果您遇到任何其他问题，可以在 {% data variables.product.prodname_support_forum_with_url %} 中寻求帮助或建议。

* **问：**我的服务器没有侦听事件！ Smee 客户端在终端窗口中运行，我通过打开新议题在 GitHub.com 上发送事件，但是在运行服务器的终端窗口中没有看到任何输出。

    **答：**您的应用程序设置中可能没有正确的 Smee 域。 访问[应用程序设置页面](https://github.com/settings/apps)，然后双击“[使用 GitHub 注册新应用程序](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)”中显示的的字段。 确保这些字段中的域与您在“[启动新的 Smee 通道](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)”中的 `smee -u <unique_channel>` 命令中使用的域相匹配。

* **问：**我的应用程序无法正常工作！ 我打开了一个新议题，但是即使刷新后也没有给它添加标签。

    **答：**请确保满足以下所有条件：

    * 您在打开议题的仓库中[安装了应用程序](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account)。
    * 您的 [Smee 客户端正在终端窗口中运行](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)。
    * 您的 [web 服务器](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server)能够在其他终端窗口中无错误运行。
    * 您的应用程序具有[对议题的读取和写入权限并且订阅了议题事件](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)。
    * 您在更新权限后[检查了电子邮件](#step-1-update-app-permissions)并接受了新权限。

### 结论

完成本指南后，您已了解开发 GitHub 应用程序的基本构建块！ 回顾一下：

* 编程应用程序以侦听事件
* 使用 Octokit. rb 库执行 REST API 操作

### 后续步骤

以下是有关接下来可以做什么的一些想法：

* [使用 GraphQL 重写应用程序](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/)！
* 使用 [Probot](https://github.com/probot/probot) 在 Node.js 中重写应用程序！
* 让应用程序检查议题上是否存在 `needs-response` 标签，如果否，则添加它。
* 当机器人成功添加标签时，在终端中显示消息。 （提示：将 `needs-response` 标签 ID 与有效负载中的标签 ID 进行比较，以作为显示消息的条件，这样只有在添加相关标签时才显示消息。）
* 向应用程序添加登录页面并为它连接 [Sinatra 路由](https://github.com/sinatra/sinatra#routes)。
* 将代码移动到托管服务器（如 Heroku）。 不要忘记使用新域更新应用程序设置。
* 在 {% data variables.product.prodname_support_forum_with_url %}{% if currentVersion == "free-pro-team@latest" %} 中分享项目或寻求建议
* 您是否构建了一款让人眼前一亮的新应用程序？您认为它可能对其他人有帮助？ [将其添加到 GitHub Marketplace](/apps/marketplace/creating-and-submitting-your-app-for-approval/)！{% endif %}

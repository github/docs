---
title: 处理注释
intro: 使用 REST API，您可以访问和管理拉取请求、议题或提交中的注释。
redirect_from:
  - /guides/working-with-comments
  - /v3/guides/working-with-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 9b3b768d66199fda62bc5e644da9539d5425215e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129040'
---
对于任何拉取请求，{% data variables.product.product_name %} 提供三种类型的注释视图：针对整个拉取请求的[拉取请求注释][PR comment]、针对拉取请求内的[特定行的注释][PR line comment]，以及针对拉取请求内的[特定提交的注释][commit comment]。 

每种类型的评论都会经过 API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} 的不同部分。
在本指南中，我们将探讨如何访问和处理每种注释。 对于每个示例，我们将使用在“octocat”存储库上[发出的此示例拉取请求][sample PR]。 和往常一样，可以在[平台示例存储库][platform-samples]中找到示例。

## 拉取请求注释

若要访问针对拉取请求的注释，请浏览[问题 API][issues]。
乍一看这似乎不符合直觉。 但是，一旦你理解了拉取请求只是包含代码的问题，使用问题 API 来针对拉取请求创建注释就合情合理了。

我们将演示如何使用 [Octokit.rb][octokit.rb] 创建 Ruby 脚本来提取拉取请求注释。 你还需要创建[个人访问令牌][personal token]。

以下代码应该可以帮助你开始使用 Octokit.rb 访问拉取请求中的注释：

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.issue_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
```

在这里，我们专门调用问题 API 来获取注释 (`issue_comments`)，同时提供存储库的名称 (`octocat/Spoon-Knife`)，以及我们感兴趣的拉取请求 ID (`1176`)。 之后，只需遍历注释以获取有关每个注释的信息即可。

## 拉取请求行注释

在差异视图中，你可以针对在拉取请求中进行的某个更改的特定方面开启讨论。 这些注释出现在已更改文件中的各个行上。 此讨论的终结点 URL 来自[拉取请求评审 API][PR Review API]。

以下代码将获取文件中所做的所有拉取请求注释（给定一个拉取请求编号）：

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.pull_request_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]
  path = comment[:path]
  position = comment[:position]

  puts "#{username} made a comment on #{post_date} for the file called #{path}, on line #{position}. It says:\n'#{content}'\n"
end
```

您会注意到，它与上面的示例非常相似。 此视图与拉取请求注释之间的不同之处在于对话的焦点。
对拉取请求的注释应予以保留，以供讨论或就代码的总体方向提出意见。 在拉取请求评审中所做的注释应该以在文件中实施特定更改的方式进行专门处理。

## 提交注释

最后一类注释专门针对单个提交。 因此，它们使用[提交注释 API][commit comment API]。

要检索对提交的注释，您需要使用该提交的 SHA1。
换句话说，您不能使用与拉取请求相关的任何标识符。 下面是一个示例：

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.commit_comments("octocat/Spoon-Knife", "cbc28e7c8caee26febc8c013b0adfb97a4edd96e").each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
```

请注意，此 API 调用将检索单行注释以及对整个提交所做的注释。

[PR comment]: https://github.com/octocat/Spoon-Knife/pull/1176#issuecomment-24114792
[PR line comment]: https://github.com/octocat/Spoon-Knife/pull/1176#discussion_r6252889
[commit comment]: https://github.com/octocat/Spoon-Knife/commit/cbc28e7c8caee26febc8c013b0adfb97a4edd96e#commitcomment-4049848
[sample PR]: https://github.com/octocat/Spoon-Knife/pull/1176
[platform-samples]: https://github.com/github/platform-samples/tree/master/api/ruby/working-with-comments
[issues]: /rest/reference/issues#comments
[personal token]: /articles/creating-an-access-token-for-command-line-use
[octokit.rb]: https://github.com/octokit/octokit.rb
[PR Review API]: /rest/reference/pulls#comments
[commit comment API]: /rest/reference/commits#get-a-commit-comment

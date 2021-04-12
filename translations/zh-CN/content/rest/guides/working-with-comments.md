---
title: 处理注释
intro: '使用 REST API，您可以访问和管理拉取请求、议题或提交中的注释。'
redirect_from:
  - /guides/working-with-comments/
  - /v3/guides/working-with-comments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---



对于任何拉取请求，{% data variables.product.product_name %} 都提供三种注释视图：作为整体的[拉取请求注释][PR comment]、拉取请求中的[特定行注释][PR line comment] 和拉取请求中的[特定提交注释][commit comment]。

每个类型的注释将通过 {% data variables.product.product_name %} API 的不同部分。 在本指南中，我们将探讨如何访问和处理每种注释。 对于每个示例，我们将使用在 "octocat" 仓库中[创建的样本拉取请求][sample PR]。 同样，您可以在[我们的平台样本仓库][platform-samples]中找到样本。

### 拉取请求注释

要访问拉取请求的注释，需要通过[议题 API][issues]。 乍一看这似乎不符合直觉。 但是，一旦您理解了拉取请求只是一个带有代码的议题，使用议题 API 来创建拉取请求注释就合情合理了。

我们将通过使用 [Octokit.rb][octokit.rb] 创建一个 Ruby 脚本来演示如何获取拉取请求注释 您还需要创建[个人访问令牌][personal token]。

以下代码应该可以帮助您开始使用 Octokit.rb 访问拉取请求中的注释：

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

在这里，我们专门调用议题 API 来获取注释 (`issue_comments`)，同时提供仓库名称 (`octocat/Spoon-Knife`) 和我们感兴趣的拉取请求 ID (`1176`)。 之后，只需遍历注释以获取有关每个注释的信息即可。

### 拉取请求行注释

在差异视图中，您可以开始讨论在拉取请求中进行的某个更改的特定方面。 这些注释出现在已更改文件中的各个行上。 此讨论的端点 URL 来自[拉取请求审查 API][PR Review API]。

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

您会注意到，它与上面的示例非常相似。 此视图与拉取请求注释之间的不同之处在于对话的焦点。 对拉取请求的注释应予以保留，以供讨论或就代码的总体方向提出意见。 在拉取请求审查中所做的注释应该以在文件中实施特定更改的方式进行专门处理。

### 提交注释

最后一类注释专门针对单个提交。 因此，它们使用 [提交注释 API][commit comment API]。

要检索对提交的注释，您需要使用该提交的 SHA1。 换句话说，您不能使用与拉取请求相关的任何标识符。 例如：

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

请注意，此 API 调用将检索单行注释以对整个提交所做的注释。

[PR comment]: https://github.com/octocat/Spoon-Knife/pull/1176#issuecomment-24114792
[PR line comment]: https://github.com/octocat/Spoon-Knife/pull/1176#discussion_r6252889
[commit comment]: https://github.com/octocat/Spoon-Knife/commit/cbc28e7c8caee26febc8c013b0adfb97a4edd96e#commitcomment-4049848
[sample PR]: https://github.com/octocat/Spoon-Knife/pull/1176
[platform-samples]: https://github.com/github/platform-samples/tree/master/api/ruby/working-with-comments
[issues]: /rest/reference/issues#comments
[personal token]: /articles/creating-an-access-token-for-command-line-use
[octokit.rb]: https://github.com/octokit/octokit.rb
[PR Review API]: /rest/reference/pulls#comments
[commit comment API]: /rest/reference/repos#get-a-commit-comment

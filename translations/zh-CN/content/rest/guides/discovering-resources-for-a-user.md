---
title: 为用户发现资源
intro: 了解如何通过向 REST API 发出经过身份验证的请求，找到您的应用程序能够为用户可靠地访问的仓库和组织。
redirect_from:
  - /guides/discovering-resources-for-a-user/
  - /v3/guides/discovering-resources-for-a-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

 

向 {% data variables.product.product_name %} API 发出经过身份验证的请求时，应用程序通常需要获取当前用户的仓库和组织。 在本指南中，我们将介绍如何可靠地发现这些资源。

为了与 {% data variables.product.product_name %} API 进行交互，我们将使用 [Octokit.rb][octokit.rb]。 您可以在[平台样本][platform samples]仓库中找到此项目的完整源代码。

### 入门指南

在完成以下示例之前，您应该阅读[“身份验证基础知识”][basics-of-authentication]指南（如果尚未阅读）。 下面的示例假定您[已注册 OAuth 应用程序][register-oauth-app]，并且您的[应用程序具有用户的 OAuth 令牌][make-authenticated-request-for-user]。

### 发现您的应用程序能够为用户访问的仓库

用户除了拥有他们自己的个人仓库之外，可能还是其他用户和组织所拥有仓库上的协作者。 总的来说，这些仓库是用户有权访问的仓库：要么是用户具有读取或写入权限的私有仓库，要么是用户具有写入权限的公共仓库。

[OAuth 作用域][scopes]和[组织应用程序策略][oap]决定了您的应用程序可以为用户访问其中哪些仓库。 使用下面的工作流程来发现这些仓库。

如往常一样，首先我们需要 [GitHub 的 Octokit.rb][octokit.rb] Ruby 库。 然后我们将配置 Octoberkit.rb，使其为我们自动处理[分页][pagination]。

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

接下来，我们将[为给定用户传递应用程序的 OAuth 令牌][make-authenticated-request-for-user]。

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

然后，我们可以获取[应用程序可以为用户访问的仓库][list-repositories-for-current-user]：

``` ruby
client.repositories.each do |repository|
  full_name = repository[:full_name]
  has_push_access = repository[:permissions][:push]

  access_type = if has_push_access
                  "write"
                else
                  "read-only"
                end

  puts "User has #{access_type} access to #{full_name}."
end
```

### 发现您的应用程序能够为用户访问的组织

应用程序可以为用户执行各种与组织相关的任务。 要执行这些任务，应用程序需要具有足够权限的 [OAuth 授权][scopes]。 例如，`read:org` 作用域允许您[列出团队][list-teams]，`user` 作用域允许您[公开用户的组织成员身份][publicize-membership]。 一旦用户将其中一个或多个作用域授予您的应用程序，您就可以获取用户的组织。

与上述发现仓库的过程一样，我们首先需要 [GitHub 的 Octokit.rb][octokit.rb] Ruby 库，并配置它为我们处理[分页][pagination]：

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

接下来，我们将[为给定用户传递应用程序的 OAuth 令牌][make-authenticated-request-for-user]，以初始化 API 客户端：

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

然后，我们可以获取[应用程序可以为用户访问的组织][list-orgs-for-current-user]：

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

#### 不要依赖公共组织

如果您从头到尾阅读了文档，您可能会注意到一种[允许列出用户的公共组织成员身份的 API 方法][list-public-orgs]。 大多数应用程序应避免使用这种 API 方法。 此方法仅返回用户的公共组织成员身份，而不会返回其私有组织成员身份。

作为应用程序开发者，您通常希望您的应用程序被授权访问用户的所有组织（公共和私有）。 上述工作流程恰好能满足您的要求。

[basics-of-authentication]: /v3/guides/basics-of-authentication/
[list-public-orgs]: /v3/orgs/#list-organizations-for-a-user
[list-repositories-for-current-user]: /v3/repos/#list-repositories-for-the-authenticated-user
[list-orgs-for-current-user]: /v3/orgs/#list-organizations-for-the-authenticated-user
[list-teams]: /v3/teams/#list-teams
[make-authenticated-request-for-user]: /v3/guides/basics-of-authentication/#making-authenticated-requests
[make-authenticated-request-for-user]: /v3/guides/basics-of-authentication/#making-authenticated-requests
[oap]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
[octokit.rb]: https://github.com/octokit/octokit.rb
[octokit.rb]: https://github.com/octokit/octokit.rb
[pagination]: /v3/#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user
[publicize-membership]: /v3/orgs/members/#set-public-organization-membership-for-the-authenticated-user
[register-oauth-app]: /v3/guides/basics-of-authentication/#registering-your-app
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/

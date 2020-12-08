---
title: ユーザのリソースを調べる
intro: REST APIに対する認証済みリクエストにおいて、アプリケーションがアクセスできるユーザのリポジトリやOrganizationを確実に調べる方法を学びます。
redirect_from:
  - /guides/discovering-resources-for-a-user/
  - /v3/guides/discovering-resources-for-a-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

 

{% data variables.product.product_name %} APIに対して認証済みのリクエストを行う際には、カレントユーザのリポジトリやOrganizationをフェッチする必要がある場合もあります。 このガイドでは、これらのリソースを確実に調べる方法について説明します。

{% data variables.product.product_name %} APIとやり取りを行うため、ここでは[Octokit.rb][octokit.rb]を使用します。 このプロジェクトの完全なソースコードは、[platform-samples][platform samples]リポジトリにあります。

### はじめましょう

まだ[「認証の基本」][basics-of-authentication]ガイドを読んでいない場合は、それを読んでから以下の例に取り組んでください。 以下の例は、[OAuthアプリケーションを登録済み][register-oauth-app]で、[アプリケーションがユーザのOAuthトークンを持っている][make-authenticated-request-for-user]ことを前提としています。

### アプリケーションでアクセス可能なユーザのリポジトリを調べる

ユーザは、個人でリポジトリを所有する他に、別のユーザやOrganizationが所有するリポジトリのコラボレータであることもあります。 ユーザがアクセス権限を持つリポジトリには、ユーザが読み込みや書き込みアクセスを持つプライベートリポジトリと、ユーザが書き込みアクセスを持つパブリックリポジトリがあります。

アプリがユーザのどのリポジトリにアクセスできるかを決めるのは、[OAuthスコープ][scopes]および[Organizationのアプリケーションポリシー][oap]です。 以下のワークフローを使用して、これらのリポジトリを調べます。

いつものように、まずは[GitHubのOctokit.rb][octokit.rb] Rubyライブラリを読み込む必要があります。 そしてOctokit.rbが[ページネーション][pagination]を自動的に処理してくれるよう設定します。

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

次に、アプリケーションの[ユーザに対するOAuthトークン][make-authenticated-request-for-user]を渡します。

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

これで、[アクセス可能なユーザのリポジトリ][list-repositories-for-current-user]をフェッチする準備が整いました。

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

### アプリケーションがアクセス可能なユーザのOrganizationを調べる

アプリケーションは、ユーザに対してOrganizationに関するあらゆるタスクを実行できます。 アプリケーションがタスクを実行するには、必要な権限を持つ[OAuth認証][scopes] が必要です。 たとえば、`read:org`スコープでは[Teamのリストを取得][list-teams]でき、`user`スコープでは[ユーザのOrganizationに属するメンバーを取得][publicize-membership]できます。 ユーザがこれらのスコープのうちの1つ以上をアプリケーションに付与すると、ユーザのOrganizationをフェッチする準備が整います。

上記でリポジトリを調べたときと同様に、まずは[GitHubのOctokit.rb][octokit.rb] Rubyライブラリを呼び出し、[ページネーション][pagination]を扱えるようにしましょう。

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

次に、アプリケーションの[ユーザに対するOAuthトークン][make-authenticated-request-for-user]を渡して、APIクライアントを初期化します。

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

これで、[アプリケーションがアクセス可能なユーザのOrganizationを取得][list-orgs-for-current-user]できます。

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

#### パブリックなOrganizationに依存しない

このドキュメントを端から端まで読んだ方は、[ユーザのパブリックなOrganizationに属するメンバーを取得するAPIメソッド][list-public-orgs]に気付いたかもしれません。 ほとんどのアプリケーションでは、このAPIメソッドを避けるべきです。 このメソッドは、ユーザのパブリックなOrganizationに属するメンバーだけを返し、プライベートなOrganizationに属するメンバーは返しません。

通常、アプリケーションでは、アプリケーションにアクセスする権限が与えられたユーザのOrganization (パブリックおよびプライベート) の全てを必要とします。 上記のワークフローでは、まさにこれを実行しています。

[basics-of-authentication]: /rest/guides/basics-of-authentication
[list-public-orgs]: /rest/reference/orgs#list-organizations-for-a-user
[list-repositories-for-current-user]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[list-orgs-for-current-user]: /rest/reference/orgs#list-organizations-for-the-authenticated-user
[list-teams]: /rest/reference/teams#list-teams
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[oap]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
[octokit.rb]: https://github.com/octokit/octokit.rb
[octokit.rb]: https://github.com/octokit/octokit.rb
[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user
[publicize-membership]: /rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user
[register-oauth-app]: /rest/guides/basics-of-authentication#registering-your-app
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/

---
title: ユーザのリソースを調べる
intro: REST APIに対する認証済みリクエストにおいて、アプリケーションがアクセスできるユーザのリポジトリやOrganizationを確実に調べる方法を学びます。
redirect_from:
  - /guides/discovering-resources-for-a-user
  - /v3/guides/discovering-resources-for-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Discover resources for a user
ms.openlocfilehash: 3b3fd627260ac03d0991db73fcb5492c1284b2c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193420'
---
{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIに対して認証済みのリクエストを行う際には、アプリケーションがカレントユーザのリポジトリやOrganizationをフェッチしなければならないことがしばしばあります。 このガイドでは、これらのリソースを確実に調べる方法について説明します。

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API を使うには、[Octokit.rb][octokit.rb] を使います。 このプロジェクトの完全なソース コードは、[platform-samples][platform samples] リポジトリにあります。

## 作業の開始

まだ「[認証の基本][basics-of-authentication]」を読んでいない場合は、それを読んでから以下の例に取り組んでください。 以下の例は、[OAuth アプリケーションを登録][register-oauth-app]してあり、[アプリケーションにユーザー用の OAuth トークンがある][make-authenticated-request-for-user]ことを前提としています。

## アプリケーションでアクセス可能なユーザのリポジトリを調べる

ユーザは、個人でリポジトリを所有する他に、別のユーザやOrganizationが所有するリポジトリのコラボレータであることもあります。 まとめると、ユーザが権限を持ってアクセスできるリポジトリがあります。それはユーザが読み取りあるいは書き込みアクセスを持つプライベートリポジトリであったり、ユーザが書き込み権限を持つ{% ifversion fpt %}パブリック{% elsif ghec or ghes %}パブリックもしくはインターナル{% elsif ghae %}インターナル{% endif %}リポジトリであったりします。

[OAuth スコープ][scopes]と [Organization のアプリケーション ポリシー][oap]によって、アプリでユーザーに対してアクセスできるリポジトリが決まります。 以下のワークフローを使用して、これらのリポジトリを調べます。

いつものように、まずは [GitHub の Octokit.rb][octokit.rb] Ruby ライブラリが必要です。 そして、ページネーションを自動的に処理するように Octokit.rb を構成します。 ページネーションについて詳しくは、「[REST API でページネーションを使う](/rest/guides/using-pagination-in-the-rest-api)」をご覧ください。

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

次に、アプリケーションの[特定ユーザー用の OAuth トークン][make-authenticated-request-for-user]を渡します。

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

これで、[アプリケーションがそのユーザーに対してアクセスできるリポジトリ][list-repositories-for-current-user]をフェッチする準備ができました。

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

## アプリケーションがアクセス可能なユーザのOrganizationを調べる

アプリケーションは、ユーザに対してOrganizationに関するあらゆるタスクを実行できます。 これらのタスクを実行するには、アプリに十分な権限を持つ [OAuth 承認][scopes]が必要です。 たとえば、`read:org` スコープを使うと[チームの一覧を表示する][list-teams]ことができ、`user` スコープでは[ユーザーの Organization メンバーシップを公開する][publicize-membership]ことができます。 ユーザがこれらのスコープのうちの1つ以上をアプリケーションに付与すると、ユーザのOrganizationをフェッチする準備が整います。

上でリポジトリを調べたときと同様に、まずは [GitHub の Octokit.rb][octokit.rb] Ruby ライブラリを要求し、ページネーションを自動的に処理するように構成します。 ページネーションについて詳しくは、「[REST API でページネーションを使う](/rest/guides/using-pagination-in-the-rest-api)」をご覧ください。

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

次に、アプリケーションの[特定ユーザーに対する OAuth トークン][make-authenticated-request-for-user]を渡して、API クライアントを初期化します。

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

これで、[アプリケーションがそのユーザーに対してアクセスできる Organization の一覧を取得する][list-orgs-for-current-user]ことができます。

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

### ユーザのすべてのOrganizationメンバーシップを返す

ドキュメントをよく読むと、[ユーザーのパブリックな Organization のメンバーシップの一覧を取得する API メソッド][list-public-orgs]に気付くかもしれません。 ほとんどのアプリケーションでは、このAPIメソッドを避けるべきです。 このメソッドは、ユーザのパブリックなOrganizationに属するメンバーだけを返し、プライベートなOrganizationに属するメンバーは返しません。

アプリケーションでは通常、アクセスを認可されたすべてのユーザのOrganizationが求められます。 上記のワークフローでは、まさにこれを実行しています。

[basics-of-authentication]: /rest/guides/basics-of-authentication
[list-public-orgs]: /rest/reference/orgs#list-organizations-for-a-user
[list-repositories-for-current-user]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[list-orgs-for-current-user]: /rest/reference/orgs#list-organizations-for-the-authenticated-user
[list-teams]: /rest/reference/teams#list-teams
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[oap]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
[octokit.rb]: https://github.com/octokit/octokit.rb
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user
[publicize-membership]: /rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user
[register-oauth-app]: /rest/guides/basics-of-authentication#registering-your-app
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/

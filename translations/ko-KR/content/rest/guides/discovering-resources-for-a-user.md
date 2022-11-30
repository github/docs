---
title: 사용자에 대한 리소스 검색
intro: REST API에 대해 인증된 요청에 대해 신뢰할 수 있는 방식으로 앱이 사용자에 액세스할 수 있는 리포지토리 및 조직을 찾는 방법을 알아봅니다.
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
ms.openlocfilehash: 9650ff8dee220f0b32d74cacb0f86acd236df5b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135945'
---
{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API에 인증된 요청을 수행할 때 애플리케이션은 종종 현재 사용자의 리포지토리 및 조직을 가져와야 합니다. 이 가이드에서는 이러한 리소스를 안정적으로 검색하는 방법을 설명합니다.

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API와 상호 작용하려면 [Octokit.rb][octokit.rb]를 사용합니다. [platform-samples][platform samples] 리포지토리에서 이 프로젝트에 대한 전체 소스 코드를 찾을 수 있습니다.

## 시작

아래 예제에서 작업하기 전에 [“인증 기본 사항”][basics-of-authentication] 가이드를 읽어야 합니다. 아래 예제에서는 [OAuth 애플리케이션을 등록][register-oauth-app]했으며 [애플리케이션에 사용자에 대한 OAuth 토큰이 있다][make-authenticated-request-for-user]고 가정합니다.

## 앱이 사용자에 대해 액세스할 수 있는 리포지토리 검색

사용자는 자신의 개인 리포지토리 외에도 다른 사용자 및 조직이 소유한 리포지토리의 협력자일 수 있습니다. 전체적으로 사용자가 권한이 있는 리포지토리입니다. 즉, 사용자가 읽기 또는 쓰기 권한이 있는 개인 리포지토리이거나, 사용자가 쓰기 권한이 있는 {% ifversion fpt %}퍼블릭{% elsif ghec or ghes %}퍼블릭 또는 내부{% elsif ghae %}내부{% endif %} 리포지토리입니다.

[OAuth 범위][scopes] 및 [조직 애플리케이션 정책][oap]은 앱이 사용자에 대해 액세스할 수 있는 리포지토리를 결정합니다. 아래 워크플로를 사용하여 해당 리포지토리를 검색합니다.

언제나처럼 먼저 [GitHub Octokit.rb][octokit.rb] Ruby 라이브러리가 필요합니다. 그런 다음 [페이지 매김][pagination]을 자동으로 처리하도록 Octokit.rb를 구성합니다.

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

다음으로, [지정된 사용자에 대한 애플리케이션의 OAuth 토큰][make-authenticated-request-for-user]을 전달합니다.

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

그러면 애플리케이션에서 [사용자에 액세스할 수 있는 리포지토리][list-repositories-for-current-user]를 가져올 준비가 된 것입니다.

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

## 앱에서 사용자를 위해 액세스할 수 있는 조직 검색

애플리케이션은 사용자를 위해 모든 종류의 조직 관련 작업을 수행할 수 있습니다. 이러한 작업을 수행하려면 앱에 충분한 권한이 있는 [OAuth 권한 부여][scopes]가 필요합니다. 예를 들어 `read:org` 범위를 사용하면 [팀을 나열][list-teams]할 수 있으며, `user` 범위를 통해 [사용자의 조직 멤버 자격을 공개][publicize-membership]할 수 있습니다. 사용자가 앱에 이러한 범위 중 하나 이상을 부여하면 사용자의 조직을 가져올 준비가 된 것입니다.

위의 리포지토리를 검색할 때와 마찬가지로 먼저 [GitHub Octokit.rb][octokit.rb] Ruby 라이브러리를 요구하고 [페이지 매김][pagination]을 처리하도록 구성합니다.

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

다음으로, 지정된 사용자가 API 클라이언트를 초기화할 수 있도록 애플리케이션의 [OAuth 토큰][make-authenticated-request-for-user]을 전달합니다.

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

그러면 [애플리케이션에서 사용자에 대해 액세스할 수 있는 조직을 나열][list-orgs-for-current-user]할 수 있습니다.

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

### 사용자의 모든 조직 구성원 자격을 반환합니다.

처음부터 끝까지 문서를 읽은 경우 [사용자의 퍼블릭 조직 멤버 자격을 나열하는 API 메서드][list-public-orgs]를 발견했을 수 있습니다. 대부분의 애플리케이션은 이 API 메서드를 피해야 합니다. 이 메서드는 프라이빗 조직 구성원 자격이 아닌 사용자의 퍼블릭 조직 구성원 자격만 반환합니다.

애플리케이션은 일반적으로 앱에 액세스할 수 있는 권한이 있는 모든 사용자 조직을 원합니다. 위의 워크플로를 통해 정확하게 확인할 수 있습니다.

[basics-of-authentication]: /rest/guides/basics-of-authentication
[list-public-orgs]: /rest/reference/orgs#list-organizations-for-a-user
[list-repositories-for-current-user]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[list-orgs-for-current-user]: /rest/reference/orgs#list-organizations-for-the-authenticated-user
[list-teams]: /rest/reference/teams#list-teams
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[oap]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
[octokit.rb]: https://github.com/octokit/octokit.rb
[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user
[publicize-membership]: /rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user
[register-oauth-app]: /rest/guides/basics-of-authentication#registering-your-app
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/

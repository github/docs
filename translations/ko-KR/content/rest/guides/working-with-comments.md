---
title: 주석 작업
intro: 'REST API를 사용하여 끌어오기 요청, 문제 또는 커밋의 주석에 액세스하고 관리할 수 있습니다.'
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
ms.openlocfilehash: 80c10eb8fed0c940e09c0381c4c12784651c94fe
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098718'
---
끌어오기 요청의 경우 {% data variables.product.product_name %}은(는) [끌어오기 요청의 주석][PR comment] 전체, 끌어오기 요청 내의 [특정 줄에 대한 주석][PR line comment], 끌어오기 요청 내의 [특정 커밋에 대한 주석][commit comment]의 세 가지 종류의 주석 보기를 제공합니다. 

이러한 각 유형의 주석은 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API의 다른 부분을 통과합니다.
이 가이드에서는 각 항목에 액세스하고 조작하는 방법을 살펴보겠습니다. 모든 예제에서는 “octocat” 리포지토리에서 [만든 이 샘플 끌어오기 요청][sample PR]을 사용합니다. 언제나처럼 샘플은 [플랫폼 샘플 리포지토리][platform-samples]에서 찾을 수 있습니다.

## 끌어오기 요청 주석

끌어오기 요청에 대한 주석에 액세스하려면 [문제 API][issues]를 살펴봅니다.
처음에는 직관적이지 않은 것처럼 보일 수 있습니다. 그러나 끌어오기 요청이 코드의 문제일 뿐이라는 것을 이해하면 문제 API를 사용하여 끌어오기 요청에 대한 주석을 만드는 것이 합리적입니다.

[Octokit.rb][octokit.rb]를 사용하여 Ruby 스크립트를 만들어 끌어오기 요청 주석을 페치하는 방법을 보여 줍니다. [{% 데이터 variables.product.pat_generic %}][personal token]을(를) 만들 수도 있습니다.

다음 코드는 Octokit.rb를 사용하여 끌어오기 요청에서 주석에 액세스하는 데 도움이 됩니다.

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

여기서는 특히 문제 API를 호출하여 주석(`issue_comments`)을 가져오고, 리포지토리의 이름(`octocat/Spoon-Knife`) 및 관심 있는 끌어오기 요청 ID(`1176`)를 모두 제공합니다. 그 후에는 각 주석에 대한 정보를 페치하기 위해 주석을 반복하기만 하면 됩니다.

## 줄의 끌어오기 요청 주석

비교 보기 내에서 끌어오기 요청 내에서 이루어진 단일 변경의 특정 측면에 대한 토론을 시작할 수 있습니다. 이러한 주석은 변경된 파일 내의 개별 줄에서 발생합니다. 이 토론의 엔드포인트 URL은 [끌어오기 요청 검토 API][PR Review API]에서 가져옵니다.

다음 코드는 단일 끌어오기 요청 번호가 지정된 파일에 대한 모든 끌어오기 요청 주석을 페치합니다.

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

위의 예제와 매우 비슷하다는 것을 알 수 있습니다. 이 보기와 끌어오기 요청 주석의 차이점은 대화의 초점입니다.
끌어오기 요청에 대한 주석은 코드의 전반적인 방향에 대한 토론 또는 아이디어를 위해 예약되어야 합니다. 끌어오기 요청 검토의 일부로 만든 주석은 파일 내에서 특정 변경이 구현된 방식을 구체적으로 다루어야 합니다.

## 커밋 주석

마지막 유형의 주석은 개별 커밋에서 특히 발생합니다. 이러한 이유로 [커밋 주석 API][commit comment API]를 사용합니다.

커밋에 대한 주석을 검색하려면 커밋의 SHA1을 사용합니다.
즉, 끌어오기 요청과 관련된 식별자는 사용하지 않습니다. 예를 들면 다음과 같습니다.

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

이 API 호출은 단일 줄 주석과 전체 커밋에 대한 주석을 검색합니다.

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

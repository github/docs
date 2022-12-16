---
title: CI 서버 빌드
intro: 상태 API를 사용하여 고유한 CI 시스템을 빌드합니다.
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
ms.openlocfilehash: e8a22317562e209adca6cafa3fb8f1d55b1e04ee
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132949'
---
[상태 API][status API]는 커밋을 테스트 서비스와 함께 연결하여 수행되는 모든 푸시를 테스트하고 {% data variables.product.product_name %} 끌어오기 요청으로 나타낼 수 있도록 합니다.

이 가이드에서는 해당 API로 사용할 수 있는 설정을 보여 줍니다.
이 시나리오에서는 다음을 수행합니다.

* 끌어오기 요청이 열릴 때 CI 제품군을 실행합니다(CI 상태를 보류 중으로 설정).
* CI가 완료되면 그에 따라 끌어오기 요청의 상태를 설정합니다.

CI 시스템 및 호스트 서버는 상상력의 산물이 됩니다. Travis, Jenkins 또는 완전히 다른 무언가가 될 수 있습니다. 이 가이드의 핵심은 통신을 관리하는 서버를 설정하고 구성하는 것입니다.

아직 다운로드하지 않은 경우 를 [다운로드 `ngrok`][ngrok]하고 사용하는 방법을 알아봅니 [다][using ngrok]. 로컬 애플리케이션을 인터넷에 노출하는 데 매우 유용한 도구라고 합니다.

{% ifversion cli-webhook-forwarding %} {% note %}

**참고:** 또는 웹후크 전달을 사용하여 웹후크를 받을 로컬 환경을 설정할 수 있습니다. 자세한 내용은 "[GitHub CLI를 사용하여 웹후크 수신"을](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli) 참조하세요.

{% endnote %} {% endif %}

참고: [플랫폼 샘플 리포지토리에서][platform samples] 이 프로젝트에 대한 전체 소스 코드를 다운로드할 수 있습니다.

## 서버 작성

로컬 연결이 작동하는지 증명하기 위해 빠른 Sinatra 앱을 작성합니다.
먼저 다음을 살펴보겠습니다.

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(Sinatra의 작동 방식에 익숙하지 않은 경우 [ 가이드를 읽는 것이][Sinatra] 좋습니다.)

이 서버를 시작합니다. 기본적으로 Sinatra는 포트 `4567`에서 시작되므로 해당 수신 대기를 시작하도록 구성 `ngrok` 해야 합니다.

이 서버가 작동하려면 웹후크를 사용하여 리포지토리를 설정해야 합니다.
끌어오기 요청을 만들거나 병합할 때마다 웹후크가 실행되도록 구성해야 합니다.
계속 진행하여 편안하게 사용할 수 있는 리포지토리를 만듭니다. [@octocat의 스푼/나이프 리포지토리](https://github.com/octocat/Spoon-Knife)를 제안해보겠습니다.
그런 다음 리포지토리에 새 웹후크를 만들고, 제공한 URL `ngrok` 을 제공하고, 콘텐츠 형식으로 선택합니다 `application/x-www-form-urlencoded` .

![새 ngrok URL](/assets/images/webhook_sample_url.png)

**웹후크 업데이트** 를 클릭합니다. `Well, it worked!`라는 응답이 표시되어야 합니다.
좋습니다! **개별 이벤트 선택** 을 클릭하고 다음을 선택합니다.

* 상태
* 끌어오기 요청

관련 작업이 발생할 때마다 이벤트 {% data variables.product.product_name %}에서 서버로 보내는 이벤트입니다. 지금 바로 끌어오기 요청 시나리오를 처리하도록 서버를 업데이트해 보겠습니다.

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

왜 그럴까요? {% data variables.product.product_name %}이 전송하는 모든 이벤트에는 `X-GitHub-Event` HTTP 헤더가 첨부되었습니다. 지금은 PR 이벤트만 신경을 써야 합니다. 여기에서 정보의 페이로드를 가져와서 제목 필드를 반환합니다. 이상적인 시나리오에서는 끌어오기 요청이 열릴 때 뿐만 아니라 업데이트될 때마다 서버가 관계됩니다. 이렇게 하면 모든 새 푸시가 CI 테스트를 통과해야 합니다.
하지만 이 데모에서는 언제 열릴지만 생각합니다.

이 개념 증명을 테스트하려면 테스트 리포지토리의 분기를 몇 가지 변경하고 끌어오기 요청을 엽니다. 서버가 그에 따라 응답해야 합니다!

## 상태 작업

서버를 준비하면 CI 상태를 설정(및 업데이트)하는 첫 번째 요구 사항을 시작할 준비가 된 것입니다. 서버를 업데이트할 때마다 **Redeliver** 를 클릭하여 동일한 페이로드를 보낼 수 있습니다. 변경할 때마다 새 끌어오기 요청을 수행할 필요가 없습니다.

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API와 상호 작용하고 있으므로 [Octokit.rb][octokit.rb]를 사용하여 상호 작용을 관리합니다. [{% data variables.product.pat_generic %}을(를) 사용하여][access token] 해당 클라이언트를 구성합니다.

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
ACCESS_TOKEN = ENV['MY_PERSONAL_TOKEN']

before do
  @client ||= Octokit::Client.new(:access_token => ACCESS_TOKEN)
end
```

그 후에는 CI에서 처리 중임을 분명히 하기 위해 {% data variables.product.product_name %}에 대한 끌어오기 요청을 업데이트하기만 하면 됩니다.

``` ruby
def process_pull_request(pull_request)
  puts "Processing pull request..."
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
end
```

여기서는 세 가지 매우 기본적인 작업을 수행합니다.

* 리포지토리의 전체 이름을 찾습니다.
* 끌어오기 요청의 마지막 SHA를 찾습니다.
* 상태를 “보류 중”으로 설정합니다.

정말 간단하죠. 여기에서 테스트 제품군을 실행하기 위해 필요한 모든 프로세스를 실행할 수 있습니다. 코드를 Jenkins에 전달하거나 [Travis][travis api]와 같은 API를 통해 다른 웹 서비스를 호출할 수 있습니다. 그 후에는 상태를 다시 한 번 업데이트해야 합니다. 이 예제에서는 `"success"`로 설정하기만 하면 됩니다.

``` ruby
def process_pull_request(pull_request)
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'pending')
  sleep 2 # do busy work...
  @client.create_status(pull_request['base']['repo']['full_name'], pull_request['head']['sha'], 'success')
  puts "Pull request processed!"
end
``` 

## 결론

GitHub에서는 여러 해 동안 [Janky][janky] 버전을 사용하여 CI를 관리해 왔습니다.
기본 흐름은 기본적으로 위에서 빌드한 서버와 동일합니다.
GitHub에서는 다음을 수행합니다.

* 끌어오기 요청을 만들거나 업데이트할 때 Jenkins에 실행(Janky를 통해)
* CI 상태에 대한 응답을 기다립니다.
* 코드가 녹색이면 끌어오기 요청을 병합합니다.

이 모든 통신은 채팅방으로 다시 유입됩니다. 이 예제를 사용하기 위해 고유한 CI 설정을 빌드할 필요가 없습니다.
항상 [GitHub 통합][integrations]에 의존할 수 있습니다.

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

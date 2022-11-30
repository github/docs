---
title: 배포 제공
intro: 배포 REST API를 사용하여 서버 및 타사 앱과 상호 작용하는 사용자 지정 도구를 빌드할 수 있습니다.
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
ms.openlocfilehash: 7ac423a27fe8b1c145efa3c135d88f08487f153a
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132987'
---
[배포 API][deploy API]는 {% data variables.product.product_name %}에 호스팅된 프로젝트에 사용자가 소유한 서버에서 프로젝트를 시작할 수 있는 기능을 제공합니다. [상태 API][status API]와 결합하면 코드가 기본 분기에 배치되는 순간, 배포를 조정할 수 있습니다.

이 가이드에서는 해당 API로 사용할 수 있는 설정을 보여 줍니다.
이 시나리오에서는 다음을 수행합니다.

* 끌어오기 요청을 병합합니다.
* CI가 완료되면 그에 따라 끌어오기 요청의 상태를 설정합니다.
* 끌어오기 요청이 병합되면 서버로의 배포를 실행합니다.

CI 시스템 및 호스트 서버는 상상한 그대로가 됩니다. Heroku, Amazon 또는 완전히 다른 무언가가 될 수 있습니다. 이 가이드의 핵심은 통신을 관리하는 서버를 설정하고 구성하는 것입니다.

아직 다운로드하지 않은 경우 를 [다운로드 `ngrok`][ngrok]하고 [사용하는][using ngrok] 방법을 알아보세요. 로컬 애플리케이션을 인터넷에 노출하는 데 매우 유용한 도구라고 합니다.

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

이 서버가 작동하려면 webhook를 사용하여 리포지토리를 설정해야 합니다.
끌어오기 요청을 만들거나 병합할 때마다 webhook가 실행되도록 구성해야 합니다.
계속 진행하여 편안하게 사용할 수 있는 리포지토리를 만듭니다. [@octocat의 스푼/나이프 리포지토리](https://github.com/octocat/Spoon-Knife)를 제안해보겠습니다.
그런 다음 리포지토리에 새 웹후크를 만들고, 제공한 URL `ngrok` 을 제공하고, 콘텐츠 형식으로 선택합니다 `application/x-www-form-urlencoded` .

![새 ngrok URL](/assets/images/webhook_sample_url.png)

**웹후크 업데이트** 를 클릭합니다. `Well, it worked!`라는 응답이 표시되어야 합니다.
좋습니다! **개별 이벤트 선택** 을 클릭하고 다음을 선택합니다.

* 배포
* 배포 상태
* 끌어오기 요청

관련 작업이 발생할 때마다 이벤트 {% data variables.product.product_name %}에서 서버로 보내는 이벤트입니다. 이제 끌어오기 요청이 병합될 때만 처리하도록 서버를 구성합니다.

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

왜 그럴까요? {% data variables.product.product_name %}이 전송하는 모든 이벤트에는 `X-GitHub-Event` HTTP 헤더가 첨부되었습니다. 지금은 PR 이벤트만 신경을 써야 합니다. 끌어오기 요청이 병합되면(해당 상태는 `closed`이고 `merged`가 `true`임) 배포를 시작합니다.

이 개념 증명을 테스트하려면 테스트 리포지토리의 분기를 몇 가지 변경하고 끌어오기 요청을 연 후 병합합니다. 서버가 그에 따라 응답해야 합니다!

## 배포 작업

서버가 배치되고 코드가 검토되고 끌어오기 요청이 병합되면 프로젝트를 배포하려고 합니다.

먼저 병합 시 끌어오기 요청을 처리하도록 이벤트 수신기를 수정하고 배포에 주의를 기울입니다.

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

끌어오기 요청의 정보에 따라 먼저 `start_deployment` 메서드를 작성합니다.

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

배포에는 일부 메타데이터가 `payload` 및 `description` 형식으로 연결되어 있을 수 있습니다. 이러한 값은 선택 사항이지만 정보를 로깅하고 나타내는 데 사용하는 것이 좋습니다.

새 배포가 만들어지면 완전히 별도의 이벤트가 트리거됩니다. 이때문에 `deployment`에 대한 이벤트 처리기에 새 `switch` 사례가 있는 것입니다. 배포가 트리거될 때 이 정보를 사용하여 알림을 받을 수 있습니다.

배포에 다소 시간이 걸릴 수 있으므로 배포가 만들어진 시기 및 배포 상태와 같은 다양한 이벤트를 수신 대기하려고 합니다.

일부 작업을 수행하는 배포를 시뮬레이트하고 출력에 미치는 영향을 살펴보겠습니다. 먼저 `process_deployment` 메서드를 완료해 보겠습니다.

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

마지막으로, 상태 정보를 콘솔 출력으로 저장하는 과정을 시뮬레이트합니다.

``` ruby
def update_deployment_status
  puts "Deployment status for #{@payload['id']} is #{@payload['state']}"
end
```

어떤 결과가 나타나는지 분석해 보겠습니다. `deployment` 이벤트를 트리거하는 `start_deployment`에 의해 새 배포가 만들어집니다. 여기에서 `process_deployment`를 호출하여 진행 중인 작업을 시뮬레이트합니다. 또한 이 처리 중에 `create_deployment_status`를 호출하여 `pending`으로 상태를 전환할 때 어떤 결과가 나타나는지를 수신자가 알도록 할 수 있습니다.

배포가 완료되면 상태를 `success`로 설정합니다.

## 결론

GitHub에서는 몇 년 동안 배포를 관리하기 위해 [Heaven][heaven] 버전을 사용했습니다. 일반적인 흐름은 기본적으로 위에서 빌드한 서버와 동일합니다.

* CI 검사 상태(성공 또는 실패)에 대한 응답 대기
* 필요한 검사가 성공하면 끌어오기 요청을 병합합니다.
* Heaven은 병합된 코드를 가져와 스테이징 및 프로덕션 서버에 배포합니다.
* 그 동안, Heaven은 채팅방에 앉아 있는 [Hubot][hubot]을 통해 빌드에 대한 사항을 모두에게 알립니다.

정말 간단하죠. 이 예제를 사용하기 위해 고유한 배포 설정을 빌드할 필요가 없습니다.
항상 [GitHub 통합][integrations]에 의존할 수 있습니다.

[deploy API]: /rest/reference/repos#deployments
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[webhook]: /webhooks/
[octokit.rb]: https://github.com/octokit/octokit.rb
[access token]: /articles/creating-an-access-token-for-command-line-use
[travis api]: https://api.travis-ci.org/docs/
[janky]: https://github.com/github/janky
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations

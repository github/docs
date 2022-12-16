---
title: 통합업체 모범 사례
intro: '{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API와 안정적으로 상호 작용하고 사용자에게 최상의 환경을 제공하는 앱을 빌드합니다.'
redirect_from:
  - /guides/best-practices-for-integrators
  - /v3/guides/best-practices-for-integrators
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Integrator best practices
ms.openlocfilehash: bdfc2449946e40b017dc028869deb7991d5a344a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193525'
---
GitHub 플랫폼과 통합하는 데 관심이 있으신가요? [좋은 회사에 근무하시는군요](https://github.com/integrations). 이 가이드는 사용자에게 최상의 환경을 제공 *하면서도* API와 안정적으로 상호 작용하는 앱을 빌드하는 데 도움이 됩니다. 

## GitHub에서 제공하는 보안 페이로드

[GitHub에서 보낸 페이로드][event-types]를 보호하는 것이 매우 중요합니다. 암호와 같은 개인 정보는 페이로드를 통해 전송되지 않지만 *어떤* 정보라도 유출되는 것은 좋지 않습니다. 중요할 수 있는 일부 정보에는 커밋한 사람 이메일 주소 또는 프라이빗 리포지토리의 이름이 포함됩니다.

다음과 같은 여러 단계를 수행하면 GitHub에서 제공하는 페이로드를 안전하게 받을 수 있습니다.

1. 수신 서버가 HTTPS 연결을 사용하는지 확인합니다. 기본적으로 GitHub는 페이로드를 제공할 때 SSL 인증서를 확인합니다.{% ifversion fpt or ghec %}
1. [후크를 제공할 때 사용하는 IP 주소](/github/authenticating-to-github/about-githubs-ip-addresses)를 서버의 허용 목록에 추가하면 됩니다. 항상 올바른 IP 주소를 확인하려면 [`/meta` 엔드포인트를 사용](/rest/reference/meta#meta)하여 사용하는 주소를 찾을 수 있습니다.{% endif %}
1. 페이로드가 확실히 GitHub에서 오도록 [비밀 토큰](/webhooks/securing/)을 제공합니다. 비밀 토큰을 적용하면 서버가 수신하는 모든 데이터는 무조건 GitHub에서 온 것입니다. 서비스 *사용자마다* 다른 비밀 토큰을 제공하는 것이 이상적입니다. 이렇게 하면 한 토큰이 손상되더라도 다른 사용자는 영향을 받지 않습니다.

## 동기보다 비동기 작업 선호

GitHub는 webhook 페이로드를 받은 후 {% ifversion fpt or ghec %}10{% else %}30{% endif %}초 내에 통합이 응답할 것으로 기대합니다. 서비스를 완료하는 데 걸리는 시간이 이보다 길어지면 GitHub가 연결을 종료하고 페이로드가 손실됩니다.

서비스가 얼마나 빨리 완료될 것인지 예측하기는 불가능하므로 백그라운드 작업에서 모든 "실제 작업"을 수행해야 합니다. [Resque](https://github.com/resque/resque/)(Ruby의 경우), [RQ](http://python-rq.org/)(Python의 경우) 또는 [RabbitMQ](http://www.rabbitmq.com/)(Java의 경우)는 백그라운드 작업의 큐 및 프로세싱을 처리할 수 있는 라이브러리의 예입니다.

백그라운드 작업이 실행 중이어도 GitHub는 여전히 서버가 {% ifversion fpt or ghec %}10{% else %}30{% endif %}초 내에 응답할 것으로 기대합니다. 서버는 일종의 응답을 전송하여 페이로드를 수신했음을 확인해야 합니다. 서버가 요청을 계속할지 여부를 정확하게 보고할 수 있도록 서비스에서 최대한 신속하게 페이로드의 유효성 검사를 수행하는 것이 중요합니다.

## GitHub에 응답할 때 적절한 HTTP 상태 코드 사용

모든 webhook에는 배포의 성공 여부를 나열하는 자체적인 "최근 배달" 섹션이 있습니다.

![최근 배달 보기](/assets/images/webhooks_recent_deliveries.png)

적절한 HTTP 상태 코드를 사용하여 사용자에게 알려야 합니다. `201` 또는 `202` 같은 코드를 사용하여 처리되지 않는 페이로드(예: 기본 분기가 아닌 다른 분기가 배달한 페이로드)를 받았다고 확인할 수 있습니다. `500` 오류 코드는 치명적인 오류에 사용하도록 예약해 둡니다.

## 사용자에게 최대한 많은 정보 제공

GitHub로 다시 보내는 서버 응답을 사용자가 자세히 살펴볼 수 있습니다. 메시지는 명확하고 구체적이어야 합니다.

![페이로드 응답 보기](/assets/images/payload_response_tab.png)

## API가 보내는 리디렉션을 따릅니다.

GitHub는 리소스가 이동되면 리디렉션 상태 코드를 제공하여 확실하게 알려줍니다. 이러한 리디렉션을 따라야 합니다. 모든 리디렉션 응답은 이동할 새 URI로 `Location` 헤더를 설정합니다. 제거 가능성이 있는 사용되지 않는 경로를 요청 중에 리디렉션을 받으면 새 URI를 따르도록 코드를 업데이트하는 것이 가장 좋습니다.

리디렉션을 따르도록 앱을 디자인할 때 주의할 [HTTP 상태 코드 목록](/rest#http-redirects)을 제공해 드렸습니다.

## URL을 수동으로 구문 분석하지 말 것

종종 API 응답에는 URL 형식의 데이터가 포함됩니다. 예를 들어 리포지토리를 요청할 때 리포지토리를 복제하는 데 사용할 수 있는 `clone_url`이라는 키를 URL로 보냅니다.

앱의 안정성을 위해 이 데이터를 구문 분석하거나 향후 URL 형식을 추측해서 구성하려고 하면 안 됩니다. URL이 변경되면 앱이 중단될 수 있습니다.

예를 들어 페이지를 매긴 결과를 작업할 때, 끝에 `?page=<number>`가 추가되는 URL을 생성하고 싶은 경우가 많습니다. 이 유혹을 참아야 합니다. 페이지를 매긴 결과 다음에 대한 자세한 내용은 "[REST API에서 페이지 매김 사용"을](/rest/guides/using-pagination-in-the-rest-api) 참조하세요.

## 이벤트를 처리하기 전에 이벤트 유형 및 작업 확인

여러 가지 [webhook 이벤트 유형][event-types]이 있으며, 각 이벤트에는 여러 작업이 있을 수 있습니다. GitHub의 기능 세트가 점점 확장되면서, 때때로 새 이벤트 유형이 추가되거나 기존 이벤트 형식에 새 작업이 추가됩니다. webhook 처리를 수행하기 전에 애플리케이션이 이벤트의 유형과 작업을 명시적으로 확인하도록 해야 합니다. 프로세싱이 적절하게 처리되도록 `X-GitHub-Event` 요청 헤더를 사용하여 수신된 이벤트를 알 수 있습니다. 마찬가지로 페이로드에는 관련 개체에 대해 수행된 작업을 파악하는 데 사용할 수 있는 최상위 `action` 키가 있습니다.

예를 들어 "**모든** 항목 보내기"로 GitHub webhook를 구성한 경우 애플리케이션은 새 이벤트 유형 및 작업이 추가될 때 수신을 시작합니다. 따라서 **모든 종류의 catch-all else 절을 사용하지 않는 것이 좋습니다**. 다음 코드 예제를 참조하세요.

```ruby
# Not recommended: a catch-all else clause
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = request.body

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issues(payload)
  else
    process_pull_requests
  end
end
```

이 코드 예제에서 `process_repository` 및 `process_issues` 메서드는 `repository` 또는 `issues` 이벤트가 수신된 경우에 올바르게 호출됩니다. 그러나 다른 이벤트 유형은 `process_pull_requests`가 호출될 수 있습니다. 새 이벤트 유형이 추가되면 잘못된 동작이 발생하며 새 이벤트 유형은 `pull_request` 이벤트가 처리되는 방식과 동일한 방식으로 처리됩니다.

그 대신 이벤트 유형을 명시적으로 확인하고 그에 따라 조치를 취하는 것이 좋습니다. 다음 코드 예제에서는 `pull_request` 이벤트를 명시적으로 확인합니다. `else` 절은 단순히 새 이벤트 유형을 수신했다고 기록합니다.

```ruby
# Recommended: explicitly check each event type
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = JSON.parse(request.body)

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issue(payload)
  when "pull_request"
    process_pull_requests(payload)
  else
    puts "Oooh, something new from GitHub: #{event_type}"
  end
end
```

또한 각 이벤트에 여러 작업이 있을 수 있으므로 마찬가지로 작업을 확인하는 것이 좋습니다. 예를 들어 [`IssuesEvent`](/webhooks/event-payloads/#issues)에는 여러 가지 가능한 작업이 있습니다. 여기에는 문제가 있는 `opened`, 문제가 종결된 `closed`, 문제가 누군가에게 할당된 `assigned`가 포함됩니다.

이벤트 유형 추가와 마찬가지로 기존 이벤트에 새 작업을 추가할 수 있습니다. 따라서 역시 이벤트의 작업을 확인할 때 **모든 종류의 catch-all else 절을 사용하지 않는 것이 좋습니다**. 그 대신 이벤트 유형과 마찬가지로 이벤트 작업을 명시적으로 확인하는 것이 좋습니다. 이 예제는 위의 이벤트 유형에서 제안한 내용과 매우 유사합니다.

```ruby
# Recommended: explicitly check each action
def process_issue(payload)
  case payload["action"]
  when "opened"
    process_issue_opened(payload)
  when "assigned"
    process_issue_assigned(payload)
  when "closed"
    process_issue_closed(payload)
  else
    puts "Oooh, something new from GitHub: #{payload["action"]}"
  end
end
```

이 예제에서는 `closed` 작업을 확인한 후 `process_closed` 메서드를 호출합니다. 나중에 참조할 수 있도록 확인되지 않은 작업이 기록됩니다.

{% ifversion fpt or ghec or ghae %}

## 속도 제한 처리

모든 사용자가 빠른 API를 사용할 수 있도록 GitHub API [속도 제한](/rest/overview/resources-in-the-rest-api#rate-limiting)이 있습니다.

속도 제한에 도달하면 더 이상 요청을 만들지 말고 나중에 가능할 때 다시 시도해야 합니다. 이렇게 하지 않으면 앱이 금지될 수 있습니다.

언제든지 [속도 제한 상태를 확인](/rest/reference/rate-limit)할 수 있습니다. 속도 제한을 확인해도 속도 제한 비용이 발생하지 않습니다.

## 보조 속도 제한 처리

[보조 속도 제한](/rest/overview/resources-in-the-rest-api#secondary-rate-limits)은 API의 가용성을 보장하는 또 다른 방법입니다.
이 제한에 도달하지 않도록 하려면 애플리케이션이 다음 지침을 준수해야 합니다.

* 인증된 요청을 만들거나 애플리케이션의 클라이언트 ID 및 비밀을 사용합니다. 인증되지 않은 요청은 보다 적극적으로 보조 속도 제한의 적용을 받습니다.
* 단일 사용자 또는 클라이언트 ID에 대한 요청을 순차적으로 만듭니다. 단일 사용자 또는 클라이언트 ID에 대한 요청을 동시에 만들지 마세요.
* 단일 사용자 또는 클라이언트 ID에 대해 많은 수의 `POST`, `PATCH`, `PUT` 또는 `DELETE` 요청을 만드는 경우 각 요청 사이에 1초 이상 기다립니다.
* 제한에 도달하면 `Retry-After` 응답 헤더를 사용하여 속도를 늦춥니다. `Retry-After` 헤더 값은 항상 정수이며, 다시 요청을 만들 때까지 기다려야 하는 시간(초)을 나타냅니다. 예를 들어 `Retry-After: 30`은 요청을 더 보내려면 30초 동안 기다려야 한다는 뜻입니다.
* 문제, 주석 및 끌어오기 요청과 같은 알림을 트리거하는 콘텐츠 만들기 요청은 더 제한될 수 있으며 응답에 `Retry-After` 헤더를 포함하지 않습니다. 속도가 더 제한되지 않도록 적절한 속도로 이 콘텐츠를 만드세요.

당사는 가용성을 보장하기 위해 필요에 따라 이러한 지침을 변경할 수 있는 권리를 보유합니다.

{% endif %}

## API 오류 처리

코드 때문에 버그가 유입되지는 않지만, API에 액세스하려고 할 때 연속적으로 오류가 발생할 수 있습니다.

반복되는 `4xx` 및 `5xx` 상태 코드를 무시하지 말고 API와 올바르게 상호 작용해야 합니다. 예를 들어 엔드포인트가 문자열을 요청하고 사용자가 숫자 값을 전달하면 `5xx` 유효성 검사 오류가 발생하고 호출이 성공하지 못합니다. 마찬가지로 권한이 없거나 존재하지 않는 엔드포인트에 액세스하려고 하면 `4xx` 오류가 발생합니다.

반복된 유효성 검사 오류를 의도적으로 무시하면 남용으로 간주하여 앱이 일시 중단될 수 있습니다.

[event-types]: /webhooks/event-payloads

---
title: 페이로드를 받도록 서버 구성
intro: 들어오는 웹후크 페이로드를 관리하도록 서버를 설정하는 방법을 알아봅니다.
redirect_from:
  - /webhooks/configuring
  - /developers/webhooks-and-events/configuring-your-server-to-receive-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Configure server for webhooks
ms.openlocfilehash: c306cadf4dd8d9cd573d694419a51179c8995797
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132984'
---
이제 웹후크가 메시지를 배달할 준비가 되었으므로 들어오는 페이로드를 처리하도록 기본 Sinatra 서버를 설정합니다.

{% note %}

**참고:** [플랫폼 샘플 리포지토리에서][platform samples] 이 프로젝트에 대한 전체 소스 코드를 다운로드할 수 있습니다.

{% endnote %}

## 서버 작성

GitHub에 웹후크 URL이었다고 명시한 위치이기 때문에 `/payload` 시 서버에서 `POST` 요청을 수신 대기하기를 원합니다. 를 사용하여 `ngrok` 로컬 환경을 노출하기 때문에 온라인 어딘가에 실제 서버를 설정할 필요가 없으며 코드를 로컬로 테스트할 수 있습니다.

이러한 정보로 작업을 수행하도록 작은 Sinatra 앱을 설정해 보겠습니다. 최초 설정은 다음과 같습니다.

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(Sinatra의 작동 방식에 익숙하지 않은 경우 [ 가이드를 읽는 것이][Sinatra] 좋습니다.)

이 서버를 시작합니다.

`Issues`를 처리하는 이벤트를 수신하도록 웹후크를 설정했으므로 계속 진행하여 테스트 중인 리포지토리에 새 이슈를 만듭니다. 이슈를 만든 후 터미널로 다시 전환합니다. 출력 내용은 다음과 비슷해야 합니다.

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

성공했습니다. 웹후크를 수신 대기하도록 서버를 구성했습니다. 이제 서버에서 이 정보를 원하는 방식으로 처리할 수 있습니다. 예를 들어 “실제” 웹 애플리케이션을 설정한 경우 데이터베이스에 JSON 출력의 일부를 기록하려고 할 수 있습니다.

재미와 유익을 위해 웹후크를 사용하는 방법에 대한 자세한 내용은 [웹후크 테스트](/webhooks/testing) 가이드를 참조하세요.

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/

---
title: 웹후크 보안
intro: '보안상의 이유로 서버가 예상되는 {% data variables.product.prodname_dotcom %} 요청만 수신하도록 보장합니다.'
redirect_from:
  - /webhooks/securing
  - /developers/webhooks-and-events/securing-your-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: c58d4f301eadff8e20d626074b95fd8b888f65c4
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008872'
---
페이로드를 수신하도록 서버를 구성하고 나면, 구성한 엔드포인트에 전송된 모든 페이로드를 수신 대기합니다. 보안상의 이유로 GitHub에서 나오는 요청으로 요청을 제한하고자 할 수 있습니다. 예를 들어 GitHub IP 주소의 요청을 허용하도록 선택할 수 있지만 비밀 토큰을 설정하고 정보의 유효성을 검사하는 방법이 훨씬 더 쉽습니다.

{% data reusables.webhooks.webhooks-rest-api-links %}

## 비밀 토큰 설정

GitHub 및 서버, 이렇게 두 위치에서 비밀 토큰을 설정해야 합니다.

GitHub에서 토큰을 설정하려면 다음을 수행합니다.

1. 웹후크를 설정하는 리포지토리로 이동합니다.
2. 비밀 텍스트 상자를 채웁니다. 엔트로피가 높은 임의 문자열을 사용합니다(예: 터미널에서 `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'`의 출력 사용).
![웹후크 비밀 토큰 필드](/assets/images/webhook_secret_token.png)
3. **웹후크 업데이트** 를 클릭합니다.

다음으로, 이 토큰을 저장하는 서버에서 환경 변수를 설정합니다. 일반적으로 다음을 실행하는 것만큼 간단합니다.

```shell
$ export SECRET_TOKEN=YOUR-TOKEN
```

토큰을 앱에 하드 코딩 **하지 마세요**!

## GitHub의 페이로드 유효성 검사

비밀 토큰이 설정되면 {% data variables.product.product_name %}에서는 이 토큰을 사용하여 각 페이로드가 포함된 해시 서명을 만듭니다. 이 해시 서명은 각 요청의 헤더와 함께 `x-hub-signature-256`으로 포함됩니다.

{% ifversion fpt or ghes or ghec %} {% note %}

**참고:** 이전 버전과의 호환성을 위해 SHA-1 해시 함수를 사용하여 생성된 `x-hub-signature` 헤더도 포함됩니다. 가능하면 보안 강화를 위해 `x-hub-signature-256` 헤더를 사용하는 것이 좋습니다. 아래 코드는 `x-hub-signature-256` 헤더의 사용을 보여 줍니다.

{% endnote %} {% endif %}

예를 들어 웹후크를 수신 대기하는 기본 서버가 있는 경우 다음과 유사하게 구성될 수 있습니다.

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  request.body.rewind
  push = JSON.parse(request.body.read)
  "I got some JSON: #{push.inspect}"
end
```

`SECRET_TOKEN`을 사용하여 해시를 계산하고 결과가 {% data variables.product.product_name %}의 해시와 일치하는지 확인하려는 의도입니다. {% data variables.product.product_name %}는 HMAC 16진수 다이제스트를 사용하여 해시를 계산하므로 다음과 같이 서버를 다시 구성할 수 있습니다.

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(payload_body)
  "I got some JSON: #{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end
```

{% note %}

**참고:** 웹후크 페이로드는 유니코드 문자를 포함할 수 있습니다. 언어 및 서버 구현에서 문자 인코딩을 지정하는 경우 페이로드를 UTF-8로 처리해야 합니다.

{% endnote %}

언어 및 서버 구현은 이 예제 코드와 다를 수 있습니다. 그러나 다음과 같이 지적해야 할 매우 중요한 사항이 여러 가지 있습니다.

* 어떤 구현을 사용하든, 해시 서명은 비밀 토큰 및 페이로드 본문의 키를 사용하여 `sha256=`으로 시작합니다.

* 일반 `==` 연산자의 사용은 **권장되지 않습니다**. [`secure_compare`][secure_compare] 등과 같은 메서드는 “일정한 시간” 문자열 비교를 수행하는데, 이는 일반적인 같음 연산자에 대한 특정 타이밍 공격을 완화하는 데 도움이 됩니다.

[secure_compare]: https://rubydoc.info/github/rack/rack/main/Rack/Utils:secure_compare

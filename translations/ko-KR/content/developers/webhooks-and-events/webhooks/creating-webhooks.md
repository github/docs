---
title: 웹후크 만들기
intro: '웹후크가 {% data variables.product.prodname_dotcom %}에서 수신 대기할 이벤트를 선택하여 웹후크를 빌드하는 방법 및 웹후크 페이로드를 수신하고 관리하도록 서버를 설정하는 방법을 알아봅니다.'
redirect_from:
  - /webhooks/creating
  - /developers/webhooks-and-events/creating-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: ced763e71ecc9f99d8dd5037dcdb6d87cfdba91d
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132973'
---
이제 [웹후크의 기본 사항][webhooks-overview]을 이해했으므로 웹후크 기반 통합을 빌드하는 과정을 살펴보겠습니다. 이 자습서에서는 하루에 리포지토리가 수신되는 이슈 개수에 따라 리포지토리의 인기도를 나열하는 리포지토리 웹후크를 만듭니다.

웹후크 만들기는 2단계 프로세스입니다. 먼저 웹후크가 수신 대기해야 하는 이벤트를 설정해야 합니다. 그런 다음 페이로드를 받고 관리하도록 서버를 설정합니다.


{% data reusables.webhooks.webhooks-rest-api-links %}

## 인터넷에 localhost 노출

이 자습서에서는 로컬 서버를 사용하여 {% data variables.product.prodname_dotcom %}에서 웹후크 이벤트를 수신합니다. 

우선 {% data variables.product.prodname_dotcom %}에서 이벤트를 제공할 수 있도록 로컬 개발 환경을 인터넷에 노출해야 합니다. 이 작업을 수행하는 데 사용합니다 [`ngrok`](https://ngrok.com) .

{% ifversion cli-webhook-forwarding %} {% note %}

**참고:** 또는 웹후크 전달을 사용하여 웹후크를 받을 로컬 환경을 설정할 수 있습니다. 자세한 내용은 "[GitHub CLI를 사용하여 웹후크 수신"을](/developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli) 참조하세요.

{% endnote %} {% endif %}

`ngrok` 모든 주요 운영 체제에 대해 무료로 사용할 수 있습니다. 자세한 내용은 [ `ngrok` 다운로드 페이지](https://ngrok.com/download)를 참조하세요.

`ngrok`를 설치한 후 명령줄에서 `./ngrok http 4567`을 실행하여 localhost를 노출할 수 있습니다. `4567` 는 서버에서 메시지를 수신 대기할 포트 번호입니다. 다음과 같은 줄이 표시됩니다.

```shell
$ Forwarding  http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

`*.ngrok.io` URL을 기록해 둡니다. 이 URL은 웹후크를 설정하는 데 사용합니다.

## 웹후크 설정

조직 또는 특정 리포지토리에 웹후크를 설치할 수 있습니다.

웹후크를 설정하려면 리포지토리 또는 조직의 설정 페이지로 이동합니다. 여기에서 **웹후크** 를 클릭한 다음 **웹후크 추가** 를 클릭합니다.

또는 [웹후크 API를 통해][webhook-api] 웹후크를 빌드 및 관리하도록 선택할 수 있습니다.

사용하기 전에 웹후크에는 몇 가지 구성 옵션이 필요합니다. 이러한 각 설정은 아래에서 살펴봅니다.

## 페이로드 URL

{% data reusables.webhooks.payload_url %}

자습서를 위해 로컬로 개발 중이므로 `*.ngrok.io` URL로 설정하고 그 뒤에 `/payload`가 따라오도록 합니다. 예: `http://7e9ea9dc.ngrok.io/payload`.

## 내용 유형

{% data reusables.webhooks.content_type %} 이 자습서에서는 기본 콘텐츠 형식인 `application/json`이면 적절합니다.

## 비밀

{% data reusables.webhooks.secret %}

## SSL 확인

{% data reusables.webhooks.webhooks_ssl %}

## Active

기본적으로 웹후크는 “활성”으로 제공됩니다. “활성”을 선택 취소하여 웹후크 페이로드의 제공을 사용하지 않도록 선택할 수 있습니다.

## 이벤트

이벤트는 웹후크의 핵심입니다. 이러한 웹후크는 서버의 페이로드 URL이 가로채고 작동하는 리포지토리에서 특정 작업을 수행할 때마다 발생합니다.

웹후크 이벤트의 전체 목록과 이러한 이벤트를 실행할 수 있는 경우는 [웹후크 API][hooks-api] 참조에서 확인할 수 있습니다.

웹후크가 리포지토리의 이슈를 처리하고 있으므로 **개별 이벤트를 선택하겠습니다** 를 선택한 다음 **이슈** 를 클릭합니다. 트리거된 웹후크에 대한 문제 이벤트를 수신하도록 **활성** 이 선택되어 있는지 확인합니다. 기본 옵션을 사용하여 모든 이벤트를 선택할 수도 있습니다.

작업을 완료하면 **웹후크 추가** 를 클릭합니다. 

이제 웹후크를 만들었으므로 이제 웹후크를 테스트하도록 로컬 서버를 설정할 차례입니다. 이렇게 하는 방법을 알아보려면 [서버 구성](/webhooks/configuring/)으로 이동하세요.

### 와일드카드 이벤트

모든 이벤트에 대해 웹후크를 구성하려면 와일드카드(`*`) 문자를 사용하여 웹후크 이벤트를 지정합니다. 와일드카드 이벤트를 추가하면 구성한 기존 이벤트를 와일드카드 이벤트로 바꾸고 지원되는 모든 이벤트에 대한 페이로드를 보냅니다. 또한 나중에 추가할 수 있는 새 이벤트도 자동으로 받게 됩니다.

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events

---
title: 체크 스위트
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3202e9e108f8020986d7abe14679df45307df337
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147063196'
---
{% note %}

  **참고:** GitHub 앱은 커밋 SHA를 둘 이상의 분기에 푸시하더라도 커밋 SHA당 하나의 [`check_suite`](/webhooks/event-payloads/#check_suite) 이벤트만 수신합니다. 커밋 SHA가 분기에 푸시되는 시기를 확인하려면 분기 [`create`](/webhooks/event-payloads/#create) 이벤트를 구독할 수 있습니다.

{% endnote %}

---
title: 스폰서 계정의 이벤트에 대한 webhook 구성
intro: 새 스폰서쉽을 받거나 기존 스폰서가 스폰서쉽을 변경할 때 경고하도록 웹후크를 구성할 수 있습니다.
redirect_from:
  - /github/supporting-the-open-source-community-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Webhooks
  - Events
  - Open Source
shortTitle: Webhooks for events
ms.openlocfilehash: 2ac78162ae29c10861c7bf3bad8c18b9e0a56ccf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145118831'
---
## 스폰서 계정의 이벤트에 대한 webhook 정보

급여 지급 기간이 끝날 때 취소가 수행되는 것처럼 스폰서쉽에 대한 변경 내용을 모니터링하려면 스폰서 사용자 또는 조직 계정에 대한 webhook를 만들 수 있습니다. 스폰서 계정에 대한 webhook를 설정하면 스폰서쉽이 생성, 편집 또는 삭제될 때 업데이트를 받게 됩니다. 자세한 내용은 [`sponsorship` webhook 이벤트](/webhooks/event-payloads/#sponsorship)를 참조하세요.

## 스폰서 계정의 이벤트에 대한 webhook 관리

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-webhooks-tab %} {% data reusables.sponsors.add-webhook %} {% data reusables.sponsors.add-payload-url %} {% data reusables.sponsors.webhook-content-formatting %} {% data reusables.sponsors.webhook-secret-token %} {% data reusables.sponsors.add-active-triggers %} {% data reusables.sponsors.confirm-add-webhook %} {% data reusables.sponsors.manage-existing-webhooks %}

---
title: 티켓 우선 순위 정보
intro: 지원 티켓의 우선 순위를 설정하여 문제의 심각도 및 문제가 사용자와 팀에 미치는 영향을 전달할 수 있습니다.
shortTitle: Ticket priority
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Support
ms.openlocfilehash: bce2a30ad25b93274e982991f81be5b1b796c685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145140096'
---
{% data variables.contact.enterprise_support %}에 문의하는 경우 {% ifversion ghes or ghae %}{% data variables.product.support_ticket_priority_urgent %},{% endif %} {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %} 또는 {% data variables.product.support_ticket_priority_low %}의 티켓에 대한 {% ifversion ghes or ghae %}4{% else %}3{% endif %} 우선 순위 중 하나를 선택할 수 있습니다.

{% ifversion ghes or ghae %}

{% data reusables.support.github-can-modify-ticket-priority %}

{% ifversion ghes %}

## {% data variables.product.prodname_ghe_server %}의 티켓 우선 순위

{% data reusables.support.ghes-priorities %}

## {% data variables.product.prodname_advanced_security %}의 티켓 우선 순위

| 우선 순위 | 설명 |
| :---: | --- |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_advanced_security %}이(가) 작동하지 않거나 최종 사용자가 소프트웨어를 합리적으로 계속 사용할 수 없고 해결 방법을 사용할 수 없으므로 중지되거나 심각한 영향을 받았습니다. |
| {% data variables.product.support_ticket_priority_normal %} | {% data variables.product.prodname_advanced_security %}이(가) 일관되지 않게 작동하여 최종 사용자 사용 및 생산성이 저하되었습니다. |
| {% data variables.product.support_ticket_priority_low %} | {% data variables.product.prodname_advanced_security %}은(는) 일관되게 작동하지만 최종 사용자는 설명서 업데이트, 미용 결함 또는 향상된 기능과 같은 소프트웨어의 사소한 변경을 요청합니다.|

{% elsif ghae %} {% data reusables.support.ghae-priorities %} {% endif %}

{% elsif ghec %}

<!-- /github/working-with-github-support/github-enterprise-cloud-support.md -->

{% data reusables.support.zendesk-old-tickets %}

{% data variables.product.prodname_ghe_cloud %}을(를) 구매했거나 현재 {% data variables.product.prodname_ghe_cloud %}을(를) 구독하고 있는 {% data variables.product.prodname_dotcom %} 조직의 구성원, 외부 협력자 또는 청구 관리자인 경우 우선 순위 질문을 제출할 수 있습니다.

우선 순위 응답을 받을 수 있는 질문은 다음과 같습니다.
- {% data variables.product.prodname_dotcom %}의 핵심 버전 제어 기능에 액세스하거나 사용할 수 없는 경우와 관련된 질문 포함
- 계정 보안과 관련된 상황 포함
- Gists, {% data variables.product.prodname_pages %}, 메일 알림과 같은 주변 장치 서비스 및 기능 포함하지 않음
- 현재 {% data variables.product.prodname_ghe_cloud %}을(를) 사용하는 조직에 대한 질문만 포함

우선 순위 응답을 받으려면 다음을 수행해야 합니다.
- 현재 {% data variables.product.prodname_ghe_cloud %}을(를) 사용하는 조직과 연결된 확인된 메일 주소에서 [{% data variables.contact.enterprise_support %}](https://support.github.com/contact?tags=docs-generic)에 질문 제출
- 각 개별 우선 순위 상황에 대한 새 지원 티켓 제출
- 현지 표준 시간대의 월요일부터 금요일까지 질문 제출
- 우선 순위 질문에 대한 응답이 메일을 통해 수신된다는 것 이해
- {% data variables.contact.github_support %}에 협조하고 {% data variables.contact.github_support %}이(가) 요청하는 모든 정보 제공

{% note %}

**참고:** 관할 구역에서 현지 휴일에 제출된 질문은 우선 순위 응답을 받을 자격이 없습니다.

{% endnote %}

대상 8시간 응답 시간:
- {% data variables.contact.github_support %}이(가) 적격 질문을 받으면 시작
- 충분한 정보가 없음을 구체적으로 나타내지 않는 한 질문에 대답할 수 있는 충분한 정보를 제공할 때까지 시작되지 않음
- 현지 표준 시간대의 주말 또는 관할 지역의 공휴일에는 적용되지 않음

{% note %}

**참고:** {% data variables.contact.github_support %}은(는) 우선 순위 질문에 대한 해결 방법을 보장하지 않습니다. {% data variables.contact.github_support %}은(는) 귀하가 당사에 제공하는 정보에 대한 합리적인 평가에 따라 우선 순위 질문 상태로 또는 우선 순위 질문 상태에서 문제를 에스컬레이션하거나 에스컬레이션을 해제할 수 있습니다.

{% endnote %}

{% endif %}

## 추가 참고 자료

- “[지원 티켓 만들기](/support/contacting-github-support/creating-a-support-ticket)”

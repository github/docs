---
title: 지원 티켓 보기 및 업데이트
intro: '지원 티켓을 보고{% ifversion ghes or ghec %}, 티켓에 대해 동료와 공동 작업하고,{% endif %} {% data variables.contact.support_portal %}을 사용하여 {% data variables.contact.github_support %}에 응답할 수 있습니다.'
shortTitle: Managing your tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
ms.openlocfilehash: 35c7b28232c0d11170ea9585480b2cfb1785ebd0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147051982'
---
## 티켓 관리 정보

{% data reusables.support.zendesk-old-tickets %}

[GitHub 지원 포털](https://support.github.com/)을 사용하여 현재 및 이전 지원 티켓을 보고 {% data variables.contact.github_support %}에 응답할 수 있습니다. 120일이 지나면 해결된 티켓이 보관되며{% ifversion ghec or ghes or ghae %}, 보관된 티켓은 엔터프라이즈 계정에 대해서만 볼 수 있습니다{% endif %}.

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

## 최근 지원 티켓 보기

{% data reusables.support.view-open-tickets %}
1. 텍스트 상자에서 주석 기록을 읽을 수 있습니다. 가장 최근의 응답은 맨 위에 있습니다.
![맨 위에 가장 최근 응답이 있는 지원 티켓 주석 기록의 스크린샷](/assets/images/help/support/support-recent-response.png)

{% ifversion ghec or ghes or ghae %}

## 보관된 지원 티켓 보기

엔터프라이즈 계정의 보관된 티켓만 볼 수 있습니다.

{% data reusables.support.navigate-to-my-tickets %}
1. **내 티켓** 드롭다운 메뉴를 선택하고 엔터프라이즈 계정의 이름을 클릭합니다. 

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

   !["내 티켓" 드롭다운 메뉴의 스크린샷](/assets/images/help/support/ticket-context.png)
1. "내 티켓" 테이블 아래에서 **보관된 티켓 보기** 를 클릭합니다.

{% endif %}

## 지원 티켓 업데이트

{% data reusables.support.view-open-tickets %}
1. 필요에 따라 이슈가 해결되면 텍스트 상자에서 **티켓 닫기** 를 클릭합니다.
!["티켓 닫기" 단추의 위치를 보여 주는 스크린샷](/assets/images/help/support/close-ticket.png)
1. GitHub 지원에 응답하고 티켓에 새 주석을 추가하려면 텍스트 상자에 응답을 입력합니다.
!["주석 추가" 텍스트 필드의 스크린샷](/assets/images/help/support/new-comment-field.png)
1. 티켓에 주석을 추가하려면 **주석** 을 클릭합니다.
!["주석" 단추의 스크린샷](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## 지원 티켓 공동 작업

지원 포털을 사용하여 지원 티켓에 대해 동료와 협력할 수 있습니다. 소유자, 청구 관리자 및 지원 자격이 있는 기타 엔터프라이즈 멤버는 엔터프라이즈 계정 또는 엔터프라이즈 계정으로 관리되는 조직과 연결된 티켓을 볼 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 지원 자격 관리](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)”를 참조하세요.

티켓을 보는 것 외에도, 티켓에 메일 주소가 복사되었거나 티켓을 연 사람이 엔터프라이즈 계정 또는 엔터프라이즈 계정으로 관리되는 조직에 대해 확인된 도메인에서 메일 주소를 사용한 경우 지원 티켓에 주석을 추가할 수도 있습니다. 도메인 확인에 대한 자세한 내용은 “[엔터프라이즈의 도메인 확인 또는 승인](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)” 및 “[조직의 도메인 확인 또는 승인](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”을 참조하세요.

{% endif %}

## 추가 참고 자료

- “[GitHub 지원 정보](/support/learning-about-github-support/about-github-support)”

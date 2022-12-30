---
title: 비공개로 보고된 보안 취약성 관리
intro: 리포지토리 유지 관리자는 프라이빗 취약성 보고가 사용하도록 설정된 리포지토리에 대한 보안 재설치자를 통해 비공개로 보고된 보안 취약성을 관리할 수 있습니다.
permissions: 'Anyone with admin permissions to a repository can see, review, and manage privately-reported vulnerabilities for the repository.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Manage vulnerability reports
ms.openlocfilehash: 942533788dc6ad9280ddc023f583462c7a0ff7f8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160293'
---
{% data reusables.security-advisory.private-vulnerability-reporting-beta %}

{% data reusables.security-advisory.private-vulnerability-reporting-enable %}

## 보안 취약성을 비공개로 보고하는 정보

프라이빗 취약성 보고를 사용하면 보안 연구원이 간단한 양식을 사용하여 취약성을 직접 보고할 수 있습니다. 

보안 연구원이 취약성을 비공개로 보고하면 알림을 받고 이를 수락하거나, 더 많은 질문을 하거나, 거부할 수 있습니다. 보고서를 수락하면 보안 연구원과 비공개로 취약성에 대한 수정 사항을 공동 작업할 준비가 된 것입니다.

## 비공개로 보고되는 보안 취약성 관리

{% data variables.product.prodname_dotcom %}은 보안 연구원이 리포지토리의 취약성을 비공개로 보고할 때 리포지토리 유지 관리자에게 알리고, 유지 관리자가 리포지토리를 감시하거나 리포지토리에 대해 알림을 사용하도록 설정된 경우 알림을 보냅니다. 자세한 내용은 “[알림 구성](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)”을 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
1. 검토하려는 권고를 클릭합니다. 비공개로 보고되는 권고의 상태는 `Needs triage`입니다.
  
   ![권고 목록의 예를 보여 주는 스크린샷](/assets/images/help/security/advisory-list.png)
   
2. 보고서를 신중하게 검토합니다. 다음과 같습니다.
   - **임시 프라이빗 포크 시작을** 클릭하여 프라이빗 패치에서 보안 연구원과 공동 작업합니다. 이렇게 하면 에서 제안된 권고의 상태를 변경하지 않고 기여자와 추가 논의를 할 수 있습니다 `Needs triage`.
   - 수락 **및 초안으로 열기** 를 클릭하여 {% data variables.product.prodname_dotcom %}에 대한 초안 권고로 취약성 보고서를 수락합니다. 이 옵션을 선택하는 경우:
      - 이렇게 하면 보고서가 공개되지 않습니다.
      - 보고서는 초안 리포지토리 보안 권고가 되며 사용자가 만든 초안 권고와 동일한 방식으로 작업할 수 있습니다.
     보안 권고에 대한 자세한 내용은 "[리포지토리 보안 권고 정보](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)"를 참조하세요.
   - **보안 공지 닫기를** 클릭하여 보고서를 거부합니다. 가능한 경우 권고를 닫기 전에 보고서를 보안 위험으로 간주하지 않는 이유를 설명하는 설명을 추가해야 합니다.

     ![외부에서 제출된 취약성 보고서를 검토할 때 리포지토리 유지 관리자가 사용할 수 있는 옵션을 보여 주는 스크린샷](/assets/images/help/security/advisory-maintainer-options.png)

---
title: 조직에서 끌어오기 요청 검토 관리
intro: 조직에서 끌어오기 요청을 승인하거나 이에 대한 변경을 요청할 수 있는 사용자를 제한할 수 있습니다.
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 2d097e95572932f05795bd28627cb73b1fad43ca
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125719'
---
## 코드 검토 제한 정보

기본적으로 퍼블릭 리포지토리에서 모든 사용자는 끌어오기 요청에 대한 변경 내용을 승인하거나 요청하는 검토를 제출할 수 있습니다.

조직 소유의 퍼블릭 리포지토리에서 요청을 끌어오기 위해 변경 내용을 승인하거나 요청할 수 있는 사용자를 제한할 수 있습니다. 코드 검토 제한을 사용하도록 설정한 후에는 누구나 퍼블릭 리포지토리의 끌어오기 요청에 대해 주석을 달 수 있지만 리포지토리에 대한 명시적 액세스 권한이 있는 사용자만 끌어오기 요청을 승인하거나 변경 내용을 요청할 수 있습니다.

개별 리포지토리에 대한 코드 검토 제한을 사용하도록 설정할 수도 있습니다. 조직에 대해 사용하도록 설정하거나 제한하는 경우 조직이 소유한 개별 리포지토리에 대한 제한을 재정의합니다. 자세한 내용은 “[리포지토리에서 끌어오기 요청 검토 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)”를 참조하세요.

## 코드 검토 제한 사용

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 사이드바의 “액세스” 섹션에서 **{% octicon "report" aria-label="The report icon" %} 조정** 을 선택합니다.
1. “{% octicon "report" aria-label="The report icon" %} 조정”에서 **코드 검토 제한** 을 클릭합니다.
![조직의 코드 검토 제한에 대한 사이드바 항목 스크린샷](/assets/images/help/organizations/code-review-limits-organizations.png)
1. 화면에서 정보를 검토합니다. **모든 리포지토리에 대한 검토 제한** 을 클릭하여 명시적 액세스 권한이 있는 리포지토리로 검토를 제한하거나, **모든 리포지토리에서 검토 제한 제거** 를 클릭하여 조직의 모든 퍼블릭 리포지토리에서 제한을 제거합니다.
![조직의 코드 검토 제한 설정 스크린샷](/assets/images/help/organizations/code-review-limits-organizations-settings.png)

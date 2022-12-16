---
title: 리포지토리에서 끌어오기 요청 검토 관리
intro: 퍼블릭 리포지토리에서 끌어오기 요청을 승인하거나 이에 대한 변경을 요청할 수 있는 사용자를 제한할 수 있습니다.
versions:
  feature: pull-request-approval-limit
permissions: Repository administrators can limit which users can approve or request changes to a pull request in a public repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 81c58a856e7dddc316a41413d4c7787bf463cf7c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136708'
---
## 코드 검토 제한 정보

기본적으로 퍼블릭 리포지토리에서 모든 사용자는 끌어오기 요청에 대한 변경 내용을 승인하거나 요청하는 검토를 제출할 수 있습니다.

퍼블릭 리포지토리에서 끌어오기 요청을 승인하거나 변경을 요청하는 검토를 제출할 수 있는 사용자를 제한할 수 있습니다. 코드 검토 제한을 사용하도록 설정하면 누구나 퍼블릭 리포지토리의 끌어오기 요청에 대해 주석을 달 수 있지만 읽기 액세스 권한이 있는 사용자만 끌어오기 요청을 승인하거나 변경을 요청할 수 있습니다.

조직에 대한 코드 검토 제한을 사용하도록 설정할 수도 있습니다. 조직에 대한 제한을 사용하도록 설정하는 경우 조직이 소유한 개별 리포지토리에 대한 제한을 재정의합니다. 자세한 내용은 "[조직에서 끌어오기 요청 검토 관리](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)"를 참조하세요.

## 코드 검토 제한 사용

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. **액세스** 에서 **조정 옵션** 을 클릭합니다.
![조정 옵션 리포지토리 설정](/assets/images/help/repository/access-settings-repositories.png)
1. **조정 옵션** 에서 **코드 검토 제한** 을 클릭합니다.
![코드 검토 제한 리포지토리](/assets/images/help/repository/code-review-limits-repositories.png)
1. **읽기 이상의 권한이 명시적으로 부여된 사용자로 제한** 을 선택하거나 선택 취소합니다.
![리포지토리에서 검토 제한](/assets/images/help/repository/limit-reviews-in-repository.png)

---
title: 끌어오기 요청 자동 병합
intro: 모든 병합 요구 사항이 충족되면 끌어오기 요청이 자동으로 병합되도록 끌어오기 요청에 자동 병합을 사용하도록 설정하여 개발 속도를 높일 수 있습니다.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
shortTitle: Merge PR automatically
ms.openlocfilehash: 07069657c870751849d3b7e80c7817f908c2bda5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147770915'
---
## 자동 병합 정보

끌어오기 요청에 대해 자동 병합을 사용하도록 설정하면 필요한 모든 검토가 충족되고 필요한 모든 상태 검사가 통과될 때 끌어오기 요청이 자동으로 병합됩니다. 자동 병합을 사용하면 요구 사항이 충족될 때까지 기다리지 않으므로 다른 작업으로 이동할 수 있습니다.

끌어오기 요청과 함께 자동 병합을 사용하려면 먼저 리포지토리에서 자동 병합을 사용하도록 설정해야 합니다. 자세한 내용은 "[리포지토리의 끌어오기 요청에 대한 자동 병합 관리](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)"를 참조하세요.

끌어오기 요청에 대해 자동 병합을 사용하도록 설정한 후 리포지토리에 대한 쓰기 권한이 없는 사용자가 헤드 분기에 새 변경 내용을 푸시하거나 끌어오기 요청의 베이스 분기를 전환하면 자동 병합이 사용하지 않도록 설정됩니다. 예를 들어 유지 관리자가 포크에서 끌어오기 요청에 대해 자동 병합을 사용하도록 설정하면 기여자가 끌어오기 요청에 새 변경 내용을 푸시한 후 자동 병합이 사용하지 않도록 설정됩니다.

[{% data variables.product.prodname_github_community %} 토론](https://github.com/orgs/community/discussions/categories/pull-requests)을 통해 자동 병합에 대한 피드백을 제공할 수 있습니다.

## 자동 병합을 사용하도록 설정

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

리포지토리에 대한 쓰기 권한이 있는 사용자는 끌어오기 요청에 대해 자동 병합을 사용하도록 설정할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. “끌어오기 요청” 목록에서 자동 병합하려는 끌어오기 요청을 클릭합니다.
1. 선택적으로 병합 방법을 선택하려면 **자동 병합 사용** 드롭다운 메뉴를 선택한 다음 병합 방법을 클릭합니다. 자세한 내용은 “[끌어오기 요청 병합 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)”를 참조하세요.
  ![“자동 병합 사용” 드롭다운 메뉴](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. **자동 병합 사용** 을 클릭합니다.
  ![자동 병합을 사용하도록 설정하는 단추](/assets/images/help/pull_requests/enable-auto-merge-button.png) {% ifversion fpt %}
1. 병합 또는 Squash 및 병합 방법을 선택한 경우 커밋 메시지와 설명을 입력하고 병합 커밋을 작성할 메일 주소를 선택합니다.
  ![커밋 메시지 및 설명을 입력하고 커밋 작성자 메일을 선택하는 필드](/assets/images/help/pull_requests/pull-request-information-fields.png) {% note %}

  **참고:** 메일 개인 정보 보호가 활성화되어 있거나 {% data variables.product.company_short %} 계정과 연결된 확인되고 표시되는 메일이 하나만 있는 경우 메일 드롭다운 메뉴를 사용할 수 없습니다.

  {% endnote %} {% endif %} {% ifversion ghes or ghae or ghec %}
1. 병합 또는 Squash 및 병합 방법을 선택한 경우 커밋 메시지와 설명을 입력합니다.
   ![커밋 메시지 및 설명을 입력하는 필드](/assets/images/help/pull_requests/pull-request-information-fields-enterprise.png) {% endif %}
1. **자동 병합 확인** 을 클릭합니다.

## 자동 병합 사용 안 함

리포지토리 및 끌어오기 요청 작성자에게 쓰기 권한이 있는 사용자는 끌어오기 요청에 대해 자동 병합을 사용하지 않도록 설정할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. “끌어오기 요청” 목록에서 자동 병합을 사용하지 않도록 설정하려는 끌어오기 요청을 클릭합니다.
1. 병합 상자에서 **자동 병합 사용 안 함** 을 클릭합니다.
  ![자동 병합을 사용하지 않도록 설정하는 단추](/assets/images/help/pull_requests/disable-auto-merge-button.png)

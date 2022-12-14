---
title: 자체 호스팅 실행기로 레이블 사용
intro: 레이블을 사용하여 특성에 따라 자체 호스팅 실행기를 구성할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Label runners
ms.openlocfilehash: 3b26db5c8b6494ebb63cc3ce9cc9a0109bac4545
ms.sourcegitcommit: 929818065a8545476e4cf8e2cab6517f40345ef0
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163254'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

레이블을 사용하여 특정 유형의 자체 호스팅 실행기로 작업을 라우팅하는 방법에 대한 자세한 내용은 “[워크플로에서 자체 호스팅 실행기 사용](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)”을 참조하세요. {% ifversion target-runner-groups %} 특정 그룹의 실행기로 작업을 라우팅할 수도 있습니다. 자세한 내용은 "[그룹의 실행기 대상 지정"을 참조하세요](/actions/using-jobs/choosing-the-runner-for-a-job#targeting-runners-in-a-group). {% endif %}

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## 사용자 지정 레이블 만들기

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. “레이블” 섹션에서 {% octicon "gear" aria-label="The Gear icon" %}을 클릭합니다.
 1. “레이블 찾기 또는 만들기” 필드에 새 레이블의 이름을 입력하고 **새 레이블 만들기** 를 클릭합니다.
 사용자 지정 레이블이 생성되어 자체 호스팅 실행기에 할당됩니다. 자체 호스팅 실행기에서 사용자 지정 레이블을 제거할 수 있지만 현재 수동으로 삭제할 수는 없습니다. {% data reusables.actions.actions-unused-labels %} {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. “필터 레이블” 필드에 새 레이블의 이름을 입력하고 **새 레이블 만들기** 를 클릭합니다.
    ![실행기 레이블 추가](/assets/images/help/settings/actions-add-runner-label.png)
    
사용자 지정 레이블이 생성되어 자체 호스팅 실행기에 할당됩니다. 자체 호스팅 실행기에서 사용자 지정 레이블을 제거할 수 있지만 현재 수동으로 삭제할 수는 없습니다. {% data reusables.actions.actions-unused-labels %} {% endif %}

## 자체 호스팅 실행기에 레이블 할당

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. 자체 호스팅 실행기에 레이블을 할당하려면 “레이블 찾기 또는 만들기” 필드에서 레이블을 클릭합니다. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. 레이블을 클릭하여 자체 호스팅 실행기에 할당합니다. {% endif %}

## 자체 호스팅 실행기에서 사용자 지정 레이블 제거

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. “레이블 찾기 또는 만들기” 필드에서 할당된 레이블은 {% octicon "check" aria-label="The Check icon" %} 아이콘으로 표시됩니다. 표시된 레이블을 클릭하여 자체 호스팅 실행기에서 할당을 취소합니다. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. 할당된 레이블을 클릭하여 자체 호스팅 실행기에서 제거합니다. {% data reusables.actions.actions-unused-labels %} {% endif %}

## 프로그래밍 방식으로 레이블 할당

실행기를 만든 후 또는 초기 구성 중에 자체 호스팅 실행기에 레이블을 프로그래밍 방식으로 할당할 수 있습니다.

* 프로그래밍 방식으로 기존 자체 호스팅 실행기에 레이블을 할당하려면 REST API를 사용해야 합니다. 자세한 내용은 "[자체 호스팅 실행기](/rest/actions/self-hosted-runners)" REST API를 참조하세요.
* 초기 실행기 구성 중에 프로그래밍 방식으로 자체 호스팅 실행기에 레이블을 할당하려면 매개 변수를 사용하여 `labels` 스크립트에 `config` 레이블 이름을 전달할 수 있습니다.

  {% note %}
  
  **참고:** 스크립트를 `config` 사용하여 기존 자체 호스팅 실행기에 레이블을 할당할 수 없습니다.
  
  {% endnote %}

  예를 들어 이 명령은 새 자체 호스팅 실행기를 구성할 때 라는 `gpu` 레이블을 할당합니다.

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu
  ```

  레이블이 아직 없는 경우 생성됩니다. 이 방법을 사용하여 실행기에 기본 레이블(예: `x64` 또는 `linux`)을 할당할 수도 있습니다. 구성 스크립트를 사용하여 기본 레이블이 할당된 경우 {% data variables.product.prodname_actions %}는 기본 레이블을 지정된 대로 수락하며 실행기에서 실제로 해당 운영 체제 또는 아키텍처를 사용하고 있는지 확인하지 않습니다.

  쉼표 구분을 사용하여 여러 레이블을 할당할 수 있습니다. 예를 들면 다음과 같습니다.

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu,x64,linux
  ```

  {% note %}

  ** 참고:** 기존 실행기를 바꾸는 경우 사용자 지정 레이블을 다시 할당해야 합니다.

  {% endnote %}

---
title: 워크플로 아티팩트 다운로드
intro: 보관된 아티팩트가 자동으로 만료되기 전에 다운로드할 수 있습니다.
permissions: 'People who are signed into {% data variables.product.product_name %} and have read access to a repository can download workflow artifacts.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Download workflow artifacts
ms.openlocfilehash: dcb2d97095f6cdd704207084b776db05a4d1bd44
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160634'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

기본적으로 {% data variables.product.product_name %}sms 90일 동안 빌드 로그와 아티팩트를 저장하며 리포지토리 유형에 따라 이 보존 기간을 사용자 지정할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”를 참조하세요.

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. **아티팩트** 아래에서 다운로드하려는 아티팩트를 클릭합니다.
    
    ![아티팩트 드롭다운 메뉴 다운로드](/assets/images/help/repository/artifact-drop-down-updated.png)
    

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %}는 아티팩트 이름에 따라 각 아티팩트를 별도의 디렉터리에 다운로드합니다. 단일 아티팩트만 지정되면 현재 디렉터리로 추출됩니다.

워크플로 실행에 의해 생성된 모든 아티팩트를 다운로드하려면 `run download` 하위 명령을 사용합니다. `run-id`를 아티팩트를 다운로드하려는 실행의 ID로 바꿉니다. `run-id`를 지정하지 않으면 {% data variables.product.prodname_cli %}가 최근 실행을 선택할 수 있는 대화형 메뉴를 반환합니다.

```shell
gh run download RUN_ID
```

실행에서 특정 아티팩트 다운로드하려면 `run download` 하위 명령을 사용합니다. `run-id`를 아티팩트를 다운로드하려는 실행의 ID로 바꿉니다. `artifact-name`을 다운로드하려는 아티팩트의 이름으로 바꿉니다.

```shell
gh run download RUN_ID -n ARTIFACT_NAME
```

아티팩트를 두 개 이상 지정할 수 있습니다.

```shell
gh run download RUN_ID> -n ARTIFACT_NAME-1 -n ARTIFACT_NAME-2
```

리포지토리의 모든 실행에서 특정 아티팩트 다운로드하려면 `run download` 하위 명령을 사용합니다.

```shell
gh run download -n ARTIFACT_NAME-1 ARTIFACT_NAME-2
```

{% endcli %}

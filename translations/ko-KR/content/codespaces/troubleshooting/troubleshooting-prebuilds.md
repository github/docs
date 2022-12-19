---
title: 사전 빌드 문제 해결
shortTitle: Codespaces prebuilds
intro: 사전 빌드를 사용하여 Codespace를 빠르게 만들 수 있습니다. 이 문서에서는 사전 빌드의 일반적인 문제에 대한 문제 해결 단계를 제공합니다.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b8c45f9eae6094b78026d055ebea27c3748a8681
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158887'
---
{% data variables.product.prodname_github_codespaces %} 사전 빌드에 대한 자세한 내용은 "[codespace 미리 빌드"를 참조하세요](/codespaces/prebuilding-your-codespaces).

## codespace가 사전 빌드에서 만들어졌는지 여부를 확인하나요?

codespace를 만들 때 사용하려는 가상 머신의 유형을 선택할 수 있습니다. 가상 머신 유형에 사전 빌드를 사용할 수 있는 경우 "{% octicon "zap" aria-label="The zap icon" %} 사전 빌드 준비됨"이 옆에 표시됩니다.

![사용 가능한 머신 유형의 목록](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% data variables.product.prodname_github_codespaces %} 편집기 기본 설정이 "{% data variables.product.prodname_vscode %} for Web"으로 설정된 경우 "codespace 설정" 페이지에 사전 빌드가 사용되는 경우 "미리 빌드된 codespace가 발견됨" 메시지가 표시됩니다. 

!['미리 빌드된 codespace를 찾았습니다.' 메시지](/assets/images/help/codespaces/prebuilt-codespace-found.png)

마찬가지로 편집기 기본 설정이 “{% data variables.product.prodname_vscode_shortname %}”인 경우 통합 터미널에는 새 codespace를 만들 때 “리포지토리에 대한 사전 빌드 구성으로 정의된 사전 빌드된 codespace에 있습니다.”라는 메시지가 포함됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}의 기본 편집기 설정](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)”을 참조하세요.

codespace를 만든 후 터미널에서 다음 {% data variables.product.prodname_cli %} 명령을 실행하여 사전 빌드에서 만들어졌는지 확인할 수 있습니다.

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

codespace가 사전 빌드를 사용하여 만들어진 경우 `true`를 반환합니다.

또는 {% data variables.product.prodname_cli %}(`gh`)가 설치되지 않은 경우 다음 명령을 사용할 수 있습니다. 이 명령은 codespace가 사전 빌드에서 생성된 경우 `createFromPrebuild`를 반환합니다. 

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## “사전 빌드 준비” 레이블이 누락되는 경우가 있습니다.

경우에 따라 사전 빌드 사용 분기에서 새 codespace를 만들 때 머신 유형을 선택하기 위한 대화 상자에 “{% octicon "zap" aria-label="The zap icon" %} 사전 준비” 레이블이 표시되지 않습니다. 즉, 현재 사전 빌드를 사용할 수 없습니다.

기본적으로 사전 빌드 사용 분기로 푸시할 때마다 사전 빌드가 업데이트됩니다. 푸시에 개발 컨테이너 구성 변경 내용이 포함된 경우 업데이트가 진행되는 동안 “{% octicon "zap" aria-label="The zap icon" %} 사전 빌드 준비” 레이블이 머신 유형에서 제거됩니다. 이 시간 동안에는 사전 빌드 없이 codespace를 만들 수 있습니다. 필요한 경우 개발 컨테이너 구성 파일을 변경할 때만 또는 사용자 지정 일정에 따라 사전 빌드를 업데이트하도록 설정하여 리포지토리에 대해 사전 빌드를 사용할 수 없는 경우를 줄일 수 있습니다. 자세한 내용은 “[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”을 참조하세요.

분기가 사전 빌드에 대해 특별히 사용하도록 설정되지 않은 경우에도 사전 빌드 사용 분기에서 분기되었으면 사전 빌드의 이점을 누릴 수 있습니다. 그러나 분기에서 개발 컨테이너 구성이 변경되어 기본 분기의 구성과 동일하지 않은 경우 분기에서 더 이상 사전 빌드를 사용할 수 없습니다.

다음은 특정 분기에 대해 “{% octicon "zap" aria-label="The zap icon" %} 사전 빌드 준비” 레이블이 표시되지 않는지 확인해야 할 사항입니다.

* 이 분기에 대한 사전 빌드 구성이 있는지 확인합니다. 리포지토리 관리자가 아닌 경우 해당 관리자에게 문의하여 확인해야 합니다. 
* 사전 빌드 구성에 해당 지역이 포함되어 있음을 확인합니다.
* 개발 컨테이너 구성에 대한 변경 내용이 최근에 사전 빌드 사용 분기로 푸시되었는지 확인합니다. 그렇다면 일반적으로 사전 빌드를 다시 사용할 수 있기 전에 이 푸시에 대한 사전 빌드 워크플로 실행이 완료될 때까지 기다려야 합니다.
* 최근에 구성을 변경하지 않은 경우 리포지토리의 **작업** 탭으로 이동하여 워크플로 목록에서 **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %} 사전 빌드** 를 클릭하고 분기의 사전 빌드 워크플로 실행이 성공하는지 확인합니다. 워크플로의 최신 실행이 실패하고 이렇게 실패한 실행 중 하나 이상이 개발 컨테이너 구성에 대한 변경 내용을 포함하는 경우 연결된 분기에 대해 사용할 수 있는 사전 빌드가 없습니다. 

## 일부 리소스는 사전 빌드를 사용하여 만든 codespaces에서 액세스할 수 없습니다.

사전 빌드 구성에 대한 `devcontainer.json` 구성 파일이 다른 리포지토리에 대한 액세스 권한이 필요하도록 지정하는 경우 리포지토리 관리자가 사전 빌드 구성을 만들거나 업데이트할 때 이러한 권한을 부여하라는 메시지가 표시됩니다. 관리자가 요청된 권한을 모두 부여하지 않으면 사전 빌드 및 이 사전 빌드에서 만든 codespaces에서 문제가 발생할 수 있습니다. 이 사전 빌드를 기반으로 codespace를 만드는 사용자가 이 작업을 수행하라는 메시지가 표시될 때 모든 권한을 _부여_ 하는 경우에도 마찬가지입니다.

## 사전 빌드에 대한 실패한 워크플로 실행 문제 해결

### {% data variables.product.prodname_actions %} 지출 한도 증가 

{% data variables.product.prodname_actions %}을(를) 사용하여 사전 빌드를 만들고 업데이트합니다. 모든 {% 데이터 variables.product.prodname_actions %} 분을 사용하고 지출 한도에 도달한 경우 사전 빌드 워크플로가 실패합니다. 이 경우 {% data variables.product.prodname_actions %} 지출 한도를 늘려 워크플로가 실행되도록 할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_actions %}에 대한 지출 한도 관리"를 참조하세요](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions).

### 액세스 권한 부여

사전 빌드 구성에 대한 `devcontainer.json` 구성 파일이 다른 리포지토리에 대한 액세스 권한이 필요하다는 것을 지정하도록 업데이트되었지만 저장소 관리자에게 사전 빌드 구성에 대한 이러한 사용 권한을 부여하라는 메시지가 표시되지 않은 경우 사전 빌드 워크플로가 실패할 수 있습니다. 변경하지 않고 사전 빌드 구성을 업데이트해 보세요. **업데이트** 를 클릭하여 권한 부여 페이지가 표시되면 요청된 권한이 적절한지 확인하고, 적절하면 요청에 권한을 부여합니다. 자세한 내용은 "[사전 빌드 관리](/codespaces/prebuilding-your-codespaces/managing-prebuilds#editing-a-prebuild-configuration)" 및 "[codespace 내의 다른 리포지토리에 대한 액세스 관리](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces#setting-additional-repository-permissions)"를 참조하세요.

미리 빌드된 구성에 대한 워크플로 실행이 실패하는 경우 조사하는 동안 미리 빌드 구성을 일시적으로 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[사전 빌드 관리](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration)”를 참조하세요.

### 오래된 사전 빌드 사용 방지

기본적으로 최신 사전 빌드 워크플로가 실패한 경우 리포지토리, 분기 및 `devcontainer.json` 구성 파일의 동일한 조합에 대한 이전 사전 빌드가 새 codespace를 만드는 데 사용됩니다. 이 동작을 사전 빌드 최적화라고 합니다.

최신 사전 빌드를 사용할 수 없는 경우 codespace를 빠르게 만들 수 있도록 하기 때문에 사전 빌드 최적화를 사용하도록 유지하는 것이 좋습니다. 그러나 리포지토리 관리자는 미리 빌드된 codespace가 분기의 현재 상태 뒤에 있는 문제가 발생하면 사전 빌드 최적화를 사용하지 않도록 설정할 수 있습니다. 사전 빌드 최적화를 사용하지 않도록 설정하면 최신 사전 빌드 워크플로가 실패했거나 현재 실행 중인 경우 리포지토리, 분기 및 `devcontainer.json` 파일의 관련 조합에 대한 codespace가 사전 빌드 없이 만들어집니다.

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. 영향을 받는 사전 빌드 구성의 오른쪽에서 줄임표(**...**)를 선택한 다음 **편집** 을 클릭합니다.

   !["편집"이 강조 표시된 사전 빌드 목록의 스크린샷](/assets/images/help/codespaces/edit-prebuild-configuration.png)
1. "구성 편집" 페이지의 아래쪽으로 스크롤하고 **고급 옵션 표시** 를 클릭합니다.

   !["고급 옵션 표시"가 강조 표시된 사전 빌드 구성 페이지의 스크린샷](/assets/images/help/codespaces/show-advanced-options.png)
1. 기본 설정을 사용하지 않도록 설정하려는 경우 **사전 빌드 최적화 사용 안 함을** 선택합니다.

   ![고급 옵션 섹션 및 "사전 빌드 옵트마이션 사용 안 함" 설정의 스크린샷](/assets/images/help/codespaces/disable-prebuild-optimization.png)
1. 변경 내용을 저장하려면 **업데이트를** 클릭합니다.

## 추가 참고 자료

- “[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)”
- “[사전 빌드 관리](/codespaces/prebuilding-your-codespaces/managing-prebuilds)”

---
title: 사전 빌드 구성
shortTitle: Configure prebuilds
intro: 리포지토리에 변경 내용을 푸시할 때마다 자동으로 Codespace를 사전 빌드하도록 프로젝트를 구성할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: dbb355e150695f27d1d6a7fa51eccc33a0ebde4f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159119'
---
리포지토리의 특정 분기와 특정 개발 컨테이너 구성 파일의 조합에 대한 사전 빌드 구성을 설정할 수 있습니다.

사전 빌드 사용 부모 분기에서 만든 모든 분기도 일반적으로 동일한 개발 컨테이너 구성에 대한 사전 빌드를 가져옵니다. 이는 부모 분기와 동일한 개발 컨테이너 구성을 사용하는 자식 분기의 사전 빌드가 대부분 동일하므로 개발자가 해당 분기에서 더 빠른 codespace 생성 시간을 활용할 수 있기 때문입니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요.

일반적으로 분기에 대한 사전 빌드를 구성할 때 여러 시스템 유형에 대해 사전 빌드를 사용할 수 있습니다. 그러나 리포지토리가 32GB보다 큰 경우 이러한 스토리지가 32GB로 제한되므로 2코어 및 4코어 머신 유형에는 사전 빌드를 사용할 수 없습니다.

## 필수 조건 

사전 빌드는 {% data variables.product.prodname_actions %}를 사용하여 만들어집니다. 따라서 사전 빌드를 구성하는 리포지토리에 대해 {% data variables.product.prodname_actions %}을(를) 사용하도록 설정해야 합니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)”를 참조하세요.

## 사전 빌드 구성

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. 페이지의 "사전 빌드 구성" 섹션에서 **사전 빌드 설정** 을 클릭합니다.

   ![‘사전 빌드 설정’ 단추](/assets/images/help/codespaces/prebuilds-set-up.png)

1. 사전 빌드를 설정할 분기를 선택합니다.

   ![분기 드롭다운 메뉴](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %} 

   **참고**: 사전 빌드 사용 기본 분기에서 만든 모든 분기도 일반적으로 동일한 개발 컨테이너 구성에 대한 사전 빌드를 가져옵니다. 예를 들어 리포지토리의 기본 분기에서 개발 컨테이너 구성 파일에 대해 사전 빌드를 사용하도록 설정하면 대부분의 경우 기본 분기를 기반으로 한 분기도 동일한 개발 컨테이너 구성에 대한 사전 빌드를 가져옵니다.

   {% endnote %}

1. 필요에 따라 표시되는 **구성 파일** 드롭다운 메뉴에서 사전 빌드에 `devcontainer.json` 사용할 구성 파일을 선택합니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)”를 참조하세요.

   ![구성 파일 드롭다운 메뉴](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. 사전 빌드 업데이트를 자동으로 트리거하는 방법을 선택합니다.

   * **모든 푸시** (기본 설정) - 이 설정을 사용하면 지정된 분기에 대한 모든 푸시에서 사전 빌드가 업데이트됩니다. 이렇게 하면 사전 빌드에서 생성된 codespace에 최근 추가되거나 업데이트된 종속성을 포함하여 항상 최신 codespace 구성이 포함됩니다.
   * **구성 변경** 시 - 이 설정을 사용하면 지정된 리포지토리 및 분기에 대한 연결된 구성 파일이 업데이트될 때마다 사전 빌드가 업데이트됩니다. 이렇게 하면 사전 빌드에서 codespace를 생성할 때 리포지토리에 대한 개발 컨테이너 구성 파일의 변경 내용이 사용됩니다. 사전 빌드를 업데이트하는 {% data variables.product.prodname_actions %} 워크플로는 실행 빈도가 낮아지므로 이 옵션은 {% data variables.product.prodname_actions %} 분을 더 적게 사용합니다. 그러나 이 옵션은 codespace에 항상 최근에 추가되거나 업데이트된 종속성이 포함되어 있다고 보장할 수 없으므로 codespace를 만든 후에 수동으로 추가하거나 업데이트해야 할 수 있습니다.
   * **예약됨** - 이 설정을 사용하면 사용자가 정의한 사용자 지정 일정에 따라 사전 빌드를 업데이트할 수 있습니다. 이렇게 하면 {% data variables.product.prodname_actions %} 분 소비를 줄일 수 있지만, 이 옵션을 사용하면 최신 개발 컨테이너 구성 변경 내용을 사용하지 않는 codespace를 만들 수 있습니다.

   ![사전 빌드 트리거 옵션](/assets/images/help/codespaces/prebuilds-triggers.png)

1. 필요에 따라 **특정 지역에서만 사용할 수 있는 사전 빌드 축소를** 선택하여 지정된 지역에만 사전 빌드를 만듭니다. 사전 빌드를 사용할 지역을 선택합니다.

   기본적으로 사전 빌드는 사용 가능한 모든 지역에서 만들어지고 사전 빌드당 스토리지 요금이 발생합니다.

   ![지역 선택 옵션](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **참고**: 
   * 각 지역의 사전 빌드에는 개별 스토리지 요금이 발생합니다. 따라서 사전 빌드가 사용될 것으로 알고 있는 지역에 대해서만 사전 빌드를 사용하도록 설정해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)”를 참조하세요.
   * 개발자는 {% data variables.product.prodname_github_codespaces %}에 대한 기본 지역을 설정할 수 있으며, 이를 통해 더 적은 수의 지역에 대해 사전 빌드를 사용하도록 설정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}의 기본 지역 설정](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)”을 참조하세요.

   {% endnote %}

1. 필요에 따라 **템플릿 기록** 에서 보존할 사전 빌드 버전 수를 설정합니다. 1에서 5 사이의 숫자를 입력할 수 있습니다. 저장된 버전의 기본 수는 2입니다. 즉, 최신 사전 빌드 및 이전 버전만 저장됩니다.

   ![사전 빌드 템플릿 기록 설정](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

   사전 빌드 트리거 설정에 따라 각각의 푸시 또는 개발 컨테이너 구성 변경에 따라 사전 빌드가 변경됩니다. 이전 버전의 사전 빌드를 유지하면 현재 사전 빌드와 다른 개발 컨테이너 구성을 사용하여 이전 커밋에서 사전 빌드를 만들 수 있습니다. 이 설정을 사용하면 보존된 버전 수를 요구 사항에 적합한 수준으로 설정할 수 있습니다. 

   저장할 사전 빌드 버전 수를 1로 설정하면 {% data variables.product.prodname_github_codespaces %}는 최신 버전의 사전 빌드만 저장하고 템플릿이 업데이트될 때마다 이전 버전을 삭제합니다. 즉, 이전의 개발 컨테이너 구성으로 돌아가면 사전 빌드된 Codespace는 표시되지 않습니다.
   
   유지되는 각 사전 빌드 버전과 관련된 스토리지 비용이 있습니다. 예를 들어 4개 지역에서 사전 빌드를 생성하고 2개의 버전을 유지하는 경우 최대 8개의 사전 빌드 스토리지에 대한 요금이 청구됩니다. 청구에 대한 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”를 참조하세요.

1. 필요한 경우 이 구성에 대해 사전 빌드 워크플로 실행이 실패할 때 알릴 사용자 또는 팀을 추가합니다. 사용자 이름, 팀 이름 또는 전체 이름을 입력한 다음 목록에 이름을 추가하려면 이름을 클릭할 수 있습니다. 추가한 사용자나 팀은 사전 빌드 오류가 발생할 때 추가 조사에 도움이 되는 워크플로 실행 로그 링크를 포함하는 메일을 받게 됩니다.

   ![사전 빌드 실패 알림 설정](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. 필요에 따라 페이지 아래쪽에서 **고급 옵션 표시** 를 클릭합니다.

   !["고급 옵션 표시"가 강조 표시된 사전 빌드 구성 페이지의 스크린샷](/assets/images/help/codespaces/show-advanced-options.png)

   "고급 옵션" 섹션에서 **사전 빌드 최적화 사용 안 함을** 선택하면 최신 사전 빌드 워크플로가 실패했거나 현재 실행 중인 경우 codespace가 사전 빌드 없이 만들어집니다. 자세한 내용은 "[사전 빌드 문제 해결"을 참조하세요.](/codespaces/troubleshooting/troubleshooting-prebuilds#preventing-out-of-date-prebuilds-being-used)

1. **만들기** 를 클릭합니다.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

사전 빌드 구성을 만든 후에는 리포지토리 설정의 {% data variables.product.prodname_github_codespaces %} 페이지에 나열됩니다. {% data variables.product.prodname_actions %} 워크플로는 큐에 대기된 다음, 지정한 지역에서 선택한 분기 및 개발 컨테이너 구성 파일에 따라 사전 빌드를 만들기 위해 실행됩니다. 

![사전 빌드 구성 목록의 스크린샷](/assets/images/help/codespaces/prebuild-configs-list.png)

사전 빌드 구성을 편집하고 삭제하는 방법에 대한 자세한 내용은 "[사전 빌드 관리](/codespaces/prebuilding-your-codespaces/managing-prebuilds)"를 참조하세요.

## 환경 변수 구성

사전 빌드 프로세스가 개발 환경을 만드는 데 필요한 환경 변수에 액세스할 수 있도록 하려면 {% data variables.product.prodname_codespaces %} 리포지토리 비밀 또는 {% data variables.product.prodname_codespaces %} 조직 비밀로 설정할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 비밀 추가](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)” 및 “[조직의 비밀 추가](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)”를 참조하세요. 

이 방법으로 만든 비밀은 이 리포지토리에서 codespace를 만드는 모든 사용자가 액세스할 수 있습니다. 이렇게 하지 않으려면 `CODESPACES_PREBUILD_TOKEN` 비밀을 설정할 수도 있습니다. `CODESPACES_PREBUILD_TOKEN` 비밀은 사전 빌드에만 사용되며 해당 값은 사용자의 codespace에서 액세스할 수 없습니다. 

사전 빌드에서는 사용자 환경을 빌드하는 동안 사용자 수준 비밀을 사용할 수 없습니다. codespace가 만들어진 후에야 사용자 수준 비밀을 사용할 수 있기 때문입니다.

## 사전 빌드에 포함할 시간이 오래 걸리는 작업 구성

`devcontainer.json`에서 `onCreateCommand` 및 `updateContentCommand` 명령을 사용하여 사전 빌드 생성의 일부로 시간이 오래 걸리는 프로세스를 포함할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_vscode %} 설명서, "[devcontainer.json 참조](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)"를 참조하세요.

`onCreateCommand` 는 사전 빌드를 만들 때 한 번만 실행되는 반면 `updateContentCommand` , 는 사전 빌드를 만들고 이후 업데이트할 때 실행됩니다. 증분 빌드는 프로젝트의 소스를 나타내고 모든 사전 빌드 업데이트에 포함되어야 하므로 `updateContentCommand`에 포함되어야 합니다.

## 추가 참고 자료

- "[사전 빌드에서 다른 리포지토리에 액세스할 수 있도록 허용](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)"
- “[사전 빌드 문제 해결](/codespaces/troubleshooting/troubleshooting-prebuilds)”

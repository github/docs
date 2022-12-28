---
title: Codespace의 자동 삭제 구성
shortTitle: Configure automatic deletion
intro: 비활성 codespace는 자동으로 삭제됩니다. 중지된 Codespace가 보존되는 기간(최대 30일)을 선택할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5414d2223f490638f27475840a25883e9c353e77
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160110'
---
기본적으로 {% data variables.product.prodname_github_codespaces %}은(는) 중지되고 30일 동안 비활성 상태로 유지된 후 자동으로 삭제됩니다.

그러나 {% data variables.product.prodname_github_codespaces %}에 스토리지 요금이 부과되므로 {% data variables.product.prodname_github_codespaces %}에 대한 개인 설정에서 기본 기간을 변경하여 보존 기간을 줄이는 것이 좋습니다. 스토리지 요금에 대한 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”를 참조하세요.

{% note %}

**참고**: 개인 Codespace 보존 기간을 설정했는지 여부에 관계없이 더 이상 필요하지 않은 Codespace를 삭제하는 습관을 들이는 것이 좋습니다. 자세한 내용은 "[codespace 삭제](/codespaces/developing-in-codespaces/deleting-a-codespace)"를 참조하세요.

{% endnote %}

자동 삭제는 Codespace에 푸시되지 않은 변경 내용이 포함되어 있는지 여부에 관계없이 발생합니다. Codespace가 자동으로 삭제되지 않도록 하려면 그 Codespace를 다시 엽니다. 보존 기간은 Codespace에 연결할 때마다 재설정되며, Codespace가 중지되면 보존 카운트다운이 다시 시작됩니다.

리포지토리가 조직에 속한 경우, 해당 조직 관리자가 전체 조직에 대한 보존 기간을 설정했을 수 있습니다. 이 기간이 개인 설정의 기본 보존 기간보다 작으면 조직 보존 기간이 이 리포지토리용으로 만든 Codespace에 적용됩니다. 자세한 내용은 “[Codespace의 보존 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”을 참조하세요.

각 Codespace에는 자체 보존 기간이 있습니다. 따라서 보존 기간이 다른 Codespace가 있을 수 있습니다. 예를 들어 다음과 같은 상황일 수 있습니다.
* Codespace를 만들고, 기본 보존 기간을 변경한 다음, 다른 Codespace를 만들었습니다.
* {% data variables.product.prodname_cli %}를 사용하여 Codespace를 만들고 다른 보존 기간을 지정했습니다.
* 조직에 대해 구성된 보존 기간이 있는 조직 소유 리포지토리에서 Codespace를 만들었습니다.

{% note %}

**참고**: 보존 기간(일)을 지정합니다. 하루는 24시간이며 하루 중 Codespace를 중지하는 시점에서 시작합니다.

{% endnote %}

{% webui %}

## Codespace에 대한 기본 보존 기간 설정

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “기본 보존 기간”에서 Codespace가 중지된 후 보존할 기본 일 수를 입력합니다. 

   ![보존 기간 선택](/assets/images/help/codespaces/setting-default-retention.png)

   기본 보존 기간을 `0`~`30`일로 설정할 수 있습니다. 

   {% warning %}

   **경고**: 기간을 `0`으로 설정하면 Codespace를 중지하거나 비활성으로 인해 시간 초과 시 Codespace가 즉시 삭제됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}의 시간 제한 기간 설정](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)”을 참조하세요.

   {% endwarning %}
 
1. **저장을** 클릭합니다.

{% data variables.product.prodname_cli %}를 사용하여 Codespace를 만들 때 이 기본값을 재정의할 수 있습니다. 더 짧은 보존 기간을 지정하는 조직에서 Codespace를 만들면 조직 수준 값이 개인 설정을 재정의합니다.

보존 기간을 이틀 이상으로 설정하면 삭제 하루 전에 메일 알림이 전송됩니다. 

## 자동 삭제까지 남은 시간 확인

Codespace가 곧 자동으로 삭제될 예정인지 여부를 확인할 수 있습니다. 

비활성 Codespace의 보존 기간이 끝나갈 때 [https://github.com/codespaces](https://github.com/codespaces)에서 {% data variables.product.prodname_dotcom %}의 Codespace 목록에 표시됩니다.

![{% data variables.product.prodname_dotcom %}의 Codespace 목록에 있는 삭제 전 메시지](/assets/images/help/codespaces/retention-deletion-message.png)

{% endwebui %}

{% cli %}

## Codespace에 대한 보존 기간 설정

Codespace를 만들 때 Codespace 보존 기간을 설정하려면 `--retention-period` 플래그와 `codespace create` 하위 명령을 활용합니다. 기간을 일 수로 지정합니다. 기간은 0~30일 사이여야 합니다.

```shell
gh codespace create --retention-period DAYS
```

Codespace를 만들 때 보존 기간을 지정하지 않으면 더 낮은 보존 기간에 따라 기본 보존 기간 또는 조직 보존 기간이 사용됩니다. 기본 보존 기간을 설정하는 방법을 자세히 알아보려면 이 페이지의 “웹 브라우저” 탭을 클릭합니다. 

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## 보존 기간 설정

웹 브라우저의 {% data variables.product.prodname_dotcom_the_website %}에서 기본 보존 기간을 설정할 수 있습니다. 아니면 {% data variables.product.prodname_cli %}를 사용하여 Codespace를 만드는 경우 해당 특정 Codespace에 대한 보존 기간을 설정할 수 있습니다. 위에서 적당한 탭을 클릭해 자세한 정보를 확인합니다.

## Codespace가 곧 자동 삭제될지 여부 확인

{% data variables.product.prodname_vscode %} 데스크톱 응용 프로그램에서 Codespace가 곧 자동으로 삭제될 예정인지 확인할 수 있습니다.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. 아직 선택하지 않은 경우 원격 탐색기 오른쪽 위에 있는 드롭다운 메뉴에서 **{% data variables.product.prodname_github_codespaces %}** 를 선택합니다.
1. “Github Codespaces”에서 관심 있는 Codespace 위에 마우스 포인터를 올립니다. Codespace에 대한 정보를 보여 주는 팝업 상자가 표시됩니다.

   Codespace의 보존 기간이 거의 끝나갈 때 Codespace가 언제 삭제될 지 알려주는 줄이 포함됩니다.

   ![삭제까지 남은 시간을 보여 주는 Codespace 정보](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}

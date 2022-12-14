---
title: Codespaces의 시간 제한 기간 설정
shortTitle: Set the timeout
intro: 개인 설정 페이지에서 {% data variables.product.prodname_codespaces %}에 대한 기본 시간 제한을 설정할 수 있습니다.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3a4e009b5494b96e6daa6736a441a5fba9594857
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064420"
---
비활성 기간이 지나면 Codespaces의 실행이 중지됩니다. 이 시간 제한 기간의 길이를 지정할 수 있습니다. 업데이트된 설정은 새로 만든 모든 Codespace에 적용됩니다.

일부 조직에는 최대 유휴 시간 제한 정책이 있을 수 있습니다. 조직 정책이 설정한 기본 시간 제한보다 작은 최대 시간 제한을 설정하는 경우 조직의 시간 제한은 설정 대신 사용되며, codespace를 만든 후에 이를 알립니다. 자세한 내용은 "[유휴 시간 제한 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"을 참조하세요.

{% warning %}

**경고**: Codespace에는 분당 요금이 청구됩니다. Codespace를 활발하게 사용하지는 않지만 Codespace의 시간이 아직 초과되지 않은 경우 Codespace가 실행되는 시간에 대한 요금이 계속 청구됩니다. 자세한 내용은 “[Codespaces에 대한 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”를 참조하세요.

{% endwarning %}

{% webui %}

## <a name="setting-your-default-timeout-period"></a>기본 시간 제한 기간 설정

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “기본 유휴 시간 제한”에서 원하는 시간을 입력한 다음 **저장** 을 클릭합니다. 시간은 5분에서 240분(4시간) 사이여야 합니다.
   ![시간 제한 선택](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## <a name="setting-the-timeout-period-for-a-codespace"></a>Codespace에 대한 시간 제한 기간 설정

{% data reusables.cli.cli-learn-more %}

Codespace를 만들 때 시간 제한 기간을 설정하려면 `codespace create` 하위 명령과 함께 `idle-timeout` 인수를 사용합니다. 시간을 분 단위로 지정한 다음 `m`을 입력합니다. 시간은 5분에서 240분(4시간) 사이여야 합니다.

```shell
gh codespace create --idle-timeout 90m
```

Codespace를 만들 때 시간 제한 기간을 지정하지 않으면 기본 제한 기간이 사용됩니다. 기본 시간 제한 기간을 설정하는 방법을 자세히 알아보려면 이 페이지의 “웹 브라우저” 탭을 클릭합니다. 현재 {% data variables.product.prodname_cli %}를 통해 기본 제한 시간을 지정할 수 없습니다.

{% endcli %}

{% vscode %}

## <a name="setting-a-timeout-period"></a>시간 제한 기간 설정

웹 브라우저의 {% data variables.product.prodname_dotcom_the_website %}에서 기본 제한 시간을 설정할 수 있습니다. 또는 {% data variables.product.prodname_cli %}를 사용하여 Codespace를 만드는 경우 해당 특정 Codespace에 대한 시간 제한 기간을 설정할 수 있습니다. 위에서 적당한 탭을 클릭해 자세한 정보를 확인합니다.

{% endvscode %}

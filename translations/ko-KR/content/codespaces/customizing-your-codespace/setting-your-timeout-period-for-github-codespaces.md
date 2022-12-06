---
title: Github Codespaces의 시간 제한 기간 설정
shortTitle: Set the timeout
intro: '개인 설정 페이지에서 {% data variables.product.prodname_github_codespaces %}에 대한 기본 시간 제한을 설정할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 6ca559fefddc34eb6de0441d17344ff8054db509
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159929'
---
## 유휴 시간 제한 정보

비활성 기간이 지나면 Codespaces의 실행이 중지됩니다. 기본적으로 이 기간은 30분이지만 {% data variables.product.prodname_dotcom %}의 개인 설정에서 더 길거나 짧은 기본 제한 시간을 지정할 수 있습니다. 업데이트된 설정은 사용자가 만든 새 codespace 또는 다음에 시작할 때 기존 codespace에 적용됩니다. {% data variables.product.prodname_cli %}을(를) 사용하여 codespace를 만들 때 시간 제한을 지정할 수도 있습니다.

{% warning %}

**경고**: Codespaces 컴퓨팅 사용량은 codespace가 활성화된 기간 동안 청구됩니다. codespace를 사용하지 않지만 계속 실행 중이고 아직 시간이 초과되지 않은 경우 사용 여부에 관계없이 codespace가 활성화된 총 시간에 대한 요금이 청구됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”를 참조하세요.

{% endwarning %}

### 조직 소유 리포지토리에 대한 시간 제한 기간

조직은 리포지토리의 일부 또는 전체에서 만든 codespace에 대해 최대 유휴 시간 제한 정책을 설정할 수 있습니다. 조직 정책이 설정한 기본 시간 제한보다 작은 최대 시간 제한을 설정하는 경우 조직의 시간 제한은 설정 대신 사용됩니다. codespace를 만든 후에 이 알림이 표시됩니다. 자세한 내용은 "[유휴 시간 제한 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"을 참조하세요.

{% webui %}

## 기본 시간 제한 기간 설정

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “기본 유휴 시간 제한”에서 원하는 시간을 입력한 다음 **저장** 을 클릭합니다. 시간은 5분에서 240분(4시간) 사이여야 합니다.
   ![시간 제한 선택](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Codespace에 대한 시간 제한 기간 설정

{% data reusables.cli.cli-learn-more %}

Codespace를 만들 때 시간 제한 기간을 설정하려면 `codespace create` 하위 명령과 함께 `idle-timeout` 인수를 사용합니다. 시간을 분 단위로 지정한 다음 `m`을 입력합니다. 시간은 5분에서 240분(4시간) 사이여야 합니다.

```shell
gh codespace create --idle-timeout 90m
```

Codespace를 만들 때 시간 제한 기간을 지정하지 않으면 기본 제한 기간이 사용됩니다. 기본 시간 제한 기간을 설정하는 방법을 자세히 알아보려면 이 페이지의 “웹 브라우저” 탭을 클릭합니다. 현재 {% data variables.product.prodname_cli %}를 통해 기본 제한 시간을 지정할 수 없습니다.

{% endcli %}

{% vscode %}

## 시간 제한 기간 설정

웹 브라우저의 {% data variables.product.prodname_dotcom_the_website %}에서 기본 제한 시간을 설정할 수 있습니다. 또는 {% data variables.product.prodname_cli %}를 사용하여 Codespace를 만드는 경우 해당 특정 Codespace에 대한 시간 제한 기간을 설정할 수 있습니다. 위에서 적당한 탭을 클릭해 자세한 정보를 확인합니다.

{% endvscode %}

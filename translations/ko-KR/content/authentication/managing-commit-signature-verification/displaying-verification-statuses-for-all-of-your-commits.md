---
title: 모든 커밋에 대한 확인 상태 표시
shortTitle: Displaying verification for all commits
intro: 커밋 서명 확인을 위해 경계 모드를 사용하도록 설정하여 모든 커밋 및 태그를 서명 확인 상태로 표시할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits
ms.openlocfilehash: 0622814d683df3decf7eac407a6e9bf2bd7e2afa
ms.sourcegitcommit: 58f69d95fcc8a2fd1c2fb736a0ad8e7ee1858be4
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/07/2022
ms.locfileid: '148012646'
---
{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

## 경계 모드 정보

컴퓨터에서 로컬로 작업하는 경우 Git을 사용하면 변경 내용의 작성자 및 커밋자의 ID를 설정할 수 있습니다. 이렇게 하면 사용자가 만든 커밋 및 태그가 실제로 생성되었다고 다른 사용자가 확신하기가 어려울 수 있습니다. 커밋 및 태그에 서명하여 문제를 해결할 수 있습니다. 자세한 내용은 “[커밋 서명](/github/authenticating-to-github/signing-commits)” 및 “[태그 서명](/github/authenticating-to-github/signing-tags)”을 참조하세요. {% data variables.product.prodname_dotcom %}은 서명된 커밋 및 태그를 확인 상태로 표시합니다. 

기본적으로 커밋 및 태그는 성공적으로 확인된 GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} 또는 S/MIME 키로 서명된 경우 “확인됨”으로 표시됩니다. {% data variables.product.prodname_dotcom %}에서 확인할 수 없는 서명이 커밋 또는 태그에 있는 경우 커밋 또는 태그를 “확인되지 않음”으로 표시합니다. 다른 모든 경우에는 확인 상태가 표시되지 않습니다.

그러나 {% data variables.product.prodname_dotcom %} 설정에서 경계 모드를 사용하도록 설정하여 다른 사용자에 대해 커밋 및 태그에 기인하는 ID에 대한 신뢰도를 높일 수 있습니다. 경계 모드를 사용하도록 설정하면 모든 커밋 및 태그가 세 가지 확인 상태 중 하나로 표시됩니다.

![서명 확인 상태](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

모든 커밋 및 태그에 서명하고 {% data variables.product.product_name %}에서 계정에 대해 확인된 메일 주소를 커밋자 메일 주소로 사용하는 경우에만 경계 모드를 사용하도록 설정해야 합니다. 이 모드를 사용하도록 설정한 후 로컬로 생성하여 {% data variables.product.prodname_dotcom %}에 푸시하는 서명되지 않은 커밋 또는 태그는 “확인되지 않음”으로 표시됩니다.

{% data reusables.identity-and-permissions.verification-status-check %}

## 경계 모드 사용

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. SSH 설정 페이지의 “경계 모드”에서 **서명되지 않은 커밋을 확인되지 않은 것으로 플래그 지정** 을 선택합니다.

   ![서명되지 않은 커밋을 확인되지 않은 확인란으로 플래그 지정](/assets/images/help/commits/vigilant-mode-checkbox.png)

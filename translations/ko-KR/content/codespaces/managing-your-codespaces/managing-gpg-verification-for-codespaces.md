---
title: Codespaces에 대한 GPG 확인 관리
intro: '{% data variables.product.company_short %}가 자동으로 GPG를 사용하여 Codespace에서 커밋에 서명하도록 허용할 수 있으므로 다른 사용자가 신뢰할 수 있는 원본에서 변경 내용을 확인할 수 있습니다.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Developer
- Security
redirect_from:
- /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
- /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: 588082ccd4d861afd8fc78b3b56ae22a06ba72d9
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145119828"
---
GPG 확인을 사용하도록 설정하면 {% data variables.product.company_short %}는 {% data variables.product.prodname_codespaces %}에서 수행한 커밋에 자동으로 서명하고 {% data variables.product.product_name %}에서 커밋 상태가 확인됩니다. 기본적으로 만드는 codespace에 대한 GPG 확인을 사용하지 않도록 설정됩니다. 모든 리포지토리 또는 특정 리포지토리에 대해 GPG 확인을 허용하도록 선택할 수 있습니다. 신뢰하는 리포지토리에 대해서만 GPG 확인을 사용하도록 설정합니다. {% data variables.product.product_name %} 서명된 커밋에 대한 자세한 내용은 “[커밋 서명 확인 정보](/github/authenticating-to-github/about-commit-signature-verification)”를 참조하세요.

GPG 확인을 사용하도록 설정하면 모든 codespace에 즉시 적용됩니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “GPG 확인”에서 GPG 확인에 사용할 설정을 선택합니다.
  ![GPG 확인을 관리하는 라디오 단추](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. “선택한 리포지토리”를 선택한 경우 드롭다운 메뉴를 선택한 다음 GPG 확인을 사용하려는 리포지토리를 클릭합니다. GPG 확인을 사용하도록 설정하려는 모든 리포지토리에 대해 반복합니다.
  ![“선택한 리포지토리” 드롭다운 메뉴](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


{% note %}

**참고:** {% data variables.product.prodname_codespaces %}에 대해 GPG 확인을 사용하도록 설정한 후 서명하려면 각 커밋에 `-S`도 추가해야 합니다. {% data variables.product.prodname_vscode %}에서 이 작업을 수행하려면 설정 “Git: 커밋 서명 사용” 옵션이 사용하도록 설정되어 있는지 확인합니다.

{% endnote %}

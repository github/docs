---
title: GitHub Codespaces 관련 GPG 확인 관리
intro: '{% data variables.product.company_short %}가 자동으로 GPG를 사용하여 Codespace에서 커밋에 서명하도록 허용할 수 있으므로 다른 사용자가 신뢰할 수 있는 원본에서 변경 내용을 확인할 수 있습니다.'
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
  - /codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: ff83eba1720a2841747536ec04bfc0b3db055669
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167103'
---
GPG 확인을 사용하도록 설정하면 {% data variables.product.company_short %}는 {% data variables.product.prodname_github_codespaces %}에서 수행한 커밋에 자동으로 서명하고 {% data variables.product.product_name %}에서 커밋 상태가 확인됩니다. 기본적으로 만드는 codespace에 대한 GPG 확인을 사용하지 않도록 설정됩니다. 모든 리포지토리 또는 특정 리포지토리에 대해 GPG 확인을 허용하도록 선택할 수 있습니다. 신뢰하는 리포지토리에 대해서만 GPG 확인을 사용하도록 설정합니다. {% data variables.product.product_name %} 서명된 커밋에 대한 자세한 내용은 “[커밋 서명 확인 정보](/github/authenticating-to-github/about-commit-signature-verification)”를 참조하세요.

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% note %}

**참고:** dotfiles 리포지토리를 {% data variables.product.prodname_github_codespaces %}와 연결한 경우 dotfiles의 Git 구성이 {% data variables.product.prodname_github_codespaces %}이(가) 커밋에 서명하는 데 필요한 구성과 충돌할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 GPG 확인 문제 해결](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces)"을 참조하세요.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “GPG 확인”에서 GPG 확인에 사용할 설정을 선택합니다.
  ![GPG 확인을 관리하는 라디오 단추](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. "선택한 리포지토리"를 선택한 경우 드롭다운 메뉴를 선택한 다음 GPG 확인을 사용하도록 설정할 리포지토리를 클릭합니다. GPG 확인을 사용하도록 설정하려는 모든 리포지토리에 대해 반복합니다.
  !["선택한 리포지토리" 드롭다운 메뉴](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


{% data variables.product.prodname_github_codespaces %}에 대해 GPG 확인을 사용하도록 설정하면 모든 커밋은 기본적으로 codespaces에서 서명됩니다.

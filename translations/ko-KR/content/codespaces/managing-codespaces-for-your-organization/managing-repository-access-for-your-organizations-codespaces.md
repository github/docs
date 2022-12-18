---
title: 조직의 codespace에 대한 리포지토리 액세스 관리
shortTitle: Repository access
intro: '{% data variables.product.prodname_github_codespaces %}에서 액세스할 수 있는 조직의 리포지토리를 관리할 수 있습니다.'
permissions: 'To manage access and security for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
ms.openlocfilehash: 9fdec24104a61170977053195446db0b4cf0a62f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160234'
---
{% warning %}

**주의 사항**: 아래에 설명된 액세스 및 보안 설정은 이제 사용되지 않으며 여기에 참조용으로만 문서화되어 있습니다. 다른 리포지토리에 대한 확장된 액세스를 사용하도록 설정하려면 요청된 권한을 `devcontainer.json` 구성 파일에 추가합니다. 자세한 내용은 “[codespace 내의 다른 리포지토리에 대한 액세스 관리](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”를 참조하세요.

{% endwarning %}

기본적으로 codespace는 생성된 리포지토리에만 액세스할 수 있습니다. 조직 소유의 리포지토리에 대한 액세스 및 보안을 사용하도록 설정하면 해당 리포지토리에 대해 생성된 모든 codespace에는 조직이 소유하고 codespace 작성자가 액세스할 수 있는 권한이 있는 다른 모든 리포지토리에 대한 읽기 권한도 있습니다. codespace가 액세스할 수 있는 리포지토리를 제한하려는 경우 codespace가 생성된 리포지토리 또는 특정 리포지토리로 제한할 수 있습니다. 신뢰하는 리포지토리에 대해서만 액세스 및 보안을 사용하도록 설정해야 합니다.

조직에서 {% data variables.product.prodname_github_codespaces %}를 사용할 수 있는 사용자를 관리하려면 "[조직에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)"을 참조하세요.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. “액세스 및 보안”에서 조직에 대해 원하는 설정을 선택합니다.
  ![신뢰할 수 있는 리포지토리를 관리하는 라디오 단추](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. "선택한 리포지토리"를 선택한 경우 드롭다운 메뉴를 선택한 다음 리포지토리를 클릭하여 리포지토리의 codespace가 조직 소유의 다른 리포지토리에 액세스할 수 있도록 합니다. 다른 리포지토리에 액세스하려는 codespace가 있는 모든 리포지토리에 대해 반복합니다.
    !["선택한 리포지토리" 드롭다운 메뉴](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## 추가 참고 자료

- “[codespace에 대한 리포지토리 액세스 관리](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”

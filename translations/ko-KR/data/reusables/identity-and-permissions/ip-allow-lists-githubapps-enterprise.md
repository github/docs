---
ms.openlocfilehash: dc4b17d3c5f283d72fcda54e4a95e8db2821714a
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180181"
---
허용 목록을 사용하는 경우 엔터프라이즈에 설치된 {% data variables.product.prodname_github_apps %}에 대해 구성된 모든 IP 주소를 허용 목록에 자동으로 추가하도록 선택할 수도 있습니다. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

만든 {% data variables.product.prodname_github_app %}에 대한 허용 목록을 만드는 방법에 대한 자세한 내용은 "[GitHub 앱에 허용되는 IP 주소 관리](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)"를 참조하세요.

{% data variables.product.prodname_github_apps %}에 대한 IP 주소를 자동으로 추가하려면 다음을 수행합니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. **설치된 GitHub 앱에 대해 IP 허용 목록 구성** 사용을 선택합니다. OIDC에서 {% data variables.product.prodname_emus %}를 사용하는 경우 먼저 IP 허용 목록 구성으로 **GitHub** 를 선택한 다음 **, 설치된 GitHub 앱에 IP 허용 목록 구성 사용을** 선택합니다.
  ![GitHub 앱 IP 주소를 허용하는 확인란](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. **저장** 을 클릭합니다.

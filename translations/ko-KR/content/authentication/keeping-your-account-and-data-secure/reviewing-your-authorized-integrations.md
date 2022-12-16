---
title: 권한 있는 통합 검토
intro: 권한 있는 통합을 검토하여 각 통합이 계정 및 데이터에 대해 가진 액세스 권한을 감사할 수 있습니다.
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
ms.openlocfilehash: ec67e7b18b4ad898cd53b4773b299d90bc3dc9e5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088414'
---
## 권한 있는 {% data variables.product.prodname_oauth_apps %} 검토

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %} {% data reusables.user-settings.review-oauth-apps %}

## 권한 있는 {% data variables.product.prodname_github_apps %} 검토

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %}
3. **Authorized {% data variables.product.prodname_github_apps %}** (권한 있는 GitHub 앱) 탭을 클릭합니다. ![권한 있는 {% data variables.product.prodname_github_apps %} 탭](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. 계정에 액세스할 수 있는 {% data variables.product.prodname_github_apps %}를 검토합니다. 인식할 수 없거나 오래된 항목의 경우 **Revoke**(철회)를 클릭합니다. 모든 {% data variables.product.prodname_github_apps %}를 철회하려면 **Revoke all**(모두 철회)을 클릭합니다.
   ![권한 있는 {% data variables.product.prodname_github_app %} 목록](/assets/images/help/settings/revoke-github-app.png)

## 추가 참고 자료
{% ifversion fpt or ghec %}
- “[통합 정보](/articles/about-integrations)”{% endif %}
- “[권한 있는 애플리케이션 검토(OAuth)](/articles/reviewing-your-authorized-applications-oauth)”

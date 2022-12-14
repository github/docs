---
title: 조직에 Codespaces를 사용하도록 설정
shortTitle: Enable Codespaces
intro: 조직에서 누가 {% data variables.product.prodname_codespaces %}를 사용할 수 있는지 제어할 수 있습니다.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Permissions
- Administrator
ms.openlocfilehash: bd4518ef6db3887e504b13459abb5c6a682c8659
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145119927"
---
## <a name="about-enabling--data-variablesproductprodname_codespaces--for-your-organization"></a>조직에 {% data variables.product.prodname_codespaces %}를 사용하도록 설정하는 방법 관련 정보

조직 소유자는 조직에서 codespace를 만들고 사용할 수 있는 사용자를 제어할 수 있습니다.

조직에서 codespace를 사용하려면 다음을 수행해야 합니다.

- 사용자에게 codespace를 사용할 리포지토리에 대한 [쓰기 액세스 권한 이상](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)이 있는지 확인합니다. 
- [조직 내 사용자에게 {% data variables.product.prodname_codespaces %}를 사용하도록 설정합니다](#enable-codespaces-for-users-in-your-organization). 선택한 사용자 또는 특정 사용자에 대해서만 {% data variables.product.prodname_codespaces %}를 허용하도록 선택할 수 있습니다.
- [지출 한도 설정](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- 조직에 IP 주소 허용 목록이 사용하도록 설정되어 있지 않은지 확인합니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 문서의 “[조직의 허용되는 IP 주소 관리](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}”를 참조하세요.{% else %}."{% endif %}

기본적으로 codespace는 codespace가 생성된 리포지토리에만 액세스할 수 있습니다. 조직 내 codespace가 codespace 작성자가 액세스할 수 있는 다른 조직 리포지토리에 액세스할 수 있게 하고 싶다면 "[{% data variables.product.prodname_codespaces %}에 대한 액세스 및 보안 관리](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)"를 참조하세요.

## <a name="enable--data-variablesproductprodname_codespaces--for-users-in-your-organization"></a>조직 내 사용자에게 {% data variables.product.prodname_codespaces %}를 사용하도록 설정

{% ifversion fpt %} {% note %}

**참고:** 확인된 교육자 또는 교사인 경우 {% data variables.product.prodname_classroom %}에서 {% data variables.product.prodname_codespaces %}를 사용하도록 설정해야 {% data variables.product.prodname_codespaces %} 교육 혜택을 사용할 수 있습니다. 자세한 내용은 "[GitHub Codespaces를 GitHub 클래스룸과 함께 사용](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)"을 참조하세요.

{% endnote %} {% endif %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. "사용자 권한"에서 다음 옵션 중 하나를 선택합니다.

   * **선택된 사용자** 는 {% data variables.product.prodname_codespaces %}를 사용할 특정 조직 구성원을 선택합니다.
   * **모든 구성원에 허용** 은 모든 조직 구성원이 {% data variables.product.prodname_codespaces %}를 사용할 수 있게 합니다.
   * **모든 구성원 및 외부 협력자에게 허용** 모든 조직 구성원과 외부 협력자가 {% data variables.product.prodname_codespaces %}를 사용할 수 있게 합니다.

   !["사용자 권한"용 라디오 단추](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **참고:** **모든 구성원 및 외부 협력자에게 허용** 을 선택하면 특정 리포지토리에 추가된 모든 외부 협력자가 {% data variables.product.prodname_codespaces %}를 만들고 사용할 수 있습니다. 외부 협력자가 유발하는 모든 사용량에 대해 요금이 조직에 청구됩니다. 외부 협력자 관리에 대한 자세한 내용은 "[외부 협력자 정보](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)"를 참조하세요.

   {% endnote %}

1. **저장** 을 클릭합니다.

## <a name="disabling--data-variablesproductprodname_codespaces--for-your-organization"></a>조직에 대해 {% data variables.product.prodname_codespaces %}를 사용하지 않도록 설정

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. "사용자 권한"에서 **사용 안 함** 을 선택합니다.

## <a name="setting-a-spending-limit"></a>지출 한도 설정

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

계정의 지출 한도를 관리하고 변경하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_codespaces %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”를 참조하세요.

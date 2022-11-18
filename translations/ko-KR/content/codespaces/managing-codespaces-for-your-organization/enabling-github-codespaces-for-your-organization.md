---
title: 조직에 Github Codespaces를 사용하도록 설정
shortTitle: 'Enable {% data variables.product.prodname_codespaces %}'
intro: '조직의 비용으로 조직에서 {% data variables.product.prodname_github_codespaces %}를 사용할 수 있는 사용자를 제어할 수 있습니다.'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
ms.openlocfilehash: 992d744e04ae00db4d760b59a9d08d1700846998
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158903'
---
## 조직에 {% data variables.product.prodname_github_codespaces %}를 사용하도록 설정하는 방법 관련 정보

조직 소유자는 조직의 비용으로 조직에서 codespace를 만들고 사용할 수 있는 사용자를 제어할 수 있습니다. 가격 책정에 대한 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 청구 정보"를 참조하세요](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

리포지토리에 변경 내용을 푸시하거나 리포지토리를 포크할 수 있는 사용자만 해당 리포지토리에 대한 codespace를 만들 수 있습니다. 조직 소유 리포지토리에 대한 codespace를 만들 수 있도록 하려면 다음을 수행해야 합니다.

- 사용자에게 codespace를 사용할 리포지토리에 대한 쓰기 액세스 권한 이상이 있는지 확인합니다. 자세한 내용은 “[리포지토리에 액세스할 수 있는 팀 및 사용자 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)”를 참조하세요.
- 조직에 IP 주소 허용 목록이 사용하도록 설정되어 있지 않은지 확인합니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 문서의 “[조직의 허용되는 IP 주소 관리](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %}”를 참조하세요.{% else %}."{% endif %}

조직에 요금이 청구되는 codespace를 만들 수 있도록 하려면 다음을 수행해야 합니다.

- [지출 한도 설정](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [조직에 비용이 청구되는 codespace를 만들 수 있는 사용자 선택](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %} {% note %}

**참고:** 확인된 교육자 또는 교사인 경우 {% data variables.product.prodname_classroom %}에서 {% data variables.product.prodname_github_codespaces %}를 사용하도록 설정하여 {% data variables.product.prodname_codespaces %} Education 혜택을 사용해야 합니다. 자세한 내용은 "[{% data variables.product.prodname_classroom %}에서 {% data variables.product.prodname_github_codespaces %} 사용](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)"을 참조하세요.

{% endnote %} {% endif %}

기본적으로 codespace는 codespace가 생성된 리포지토리에만 액세스할 수 있습니다. 조직 내 codespace가 codespace 작성자가 액세스할 수 있는 다른 조직 리포지토리에 액세스할 수 있게 하고 싶다면 “[조직의 codespace에 대한 액세스 및 보안 관리](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)”를 참조하세요.

## 조직에 비용이 청구되는 codespace를 만들 수 있는 사용자 선택

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. “청구”에서 다음 옵션 중 하나를 선택합니다.

   * **사용 안함** - 조직에 codespace 사용에 대한 요금이 청구되지 않습니다. 조직의 리포지토리에 대해 만든 {% data variables.product.prodname_codespaces %}는 해당 codespace를 만든 개별 사용자에게 요금이 청구됩니다.
   * **선택한 구성원** - 선택한 구성원이 조직의 리포지토리에 대해 만든 {% data variables.product.prodname_codespaces %}에 대한 요금이 조직에 청구됩니다.
   * **모든 구성원** - 조직의 구성원이 조직의 리포지토리에 대해 만든 {% data variables.product.prodname_codespaces %}에 대한 요금이 조직에 청구됩니다.
   * **모든 구성원 및 외부 협력자** - 조직의 구성원 및 외부 협력자가 조직의 리포지토리에 대해 만든 {% data variables.product.prodname_codespaces %}에 대한 요금이 조직에 청구됩니다.

   ![“청구”를 위한 라디오 단추](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   **참고:** **모든 구성원 및 외부 협력자** 를 선택하면 특정 리포지토리에 추가된 모든 외부 협력자가 해당 리포지토리에 대해 {% data variables.product.prodname_codespaces %}를 만들고 사용할 수 있고 이러한 사용에 대한 요금이 조직에 청구됩니다. 외부 협력자 관리에 대한 자세한 내용은 "[외부 협력자 정보](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)"를 참조하세요.

   {% endnote %}

1. **저장** 을 클릭합니다.
1. **선택한 구성원** 을 선택한 경우 선택하려는 사용자의 이름을 입력할 수 있는 입력란이 표시됩니다.

   ![사용자를 선택하기 위한 입력란](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## 조직에 대해 {% data variables.product.prodname_codespaces %}를 사용하지 않도록 설정

조직에 청구할 수 있는 codespace 만들기 및 사용을 방지할 수 있습니다.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. “청구” 아래에서 **사용 안 함** 을 선택합니다.

## 지출 한도 설정

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

계정의 지출 한도를 관리하고 변경하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_codespaces %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”를 참조하세요.

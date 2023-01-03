---
title: GitHub 앱에 허용되는 IP 주소의 관리
intro: '{% data variables.product.prodname_github_app %}에 IP 허용 목록을 추가하여 조직의 자체 허용 목록에 의해 앱이 차단되지 않도록 방지할 수 있습니다.'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage allowed IP addresses
ms.openlocfilehash: 2206f42dbf5ead57cd12d7c3c52c71def5b9f54f
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: '145117255'
---
## <a name="about-ip-address-allow-lists-for--data-variablesproductprodname_github_apps-"></a>{% data variables.product.prodname_github_apps %}의 IP 주소 허용 목록 정보

기업 및 조직 소유자는 IP 주소 허용 목록을 구성하여 자산에 대한 액세스를 제한할 수 있습니다. 이 목록은 연결할 수 있는 IP 주소를 지정합니다. 자세한 내용은 “[엔터프라이즈에서 보안 설정에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)”을 참조하세요.

조직에 허용 목록이 있는 경우 {% data variables.product.prodname_github_app %}을 통해 연결하는 타사 애플리케이션은 다음 두 가지가 모두 충족되지 않는 한 액세스가 거부됩니다.

* {% data variables.product.prodname_github_app %}의 작성자는 애플리케이션이 실행되는 IP 주소를 지정하는 애플리케이션의 허용 목록을 구성했습니다. 이 작업을 수행하는 방법에 대한 자세한 내용은 아래를 참조하세요.
* 조직 소유자가 {% data variables.product.prodname_github_app %}의 허용 목록에 있는 주소가 자신의 허용 목록에 추가되는 것을 허용했습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 문서의 “[조직의 허용되는 IP 주소 관리](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}”를 참조하세요.{% else %}."{% endif %}

{% data reusables.apps.ip-allow-list-only-apps %}

## <a name="adding-an-ip-address-allow-list-to-a--data-variablesproductprodname_github_app-"></a>{% data variables.product.prodname_github_app %}에 IP 주소 허용 목록 추가

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
1. “IP 허용 목록” 섹션까지 아래로 스크롤합니다.
![GitHub 앱의 기본 정보 섹션](/assets/images/github-apps/github-apps-allow-list-empty.png) {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} 설명은 참조용이며 {% data variables.product.prodname_github_app %}이 설치된 조직의 허용 목록에 사용되지 않습니다. 대신 조직 허용 목록에는 설명으로 “NAME GitHub 앱에서 관리”가 포함됩니다.
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

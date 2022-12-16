---
title: 엔터프라이즈에 대해 종속성 그래프 사용
intro: 종속성 그래프를 사용하도록 설정하여 사용자가 프로젝트의 종속성을 식별하도록 허용할 수 있습니다.
shortTitle: Enable dependency graph
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: 39fb5e8eb74518dc4614d5494ec04427b5e12399
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135681'
---
## 종속성 그래프 정보

{% data reusables.dependabot.about-the-dependency-graph %} 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”를 참조하세요.

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

엔터프라이즈에 대한 종속성 그래프를 사용하도록 설정한 후 {% data variables.product.prodname_dependabot %}를 사용하도록 설정하여 리포지토리{% ifversion ghes %}에서 안전하지 않은 종속성을 검색하고 취약성{% endif %}을(를) 자동으로 수정할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_dependabot %} 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요.

{% ifversion ghes %} {% data variables.enterprise.management_console %} 또는 관리 셸을 통해 종속성 그래프를 사용하도록 설정할 수 있습니다. {% data variables.location.product_location %}에서 클러스터링을 사용하지 않는 한 {% data variables.enterprise.management_console %}을(를) 사용하는 것이 좋습니다.

## {% data variables.enterprise.management_console %}을 통해 종속성 그래프 사용

{% data variables.location.product_location %}에서 클러스터링을 사용하는 경우 {% data variables.enterprise.management_console %}에서 종속성 그래프를 사용하도록 설정할 수 없으며 대신 관리 셸을 사용해야 합니다. 자세한 내용은 “[관리 셸을 통해 종속성 그래프 사용](#enabling-the-dependency-graph-via-the-administrative-shell)”을 참조하세요.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. “보안”에서 **종속성 그래프** 를 클릭합니다.
![종속성 그래프를 사용하거나 사용하지 않도록 설정하는 확인란](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
1. **인스턴스 방문** 을 클릭합니다.

## 관리 셸을 통해 종속성 그래프 사용

{% endif %} {% data reusables.enterprise_site_admin_settings.sign-in %}
1. 관리 셸에서 {% data variables.location.product_location %}에서 종속성 그래프를 사용하도록 설정합니다. {% ifversion ghes %}'''shell ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Apply the configuration.
    ```shell
    $ ghe-config-apply
    ```
3. {% data variables.product.prodname_ghe_server %}로 돌아갑니다.

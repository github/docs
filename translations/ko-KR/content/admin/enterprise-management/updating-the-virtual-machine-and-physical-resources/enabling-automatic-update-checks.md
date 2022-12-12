---
title: 자동 업데이트 검사 사용
intro: '{% 데이터 variables.location.product_location %}이(가) 최신 {% 데이터 variables.product.prodname_ghe_server %} 릴리스를 확인하고 다운로드하도록 자동 업데이트 검사를 사용하도록 설정할 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/enabling-automatic-update-checks
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Enable automatic update checks
ms.openlocfilehash: 0c9ab4230458b4158629a6590b45fa85661e7fe9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098773'
---
{% 데이터 variables.location.product_location %}에 대한 업그레이드 패키지가 자동으로 다운로드되면 {% 데이터 variables.product.prodname_ghe_server %}을(를) 업그레이드할 수 있다는 메시지가 표시됩니다. 패키지는 {% 데이터 variables.location.product_location %}의 디렉터리에 다운로드 `/var/lib/ghe-updates` 됩니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 업그레이드](/enterprise/admin/guides/installation/upgrading-github-enterprise-server)”를 참조하세요.

업그레이드에 핫패치를 사용할 수 있는 경우 `.hpkg`가 자동으로 다운로드됩니다. 관리 콘솔에서 핫패치를 즉시 설치하거나 나중에 설치를 예약하도록 선택할 수 있습니다. 자세한 내용은 “[핫패치로 업그레이드](/enterprise/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch)”를 참조하세요.

{% tip %}

**팁:** 자동 업데이트 검사를 사용하도록 설정하려면 {% 데이터 variables.location.product_location %}에 연결할 `https://github-enterprise.s3.amazonaws.com`수 있어야 합니다.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. **예, 업데이트를 자동으로 확인** 을 클릭합니다.
![자동 업데이트를 사용하도록 설정하는 단추](/assets/images/enterprise/management-console/enable_updates_button.png) {% data reusables.enterprise_management_console.save-settings %}

인스턴스가 최신 상태인지 확인하려면 업데이트 탭에서 배너를 확인합니다.

![GitHub Enterprise Server 릴리스를 나타내는 배너](/assets/images/enterprise/management-console/up-to-date-banner.png)

**로그** 에서 최신 업데이트 확인의 상태를 볼 수 있습니다.

![업데이트에 대한 로그](/assets/images/enterprise/management-console/update-log.png)

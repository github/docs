---
title: 엔터프라이즈의 GitHub Mobile 관리
intro: '사용자가 {% 데이터 variables.product.prodname_mobile %}을(를) 사용하여 {% 데이터 variables.location.product_location %}에 연결할 수 있는지 여부를 결정할 수 있습니다.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Mobile
redirect_from:
  - /admin/configuration/configuring-your-enterprise/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
shortTitle: Manage GitHub Mobile
ms.openlocfilehash: 68488f8fdae8c750fc45267572b0c5c5f6aa2975
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098837'
---
## {% data variables.product.prodname_mobile %} 정보

{% 데이터 variables.product.prodname_mobile %}을(를) 사용하면 인증에 성공한 후 모바일 장치에서 {% 데이터 variables.location.product_location %}에 대한 작업을 심사, 공동 작업 및 관리할 수 있습니다. {% data reusables.mobile.about-mobile %} 자세한 내용은 “[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)”을 참조하세요.

{% 데이터 variables.product.prodname_mobile %}을(를) 사용하여 {% 데이터 variables.location.product_location %}에 인증하고 인스턴스의 데이터에 액세스하도록 허용하거나 허용하지 않을 수 있습니다. 기본적으로 {% 데이터 variables.product.prodname_mobile %}은(는) {% 데이터 variables.location.product_location %}을(를) 사용하는 사용자에 대해 {% ifversion ghes > 3.3 %}입니다. {% 데이터 variables.location.product_location %}을(를) 사용하는 사용자에 대해 {% else %}을(를) 사용할 수 없습니다. {% data variables.product.prodname_mobile %}을 사용하여 인스턴스에 연결할 수 있도록 하려면 인스턴스에서 해당 기능을 사용하도록 설정해야 합니다.{% endif %}

{% ifversion ghes < 3.6 %} {% note %}

**참고:** {% data variables.product.prodname_ghe_server %} 3.4.0 이상으로 업그레이드하고 이전에 {% data variables.product.prodname_mobile %}을 사용하지 않거나 사용하도록 설정한 적이 없는 경우 기본적으로 {% data variables.product.prodname_mobile %}을 사용할 수 있습니다. 이전에 인스턴스에서 {% data variables.product.prodname_mobile %}을 사용하지 않거나 사용하도록 설정한 경우 업그레이드 시 기본 설정이 유지됩니다. 인스턴스 업그레이드 방법에 대한 자세한 내용은 “[{% data variables.product.product_name %} 업그레이드](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)”를 참조하세요.

{% endnote %} {% endif %}

## {% data variables.product.prodname_mobile %} 사용 또는 사용 안 함

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}
1. 왼쪽 사이드바에서 **모바일** 을 클릭합니다.
  ![{% data variables.product.prodname_ghe_server %} 관리 콘솔 왼쪽 사이드바의 “모바일”](/assets/images/enterprise/management-console/click-mobile.png)
1. “GitHub Mobile”에서 **GitHub Mobile Apps 사용** 을 선택하거나 선택 취소합니다.
  ![{% data variables.product.prodname_ghe_server %} 관리 콘솔의 “GitHub Mobile Apps 사용” 확인란](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png) {% data reusables.enterprise_management_console.save-settings %}

---
title: 엔터프라이즈에 대한 GitHub 페이지 구성
intro: '엔터프라이즈에 대해 {% data variables.product.prodname_pages %}를 사용하거나 사용하지 않도록 설정하고{% ifversion ghes %} 사이트를 공개적으로 액세스할 수 있도록 할지를 선택할 수 있습니다{% endif %}.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-github-pages-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Pages
shortTitle: Configure GitHub Pages
ms.openlocfilehash: 27b8a16b5ffeea95cbbaa32cb6057c3e020c7064
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098838'
---
{% ifversion ghes %}

## {% data variables.product.prodname_pages %}에 대한 퍼블릭 사이트 사용 설정

엔터프라이즈에서 프라이빗 모드를 사용 설정한 경우 퍼블릭 사이트를 사용 설정하지 않으면 퍼블릭에서는 엔터프라이즈에서 호스트하는 {% data variables.product.prodname_pages %} 사이트에 액세스할 수 없습니다.

{% warning %}

**경고:** {% data variables.product.prodname_pages %}에 대해 퍼블릭 사이트를 사용 설정하면 엔터프라이즈의 모든 리포지토리에 있는 모든 사이트에 퍼블릭으로 액세스할 수 있습니다.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
4. **퍼블릭 페이지** 를 선택합니다.
  ![퍼블릭 페이지를 사용 설정하기 위한 확인란](/assets/images/enterprise/management-console/public-pages-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## 엔터프라이즈에 대해 {% data variables.product.prodname_pages %} 사용 안 함

엔터프라이즈에서 하위 도메인 격리를 사용하지 않도록 설정한 경우 잠재적인 보안 취약성으로부터 자신을 보호하기 위해서는 {% data variables.product.prodname_pages %}도 사용하지 않도록 설정해야 합니다. 자세한 내용은 “[하위 도메인 격리 사용](/admin/configuration/enabling-subdomain-isolation)”을 참조하세요.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. **페이지 사용 설정** 의 선택을 취소합니다.
  ![{% data variables.product.prodname_pages %}를 사용하지 않도록 설정하는 확인란](/assets/images/enterprise/management-console/pages-select-button.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.pages-tab %}
1. “페이지 정책”에서 **{% data variables.product.prodname_pages %} 사용 설정** 의 선택을 취소합니다.
  ![{% data variables.product.prodname_pages %}를 사용하지 않도록 설정하기 위한 확인란](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png) {% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes > 3.4 %}

## 엔터프라이즈에 대한 {% data variables.product.prodname_pages %} 응답 헤더 구성

{% 데이터 variables.location.product_location %}에서 호스트하는 {% 데이터 variables.product.prodname_pages %} 사이트에 대한 응답 헤더를 추가하거나 재정의할 수 있습니다.

{% warning %}

**경고:** 저장하기 전에 응답 헤더가 올바르게 구성되었는지 확인합니다. 부적절한 구성은 {% 데이터 variables.location.product_location %}의 보안에 부정적인 영향을 미칠 수 있습니다.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. 머리글 설정을 입력한 다음 **머리글 추가** 를 클릭합니다.
   - **Http 헤더 이름** 필드에 헤더 이름을 입력합니다. 헤더 이름의 길이는 128자 미만이어야 합니다.
   - **Http 헤더 값** 필드에 헤더 값을 입력합니다. 헤더 값의 길이는 300자 미만이어야 합니다.
![{% data variables.enterprise.management_console %}의 {% data variables.product.prodname_pages %} 응답 헤더 이름 및 값 필드](/assets/images/enterprise/management-console/pages-override-header-section.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}
## 추가 참고 자료

- “[프라이빗 모드 사용 설정](/admin/configuration/enabling-private-mode)” {% endif %}

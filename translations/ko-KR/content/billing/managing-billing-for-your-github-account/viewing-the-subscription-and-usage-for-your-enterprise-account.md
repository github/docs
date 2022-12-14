---
title: 엔터프라이즈 계정의 구독 및 사용량 보기
intro: '현재 {% ifversion ghec %}구독, {% endif %}라이선스 사용량{% ifversion ghec %}, 송장, 결제 기록 및 기타 청구 정보{% endif %}에 대한 {% ifversion ghec %}엔터프라이즈 계정{% elsif ghes %}{% 데이터 variables.location.product_location_enterprise %}{% endif %}을(를) 볼 수 있습니다.'
permissions: 'Enterprise owners {% ifversion ghec %}and billing managers {% endif %}can access and manage all billing settings for enterprise accounts.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: View subscription & usage
ms.openlocfilehash: dace22c79b20b960fb6fd3e828a738b4b1adc8e3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098646'
---
## 엔터프라이즈 계정에 대한 청구 정보

{% ifversion ghec %}구독 및 유료{% elsif ghes %}라이선스{% endif %} 사용량에 대한 {% ifversion ghec %}your{% elsif gh에 대한 개요를 볼 수 있습니다. {%ifversion ghec %}{% 데이터 variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% 데이터 variables.location.product_location %}{% endif %}에 있는 {% endif %} 엔터프라이즈 계정 {% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} 자세한 내용은 "[엔터프라이즈 계정 만들기"를 참조하세요](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account). {% endif %}

청구서가 청구된 {% ifversion ghes %}{% data variables.product.prodname_ghe_cloud %} 및 {% data variables.product.prodname_ghe_server %}을(를) 모두 사용하는 {% endif %}{% data variables.product.prodname_enterprise %} 고객의 경우 각 청구서에는 모든 제품의 청구된 서비스에 대한 세부 정보가 포함되어 있습니다. 예를 들어 {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}에 대한 사용량은 물론 {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %}, {% elsif ghes %}에 대한 사용량도 있을 수 있습니다. 또한 {% data variables.product.prodname_dotcom_the_website %}에 대한 사용량, 예를 들어 {% endif %}엔터프라이즈 계정 외부에 있는 조직 내 유료 라이선스, {% data variables.large_files.product_name_long %}에 대한 데이터 팩 또는 {% data variables.product.prodname_marketplace %}의 앱에 대한 구독도 있을 수 있습니다. 청구서에 대한 자세한 내용은 "[엔터프라이즈의 청구서 관리]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)"{% ifversion ghec %}를 참조하세요.{% elsif ghes %}({% data variables.product.prodname_dotcom_the_website %} 설명서)를 참조하세요.{% endif %}

{% ifversion ghec %}

엔터프라이즈 소유자뿐 아니라 청구 관리자도 엔터프라이즈 계정의 구독 및 사용량을 확인할 수 있습니다. 자세한 내용은 "[엔터프라이즈에서의 역할](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager)" 및 ["엔터프라이즈를 관리하도록 사용자 초대](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)"를 참조하세요.

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 자세한 내용은 “[엔터프라이즈에 Azure 구독 연결](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”을 참조하세요.

{% endif %}

{% ifversion ghes %}

{% data variables.product.prodname_enterprise %} 및 {% data variables.product.prodname_dotcom_the_website %}의 관련 서비스에 대한 구독 및 사용량 개요를 보려면 {% data variables.product.prodname_ghe_cloud %} 설명서에서 "[엔터프라이즈 계정의 구독 및 사용량 보기](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)"를 참조하세요.

{% endif %}

## 엔터프라이즈 계정의 구독 및 사용량 보기

엔터프라이즈의 구독과 사용량을 보고 라이선스 세부 정보가 포함된 파일을 다운로드할 수 있습니다.

{% data reusables.billing.license-statuses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. "사용자 라이선스"에서 총 라이선스, 사용한 라이선스 수 및 구독 만료 날짜를 확인합니다.
  {% ifversion ghec %}![엔터프라이즈 청구 설정의 라이선스 및 구독 정보](/assets/images/help/business-accounts/billing-license-info.png){% else %} ![엔터프라이즈 청구 설정의 라이선스 및 구독 정보](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. 필요한 경우 라이선스 사용량 관련 세부 정보를 확인하거나 라이선스 세부 정보가 포함된 {% ifversion ghec %}CSV{% elsif ghes %}JSON{% endif %} 파일을 확인하기 위해{% ifversion ghec %}, "사용자 라이선스" 오른쪽에 있는{% endif %} **{% ifversion ghec %}세부 정보{% elsif ghes %}사용자{% endif %} 보기** 또는 {% ifversion ghec %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}**라이선스 사용량 내보내기**{% endif %}를 클릭합니다.{% ifversion ghec %} !["세부 정보 보기" 단추와 "사용자 라이선스" 오른쪽에 있는 다운로드 아이콘이 있는 단추](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion ghec %}
1. 필요한 경우 왼쪽 사이드바에서 **청구** 를 클릭하여 다른 기능에 대한 사용량 세부 정보를 확인합니다.
  ![엔터프라이즈 계정 설정 사이드바의 청구 탭](/assets/images/help/business-accounts/settings-billing-tab.png) {% endif %}

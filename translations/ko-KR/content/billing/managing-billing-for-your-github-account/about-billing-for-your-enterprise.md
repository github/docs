---
title: 엔터프라이즈에 대한 청구 정보
intro: '{% data variables.product.prodname_dotcom_the_website %}{% endif %}에서 엔터프라이즈{% ifversion ghec or ghes %} 계정에 대한 청구 정보를 볼 수 있습니다.'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
shortTitle: Billing for your enterprise
ms.openlocfilehash: d6485ba4fe23d84088428e31773e546912c75f68
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098273'
---
## 엔터프라이즈에 대한 청구 정보

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} 하루에 한 번 {% data variables.product.prodname_dotcom %}는 엔터프라이즈의 라이선스가 있는 사용자 수를 계산합니다. {% data variables.product.company_short %}는 사용자가 해당 일에 {% data variables.product.prodname_ghe_managed %}에 로그인했는지 여부에 관계없이 라이선스가 있는 각 사용자에 대해 요금을 청구합니다.

상업 지역의 경우 사용자당 일일 가격은 1.2580645161달러입니다. 한 달이 31일인 달의 경우 각 사용자의 월별 비용은 39달러입니다. 한 달의 일수가 더 적은 경우 월별 비용도 더 낮습니다. 각 청구 월은 해당 월의 첫 번째 날에 고정된 시간에 시작됩니다.

사용이 허가된 사용자를 월 중간에 추가하는 경우 해당 사용자의 라이선스가 있는 일수만 포함됩니다. 라이선스가 있는 사용자를 제거하면 해당 사용자는 해당 월말까지 집계됩니다. 따라서 월 중간에 사용자를 추가하고 동일한 달의 이후에 사용자를 제거하면 사용자가 추가된 날부터 월말까지 집계에 포함됩니다. 사용자가 제거된 동일한 달에 사용자를 다시 추가하는 경우 추가 비용이 발생하지 않습니다.

예를 들어 다른 날짜에 라이선스가 있는 사용자의 비용은 다음과 같습니다.

사용자 | 라이선스 날짜 | 계산된 일 수 | 비용
---- | ------------ | ------- | -----
@octocat | 1월 1일~1월 31일 | 31 | 39달러
@robocat | 2월 1일~2월 28일 | 28 | $35.23
@devtocat  | 1월 15일~1월 31일 | 17 | $21.39
@doctocat | 1월 1일~1월 15일 | 31 | 39달러
@prodocat | 1월 7일~1월 15일 | 25 | $31.45
@monalisa | 1월 1일~1월 7일<br>1월 15일~1월 31일 | 31 | 39달러

{% data variables.product.prodname_ghe_managed %}의 인스턴스당 최소 사용자 수는 500명입니다. {% data variables.product.company_short %}는 해당일에 라이선스가 있는 사용자가 500명 미만이더라도 인스턴스당 최소 500명의 사용자에 대해 청구합니다.

[Azure 계정 포털](https://portal.azure.com)에서 현재 사용량을 확인할 수 있습니다.

{% elsif ghec or ghes %}

{% ifversion ghec %}

{% 데이터 variables.location.product_location %}에서 엔터프라이즈 계정을 사용하는 경우 엔터프라이즈 계정은 엔터프라이즈가 소유한 조직을 포함하여 엔터프라이즈 내의 모든 청구에 대한 핵심 지점입니다.

개별 조직으로 {% data variables.product.product_name %}를 사용하고 아직 엔터프라이즈 계정이 없는 경우 엔터프라이즈 계정을 만들고 조직을 추가합니다. 자세한 내용은 “[엔터프라이즈 계정 만들기](/admin/overview/creating-an-enterprise-account)”를 참조하세요.

{% data variables.product.company_short %}는 엔터프라이즈 계정에 대해 사용이 허가된 총 사용자 수뿐만 아니라 {% data variables.product.prodname_actions %} 분과 같이 {% data variables.product.prodname_ghe_cloud %}에서 사용하는 추가 서비스에 대해 매월 청구됩니다. {% data variables.product.product_name %}에서 독립 실행형 조직을 사용하는 경우 모든 사용량에 대해 조직 수준에서 요금이 청구됩니다. 청구서의 라이선스 사용자 수에 대한 자세한 내용은 “[사용자별 가격 책정 정보](/billing/managing-billing-for-your-github-account/about-per-user-pricing)”를 참조하세요.

{% elsif ghes %}

{% 데이터 variables.location.product_location %}의 각 사용자는 라이선스의 좌석을 사용합니다. {% data variables.product.company_short %}는 라이선스를 사용한 총 사용자 수에 대해 매월 청구됩니다.

{% endif %}

{% ifversion ghec %}엔터프라이즈 계정이 있는 {% data variables.product.prodname_ghe_cloud %} 고객의 경우, {% data variables.product.company_short %}는 {% data variables.product.prodname_dotcom_the_website %}의 계정을 통해 청구됩니다. 청구서가 청구되는 고객의 경우, 각{% elsif ghes %}청구서가 청구되는 {% data variables.product.prodname_enterprise %} 고객의 경우, {% data variables.product.company_short %}는 {% data variables.product.prodname_dotcom_the_website %}의 엔터프라이즈 계정을 통해 청구됩니다. 각{% endif %} 청구서에는 모든 유료 {% data variables.product.prodname_dotcom_the_website %} 서비스 및 모든 {% data variables.product.prodname_ghe_server %} 인스턴스에 대한 단일 청구 요금이 포함됩니다. {% ifversion ghes %}라이선스, 사용, 청구서{% elsif ghec %}사용량 및 청구서{% endif %}에 대한 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 문서에서 다음{% ifversion ghes %}을 참조하세요.{% else %}.{% endif %}

{%- ifversion ghes %}
- “[사용자당 가격 책정 정보](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)” {%- endif %}
- “[엔터프라이즈 계정의 구독 및 사용량 보기]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”
- “[엔터프라이즈에 대한 청구서 관리]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)”

{% data variables.product.prodname_dotcom_the_website %}의 엔터프라이즈 계정 관리자는 엔터프라이즈에 대한 청구에 액세스하고 관리할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 문서에서 “[기업의 역할]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){% ifversion ghec %}”{% elsif ghes %}를 참조하세요.{% endif %}

{% ifversion ghec %} {% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 자세한 내용은 “[엔터프라이즈에 Azure 구독 연결](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”을 참조하세요.
{% endif %}

{% ifversion ghes %} {% data reusables.billing.ghes-with-no-enterprise-account %} {% endif %}

{% endif %}
## 추가 참고 자료

- “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”

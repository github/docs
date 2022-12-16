---
title: GitHub Advanced Security 요금 청구 정보
intro: '프라이빗 또는 내부 리포지토리에서 {% data variables.product.prodname_GH_advanced_security %} 기능{% ifversion fpt or ghec %}을 사용하려면{% endif %} {% ifversion fpt %}엔터프라이즈{% endif %}에 대한 라이선스가 필요합니다.{% ifversion fpt or ghec %} 이러한 기능은 {% data variables.product.prodname_dotcom_the_website %}의 퍼블릭 리포지토리에 대해 무료로 사용할 수 있습니다.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
ms.openlocfilehash: bf93c4b5a6ea980012552af5eeab70a1ffcbdf16
ms.sourcegitcommit: 248e974c64f2439c6756a2c644ec77a98b8d3ecd
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/13/2022
ms.locfileid: '148045452'
---
## {% data variables.product.prodname_GH_advanced_security %} 요금 청구 정보

{% ifversion fpt %}

{% data variables.product.prodname_dotcom_the_website %}의 퍼블릭 리포지토리와 별도로 임의 리포지토리에서 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용하려는 경우 {% data variables.product.prodname_ghe_cloud %} 또는 {% data variables.product.prodname_ghe_server %}에서 사용할 수 있는 {% data variables.product.prodname_GH_advanced_security %} 라이선스가 필요합니다. 

{% 데이터 variables.product.prodname_GH_advanced_security %}에 대한 청구에 대한 자세한 내용은 [{% 데이터 variables.product.prodname_ghe_cloud %} 설명서를 참조하세요](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% elsif ghec %}

{% data variables.product.prodname_dotcom_the_website %}의 퍼블릭 리포지토리와 별도로 임의 리포지토리에서 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용하려는 경우 {% data variables.product.prodname_GH_advanced_security %} 라이선스가 필요합니다. {% data variables.product.prodname_GH_advanced_security %}에 대한 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 정보](/github/getting-started-with-github/about-github-advanced-security)”를 참조하세요.

{% elsif ghes %}

{% data variables.product.prodname_GH_advanced_security %} 라이선스를 구입하고 업로드하여 사용자에게 코드 보안을 위한 추가 기능을 제공할 수 있습니다. {% data variables.product.prodname_GH_advanced_security %}에 대한 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 정보](/github/getting-started-with-github/about-github-advanced-security)”를 참조하세요.

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

{% ifversion ghes %} 사이트 관리 대시보드에서 인스턴스의 활성 커밋자 수를 생성하여 {% 데이터 variables.product.prodname_GH_advanced_security %}에 필요한 라이선스 수를 확인할 수 있습니다. 자세한 내용은 "[사이트 관리자 대시보드](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-committers)"를 참조하세요.
{% endif %}

엔터프라이즈의 {% data variables.product.prodname_GH_advanced_security %} 라이선스에 대해 논의하려면 {% data variables.contact.contact_enterprise_sales %}에 문의하세요.

## {% data variables.product.prodname_GH_advanced_security %}의 커밋한 사람 수 정보

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

엔터프라이즈 계정이 소유한 조직의 {% data variables.product.prodname_advanced_security %} 사용을 허용하거나 허용하지 않도록 정책을 적용할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_advanced_security %}에 대한 정책 적용]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %}”({% data variables.product.prodname_ghe_cloud %} 설명서)을 참조하세요.{% else %}”을 참조하세요.{% endif %}

{% ifversion fpt or ghes or ghec %}

라이선스 사용량을 보는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 사용량 보기](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)”를 참조하세요.

{% endif %}

## 활성 커밋한 사람 사용량 이해

다음 예제 타임라인은 엔터프라이즈에서 {% data variables.product.prodname_GH_advanced_security %}의 활성 커밋한 사람 수가 시간 경과에 따라 어떻게 변경될 수 있는지를 보여 줍니다. 월별 이벤트가 커밋한 사람 수와 함께 표시됩니다.

| Date | 해당 월의 이벤트 | 총 커밋한 사람 수 | 
| :- | :- | -: | 
| <nobr>4월 15일</nobr> | 엔터프라이즈 멤버가 리포지토리 **X** 에서 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정합니다. 지난 90일 동안 리포지토리 **X** 에 대해 커밋한 사람은 50명입니다. | **50** | 
| <nobr>5월 1일</nobr> | 개발자 **A** 가 리포지토리 **X** 에서 작업하는 팀을 떠납니다. 개발자 **A** 의 기여는 90일 동안 계속 계산됩니다. | **50** | **50** |
| <nobr>8월 1일</nobr> | 90일이 지났기 때문에 개발자 **A** 의 기여가 필요한 라이선스 수에 더 이상 계산되지 않습니다. | <sub>_50 - 1_</sub></br>**49** | 
| <nobr>8월 15일</nobr> | 엔터프라이즈 멤버가 두 번째 리포지토리인 리포지토리 **Y** 에서 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정합니다. 지난 90일 동안 총 20명의 개발자가 해당 리포지토리에 기여했습니다. 20명의 개발자 중 10명은 최근에 리포지토리 **X** 에서도 작업했으며 추가 라이선스가 필요하지 않습니다. | <sub>_49 + 10_</sub><br/>**59** | 
| <nobr>8월 16일</nobr> | 엔터프라이즈 멤버가 리포지토리 **X** 에서 {% data variables.product.prodname_GH_advanced_security %}를 사용하지 않도록 설정합니다. 리포지토리 **X** 에서 작업한 49명의 개발자 중 10명은 지난 90일 동안 총 20명의 개발자가 기여한 리포지토리 **Y** 에서도 계속 작업합니다. | <sub>_49 - 29_</sub><br/>**20** |

{% note %}

**참고:** 커밋이 90일 이상 전에 작성된 경우에도 커밋이 리포지토리의 분기에 푸시될 때 사용자에 활성으로 플래그가 지정됩니다.

{% endnote %}

## {% data variables.product.prodname_GH_advanced_security %} 최대한 활용하기

{% data reusables.advanced-security.getting-the-most-from-your-license %}

{% endif %}

---
title: Codespaces 사용량 보기
shortTitle: Viewing your usage
intro: '{% data variables.product.prodname_codespaces %}에서 사용한 컴퓨팅 시간(분) 및 스토리지를 볼 수 있습니다.'
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Billing
ms.openlocfilehash: 025b93aca321b381989a55389ff93fac3cef02c2
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062036"
---
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-organization"></a>조직의 {% data variables.product.prodname_codespaces %} 사용량 보기

조직 소유자와 청구 관리자는 조직의 {% data variables.product.prodname_codespaces %} 사용량을 볼 수 있습니다. 엔터프라이즈 계정으로 관리되는 조직의 경우 조직 소유자는 조직 청구 페이지에서 {% data variables.product.prodname_codespaces %} 사용량을 볼 수 있고, 엔터프라이즈 관리자는 전체 엔터프라이즈의 사용량을 볼 수 있습니다.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.codespaces-minutes %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-enterprise-account"></a>엔터프라이즈 계정의 {% data variables.product.prodname_codespaces %} 사용량 보기

엔터프라이즈 소유자와 청구 관리자는 엔터프라이즈 계정의 {% data variables.product.prodname_codespaces %} 사용량을 볼 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. “{% data variables.product.prodname_codespaces %}”에서 엔터프라이즈 계정 내 각 조직의 사용량 세부 정보를 봅니다.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}

---
title: Codespaces 요금 청구 정보
shortTitle: About billing
intro: 가격 책정을 보고 조직의 {% data variables.product.prodname_codespaces %} 청구를 관리하는 방법을 알아보세요.
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Billing
ms.openlocfilehash: bb2b22ce9f34122656134076d4d1e5b49b86e3ce
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381077"
---
## <a name="-data-variablesproductprodname_codespaces--pricing"></a>{% data variables.product.prodname_codespaces %} 가격 책정

{% data variables.product.prodname_team %}과 {% data variables.product.prodname_enterprise %}의 모든 조직 및 엔터프라이즈 계정에 {% data variables.product.prodname_codespaces %} 사용량 요금이 청구되며, 무료 시간(분) 또는 스토리지는 포함되지 않습니다. 현재 개인 계정에는 {% data variables.product.prodname_codespaces %} 사용량 요금이 청구되지 않습니다. 

{% data variables.product.prodname_codespaces %} 사용량 요금은 다음 표의 측정 단위에 따라 청구됩니다.

| 제품             | SKU      | 측정 단위 | 가격 |
| ------------------- | -------- | --------------- | ----- |
| Codespaces Compute  |  2 코어  | 1시간          | $0.18 |
|                     |  4 코어  | 1시간          | $0.36 |
|                     |  8 코어  | 1시간          | $0.72 |
|                     |  16 코어 | 1시간          | $1.44 |
|                     |  32 코어 | 1시간          | $2.88 |
| Codespaces Storage  |  Storage | 1GB/월      | $0.07 |

## <a name="about-billing-for--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %} 요금 청구 정보

{% data reusables.codespaces.codespaces-billing %}

{% data variables.product.prodname_codespaces %} 사용량은 계정의 기존 청구 날짜, 결제 방법, 영수증을 공유합니다. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %} Microsoft 기업계약을 통해 {% data variables.product.prodname_enterprise %}를 구매한 경우 Azure 구독 ID를 엔터프라이즈 계정에 연결하여 {% data variables.product.prodname_codespaces %} 사용량을 가능하게 하고 비용을 지불할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 Azure 구독 연결](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”을 참조하세요.
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### <a name="billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>{% data variables.product.prodname_codespaces %} 사전 빌드 요금 청구


{% data reusables.codespaces.billing-for-prebuilds %} 

## <a name="setting-a-spending-limit"></a>지출 한도 설정

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

계정의 지출 한도를 관리하고 변경하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_codespaces %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”를 참조하세요.

{% data reusables.codespaces.exporting-changes %}

## <a name="limiting-the-choice-of-machine-types"></a>머신 유형 선택 제한

기본적으로 codespace를 만들 때 유효한 리소스가 가장 낮은 머신 유형이 사용됩니다. 그러나 사용자는 더 많은 리소스가 있는 머신 유형을 선택할 수 있습니다. codespace를 만들 때 이 작업을 수행하거나 기존 Visual Studio codespace의 머신 유형을 변경할 수 있습니다. 자세한 내용은 “[codespace 만들기](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)” 및 “[codespace의 머신 유형 변경](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)”을 참조하세요.

더 많은 리소스가 있는 머신 유형을 선택하는 경우 위와 같이 해당 codespace의 분당 요금에 영향을 줍니다. 

조직 소유자는 사용자가 사용할 수 있는 머신 유형을 제한하는 정책을 만들 수 있습니다. 자세한 내용은 “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”을 참조하세요.

## <a name="how-billing-is-handled-for-forked-repositories"></a>포크된 리포지토리에 대한 청구 처리 방법

{% data variables.product.prodname_codespaces %}는 청구 가능 소유자가 정의된 조직에서만 사용할 수 있습니다. 조직에 요금이 부과되려면 사용자가 멤버 또는 협력자여야 합니다. 그렇지 않으면 codespace를 만들 수 없습니다. 

예를 들어 프라이빗 조직의 사용자는 해당 조직 내에서 리포지토리를 포크할 수 있으며, 이후에 조직에 청구되는 codespace를 사용할 수 있습니다. 조직이 사용자 액세스, 포크된 리포지토리, codespace를 제거할 수 있는 부모 리포지토리의 소유자이기 때문입니다.
  
## <a name="how-billing-is-handled-when-a-repository-is-transferred"></a>리포지토리가 전송되는 경우 청구 처리 방법

매시간 사용량이 보고되고 요금이 청구됩니다. 따라서 리포지토리가 조직 내에 있는 경우 모든 사용량에 대한 비용을 지불합니다. 리포지토리가 조직 외부로 전송되면 해당 리포지토리의 codespace가 전송 프로세스의 일부로 모두 제거됩니다.

## <a name="what-happens-when-users-are-removed"></a>사용자가 제거될 때 발생하는 동작

사용자가 조직 또는 리포지토리에서 제거되면 해당 codespace가 자동으로 삭제됩니다. 

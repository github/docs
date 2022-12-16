---
title: 조직에서 Codespaces 요금 청구 관리
shortTitle: Manage billing
intro: '{% data variables.product.prodname_codespaces %} 사용량을 확인하고 사용 제한을 설정할 수 있습니다.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
ms.openlocfilehash: a5cc1d61c560c534dc2bdf5a543097e49b336478
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149726"
---
## <a name="overview"></a>개요

{% data variables.product.prodname_codespaces %}의 가격 책정에 대한 자세한 내용은 “[{% data variables.product.prodname_codespaces %} 가격 책정](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”을 참조하세요.

{% data reusables.codespaces.codespaces-billing %}

- 조직 소유자 또는 청구 관리자는 조직의 {% data variables.product.prodname_codespaces %} 청구를 관리할 수 [있습니다. “Codespaces에 대한 청구 정보”](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- 사용자를 위한 청구 방식을 설명하는 가이드가 있습니다. [“Codespaces에 대한 청구 이해”](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## <a name="usage-limits"></a>사용 제한

조직 또는 리포지토리의 codespace에 대한 사용 제한을 설정할 수 있습니다. 이 제한은 {% data variables.product.prodname_codespaces %}의 컴퓨팅 및 스토리지 사용량에 적용됩니다.
 
- **컴퓨팅 시간(분):** 컴퓨팅 사용량은 활성 상태인 동안 모든 {% data variables.product.prodname_codespaces %} 인스턴스에서 사용되는 실제 시간(분)으로 계산됩니다. 이러한 합계는 매일 청구 서비스에 보고되며 월별로 청구됩니다. 조직에서 {% data variables.product.prodname_codespaces %} 사용량에 대한 지출 한도를 설정할 수 있습니다. 자세한 내용은 “[Codespaces에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”를 참조하세요.

- **스토리지 사용량:** {% data variables.product.prodname_codespaces %} 청구 목적의 경우 여기에는 계정의 모든 codespace에서 사용하는 모든 스토리지가 포함됩니다. 여기에는 복제된 리포지토리, 구성 파일, 확장과 같은 코드스페이스에서 사용되는 모든 항목이 포함됩니다. 이러한 합계는 매일 청구 서비스에 보고되며 월별로 청구됩니다. 월말에 {% data variables.product.prodname_dotcom %}는 스토리지를 가장 가까운 MB로 올림합니다. {% data variables.product.prodname_codespaces %}에서 사용한 컴퓨팅 시간 및 스토리지 GB 수를 확인하려면 “[Codespaces 사용량 보기](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)”를 참조하세요.

## <a name="disabling-or-limiting--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %}를 사용하지 않도록 설정 또는 제한

조직 또는 리포지토리에서 {% data variables.product.prodname_codespaces %}를 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[조직의 codespace에 대한 리포지토리 액세스 관리](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)”를 참조하세요.

{% data variables.product.prodname_codespaces %}를 사용할 수 있는 개별 사용자를 제한할 수도 있습니다. 자세한 내용은 “[조직에 대한 사용자 권한 관리](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)”를 참조하세요.

조직 소유의 리포지토리에 사용할 수 있는 머신 유형의 선택을 제한할 수 있습니다. 이렇게 하면 사용자가 codespace에 지나치게 많은 리소스를 사용하는 머신을 사용할 수 없습니다. 자세한 내용은 “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”을 참조하세요.

## <a name="deleting-unused-codespaces"></a>사용되지 않는 codespace 삭제

사용자는 https://github.com/codespaces 및 {% data variables.product.prodname_vscode %} 내에서 codespace를 삭제할 수 있습니다. codespace의 크기를 줄이려면 사용자가 터미널을 사용하거나 {% data variables.product.prodname_vscode_shortname %} 내에서 파일을 수동으로 삭제할 수 있습니다. 

{% note %}

**참고:** 직접 만든 사용자만 codespace를 삭제할 수 있습니다. 현재 조직 소유자가 조직 내에서 생성된 codespace를 삭제할 수 있는 방법은 없습니다.

{% endnote %}

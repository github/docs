---
title: 조직에서 Github Codespaces 청구 관리
shortTitle: Manage billing
intro: '{% data variables.product.prodname_github_codespaces %} 사용량을 확인하고 사용 제한을 설정할 수 있습니다.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
ms.openlocfilehash: 6cd1396cd0933999a99c334f00416b43f31ae249
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147865187"
---
## 개요

{% data variables.product.prodname_github_codespaces %}의 가격 책정에 대한 자세한 내용은 “[{% data variables.product.prodname_codespaces %} 가격 책정](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”을 참조하세요.

{% data reusables.codespaces.codespaces-billing %}

- 조직 소유자 또는 청구 관리자는 조직의 {% data variables.product.prodname_codespaces %} 청구를 관리할 수 있습니다. [“Codespaces에 대한 청구 정보”](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)
- 조직 소유자는 조직의 현재 활성 및 중지된 codespace를 나열할 수 있습니다. 이러한 codespace 외에도, 이번 달의 비용에는 현재 달 초에 존재했지만 이후 삭제된 codespace에 대한 비용이 포함될 수 있습니다.
- 사용자를 위한 청구 방식을 설명하는 가이드가 있습니다. [“Codespaces에 대한 청구 이해”](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## 사용 제한

조직 또는 리포지토리의 codespace에 대한 사용 제한을 설정할 수 있습니다. 이 제한은 {% data variables.product.prodname_github_codespaces %}의 컴퓨팅 및 스토리지 사용량에 적용됩니다.
 
- **컴퓨팅 시간(분):** 컴퓨팅 사용량은 활성 상태인 동안 모든 {% data variables.product.prodname_codespaces %} 인스턴스에서 사용되는 실제 시간(분)으로 계산됩니다. 이러한 합계는 매일 청구 서비스에 보고되며 월별로 청구됩니다. 조직에서 {% data variables.product.prodname_codespaces %} 사용량에 대한 지출 한도를 설정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)”를 참조하세요.

- **스토리지 사용량:** {% data variables.product.prodname_codespaces %} 청구 목적의 경우 여기에는 계정의 모든 codespace에서 사용하는 모든 스토리지가 포함됩니다. 여기에는 복제된 리포지토리, 구성 파일, 확장과 같은 리소스가 포함됩니다. 이러한 합계는 매일 청구 서비스에 보고되며 월별로 청구됩니다. 월말에 {% data variables.product.prodname_dotcom %}는 스토리지를 가장 가까운 MB로 올림합니다. {% data variables.product.prodname_codespaces %}에서 사용한 컴퓨팅 시간(분) 및 스토리지 GB양을 확인하려면 “[{% data variables.product.prodname_github_codespaces %} 사용량 보기](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”를 참조하세요.

## {% data variables.product.prodname_codespaces %}를 사용하지 않도록 설정 또는 제한

조직에 청구되는 {% data variables.product.prodname_github_codespaces %}의 모든 사용을 사용하지 않도록 설정할 수 있습니다. 또는 조직의 비용으로 {% data variables.product.prodname_codespaces %}를 사용할 수 있는 조직 구성원 또는 협력자를 지정할 수 있습니다. 자세한 내용은 “[조직에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”을 참조하세요.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

특정 리포지토리에 대해 만든 codespace에서 액세스할 수 있는 리포지토리를 구성할 수 있습니다. 자세한 내용은 “[codespace 내의 다른 리포지토리에 대한 액세스 관리](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”를 참조하세요.

조직 소유의 리포지토리에서 만든 codespace에 사용할 수 있는 머신 유형의 선택을 제한할 수 있습니다. 이렇게 하면 사용자가 codespace에 지나치게 많은 리소스를 사용하는 머신을 사용할 수 없어 불필요한 비용이 발생하지 않습니다. 자세한 내용은 “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”을 참조하세요.

codespace가 자동으로 삭제되기 전에 사용하지 않는 상태로 유지할 수 있는 기간을 제한할 수도 있습니다. 이렇게 하면 {% data variables.product.prodname_codespaces %}에 대한 스토리지 비용을 줄일 수 있습니다. 자세한 내용은 “[Codespace의 보존 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”을 참조하세요.

## 사용되지 않는 codespace 삭제

사용자는 https://github.com/codespaces 및 {% data variables.product.prodname_vscode %} 내에서 본인의 codespace를 삭제할 수 있습니다. codespace의 크기를 줄이려면 사용자가 터미널을 사용하거나 {% data variables.product.prodname_vscode_shortname %} 내에서 파일을 수동으로 삭제할 수 있습니다. 

조직 소유자는 조직의 모든 codespace를 삭제할 수 있습니다. 자세한 내용은 “[codespace 삭제](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)”를 참조하세요.

{% note %}

**참고:** Codespaces는 중지된 채 정해진 일 수 동안 비활성 상태로 유지되면 자동으로 삭제됩니다. 자세한 내용은 “[Codespace의 보존 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”을 참조하세요. codespace는 codespace를 만든 사람만 수동으로 삭제할 수 있습니다.

{% endnote %}

## 추가 참고 자료

- “[조직의 codespace 나열](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)”

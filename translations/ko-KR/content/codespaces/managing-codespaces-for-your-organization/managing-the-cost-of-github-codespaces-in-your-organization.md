---
title: 조직에서 GitHub Codespaces 비용 관리
shortTitle: Manage Codespaces costs
intro: '{% data variables.product.prodname_github_codespaces %} 사용량을 확인하고 사용 제한을 설정할 수 있습니다.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization
ms.openlocfilehash: f11c6e22fa8a233fd4429b91390d25471ad17e6d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158711'
---
## 개요

조직에서 {% data variables.product.prodname_github_codespaces %}에 대한 컴퓨팅 및 스토리지 사용량에 따라 요금이 청구됩니다. 이 문서에서는 조직 소유자로서 이러한 비용을 관리할 수 있는 방법을 설명합니다.

{% data variables.product.prodname_github_codespaces %}에 대한 가격 책정에 대한 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 청구 정보"를 참조하세요](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing).

## 지출 한도

조직의 {% data variables.product.prodname_github_codespaces %}에 대한 지출 한도를 설정할 수 있습니다. 이 제한은 {% data variables.product.prodname_github_codespaces %}의 총 컴퓨팅 및 스토리지 비용에 적용됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)”를 참조하세요.
 
- **컴퓨팅 사용량:** 이는 모든 {% data variables.product.prodname_github_codespaces %} 인스턴스("codespaces")가 청구 월에 활성화된 총 시간입니다. 

- **스토리지 사용량:** {% data variables.product.prodname_github_codespaces %} 청구를 위해 여기에는 계정의 모든 codespace 및 사전 빌드에서 사용하는 모든 파일이 포함됩니다. 여기에는 복제된 리포지토리, 구성 파일, 확장과 같은 리소스가 포함됩니다. 

현재 청구 월의 {% data variables.product.prodname_github_codespaces %}에 대한 컴퓨팅 및 스토리지 사용량을 확인할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %} 사용량 보기"를 참조하세요](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage).

{% note %}

**참고**: {% data variables.product.prodname_github_codespaces %}에 대한 사전 빌드는 {% data variables.product.prodname_actions %}를 사용하여 만들어지고 업데이트됩니다. 이렇게 하면 {% data variables.product.prodname_actions %}에 대한 청구 비용이 발생할 수 있습니다. {% data variables.product.prodname_actions %}에 대한 지출 한도를 설정할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 청구](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds) 정보" 및 "[{% data variables.product.prodname_actions %}에 대한 지출 한도 관리"를 참조하세요](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions). 생성된 사전 빌드의 스토리지는 codespaces와 동일한 비율로 청구되며 {% data variables.product.prodname_github_codespaces %} 지출 한도에 포함됩니다.

{% endnote %}

## {% data variables.product.prodname_codespaces %}를 사용하지 않도록 설정 또는 제한

조직에 청구되는 {% data variables.product.prodname_github_codespaces %}의 모든 사용을 사용하지 않도록 설정할 수 있습니다. 또는 조직의 비용으로 {% data variables.product.prodname_codespaces %}를 사용할 수 있는 조직 구성원 또는 협력자를 지정할 수 있습니다. 자세한 내용은 “[조직에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”을 참조하세요.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

특정 리포지토리에 대해 만든 codespace에서 액세스할 수 있는 리포지토리를 구성할 수 있습니다. 자세한 내용은 “[codespace 내의 다른 리포지토리에 대한 액세스 관리](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”를 참조하세요.

조직 소유의 리포지토리에서 만든 codespace에 사용할 수 있는 머신 유형의 선택을 제한할 수 있습니다. 이렇게 하면 사용자가 codespace에 지나치게 많은 리소스를 사용하는 머신을 사용할 수 없어 불필요한 비용이 발생하지 않습니다. 자세한 내용은 “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”을 참조하세요.

최대 유휴 시간 제한 제약 조건을 설정하여 조직에 청구할 수 있는 codespace에 대해 사용자가 설정할 수 있는 최대 시간 제한을 제한할 수 있습니다. 이렇게 하면 제한 시간이 짧은 후 활성 codespace를 중지하여 유휴 상태로 실행 중인 codespace에서 생성된 컴퓨팅 사용 요금을 줄일 수 있습니다. 자세한 내용은 "[유휴 시간 제한 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"을 참조하세요.

중지된 codespace가 자동으로 삭제되기 전에 사용하지 않고 유지할 수 있는 기간을 제한할 수도 있습니다. 이렇게 하면 {% data variables.product.prodname_codespaces %}에 대한 스토리지 비용을 줄일 수 있습니다. 자세한 내용은 “[Codespace의 보존 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”을 참조하세요.

리포지토리에 대한 사전 빌드를 설정한 리포지토리 소유자는 선택한 지역에서만 만들도록 구성하여 사전 빌드의 스토리지 비용을 줄일 수 있습니다. 자세한 내용은 “[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”을 참조하세요.

## 사용되지 않는 codespace 삭제

사용자는 https://github.com/codespaces 및 {% data variables.product.prodname_vscode %} 내에서 본인의 codespace를 삭제할 수 있습니다. codespace의 크기를 줄이려면 사용자가 터미널을 사용하거나 {% data variables.product.prodname_vscode_shortname %} 내에서 파일을 수동으로 삭제할 수 있습니다. 

조직 소유자는 조직의 모든 codespace를 삭제할 수 있습니다. 자세한 내용은 “[codespace 삭제](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)”를 참조하세요.

{% note %}

**참고:** Codespace는 중지되고 사용자가 정의할 수 있는 일 수 동안 비활성 상태로 유지된 후 자동으로 삭제됩니다. 자세한 내용은 “[내 Codespace의 자동 삭제 구성](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”을 참조하세요. 조직 소유자는 조직 소유의 codespace에 대한 최대 보존 기간을 설정할 수 있습니다. 이렇게 하면 사용자의 개인 보존 설정이 재정의됩니다. 자세한 내용은 “[Codespace의 보존 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”을 참조하세요.

{% endnote %}

## 추가 참고 자료

- “[조직의 codespace 나열](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)”

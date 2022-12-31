---
title: '사용 제한, 청구, 관리'
intro: '{% data variables.product.prodname_actions %} 워크플로에 대한 사용 제한이 있습니다. 사용 요금은 리포지토리의 사용 가능한 시간(분)과 스토리지를 초과하는 리포지토리에 적용됩니다.'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
ms.openlocfilehash: 5abd041d41ab2227aa87c383f39c94876544718c
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191856'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_actions %} 요금 청구 정보

{% data reusables.repositories.about-github-actions %} 자세한 내용은 “[{% data variables.product.prodname_actions %} 이해](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}”를 참조하세요.{% elsif ghes or ghec %}” 및 “[엔터프라이즈용 {% data variables.product.prodname_actions %} 정보](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)”를 참조하세요.{% endif %}

{% ifversion fpt or ghec %} {% data reusables.actions.actions-billing %} 자세한 내용은 “[{% data variables.product.prodname_actions %} 요금 청구 정보](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”를 참조하세요.
{% else %} 자체 호스팅 실행기를 사용하는 {% data variables.product.prodname_ghe_server %} 인스턴스에서는 GitHub Actions 사용이 무료입니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.
{% endif %}


{% ifversion fpt or ghec %}

## 가용성

{% data variables.product.prodname_actions %}는 모든 {% data variables.product.prodname_dotcom %} 제품에서 사용할 수 있지만, 레거시 리포지토리별 플랜을 사용하는 계정이 소유한 프라이빗 리포지토리에는 {% data variables.product.prodname_actions %}를 사용할 수 없습니다. {% data reusables.gated-features.more-info %}

{% endif %}

## 사용 제한

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} 호스팅 실행기를 사용하는 경우 {% data variables.product.prodname_actions %} 사용에 대한 몇 가지 제한이 있습니다. 제한은 변경될 수 있습니다.

{% note %}

**참고:** 자체 호스팅 실행기의 경우 다른 사용 제한이 적용됩니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”를 참조하세요.

{% endnote %}

- **작업 실행 시간** - 워크플로의 각 작업은 최대 6시간의 실행 시간 동안 실행될 수 있습니다. 작업이 이 한도에 도달할 경우 작업이 종료되고 완료되지 않습니다.
{% data reusables.actions.usage-workflow-run-time %} {% data reusables.actions.usage-api-requests %}
- **동시 작업** - 계정에서 실행할 수 있는 동시 작업 수는 사용된 실행기 유형뿐만 아니라 GitHub 플랜에 따라 달라집니다. 초과할 경우 추가 작업은 큐에 대기됩니다.

  **표준 {% 데이터 variables.product.prodname_dotcom %}호스팅 실행기**

  | GitHub 플랜 | 총 동시 작업 수 | 최대 동시 macOS 작업 수 |
  |---|---|---|
  | 무료 | 20 | 5 |
  | Pro | 40 | 5 |
  | 팀 | 60 | 5 |
  | Enterprise | 180 | 50 |

  **{% data variables.product.prodname_dotcom %}호스팅 {% data variables.actions.hosted_runner %}s**

  | GitHub 플랜 | 총 동시 작업 수 | 최대 동시 macOS 작업 수 |
  |---|---|---|
  | 모두 | 500 | 해당 없음 |

  {% note %}

  **참고:** 필요한 경우 엔터프라이즈 플랜의 고객은 동시 작업에 대해 더 높은 제한을 요청할 수 있습니다. 자세한 내용은 {% data variables.contact.contact_ent_support %} 또는 영업 담당자에게 문의하세요.

  {% endnote %}
  
- **작업 매트릭스** - {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

{% else %} 자체 호스팅 실행기에 사용 제한이 적용됩니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”를 참조하세요.
{% endif %}

{% ifversion fpt or ghec %}
## 사용 정책

사용 제한 외에도 [GitHub 서비스 약관](/free-pro-team@latest/github/site-policy/github-terms-of-service/) 내에서 {% data variables.product.prodname_actions %}를 사용해야 합니다. {% data variables.product.prodname_actions %} 관련 사용 약관에 대한 자세한 내용은 [GitHub 추가 제품 사용 약관](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage)을 참조하세요.
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## 재사용 가능한 워크플로 요금 청구

{% data reusables.actions.reusable-workflows-enterprise-beta %}

워크플로를 재사용하는 경우 청구는 항상 호출자 워크플로와 연결됩니다. {% data variables.product.prodname_dotcom %} 호스팅 실행기 할당은 항상 호출자 컨텍스트만 사용하여 평가됩니다. 호출자는 호출된 리포지토리에서 {% data variables.product.prodname_dotcom %} 호스팅 실행기를 사용할 수 없습니다. 

자세한 내용은 “[워크플로 재사용](/actions/learn-github-actions/reusing-workflows)”을 참조하세요.
{% endif %}

## 아티팩트 및 로그 보존 정책

리포지토리, 조직 또는 엔터프라이즈 계정의 아티팩트 및 로그 보존 기간을 구성할 수 있습니다.

{% data reusables.actions.about-artifact-log-retention %}

자세한 내용은 다음을 참조하세요.

- “[리포지토리의 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”
- “[조직의 아티팩트 및 로그에 대한 {% data variables.product.prodname_actions %}의 보존 기간 구성](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)”
- “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”

## 리포지토리 또는 조직에 대해 {% data variables.product.prodname_actions %} 사용 안 함 또는 제한

{% data reusables.actions.disabling-github-actions %}

자세한 내용은 다음을 참조하세요.
- “[리포지토리의 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)”
- “[조직에 대해 {% data variables.product.prodname_actions %} 사용 안 함 또는 제한](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)”
- “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”

## 워크플로 사용 안 함 및 사용

{% data variables.product.prodname_dotcom %}에서 리포지토리의 개별 워크플로를 사용하거나 사용하지 않도록 설정할 수 있습니다.

{% data reusables.actions.scheduled-workflows-disabled %}

자세한 내용은 “[워크플로 사용 안 함 및 사용](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)”을 참조하세요.

---
title: 어플라이언스 종속성 검토 구성
shortTitle: Configuring dependency review
intro: '끌어오기 요청을 검토할 때 사용자가 종속성 변경을 이해하는 데 도움이 되도록 {% data variables.location.product_location %}에 대한 종속성 검토를 사용하도록 설정, 구성 및 사용하지 않도록 설정할 수 있습니다.'
product: '{% data reusables.gated-features.dependency-review %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: dependency-review-action-ghes
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Dependency review
  - Security
ms.openlocfilehash: 613f2f2bd69a90027533ff063ea0f0a44bc1f5d2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107759'
---
## 종속성 검토 정보

{% data reusables.dependency-review.feature-overview %}  

라이선스 검사, 끌어오기 요청 차단, CI/CD 통합과 같은 일부 추가 기능은 [종속성 검토 작업](https://github.com/actions/dependency-review-action)과 함께 사용할 수 있습니다.

## 라이선스에 {% data variables.product.prodname_GH_advanced_security %}가 포함되어 있는지 확인

{% data reusables.advanced-security.check-for-ghas-license %}

## 종속성 검토를 위한 필수 구성 요소

- {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %}에 대한 라이선스(“[{% data variables.product.prodname_GH_advanced_security %}에 대한 청구 정보](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)” 참조){% endif %}

- 인스턴스에 대해 활성화된 종속성 그래프입니다. 사이트 관리자는 관리 콘솔 또는 관리 셸을 통해 종속성 그래프를 사용하도록 설정할 수 있습니다(“[엔터프라이즈에 대한 종속성 그래프 사용](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)” 참조).
  
- {% data variables.product.prodname_advisory_database %}에서 취약성을 다운로드하고 동기화하기 위해 {% data variables.product.prodname_github_connect %}가 활성화되었습니다. 이는 일반적으로 {% data variables.product.prodname_dependabot %} 설정의 일부로 구성됩니다(“[엔터프라이즈에 Dependabot 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)” 참조).

## 종속성 검토 활성화 및 비활성화

종속성 검토를 활성화 또는 비활성화하려면 인스턴스에 대한 종속성 그래프를 활성화 또는 비활성화해야 합니다.

자세한 내용은 “[엔터프라이즈에 대해 종속성 그래프 사용](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)”을 참조하세요.

## {% data variables.product.prodname_actions %}으로 종속성 검토 실행

{% data reusables.dependency-review.dependency-review-action-beta-note %}

종속성 검토 작업은 {% data variables.product.prodname_ghe_server %} 설치에 포함되어 있습니다. {% data variables.product.prodname_GH_advanced_security %} 및 종속성 그래프가 활성화된 모든 리포지토리에 사용할 수 있습니다.

{% data reusables.dependency-review.dependency-review-action-overview %}  

사용자는 {% data variables.product.prodname_actions %} 워크플로를 사용하여 종속성 검토 작업을 실행합니다. {% data variables.product.prodname_actions %}에 대한 실행기를 아직 설정하지 않은 경우 사용자가 워크플로를 실행할 수 있도록 하려면 이 작업을 수행해야 합니다. 리포지토리, 조직 또는 엔터프라이즈 계정 수준에서 자체 호스트 실행기를 프로비저닝할 수 있습니다. 자세한 내용은 “[자체 호스트된 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”와 “[자체 호스트된 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)”를 참조하세요.


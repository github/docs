---
title: GitHub Enterprise Cloud용 GitHub Actions 시작
shortTitle: Get started
intro: '{% data variables.product.prodname_ghe_cloud %}에서 {% data variables.product.prodname_actions %}를 구성하는 방법을 알아봅니다.'
permissions: 'Enterprise owners can configure {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 088fc1fcce3b44c6db350f744ad13668d04a4bb8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120439'
---
## {% data variables.product.prodname_ghe_cloud %}의 {% data variables.product.prodname_actions %} 정보

{% data variables.product.prodname_actions %}는 엔터프라이즈에서 기본적으로 사용하도록 설정되어 있습니다. 엔터프라이즈 내에서 {% data variables.product.prodname_actions %} 사용을 시작하려면 엔터프라이즈 구성원이 {% data variables.product.prodname_actions %}를 사용하는 방법을 제어하는 정책을 관리하고 필요에 따라 자체 호스트된 실행기를 추가하여 워크플로를 실행할 수 있습니다.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## {% data variables.product.prodname_actions %}에 대한 정책 관리

정책을 사용하여 엔터프라이즈 구성원이 {% data variables.product.prodname_actions %}를 사용하는 방법을 제어할 수 있습니다. 예를 들어 허용되는 작업을 제한하고 아티팩트 및 로그 보존을 구성할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 GitHub Actions 정책 적용](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)”을 참조하세요.

## 실행기 추가

{% data variables.product.prodname_actions %} 워크플로를 실행하려면 실행기를 사용해야 합니다. {% data reusables.actions.about-runners %} {% data variables.product.company_short %} 호스트된 실행기를 사용하는 경우 {% data variables.product.product_name %}에 포함된 분을 모두 소모한 후 소비량에 따라 요금이 청구되며 자체 호스트된 실행기는 무료입니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 청구 정보](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”를 참조하세요.

자세한 내용은 “[자체 호스트된 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.

자체 호스트된 실행기를 선택하는 경우 엔터프라이즈, 조직 또는 리포지토리 수준에서 실행기를 추가할 수 있습니다. 자세한 내용은 “[자체 호스트된 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)”를 참조하세요.

{% data reusables.actions.general-security-hardening %}

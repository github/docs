---
title: GitHub AE용 GitHub Actions 시작
shortTitle: Get started
intro: '{% data variables.product.prodname_ghe_managed %}에서 {% data variables.product.prodname_actions %}를 구성하는 방법을 알아봅니다.'
permissions: 'Enterprise owners can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
ms.openlocfilehash: c6d6767e95e6f5d27c311e46f5042c79717ab97e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116703'
---
## {% data variables.product.prodname_ghe_managed %}의 {% data variables.product.prodname_actions %} 정보

{% data variables.product.prodname_actions %}는 기본적으로 {% data variables.product.product_name %}에 대해 사용하도록 설정되어 있습니다. 엔터프라이즈 내에서 {% data variables.product.prodname_actions %} 사용을 시작하려면 {% data variables.product.prodname_actions %}에 대한 액세스 권한을 관리하고 실행기를 추가하여 워크플로를 실행해야 합니다.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## 엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 액세스 권한 관리

정책을 사용하여 {% data variables.product.prodname_actions %}에 대한 액세스를 관리할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 GitHub Actions 정책 적용](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)”을 참조하세요.

## 실행기 추가

{% data variables.product.product_name %}에서 엔터프라이즈에 대한 작업을 실행하도록 사용자 고유의 컴퓨터를 구성하고 호스트해야 합니다. {% data reusables.actions.about-self-hosted-runners %} 자세한 내용은 “[엔터프라이즈용 자체 호스트된 실행기 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)” 및 “[자체 실행기 호스트](/actions/hosting-your-own-runners)”를 참조하세요.

{% data reusables.actions.general-security-hardening %}

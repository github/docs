---
title: 엔터프라이즈용 GitHub Actions 정보
shortTitle: About GitHub Actions
intro: '{% data variables.product.prodname_actions %}는 기업의 소프트웨어 개발 주기를 자동화하여 개발자 생산성을 향상시킬 수 있습니다.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 682e5c4bc4b17105df59c4e5474bf46ec11fe211
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160746'
---
## 엔터프라이즈용 {% data variables.product.prodname_actions %} 정보

{% data reusables.actions.about-actions-for-enterprises %}

| 작업 | 자세한 정보 |
| ---- | ---------------- |
| 애플리케이션 자동 테스트 및 빌드 | “[연속 통합 정보](/actions/automating-builds-and-tests/about-continuous-integration)” | 
| 애플리케이션 배포 | “[지속적인 배포 정보](/actions/deployment/about-deployments/about-continuous-deployment)” |
| 안전하게 아티팩트 및 컨테이너에 코드를 자동으로 패키징 | “[{% data variables.product.prodname_actions %}를 사용한 패키징 정보](/actions/publishing-packages/about-packaging-with-github-actions)” |
| 프로젝트 관리 작업 자동화 | “[프로젝트 관리에 {% data variables.product.prodname_actions %} 사용](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management)” |

{% data variables.product.prodname_actions %}는 팀이 대규모로 더 빠르게 작업할 수 있도록 도와줍니다. 대규모 리포지토리가 {% data variables.product.prodname_actions %}를 사용하기 시작하면 팀은 하루에 훨씬 더 많은 끌어오기 요청을 병합하게 되며 끌어오기 요청이 훨씬 더 빠르게 병합됩니다. 자세한 내용은 State of the Octoverse에서 “[더 빠르게 코드 작성 및 전달](https://octoverse.github.com/2021/writing-code-faster/#scale-through-automation)”을 참조하세요.

고유한 자동화를 만들거나 업계 리더들과 오픈 소스 커뮤니티에 의해 빌드된 10,000개 이상의 작업 에코시스템에서 워크플로를 사용하고 조정할 수 있습니다. {% ifversion ghec %} 자세한 내용은 "[작업 찾기 및 사용자 지정"을 참조하세요](/actions/learn-github-actions/finding-and-customizing-actions). {% else %} 개발자가 {% data variables.location.product_location %}에 있는 작업을 사용하도록 제한하거나 개발자가 {% data variables.product.prodname_dotcom_the_website %}의 작업에 액세스하도록 허용할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 작업 사용 정보](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)”를 참조하세요.{% endif %}

{% data variables.product.prodname_actions %}는 친숙한 {% data variables.product.product_name %} 환경에 직접 통합되므로 개발자 친화적입니다.

{% ifversion ghec %}{% data variables.product.company_short %}에 의해 유지 관리 및 업그레이드되는 {% data variables.product.company_short %} 호스트된 실행기의 편리성을 즐기거나, 자체 호스트된 실행기를 사용하여 자신{% else %}자신{% endif %}의 프라이빗 CI/CD 인프라를 제어할 수 있습니다. 자체 호스트된 실행기를 사용하면 소프트웨어 개발 주기를 인터넷에 노출하지 않고도 빌드, 테스트 및 배포를 완료하는 정확한 환경과 리소스를 확인할 수 있습니다. 자세한 내용은 {% ifversion ghec %}“[{% data variables.product.company_short %} 호스트된 실행기](/actions/using-github-hosted-runners/about-github-hosted-runners)” 및{% endif %} “[자체 호스트된 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.

{% data variables.product.prodname_actions %}는 배포를 보다 잘 제어할 수 있는 기능을 제공합니다. 예를 들어 환경을 사용하여 작업을 진행하도록 승인하거나, 워크플로를 트리거할 수 있는 분기를 제한하거나, 비밀에 대한 액세스를 제한할 수 있습니다. {% ifversion ghec or ghes > 3.4 %} 워크플로가 OIDC(OpenID Connect)를 지원하는 클라우드 공급자의 리소스에 액세스해야 하는 경우 클라우드 공급자에 직접 인증하도록 워크플로를 구성할 수 있습니다. OIDC는 자격 증명을 수명이 긴 비밀로 저장할 필요가 없는 것과 같은 보안 이점을 제공합니다. 자세한 내용은 “[OpenID Connect 보안 강화 정보](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)”를 참조하세요.{% endif %}

{% data variables.product.prodname_actions %}에는 기업의 소프트웨어 개발 주기를 관리하고 규정 준수 의무를 충족하는 도구도 포함되어 있습니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)”을 참조하세요.

## {% data variables.product.prodname_actions %} 시작 정보

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %} {% data reusables.actions.ghes-actions-not-enabled-by-default %} 계획을 완료한 후 {% data variables.product.prodname_actions %}를 사용하도록 설정하기 위한 지침을 따를 수 있습니다. 예를 들어 {% data variables.location.product_location %}에 대한 CPU 및 메모리 리소스를 업그레이드해야 할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)”을 참조하세요.

{% else %} 계획을 완료한 후 {% data variables.product.prodname_actions %}를 시작하기 위한 지침을 따를 수 있습니다. 자세한 내용은 {% ifversion ghec %}“[{% data variables.product.prodname_ghe_cloud %}용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud)”{% elsif ghae %}“[{% data variables.product.prodname_ghe_managed %}용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)”을 참조하세요.{% endif %} {% endif %}

## 추가 참고 자료

- “[{% data variables.product.prodname_actions %} 이해](/actions/learn-github-actions/understanding-github-actions)”{% ifversion ghec %}
- “[{% data variables.product.prodname_actions %} 청구 정보](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”{% endif %}

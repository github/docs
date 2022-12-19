---
title: 엔터프라이즈용 GitHub 정보
intro: '기업은 {% data variables.product.prodname_dotcom %}의 엔터프라이즈 제품을 사용하여 전체 소프트웨어 개발 수명 주기를 개선할 수 있습니다.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: dbba8a55fd0ac20c97039de05aa629dea7048626
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192651'
---
## 엔터프라이즈용 {% data variables.product.prodname_dotcom %} 정보

{% data variables.product.prodname_dotcom %}은 안전한 소프트웨어를 빌드, 스케일링, 제공하는 완전한 개발자 플랫폼입니다. 기업은 제품의 도구 모음을 사용하여 전체 소프트웨어 개발 수명 주기를 지원하고, 개발 속도를 높이고, 코드 품질을 개선합니다.

개발자는 문제 및 프로젝트를 사용하여 리포지토리에 소스 코드를 저장하고 버전을 제어하여 작업을 계획하고 추적할 수 있습니다. 클라우드 호스팅 개발 환경인 {% data variables.product.prodname_github_codespaces %}에서 코딩한 다음, 코드 보안 기능을 사용하여 코드베이스에서 비밀과 취약성을 유지하는 끌어오기 요청으로 서로의 코드 변경 내용을 검토할 수 있습니다. 마지막으로, {% data variables.product.prodname_actions %}를 사용하여 빌드, 테스트, 배포 파이프라인을 자동화하고, {% data variables.product.prodname_registry %}를 사용하여 소프트웨어 패키지를 호스트할 수 있습니다.

기업이 {% data variables.product.prodname_enterprise %}를 채택하면 ROI(투자 수익률)가 높습니다. 예를 들어 개발자는 하루에 45분을 절약하고 온보딩 및 학습 시간을 40% 줄입니다. 자세한 내용은 [{% data variables.product.prodname_enterprise %}의 Total Economic Impact](https://resources.github.com/forrester/)를 참조하세요.

소프트웨어 개발 수명 주기의 모든 단계에 대한 관리를 간소화하기 위해 엔터프라이즈 계정이라는 단일 가시성 및 관리 지점을 제공합니다. 엔터프라이즈 계정을 사용하면 청구 및 설정을 관리하고, 정책을 적용하고, 엔터프라이즈 리소스에 액세스할 수 있는 사용자를 감사할 수 있습니다. 자세한 내용은 “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”를 참조하세요.

필요에 따라 {% data variables.product.prodname_GH_advanced_security %}를 사용하여 추가 코드 보안 기능과 {% data variables.contact.premium_support %}를 사용하여 향상된 지원 옵션을 추가할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 “[{% data variables.product.prodname_GH_advanced_security %} 정보](/get-started/learning-about-github/about-github-advanced-security)” 및 “[{% data variables.contact.premium_support %} 정보]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %}”를 참조하세요.{% else %}."{% endif %}

## 배포 옵션 정보

{% data variables.product.prodname_enterprise %}를 구매하면 {% data variables.product.prodname_ghe_cloud %} 및 {% data variables.product.prodname_ghe_server %}에 모두 액세스할 수 있습니다. {% data variables.product.prodname_ghe_cloud %}는 {% data variables.product.prodname_dotcom_the_website %}의 고급 기능 집합이며{% data variables.product.prodname_ghe_server %}는 자체 호스팅 플랫폼입니다. 자세한 내용은 {% data variables.product.prodname_ghe_server %} 설명서에서 “[{% data variables.product.prodname_ghe_server %} 정보]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %}”를 참조하세요.{% else %}{% endif %}

{% data variables.product.prodname_ghe_cloud %}의 경우 개발자가 자신의 개인 계정을 만들고 관리하도록 허용하거나 {% data variables.product.prodname_emus %}를 사용하여 개발자를 위한 사용자 계정을 만들고 관리할 수 있습니다. 자세한 내용은 “[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”를 참조하세요.

{% data variables.product.prodname_ghe_managed %}는 엄격한 보안 및 규정 준수 요구 사항이 있는 일부 고객의 가용성이 제한됩니다. 자세한 내용은 {% data variables.product.prodname_ghe_managed %} 설명서에서 “[{% data variables.product.prodname_ghe_managed %} 정보](/github-ae@latest/admin/overview/about-github-ae){% ifversion not ghae %}”를 참조하세요.{% else %}."{% endif %}

{% data variables.product.prodname_github_connect %}를 사용하도록 설정하여 {% data variables.product.prodname_ghe_server %} 또는 {% data variables.product.prodname_ghe_managed %}를 사용하는 동안에도 {% data variables.product.prodname_dotcom_the_website %}의 기능을 활용할 수 있습니다. 이렇게 하면 안전하지 않은 종속성에 대해 {% data variables.product.prodname_dependabot_alerts %}와 같은 추가 기능과 워크플로를 구성할 수 있습니다.{% ifversion ghec %}

- {% data variables.product.prodname_ghe_server %} 설명서의 “[{% data variables.product.prodname_github_connect %} 정보](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect)”
- {% data variables.product.prodname_ghe_managed %} 설명서의 “[{% data variables.product.prodname_github_connect %} 정보](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)”{% else %} 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 정보](/admin/configuration/configuring-github-connect/about-github-connect)”를 참조하세요.{% endif %}

## 추가 참고 자료

- {% data variables.product.company_short %} 리소스의 [{% data variables.product.prodname_dotcom %}을 다른 DevOps 솔루션과 비교](https://resources.github.com/devops/tools/compare/)

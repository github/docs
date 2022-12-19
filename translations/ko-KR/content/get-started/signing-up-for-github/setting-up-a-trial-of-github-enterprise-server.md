---
title: GitHub Enterprise Server 평가판 설정
intro: '{% data variables.product.prodname_ghe_server %}를 무료로 사용해 볼 수 있습니다.'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise
  - /articles/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Server trial
ms.openlocfilehash: 9beee350488bdf27beb7107deda3c44f560d29e9
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163564'
---
## {% data variables.product.prodname_ghe_server %}의 평가판 정보

{% data variables.product.prodname_ghe_server %}를 평가하기 위해 45일 평가판을 요청할 수 있습니다. 평가판은 온-프레미스 또는 클라우드 배포 옵션을 사용하여 가상 어플라이언스로 설치됩니다. {% data variables.product.prodname_ghe_server %}에 대한 자세한 내용 및 지원되는 가상화 플랫폼 목록은 “[{% data variables.product.prodname_ghe_server %} 정보](/enterprise-server/admin/overview/about-github-enterprise-server)”를 참조하세요.

{% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}보안{% endif %} 경고 및 {% data variables.product.prodname_github_connect %}는 현재 {% data variables.product.prodname_ghe_server %} 평가판에서 사용할 수 없습니다. 해당 기능을 시연하려면 {% data variables.contact.contact_enterprise_sales %}에 문의하세요. 기능에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)” 및 “[{% data variables.product.prodname_ghe_cloud %}에 엔터프라이즈 계정 연결](/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)”을 참조하세요.

{% data variables.product.prodname_ghe_cloud %}에도 평가판이 제공됩니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_cloud %}의 평가판 설정](/articles/setting-up-a-trial-of-github-enterprise-cloud)”을 참조하세요.

{% data reusables.products.which-product-to-use %}

## {% data variables.product.prodname_ghe_server %}의 평가판 설정

{% data variables.product.prodname_ghe_server %}가 가상 어플라이언스로 설치됩니다. 조직에서 가상 머신을 설정할 가장 적합한 사람을 결정하고 해당 사용자에게 [평가판 요청](https://enterprise.github.com/trial)을 제출하도록 요청합니다. 요청을 제출한 직후에 평가판을 시작할 수 있습니다.

{% data variables.product.prodname_enterprise %} 웹 포털의 계정을 설정하려면 평가판 요청을 제출한 후 받은 이메일의 링크를 클릭하고 프롬프트를 따릅니다. 그런 다음 라이선스 파일을 다운로드합니다. 자세한 내용은 “[{% data variables.product.prodname_enterprise %} 라이선스 관리](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise)”를 참조하세요.

{% data variables.product.prodname_ghe_server %}를 설치하려면 필요한 구성 요소를 다운로드하고 라이선스 파일을 업로드합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정](/enterprise-server@latest/admin/installation/setting-up-a-github-enterprise-server-instance)”에서 선택한 시각화 플랫폼에 대한 지침을 참조하세요.

## 다음 단계

평가판을 최대한 활용하려면 다음 단계를 수행합니다.

1. [조직을 만듭니다](/enterprise-server@latest/admin/user-management/creating-organizations).
2. {% data variables.product.prodname_dotcom %} 사용의 기본 사항을 알아보려면 다음을 참조하세요.
   - [{% data variables.product.prodname_dotcom %} 소개](https://resources.github.com/devops/methodology/maximizing-devops-roi/) 웹캐스트
   - {% data variables.product.prodname_dotcom %} 가이드의 [{% data variables.product.prodname_dotcom %} 흐름 이해](https://guides.github.com/introduction/flow/)
   - {% data variables.product.prodname_dotcom %}의 [Hello World](https://guides.github.com/activities/hello-world/)
   - “[{% data variables.product.prodname_docs %} 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs)”
3. 조직의 요구 사항에 맞게 인스턴스를 구성하려면 “[엔터프라이즈 구성](/enterprise-server@latest/admin/configuration/configuring-your-enterprise)”을 참조하세요.
4. {% data variables.product.prodname_ghe_server %}를 ID 공급자와 통합하려면 “[SAML 사용](/enterprise-server@latest/admin/user-management/using-saml)” 및 “[LDAP 사용](/enterprise-server@latest/admin/authentication/using-ldap)”을 참조하세요.
5. 평가판에 참가할 사용자를 무제한으로 초대합니다.
   - 기본 제공 인증 또는 구성된 ID 공급자를 사용하여 {% data variables.product.prodname_ghe_server %} 인스턴스에 사용자를 추가합니다. 자세한 내용은 “[기본 제공 인증 사용](/enterprise-server@latest/admin/user-management/using-built-in-authentication)”을 참조하세요.
   - 계정 관리자가 되도록 사용자를 초대하려면 [{% data variables.product.prodname_enterprise %} 웹 포털](https://enterprise.github.com/login)을 방문하세요.

    {% note %}

    **참고:** 계정 관리자가 되도록 초대하는 사용자는 초대를 수락할 수 있는 링크가 포함된 이메일을 받게 됩니다.

    {% endnote %}

{% data reusables.enterprise.best-practices %}    

{% data reusables.products.product-roadmap %}

## 평가판 완료

평가판 기간 동안 언제든지 [{% data variables.product.prodname_enterprise %} 웹 포털](https://enterprise.github.com/login)에서 전체 라이선스로 업그레이드할 수 있습니다.

평가판의 마지막 날까지 업그레이드하지 않은 경우 평가판이 종료되었음을 알리는 이메일을 받게 됩니다. {% data variables.product.prodname_enterprise %}를 평가하는 데 추가로 시간이 필요한 경우 {% data variables.contact.contact_enterprise_sales %}에 문의하여 연장을 요청하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_ghe_cloud %}의 평가판 설정](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)”

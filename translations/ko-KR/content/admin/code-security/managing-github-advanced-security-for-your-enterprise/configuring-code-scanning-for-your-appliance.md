---
title: 어플라이언스에 대한 코드 검사 구성
shortTitle: Configuring code scanning
intro: '{% data variables.location.product_location %}에 대해 {% data variables.product.prodname_code_scanning %}을(를) 사용하도록 설정, 구성 및 사용하지 않도록 설정할 수 있습니다. {% data variables.product.prodname_code_scanning_capc %}을 사용하면 코드에서 취약성 및 오류를 검색할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/advanced-security/configuring-code-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
ms.openlocfilehash: 11ad9bfe108d339af3992277cab0918998eb54fb
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161088'
---
{% data reusables.code-scanning.beta %}

## {% data variables.product.prodname_code_scanning %} 정보

{% data reusables.code-scanning.about-code-scanning %}

to run {% data variables.product.prodname_codeql %} 분석 및 타사 분석을 실행하도록 {% data variables.product.prodname_code_scanning %}를 구성할 수 있습니다. 또한 {% data variables.product.prodname_code_scanning_capc %}는 기본적으로 {% data variables.product.prodname_actions %}을 사용하거나 외부에서 기존 CI/CD 인프라를 사용하여 분석 실행을 지원할 수 있습니다. 아래 표에는 작업을 사용하여 {% data variables.product.prodname_code_scanning %}을(를) 허용하도록 {% data variables.location.product_location %}을(를) 구성할 때 사용자가 사용할 수 있는 모든 옵션이 요약되어 있습니다.

{% data reusables.code-scanning.enabling-options %}

## 라이선스에 {% data variables.product.prodname_GH_advanced_security %}가 포함되어 있는지 확인

{% data reusables.advanced-security.check-for-ghas-license %}

## {% data variables.product.prodname_code_scanning %}에 대한 필수 조건

- {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %}에 대한 라이선스(“[{% data variables.product.prodname_GH_advanced_security %}에 대한 청구 정보](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)” 참조){% endif %}

- 관리 콘솔에서 {% data variables.product.prodname_code_scanning_capc %}를 사용하도록 설정(“[엔터프라이즈에 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)” 참조)

- {% data variables.product.prodname_code_scanning %} 분석을 실행하기 위한 VM 또는 컨테이너

## {% data variables.product.prodname_actions %}을 사용하여 {% data variables.product.prodname_code_scanning %} 실행

### 자체 호스트 실행기 설정

{% data variables.product.prodname_ghe_server %}는 {% data variables.product.prodname_actions %} 워크플로를 사용하여 {% data variables.product.prodname_code_scanning %}를 실행할 수 있습니다. 먼저 사용자 환경에서 자체 호스트 {% data variables.product.prodname_actions %} 실행기를 하나 이상 프로비저닝해야 합니다. 리포지토리, 조직 또는 엔터프라이즈 계정 수준에서 자체 호스트 실행기를 프로비저닝할 수 있습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)” 및 “[자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)”를 참조하세요.

{% data variables.product.prodname_codeql %} 작업을 실행하는 데 사용하는 자체 호스트 실행기에서 Git이 PATH 변수에 있는지 확인해야 합니다.

{% ifversion ghes > 3.7 or ghae > 3.7 %} {% note %}

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}를 사용하여 엔터프라이즈에서 Python으로 작성된 코드를 분석하는 경우 자체 호스팅 실행기에 Python 3이 설치되어 있는지 확인해야 합니다.

{% endnote %} {% endif %}

### {% data variables.product.prodname_code_scanning %}를 위한 작업 프로비저닝

{% ifversion ghes %} {% data variables.product.prodname_ghe_server %}에서 작업을 사용하여 {% data variables.product.prodname_code_scanning %}를 실행하려면 어플라이언스에 해당 작업을 사용할 수 있어야 합니다.

{% data variables.product.prodname_codeql %} 작업은 {% data variables.product.prodname_ghe_server %}의 설치에 포함되어 있습니다. {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} 및 {% data variables.product.prodname_actions %} 실행기 모두 인터넷에 액세스할 수 있는 경우 작업은 분석을 수행하는 데 필요한 {% data variables.product.prodname_codeql %} {% data variables.product.codeql_cli_ghes_recommended_version %} 번들을 자동으로 다운로드합니다. 또는 동기화 도구를 사용하여 최신 릴리스 버전의 {% data variables.product.prodname_codeql %} 분석 번들을 로컬에서 사용하도록 할 수 있습니다. 자세한 내용은 아래의”[인터넷 액세스 없이 서버에서 {% data variables.product.prodname_codeql %} 구성](#configuring-codeql-analysis-on-a-server-without-internet-access)”을 참조하세요.

{% data variables.product.prodname_github_connect %}를 설정하여 사용자가 {% data variables.product.prodname_code_scanning %}에 대해 타사 작업을 사용할 수 있도록 지정할 수도 있습니다. 자세한 내용은 아래의 “[{% data variables.product.prodname_actions %}를 동기화하도록 {% data variables.product.prodname_github_connect %} 구성](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)”을 참조하세요.

### 인터넷 액세스 없이 서버에서 {% data variables.product.prodname_codeql %} 분석 구성
{% data variables.product.prodname_ghe_server %}를 실행 중인 서버가 인터넷에 연결되지 않았는데 사용자가 리포지토리에 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}를 사용하도록 허용하려는 경우 {% data variables.product.prodname_codeql %} 작업 동기화 도구를 사용하여 {% data variables.product.prodname_dotcom_the_website %}의 {% data variables.product.prodname_codeql %} 분석 번들을 서버에 복사해야 합니다. 도구 및 도구 사용 방법에 관한 자세한 내용은 [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/)에서 확인할 수 있습니다.

{% data variables.product.prodname_codeql %} 작업 동기화 도구를 설정한 경우 이 도구를 사용하여 {% data variables.product.prodname_codeql %} 작업의 최신 릴리스 및 연결된 {% data variables.product.prodname_codeql %} 분석 번들을 동기화할 수 있습니다. 이들은 {% data variables.product.prodname_ghe_server %}와 호환됩니다.

{% endif %}

### {% data variables.product.prodname_actions %}을 동기화하도록 {% data variables.product.prodname_github_connect %} 구성
1. {% data variables.product.prodname_dotcom_the_website %},에서 요청 시 작업 워크플로를 다운로드하려면 {% data variables.product.prodname_github_connect %}를 사용하도록 설정해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 사용 설정](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud#enabling-github-connect)”을 참조하세요.
2. {% data variables.location.product_location %}에 대해 {% data variables.product.prodname_actions %}를 사용하도록 설정해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)”을 참조하세요.
3. 다음 단계는 {% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_dotcom_the_website %}에서 작업에 대한 액세스를 구성하는 것입니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스 사용](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”을 참조하세요.
4. 리포지토리, 조직 또는 엔터프라이즈 계정에 자체 호스트 실행기를 추가합니다. 자세한 내용은 “[자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)”를 참조하세요.

## {% data variables.product.prodname_codeql_cli %}를 사용하여 코드 검사 실행

{% data variables.product.prodname_actions %}를 사용하지 않으려면 {% data variables.product.prodname_codeql_cli %}를 사용하여 {% data variables.product.prodname_code_scanning %}를 실행해야 합니다. 

{% data variables.product.prodname_codeql_cli %}는 타사 CI/CD 시스템을 포함하여 모든 컴퓨터에서 코드베이스를 분석하는 데 사용하는 명령줄 도구입니다. 자세한 내용은 “[CI 시스템에 CodeQL CLI 설치](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”를 참조하세요.

{% ifversion codeql-runner-supported %}

## {% data variables.code-scanning.codeql_runner %}를 사용하여 {% data variables.product.prodname_code_scanning %} 실행

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% data variables.product.prodname_actions %}을(를) 사용하지 않으려면 {% data variables.code-scanning.codeql_runner %}를 사용하여 {% data variables.product.prodname_code_scanning %}을(를) 실행할 수 있습니다. 

{% data variables.code-scanning.codeql_runner %}는 타사 CI/CD 시스템에 추가할 수 있는 명령줄 도구입니다. 이 도구는 {% data variables.product.prodname_dotcom %} 리포지토리의 체크 아웃 시 {% data variables.product.prodname_codeql %} 분석을 실행합니다. 자세한 내용은 “[CI 시스템에서 {% data variables.product.prodname_code_scanning %} 실행](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)”을 참조하세요.

{% endif %}

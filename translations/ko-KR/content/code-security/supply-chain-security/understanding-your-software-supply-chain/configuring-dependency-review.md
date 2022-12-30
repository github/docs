---
title: 종속성 검토 구성
intro: 종속성 검토를 사용하여 프로젝트에 추가되기 전에 취약성을 포착할 수 있습니다.
miniTocMaxHeadingLevel: 3
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
ms.openlocfilehash: b5e5ccb5107cd96d1a88f896fd46d5b948a365cd
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163354'
---
## 종속성 검토 정보

{% data reusables.dependency-review.feature-overview %}   

자세한 내용은 “[종속성 검토 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)” 및 “[끌어오기 요청에서 종속성 변경 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”를 참조하세요.

## 종속성 검토 구성 정보

{% ifversion fpt %} 종속성 검토는 모든 제품의 모든 퍼블릭 리포지토리에서 사용할 수 있으며 사용하지 않도록 설정할 수 없습니다. 종속성 검토는 GitHub Enterprise Cloud를 사용하고 [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)에 대한 라이선스가 있는 조직이 소유한 프라이빗 리포지토리에서 사용할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)를 참조하세요.

{% elsif ghec %} 종속성 검토는 퍼블릭 리포지토리의 {% data variables.product.product_name %}에 포함됩니다. 조직이 소유한 프라이빗 리포지토리에서 종속성 검토를 사용하려면 [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)에 대한 라이선스가 있어야 하며 종속성 그래프를 사용하도록 설정해야 합니다.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. "{% data variables.product.prodname_GH_advanced_security %}"를 사용하도록 설정하지 않은 경우 기능 옆의 **사용** 을 클릭합니다.
   !["사용" 단추가 강조 표시된 GitHub 고급 보안 기능의 스크린샷](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes or ghae %}

종속성 검토는 {% data variables.location.product_location %}에 대해 종속성 그래프를 사용하도록 설정하고 조직 또는 리포지토리에 대해 {% data variables.product.prodname_advanced_security %}를 사용하도록 설정한 경우에 사용할 수 있습니다. {% ifversion ghes %} 자세한 내용은 "[엔터프라이즈에 {% data variables.product.prodname_GH_advanced_security %} 사용"을 참조하세요](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise). {% endif %}

### 종속성 그래프를 사용할 수 있는지 확인

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. "보안 및 분석 기능 구성"에서 종속성 그래프가 사용되는지 확인합니다. 
1. 종속성 그래프를 사용하는 경우 "{% data variables.product.prodname_GH_advanced_security %}" 옆에 있는 **사용** 을 클릭하여 종속성 검토를 포함하여 {% data variables.product.prodname_advanced_security %}를 활성화합니다. 엔터프라이즈에 {% data variables.product.prodname_advanced_security %}에 사용할 수 있는 라이선스가 없는 경우 사용 단추를 사용할 수 없습니다. {% ifversion ghes %} ![ "코드 보안 및 분석" 기능의](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png) 스크린샷{% endif %}

{% endif %}

{% ifversion dependency-review-action-configuration %}
## {% data variables.product.prodname_dependency_review_action %} 구성 정보

{% data reusables.dependency-review.dependency-review-action-overview %}

다음 구성 옵션을 사용할 수 있습니다.

| 옵션 | 필수 | 사용량 |
|------------------|-------------------------------|--------|
| `fail-on-severity` | 선택 사항 | 심각도 수준(`low`, `moderate`, `high`, `critical`)에 대한 임계값을 정의합니다.</br>지정된 심각도 수준 이상의 취약성을 발생시키는 끌어오기 요청에서 작업이 실패합니다. |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | 선택적| 허용된 라이선스의 목록이 포함됩니다. 이 매개 변수에 대한 가능한 값은 API 설명서의 [라이선스](/rest/licenses) 페이지에서 찾을 수 있습니다.</br>이 작업은 목록과 일치하지 않는 라이선스가 있는 종속성을 도입하는 끌어오기 요청에서 실패합니다.|{% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` | 선택적 | 금지된 라이선스의 목록이 포함됩니다. 이 매개 변수에 대한 가능한 값은 API 설명서의 [라이선스](/rest/licenses) 페이지에서 찾을 수 있습니다.</br>작업은 list.| 일치하는 라이선스가 있는 종속성을 도입하는 끌어오기 요청에 실패합니다. {% endif %} {% ifversion dependency-review-action-fail-on-scopes %} | `fail-on-scopes` | 선택적 | 지원하려는 빌드 환경(`development`, `runtime`, `unknown`)을 나타내는 문자열 목록을 포함합니다. </br>이 작업은 list.| 일치하는 범위에서 취약성을 발생시키는 끌어오기 요청에서 실패합니다. {% endif %} | `allow-ghsas` | 선택적 | 검색 중에 건너뛸 수 있는 {% 데이터 variables.product.prodname_advisory_database %} ID 목록을 포함합니다. [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories)에서 이 매개 변수에 대한 가능한 값을 찾을 수 있습니다. | | `config-file` | 선택적 | 구성 파일의 경로를 지정합니다. 구성 파일은 리포지토리 또는 외부 리포지토리에 있는 파일에 로컬일 수 있습니다.| | `external-repo-token` | 선택적 | 파일이 프라이빗 외부 리포지토리에 있는 경우 구성 파일을 가져오기 위한 토큰을 지정합니다. 토큰에 리포지토리에 대한 읽기 권한이 있어야 합니다.|

{% ifversion dependency-review-action-licenses %} {% tip %}

**팁:** `allow-licenses` 및 `deny-licenses` 옵션은 함께 사용할 수 없습니다.

{% endtip %} {% endif %}

## {% data variables.product.prodname_dependency_review_action %} 구성

{% data variables.product.prodname_dependency_review_action %}을(를) 구성하는 방법에는 두 가지가 있습니다. 
- 워크플로 파일의 구성 옵션을 인라인으로 표시합니다. 
- 워크플로 파일에서 구성 파일 참조

모든 예제에서는 semver 릴리스 번호(예`v3.0.8`: )가 아닌 작업(`v3`)에 짧은 버전 번호를 사용합니다. 이렇게 하면 작업의 최신 부 버전을 사용할 수 있습니다.
### 인라인 구성을 사용하여 {% data variables.product.prodname_dependency_review_action %} 설정

1. 폴더에 새 YAML 워크플로를 추가합니다 `.github/workflows` .   
   
   {% ifversion ghes %} 의 경우 `runs-on`기본 레이블은 입니다 `self-hosted`. 기본 레이블을 실행기의 레이블로 바꿀 수 있습니다. {% endif %}
  ```yaml{:copy}
  name: 'Dependency Review'
  on: [pull_request]

  permissions:
    contents: read

  jobs:
    dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
   ```
1. 원하는 설정을 지정합니다.   

   이 {% data variables.product.prodname_dependency_review_action %} 예제 파일은 사용 가능한 구성 옵션을 사용하는 방법을 보여 줍니다.
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
           # Possible values: "critical", "high", "moderate", "low" 
           fail-on-severity: critical
  {% ifversion dependency-review-action-licenses %}
           # You can only include one of these two options: `allow-licenses` and `deny-licences`
           # ([String]). Only allow these licenses (optional)
           # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           allow-licenses: GPL-3.0, BSD-3-Clause, MIT
           # ([String]). Block the pull request on these licenses (optional)
           # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           deny-licenses: LGPL-2.0, BSD-2-Clause
  {% endif %}
           # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
           # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
           allow-ghsas: GHSA-abcd-1234-5679, GHSA-efgh-1234-5679
  {% ifversion dependency-review-action-fail-on-scopes %}
           # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
           # Possible values: "development", "runtime", "unknown"
           fail-on-scopes: development, runtime
  {% endif %}
   ```
### 구성 파일을 사용하여 {% data variables.product.prodname_dependency_review_action %} 설정

1. 폴더에 새 YAML 워크플로를 `.github/workflows` 추가하고 를 사용하여 `config-file` 구성 파일을 사용 중임을 지정합니다.

   {% ifversion ghes %} 의 경우 `runs-on`기본 레이블은 입니다 `self-hosted`. 기본 레이블을 실행기의 레이블로 바꿀 수 있습니다. {% endif %}
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
    contents: read

   jobs:
     dependency-review:
       {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
            # ([String]). Representing a path to a configuration file local to the repository or in an external repository.
            # Possible values: An absolute path to a local file or an external file.
            config-file: './.github/dependency-review-config.yml'   
            # Syntax for an external file: OWNER/REPOSITORY/FILENAME@BRANCH
            config-file: 'github/octorepo/dependency-review-config.yml@main'

            # ([Token]) Use if your configuration file resides in a private external repository.
            # Possible values: Any GitHub token with read access to the private external repository.  
            external-repo-token: 'ghp_123456789abcde'
   ```
1. 지정한 경로에 구성 파일을 만듭니다.   

   이 YAML 예제 파일은 사용 가능한 구성 옵션을 사용하는 방법을 보여 줍니다. 
   ```yaml{:copy}
     # Possible values: "critical", "high", "moderate", "low" 
     fail-on-severity: critical
   {% ifversion dependency-review-action-licenses %}
     # You can only include one of these two options: `allow-licenses` and `deny-licences`
     # ([String]). Only allow these licenses (optional)
     # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     allow-licenses: 
       - GPL-3.0
       - BSD-3-Clause
       - MIT
      # ([String]). Block the pull request on these licenses (optional)
      # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     deny-licenses: 
       - LGPL-2.0
       - BSD-2-Clause
   {% endif %}
      # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
      # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
     allow-ghsas: 
       - GHSA-abcd-1234-5679 
       - GHSA-efgh-1234-5679
   {% ifversion dependency-review-action-fail-on-scopes %}
      # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
      # Possible values: "development", "runtime", "unknown"
     fail-on-scopes: 
       - development 
       - runtime
  {% endif %}
  ```
구성 옵션에 대한 자세한 내용은 [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme)를 참조하세요.
{% endif %}

---
title: GitHub Advisory Database에서 보안 권고 탐색
intro: '{% data variables.product.company_short %}에서 호스트되는 오픈 소스 프로젝트에서 보안 위험에 대한 권고를 찾으려면 {% data variables.product.prodname_advisory_database %}를 찾아볼 수 있습니다.'
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
- /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/dependabot/dependabot-alerts/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
ms.openlocfilehash: 64196cbee6accd1818bff420447dbdbcc8f65c8b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148093643"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## {% data variables.product.prodname_advisory_database %} 정보

{% data variables.product.prodname_advisory_database %}에는 알려진 보안 취약성 {% ifversion GH-advisory-db-supports-malware %}및 맬웨어 {% endif %}목록이 {% data variables.product.company_short %}에서 검토한 권고 및 검토하지 않은 권고의 두 범주로 그룹화되어 표시됩니다.

{% data reusables.repositories.tracks-vulnerabilities %}

## 보안 권고 유형 정보

{% data reusables.advisory-database.beta-malware-advisories %}

{% data variables.product.prodname_advisory_database %}의 각 권고는 오픈 소스 프로젝트의 취약성{% ifversion GH-advisory-db-supports-malware %} 또는 악의적인 오픈 소스 소프트웨어{% endif %}에 대한 것입니다. 

{% data reusables.repositories.a-vulnerability-is %} 코드의 취약성은 일반적으로 우연히 발생하며 발견된 직후에 수정됩니다. 사용 가능한 즉시 수정된 버전의 종속성을 사용하도록 코드를 업데이트해야 합니다.

{% ifversion GH-advisory-db-supports-malware %}

반면, 악성 소프트웨어 또는 맬웨어는 원치 않는 또는 유해한 기능을 수행하도록 의도적으로 설계된 코드입니다. 맬웨어는 맬웨어를 사용하는 애플리케이션의 하드웨어, 소프트웨어, 기밀 데이터 또는 사용자를 대상으로 할 수 있습니다. 프로젝트에서 맬웨어를 제거하고 종속성에 대한 보다 안전한 대체 방법을 찾아야 합니다.

{% endif %}

### {% data variables.product.company_short %}에서 검토한 권고

{% data variables.product.company_short %}에서 검토한 권고는 지원하는 에코시스템의 패키지에 매핑된 보안 취약성{% ifversion GH-advisory-db-supports-malware %} 또는 맬웨어{% endif %}입니다. 당사는 각 권고의 유효성을 신중하게 검토하며 각각 전체 설명을 제공하고 에코시스템 및 패키지 정보가 모두 포함되도록 하고 있습니다.

일반적으로 지원되는 에코시스템은 소프트웨어 프로그래밍 언어의 연결된 패키지 레지스트리를 따라 명명됩니다. 지원되는 레지스트리에서 제공되는 패키지의 취약성에 대한 권고인 경우 당사에서 검토합니다.

- Composer(레지스트리: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang(레지스트리: https://hex.pm/){% endif %}
- Go(레지스트리: https://pkg.go.dev/) {%- ifversion fpt 또는 ghec 또는 ghes > 3.6 또는 ghae > 3.6 %}
- GitHub Actions(https://github.com/marketplace?type=actions/) {% endif %}
- Maven(레지스트리: https://repo.maven.apache.org/maven2)
- npm(레지스트리: https://www.npmjs.com/)
- NuGet(레지스트리: https://www.nuget.org/)
- pip (registry: https://pypi.org/){% ifversion dependency-graph-dart-support %}
- pub(registry: https://pub.dev/packages/registry){% endif %}
- RubyGems(레지스트리: https://rubygems.org/)
- Rust(레지스트리: https://crates.io/)

지원해야 하는 새로운 에코시스템에 대한 제안이 있는 경우 토론을 위해 [이슈](https://github.com/github/advisory-database/issues)를 개설해 주세요.

리포지토리에 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정하면 새 {% data variables.product.company_short %}에서 검토한 권고가 사용하는 패키지에 대한 취약성 {% ifversion GH-advisory-db-supports-malware %}또는 맬웨어{% endif %}를 보고할 때 자동으로 알림을 받습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”를 참조하세요.

### 검토되지 않은 권고

검토되지 않은 권고는 국가별 취약성 데이터베이스 피드에서 직접 {% data variables.product.prodname_advisory_database %}에 자동으로 게시하는 보안 취약성입니다. 

{% data variables.product.prodname_dependabot %}은 이 유형의 권고가 유효성 또는 완료 여부를 확인하지 않으므로 검토되지 않은 권고에 대해 {% data variables.product.prodname_dependabot_alerts %}를 만들지 않습니다.

## 보안 권고 내 정보

각 보안 권고에는 취약성{% ifversion GH-advisory-db-supports-malware %} 또는 맬웨어{% endif %}에 대한 정보가 포함되어 있으며, 여기에는 설명, 심각도, 영향을 받는 패키지, 패키지 에코시스템, 영향을 받는 버전 및 패치된 버전, 영향 및 선택적 정보(예: 참조, 해결 방법 및 크레딧)가 포함될 수 있습니다. 또한 국가별 취약성 데이터베이스 목록의 권고에는 취약성, CVSS 점수 및 정성적 심각도 수준에 대한 자세한 내용을 읽을 수 있는 CVE 레코드에 대한 링크가 포함되어 있습니다. 자세한 내용은 NIST(미국 국립표준기술원)의 "[국가별 취약성 데이터베이스](https://nvd.nist.gov/)"를 참조하세요.

심각도 수준은 "[CVSS(Common Vulnerability Scoring System), 섹션 5](https://www.first.org/cvss/specification-document)"에 정의된 4가지 가능한 수준 중 하나입니다.
- 낮음
- 중간/보통
- 높음
- 위험

{% data variables.product.prodname_advisory_database %}는 위에서 설명한 CVSS 수준을 사용합니다. {% data variables.product.company_short %}가 CVE를 가져오는 경우 {% data variables.product.prodname_advisory_database %}는 CVSS 버전 3.1을 사용합니다. CVE를 가져오는 경우 {% data variables.product.prodname_advisory_database %}는 CVSS 버전 3.0 및 3.1을 모두 지원합니다.

{% data reusables.repositories.github-security-lab %}

## {% data variables.product.prodname_advisory_database %}의 권고에 액세스

1. https://github.com/advisories로 이동합니다.
2. 필요에 따라 목록을 필터링하려면 드롭다운 메뉴를 사용합니다.
  ![드롭다운 필터](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **팁:** 왼쪽의 사이드바를 사용하여 {% data variables.product.company_short %}에서 검토한 권고 및 검토하지 않은 권고를 개별적으로 살펴볼 수 있습니다.

   {% endtip %}
3. 세부 정보를 보려면 권고를 클릭합니다. 기본적으로 {% data variables.product.company_short %}에서 검토한 보안 취약성 권고가 표시됩니다. {% ifversion GH-advisory-db-supports-malware %}맬웨어 권고를 표시하려면 검색 창에서 `type:malware`를 사용합니다.{% endif %}


{% note %}

또한 GraphQL API를 사용하여 데이터베이스에 액세스할 수도 있습니다. {% ifversion GH-advisory-db-supports-malware %}기본적으로 쿼리는 `type:malware`를 지정하지 않는 한, 보안 취약성에 대해 {% data variables.product.company_short %}에서 검토된 권고를 반환합니다. {% endif %} 자세한 내용은 “[`security_advisory` webhook 이벤트](/webhooks/event-payloads/#security_advisory)”를 참조하세요.

{% endnote %}

## {% data variables.product.prodname_advisory_database %}의 권고 편집
{% data variables.product.prodname_advisory_database %}의 권고에 대한 개선 사항을 제안할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_advisory_database %}에서 보안 공지 편집](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”을 참조하세요.

## {% data variables.product.prodname_advisory_database %} 검색

데이터베이스를 검색하고 한정자를 사용하여 검색 범위를 좁힐 수 있습니다. 예를 들어 특정 날짜, 특정 에코시스템 또는 특정 라이브러리에서 만든 권고를 검색할 수 있습니다.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 한정자  | 예제 |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed)는 {% data variables.product.company_short %}에서 검토한 보안 취약성 권고를 표시합니다. |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware)는 {% data variables.product.company_short %}에서 검토한 맬웨어 권고를 표시합니다. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed)는 검토되지 않은 권고를 표시합니다. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf)는 이 {% data variables.product.prodname_advisory_database %} ID가 포함된 권고를 표시합니다. |
| `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482)는 이 CVE ID 번호가 포함된 권고를 표시합니다. |
| `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm)은 NPM 패키지에 영향을 주는 권고만 표시합니다. |
| `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh)는 심각도가 높은 권고만 표시합니다. |
| `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash)는 lodash 라이브러리에 영향을 주는 권고만 표시합니다. |
| `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352)는 이 CWE 번호가 포함된 권고만 표시합니다. |
| `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat)은 "octocat" 사용자 계정에 크레딧이 적립된 권고만 표시합니다. |
| `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc)는 가장 오래된 권고부터 정렬합니다. |
| `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc)는 최신 권고부터 정렬합니다. |
| `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc)는 가장 늦게 업데이트된 항목별로 정렬합니다. |
| `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc)는 가장 최근에 업데이트된 항목별로 정렬합니다. |
| `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn)은 철회된 권고만 표시합니다. |
| `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13)은 이 날짜에 만든 권고만 표시합니다. |
| `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13)은 이 날짜에 업데이트된 권고만 표시합니다. |

## 취약한 리포지토리 보기

{% data variables.product.prodname_advisory_database %}의 {% data variables.product.company_short %}에서 검토한 권고의 경우 해당 보안 취약성{% ifversion GH-advisory-db-supports-malware %} 또는 맬웨어{% endif %}의 영향을 받는 리포지토리를 확인할 수 있습니다. 취약한 리포지토리를 보려면 해당 리포지토리에 대한 {% data variables.product.prodname_dependabot_alerts %}에 액세스할 수 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)”를 참조하세요.

1. https://github.com/advisories로 이동합니다.
2. 권고를 클릭합니다.
3. 권고 페이지의 맨 위에서 **Dependabot 경고** 를 클릭합니다.
   ![Dependabot 경고](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. 필요에 따라 목록을 필터링하려면 검색 창 또는 드롭다운 메뉴를 사용합니다. "조직" 드롭다운 메뉴를 사용하면 소유자(조직 또는 사용자)를 기준으로 {% data variables.product.prodname_dependabot_alerts %}를 필터링할 수 있습니다.
   ![경고를 필터링하는 검색 창 및 드롭다운 메뉴](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. 권고에 대한 자세한 내용과 취약한 리포지토리를 해결하는 방법에 대한 조언을 보려면 리포지토리 이름을 클릭합니다.

{% ifversion security-advisories-ghes-ghae %}
## {% 데이터 variables.location.product_location %}에서 로컬 자문 데이터베이스에 액세스

사이트 관리자가 {% 데이터 variables.location.product_location %}에 대해 {% 데이터 variables.product.prodname_github_connect %}을(를) 사용하도록 설정한 경우 검토된 권고를 로컬로 찾아볼 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 정보](/admin/configuration/configuring-github-connect/about-github-connect)”를 참조하세요.

로컬 권고 데이터베이스를 사용하여 특정 보안 취약성이 포함되어 있는지 여부와 취약한 종속성에 대한 경고를 받을지 여부를 확인할 수 있습니다. 취약한 리포지토리를 볼 수도 있습니다. 

1. `https://HOSTNAME/advisories`로 이동합니다.
2. 필요에 따라 목록을 필터링하려면 드롭다운 메뉴를 사용합니다.
  ![드롭다운 필터](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   **참고:** 검토된 권고만 나열됩니다. 검토되지 않은 권고는 {% data variables.product.prodname_dotcom_the_website %}의 {% data variables.product.prodname_advisory_database %}에서 볼 수 있습니다. 자세한 내용은 “[에서 권고에 액세스](#accessing-an-advisory-in-the-github-advisory-database)”를 참조하세요. 

   {% endnote %}
3. 권고를 클릭하여 세부 정보를 봅니다. {% ifversion GH-advisory-db-supports-malware %} 기본적으로 보안 취약성에 대해 {% data variables.product.company_short %} 검토 권고가 표시됩니다. 맬웨어 권고를 표시하려면 검색 창에서 `type:malware`를 사용합니다.{% endif %}

또한 로컬 권고 데이터베이스에서 직접 모든 권고에 대한 개선 사항을 제안할 수도 있습니다. 자세한 내용은 "[{% 데이터 variables.location.product_location %}에서 권고 편집](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)"을 참조하세요.

### {% 데이터 variables.location.product_location %}에 대한 취약한 리포지토리 보기

{% data reusables.repositories.enable-security-alerts %}

로컬 권고 데이터베이스에서 각 보안 취약성{% ifversion GH-advisory-db-supports-malware %} 또는 맬웨어{% endif %}의 영향을 받는 리포지토리를 확인할 수 있습니다. 취약한 리포지토리를 보려면 해당 리포지토리에 대한 {% data variables.product.prodname_dependabot_alerts %}에 액세스할 수 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)”를 참조하세요.

1. `https://HOSTNAME/advisories`로 이동합니다.
2. 권고를 클릭합니다.
3. 권고 페이지의 맨 위에서 **Dependabot 경고** 를 클릭합니다.
   ![Dependabot 경고](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. 필요에 따라 목록을 필터링하려면 검색 창 또는 드롭다운 메뉴를 사용합니다. "조직" 드롭다운 메뉴를 사용하면 소유자(조직 또는 사용자)를 기준으로 {% data variables.product.prodname_dependabot_alerts %}를 필터링할 수 있습니다.
   ![경고를 필터링하는 검색 창 및 드롭다운 메뉴](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. 권고에 대한 자세한 내용과 취약한 리포지토리를 해결하는 방법에 대한 조언을 보려면 리포지토리 이름을 클릭합니다.

{% endif %}

## 추가 참고 자료

- MITRE의 ["취약성" 정의](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)

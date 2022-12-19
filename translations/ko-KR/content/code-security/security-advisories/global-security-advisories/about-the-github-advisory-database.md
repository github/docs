---
title: GitHub Advisory 데이터베이스 정보
intro: '{% data variables.product.prodname_advisory_database %}에는 알려진 보안 취약성 {% ifversion GH-advisory-db-supports-malware %}및 맬웨어 {% endif %}목록이 {% data variables.product.company_short %}에서 검토한 권고 및 검토하지 않은 권고의 두 범주로 그룹화되어 표시됩니다.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 601fdd42050f112162898a255811c76aa23c6970
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159079'
---
## {% data variables.product.prodname_advisory_database %} 정보

{% data reusables.repositories.tracks-vulnerabilities %}

보안 권고는 OSV(오픈 소스 취약성) 형식의 JSON 파일로 게시됩니다. OSV 형식에 대한 자세한 내용은 "[오픈 소스 취약성 형식"을 참조하세요](https://ossf.github.io/osv-schema/).

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
- Go (registry: https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
- GitHub Actions(https://github.com/marketplace?type=actions/) {% endif %}
- Maven(레지스트리: https://repo.maven.apache.org/maven2)
- npm(레지스트리: https://www.npmjs.com/)
- NuGet(레지스트리: https://www.nuget.org/)
- pip (registry: https://pypi.org/){% ifversion dependency-graph-dart-support %}
- pub(레지스트리: https://pub.dev/packages/registry){% endif %}
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

## 추가 참고 자료

- “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”
- MITRE의 ["취약성" 정의](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)

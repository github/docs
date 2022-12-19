---
title: 취약한 종속성 검색 문제 해결
intro: '{% data variables.product.product_name %}에서 보고한 종속성 정보가 예상과 다른 경우 여러 사항을 고려해야 하며 다양한 사항을 확인할 수 있습니다.'
shortTitle: Troubleshoot vulnerability detection
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Troubleshooting
  - Errors
  - Security updates
  - Dependencies
  - Vulnerabilities
  - CVEs
  - Repositories
ms.openlocfilehash: 78ab86bf3314717a1f79b858496c4eb9fa323819
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106535'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.result-discrepancy %}

## 일부 종속성이 누락된 것으로 보이는 이유는 무엇인가요?

{% data variables.product.prodname_dotcom %}는 종속성 데이터를 다른 도구와 다르게 생성하고 표시합니다. 따라서 다른 도구를 사용하여 종속성을 식별한 경우 거의 확실히 다른 결과를 보게 됩니다. 다음을 살펴보세요.

*   {% data variables.product.prodname_advisory_database %}는 {% data variables.product.prodname_dotcom %}에서 취약한 종속성{% ifversion GH-advisory-db-supports-malware %} 및 맬웨어{% endif %}을(를) 식별하는 데 사용하는 데이터 원본 중 하나입니다. {% data variables.product.prodname_dotcom %}의 일반적인 패키지 에코시스템에 대한 보안 권고의 무료 큐레이팅된 데이터베이스입니다. {% data variables.product.prodname_security_advisories %}에서 {% data variables.product.prodname_dotcom %}에 직접 보고된 데이터와 공식 피드 및 커뮤니티 원본이 모두 포함됩니다. 이 데이터는 {% data variables.product.prodname_dotcom %}에서 검토하고 큐레이팅하여 false 또는 실행 불가능한 정보가 개발 커뮤니티와 공유되지 않도록 합니다. {% data reusables.security-advisory.link-browsing-advisory-db %}
*   종속성 그래프는 사용자의 리포지토리에 있는 알려진 모든 패키지 매니페스트 파일을 구문 분석합니다. 예를 들어 npm의 경우 _package-lock.json_ 파일을 구문 분석합니다. 리포지토리의 모든 종속성 및 퍼블릭 종속의 그래프를 생성합니다. 이는 종속성 그래프를 활성화하고 누군가가 기본 분기로 푸시할 때 발생하며 여기에는 지원되는 매니페스트 형식을 변경하는 커밋이 포함됩니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)” 및 “[종속성 그래프 문제 해결](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)”을 참조하세요.
*   {% data variables.product.prodname_dependabot %}은 매니페스트 파일이 포함된 기본 분기로의 모든 푸시를 검색합니다. 새 권고가 추가되면 해당 권고는 모든 기존 리포지토리를 검사하고 영향을 받는 각 리포지토리에 대한 경고를 생성합니다. {% data variables.product.prodname_dependabot_alerts %}는 권고당 하나씩 만들어지는 대신 리포지토리 수준에서 집계됩니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”를 참조하세요.
*   {% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dependabot_security_updates %}은(는) 리포지토리의 취약한 종속성에 대한 경고를 받으면 트리거됩니다. 가능한 경우 {% data variables.product.prodname_dependabot %}은 취약성을 방지하는 데 필요한 최소 보안 버전으로 취약한 종속성을 업그레이드하기 위해 리포지토리에 끌어오기 요청을 만듭니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 정보](/github/managing-security-vulnerabilities/about-dependabot-security-updates)” 및 “[{% data variables.product.prodname_dependabot %} 오류 문제 해결](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)”을 참조하세요.
  
    {% endif %}{% data variables.product.prodname_dependabot %}은 일정에 따라 리포지토리를 검사하지 않고 무언가가 변경될 때 검사합니다. 예를 들어 새 종속성이 추가되거나({% data variables.product.prodname_dotcom %}이(가) 모든 푸시에서 이를 확인) 데이터베이스에 새 권고가 추가되고{% ifversion ghes or ghae %}이(가) {% data variables.location.product_location %}{% endif %}에 동기화될 때 검사가 트리거됩니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-insecure-dependencies)”를 참조하세요.

## {% data variables.product.prodname_dependabot_alerts %}는 매니페스트 및 잠금 파일의 안전하지 않은 종속성과만 관련이 있나요?

{% data variables.product.prodname_dependabot_alerts %}는 매니페스트 또는 잠금 파일에서 버전을 확인할 수 있는 전이적 종속성을 포함하여 업데이트해야 하는 종속성에 대해 조언합니다. {% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dependabot_security_updates %}은 {% data variables.product.prodname_dependabot %}이 종속성을 직접 "수정"할 수 있는 변경 내용만 제안합니다. 즉, 다음과 같은 경우 다음과 같습니다.
* 매니페스트 또는 잠금 파일에 명시적으로 선언된 직접 종속성
* 잠금 파일{% endif %}에 선언된 전이적 종속성

**확인**: 리포지토리의 매니페스트 또는 잠금 파일에 지정되지 않은 구성 요소에 대해 catch되지 않은 취약성인가요?

## 일부 에코시스템에 대해 {% data variables.product.prodname_dependabot_alerts %}를 받지 못하는 이유는 무엇인가요?

{% data variables.product.prodname_dependabot_alerts %}는 고품질의 실행 가능한 데이터를 제공할 수 있는 에코시스템 집합에 대해 지원됩니다. {% data variables.product.prodname_advisory_database %}, 종속성 그래프, {% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot %} 보안 업데이트의 큐레이팅된 권고 {% endif %}및 {% data variables.product.prodname_dependabot_alerts %}는 Java의 Maven, JavaScript의 npm 및 Yarn, NET의 NuGet, Python의 pip, Ruby's RubyGems, PHP의 Composer를 포함한 여러 에코시스템에 제공됩니다. 시간이 지남에 따라 더 많은 에코시스템에 대한 지원이 추가될 것입니다. 지원하는 패키지 에코시스템에 대한 개요는 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”를 참조하세요.

다른 에코시스템에 대한 보안 권고가 존재할 수 있다는 점에 유의해야 합니다. 검토되지 않은 보안 공지의 정보는 특정 리포지토리의 유지 관리자가 제공합니다. 이 데이터는 {% data variables.product.prodname_dotcom %}에서 큐레이팅되지 않습니다. {% data reusables.security-advisory.link-browsing-advisory-db %}

**확인**: catch되지 않은 취약성이 지원되지 않는 에코시스템에 적용되나요?

## {% data variables.product.prodname_dependabot %}이 수년 동안 알려진 취약성에 대한 경고를 생성하나요?

{% data variables.product.prodname_advisory_database %}는 2019년 11월에 시작되었으며, 지원되는 에코시스템에서 2017년부터 보안 위험에 대한 권고를 포함하도록 과거 데이터가 채워집니다. 데이터베이스에 CVE를 추가할 때 최신 CVE 및 최신 버전의 소프트웨어에 영향을 미치는 CVE를 큐레이팅하는 우선 순위를 지정합니다.

이전 취약성에 대한 일부 정보를 사용할 수 있습니다. 특히 이러한 CVE가 특히 널리 퍼져 있는 경우 일부 이전 취약성은 {% data variables.product.prodname_advisory_database %}에 포함되지 않습니다. 데이터베이스에 포함해야 하는 특정 이전 취약성이 있는 경우 {% data variables.contact.contact_support %}에 문의하세요. 

**확인**: 2017년 이전의 국가 취약성 데이터베이스에 catch되지 않은 취약성 게시 날짜가 있나요?

## {% data variables.product.prodname_advisory_database %}가 게시된 취약성 데이터의 하위 집합을 사용하는 이유는 무엇인가요?

일부 타사 도구는 사람이 검사하거나 필터링하지 않는 처리되지 않은 CVE 데이터를 사용합니다. 즉, 태그 지정 또는 심각도 오류 또는 기타 품질 문제가 있는 CVE는 더 빈번하고, 더 시끄럽고, 덜 유용한 경고를 발생시킵니다.

{% data variables.product.prodname_dependabot %}은 {% data variables.product.prodname_advisory_database %}에서 큐레이팅된 데이터를 사용하므로 경고 볼륨이 적을 수 있지만 수신하는 경고는 정확하고 관련성이 높습니다.

{% ifversion fpt or ghec %}
## 안전하지 않은 종속성이 각각 별도의 경고를 생성하나요?

종속성에 여러 취약성이 있는 경우 권고 및 매니페스트 수준에서 각 취약성에 대한 경고가 생성됩니다.

![매니페스트가 다른 동일한 패키지의 두 경고를 보여 주는 {% data variables.product.prodname_dependabot_alerts %} 탭의 스크린샷](/assets/images/help/repository/dependabot-alerts-view.png)

레거시 {% data variables.product.prodname_dependabot_alerts %}는 동일한 종속성에 대한 모든 취약성과 함께 집계된 단일 경고로 그룹화되었습니다. 레거시 {% data variables.product.prodname_dependabot %} 경고에 대한 링크로 이동하면 해당 종속 패키지 및 매니페스트에 대한 취약성을 표시하도록 필터링된 {% data variables.product.prodname_dependabot_alerts %} 탭으로 리디렉션됩니다.

![레거시 {% data variables.product.prodname_dependabot %} 경고로 이동하지 못하도록 필터링된 경고를 보여 주는 {% data variables.product.prodname_dependabot_alerts %} 탭의 스크린샷](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

{% data variables.product.prodname_dotcom %}의 {% data variables.product.prodname_dependabot_alerts %} 개수는 종속성 수가 아닌 취약성 수인 경고 수에 대한 합계를 보여 줍니다.

**확인:** 표시되는 합계가 불일치하는 경우 경고 번호와 종속성 번호를 비교하고 있는 것은 아닌지 확인합니다. 또한 필터링된 경고의 하위 집합이 아닌 모든 경고를 보고 있는지 확인합니다.
{% endif %}

{% ifversion fpt or ghec or ghes %}
## Dependabot이 특정 종속성을 무시할 수 있나요?

구성 파일에서 특정 종속성을 무시하도록 {% data variables.product.prodname_dependabot %}을 구성하여 해당 종속성에 대한 보안 및 버전 업데이트를 방지할 수 있습니다. 보안 업데이트만 사용하려는 경우 구성 파일로 기본 동작을 재정의해야 합니다. 버전 업데이트 활성화를 방지하는 방법에 대한 자세한 내용은 "[구성 파일을 사용하여 기본 동작 재정의](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file)"를 참조하세요. 종속성을 무시하는 방법에 대한 자세한 내용은 "[`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)"를 참조하세요. {% endif %}

## 추가 참고 자료

- “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”
- “[{% data variables.product.prodname_dependabot_alerts %} 보기 및 업데이트](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”
- “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”
- "[종속성 그래프 문제 해결](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"{% ifversion fpt or ghec or ghes %}
- “[{% data variables.product.prodname_dependabot %} 오류 문제 해결](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)”{% endif %}

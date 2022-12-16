---
title: Dependabot 경고 보기 및 업데이트
intro: '{% data variables.product.product_name %}가 프로젝트에서 안전하지 않은 종속성을 검색하는 경우 리포지토리의 Dependabot 경고 탭에서 세부 정보를 볼 수 있습니다. 그런 다음, 프로젝트를 업데이트하여 경고를 해결하거나 해제할 수 있습니다.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 8bf53452bd6518f5525d67994f3e6711ef33de0d
ms.sourcegitcommit: 7e2b5213fd15d91222725ecab5ee28cef378d3ad
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185553'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

리포지토리의 {% data variables.product.prodname_dependabot_alerts %} 탭에는 열려 있고 닫힌 모든 {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes %} 및 해당 {% data variables.product.prodname_dependabot_security_updates %}{% endif %}이(가) 나열됩니다. {% ifversion fpt or ghec or ghes > 3.4 또는 ghae > 3.4 %}는 패키지, 에코시스템 또는 매니페스트별로 경고를 필터링할 수 있습니다. {% endif %} 경고 목록을 정렬할 수 있으며, 특정 경고를 클릭하여 세부 정보를 확인할 수 있습니다. {% ifversion dependabot-bulk-alerts %}경고를 하나씩 또는 한 번에 여러 개씩 선택하여 해제하거나 다시 열 수도 있습니다.{% else %}경고를 해제하거나 다시 열 수도 있습니다. {% endif %} 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”를 참조하세요. 

{% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dependabot_alerts %} 및 종속성 그래프를 사용하는 모든 리포지토리에 대해 자동 보안 업데이트를 사용하도록 설정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 정보](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)”를 참조하세요.
{% endif %}

{% ifversion fpt or ghec or ghes %}
## 리포지토리의 취약한 종속성에 대한 업데이트 정보

{% data variables.product.product_name %}은 코드베이스에서 알려진 보안 위험이 있는 종속성을 사용하고 있음을 감지하면 {% data variables.product.prodname_dependabot_alerts %}를 생성합니다. {% data variables.product.prodname_dependabot_security_updates %}가 사용하도록 설정된 리포지토리의 경우 {% data variables.product.product_name %}이 기본 분기에서 취약한 종속성을 감지하면 {% data variables.product.prodname_dependabot %}에서 이를 해결하기 위한 끌어오기 요청을 만듭니다. 끌어오기 요청은 취약성을 방지하는 데 필요한 최소한의 보안 버전으로 종속성을 업그레이드합니다.

각 {% data variables.product.prodname_dependabot %} 경고에는 고유한 숫자 식별자가 있으며, {% data variables.product.prodname_dependabot_alerts %} 탭에는 검색된 모든 취약성에 대한 경고가 나열됩니다. 레거시 {% data variables.product.prodname_dependabot_alerts %}는 취약성을 종속성별로 그룹화하고 단일 경고를 종속성별로 생성했습니다. 레거시 {% data variables.product.prodname_dependabot %} 경고로 이동하면 해당 패키지에 대해 필터링된 {% data variables.product.prodname_dependabot_alerts %} 탭으로 리디렉션됩니다. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} 사용자 인터페이스에서 사용할 수 있는 다양한 필터 및 정렬 옵션을 사용하여 {% data variables.product.prodname_dependabot_alerts %}을 필터링하고 정렬할 수 있습니다. 자세한 내용은 아래에서 “[{% data variables.product.prodname_dependabot_alerts %} 우선 순위 지정](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)”을 참조하세요.

## {% data variables.product.prodname_dependabot_alerts %} 우선 순위 지정

{% data variables.product.company_short %}를 사용하면 {% data variables.product.prodname_dependabot_alerts %}를 수정하는 데 우선 순위를 지정할 수 있습니다. {% ifversion dependabot-most-important-sort-option %} 기본적으로 {% data variables.product.prodname_dependabot_alerts %}는 중요도별로 정렬됩니다. “가장 중요한” 정렬 순서는 우선 순위에 집중할 {% data variables.product.prodname_dependabot_alerts %}의 우선 순위를 지정하는 데 도움이 됩니다. 경고는 잠재적 영향, 실행 가능성, 관련성에 따라 순위가 매겨집니다. 우선 순위 계산은 지속적으로 개선되고 있으며 CVSS 점수, 종속성 범위, 경고에 대한 취약한 함수 호출을 찾을 수 있는지 여부와 같은 요소를 포함합니다.

![“가장 중요한” 정렬이 있는 정렬 드롭다운 스크린샷](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png) {% endif %}

{% data reusables.dependabot.dependabot-alerts-filters %}

검색 창을 통해 사용할 수 있는 필터 외에도 경고 목록 맨 위에 있는 드롭다운 메뉴를 사용하여 {% data variables.product.prodname_dependabot_alerts %}를 정렬하고 필터링할 수 있습니다. 또한 검색 창을 사용하면 경고 및 관련 보안 권고를 전체 텍스트로 검색할 수 있습니다. 보안 권고 이름 또는 설명의 일부를 검색하여 해당 보안 권고와 관련된 리포지토리의 경고를 반환할 수 있습니다. 예를 들어 `yaml.load() API could execute arbitrary code`를 검색하면 검색 문자열이 권고 설명에 표시될 때 “[PyYAML에서 임의 코드 실행으로 이어지는 YAML 문자열을 안전하지 않게 역직렬화](https://github.com/advisories/GHSA-rprw-h62v-c2w7)”에 연결된 {% data variables.product.prodname_dependabot_alerts %}가 반환됩니다.

{% endif %}

{% ifversion dependabot-bulk-alerts %} ![{% data variables.product.prodname_dependabot_alerts %} 탭의 필터 및 정렬 메뉴 스크린샷](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% elsif ghes = 3.5 %} 목록 맨 위에 있는 드롭다운 메뉴에서 필터를 선택한 다음 적용할 필터를 클릭할 수 있습니다.
   ![{% data variables.product.prodname_dependabot_alerts %} 탭의 필터 및 정렬 메뉴에 대한 스크린샷](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}

{% ifversion dependabot-alerts-development-label %}
## 종속성 범위에 대해 지원되는 에코시스템 및 매니페스트

{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

개발 종속성으로 나열된 패키지에 대한 경고는 {% data variables.product.prodname_dependabot_alerts %} 페이지에 `Development` 레이블로 표시되며 `scope` 필터를 통해 필터링할 수도 있습니다.

![경고 목록의 “개발” 레이블을 보여 주는 스크린샷](/assets/images/help/repository/dependabot-alerts-development-label.png)

개발 범위 패키지에 대한 경고의 경고 세부 정보 페이지에는 `Development` 레이블이 포함된 “태그” 섹션이 표시됩니다.

![경고 세부 정보 페이지의 “태그” 섹션을 보여 주는 스크린샷](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## 취약한 함수에 대한 호출 검색 정보

{% data reusables.dependabot.vulnerable-calls-beta %}

{% data variables.product.prodname_dependabot %}에서 리포지토리가 취약한 종속성을 사용한다고 알려주면 취약한 함수 및 이를 사용하는지 여부를 확인해야 합니다. 이 정보가 있으면 종속성의 보안 버전으로 업그레이드해야 하는 긴급도를 결정할 수 있습니다. 

지원되는 언어의 경우 {% data variables.product.prodname_dependabot %}에서 취약한 함수를 사용하는지 여부를 자동으로 검색하고 영향을 받는 경고에 "취약한 호출"이라는 레이블을 추가합니다. {% data variables.product.prodname_dependabot_alerts %} 보기에서 이 정보를 사용하여 수정 작업을 더 효과적으로 심사하고 우선 순위를 지정할 수 있습니다.

{% note %}

**참고:** 베타 릴리스 동안 이 함수는 2022년 4월 14일 *이후* 에 만든 새 Python 권고 및 이전 Python 권고의 하위 집합에만 사용할 수 있습니다. {% data variables.product.prodname_dotcom %}은 롤링 기준으로 추가된 추가 이전 Python 권고에서 데이터를 백필하기 위해 노력하고 있습니다. 취약한 호출은 {% data variables.product.prodname_dependabot_alerts %} 페이지에서만 강조 표시됩니다.

{% endnote %}

!["취약한 호출" 레이블이 있는 경고를 보여 주는 스크린샷](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

{% data variables.product.prodname_dependabot %}에서 검색 필드의 `has:vulnerable-calls` 필터를 사용하여 취약한 함수에 대한 하나 이상의 호출을 감지한 경고만 표시하도록 보기를 필터링할 수 있습니다.

취약한 호출이 감지된 경고의 경우 경고 세부 정보 페이지에 다음과 같은 추가 정보가 표시됩니다.

- 함수가 사용되는 위치를 보여 주는 하나 이상의 코드 블록
- 함수가 호출되는 줄에 대한 링크와 함께 함수 자체를 나열하는 주석

!["취약한 호출" 레이블이 있는 경고에 대한 경고 세부 정보 페이지를 보여 주는 스크린샷](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

자세한 내용은 아래의 “[경고 검토 및 수정](#reviewing-and-fixing-alerts)”을 참조하세요.

{% endif %}

## {% data variables.product.prodname_dependabot_alerts %} 보기

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. 필요에 따라 경고를 필터링하려면 드롭다운 메뉴에서 필터를 선택한 다음, 적용하려는 필터를 클릭합니다. 검색 창에서 필터를 입력할 수도 있습니다. 경고 필터링 및 정렬에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 우선 순위 지정](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)”을 참조하세요.
{%- ifversion dependabot-bulk-alerts %} ![{% data variables.product.prodname_dependabot_alerts %} 탭의 필터 및 정렬 메뉴 스크린샷](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %} ![{% data variables.product.prodname_dependabot_alerts %} 탭의 필터 및 정렬 메뉴 스크린샷](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. 보려는 경고를 클릭합니다.{% ifversion dependabot-bulk-alerts %} ![경고 목록에서 선택한 경고](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %} ![경고 목록에서 선택한 경고](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. 보려는 경고를 클릭합니다.
  ![경고 목록에서 선택한 경고](/assets/images/help/graphs/click-alert-in-alerts-list.png) {% endif %}

## 경고 검토 및 수정

모든 종속성에서 보안 약점을 제거해야 합니다. {% data variables.product.prodname_dependabot %}에서 종속성의 취약성{% ifversion GH-advisory-db-supports-malware %}또는 맬웨어{% endif %}를 검색하는 경우 프로젝트의 노출 수준을 평가하고 애플리케이션을 보호하기 위해 수행할 수정 단계를 결정해야 합니다.

종속성의 패치된 버전을 사용할 수 있는 경우 {% data variables.product.prodname_dependabot %} 경고에서 이 종속성을 직접 업데이트하는 {% data variables.product.prodname_dependabot %} 끌어오기 요청을 생성할 수 있습니다. {% data variables.product.prodname_dependabot_security_updates %}가 사용하도록 설정된 경우 끌어오기 요청이 Dependabot 경고에 연결될 수 있습니다. 

패치된 버전을 사용할 수 없거나 보안 버전으로 업데이트할 수 없는 경우 {% data variables.product.prodname_dependabot %}에서 다음 단계를 결정하는 데 도움이 되는 추가 정보를 공유합니다. {% data variables.product.prodname_dependabot %} 경고를 보기 위해 클릭하면 영향을 받는 함수를 포함하여 종속성에 대한 보안 권고의 전체 세부 정보를 볼 수 있습니다. 그러면 코드에서 영향을 받는 함수를 호출하는지 여부를 확인할 수 있습니다. 이 정보는 위험 수준을 추가로 평가하고, 해결 방법을 결정하거나 보안 권고에서 나타내는 위험을 허용할 수 있는지 여부를 결정하는 데 도움이 될 수 있습니다.

{% ifversion dependabot-alerts-vulnerable-calls %}

지원되는 언어의 경우 {% data variables.product.prodname_dependabot %}에서 취약한 함수에 대한 호출을 검색합니다. "취약한 호출"로 레이블이 지정된 경고를 보는 경우 세부 정보에는 함수 이름 및 해당 함수를 호출하는 코드에 대한 링크가 포함되어 있습니다. 더 자세히 살펴보지 않고도 이 정보를 기반으로 하여 결정할 수 있는 경우가 많습니다.

{% endif %}

### 취약한 종속성 수정

1. 경고에 대한 세부 정보를 봅니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 보기](#viewing-dependabot-alerts)”(위 항목)를 참조하세요.
{% ifversion fpt or ghec or ghes %}
1. {% data variables.product.prodname_dependabot_security_updates %}가 사용하도록 설정된 경우 종속성을 수정하는 끌어오기 요청에 대한 링크가 있을 수 있습니다. 또는 경고 세부 정보 페이지의 위쪽에서 **{% data variables.product.prodname_dependabot %} 보안 업데이트 만들기** 를 클릭하여 끌어오기 요청을 만들 수 있습니다.
  ![{% data variables.product.prodname_dependabot %} 보안 업데이트 단추 만들기](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. 필요에 따라 {% data variables.product.prodname_dependabot_security_updates %}를 사용하지 않는 경우 페이지의 정보를 사용하여 업그레이드할 종속성 버전을 결정하고 해당 종속성을 보안 버전으로 업데이트하는 끌어오기 요청을 만들 수 있습니다.
{% elsif ghae %}
1. 페이지의 정보를 사용하여 업그레이드할 종속성 버전을 결정하고 매니페스트 또는 잠금 파일에 대한 끌어오기 요청을 보안 버전으로 만들 수 있습니다.
{% endif %}
1. 종속성을 업데이트하고 취약성을 해결할 준비가 되면 끌어오기 요청을 병합합니다. 

{% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dependabot %}에서 발생한 각 끌어오기 요청에는 {% data variables.product.prodname_dependabot %}을(를) 제어하는 데 사용할 수 있는 명령에 대한 정보가 포함되어 있습니다. 자세한 내용은 "[종속성 업데이트에 대한 끌어오기 요청 관리](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)"를 참조하세요.
{% endif %}

## {% data variables.product.prodname_dependabot_alerts %} 해제

{% tip %}

**팁:** 열려 있는 경고만 해제할 수 있습니다.
{% endtip %}

종속성을 업그레이드하기 위해 광범위한 작업을 예약하거나 경고를 수정할 필요가 없다고 결정한 경우 경고를 해제할 수 있습니다. 이미 평가한 경고를 해제하면 새 경고가 표시될 때 더 쉽게 심사할 수 있습니다.

1. 경고에 대한 세부 정보를 봅니다. 자세한 내용은 "[취약한 종속성 보기](#viewing-dependabot-alerts)"(위)를 참조하세요.
1. “해제” 드롭다운을 선택하고 경고를 해제하는 이유를 클릭합니다.{% ifversion reopen-dependabot-alerts %} 해제된 미해결 경고는 나중에 다시 열 수 있습니다.{% endif %} {% ifversion dependabot-alerts-dismissal-comment %}1. 필요에 따라 해제 설명을 추가합니다. 해제 설명은 경고 타임라인에 추가되며 감사 및 보고 중에 근거로 사용할 수 있습니다. GraphQL API를 사용하여 설명을 검색하거나 설정할 수 있습니다. 설명은 `dismissComment` 필드에 포함됩니다. 자세한 내용은 GraphQL API 설명서의 “[{% data variables.product.prodname_dependabot_alerts %}](/graphql/reference/objects#repositoryvulnerabilityalert)”를 참조하세요.
![해제 설명을 추가하는 옵션과 함께 “해제” 드롭다운을 통해 경고를 해제하는 방법을 보여 주는 스크린샷](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)
1. **경고 해제** 를 클릭합니다.
{% else %} ![“해제” 드롭다운을 통해 경고를 해제하는 이유 선택](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png){% endif %} {% ifversion dependabot-bulk-alerts %}

### 여러 경고를 한꺼번에 해제

1. 열려 있는 {% data variables.product.prodname_dependabot_alerts %}를 봅니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 보기](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)”를 참조하세요.
2. 필요에 따라 드롭다운 메뉴를 선택한 다음, 적용하려는 필터를 클릭하여 경고 목록을 필터링합니다. 검색 창에서 필터를 입력할 수도 있습니다.
3. 각 경고 타이틀의 왼쪽에서 해제할 경고를 선택합니다.
   ![확인란이 강조 표시된 열린 경고의 스크린샷](/assets/images/help/graphs/select-multiple-alerts.png)
4. 필요에 따라 경고 목록의 맨 위에서 페이지의 모든 경고를 선택합니다.
   ![열려 있는 모든 경고가 선택된 스크린샷](/assets/images/help/graphs/select-all-alerts.png)
5. “경고 해제” 드롭다운을 선택하고 경고를 해제하는 이유를 클릭합니다.
   ![“경고 해제” 드롭다운이 강조 표시된 열린 경고 페이지의 스크린샷](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## 종료된 경고 보기 및 업데이트

열려 있는 모든 경고를 볼 수 있으며 이전에 해제된 경고를 다시 열 수 있습니다. 이미 수정된 닫힌 경고는 다시 열 수 없습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. 종료된 경고만 보려면 **종료됨** 을 클릭합니다.

   {%- ifversion dependabot-bulk-alerts %} ![“닫힘” 옵션을 보여 주는 스크린샷](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png) {%- else %} ![“닫힘” 옵션을 보여 주는 스크린샷](/assets/images/help/repository/dependabot-alerts-closed.png) {%- endif %}
1. 보거나 업데이트하려는 경고를 클릭합니다.

   {%- ifversion dependabot-bulk-alerts %} ![강조 표시된 dependabot 경고를 보여 주는 스크린샷](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png) {%- else %} ![강조 표시된 dependabot 경고를 보여 주는 스크린샷](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)   {%- endif %}
2. 필요에 따라 경고가 해제되었지만 이를 다시 열려는 경우 **다시 열기** 를 클릭합니다. 이미 해결된 경고는 다시 열 수 없습니다.

   {% indented_data_reference reusables.enterprise.3-5-missing-feature spaces=3 %} !["다시 열기" 단추를 보여 주는 스크린샷](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### 여러 경고를 한꺼번에 다시 열기

1. 닫힌 {% data variables.product.prodname_dependabot_alerts %}를 봅니다. 자세한 내용은 “[닫힌 경고 보기 및 업데이트](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)”(위)를 참조하세요.
2. 각 경고 제목 왼쪽에서 다시 열 경고를 선택합니다.
   ![확인란이 강조 표시된 닫힌 경고의 스크린샷](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. 필요에 따라 경고 목록의 맨 위에서 페이지의 모든 닫힌 경고를 선택합니다.
   ![모든 경고가 선택된 닫힌 경고의 스크린샷](/assets/images/help/graphs/select-all-closed-alerts.png)
4. 경고를 다시 열려면 **다시 열기** 를 클릭합니다. 이미 해결된 경고는 다시 열 수 없습니다.
   ![“다시 열기” 단추가 강조 표시된 닫힌 경고의 스크린샷](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}

 
## {% data variables.product.prodname_dependabot_alerts %}에 대한 감사 로그 검토

조직의 구성원 {% ifversion not fpt %}또는 엔터프라이즈 {% endif %}이(가) {% data variables.product.prodname_dependabot_alerts %}과 관련된 작업을 수행하는 경우 감사 로그에서 작업을 검토할 수 있습니다. 로그에 액세스하는 방법에 대한 자세한 내용은 "[조직의 감사 로그 검토](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log){% ifversion not fpt %}" 및 "[엔터프라이즈의 감사 로그 액세스](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)"를 참조하세요. {% else %}." {% endif %} {% ifversion dependabot-alerts-audit-log %}

![Dependabot 경고를 보여 주는 감사 로그의 스크린샷](/assets/images/help/dependabot/audit-log-UI-dependabot-alert.png){% endif %}

{% data variables.product.prodname_dependabot_alerts %}에 대한 감사 로그의 이벤트에는 누가 작업을 수행했는지, 어떤 작업을 수행했는지, 작업이 수행된 시기와 같은 세부 정보가 포함됩니다. {% ifversion dependabot-alerts-audit-log %} 이벤트에는 경고 자체에 대한 링크도 포함됩니다. 조직의 구성원이 경고를 해제하면 이벤트에 해고 이유와 설명이 표시됩니다. {% endif %} {% data variables.product.prodname_dependabot_alerts %} 작업에 대한 자세한 내용은 "[조직의 감사 로그 검토](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions){% ifversion not fpt %}" 및 "[엔터프라이즈에 대한 감사 로그 이벤트](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert-category-actions)"의 범주를 참조 `repository_vulnerability_alert` 하세요. {% else %}." {% endif %}

---
title: Dependabot 오류 문제 해결
intro: '{% data variables.product.prodname_dependabot %}에서 종속성을 업데이트하기 위한 끌어오기 요청을 발생하지 못하는 경우가 있습니다. 오류를 검토하고 {% data variables.product.prodname_dependabot %}의 차단을 해제할 수 있습니다.'
shortTitle: Troubleshoot errors
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Pull requests
  - Troubleshooting
  - Errors
  - Dependencies
ms.openlocfilehash: 21b7c2b2e6c613d4443b54404dfc120bd8ac00e2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109798'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %} 오류 정보

{% data reusables.dependabot.pull-request-introduction %}

{% data variables.product.prodname_dependabot %}이 끌어오기 요청을 발생하지 못하도록 방지하는 것이 있으면 오류로 보고됩니다.

## {% data variables.product.prodname_dependabot_security_updates %} 오류 조사

{% data variables.product.prodname_dependabot %}이 {% data variables.product.prodname_dependabot %} 경고를 수정하기 위한 끌어오기 요청을 만들지 못하도록 차단되면 경고에 오류 메시지를 게시합니다. {% data variables.product.prodname_dependabot_alerts %} 보기에는 아직 확인되지 않은 경고 목록이 표시됩니다. 경고 보기에 액세스하려면 리포지토리의 **보안** 탭에서 **{% data variables.product.prodname_dependabot_alerts %}** 를 클릭합니다. 취약한 종속성을 수정할 끌어오기 요청이 생성된 경우 경고에는 해당 끌어오기 요청에 대한 링크가 포함됩니다.

![끌어오기 요청 링크를 보여 주는 {% data variables.product.prodname_dependabot_alerts %} 보기](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

경고에 끌어오기 요청 링크가 없는 여러 가지 이유가 있습니다.

1. {% data variables.product.prodname_dependabot_security_updates %}가 리포지토리에 대해 사용하도록 설정되지 않았습니다.
{% ifversion GH-advisory-db-supports-malware %}
1. 경고는 맬웨어에 대한 것이며 패키지의 보안 버전이 없습니다.
{% endif %}
1. 경고는 잠금 파일에 명시적으로 정의되지 않은 간접 또는 전이적 종속성에 대한 것입니다.
1. {% data variables.product.prodname_dependabot %}이 끌어오기 요청을 만들지 못하도록 차단하는 오류가 발생했습니다.

오류로 인해 {% data variables.product.prodname_dependabot %}이 끌어오기 요청을 만들지 못하게 차단된 경우 경고를 클릭하여 오류의 세부 정보를 표시할 수 있습니다.

## {% data variables.product.prodname_dependabot_version_updates %}로 오류 조사

{% data variables.product.prodname_dependabot %}이 에코시스템에서 종속성을 업데이트하기 위한 끌어오기 요청을 만들지 못하도록 차단되면 매니페스트 파일에 오류 아이콘이 게시됩니다. {% data variables.product.prodname_dependabot %}에서 관리하는 매니페스트 파일이 {% data variables.product.prodname_dependabot %} 탭에 나열됩니다. 이 탭에 액세스하려면 리포지토리의 **인사이트** 탭에서 **종속성 그래프** 를 클릭한 다음 **{% data variables.product.prodname_dependabot %}** 탭을 클릭합니다.

![오류를 표시하는 {% data variables.product.prodname_dependabot %} 보기](/assets/images/help/dependabot/dependabot-tab-view-error.png)

{% ifversion fpt or ghec %}

매니페스트 파일에 대한 로그 파일을 보려면 **마지막으로 확인한 시간 전** 링크를 클릭합니다. 오류 기호(예: 위 스크린샷의 Maven)와 함께 표시되는 매니페스트의 로그 파일을 표시하면 오류도 표시됩니다.

![{% data variables.product.prodname_dependabot %} 버전 업데이트 오류 및 로그 ](/assets/images/help/dependabot/dependabot-version-update-error.png)

{% else %}

매니페스트 파일에 대한 로그를 보려면 **마지막으로 확인한 시간 전** 링크를 클릭한 다음 **로그 보기** 를 클릭합니다.

![{% data variables.product.prodname_dependabot %} 버전 업데이트 오류 및 로그 ](/assets/images/enterprise/3.3/dependabot/dependabot-version-update-error.png)

{% endif %}

## {% data variables.product.prodname_dependabot %} 오류 이해

보안 업데이트에 대한 끌어오기 요청은 취약성에 대한 수정 사항을 포함하는 최소 버전으로 취약한 종속성을 업그레이드하는 역할을 합니다. 반면 버전 업데이트에 대한 끌어오기 요청은 패키지 매니페스트 및 {% data variables.product.prodname_dependabot %} 구성 파일에서 허용하는 최신 버전으로 종속성을 업그레이드하는 역할을 합니다. 따라서 일부 오류는 한 가지 유형의 업데이트와 관련이 있습니다.

### {% data variables.product.prodname_dependabot %}은 종속성을 취약하지 않은 버전으로 업데이트할 수 없습니다.

**보안 업데이트(전용)** . {% data variables.product.prodname_dependabot %}은 이 리포지토리에 대한 종속성 그래프의 다른 종속성을 중단하지 않고 취약한 종속성을 보안 버전으로 업데이트하는 끌어오기 요청을 만들 수 없습니다.

종속성이 있는 모든 애플리케이션에는 종속성 그래프, 즉 애플리케이션이 직접 또는 간접적으로 의존하는 모든 패키지 버전의 방향성 비순환 그래프가 있습니다. 종속성이 업데이트될 때마다 이 그래프는 애플리케이션이 빌드되지 않는지 확인해야 합니다. 에코시스템에 깊고 복잡한 종속성 그래프(예: npm 및 RubyGems)가 있는 경우 전체 에코시스템을 업그레이드하지 않고 단일 종속성을 업그레이드하는 것은 불가능한 경우가 많습니다.

이 문제를 방지하는 가장 좋은 방법은 버전 업데이트를 사용하도록 설정하여 가장 최근에 릴리스된 버전으로 최신 상태를 유지하는 것입니다. 이렇게 하면 종속성 그래프를 중단하지 않는 간단한 업그레이드를 통해 하나의 종속성의 취약성을 해결할 가능성이 커집니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 버전 업데이트 구성](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”을 참조하세요.{% ifversion dependabot-security-updates-unlock-transitive-dependencies %}

### {% data variables.product.prodname_dependabot %}이 경고 없이 종속성을 업데이트하려고 시도합니다.

**보안 업데이트(전용)** . {% data variables.product.prodname_dependabot %}이 모든 에코시스템에 취약한 명시적으로 정의된 전이적 종속성을 업데이트합니다. npm의 경우 {% data variables.product.prodname_dependabot %}이 전이적 종속성을 수정하는 유일한 방법이라면 부모 종속성을 업데이트하는 끌어오기 요청을 수행합니다.

예를 들어 `1.0.1`에 대해 확인된 `B` 버전 `~1.0.0`에 대한 전이적 종속성이 있는 `A` 버전 `~2.0.0`에 대해 종속성이 있는 프로젝트.
```
my project
|
--> A (2.0.0) [~2.0.0]
       |
       --> B (1.0.1) [~1.0.0]
```       
`B` 버전 `<2.0.0`에 대한 보안 취약성이 릴리스되고 `2.0.0`에서 패치를 사용할 수 있는 경우 {% data variables.product.prodname_dependabot %}은 `B`의 업데이트를 시도하지만 더 낮은 취약한 버전만 허용하는 `A`의 제약으로 인해 불가능합니다. 취약성을 해결하기 위해 {% data variables.product.prodname_dependabot %}은 `B`의 고정 버전을 허용하는 종속성 `A`에 대한 업데이트를 찾습니다. 

{% data variables.product.prodname_dependabot %}은 잠긴 부모 및 자식 전이적 종속성을 모두 업그레이드하는 끌어오기 요청을 자동으로 만듭니다.{% endif %}

### 최신 버전에 대해 열려 있는 끌어오기 요청이 이미 있으므로 {% data variables.product.prodname_dependabot %}을 필요한 버전으로 업데이트할 수 없습니다.

**보안 업데이트(전용)** . 이 종속성을 업데이트하기 위해 열려 있는 끌어오기 요청이 이미 있으므로 {% data variables.product.prodname_dependabot %}은 취약한 종속성을 보안 버전으로 업데이트하는 끌어오기 요청을 만들지 않습니다. 단일 종속성에서 취약성이 검색되고 종속성을 최신 버전으로 업데이트하기 위한 끌어오기 요청이 이미 열려 있으면 이 오류가 표시됩니다.

두 가지 옵션이 있습니다. 열려 있는 끌어오기 요청을 검토하고 변경 내용이 안전하다고 확신하는 즉시 병합하거나 끌어오기 요청을 닫고 새 보안 업데이트 끌어오기 요청을 트리거할 수 있습니다. 자세한 내용은 “[수동으로 {% data variables.product.prodname_dependabot %} 끌어오기 요청 트리거](#triggering-a-dependabot-pull-request-manually)”를 참조하세요.

### 업데이트하는 동안 {% data variables.product.prodname_dependabot %}이 시간 초과됨

{% data variables.product.prodname_dependabot %}은 필요한 업데이트를 평가하고 끌어오기 요청을 준비하는 데 허용되는 최대 시간보다 오래 걸렸습니다. 이 오류는 일반적으로 많은 매니페스트 파일이 있는 큰 리포지토리(예: 수백 개의 *package.json* 파일이 있는 npm 또는 yarn monorepo 프로젝트)에서만 표시됩니다. 또한 Composer 에코시스템에 대한 업데이트는 평가하는 데 더 오래 걸리며 시간이 초과될 수 있습니다.

이 오류는 해결하기 어렵습니다. 버전 업데이트 시간이 초과되면 `allow` 매개 변수를 사용하여 업데이트할 가장 중요한 종속성을 지정하거나 `ignore` 매개 변수를 사용하여 업데이트에서 일부 종속성을 제외할 수 있습니다. 구성을 업데이트하면 {% data variables.product.prodname_dependabot %}에서 버전 업데이트를 검토하고 사용 가능한 시간에 끌어오기 요청을 생성할 수 있습니다.

보안 업데이트 시간이 초과되는 경우 버전 업데이트를 사용하도록 설정하여 종속성을 업데이트된 상태로 유지하여 이러한 일이 발생할 가능성을 줄일 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 버전 업데이트 구성](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”을 참조하세요.

### {% data variables.product.prodname_dependabot %}은 더 이상 끌어오기 요청을 열 수 없습니다.

{% data variables.product.prodname_dependabot %}에서 생성할 열려 있는 끌어오기 요청 수에는 제한이 있습니다. 이 제한에 도달하면 새 끌어오기 요청이 열리지 않으며 이 오류가 보고됩니다. 이 오류를 해결하는 가장 좋은 방법은 열려 있는 끌어오기 요청 중 일부를 검토하고 병합하는 것입니다.

열려 있는 버전 업데이트 끌어오기 요청이 보안 업데이트 끌어오기 요청 생성을 차단할 수 없도록 보안 및 버전 업데이트 끌어오기 요청에 대한 별도의 제한이 있습니다. 보안 업데이트 끌어오기 요청에 대한 제한은 10입니다. 버전 업데이트 제한의 기본값은 5지만 구성 파일의 `open-pull-requests-limit` 매개 변수를 사용하여 변경할 수 있습니다. 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)”을 참조하세요.

이 오류를 해결하는 가장 좋은 방법은 기존 끌어오기 요청 중 일부를 병합하거나 닫고 새 끌어오기 요청을 수동으로 트리거하는 것입니다. 자세한 내용은 “[수동으로 {% data variables.product.prodname_dependabot %} 끌어오기 요청 트리거](#triggering-a-dependabot-pull-request-manually)”를 참조하세요.

### {% data variables.product.prodname_dependabot %}이 종속성을 확인하거나 액세스할 수 없음

{% data variables.product.prodname_dependabot %}이 리포지토리에서 종속성 참조를 업데이트해야 하는지 여부를 확인하려고 하지만 하나 이상의 참조된 파일에 액세스할 수 없는 경우 “{% data variables.product.prodname_dependabot %}에서 언어 종속성 파일을 확인할 수 없습니다.”라는 오류 메시지와 함께 작업이 실패합니다. API 오류 유형은 `git_dependencies_not_reachable`입니다.

마찬가지로 {% data variables.product.prodname_dependabot %}이 종속성이 있는 프라이빗 패키지 레지스트리에 액세스할 수 없는 경우 다음 오류 중 하나가 생성됩니다.

*   “Dependabot은 프라이빗 패키지 레지스트리의 종속성에 도달할 수 없음”<br>
   (API 오류 유형: `private_source_not_reachable`)
*   “Dependabot은 프라이빗 패키지 레지스트리에 인증할 수 없음”<br>
   (API 오류 유형: `private_source_authentication_failure`)
*   “프라이빗 패키지 레지스트리를 기다리는 동안 Dependabot의 시간이 초과됨”<br>
   (API 오류 유형: `private_source_timed_out`)
*   “Dependabot에서 프라이빗 패키지 레지스트리에 대한 인증서의 유효성을 검사할 수 없음”<br>
   (API 오류 유형: `private_source_certificate_failure`)

{% data variables.product.prodname_dependabot %}이 종속성 참조를 성공적으로 업데이트할 수 있도록 하려면 참조된 모든 종속성이 액세스 가능한 위치에서 호스트되는지 확인합니다. 

**버전 업데이트(전용).** {% data reusables.dependabot.private-dependencies-note %} 또한 {% data variables.product.prodname_dependabot %}은 모든 패키지 관리자에 대한 프라이빗 {% data variables.product.prodname_dotcom %} 종속성을 지원하지 않습니다. 자세한 내용은 “[Dependabot 버전 업데이트 정보](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)”를 참조하세요.

## 수동으로 {% data variables.product.prodname_dependabot %} 끌어오기 요청 트리거

{% data variables.product.prodname_dependabot %}의 차단을 해제하는 경우 끌어오기 요청을 만들려는 새 시도를 수동으로 트리거할 수 있습니다.

- **보안 업데이트** - 수정한 오류를 보여 주는 {% data variables.product.prodname_dependabot %} 경고를 표시하고 **{% data variables.product.prodname_dependabot %} 보안 업데이트 만들기** 를 클릭합니다.
- **버전 업데이트** - 리포지토리의 **인사이트** 탭에서 **종속성 그래프** 를 클릭한 다음 **Dependabot** 탭을 클릭합니다. **마지막으로 확인한 시간 전** 을 클릭하면 버전 업데이트에 대한 마지막 확인 중에 {% data variables.product.prodname_dependabot %}이 생성된 로그 파일을 볼 수 있습니다. **업데이트 확인** 을 클릭합니다.

## 추가 참고 자료

- “[종속성 그래프 문제 해결](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)”
- “[취약한 종속성 검색 문제 해결](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)”

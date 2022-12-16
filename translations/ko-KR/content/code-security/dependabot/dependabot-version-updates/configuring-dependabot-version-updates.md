---
title: Dependabot 버전 업데이트 구성
intro: '{% data variables.product.prodname_dependabot %}이 사용하는 패키지를 자동으로 업데이트할 수 있도록 리포지토리를 구성할 수 있습니다.'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure version updates
ms.openlocfilehash: 8513bd41ec86d353241297d2a5bd6111a49fec3d
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135816'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## 종속성에 대한 버전 업데이트 정보

*dependabot.yml* 구성 파일을 리포지토리의 `.github` 디렉터리에 체크 인하여 {% data variables.product.prodname_dependabot_version_updates %}를 사용하도록 설정합니다. 그러면 {% data variables.product.prodname_dependabot %}에서 끌어오기 요청을 생성하여 구성한 종속성을 최신 상태로 유지합니다. 업데이트하려는 각 패키지 관리자의 종속성에 대해 패키지 매니페스트 파일의 위치와 해당 파일에 나열된 종속성의 업데이트를 확인하는 빈도를 지정해야 합니다. 보안 업데이트 사용에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 구성](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”을 참조하세요.

{% data reusables.dependabot.initial-updates %} 자세한 내용은 “[종속성 업데이트 사용자 지정](/github/administering-a-repository/customizing-dependency-updates)”을 참조하세요.

기본적으로 매니페스트에 명시적으로 정의된 직접 종속성만 {% data variables.product.prodname_dependabot_version_updates %}에 의해 최신 상태로 유지됩니다. 잠금 파일에 정의된 간접 종속성에 대한 업데이트를 받도록 선택할 수 있습니다. 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow)”을 참조하세요.

{% data reusables.dependabot.private-dependencies-note %} 또한 {% data variables.product.prodname_dependabot %}은 모든 패키지 관리자에 대한 프라이빗 {% data variables.product.prodname_dotcom %} 종속성을 지원하지 않습니다. 자세한 내용은 “[Dependabot 버전 업데이트 정보](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)” 및 “[{% data variables.product.prodname_dotcom %} 언어 지원](/github/getting-started-with-github/github-language-support)”을 참조하세요.

## {% data variables.product.prodname_dependabot_version_updates %} 사용

*dependabot.yml* 구성 파일을 리포지토리로 커밋하여 {% data variables.product.prodname_dependabot_version_updates %}를 사용하도록 설정합니다. {% ifversion dependabot-settings-update-37 %}설정 페이지에서 기능을 사용하도록 설정하면 GitHub는 편집할 수 있는 기본 파일을 만듭니다. 그렇지 않으면 파일 편집기를 사용하여 파일을 만들 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. “코드 보안 및 분석”에서 “{% data variables.product.prodname_dependabot_version_updates %}” 오른쪽에 있는 **사용** 을 클릭하여 리포지토리의 `.github` 디렉터리에서 기본 *dependabot.yml* 구성 파일을 엽니다.
{% else %}
1. 리포지토리의 `.github` 디렉터리에 *dependabot.yml* 구성 파일을 만듭니다. {% endif %}
1. `version`을 추가합니다. 
1. 필요에 따라 프라이빗 레지스트리에 종속성이 있는 경우 인증 세부 정보가 포함된 `registries` 섹션을 추가합니다. 
1. {% data variables.product.prodname_dependabot %}에서 모니터링할 각 패키지 관리자에 대한 항목이 포함된 `updates` 섹션을 추가합니다.
1. 각 패키지 관리자에 대해 다음을 사용합니다.
    - `package-ecosystem` - 패키지 관리자를 지정합니다.
    - `directory` - 매니페스트 또는 기타 정의 파일의 위치를 지정합니다.
    - `schedule.interval` - 새 버전을 확인하는 빈도를 지정합니다.
{% data reusables.dependabot.check-in-dependabot-yml %}

모든 구성 옵션에 대한 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/github/administering-a-repository/configuration-options-for-dependency-updates)”을 참조하세요.

### 예제 *dependabot.yml* 파일

아래의 예제 *dependabot.yml* 파일은 두 패키지 관리자(npm 및 Docker)에 대한 버전 업데이트를 구성합니다. 이 파일을 체크 인하면 {% data variables.product.prodname_dependabot %}은 기본 분기의 매니페스트 파일에서 오래된 종속성을 확인합니다. 오래된 종속성이 발견되면 기본 분기에 대한 끌어오기 요청이 발생하여 종속성을 업데이트합니다.

```yaml
# Basic dependabot.yml file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
```

위의 예제에서 Docker 종속성이 매우 오래된 경우 종속성이 최신 상태가 될 때까지 `daily` 일정으로 시작한 다음, 주별 일정으로 다시 줄일 수 있습니다.

### 포크에서 버전 업데이트 사용

포크에서 버전 업데이트를 사용하도록 설정하려는 경우 추가 단계가 있습니다. *dependabot.yml* 구성 파일이 있으면 포크에서 버전 업데이트가 자동으로 사용되지 않습니다. 따라서 포크 소유자가 원래 리포지토리에서 *dependabot.yml* 구성 파일을 포함한 변경 내용을 끌어올 때 의도치 않게 버전 업데이트가 사용되는 경우를 방지할 수 있습니다. 

또한 포크에서 {% data variables.product.prodname_dependabot %}을 사용하도록 명시적으로 설정해야 합니다.

{% ifversion dependabot-version-updates-for-for-forks %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. "코드 보안 및 분석"의 "{% data variables.product.prodname_dependabot_version_updates %}" 오른쪽에서 **사용을** 클릭하여 {% data variables.product.prodname_dependabot %}에서 버전 업데이트를 시작하도록 허용합니다.
![포크된 리포지토리에 대한 {% data variables.product.prodname_dependabot_version_updates %} 설정의 스크린샷](/assets/images/help/dependabot/dependabot-version-update-forks.png)

{% else %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
5. “Dependabot 사용”에서 **Dependabot 사용** 을 클릭합니다.

{% endif %}

## 버전 업데이트 상태 확인

버전 업데이트를 사용하도록 설정하면 리포지토리에 대한 종속성 그래프의 **Dependabot** 탭이 채워집니다. 이 탭에는 {% data variables.product.prodname_dependabot %}이 모니터링하도록 구성된 패키지 관리자와 {% data variables.product.prodname_dependabot %}이 새 버전을 마지막으로 확인한 시기가 표시됩니다.

![리포지토리 인사이트 탭, 종속성 그래프, Dependabot 탭](/assets/images/help/dependabot/dependabot-tab-view.png)

자세한 내용은 “[버전 업데이트가 구성된 종속성 나열](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)”을 참조하세요.

## {% data variables.product.prodname_dependabot_version_updates %} 사용 안 함

리포지토리에서 *dependabot.yml* 파일을 삭제하면 버전 업데이트를 완전히 사용하지 않도록 설정할 수 있습니다. 하나 이상의 종속성 또는 패키지 관리자에 대해 업데이트를 일시적으로 사용하지 않도록 설정하는 것이 더 일반적입니다.

- 패키지 관리자: `open-pull-requests-limit: 0`을 설정하거나 구성 파일에서 관련 `package-ecosystem`을 주석으로 처리하여 사용하지 않도록 설정합니다.
- 특정 종속성: 업데이트에서 제외하려는 패키지 또는 애플리케이션에 대해 `ignore` 특성을 추가하여 사용하지 않도록 설정합니다.

종속성을 사용하지 않도록 설정할 때 와일드카드를 사용하여 관련 라이브러리 집합을 찾을 수 있습니다. 제외할 버전을 지정할 수도 있습니다. 이 기능은 라이브러리 업데이트를 차단하여 API에 대한 호환성이 손상되는 변경을 지원하는 작업을 보류해야 하지만 사용하는 버전에 대한 보안 수정을 가져오려는 경우에 특히 유용합니다.

### 일부 종속성에 대해 버전 업데이트를 사용하지 않도록 설정하는 예제

아래의 예제 *dependabot.yml* 파일에는 다른 업데이트는 계속 허용하면서 일부 종속성에 대한 업데이트를 사용하지 않도록 설정하는 다양한 방법의 예제가 포함되어 있습니다.

```yaml
# dependabot.yml file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

기존 무시 기본 설정을 확인하는 방법에 대한 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)”을 참조하세요.

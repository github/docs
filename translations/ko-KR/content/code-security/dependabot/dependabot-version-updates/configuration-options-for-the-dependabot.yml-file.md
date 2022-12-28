---
title: dependabot.yml 파일에 대한 구성 옵션
intro: '{% data variables.product.prodname_dependabot %}이 리포지토리를 유지 관리하는 방법을 사용자 지정하는 데 사용할 수 있는 모든 옵션에 대한 자세한 정보입니다.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
ms.openlocfilehash: 3ec6cddf63b2e2d238baf96ea7d437fcb3c21d3a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147691999'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## *dependabot.yml* 파일 정보

{% data variables.product.prodname_dependabot %} 구성 파일인 *dependabot.yml* 은 YAML 구문을 사용합니다. YAML을 처음 사용하며 자세히 알아보려는 경우 “[5분 안에 YAML 알아보기](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)”를 참조하세요.

리포지토리의 `.github` 디렉터리에 이 파일을 저장해야 합니다. *dependabot.yml* 파일을 추가하거나 업데이트하면 버전 업데이트 즉시 확인이 트리거됩니다. 자세한 내용과 예제는 “[{% data variables.product.prodname_dependabot %} 버전 업데이트 구성](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-dependabot-version-updates)”을 참조하세요.

보안 업데이트에도 영향을 주는 옵션은 다음에 보안 경고로 보안 업데이트 끌어오기 요청이 트리거될 때 사용됩니다.  자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 구성](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)”을 참조하세요.

*dependabot.yml* 파일에는 두 개의 필수 최상위 키인 `version` 및 `updates`가 있습니다. 필요에 따라 최상위 `registries` 키{% ifversion ghes = 3.5 %} 및/또는 `enable-beta-ecosystems` 키{% endif %}를 포함할 수 있습니다. 파일은 `version: 2`로 시작해야 합니다.

## *dependabot.yml* 파일에 대한 구성 옵션

최상위 `updates` 키는 필수입니다. 이 키를 사용하여 {% data variables.product.prodname_dependabot %}이 버전 또는 프로젝트 종속성을 업데이트하는 방법을 구성합니다. 각 항목은 특정 패키지 관리자에 대한 업데이트 설정을 구성합니다. 사용할 수 있는 옵션은 다음과 같습니다.

{% data reusables.dependabot.configuration-options %}

옵션은 광범위하게 다음 범주로 분류됩니다.

- 모든 구성에 포함해야 하는 필수 설정 옵션: [`package-ecosystem`](#package-ecosystem), [`directory`](#directory), [`schedule.interval`](#scheduleinterval)
- 업데이트 일정을 사용자 지정하는 옵션: [`schedule.time`](#scheduletime), [`schedule.timezone`](#scheduletimezone), [`schedule.day`](#scheduleday)
- 업데이트되는 종속성을 제어하는 옵션: [`allow`](#allow), [`ignore`](#ignore), [`vendor`](#vendor)
- 끌어오기 요청에 메타데이터를 추가하는 옵션: [`reviewers`](#reviewers), [`assignees`](#assignees), [`labels`](#labels), [`milestone`](#milestone)
- 끌어오기 요청의 동작을 변경하는 옵션: [`target-branch`](#target-branch), [`versioning-strategy`](#versioning-strategy), [`commit-message`](#commit-message), [`rebase-strategy`](#rebase-strategy), [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator)

또한 [`open-pull-requests-limit`](#open-pull-requests-limit) 옵션은 {% data variables.product.prodname_dependabot %}이 버전 업데이트를 위해 열 수 있는 최대 끌어오기 요청 수를 변경합니다.

{% note %}

**참고:** 일부 구성 옵션은 취약한 패키지 매니페스트의 보안 업데이트에 대해 발생한 끌어오기 요청에도 영향을 줄 수 있습니다.

보안 업데이트는 기본 분기의 취약한 패키지 매니페스트에 대해서만 발생합니다. 구성 옵션이 동일한 분기에 대해 설정되고(`target-branch`를 사용하지 않는 한 true) 취약한 매니페스트의 `package-ecosystem` 및 `directory`를 지정하면 보안 업데이트를 위한 끌어오기 요청이 관련 옵션을 사용합니다.

일반적으로 보안 업데이트는 끌어오기 요청에 영향을 주는 구성 옵션(예: 메타데이터 추가 또는 끌어오기 요청의 동작 변경)을 사용합니다. 보안 업데이트에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 구성](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)”을 참조하세요.

{% endnote %}

### `package-ecosystem`

**필수**. {% data variables.product.prodname_dependabot %}에서 새 버전을 모니터링할 각 패키지 관리자에 대해 `package-ecosystem` 요소를 하나씩 추가합니다. 리포지토리에 각 패키지 관리자의 종속성 매니페스트 또는 잠금 파일도 포함되어야 합니다. 벤더링을 지원하는 패키지 관리자에서 벤더링을 사용하도록 설정하려는 경우 벤더링된 종속성이 필수 디렉터리에 있어야 합니다. 자세한 내용은 아래의 [`vendor`](#vendor)를 참조하세요.

{% data reusables.dependabot.supported-package-managers %}

```yaml
# Basic set up for three package managers

version: 2
updates:

  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for Composer
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
```

### `directory`

**필수**. 각 패키지 관리자의 패키지 매니페스트(예: *package.json* 또는 *Gemfile*) 위치를 정의해야 합니다. GitHub Actions를 제외한 모든 에코시스템에 대해 리포지토리 루트의 상대 디렉터리를 정의합니다. GitHub Actions의 경우 `.github/workflows`에서 워크플로 파일을 확인하도록 `/`의 상대 디렉터리를 설정합니다.

```yaml
# Specify location of manifest files for each package manager

version: 2
updates:
  - package-ecosystem: "composer"
    # Files stored in repository root
    directory: "/"
    schedule:
      interval: "daily"

  - package-ecosystem: "npm"
    # Files stored in `app` directory
    directory: "/app"
    schedule:
      interval: "daily"

  - package-ecosystem: "github-actions"
    # Workflow files stored in the
    # default location of `.github/workflows`
    directory: "/"
    schedule:
      interval: "daily"
```

### `schedule.interval`

**필수**. 각 패키지 관리자에서 새 버전을 확인하는 빈도를 정의해야 합니다. 기본적으로 {% data variables.product.prodname_dependabot %}은 구성 파일에서 모든 업데이트를 적용하는 시간을 임의로 할당합니다. 특정 시간을 설정하기 위해 [`schedule.time`](#scheduletime) 및 [`schedule.timezone`](#scheduletimezone)을 사용할 수 있습니다.

- `daily` - 평일(월요일~금요일)에 매일 실행됩니다.
- `weekly` - 매주 한 번 실행됩니다. 기본적으로 월요일에 실행됩니다. 이 설정을 수정하려면 [`schedule.day`](#scheduleday)를 사용합니다.
- `monthly` - 매월 한 번 실행됩니다. 매월 1일에 실행됩니다.

```yaml
# Set update schedule for each package manager

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      # Check for updates managed by Composer once a week
      interval: "weekly"
```

{% note %}

**참고**: `schedule`은 {% data variables.product.prodname_dependabot %}이 새 업데이트를 시도하는 시기를 정의합니다. 그러나 이때만 끌어오기 요청을 받을 수 있는 것은 아닙니다. `dependabot.yml` 파일 변경 내용, 업데이트 실패 후 매니페스트 파일 변경 내용 또는 {% data variables.product.prodname_dependabot_security_updates %}에 따라 업데이트가 트리거될 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot %} 끌어오기 요청 빈도](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)” 및 “[{% data variables.product.prodname_dependabot_security_updates %} 정보](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)”를 참조하세요.

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

`allow` 옵션을 사용하여 업데이트되는 종속성을 사용자 지정할 수 있습니다. 버전 및 보안 업데이트에 모두 적용됩니다. 사용할 수 있는 옵션은 다음과 같습니다.

- `dependency-name` - 이름이 일치하는 종속성 업데이트를 허용하려면 사용합니다. 필요에 따라 0자 이상의 문자와 일치하도록 `*`를 사용합니다. Java 종속성의 경우 `dependency-name` 특성의 형식은 `groupId:artifactId`입니다(예: `org.kohsuke:github-api`).
- `dependency-type` - 특정 형식의 종속성 업데이트를 허용하려면 사용합니다.

  | 종속성 유형 | 지원하는 패키지 관리자 | 업데이트 허용 |
  |------------------|-------------------------------|--------|
  | `direct` | 모두 | 명시적으로 정의된 모든 종속성. |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo` | 직접 종속성의 종속성(하위 종속성 또는 일시적인 종속성이라고도 함)|
  | `all` | 모두 | 명시적으로 정의된 모든 종속성. `bundler`, `pip`, `composer`, `cargo`의 경우 직접 종속성의 종속성 업데이트도 허용됩니다.|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | “프로덕션 종속성 그룹”의 종속성만 |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | “개발 종속성 그룹”의 종속성만 |

```yaml
# Use `allow` to specify which dependencies to maintain

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow updates for Lodash
      - dependency-name: "lodash"
      # Allow updates for React and any packages starting "react"
      - dependency-name: "react*"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow both direct and indirect updates for all packages
      - dependency-type: "all"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow only direct updates for
      # Django and any packages starting "django"
      - dependency-name: "django*"
        dependency-type: "direct"
      # Allow only production updates for Sphinx
      - dependency-name: "sphinx"
        dependency-type: "production"
```

### `assignees`

`assignees`를 사용하여 패키지 관리자에 대해 발생한 모든 끌어오기 요청의 개별 담당자를 지정할 수 있습니다.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify assignees for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Add assignees
    assignees:
      - "octocat"
```

### `commit-message`

기본적으로 {% data variables.product.prodname_dependabot %}은 커밋 메시지 기본 설정을 검색하고 유사한 패턴을 사용하려고 합니다. `commit-message` 옵션을 사용하여 기본 설정을 명시적으로 지정할 수 있습니다.

지원되는 옵션

{% note %}

**참고:** `prefix` 및 `prefix-development` 옵션은 15자로 제한됩니다.

{% endnote %}

- `prefix`는 모든 커밋 메시지의 접두사를 지정합니다.
- `prefix-development`는 개발 종속성 그룹의 종속성을 업데이트하는 모든 커밋 메시지에 대해 별도의 접두사를 지정합니다. 이 옵션의 값을 지정한 경우 `prefix`는 프로덕션 종속성 그룹의 종속성 업데이트에만 사용됩니다. `bundler`, `composer`, `mix`, `maven`, `npm`, `pip`에서 지원됩니다.
- `include: "scope"`는 접두사 뒤에 커밋에서 업데이트되는 종속성 목록이 오도록 지정합니다.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customize commit messages

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    commit-message:
      # Prefix all commit messages with "npm"
      prefix: "npm"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Prefix all commit messages with "Composer"
    # include a list of updated dependencies
    commit-message:
      prefix: "Composer"
      include: "scope"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Include a list of updated dependencies
    # with a prefix determined by the dependency group
    commit-message:
      prefix: "pip prod"
      prefix-development: "pip dev"
      include: "scope"
```
위 예제와 동일한 구성을 사용하는 경우 `pip` 개발 종속성 그룹에서 `requests` 라이브러리를 업그레이드하면 다음 커밋 메시지가 생성됩니다.

   `pip dev: bump requests from 1.0.0 to 1.0.1`
   
### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

`ignore`에 종속성을 추가하거나 {% data variables.product.prodname_dependabot %}에서 열린 끌어오기 요청에 `@dependabot ignore` 명령을 사용하여 종속성을 무시할 수 있습니다.

#### `@dependabot ignore`의 `ignore` 조건 만들기

`@dependabot ignore` 명령을 사용하여 무시된 종속성은 패키지 관리자별로 중앙에서 저장됩니다. `dependabot.yml` 파일에서 종속성을 무시하기 시작하면 구성의 `ignore` 종속성과 함께 기존 기본 설정이 고려됩니다.

리포지토리에서 `"@dependabot ignore" in:comments`를 검색하여 리포지토리에 저장된 `ignore` 기본 설정이 있는지 확인할 수 있습니다. 이런 방식으로 무시된 종속성의 무시를 해제하려는 경우 끌어오기 요청을 다시 엽니다.

`@dependabot ignore` 명령에 대한 자세한 내용은 “[종속성 업데이트를 위한 끌어오기 요청 관리](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)”를 참조하세요.

#### 무시할 종속성 및 버전 지정

`ignore` 옵션을 사용하여 업데이트되는 종속성을 사용자 지정할 수 있습니다. `ignore` 옵션에서 지원하는 옵션은 다음과 같습니다.

- `dependency-name` - 이름이 일치하는 종속성 업데이트를 무시하려면 사용합니다. 필요에 따라 0자 이상의 문자와 일치하도록 `*`를 사용합니다. Java 종속성의 경우 `dependency-name` 특성의 형식은 `groupId:artifactId`입니다(예: `org.kohsuke:github-api`). {% ifversion dependabot-grouped-dependencies %} {% data variables.product.prodname_dependabot %}이 DefinitelyTyped에서 TypeScript 유형 정의를 자동으로 업데이트하는 것을 방지하려면 `@types/*`를 사용합니다.{% endif %}
- `versions` - 특정 버전 또는 버전 범위를 무시하려면 사용합니다. 범위를 정의하려는 경우 패키지 관리자의 표준 패턴을 사용합니다(예: npm의 경우 `^1.0.0`, Bundler의 경우 `~> 2.0`).
- `update-types` - 버전 업데이트에서 semver `major`, `minor` 또는 `patch` 업데이트와 같은 업데이트 유형을 무시하려면 사용합니다(예: `version-update:semver-patch`는 패치 업데이트를 무시함). `dependency-name: "*"`와 결합하여 모든 종속성에서 특정 `update-types`를 무시할 수 있습니다. 현재 지원되는 옵션은 `version-update:semver-major`, `version-update:semver-minor`, `version-update:semver-patch`뿐입니다. 보안 업데이트는 이 설정의 영향을 받지 않습니다.

`versions`와 `update-types`를 함께 사용할 경우 {% data variables.product.prodname_dependabot %}은 두 집합의 모든 업데이트를 무시합니다.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Use `ignore` to specify dependencies that should not be updated

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "express"
        # For Express, ignore all updates for version 4 and 5
        versions: ["4.x", "5.x"]
        # For Lodash, ignore all updates
      - dependency-name: "lodash"
        # For AWS SDK, ignore all patch updates
      - dependency-name: "aws-sdk"
        update-types: ["version-update:semver-patch"]
```

{% note %}

**참고**: {% data variables.product.prodname_dependabot %}은 구성 파일의 `ignore` 옵션에 액세스할 수 없는 종속성을 추가하더라도 파일의 모든 종속성에 액세스할 수 있는 경우에만 매니페스트 또는 잠금 파일에서 버전 업데이트를 실행할 수 있습니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)” 및 “[{% data variables.product.prodname_dependabot %} 오류 문제 해결](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)”을 참조하세요.


{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% note %}

**참고**: `pub` 에코시스템의 경우 이전 버전을 사용할 수 있더라도 {% data variables.product.prodname_dependabot %}은 업데이트를 시도하는 버전이 무시될 때 업데이트를 수행하지 않습니다.

{% endnote %}

{% endif %}

### `insecure-external-code-execution`

`package-ecosystem` 값이 `bundler`, `mix`, `pip`인 패키지 관리자는 버전 업데이트 프로세스의 일부로 매니페스트의 외부 코드를 실행할 수 있습니다. 이로 인해 손상된 패키지가 자격 증명을 도용하거나 구성된 레지스트리에 대한 액세스 권한을 얻을 수 있습니다. `updates` 구성 내에 [`registries`](#registries) 설정을 추가하면 {% data variables.product.prodname_dependabot %}이 자동으로 외부 코드 실행을 방지합니다. 이 경우 버전 업데이트에 실패할 수 있습니다. `insecure-external-code-execution`을 `allow`로 설정하면 이 동작을 재정의하고 `bundler`, `mix`, `pip` 패키지 관리자의 외부 코드 실행을 허용할 수 있습니다.

`insecure-external-code-execution`을 `deny`로 설정하면 이 업데이트 구성에 대한 `registries` 설정이 있는지 여부에 관계없이 외부 코드 실행을 명시적으로 거부할 수 있습니다.

{% raw %}
```yaml
# Allow external code execution when updating dependencies from private registries

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries: "*"
    schedule:
      interval: "monthly"
```
{% endraw %}

### `labels`

{% data reusables.dependabot.default-labels %}

기본 레이블을 재정의하고 패키지 관리자에 대해 발생한 모든 끌어오기 요청의 대체 레이블을 지정하려면 `labels`를 사용합니다. 레이블이 리포지토리에 정의되어 있지 않으면 무시됩니다.
기본 레이블을 포함하여 모든 레이블을 사용하지 않도록 설정하려면 `labels: [ ]`를 사용합니다.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify labels for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Specify labels for npm pull requests
    labels:
      - "npm"
      - "dependencies"
```

### `milestone`

패키지 관리자에 대해 발생한 모든 끌어오기 요청을 마일스톤과 연결하려면 `milestone`을 사용합니다. 해당 레이블이 아닌 마일스톤의 숫자 식별자를 지정해야 합니다. 마일스톤을 볼 때 `milestone` 뒤에 있는 페이지 URL의 최종 부분이 식별자입니다. 예: `https://github.com/<org>/<repo>/milestone/3`

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a milestone for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Associate pull requests with milestone "4"
    milestone: 4
```

### `open-pull-requests-limit`

기본적으로 {% data variables.product.prodname_dependabot %}은 버전 업데이트에 대해 최대 5개의 끌어오기 요청을 엽니다. {% data variables.product.prodname_dependabot %}에서 열린 끌어오기 요청이 5개 있으면 {% data variables.product.prodname_dependabot %}은 열려 있는 요청 중 일부가 병합되거나 닫혀질 때까지 새 요청을 열지 않습니다. 이 한도를 변경하려면 `open-pull-requests-limit`를 사용합니다. 이 옵션은 패키지 관리자에 대한 버전 업데이트를 일시적으로 사용하지 않도록 설정하는 간단한 방법도 제공합니다.

열린 끌어오기 요청 10개인 별도의 내부 한도가 있는 보안 업데이트에는 영향을 주지 않습니다.

```yaml
# Specify the number of open pull requests allowed

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Allow up to 10 open pull requests for pip dependencies
    open-pull-requests-limit: 10
```

### `pull-request-branch-name.separator`

{% data variables.product.prodname_dependabot %}은 각 끌어오기 요청에 대한 분기를 생성합니다. 각 분기 이름에는 `dependabot`과 업데이트되는 패키지 관리자 및 종속성이 포함됩니다. 기본적으로 각 부분은 `/` 기호로 구분됩니다(예: `dependabot/npm_and_yarn/next_js/acorn-6.4.1`).

다른 구분 기호를 지정하려면 `pull-request-branch-name.separator`를 사용합니다. `"-"`, `_` 또는 `/` 중 하나일 수 있습니다. 하이픈 기호는 따옴표로 묶어야 합니다. 그러지 않으면 빈 YAML 목록을 시작하는 것으로 해석됩니다.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a different separator for branch names

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    pull-request-branch-name:
      # Separate sections of the branch name with a hyphen
      # for example, `dependabot-npm_and_yarn-next_js-acorn-6.4.1`
      separator: "-"
```

### `rebase-strategy`

기본적으로 {% data variables.product.prodname_dependabot %}은 끌어오기 요청의 변경 내용을 검색할 경우 열린 끌어오기 요청을 자동으로 다시 지정합니다. 이 동작을 사용하지 않도록 설정하려면 `rebase-strategy`를 사용합니다.

사용 가능한 다시 지정 전략

- `disabled` - 자동 다시 지정을 사용하지 않도록 설정합니다.
- `auto` - 기본 동작을 사용하고 변경 내용이 검색될 경우 열린 끌어오기 요청을 다시 지정합니다.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disable automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

### `registries`

{% data variables.product.prodname_dependabot %}이 버전 업데이트를 수행할 때 프라이빗 패키지 레지스트리에 액세스할 수 있도록 하려면 관련 `updates` 구성 내에 `registries` 설정을 포함해야 합니다. `registries`를 `"*"`로 설정하면 정의된 모든 레지스트리가 사용되도록 허용할 수 있습니다. 또는 업데이트에서 사용할 수 있는 레지스트리를 나열할 수 있습니다. 이렇게 하려면 _dependabot.yml_ 파일의 최상위 `registries` 섹션에 정의된 레지스트리 이름을 사용합니다. 자세한 내용은 아래의 “[프라이빗 레지스트리에 대한 구성 옵션](#configuration-options-for-private-registries)”을 참조하세요.

{% data variables.product.prodname_dependabot %}이 `bundler`, `mix`, `pip` 패키지 관리자를 사용하여 프라이빗 레지스트리의 종속성을 업데이트할 수 있도록 하려면 외부 코드 실행을 허용할 수 있습니다. 자세한 내용은 위의 [`insecure-external-code-execution`](#insecure-external-code-execution)을 참조하세요.

```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries
# when updating dependency versions for this ecosystem

{% raw %}
version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
updates:
  - package-ecosystem: "gitsubmodule"
    directory: "/"
    registries:
      - maven-github
    schedule:
      interval: "monthly"
{% endraw %}
```

### `reviewers`

패키지 관리자에 대해 발생한 모든 끌어오기 요청의 개별 검토자 또는 검토자 팀을 지정하려면 `reviewers`를 사용합니다. 팀을 @mentioning하는 것처럼 조직을 포함한 전체 팀 이름을 사용해야 합니다.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify reviewers for pull requests

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Add reviewers
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

### `schedule.day`

`weekly` 업데이트 일정을 설정하는 경우 기본적으로 {% data variables.product.prodname_dependabot %}은 월요일, 임의로 설정된 시간에 리포지토리에서 새 버전을 확인합니다. 업데이트를 확인할 대체 요일을 지정하려면 `schedule.day`를 사용합니다.

지원되는 값

- `monday`
- `tuesday`
- `wednesday`
- `thursday`
- `friday`
- `saturday`
- `sunday`

```yaml
# Specify the day for weekly checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
```

### `schedule.time`

기본적으로 {% data variables.product.prodname_dependabot %}은 임의로 설정된 시간에 리포지토리에서 새 버전을 확인합니다. 업데이트를 확인할 대체 시간을 지정하려면 `schedule.time`을 사용합니다(형식: `hh:mm`).

```yaml
# Set a time for checks
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      # Check for npm updates at 9am UTC
      time: "09:00"
```

### `schedule.timezone`

기본적으로 {% data variables.product.prodname_dependabot %}은 임의로 설정된 시간에 리포지토리에서 새 버전을 확인합니다. 대체 표준 시간대를 지정하려면 `schedule.timezone`을 사용합니다. 표준 시간대 식별자는 [iana](https://www.iana.org/time-zones)에서 유지 관리하는 표준 시간대 데이터베이스에서 가져온 것이어야 합니다. 자세한 내용은 [tz 데이터베이스 표준 시간대 목록](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)을 참조하세요.

```yaml
# Specify the timezone for checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      # Use Japan Standard Time (UTC +09:00)
      timezone: "Asia/Tokyo"
```

### `target-branch`

기본적으로 {% data variables.product.prodname_dependabot %}은 기본 분기의 매니페스트 파일을 확인하고 이 분기에 대해 버전 업데이트 끌어오기 요청을 생성합니다. 매니페스트 파일 및 끌어오기 요청에 대해 다른 분기를 지정하려면 `target-branch`를 사용합니다. 이 옵션을 사용하면 패키지 관리자 설정이 보안 업데이트에 대해 발생한 끌어오기 요청에 더 이상 영향을 주지 않습니다.

```yaml
# Specify a non-default branch for pull requests for pip

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for version updates
    # to pip against the `develop` branch
    target-branch: "develop"
    # Labels on pull requests for version updates only
    labels:
      - "pip dependencies"

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
    # Labels on pull requests for security and version updates
    labels:
      - "npm dependencies"
```

### `vendor`

업데이트할 때 종속성을 벤더링하도록 {% data variables.product.prodname_dependabot %}에 지시하려면 `vendor` 옵션을 사용합니다. `gomod`를 사용하는 경우에는 이 옵션을 사용하지 마세요. {% data variables.product.prodname_dependabot %}에서 이 도구의 벤더링을 자동으로 검색합니다.

```yaml
# Configure version updates for both dependencies defined in manifests and vendored dependencies

version: 2
updates:
  - package-ecosystem: "bundler"
    # Raise pull requests to update vendored dependencies that are checked in to the repository
    vendor: true
    directory: "/"
    schedule:
      interval: "weekly"
```

{% data variables.product.prodname_dependabot %}은 리포지토리의 특정 디렉터리에 있는 벤더링된 종속성만 업데이트합니다.

| 패키지 관리자 | 벤더링된 종속성에 필요한 파일 경로 | 추가 정보 |
  |------------------|-------------------------------|--------|
  | `bundler` | 종속성이 _vendor/cache_ 디렉터리에 있어야 합니다.</br>다른 파일 경로는 지원되지 않습니다. | [`bundle cache` 설명서](https://bundler.io/man/bundle-cache.1.html) |
  | `gomod` | 경로 요구 사항 없음(종속성은 일반적으로 _vendor_ 디렉터리에 있음) | [`go mod vendor` 설명서](https://golang.org/ref/mod#go-mod-vendor) |


### `versioning-strategy`

{% data variables.product.prodname_dependabot %}은 버전 업데이트를 위해 매니페스트 파일을 편집할 때 다음과 같은 전반적인 전략을 사용합니다.

- 앱의 경우 버전 요구 사항이 증가합니다(예: npm, pip, Composer).
- 라이브러리의 경우 버전 범위가 확장됩니다(예: Bundler, Cargo).

지원되는 패키지 관리자에 대해 이 동작을 변경하려면 `versioning-strategy` 옵션을 사용합니다.

{% data reusables.dependabot.option-affects-security-updates %}

사용 가능한 업데이트 전략

| 옵션 | 지원 요소 | 작업 |
|--------|--------------|--------|
| `lockfile-only` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | 잠금 파일을 업데이트하기 위한 끌어오기 요청만 만듭니다. 패키지 매니페스트 변경이 필요한 새 버전은 무시합니다. |
| `auto` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | 위에서 설명한 기본 전략을 따릅니다.|
| `widen`| `composer`, `npm` | 가능하면 새 버전과 이전 버전을 모두 포함하도록 버전 요구 사항을 완화합니다. |
| `increase`| `bundler`, `composer`, `npm` | 항상 새 버전과 일치하도록 버전 요구 사항을 높입니다. |
| `increase-if-necessary` | `bundler`, `composer`, `npm` | 새 버전에 필요한 경우에만 버전 요구 사항을 높입니다. |

```yaml
# Customize the manifest version strategy

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Update the npm manifest file to relax
    # the version requirements
    versioning-strategy: widen

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Increase the version requirements for Composer
    # only when required
    versioning-strategy: increase-if-necessary

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Only allow updates to the lockfile for pip and
    # ignore any version updates that affect the manifest
    versioning-strategy: lockfile-only
```

## 프라이빗 레지스트리에 대한 구성 옵션

최상위 `registries` 키는 선택 사항입니다. 따라서 {% data variables.product.prodname_dependabot %}이 프라이빗 패키지 레지스트리에 액세스하는 데 사용할 수 있는 인증 세부 정보를 지정할 수 있습니다.

{% note %}

**참고:** 프라이빗 네트워크의 방화벽 뒤에 있는 프라이빗 레지스트리는 지원되지 않습니다.

{% endnote %}

`registries` 키의 값은 결합형 배열이며, 각 요소는 특정 레지스트리를 식별하는 키와 해당 레지스트리에 액세스하는 데 필요한 설정을 지정하는 결합형 배열 값으로 구성됩니다. 다음 *dependabot.yml* 파일은 파일의 `registries` 섹션에 `dockerhub`로 식별된 레지스트리를 구성한 다음, 파일의 `updates` 섹션에서 이 레지스트리를 참조합니다.

{% raw %}
```yaml
# Minimal settings to update dependencies in one private registry

version: 2
registries:
  dockerhub: # Define access for a private registry
    type: docker-registry
    url: registry.hub.docker.com
    username: octocat
    password: ${{secrets.DOCKERHUB_PASSWORD}}
updates:
  - package-ecosystem: "docker"
    directory: "/docker-registry/dockerhub"
    registries:
      - dockerhub # Allow version updates for dependencies in this registry
    schedule:
      interval: "monthly"
```
{% endraw %}

다음 옵션을 사용하여 액세스 설정을 지정합니다. 레지스트리 설정은 `type`과 `url`을 포함해야 하며, 일반적으로 `username` 및 `password` 조합이나 `token`을 포함해야 합니다.

| 옵션&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 설명 |
|:---|:---|
| `type`                     | 레지스트리의 형식을 식별합니다. 아래의 전체 형식 목록을 참조하세요. |
| `url`                      | 이 레지스트리의 종속성에 액세스하는 데 사용할 URL입니다. 프로토콜은 선택 사항입니다. 지정되지 않으면 `https://`가 가정됩니다. {% data variables.product.prodname_dependabot %}은 필요에 따라 후행 슬래시를 추가하거나 무시합니다. |
| `username`                 | {% data variables.product.prodname_dependabot %}이 레지스트리에 액세스하는 데 사용하는 사용자 이름입니다. |
| `password`                 | 지정된 사용자의 암호를 포함하는 {% data variables.product.prodname_dependabot %} 비밀에 대한 참조입니다. 자세한 내용은 “[Dependabot에 대한 암호화된 비밀 관리](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”를 참조하세요. |
| `key`                    | 이 레지스트리의 액세스 키가 포함된 {% data variables.product.prodname_dependabot %} 비밀에 대한 참조입니다. 자세한 내용은 “[Dependabot에 대한 암호화된 비밀 관리](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”를 참조하세요. |
| `token`                    | 이 레지스트리의 액세스 토큰이 포함된 {% data variables.product.prodname_dependabot %} 비밀에 대한 참조입니다. 자세한 내용은 “[Dependabot에 대한 암호화된 비밀 관리](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”를 참조하세요. |
| `replaces-base`            | `type: python-index`인 레지스트리의 경우 부울 값이 `true`이면 pip는 Python 패키지 인덱스의 기준 URL(기본적으로 `https://pypi.org/simple`)이 아닌 지정된 URL을 사용하여 종속성을 확인합니다. |


각 구성 `type`을 사용하려면 특정 설정을 제공해야 합니다. 일부 유형은 두 가지 이상의 연결 방법을 허용합니다. 다음 섹션에서는 각 `type`에 사용해야 하는 설정의 세부 정보를 제공합니다.

### `composer-repository`

`composer-repository` 유형은 사용자 이름 및 암호를 지원합니다.

{% raw %}
```yaml
registries:
  composer:
    type: composer-repository
    url: https://repo.packagist.com/example-company/
    username: octocat
    password: ${{secrets.MY_PACKAGIST_PASSWORD}}
```
{% endraw %}

### `docker-registry`

{% note %}

**참고:** ACR(Azure Container Registry)을 지원하지 않습니다.

{% endnote %}

`docker-registry` 유형은 사용자 이름 및 암호를 지원합니다.

{% raw %}
```yaml
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
```
{% endraw %}

`docker-registry` 유형을 통해 정적 AWS 자격 증명을 사용하여 Amazon ECR에서 끌어올 수도 있습니다.

{% raw %}
```yaml
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
```
{% endraw %}

### `git`

`git` 유형은 사용자 이름 및 암호를 지원합니다.

{% raw %}
```yaml
registries:
  github-octocat:
    type: git
    url: https://github.com
    username: x-access-token
    password: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `hex-organization`

`hex-organization` 유형은 조직 및 키를 지원합니다.

{% raw %}
```yaml
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
```
{% endraw %}

### `maven-repository`

`maven-repository` 유형은 사용자 이름 및 암호를 지원합니다.

{% raw %}
```yaml
registries:
  maven-artifactory:
    type: maven-repository
    url: https://artifactory.example.com
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

### `npm-registry`

`npm-registry` 유형은 사용자 이름 및 암호 또는 토큰을 지원합니다.

사용자 이름 및 암호를 사용하는 경우 `.npmrc`의 인증 토큰에 `base64`로 인코드된 `_password`가 포함될 수 있습니다. 그러나 {% data variables.product.prodname_dependabot %} 구성 파일에서 참조된 암호는 원래(인코드되지 않은) 암호여야 합니다.

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}  # Must be an unencoded password
```
{% endraw %}

{% raw %}
```yaml
registries:
  npm-github:
    type: npm-registry
    url: https://npm.pkg.github.com
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `nuget-feed`

`nuget-feed` 유형은 사용자 이름 및 암호 또는 토큰을 지원합니다.

{% raw %}
```yaml
registries:
  nuget-example:
    type: nuget-feed
    url: https://nuget.example.com/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_NUGET_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  nuget-azure-devops:
    type: nuget-feed
    url: https://pkgs.dev.azure.com/.../_packaging/My_Feed/nuget/v3/index.json
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
```
{% endraw %}

### `python-index`

`python-index` 유형은 사용자 이름 및 암호 또는 토큰을 지원합니다.

{% raw %}
```yaml
registries:
  python-example:
    type: python-index
    url: https://example.com/_packaging/my-feed/pypi/example
    username: octocat
    password: ${{secrets.MY_BASIC_AUTH_PASSWORD}}
    replaces-base: true
```
{% endraw %}

{% raw %}
```yaml
registries:
  python-azure:
    type: python-index
    url: https://pkgs.dev.azure.com/octocat/_packaging/my-feed/pypi/example
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
    replaces-base: true
```
{% endraw %}

### `rubygems-server`

`rubygems-server` 유형은 사용자 이름 및 암호 또는 토큰을 지원합니다.

{% raw %}
```yaml
registries:
  ruby-example:
    type: rubygems-server
    url: https://rubygems.example.com
    username: octocat@example.com
    password: ${{secrets.MY_RUBYGEMS_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `terraform-registry`

`terraform-registry` 유형은 토큰을 지원합니다.

{% raw %}
```yaml
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```
{% endraw %}

{% ifversion fpt or ghec or ghes > 3.4 %} 
## 베타 수준 에코시스템 지원 사용

### `enable-beta-ecosystems`

기본적으로 {% data variables.product.prodname_dependabot %}은 완전히 지원되는 에코시스템에 대해서만 종속성 매니페스트 및 잠금 파일을 업데이트합니다. 아직 일반 공급되지 않은 에코시스템의 업데이트를 옵트인하려면 `enable-beta-ecosystems` 플래그를 사용합니다.

```yaml
# Configure beta ecosystem

version: 2
enable-beta-ecosystems: true
updates:{% ifversion fpt or ghec or ghes > 3.5 %}
  - package-ecosystem: "beta-ecosystem"{% else %}
  - package-ecosystem: "pub"{% endif %}
    directory: "/"
    schedule:
      interval: "daily"
```
{% endif %}

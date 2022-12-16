---
title: 종속성 업데이트 사용자 지정
intro: '{% data variables.product.prodname_dependabot %}에서 종속성을 유지하는 방법을 사용자 지정할 수 있습니다.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/customizing-dependency-updates
  - /code-security/supply-chain-security/customizing-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/customizing-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
shortTitle: Customize updates
ms.openlocfilehash: 99a3869313598733493d21f8b15d46db98b1a53c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107743'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## 종속성 업데이트 사용자 지정 정보

버전 업데이트를 사용하도록 설정한 후 *dependabot.yml* 파일에 옵션을 더 추가하여 {% data variables.product.prodname_dependabot %}에서 종속성을 유지 관리하는 방법을 사용자 지정할 수 있습니다. 예를 들어 다음과 같이 할 수 있습니다.

- 버전 업데이트 끌어오기 요청을 열 요일을 지정합니다(`schedule.day`).
- 각 패키지 관리자의 검토자, 담당자, 레이블을 설정합니다(`reviewers`, `assignees`, `labels`).
- 각 매니페스트 파일의 변경 내용에 대한 버전 관리 전략을 정의합니다(`versioning-strategy`).
- 버전 업데이트를 위해 열린 끌어오기 요청의 최대 개수를 기본값인 5개에서 변경합니다(`open-pull-requests-limit`).
- 기본 분기 대신 특정 분기를 대상으로 하는 버전 업데이트 끌어오기 요청을 엽니다(`target-branch`).

구성 옵션에 대한 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)”을 참조하세요.

리포지토리의 *dependabot.yml* 파일을 업데이트하면 {% data variables.product.prodname_dependabot %}에서 새 구성으로 즉시 검사를 실행합니다. 몇 분 내에 **{% data variables.product.prodname_dependabot %}** 탭에 업데이트된 종속성 목록이 표시됩니다. 리포지토리에 많은 종속성이 있는 경우 작업 시간이 더 오래 걸릴 수 있습니다. 버전 업데이트를 위한 새 끌어오기 요청이 표시될 수도 있습니다. 자세한 내용은 “[버전 업데이트가 구성된 종속성 나열](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates)”을 참조하세요.

## 구성 변경이 보안 업데이트에 미치는 영향

*dependabot.yml* 파일을 사용자 지정하는 경우 보안 업데이트에 대해 발생한 끌어오기 요청이 일부 변경될 수 있습니다. 해당 끌어오기 요청은 항상 {% data variables.product.prodname_dependabot %} 일정이 아닌 종속성에 대한 보안 공지로 트리거됩니다. 그러나 버전 업데이트에 대해 다른 대상 분기를 지정하지 않는 한, *dependabot.yml* 파일에서 관련 구성 설정을 상속합니다.

예제는 아래의 “[사용자 지정 레이블 설정](#setting-custom-labels)”을 참조하세요.

## 일정 수정

`daily` 업데이트 일정을 설정하는 경우 기본적으로 {% data variables.product.prodname_dependabot %}은 05:00 UTC에 새 버전을 확인합니다. `schedule.time`을 사용하여 업데이트를 확인할 대체 시간을 지정할 수 있습니다(형식: `hh:mm`).

아래의 예제 *dependabot.yml* 파일은 npm 구성을 확장하여 {% data variables.product.prodname_dependabot %}에서 종속성에 대한 버전 업데이트를 확인해야 하는 시기를 지정합니다.

```yaml
# dependabot.yml file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry for updates at 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

## 검토자 및 담당자 설정

기본적으로 {% data variables.product.prodname_dependabot %}은 검토자나 담당자 없이 끌어오기 요청을 생성합니다.

`reviewers` 및 `assignees`를 사용하여 패키지 관리자에 대해 발생한 모든 끌어오기 요청의 검토자와 담당자를 지정할 수 있습니다. 팀을 지정할 때는 팀을 @mentioning하는 것처럼 전체 팀 이름을 사용해야 합니다(조직 포함).

아래의 예제 *dependabot.yml* 파일은 npm에 대한 버전 및 보안 업데이트로 열린 모든 끌어오기 요청에 검토자 2명과 담당자 1명이 있도록 npm 구성을 변경합니다.

```yaml
# dependabot.yml file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

## 사용자 지정 레이블 설정

{% data reusables.dependabot.default-labels %}

`labels`를 사용하여 기본 레이블을 재정의하고 패키지 관리자에 대해 발생한 모든 끌어오기 요청의 대체 레이블을 지정할 수 있습니다. *dependabot.yml* 파일에서 새 레이블을 만들 수 없으므로 대체 레이블이 리포지토리에 이미 있어야 합니다.

아래의 예제 *dependabot.yml* 파일은 npm에 대한 버전 및 보안 업데이트로 열린 모든 끌어오기 요청에 사용자 지정 레이블이 있도록 npm 구성을 변경합니다. 또한 사용자 지정 분기에 대한 버전 업데이트를 확인하고 사용자 지정 분기에 대해 사용자 지정 레이블로 끌어오기 요청을 생성하도록 Docker 구성을 변경합니다. 보안 업데이트가 항상 기본 분기에 대해 수행되므로 보안 업데이트 끌어오기 요청에는 Docker 변경 내용이 영향을 미치지 않습니다.

{% note %}

**참고:** 새 `target-branch`에 업데이트할 Dockerfile이 포함되어야 합니다. 그렇지 않으면 이 변경 내용으로 인해 Docker에 버전 업데이트를 사용할 수 없게 됩니다.

{% endnote %}

```yaml
# dependabot.yml file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

## 추가 예제

추가 예제는 “[dependabot.yml 파일에 대한 구성 옵션](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)”을 참조하세요.

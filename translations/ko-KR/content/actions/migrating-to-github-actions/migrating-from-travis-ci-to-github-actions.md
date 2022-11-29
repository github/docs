---
title: Travis CI에서 GitHub Actions로 마이그레이션
intro: '{% data variables.product.prodname_actions %} 및 Travis CI는 여러 유사점을 공유하므로 {% data variables.product.prodname_actions %}로 마이그레이션하는 것이 비교적 간단합니다.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Travis CI
  - Migration
  - CI
  - CD
shortTitle: Migrate from Travis CI
ms.openlocfilehash: 00da8dc259ef4de197faffd8db654dd536c1c237
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178993'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드는 Travis CI에서 {% data variables.product.prodname_actions %}로 마이그레이션하는 데 도움이 됩니다. 개념과 구문을 비교하고 유사성을 설명하며 일반적인 작업에 대한 다양한 접근 방식을 보여 줍니다.

## 시작하기 전에

{% data variables.product.prodname_actions %}로 마이그레이션을 시작하기 전에 작동 방식을 숙지하는 것이 유용합니다.

- {% data variables.product.prodname_actions %} 작업을 보여주는 빠른 예제로, “[{% data variables.product.prodname_actions %} 빠른 시작](/actions/quickstart)”을 참조하세요.
- 필수 {% data variables.product.prodname_actions %} 개념을 알아보려면 “[GitHub Actions 소개](/actions/learn-github-actions/introduction-to-github-actions)”를 참조하세요.

## 작업 실행 비교

CI 작업이 실행되는 시기를 제어하기 위해 {% data variables.product.prodname_actions %} 워크플로는 기본적으로 병렬로 실행되는 작업을 사용합니다.  각 작업은 사용자가 정의하는 시퀀스로 실행되는 단계를 포함합니다. 작업에 대한 설정 및 정리 작업을 실행해야 하는 경우 각 작업의 단계를 정의하여 해당 작업을 수행할 수 있습니다.

## 주요 유사점

{% data variables.product.prodname_actions %} 및 Travis CI는 특정 유사성을 공유하며, 유사성을 미리 이해하면 마이그레이션 프로세스를 원활하게 진행하는 데 도움이 됩니다.

### YAML 구문 사용

Travis CI 및 {% data variables.product.prodname_actions %}는 모두 YAML을 사용하여 작업 및 워크플로를 만들고 이 파일은 코드의 리포지토리에 저장됩니다. {% data variables.product.prodname_actions %}가 YAML을 사용하는 방법에 대한 자세한 내용은 [“워크플로 파일 만들기](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)”를 참조하세요.

### 사용자 지정 환경 변수

Travis CI를 사용하면 환경 변수를 설정하고 스테이지 간에 공유할 수 있습니다. 마찬가지로 {% data variables.product.prodname_actions %}를 사용하여 단계, 작업 또는 워크플로에 대한 환경 변수를 정의할 수 있습니다. 자세한 내용은 [“환경 변수](/actions/reference/environment-variables)”를 참조하세요.

### 기본 환경 변수

Travis CI 및 {% data variables.product.prodname_actions %} 모두 YAML 파일에서 사용할 수 있는 기본 환경 변수를 포함합니다. {% data variables.product.prodname_actions %}의 경우 “[기본 환경 변수](/actions/reference/environment-variables#default-environment-variables)”에서 확인할 수 있습니다.

### 병렬 작업 처리

Travis CI는 `stages`를 사용하여 작업을 병렬로 실행할 수 있습니다. 마찬가지로 {% data variables.product.prodname_actions %}는 `jobs`를 병렬로 실행합니다. 자세한 내용은 “[종속 작업 만들기](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)”를 참조하세요.

### 상태 배지

Travis CI 및 {% data variables.product.prodname_actions %}는 모두 상태 배지를 지원하며 이를 통해 빌드가 통과하는지 또는 실패하는지 여부를 나타낼 수 있습니다.
자세한 내용은 [“리포지토리에 워크플로 상태 배지 추가](/actions/managing-workflow-runs/adding-a-workflow-status-badge)”를 참조하세요.

### 매트릭스 사용

Travis CI 및 {% data variables.product.prodname_actions %}는 모두 매트릭스를 지원하므로 운영 체제와 소프트웨어 패키지의 조합을 사용하여 테스트를 수행할 수 있습니다. 자세한 내용은 “[작업에 매트릭스 사용](/actions/using-jobs/using-a-matrix-for-your-jobs)”을 참조하세요.

다음은 각 시스템의 구문을 비교하는 예제입니다.

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
matrix:
  include:
    - rvm: 2.5
    - rvm: 2.6.3
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build:
    strategy:
      matrix:
        ruby: [2.5, 2.6.3]
```
{% endraw %}
</td>
</tr>
</table>

### 특정 분기 대상 지정

Travis CI 및 {% data variables.product.prodname_actions %}를 사용하면 CI를 특정 분기로 지정할 수 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)”을 참조하세요.

다음은 각 시스템에 대한 구문의 예입니다.

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
branches:
  only:
    - main
    - 'mona/octocat'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
on:
  push:
    branches:
      - main
      - 'mona/octocat'
```
{% endraw %}
</td>
</tr>
</table>

### 하위 모듈 체크 아웃

Travis CI 및 {% data variables.product.prodname_actions %}를 사용하면 하위 모듈이 리포지토리 복제에 포함되는지 여부를 제어할 수 있습니다.

다음은 각 시스템에 대한 구문의 예입니다.

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
git:
  submodules: false
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- uses: {% data reusables.actions.action-checkout %}
  with:
    submodules: false
```

</td>
</tr>
</table>

### 매트릭스에서 환경 변수 사용

Travis CI 및 {% data variables.product.prodname_actions %}는 모두 테스트 매트릭스에 사용자 지정 환경 변수를 추가할 수 있으므로 이후 단계에서 변수를 참조할 수 있습니다.

{% data variables.product.prodname_actions %}에서 `include` 키를 사용하여 사용자 지정 환경 변수를 매트릭스에 추가할 수 있습니다. {% data reusables.actions.matrix-variable-example %}

## {% data variables.product.prodname_actions %}의 주요 기능

Travis CI에서 마이그레이션할 때 {% data variables.product.prodname_actions %}의 다음 주요 기능을 고려해 보세요.

### 비밀 저장

{% data variables.product.prodname_actions %}를 사용하면 작업에서 비밀을 저장하고 참조할 수 있습니다. {% data variables.product.prodname_actions %} 조직은 조직 비밀에 액세스할 수 있는 리포지토리를 제한할 수 있습니다. 환경 보호 규칙은 환경 비밀에 액세스하기 위해 워크플로에 대한 수동 승인을 요구할 수 있습니다. 자세한 내용은 “[암호화된 비밀](/actions/reference/encrypted-secrets)”을 참조하세요.

### 작업과 워크플로 간에 파일 공유

{% data variables.product.prodname_actions %}에는 아티팩트 스토리지에 대한 통합 지원이 포함되어 있으므로 워크플로의 작업 간에 파일을 공유할 수 있습니다. 또한 결과 파일을 저장하고 다른 워크플로와 공유할 수도 있습니다. 자세한 내용은 “[작업 간에 데이터 공유](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)”를 참조하세요.

### 사용자 고유의 실행기 호스팅

작업에 특정 하드웨어 또는 소프트웨어가 필요한 경우 {% data variables.product.prodname_actions %}를 사용하면 사용자 고유의 실행기를 호스트하고 작업을 보내 처리할 수 있습니다. 또한 {% data variables.product.prodname_actions %}를 통해 정책을 사용하여 실행기 액세스 방법을 제어하며, 조직 또는 리포지토리 수준에서 액세스 권한을 부여할 수 있습니다. 자세한 내용은 [“사용자 고유의 실행기 호스팅](/actions/hosting-your-own-runners)”을 참조하세요.

{% ifversion fpt or ghec %}

### 동시 작업 및 실행 시간

{% data variables.product.prodname_actions %}에서 동시 작업 및 워크플로 실행 시간은 {% data variables.product.company_short %} 플랜에 따라 달라질 수 있습니다. 자세한 내용은 “[사용량 제한, 청구 및 관리](/actions/reference/usage-limits-billing-and-administration)”를 참조하세요.

{% endif %}

### {% data variables.product.prodname_actions %}에서 다른 언어 사용

{% data variables.product.prodname_actions %}에서 다른 언어로 작업하는 경우 작업에 단계를 만들어 언어 종속성을 설정할 수 있습니다. 특정 언어로 작업하는 방법에 대한 자세한 내용은 다음 가이드를 참조하세요.
  - [Node.js 빌드 및 테스트](/actions/guides/building-and-testing-nodejs)
  - [Python 빌드 및 테스트](/actions/guides/building-and-testing-python)
  - [PowerShell 빌드 및 테스트](/actions/guides/building-and-testing-powershell)
  - [Maven을 사용하여 Java 빌드 및 테스트](/actions/guides/building-and-testing-java-with-maven)
  - [Gradle을 사용하여 Java 빌드 및 테스트](/actions/guides/building-and-testing-java-with-gradle)
  - [Ant를 사용하여 Java 빌드 및 테스트](/actions/guides/building-and-testing-java-with-ant)

## 스크립트 실행

{% data variables.product.prodname_actions %}는 `run` 단계를 사용하여 스크립트 또는 셸 명령을 실행할 수 있습니다. 특정 셸을 사용하려면 스크립트에 경로를 제공할 때 `shell` 유형을 지정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”을 참조하세요.

예를 들면 다음과 같습니다.

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

## {% data variables.product.prodname_actions %}에서 오류 처리

{% data variables.product.prodname_actions %}로 마이그레이션할 때는 오류 처리에 대해 알아야 할 다양한 접근 방식이 있습니다.

### 스크립트 오류 처리

{% data variables.product.prodname_actions %}는 단계 중 하나가 오류 코드를 반환하는 경우 즉시 작업을 중지합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)”을 참조하세요.

### 작업 오류 처리

{% data variables.product.prodname_actions %}는 `if` 조건을 사용하여 특정 상황에서 작업 또는 단계를 실행합니다. 예를 들어 다른 단계에서 `failure()`가 발생한 경우 단계를 실행할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)”을 참조하세요.  또한 작업 실패 시 [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error)를 사용하여 워크플로 실행이 중지되지 않도록 할 수 있습니다.

## 조건부 및 식에 대한 구문 마이그레이션

조건식에서 작업을 실행하기 위해 Travis CI 및 {% data variables.product.prodname_actions %}는 비슷한 `if` 조건 구문을 공유합니다. {% data variables.product.prodname_actions %}를 통해 `if` 조건부를 사용하여 조건이 충족되지 않는 한 작업 또는 단계가 실행되지 않도록 할 수 있습니다. 자세한 내용은 “[언어 식](/actions/learn-github-actions/expressions)”을 참조하세요.

이 예제에서는 `if` 조건부가 단계 실행 여부를 제어하는 방법을 보여 줍니다.

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

## 단계(phase)에서 단계(step)로 마이그레이션

Travis CI가 단계(phase)를 사용하여 단계(step)를 실행하는 경우 {% data variables.product.prodname_actions %}에는 작업을 실행하는 단계(step)가 있습니다.    [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions)에서 미리 빌드된 작업을 찾거나 사용자 고유의 작업을 만들 수 있습니다. 자세한 내용은 “[작업 빌드](/actions/building-actions)”를 참조하세요.

다음은 각 시스템에 대한 구문의 예입니다.

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: python
python:
  - "3.7"

스크립트에 추가합니다.
  - python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

</td>
</tr>
</table>

## 종속성 캐싱

Travis CI 및 {% data variables.product.prodname_actions %}를 사용하면 나중에 다시 사용할 수 있도록 종속성을 수동으로 캐시할 수 있습니다.

{% ifversion actions-caching %}

이 예제에서는 각 시스템에 대한 캐시 구문을 보여 줍니다.

<table>
<tr>
<th>
Travis CI
</th>
<th>
GitHub 작업
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: node_js
cache: npm
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Cache node modules
  uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

## 일반 작업의 예

이 섹션에서는 {% data variables.product.prodname_actions %} 및 Travis CI가 일반 작업을 수행하는 방법을 비교합니다.

### 환경 변수 구성

{% data variables.product.prodname_actions %} 작업에서 사용자 지정 환경 변수를 만들 수 있습니다. 예를 들면 다음과 같습니다.

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %} 워크플로
</th>
</tr>
<tr>
<td>

```yaml
env:
  - MAVEN_PATH="/usr/local/maven"
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

### Node.js를 사용하여 빌드하기

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %} 워크플로
</th>
</tr>
<tr>
<td>
{% raw %}
```yaml
install:
  - npm install
script:
  - npm run build
  - npm test
```
{% endraw %}
</td>
<td>

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```

</td>
</tr>
</table>

## 다음 단계

{% data variables.product.prodname_actions %}의 주요 기능에 대해 계속 알아보려면 “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”를 참조하세요.

---
title: GitLab CI/CD에서 GitHub Actions로 마이그레이션
intro: '{% data variables.product.prodname_actions %} 및 GitLab CI/CD는 여러 구성 유사성을 공유하므로 {% data variables.product.prodname_actions %}로 마이그레이션하는 것이 비교적 간단합니다.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-gitlab-cicd-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - GitLab
  - Migration
  - CI
  - CD
shortTitle: Migrate from GitLab CI/CD
ms.openlocfilehash: d0d5f2cae928f95b1a614826f270342f376db0de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178985'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

GitLab CI/CD 및 {% data variables.product.prodname_actions %}를 사용하면 코드를 자동으로 빌드, 테스트, 게시, 릴리스 및 배포하는 워크플로를 만들 수 있습니다. GitLab CI/CD 및 {% data variables.product.prodname_actions %}는 워크플로 구성에서 몇 가지 유사점을 공유합니다.

- 워크플로 구성 파일은 YAML로 작성되며 코드의 리포지토리에 저장됩니다.
- 워크플로에는 하나 이상의 작업이 포함됩니다.
- 작업에는 하나 이상의 단계 또는 개별 명령이 포함됩니다.
- 작업은 관리형 컴퓨터 또는 자체 호스팅 컴퓨터에서 실행할 수 있습니다.

몇 가지 차이점이 있으며 이 가이드에서는 워크플로를 {% data variables.product.prodname_actions %}로 마이그레이션할 수 있도록 중요한 차이점을 보여 줍니다.

## 작업

GitLab CI/CD의 작업은 {% data variables.product.prodname_actions %}의 작업과 매우 유사합니다. 두 시스템 모두에서 작업은 다음과 같은 특징을 갖습니다.

* 순차적으로 실행되는 일련의 단계 또는 스크립트를 포함합니다.
* 별도의 컴퓨터 또는 별도의 컨테이너에서 실행할 수 있습니다.
* 기본적으로 동시에 실행되지만 순차적으로 실행되도록 구성할 수 있습니다.

작업에서 스크립트 또는 셸 명령을 실행할 수 있습니다. GitLab CI/CD에서 스크립트 단계는 `script` 키를 사용하여 지정됩니다. {% data variables.product.prodname_actions %}에서 모든 스크립트는 `run` 키를 사용하여 지정됩니다.

다음은 각 시스템에 대한 구문의 예입니다.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
job1:
  variables:
    GIT_CHECKOUT: "true"
  script:
    - echo "Run your script here"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  job1:
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: echo "Run your script here"
```

</td>
</tr>
</table>

## 실행기

실행기는 작업이 실행되는 컴퓨터입니다. GitLab CI/CD 및 {% data variables.product.prodname_actions %}는 실행기의 관리형 및 자체 호스팅 변형을 제공합니다. GitLab CI/CD에서 `tags`는 다른 플랫폼에서 작업을 실행하는 데 사용되지만 {% data variables.product.prodname_actions %}에서는 `runs-on`을 통해 작업을 수행합니다.

다음은 각 시스템에 대한 구문의 예입니다.

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  tags:
    - windows
  script:
    - echo Hello, %USERNAME%!

linux_job: tags:
    - linux script:
    - echo "Hello, $USER!"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  runs-on: windows-latest
  steps:
    - run: echo Hello, %USERNAME%!

linux_job:
  runs-on: ubuntu-latest
  steps:
    - run: echo "Hello, $USER!"
```
{% endraw %}
</td>
</tr>
</table>

자세한 내용은 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)”을 참조하세요.

## Docker 이미지

GitLab CI/CD 및 {% data variables.product.prodname_actions %}는 모두 Docker 이미지에서 실행 작업을 지원합니다. GitLab CI/CD에서 Docker 이미지는 `image` 키를 통해 정의되지만 {% data variables.product.prodname_actions %}에서는 `container` 키를 통해 수행됩니다.

다음은 각 시스템에 대한 구문의 예입니다.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
my_job:
  image: node:10.16-jessie
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```
{% endraw %}
</td>
</tr>
</table>

자세한 내용은 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)”을 참조하세요.

## 조건 및 식 구문

GitLab CI/CD는 `rules`를 사용하여 특정 조건에 대한 작업을 실행할지 여부를 결정합니다. {% data variables.product.prodname_actions %}는 조건이 충족되지 않는 한 작업이 실행되지 않도록 `if` 키워드를 사용합니다.

다음은 각 시스템에 대한 구문의 예입니다.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
deploy_prod:
  stage: deploy
  script:
    - echo "Deploy to production server"
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  deploy_prod:
    if: contains( github.ref, 'master')
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy to production server"
```
{% endraw %}
</td>
</tr>
</table>

자세한 내용은 “[언어 식](/actions/learn-github-actions/expressions)”을 참조하세요.

## 작업 간의 종속성

GitLab CI/CD와 {% data variables.product.prodname_actions %}를 사용하면 작업에 대한 종속성을 설정할 수 있습니다. 두 시스템 모두 작업은 기본적으로 동시에 실행되지만 {% data variables.product.prodname_actions %}의 작업 종속성은 `needs` 키를 통해 명시적으로 지정할 수 있습니다. 또한 GitLab CI/CD에는 한 스테이지의 작업이 동시에 실행되는 `stages` 개념도 있지만, 이전 스테이지의 모든 작업이 완료되면 다음 스테이지가 시작됩니다. {% data variables.product.prodname_actions %}에서 `needs` 키를 사용하여 이 시나리오를 다시 만들 수 있습니다.

다음은 각 시스템에 대한 구문의 예입니다. 워크플로는 `build_a` 및 `build_b`라고 명명된 병렬로 실행되는 두 개의 작업으로 시작하며, 이 작업이 완료되면 `test_ab`라는 다른 작업이 실행됩니다. 마지막으로 `test_ab`가 완료되면 `deploy_ab` 작업이 실행됩니다.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
stages:
  - build
  - test
  - deploy

build_a: stage: build script:
    - echo "This job will run first."

build_b: stage: build script:
    - echo "This job will run first, in parallel with build_a."

test_ab: stage: test script:
    - echo "This job will run after build_a and build_b have finished."

deploy_ab: stage: deploy script:
    - echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build_a:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."

  build_b:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first, in parallel with build_a"

  test_ab:
    runs-on: ubuntu-latest
    needs: [build_a,build_b]
    steps:
      - run: echo "This job will run after build_a and build_b have finished"

  deploy_ab:
    runs-on: ubuntu-latest
    needs: [test_ab]
    steps:
      - run: echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
</tr>
</table>

자세한 내용은 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)”을 참조하세요.

## 워크플로 예약

GitLab CI/CD 및 {% data variables.product.prodname_actions %}를 사용하면 특정 간격으로 워크플로를 실행할 수 있습니다. GitLab CI/CD에서 파이프라인 일정은 UI를 사용하여 구성되지만 {% data variables.product.prodname_actions %}에서는 “켜기” 키를 사용하여 예약된 간격으로 워크플로를 트리거할 수 있습니다.

자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows#scheduled-events)”를 참조하세요.

## 변수 및 비밀

GitLab CI/CD 및 {% data variables.product.prodname_actions %}는 파이프라인 또는 워크플로 구성 파일에서 환경 변수를 설정하고 GitLab 또는 {% data variables.product.product_name %} UI를 사용하여 비밀을 만들 수 있습니다.

자세한 내용은 “[환경 변수](/actions/reference/environment-variables)” 및 “[암호화된 비밀](/actions/reference/encrypted-secrets)”을 참조하세요.

## 캐싱

GitLab CI/CD 및 {% data variables.product.prodname_actions %}는 구성 파일에서 워크플로 파일을 수동으로 캐시하는 메서드를 제공합니다.

{% ifversion actions-caching %}

다음은 각 시스템에 대한 구문의 예입니다.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
image: node:latest

cache: key: $CI_COMMIT_REF_SLUG paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async: script:
    - node ./specs/start.js ./specs/async.spec.js
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  test_async:
    runs-on: ubuntu-latest
    steps:
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

## Artifacts

GitLab CI/CD 및 {% data variables.product.prodname_actions %}는 작업에서 만든 파일 및 디렉터리를 아티팩트로 업로드할 수 있습니다. {% data variables.product.prodname_actions %}에서 아티팩트가 여러 작업에 걸쳐 데이터를 유지하는 데 사용할 수 있습니다.

다음은 각 시스템에 대한 구문의 예입니다.

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
script:
artifacts:
  paths:
    - math-homework.txt
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt
```

</td>
</tr>
</table>

자세한 내용은 “[워크플로 데이터를 아티팩트로 저장](/actions/guides/storing-workflow-data-as-artifacts)”을 참조하세요.

## 데이터베이스 및 서비스 컨테이너

두 시스템 모두 데이터베이스, 캐싱 또는 기타 종속성에 대한 추가 컨테이너를 포함할 수 있습니다.

GitLab CI/CD에서 작업에 대한 컨테이너는 `image` 키로 지정되고 {% data variables.product.prodname_actions %}는 `container` 키를 사용합니다. 두 시스템 모두에서 추가 서비스 컨테이너가 `services` 키로 지정됩니다.

다음은 각 시스템에 대한 구문의 예입니다.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
container-job:
  variables:
    POSTGRES_PASSWORD: postgres
    # The hostname used to communicate with the
    # PostgreSQL service container
    POSTGRES_HOST: postgres
    # The default PostgreSQL port
    POSTGRES_PORT: 5432
  image: node:10.18-jessie
  services:
    - postgres
  script:
    # Performs a clean installation of all dependencies
    # in the `package.json` file
    - npm ci
    # Runs a script that creates a PostgreSQL client,
    # populates the client with data, and retrieves data
    - node client.js
  tags:
    - docker
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie

    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres

    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies
      # in the `package.json` file
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL client,
        # populates the client with data, and retrieves data
        run: node client.js
        env:
          # The hostname used to communicate with the
          # PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```

</td>
</tr>
</table>

자세한 내용은 “[서비스 컨테이너 정보](/actions/guides/about-service-containers)”를 참조하세요.

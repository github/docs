---
title: CircleCI에서 GitHub Actions로 마이그레이션
intro: GitHub Actions CircleCI는 구성에서 몇 가지 유사점을 공유하므로 GitHub Actions 마이그레이션이 비교적 간단합니다.
redirect_from:
  - /actions/learn-github-actions/migrating-from-circleci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CircleCI
  - Migration
  - CI
  - CD
shortTitle: Migrate from CircleCI
ms.openlocfilehash: d3f7a527f21588ec2bd60e04639a861c35b12b7f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147518970'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

CircleCI 및 {% data variables.product.prodname_actions %}를 사용하면 코드를 자동으로 빌드하고 테스트하고 게시하고 릴리스하고 배포하는 워크플로를 만들 수 있습니다. CircleCI 및 {% data variables.product.prodname_actions %}는 워크플로 구성에서 몇 가지 유사점을 공유합니다.

- 워크플로 구성 파일은 YAML로 작성되며 리포지토리에 저장됩니다.
- 워크플로에는 하나 이상의 작업이 포함됩니다.
- 작업에는 하나 이상의 단계 또는 개별 명령이 포함됩니다.
- 단계 또는 작업을 다시 사용하고 커뮤니티와 공유할 수 있습니다.

자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 핵심 개념](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)”을 참조하세요.

## 주요 차이점

CircleCI에서 마이그레이션하는 경우 다음과 같은 차이점을 고려하세요.

- CircleCI의 자동 테스트 병렬 처리는 사용자가 지정한 규칙 또는 기록 타이밍 정보에 따라 테스트를 자동으로 그룹화합니다. 이 기능은 {% data variables.product.prodname_actions %}에 기본 제공되지 않습니다.
- 컨테이너의 사용자 매핑이 다르기 때문에 Docker 컨테이너에서 실행되는 작업은 권한 문제에 민감합니다. *Dockerfile* 의 `USER` 명령을 사용하지 않으면 많은 문제를 방지할 수 있습니다. {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %}{% data variables.product.product_name %}에서 호스트되는 실행기의 Docker 파일 시스템에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 호스트되는 실행기를 위한 실행기 이미지](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)”를 참조하세요.
{% endif %}

## 워크플로 및 작업 마이그레이션

CircleCI는 *config.yml* 파일에서 `workflows`를 정의합니다. 이를 통해 둘 이상의 워크플로를 구성할 수 있습니다. {% data variables.product.product_name %}에는 워크플로당 하나의 워크플로 파일이 필요하므로 `workflows`를 선언할 필요가 없습니다. *config.yml* 에 구성된 각 워크플로에 대한 새 워크플로 파일을 만들어야 합니다.

CircleCI와 {% data variables.product.prodname_actions %}는 비슷한 구문을 사용하여 구성 파일에서 `jobs`를 구성합니다. CircleCI 워크플로에서 `requires`를 사용하는 작업 간의 종속성을 구성하는 경우 해당 {% data variables.product.prodname_actions %} `needs` 구문을 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)”을 참조하세요.

## 작업으로 orbs 마이그레이션

CircleCI 및 {% data variables.product.prodname_actions %}는 워크플로에서 작업을 재사용하고 공유하는 메커니즘을 제공합니다. CircleCI는 YAML로 작성된 orbs라는 개념을 사용하여 워크플로에서 다시 사용할 수 있는 작업을 제공합니다. {% data variables.product.prodname_actions %}에는 JavaScript 파일 또는 Docker 이미지로 빌드하는 작업이라는 강력하고 유연하며 재사용 가능한 구성 요소가 있습니다. {% data variables.product.product_name %}의 API 및 공개적으로 사용 가능한 타사 API와의 통합을 포함하여 원하는 방식으로 리포지토리와 상호 작용하는 사용자 지정 코드를 써서 작업을 만들 수 있습니다. 예를 들어 작업은 npm 모듈을 게시할 수 있고 긴급한 이슈가 발생할 때 SMS 알림을 보낼 수 있으며 프로덕션 준비 코드를 배포할 수 있습니다. 자세한 내용은 “[작업 만들기](/actions/creating-actions)”를 참조하세요.

CircleCI는 YAML 앵커 및 별칭을 사용하여 워크플로 부분을 다시 사용할 수 있습니다. {% data variables.product.prodname_actions %}는 행렬을 사용한 재사용성에 대한 가장 일반적인 요구 사항을 지원합니다. 행렬에 대한 자세한 내용은 "[작업에 행렬 사용](/actions/using-jobs/using-a-matrix-for-your-jobs)"을 참조하세요.

## Docker 이미지 사용


CircleCI 및 {% data variables.product.prodname_actions %}는 Docker 이미지 내부의 실행 단계를 지원합니다.

CircleCI는 일반적인 종속성이 있는 미리 빌드된 이미지 집합을 제공합니다. 해당 이미지에는 `USER`가 `circleci`로 설정되어 있으며 이로 인해 사용 권한이 {% data variables.product.prodname_actions %}와 충돌합니다.

{% data variables.product.prodname_actions %}로 마이그레이션할 때는 CircleCI의 미리 빌드된 이미지를 사용하지 않는 것이 좋습니다. 대부분의 경우 작업을 사용하여 필요한 추가 종속성을 설치할 수 있습니다.

{% ifversion ghae %} Docker 파일 시스템에 대한 자세한 내용은 “[Docker 컨테이너 파일 시스템](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)”을 참조하세요.

{% data reusables.actions.self-hosted-runners-software %} {% else %} Docker 파일 시스템에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 호스트되는 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)”를 참조하세요.

{% data variables.product.prodname_dotcom %}에서 호스트되는 실행기 이미지에서 사용할 수 있는 도구 및 패키지에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 호스트된 실행기의 사양](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”을 참조하세요.
{% endif %}

## 변수 및 비밀 사용

CircleCI 및 {% data variables.product.prodname_actions %}는 구성 파일에서 환경 변수를 설정하고 CircleCI 또는 {% data variables.product.product_name %} UI를 사용하여 비밀을 만들 수 있습니다.

자세한 내용은 “[환경 변수 사용](/actions/configuring-and-managing-workflows/using-environment-variables)” 및 “[암호화된 비밀 만들기 및 사용](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)”을 참조하세요.

## 캐싱

CircleCI 및 {% data variables.product.prodname_actions %}는 구성 파일에서 파일을 수동으로 캐시하는 메서드를 제공합니다.

{% ifversion actions-caching %}

다음은 각 시스템에 대한 구문의 예입니다.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub 작업
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- restore_cache:
    keys:
      - v1-npm-deps-{{ checksum "package-lock.json" }}
      - v1-npm-deps-
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

{% data variables.product.prodname_actions %}에는 CircleCI의 Docker 계층 캐싱(또는 DLC)에 해당하는 것이 없습니다.

## 작업 간에 데이터 유지

CircleCI와 {% data variables.product.prodname_actions %}는 작업 간에 데이터를 유지하는 메커니즘을 제공합니다.

다음은 CircleCI 및 {% data variables.product.prodname_actions %} 구성 구문의 예입니다.

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub 작업
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- persist_to_workspace:
    root: workspace
    paths:
      - math-homework.txt

...

- attach_workspace:   at: /tmp/workspace
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

...

- name: Download math result for job 1
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: homework
```

</td>
</tr>
</table>

자세한 내용은 “[아티팩트를 사용하여 워크플로 데이터 유지](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)”를 참조하세요.

## 데이터베이스 및 서비스 컨테이너 사용

두 시스템 모두 데이터베이스, 캐싱 또는 기타 종속성에 대한 추가 컨테이너를 포함할 수 있습니다.

CircleCI에서 *config.yaml* 에 나열된 첫 번째 이미지는 명령을 실행하는 데 사용되는 기본 이미지입니다. {% data variables.product.prodname_actions %}는 명시적 섹션을 사용합니다. 즉, `container`를 기본 컨테이너에 사용하고 추가 컨테이너를 `services`에 나열합니다.

다음은 CircleCI 및 {% data variables.product.prodname_actions %} 구성 구문의 예입니다.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub 작업
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26: docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""

    working_directory: ~/administrate

    steps:
      - checkout

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake


workflows: version: 2 build: jobs: - ruby-26 ...

- attach_workspace:   at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
name: Containers

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    container: circleci/ruby:2.6.3-node-browsers-legacy

    env:
      PGHOST: postgres
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      # This Docker file changes sets USER to circleci instead of using the default user, so we need to update file permissions for this image to work on GH Actions.
      # See https://docs.github.com/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem

      - name: Setup file system permissions
        run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
```
</td>
</tr>
</table>

자세한 내용은 “[서비스 컨테이너 정보](/actions/configuring-and-managing-workflows/about-service-containers)”를 참조하세요.

## 완성된 예제

다음은 실제 사례입니다. 왼쪽은 [thoughtbot/administrator](https://github.com/thoughtbot/administrate) 리포지토리에 대한 실제 CircleCI *config.yml* 입니다. 오른쪽은 {% data variables.product.prodname_actions %}의 동일한 항목입니다.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub 작업
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands: shared_steps: steps: - checkout

      # Restore Cached Dependencies
      - restore_cache:
          name: Restore bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Cache Dependencies
      - save_cache:
          name: Store bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}
          paths:
            - vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake

default_job: &default_job working_directory: ~/administrate steps:
    - shared_steps
    # Run the tests against multiple versions of Rails
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs: ruby-25: <<: *default_job docker: - image: circleci/ruby:2.5.0-node-browsers environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby25 POSTGRES_PASSWORD: ""

  ruby-26: <<: *default_job docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""


workflows: version: 2 multiple-rubies: jobs: - ruby-26 - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Containers

on: [push]

jobs:
  build:

    strategy:
      matrix:
        ruby: [2.5, 2.6.3]

    runs-on: ubuntu-latest

    env:
      PGHOST: localhost
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Ruby
        uses: eregon/use-ruby-action@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - name: Cache dependencies
        uses: {% data reusables.actions.action-cache %}
        with:
          path: vendor/bundle
          key: administrate-{% raw %}${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}{% endraw %}
      - name: Install postgres headers
        run: |
          sudo apt-get update
          sudo apt-get install libpq-dev
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
      - name: Install appraisal
        run: bundle exec appraisal install
      - name: Run appraisal
        run: bundle exec appraisal rake
```
</td>
</tr>
</table>

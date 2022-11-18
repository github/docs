---
title: Node.js 빌드 및 테스트
intro: CI(연속 통합) 워크플로를 만들어 Node.js 프로젝트를 빌드하고 테스트할 수 있습니다.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
  - /actions/guides/building-and-testing-nodejs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Node
  - JavaScript
shortTitle: Build & test Node.js
ms.openlocfilehash: 25e44f1454387a84dd198ea9998d1ebc2f94cfe7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179025'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 Node.js 코드를 빌드하고 테스트하는 CI(연속 통합) 워크플로를 만드는 방법을 보여 줍니다. CI 테스트에 통과하면 코드를 배포하거나 패키지를 게시할 수 있습니다.

## 필수 조건

Node.js, YAML, 워크플로 구성 옵션과 워크플로 파일을 만드는 방법을 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 다음을 참조하세요.

- “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”
- “[Node.js 시작](https://nodejs.org/en/docs/guides/getting-started-guide/)”

{% data reusables.actions.enterprise-setup-prereq %}

## Node.js 시작 워크플로 사용

{% data variables.product.prodname_dotcom %}는 대부분의 Node.js 기반 Java 프로젝트에서 작동하는 Node.js 시작 워크플로를 제공합니다. 이 가이드에는 시작 워크플로를 사용자 지정하는 데 사용할 수 있는 npm 및 Yarn 예제가 포함되어 있습니다. 자세한 내용은 [Node.js 시작 워크플로](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml)를 참조하세요.

빠르게 시작하려면 시작 워크플로를 리포지토리의 `.github/workflows` 디렉터리에 추가합니다. 아래에 표시된 워크플로는 리포지토리의 기본 분기가 `main`이라고 가정합니다.

```yaml{:copy}
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

{% data reusables.actions.example-github-runner %}

## Node.js 버전 지정

Node.js 버전을 지정하는 가장 쉬운 방법은 {% data variables.product.prodname_dotcom %}에서 제공하는 `setup-node` 작업을 사용하는 것입니다. 자세한 내용은 [`setup-node`](https://github.com/actions/setup-node/)를 참조하세요.

이 `setup-node` 작업은 Node.js 버전을 입력으로 사용하고 실행기에서 해당 버전을 구성합니다. `setup-node` 작업은 각 실행기의 도구 캐시에서 Node.js의 특정 버전을 찾아 필수 이진 파일을 `PATH`에 추가합니다. 이 이진 파일은 나머지 작업 동안 유지됩니다. `setup-node` 작업을 사용하는 것은 다양한 실행기 및 Node.js 버전 간에 일관된 동작을 보장하므로 {% data variables.product.prodname_actions %}로 Node.js를 사용하는 데 권장되는 방법입니다. 자체 호스트 실행기를 사용하는 경우 Node.js를 설치하고 이를 `PATH`에 추가해야 합니다.

시작 워크플로에는 4가지 Node.js 버전(10.x, 12.x, 14.x, 15.x)으로 코드를 빌드하고 테스트하는 매트릭스 전략이 포함되어 있습니다. ‘x’는 버전에 사용할 수 있는 최신 부 버전 및 패치 릴리스와 일치하는 와일드카드 문자입니다. `node-version` 배열에 지정된 Node.js의 각 버전은 동일한 단계를 실행하는 작업을 만듭니다.

각 작업은 `matrix` 컨텍스트를 사용하여 매트릭스 `node-version` 배열에 정의된 값에 액세스할 수 있습니다. `setup-node` 작업은 컨텍스트를 `node-version` 입력으로 사용합니다. `setup-node` 작업은 코드를 빌드하고 테스트하기 전에 다른 Node.js 버전으로 각 작업을 구성합니다. 매트릭스 전략 및 컨텍스트에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)” 및 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요.

```yaml{:copy}
strategy:
  matrix:
    node-version: [10.x, 12.x, 14.x, 15.x]

steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
```

또는 정확한 Node.js 버전으로 빌드하고 테스트할 수 있습니다.

```yaml{:copy}
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

단일 버전의 Node.js를 사용하여 빌드하고 테스트할 수도 있습니다.

```yaml{:copy}
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
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

Node.js 버전을 지정하지 않으면 {% data variables.product.prodname_dotcom %}에서 환경의 기본 Node.js 버전을 사용합니다.
{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} 자세한 내용은 “[ {% data variables.product.prodname_dotcom %} 호스트 실행기 사양](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”을 참조하세요.
{% endif %}

## 종속성 설치

{% data variables.product.prodname_dotcom %} 호스트 실행기에는 npm 및 Yarn 종속성 관리자가 설치되어 있습니다. 코드를 빌드하고 테스트하기 전에 npm 및 Yarn을 사용하여 워크플로에 종속성을 설치할 수 있습니다. Windows 및 Linux {% data variables.product.prodname_dotcom %}호스트 실행기에도 Grunt, Gulp, Bower가 설치되어 있습니다.

{% ifversion actions-caching %}종속성을 캐시하여 워크플로 속도를 높일 수도 있습니다. 자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”을 참조하세요.{% endif %}

### npm을 사용한 예제

이 예제에서는 *package.json* 파일에 정의된 종속성을 설치합니다. 자세한 내용은 [`npm install`](https://docs.npmjs.com/cli/install)를 참조하세요.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

`npm ci`를 사용하면 *package-lock.json* 또는 *npm-shrinkwrap.json* 파일에 버전이 설치되고 잠금 파일이 업데이트되지 않습니다. 일반적으로 `npm ci`를 사용하는 것이 `npm install`을 실행하는 것보다 빠릅니다. 자세한 내용은 [`npm ci`](https://docs.npmjs.com/cli/ci.html) 및 “[더 빠르고 안정적인 빌드를 위한 `npm ci` 소개](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)”를 참조하세요.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```

### Yarn을 사용한 예제

이 예제에서는 *package.json* 파일에 정의된 종속성을 설치합니다. 자세한 내용은 [`yarn install`](https://yarnpkg.com/en/docs/cli/install)를 참조하세요.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

또는 `--frozen-lockfile`을 전달하여 `yarn.lock` 파일에 버전을 설치하고 `yarn.lock` 파일이 업데이트되지 않습니다.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

### 프라이빗 레지스트리를 사용하고 .npmrc 파일을 만드는 예제

{% data reusables.actions.setup-node-intro %}

프라이빗 레지스트리에 인증하려면 npm 인증 토큰을 비밀로 저장해야 합니다. 예를 들어 `NPM_TOKEN`이라는 레지스트리 비밀을 만듭니다. 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

아래 예제에서 비밀 `NPM_TOKEN`은 npm 인증 토큰을 저장합니다. `setup-node` 작업은 `NODE_AUTH_TOKEN` 환경 변수에서 npm 인증 토큰을 읽도록 *.npmrc* 파일을 구성합니다. `setup-node` 작업을 사용하여 *.npmrc* 파일을 만들 때 npm 인증 토큰이 포함된 비밀로 `NODE_AUTH_TOKEN` 환경 변수를 설정해야 합니다.

종속성을 설치하기 전에 `setup-node` 작업을 사용하여 *.npmrc* 파일을 만듭니다. 작업에는 두 개의 입력 매개 변수가 있습니다. `node-version` 매개 변수는 Node.js 버전을 설정하고 `registry-url` 매개 변수는 기본 레지스트리를 설정합니다. 패키지 레지스트리에서 범위를 사용하는 경우 `scope` 매개 변수를 사용해야 합니다. 자세한 내용은 [`npm-scope`](https://docs.npmjs.com/misc/scope)를 참조하세요.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

위의 예제에서는 다음 콘텐츠가 포함된 *.npmrc* 파일을 만듭니다.

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

{% ifversion actions-caching %}

### 종속성 캐싱 예제

[`setup-node`작업](https://github.com/actions/setup-node)을 사용하여 종속성을 캐시하고 복원할 수 있습니다.

다음 예제에서는 npm에 대한 종속성을 캐시합니다.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'npm'
- run: npm install
- run: npm test
```

다음 예제에서는 Yarn에 대한 종속성을 캐시합니다.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'yarn'
- run: yarn
- run: yarn test
```

다음 예제에서는 pnpm(v6.10 이상)에 대한 종속성을 캐시합니다.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

# NOTE: pnpm caching support requires pnpm version >= 6.10.0

steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: pnpm/action-setup@646cdf48217256a3d0b80361c5a50727664284f2
  with:
    version: 6.10.0
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'pnpm'
- run: pnpm install
- run: pnpm test
```

사용자 지정 요구사항이 있거나 캐싱에 대한 세부적인 제어가 필요한 경우 [`cache` 작업](https://github.com/marketplace/actions/cache)을 사용할 수 있습니다. 자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”을 참조하세요.

{% endif %}

## 코드 빌드 및 테스트

코드를 빌드하고 테스트하기 위해 로컬에서 사용하는 것과 동일한 명령을 사용할 수 있습니다. 예를 들어 `npm run build`를 실행하여 *package.json* 파일에 정의된 빌드 단계를 실행하고 `npm test`를 실행하여 테스트 모음을 실행하는 경우 워크플로 파일에 해당 명령을 추가합니다.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

## 워크플로 데이터를 아티팩트로 패키지

빌드 및 테스트 단계에서 아티팩트를 저장하여 작업이 완료된 후 볼 수 있습니다. 예를 들어 로그 파일, 코어 덤프, 테스트 결과 또는 스크린샷을 저장해야 할 수 있습니다. 자세한 내용은 “[아티팩트를 사용하여 워크플로 데이터 유지](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”를 참조하세요.

## 패키지 레지스트리에 게시

CI 테스트에 통과하면 Node.js 패키지를 패키지 레지스트리에 게시하도록 워크플로를 구성할 수 있습니다. npm 및 {% data variables.product.prodname_registry %}에 게시하는 방법에 대한 자세한 내용은 “[Node.js 패키지 게시](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)”를 참조하세요.

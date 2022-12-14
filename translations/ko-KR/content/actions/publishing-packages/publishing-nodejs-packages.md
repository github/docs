---
title: Node.js 패키지 게시
shortTitle: Publish Node.js packages
intro: CI(연속 통합) 워크플로의 일부로 Node.js 패키지를 레지스트리에 게시할 수 있습니다.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
  - /actions/guides/publishing-nodejs-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Node
  - JavaScript
ms.openlocfilehash: 7a2b55e99ca4cdb6e27b36480d35f0c2595a336f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094499'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 CI(연속 통합) 테스트에 통과한 후 {% data variables.product.prodname_registry %} 및 npm 레지스트리에 Node.js 패키지를 게시하는 워크플로를 만드는 방법을 보여 줍니다.

## 필수 조건

워크플로 구성 옵션과 워크플로 파일을 만드는 방법을 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”를 참조하세요.

Node.js 프로젝트에 대한 CI 워크플로를 만드는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에서 Node.js 사용](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)”을 참조하세요.

또한 다음 사항을 기본적으로 이해하는 것이 유용할 수 있습니다.

- “[npm 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)”
- “[환경 변수](/actions/reference/environment-variables)”
- “[암호화된 비밀](/actions/reference/encrypted-secrets)”
- “[워크플로의 인증](/actions/reference/authentication-in-a-workflow)”

## 패키지 구성 정보

 *package.json* 파일의 `name` 및 `version` 필드는 레지스트리가 패키지를 레지스트리에 연결하는 데 사용하는 패키지의 고유 식별자를 만듭니다. *package.json* 파일에 `description`필드를 포함하여 패키지 목록 페이지에 대한 요약을 추가할 수 있습니다. 자세한 내용은 npm 설명서에서 “[package.json 파일 만들기](https://docs.npmjs.com/creating-a-package-json-file)” 및 “[Node.js 모듈 만들기](https://docs.npmjs.com/creating-node-js-modules)”를 참조하세요.

로컬 *.npmrc* 파일이 있고 지정된 `registry` 값이 있는 경우 `npm publish` 명령은 *.npmrc* 파일에 구성된 레지스트리를 사용합니다. {% data reusables.actions.setup-node-intro %}

`setup-node` 작업을 사용하여 실행기에서 설치되는 Node.js 버전을 지정할 수 있습니다.

*package.json* 파일에서 `publishConfig` 필드를 구성하는 단계를 워크플로에서 추가하는 경우 `setup-node` 작업을 사용하여 레지스트리 URL을 지정할 필요는 없지만 패키지를 레지스트리 하나에 게시하도록 제한됩니다. 자세한 내용은 npm 설명서에서 “[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)”를 참조하세요.

## npm 레지스트리에 패키지 게시

새 릴리스를 만들 때마다 워크플로를 트리거하여 패키지를 게시할 수 있습니다. 아래 예제의 워크플로는 `release` 이벤트가 `created` 형식으로 트리거될 때 실행됩니다. CI 테스트에 통과하면 워크플로가 npm 레지스트리에 패키지를 게시합니다.

워크플로에서 npm 레지스트리에 대해 인증된 작업을 수행하려면 npm 인증 토큰을 비밀로 저장해야 합니다. 예를 들어 `NPM_TOKEN`이라는 레지스트리 비밀을 만듭니다. 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

기본적으로 npm은 *package.json* 파일의 `name` 필드를 사용하여 게시된 패키지의 이름을 확인합니다. 전역 네임스페이스에 게시하는 경우 패키지 이름만 포함하면 됩니다. 예를 들어 `https://www.npmjs.com/package/npm-hello-world-test`에 `npm-hello-world-test`라고 이름이 지정된 패키지를 게시합니다.

범위 접두사를 포함한 패키지를 게시하는 경우 *package.json* 파일의 이름에 범위를 포함합니다. 예를 들어, npm 범위 접두사가 octocat이고 패키지 이름이 hello-world인 경우 *package.json* 파일의 `name`은 `@octocat/hello-world`여야 합니다. npm 패키지에서 범위 접두사를 사용하고 패키지가 퍼블릭인 경우 `npm publish --access public` 옵션을 사용해야 합니다. 이 옵션은 npm에서 누군가가 의도치 않게 프라이빗 패키지를 게시하지 못하도록 방지하는 옵션입니다.

이 예제에서는 `NODE_AUTH_TOKEN` 환경 변수에 `NPM_TOKEN` 비밀을 저장합니다. `setup-node` 작업이 *.npmrc* 파일을 만들 때 `NODE_AUTH_TOKEN` 환경 변수에서 토큰을 참조합니다.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

위의 예제에서 `setup-node` 작업은 다음 내용이 포함된 실행기에서 *.npmrc* 파일을 만듭니다.

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

자격 증명을 올바르게 구성하려면 `setup-node`에서 `registry-url`을 `https://registry.npmjs.org/`로 설정해야 합니다.

## {% data variables.product.prodname_registry %}에 패키지 게시

새 릴리스를 만들 때마다 워크플로를 트리거하여 패키지를 게시할 수 있습니다. 아래 예제의 워크플로는 유형이 `created`인 `release` 이벤트가 발생할 때마다 실행됩니다. 이 워크플로는 CI 테스트가 통과될 경우 {% data variables.product.prodname_registry %}에 패키지를 게시합니다.

### 대상 리포지토리 구성

`repository` 키를 사용하여 {% data variables.product.prodname_registry %}에 패키지를 연결하는 것은 선택 사항입니다. `repository`package.json *파일에서 키를 제공하지* 않도록 선택하면 {% data variables.product.prodname_registry %}는 *package.json* 파일의 `name` 필드에 지정한 {% data variables.product.prodname_dotcom %} 리포지토리에서 패키지를 게시합니다. 예를 들어 `@my-org/test`라는 패키지가 `my-org/test` {% data variables.product.prodname_dotcom %} 리포지토리에 게시됩니다. `repository` 키에 지정된 `url`이 유효하지 않은 경우 패키지는 계속 게시될 수 있지만 의도한 대로 리포지토리 원본에 연결되지는 않습니다.

그러나 *package.json* 파일에서 `repository` 키를 제공하면 해당 키의 리포지토리가 {% data variables.product.prodname_registry %}의 대상 npm 레지스트리로 사용됩니다. 예를 들어 아래 *package.json* 을 게시하면 `octocat/my-other-repo` {% data variables.product.prodname_dotcom %} 리포지토리에 `my-amazing-package`라는 패키지가 게시됩니다. 게시되면 리포지토리 원본만 업데이트되고 패키지는 대상 리포지토리에서 사용 권한을 상속하지 않습니다.

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

### 대상 리포지토리에 인증

워크플로에서 {% data variables.product.prodname_registry %} 레지스트리에 대해 인증된 작업을 수행하기 위해 `GITHUB_TOKEN`을 사용할 수 있습니다. {% data reusables.actions.github-token-permissions %}

패키지를 다른 리포지토리에 게시하려면 대상 리포지토리의 패키지에 쓸 수 있는 권한이 있는 {% 데이터 variables.product.pat_v1 %}을(를) 사용해야 합니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)" 및 "[암호화된 비밀"을 참조하세요](/actions/reference/encrypted-secrets).

### 예제 워크플로

이 예제에서는 `NODE_AUTH_TOKEN` 환경 변수에 `GITHUB_TOKEN` 비밀을 저장합니다. `setup-node` 작업이 *.npmrc* 파일을 만들 때 `NODE_AUTH_TOKEN` 환경 변수에서 토큰을 참조합니다.

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to GitHub Packages
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://npm.pkg.github.com'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

이 `setup-node` 작업은 실행기에서 *.npmrc* 파일을 만듭니다. `setup-node` 작업에 대해 `scope` 입력을 사용하는 경우 *.npmrc* 파일에는 범위 접두사가 포함됩니다. 기본적으로 `setup-node` 작업은 *.npmrc* 파일의 범위를 해당 워크플로 파일이 포함된 계정으로 설정합니다.

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

## yarn을 사용하여 패키지 게시

Yarn 패키지 관리자를 사용하는 경우 Yarn을 사용하여 패키지를 설치하고 게시할 수 있습니다.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: yarn
      - run: yarn publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

---
title: JavaScript 작업 만들기
shortTitle: Create a JavaScript action
intro: 이 가이드에서는 작업 도구 키트를 사용하여 JavaScript 작업을 빌드하는 방법을 알아봅니다.
redirect_from:
  - /articles/creating-a-javascript-action
  - /github/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/building-actions/creating-a-javascript-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - JavaScript
ms.openlocfilehash: 60fd562df55756afd081c395d9cffee89c2c04d6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192747'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 패키지된 JavaScript 작업을 만들고 사용하는 데 필요한 기본 구성 요소에 대해 알아봅니다. 작업을 패키지하는 데 필요한 구성 요소에 가이드의 초점을 맞추기 위해 작업 코드의 기능은 최소화됩니다. 사용자 지정 이름을 제공하면 로그에 “Hello World” 또는 “Hello [인사할 사람]”이 출력됩니다.

이 가이드에서는 {% data variables.product.prodname_actions %} 도구 키트 Node.js 모듈을 사용하여 개발 속도를 향상합니다. 자세한 내용은 [actions/toolkit](https://github.com/actions/toolkit) 리포지토리를 참조하세요.

이 프로젝트를 완료하면 사용자 고유의 JavaScript 작업을 빌드하고 워크플로에서 테스트하는 방법을 이해하게 됩니다.

{% data reusables.actions.pure-javascript %}

{% data reusables.actions.context-injection-warning %}

## 필수 조건

시작하기 전에 Node.js를 다운로드하고 퍼블릭 {% data variables.product.prodname_dotcom %} 리포지토리를 만들어야 합니다.

1. npm을 포함하는 {% ifversion fpt or ghes > 3.3 또는 ghae > ghec %}16.x{% else %}12.x{% endif %}에 Node.js 다운로드하고 설치합니다.

  {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}https://nodejs.org/en/download/{% else %}https://nodejs.org/en/download/releases/{% endif %}

1. {% data variables.location.product_location %}에 새 퍼블릭 리포지토리를 만들고 이를 "hello-world-javascript-action"이라고 부릅니다. 자세한 내용은 “[새 리포지토리 만들기](/articles/creating-a-new-repository)”를 참조하세요.

1. 컴퓨터에 리포지토리를 복제합니다. 자세한 내용은 “[리포지토리 복제](/articles/cloning-a-repository)”를 참조하세요.

1. 터미널에서 디렉터리를 새 리포지토리로 변경합니다.

  ```shell{:copy}
  cd hello-world-javascript-action
  ```

1. 터미널에서 npm으로 디렉터리를 초기화하여 `package.json` 파일을 생성합니다.

  ```shell{:copy}
  npm init -y
  ```

## 작업 메타데이터 파일 만들기

다음 예제 코드를 사용하여 `hello-world-javascript-action` 디렉터리에 `action.yml`이라는 새 파일을 만듭니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 메타데이터 구문](/actions/creating-actions/metadata-syntax-for-github-actions)”을 참조하세요.

```yaml{:copy}
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
```

이 파일은 `who-to-greet` 입력 및 `time` 출력을 정의합니다. 또한 작업 실행기에서 JavaScript 작업 실행을 시작하는 방법을 알려줍니다.

## 작업 도구 키트 패키지 추가

작업 도구 키트는 더 일관적으로 JavaScript 작업을 빠르게 빌드할 수 있는 Node.js 패키지의 컬렉션입니다.

도구 키트 [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) 패키지는 워크플로 명령, 입력 및 출력 변수, 종료 상태, 디버그 메시지에 대한 인터페이스를 제공합니다.

도구 키트는 또한 인증된 Octokit REST 클라이언트와 GitHub Actions 컨텍스트에 대한 액세스를 반환하는 [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github) 패키지도 제공합니다.

도구 키트는 `core` 및 `github` 패키지 이상을 제공합니다. 자세한 내용은 [actions/toolkit](https://github.com/actions/toolkit) 리포지토리를 참조하세요.

터미널에서 작업 도구 키트 `core` 및 `github` 패키지를 설치합니다.

```shell{:copy}
npm install @actions/core
npm install @actions/github
```

이제 방금 설치한 모듈이 있는 `node_modules` 디렉터리와 설치된 모듈 종속성과 설치된 각 모듈의 버전이 있는 `package-lock.json` 파일이 표시되어야 합니다.

## 작업 코드 작성

이 작업은 도구 키트를 사용하여 작업의 메타데이터 파일에 필요한 `who-to-greet` 입력 변수를 가져오고 로그의 디버그 메시지에 “Hello [who-to-greet]”를 출력합니다. 다음으로 스크립트는 현재 시간을 가져오고 나중에 작업에서 실행되는 작업에서 사용할 수 있는 출력 변수로 설정합니다.

GitHub Actions는 웹후크 이벤트, Git ReFS, 워크플로, 작업, 워크플로를 트리거한 사람에 대한 컨텍스트 정보를 제공합니다. 컨텍스트 정보에 액세스하려면 `github` 패키지를 사용할 수 있습니다. 작성할 작업은 웹후크 이벤트 페이로드를 로그에 출력합니다.

다음 코드를 사용하여 `index.js`라는 새 파일을 추가합니다.

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
```
{% endraw %}

위 `index.js` 예제에서 오류가 throw되면 `core.setFailed(error.message);`는 작업 도구 키트 [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) 패키지를 사용하여 메시지를 기록하고 실패한 종료 코드를 설정합니다. 자세한 내용은 “[작업에 대한 종료 코드 설정](/actions/creating-actions/setting-exit-codes-for-actions)”을 참조하세요.

## 추가 정보 만들기

사람들에게 작업을 사용하는 방법을 알리기 위해 추가 정보 파일을 만들 수 있습니다. 추가 정보는 작업을 공개적으로 공유하려는 경우에 가장 유용하지만 사용자 또는 팀에게 작업 사용 방법을 알려주는 좋은 방법이기도 합니다.

`hello-world-javascript-action` 디렉터리에서 다음 정보를 지정하는 `README.md` 파일을 만듭니다.

- 작업이 수행하는 작업에 대한 자세한 설명입니다.
- 필수 입력 및 출력 인수입니다.
- 선택적 입력 및 출력 인수입니다.
- 작업에서 사용하는 비밀입니다.
- 작업에서 사용하는 환경 변수입니다.
- 워크플로에서 작업을 사용하는 방법의 예입니다.

````markdown{:copy}
# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```
````

## 커밋, 태그 지정, GitHub에 작업 푸시

{% data variables.product.product_name %}는 런타임 중에 워크플로에서 실행되는 각 작업을 다운로드하고 전체 코드 패키지로 실행한 후 `run`과 같은 워크플로 명령을 사용하여 실행기 머신과 상호 작용할 수 있습니다. 즉, JavaScript 코드를 실행하는 데 필요한 패키지 종속성을 포함해야 합니다. 작업 리포지토리에 대한 도구 키트 `core` 및 `github` 패키지를 체크 인해야 합니다.

터미널에서 `action.yml`, `index.js`, `node_modules`, `package.json`, `package-lock.json`, `README.md` 파일을 커밋합니다. `node_modules`를 나열하는 `.gitignore` 파일을 추가한 경우 `node_modules` 디렉터리를 커밋하려면 해당 행을 제거해야 합니다.

또한 작업 릴리스에 대한 버전 태그를 추가하는 것이 가장 좋습니다. 작업의 버전 관리 방법에 대한 자세한 내용은 “[작업 정보](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)”를 참조하세요.

```shell{:copy}
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

`node_modules` 디렉터리를 체크 인하면 문제가 발생할 수 있습니다. 또는 [`@vercel/ncc`](https://github.com/vercel/ncc)이라는 도구를 사용하여 코드와 모듈을 배포에 사용되는 하나의 파일로 컴파일할 수 있습니다.

1. 터미널에서 이 명령을 실행하여 `vercel/ncc`를 설치합니다.
  `npm i -g @vercel/ncc`

1. `index.js` 파일을 컴파일합니다.
  `ncc build index.js --license licenses.txt`

  코드와 컴파일된 모듈이 포함된 새 `dist/index.js` 파일이 표시됩니다.
  사용 중인 `node_modules`의 모든 라이선스가 포함된 `dist/licenses.txt` 파일도 함께 제공됩니다.

1. 새 `dist/index.js` 파일을 사용하려면 `action.yml` 파일의 `main` 키워드를 변경하세요.
 `main: 'dist/index.js'`

1. `node_modules` 디렉터리에 이미 체크 인한 경우 이를 제거합니다.
  `rm -rf node_modules/*`

1. 터미널에서 `action.yml`, `dist/index.js`, `node_modules` 파일에 대한 업데이트를 커밋합니다.
```shell{:copy}
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

## 워크플로에서 작업 테스트

이제 워크플로에서 작업을 테스트할 준비가 되었습니다. 프라이빗 리포지토리에 있는 작업은 동일한 리포지토리의 워크플로에서만 사용할 수 있습니다. 퍼블릭 작업은 모든 리포지토리의 워크플로에서 사용할 수 있습니다.

{% data reusables.actions.enterprise-marketplace-actions %}

### 퍼블릭 작업을 사용하는 예제

이 예제에서는 외부 리포지토리 내에서 새 퍼블릭 작업을 실행할 수 있는 방법을 보여 줍니다.

다음 YAML을 `.github/workflows/main.yml`의 새 파일에 복사하고 위에서 만든 퍼블릭 리포지토리의 이름과 사용자 이름으로 `uses: octocat/hello-world-javascript-action@v1.1` 줄을 업데이트합니다. `who-to-greet` 입력을 자신의 이름으로 바꿀 수도 있습니다.

{% raw %}
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: octocat/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

이 워크플로가 트리거되면 실행기는 퍼블릭 리포지토리에서 `hello-world-javascript-action` 작업을 다운로드한 다음 실행합니다.

### 프라이빗 작업을 사용하는 예제

작업 리포지토리의 `.github/workflows/main.yml` 파일에 워크플로 코드를 복사합니다. `who-to-greet` 입력을 자신의 이름으로 바꿀 수도 있습니다.

**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}{% endraw %}"
```

리포지토리에서 **작업** 탭을 클릭하고 최신 워크플로 실행을 선택합니다. **작업** 아래 또는 시각화 그래프에서 **인사할 작업** 을 클릭합니다. “Hello Mona Octocat” 또는 `who-to-greet` 입력에 사용한 이름과 로그에 출력된 타임스탬프가 표시되어야 합니다.

![워크플로의 작업 사용 스크린샷](/assets/images/help/repository/javascript-action-workflow-run-updated-2.png)

## JavaScript 작업을 만들기 위한 템플릿 리포지토리

{% data variables.product.prodname_dotcom %}는 JavaScript 및 TypeScript 작업을 만들기 위한 템플릿 리포지토리를 제공합니다. 이러한 템플릿을 사용하여 테스트, 린팅 및 기타 권장 사례를 포함하는 새 작업 만들기를 빠르게 시작할 수 있습니다.

* [`javascript-action` 템플릿 리포지토리](https://github.com/actions/javascript-action)
* [`typescript-action` 템플릿 리포지토리](https://github.com/actions/typescript-action)

---
title: 복합 작업 만들기
shortTitle: Create a composite action
intro: 이 가이드에서는 복합 작업을 빌드하는 방법을 알아봅니다.
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
ms.openlocfilehash: 5c7d332d2b3626a5628e85b09c35ffa6a0ca5f33
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192041'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 패키지된 복합 작업을 만들고 사용하는 데 필요한 기본 구성 요소에 대해 알아봅니다. 작업을 패키지하는 데 필요한 구성 요소에 가이드의 초점을 맞추기 위해 작업 코드의 기능은 최소화됩니다. 작업은 “Hello World”를 출력한 다음 “Goodbye”를 출력하거나 사용자 지정 이름을 제공하는 경우 “Hello [인사할 사람]”을 출력한 다음 “Goodbye”를 출력합니다. 이 작업은 또한 난수를 `random-number` 출력 변수에 매핑하고 `goodbye.sh`라는 스크립트를 실행합니다.

이 프로젝트를 완료한 후에는 고유한 복합 작업을 빌드하고 워크플로에서 테스트하는 방법을 이해해야 합니다.

{% data reusables.actions.context-injection-warning %}

## 필수 조건

시작하기 전에 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}에 리포지토리를 만듭니다.

1. {% data variables.location.product_location %}에 새 퍼블릭 리포지토리를 만듭니다. 리포지토리 이름을 선택하거나 다음 `hello-world-composite-action` 예제를 사용할 수 있습니다. 프로젝트가 {% data variables.product.product_name %}에 푸시된 후 이러한 파일을 추가할 수 있습니다. 자세한 내용은 “[새 리포지토리 만들기](/articles/creating-a-new-repository)”를 참조하세요.

1. 컴퓨터에 리포지토리를 복제합니다. 자세한 내용은 “[리포지토리 복제](/articles/cloning-a-repository)”를 참조하세요.

1. 터미널에서 디렉터리를 새 리포지토리로 변경합니다.

  ```shell
  cd hello-world-composite-action
  ```

2. `hello-world-composite-action` 리포지토리에서 `goodbye.sh`라는 새 파일을 만들고 다음 예제 코드를 추가합니다.

  ```bash
  echo "Goodbye"
  ```

3. 터미널에서 `goodbye.sh` 실행 파일을 만듭니다.

  ```shell
  chmod +x goodbye.sh
  ```

1. 터미널에서 `goodbye.sh` 파일을 체크 인합니다.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## 작업 메타데이터 파일 만들기

1. `hello-world-composite-action` 리포지토리에서 `action.yml`라는 새 파일을 만들고 다음 예제 코드를 추가합니다. 이 구문에 대한 자세한 내용은 “[`runs` 복합 작업](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)”을 참조하세요.

    {% raw %}  **action.yml**
    ```yaml
    name: 'Hello World'
    description: 'Greet someone'
    inputs:
      who-to-greet:  # id of input
        description: 'Who to greet'
        required: true
        default: 'World'
    outputs:
      random-number:
        description: "Random number"
        value: ${{ steps.random-number-generator.outputs.random-number }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
          run: echo "random-number=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
          run: echo "::set-output name=random-number::$(echo $RANDOM)"
{%- endif %}{% raw %}
          shell: bash
        - run: echo "${{ github.action_path }}" >> $GITHUB_PATH
          shell: bash
        - run: goodbye.sh
          shell: bash
    ```
    {% endraw %} 이 파일은 입력을 `who-to-greet` 정의하고, 임의의 생성된 숫자를 출력 변수에 `random-number` 매핑하고, 실행기 시스템 경로에 작업의 경로를 추가하고(실행 중에 스크립트를 찾기 `goodbye.sh` 위해) 스크립트를 실행합니다 `goodbye.sh` .

  출력 관리에 대한 자세한 내용은 “[복합 작업에 대한 `outputs` ](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)”을 참조하세요.

  `github.action_path` 사용 방법에 대한 자세한 내용은 “[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”를 참조하세요.

1. 터미널에서 `action.yml` 파일을 체크 인합니다.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. 터미널에서 태그를 추가합니다. 이 예제에서는 `v1`이라는 태그를 사용합니다. 자세한 내용은 “[작업 정보](/actions/creating-actions/about-actions#using-release-management-for-actions)”를 참조하세요.

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## 워크플로에서 작업 테스트

다음 워크플로 코드는 “[작업 메타데이터 파일 만들기](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)”에서 수행한 완료된 hello world 작업을 사용합니다.

워크플로 코드를 다른 리포지토리의 `.github/workflows/main.yml` 파일에 복사하지만 `actions/hello-world-composite-action@v1`는 만든 리포지토리 및 태그로 바꿉니다. `who-to-greet` 입력을 자신의 이름으로 바꿀 수도 있습니다.

**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - id: foo
        uses: actions/hello-world-composite-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number {% raw %}${{ steps.foo.outputs.random-number }}{% endraw %}
        shell: bash
```

리포지토리에서 **작업** 탭을 클릭하고 최신 워크플로 실행을 선택합니다. 출력에는 “Hello Mona the Octocat”, “Goodbye” 스크립트의 결과와 난수가 포함되어야 합니다.

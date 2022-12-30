---
title: Docker 컨테이너 작업 만들기
shortTitle: Create a Docker container action
intro: '이 가이드에서는 Docker 컨테이너 작업을 빌드하는 데 필요한 최소 단계를 보여 줍니다. '
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - Docker
ms.openlocfilehash: e3b8110244425e07d8c0228b0ea13de79dccce98
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093987'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 패키지된 Docker 컨테이너 작업을 만들고 사용하는 데 필요한 기본 구성 요소에 대해 알아봅니다. 작업을 패키지하는 데 필요한 구성 요소에 가이드의 초점을 맞추기 위해 작업 코드의 기능은 최소화됩니다. 사용자 지정 이름을 제공하면 로그에 “Hello World” 또는 “Hello [인사할 사람]”이 출력됩니다.

이 프로젝트를 완료한 후에는 고유한 Docker 컨테이너 작업을 빌드하고 워크플로에서 테스트하는 방법을 이해해야 합니다.

{% data reusables.actions.self-hosted-runner-reqs-docker %}

{% data reusables.actions.context-injection-warning %}

## 필수 조건

{% data variables.product.prodname_actions %} 환경 변수 및 Docker 컨테이너 파일 시스템을 기본적으로 이해하는 것이 유용할 수 있습니다.

- “[환경 변수 사용](/actions/automating-your-workflow-with-github-actions/using-environment-variables)” {% ifversion ghae %}
- “[Docker 컨테이너 파일 시스템](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)”.
{% else %}
- “[{% data variables.product.prodname_dotcom %}에서 호스트되는 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)” {% endif %}

시작하기 전에 {% data variables.product.prodname_dotcom %} 리포지토리를 만들어야 합니다.

1. {% 데이터 variables.location.product_location %}에 새 리포지토리를 만듭니다. 리포지토리 이름을 선택하거나 이 예제와 같이 “hello-world-docker-action”을 사용할 수 있습니다. 자세한 내용은 “[새 리포지토리 만들기](/articles/creating-a-new-repository)”를 참조하세요.

1. 컴퓨터에 리포지토리를 복제합니다. 자세한 내용은 “[리포지토리 복제](/articles/cloning-a-repository)”를 참조하세요.

1. 터미널에서 디렉터리를 새 리포지토리로 변경합니다.

  ```shell{:copy}
  cd hello-world-docker-action
  ```

## Dockerfile을 만듭니다.

새 `hello-world-docker-action` 디렉터리에서 `Dockerfile`이라는 새 파일을 만듭니다. 문제가 있는 경우 파일 이름이 대문자로 올바르게 시작되는지 확인합니다(대문자 `D`은 사용하고 대문자 `f`는 사용하지 말 것). 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 Dockerfile 지원](/actions/creating-actions/dockerfile-support-for-github-actions)”을 참조하세요.

**Dockerfile**
```Dockerfile{:copy}
# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

## 작업 메타데이터 파일 만들기

위에서 만든 `hello-world-docker-action` 디렉터리에 새 `action.yml` 파일을 만듭니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 메타데이터 구문](/actions/creating-actions/metadata-syntax-for-github-actions)”을 참조하세요.

{% raw %} **action.yml**
```yaml{:copy}
# action.yml
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
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.who-to-greet }}
```
{% endraw %}

이 메타데이터는 하나의 `who-to-greet` 입력과 하나의 `time` 출력 매개 변수를 정의합니다. Docker 컨테이너에 입력을 전달하려면 `inputs`을 사용하여 입력을 선언하고 `args` 키워드에 입력을 전달해야 합니다. `args`에 포함된 모든 항목은 컨테이너로 전달되지만 작업 사용자가 더 쉽게 검색할 수 있도록 입력을 사용하는 것이 좋습니다.

{% data variables.product.prodname_dotcom %}는 `Dockerfile`에서 이미지를 빌드하고 해당 이미지를 사용하여 새 컨테이너에서 명령을 실행합니다.

## 작업 코드 작성

기본 Docker 이미지와 작업에 대해 어떤 언어든 선택할 수 있습니다. 다음 셸 스크립트 예에서는 `who-to-greet` 입력 변수를 사용하여 로그 파일에 “Hello [인사할 사람]”을 출력합니다.

다음으로 스크립트는 현재 시간을 가져오고 나중에 작업에서 실행되는 작업에서 사용할 수 있는 출력 변수로 설정합니다. {% 데이터 variables.product.prodname_dotcom %}이(가) 출력 변수를 인식하려면 {% ifversion actions-save-state-set-output-envs %}을(를) 환경 파일에 작성 `$GITHUB_OUTPUT` 해야 합니다. {% else %}은(는) `echo "<output name>=<value>" >> $GITHUB_OUTPUT`특정 구문인 `echo "::set-output name=<output name>::<value>"`{% endif %}에서 워크플로 명령을 사용합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 명령](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter)”을 참조하세요.

1. `hello-world-docker-action` 디렉터리에 새 `entrypoint.sh` 파일을 만듭니다.

1. `entrypoint.sh` 파일에

  코드(**entrypoint.sh**)를 추가합니다.
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
{%- ifversion actions-save-state-set-output-envs %}
  echo "time=$time" >> $GITHUB_OUTPUT
{%- else %}
  echo "::set-output name=time::$time"
{%- endif %}
  ```
  `entrypoint.sh`가 오류 없이 실행되면 작업 상태가 `success`로 설정됩니다. 작업 코드에서 종료 코드를 명시적으로 설정하여 작업의 상태를 제공할 수도 있습니다. 자세한 내용은 “[작업에 대한 종료 코드 설정](/actions/creating-actions/setting-exit-codes-for-actions)”을 참조하세요.


1. 파일을 실행 가능하게 만듭니 `entrypoint.sh` 다. Git은 클론/포크가 있을 때마다 다시 설정되지 않도록 파일의 사용 권한 모드를 명시적으로 변경하는 방법을 제공합니다.

  ```shell{:copy}
  $ git update-index --chmod=+x entrypoint.sh
  ```

1. 필요에 따라 git 인덱스의 파일 사용 권한 모드를 확인하려면 다음 명령을 실행합니다.

  ```shell{:copy}
  $ git ls-files --stage entrypoint.sh
  ```

   같은 `100755 e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 0       entrypoint.sh` 출력은 파일에 실행 권한이 있는 것을 의미합니다. 이 예제에서는 `755` 실행 가능한 권한을 표시합니다.

## 추가 정보 만들기

사람들에게 작업을 사용하는 방법을 알리기 위해 추가 정보 파일을 만들 수 있습니다. 추가 정보는 작업을 공개적으로 공유하려는 경우에 가장 유용하지만 사용자 또는 팀에게 작업 사용 방법을 알려주는 좋은 방법이기도 합니다.

`hello-world-docker-action` 디렉터리에서 다음 정보를 지정하는 `README.md` 파일을 만듭니다.

- 작업이 수행하는 작업에 대한 자세한 설명입니다.
- 필수 입력 및 출력 인수입니다.
- 선택적 입력 및 출력 인수입니다.
- 작업에서 사용하는 비밀입니다.
- 작업에서 사용하는 환경 변수입니다.
- 워크플로에서 작업을 사용하는 방법의 예입니다.

**README.md**
```markdown{:copy}
# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-docker-action@{% ifversion actions-save-state-set-output-envs %}v2{% else %}v1{% endif %}
with:
  who-to-greet: 'Mona the Octocat'
```

## 커밋, 태그 지정, {% data variables.product.product_name %}에 대한 작업 푸시

터미널에서 `action.yml`, `entrypoint.sh`, `Dockerfile`, `README.md` 파일을 커밋합니다.

또한 작업 릴리스에 대한 버전 태그를 추가하는 것이 가장 좋습니다. 작업의 버전 관리 방법에 대한 자세한 내용은 “[작업 정보](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)”를 참조하세요.

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

## 워크플로에서 작업 테스트

이제 워크플로에서 작업을 테스트할 준비가 되었습니다. 프라이빗 리포지토리에 있는 작업은 동일한 리포지토리의 워크플로에서만 사용할 수 있습니다. 퍼블릭 작업은 모든 리포지토리의 워크플로에서 사용할 수 있습니다.

{% data reusables.actions.enterprise-marketplace-actions %}

### 퍼블릭 작업을 사용하는 예제

다음 워크플로 코드는 퍼블릭 [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action) 리포지토리에서 완료된 _hello world_ 작업을 사용합니다. 다음 워크플로 예제 코드를 `.github/workflows/main.yml` 파일에 복사하고 `actions/hello-world-docker-action`를 리포지토리 및 작업 이름으로 바꿉니다. `who-to-greet` 입력을 자신의 이름으로 바꿀 수도 있습니다. {% ifversion fpt or ghec %} 퍼블릭 작업은 {% data variables.product.prodname_marketplace %}에 게시되지 않은 경우에도 사용할 수 있습니다. 자세한 내용은 “[작업 게시](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)”를 참조하세요. {% endif %}

**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: actions/hello-world-docker-action{% ifversion actions-save-state-set-output-envs %}v2{% else %}v1{% endif %}
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

### 프라이빗 작업을 사용하는 예제

다음 예제 워크플로 코드를 작업 리포지토리의 `.github/workflows/main.yml` 파일에 복사합니다. `who-to-greet` 입력을 자신의 이름으로 바꿀 수도 있습니다. {% ifversion fpt or ghec %} 이 프라이빗 작업은 {% data variables.product.prodname_marketplace %}에 게시할 수 없으며 해당 리포지토리에서만 사용할 수 있습니다.{% endif %}

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
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

리포지토리에서 **작업** 탭을 클릭하고 최신 워크플로 실행을 선택합니다. **작업** 아래 또는 시각화 그래프에서 **인사할 작업** 을 클릭합니다. “Hello Mona Octocat” 또는 `who-to-greet` 입력에 사용한 이름과 로그에 출력된 타임스탬프가 표시되어야 합니다.

![워크플로의 작업 사용 스크린샷](/assets/images/help/repository/docker-action-workflow-run-updated.png)


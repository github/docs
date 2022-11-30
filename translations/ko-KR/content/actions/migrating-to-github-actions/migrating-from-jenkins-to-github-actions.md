---
title: Jenkins에서 GitHub Actions로 마이그레이션
intro: '{% data variables.product.prodname_actions %} 및 Jenkins는 여러 유사성을 공유하므로 {% data variables.product.prodname_actions %}로 마이그레이션하는 것이 비교적 간단합니다.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-jenkins-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Jenkins
  - Migration
  - CI
  - CD
shortTitle: Migrate from Jenkins
ms.openlocfilehash: 177ec8c5e7355b87bdd82dd7cff88d4ae89557e4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145121292'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

Jenkins 및 {% data variables.product.prodname_actions %}를 사용하면 코드를 자동으로 빌드, 테스트, 게시, 릴리스 및 배포하는 워크플로를 만들 수 있습니다. Jenkins 및 {% data variables.product.prodname_actions %}는 워크플로 구성에서 몇 가지 유사점을 공유합니다.

- Jenkins는 {% data variables.product.prodname_actions %} 워크플로 파일과 유사한 선언적 파이프라인을 사용하여 워크플로를 만듭니다.
- Jenkins는 스테이지를 사용하여 단계의 컬렉션을 실행하는 반면{% data variables.product.prodname_actions %}는 작업을 사용하여 하나 이상의 단계 또는 개별 명령을 그룹화합니다.
- Jenkins 및 {% data variables.product.prodname_actions %}는 컨테이너 기반 빌드를 지원합니다. 자세한 내용은 “[Docker 컨테이너 작업 만들기](/articles/creating-a-docker-container-action)”를 참조하세요.
- 단계 또는 작업을 다시 사용하고 커뮤니티와 공유할 수 있습니다.

자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 핵심 개념](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)”을 참조하세요.

## 주요 차이점

- Jenkins에는 파이프라인을 만들기 위한 두 가지 유형의 구문인 선언적 파이프라인과 스크립팅된 파이프라인이 있습니다. {% data variables.product.prodname_actions %}는 YAML을 사용하여 워크플로 및 구성 파일을 만듭니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions)”을 참조하세요.
- Jenkins 배포는 일반적으로 자체 호스팅되며 사용자는 자체 데이터 센터에서 서버를 유지 관리합니다. {% data variables.product.prodname_actions %}는 자체 호스팅 실행기를 지원하는 동시에, 작업을 실행하는 데 사용할 수 있는 자체 실행기를 호스팅하여 하이브리드 클라우드 접근 방식을 제공합니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.

## 기능 비교

### 빌드 배포

Jenkins를 통해 단일 빌드 에이전트에 빌드를 보내거나 여러 에이전트에 배포할 수 있습니다. 운영 체제 유형과 같은 다양한 특성에 따라 에이전트를 분류할 수도 있습니다.

마찬가지로 {% data variables.product.prodname_actions %}는 {% data variables.product.prodname_dotcom %} 호스팅 또는 자체 호스팅 실행기로 작업을 보낼 수 있으며, 레이블을 사용하여 다양한 특성에 따라 실행기를 분류할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 이해](/actions/learn-github-actions/understanding-github-actions#runners)” 및 “[자체 호스팅 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.

### 섹션을 사용하여 파이프라인 구성

Jenkins는 선언적 파이프라인을 여러 섹션으로 분할합니다. 마찬가지로 {% data variables.product.prodname_actions %}는 워크플로를 별도의 섹션으로 구성합니다. 아래 표에서는 Jenkins 섹션을 {% data variables.product.prodname_actions %} 워크플로와 비교합니다.

| Jenkins 지시문 | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`agent`](https://jenkins.io/doc/book/pipeline/syntax/#agent)   | [`jobs.<job_id>.runs-on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer) |
| [`post`](https://jenkins.io/doc/book/pipeline/syntax/#post)     |  |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages) | [`jobs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs) |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)   | [`jobs.<job_id>.steps`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## Using 지시문

Jenkins는 지시문을 사용하여 선언적 파이프라인을 관리합니다. 지시문은 워크플로의 특성 및 실행 방법을 정의합니다. 아래 표에서는 이 지시문이 {% data variables.product.prodname_actions %}의 개념에 매핑되는 방법을 보여 줍니다.

| Jenkins 지시문 | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`environment`](https://jenkins.io/doc/book/pipeline/syntax/#environment)                  | [`jobs.<job_id>.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps[*].env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv) |
| [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                       | [`jobs.<job_id>.strategy`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes) |
| [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                    | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions) |
| [`triggers`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                        | [`on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore) <br> [<code>on.<pull_request\>.<branches\></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) |
| [`triggers { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers) | [`jobs.<job_id>.needs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds) |
| [Jenkins cron syntax](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)(Jenkins cron 구문)            | [`on.schedule`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onschedule) |
| [`stage`](https://jenkins.io/doc/book/pipeline/syntax/#stage)                              | [`jobs.<job_id>`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idname) |
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)                              | {% ifversion ghae %}자체 호스팅 실행기 시스템의 `PATH`에서 사용할 수 있는 명령줄 도구입니다. {% data reusables.actions.self-hosted-runners-software %}{% else %}[{% data variables.product.prodname_dotcom %}-호스트 실행기의 사양](/actions/reference/specifications-for-github-hosted-runners/#supported-software) |{% endif %}
| [`input`](https://jenkins.io/doc/book/pipeline/syntax/#input)                              | [`inputs`](/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs) |
| [`when`](https://jenkins.io/doc/book/pipeline/syntax/#when)                                | [`jobs.<job_id>.if`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif) |

## 순차 스테이지 사용

### 병렬 작업 처리

Jenkins는 `stages` 및 `steps`를 병렬로 실행할 수 있지만 현재 {% data variables.product.prodname_actions %}는 병렬로만 작업을 실행합니다.

| Jenkins 병렬 | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`parallel`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

### 행렬

{% data variables.product.prodname_actions %} 및 Jenkins 모두 매트릭스를 사용하여 다양한 시스템 조합을 정의할 수 있습니다.

| Jenkins       | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`axis`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)       | [`strategy/matrix`](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix) <br> [`context`](/actions/reference/context-and-expression-syntax-for-github-actions) |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)   | [`steps-context`](/actions/reference/context-and-expression-syntax-for-github-actions#steps-context) |
| [`excludes`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) |  |

### 단계를 사용하여 작업 실행

Jenkins는 `steps` `stages`에서 함께 그룹화합니다. 각 단계는 스크립트, 함수 또는 명령일 수 있습니다. 마찬가지로 {% data variables.product.prodname_actions %}는 `jobs`를 사용하여 `steps`의 특정 그룹을 실행합니다.

| Jenkins 단계 | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`script`](https://jenkins.io/doc/book/pipeline/syntax/#script) | [`jobs.<job_id>.steps`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## 일반 작업의 예

### `cron`을 사용하여 실행할 파이프라인 예약

<table>
<tr>
<th>
Jenkins 파이프라인
</th>
<th>
{% data variables.product.prodname_actions %} 워크플로
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  triggers {
    cron('H/15 * * * 1-5')
  }
}
```

</td>
<td>

```yaml
on:
  schedule:
    - cron: '*/15 * * * 1-5'
```

</td>
</tr>
</table>

### 파이프라인에서 환경 변수 구성

<table>
<tr>
<th>
Jenkins 파이프라인
</th>
<th>
{% data variables.product.prodname_actions %} 워크플로
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  environment {
    MAVEN_PATH = '/usr/local/maven'
  }
}
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

### 업스트림 프로젝트에서 빌드하기

<table>
<tr>
<th>
Jenkins 파이프라인
</th>
<th>
{% data variables.product.prodname_actions %} 워크플로
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  triggers {
    upstream(
      upstreamProjects: 'job1,job2',
      threshold: hudson.model.Result.SUCCESS
    )
  }
}
```

</td>
<td>

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

</td>
</tr>
</table>

### 여러 운영 체제를 사용하여 빌드하기

<table>
<tr>
<th>
Jenkins 파이프라인
</th>
<th>
{% data variables.product.prodname_actions %} 워크플로
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent none
  stages {
    stage('Run Tests') {
      matrix {
        axes {
          axis {
            name: 'PLATFORM'
            values: 'macos', 'linux'
          }
        }
        agent { label "${PLATFORM}" }
        stages {
          stage('test') {
            tools { nodejs "node-12" }
            steps {
              dir("scripts/myapp") {
                sh(script: "npm install -g bats")
                sh(script: "bats tests")
              }
            }
          }
        }
      }
    }
  }
}
```

</td>
<td>

```yaml
name: demo-workflow
on:
  push:
jobs:
  test:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      fail-fast: false
      matrix:
        os: [macos-latest, ubuntu-latest]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 12
      - run: npm install -g bats
      - run: bats tests
        working-directory: scripts/myapp
```

</td>
</tr>
</table>

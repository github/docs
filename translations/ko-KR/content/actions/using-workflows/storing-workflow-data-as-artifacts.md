---
title: 워크플로 데이터를 아티팩트로 저장
shortTitle: Store artifacts
intro: Artifacts를 사용하면 워크플로의 작업 간에 데이터를 공유하고 워크플로가 완료되면 데이터를 저장할 수 있습니다.
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
  - /actions/guides/storing-workflow-data-as-artifacts
  - /actions/advanced-guides/storing-workflow-data-as-artifacts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
ms.openlocfilehash: 0dcd8230e0e387570110fb9c3a4d2ef659ef76d0
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093577'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 워크플로 아티팩트 정보

아티팩트를 통해 작업을 완료한 후 데이터를 보관하고 동일한 워크플로의 다른 작업과 공유할 수 있습니다. 아티팩트가 워크플로 실행 중에 생성된 파일 또는 파일 컬렉션입니다. 예를 들어 아티팩트를 사용하여 워크플로 실행이 종료된 후 빌드 및 테스트 출력을 저장할 수 있습니다. {% data reusables.actions.reusable-workflow-artifacts %}

{% data reusables.actions.artifact-log-retention-statement %} 끌어오기 요청에 대한 보존 기간은 누군가가 끌어오기 요청에 새 커밋을 푸시할 때마다 다시 시작됩니다.

다음은 업로드할 수 있는 몇 가지 일반적인 아티팩트입니다.

- 로그 파일 및 코어 덤프
- 테스트 결과, 실패, 스크린샷
- 이진 파일 또는 압축 파일
- 스트레스 테스트 성능 출력 및 코드 검사 결과

{% ifversion fpt or ghec %}

아티팩트 저장은 {% data variables.product.product_name %}에 스토리지 공간을 사용합니다. {% data reusables.actions.actions-billing %} 자세한 내용은 “[{% data variables.product.prodname_actions %} 요금 청구 관리](/billing/managing-billing-for-github-actions)”를 참조하세요.

{% else %}

아티팩트에서는 {% 데이터 variables.location.product_location %}의 {% 데이터 variables.product.prodname_actions %}에 대해 구성된 외부 Blob Storage의 스토리지 공간을 사용합니다.

{% endif %}

아티팩트는 워크플로 실행 중에 업로드되며 UI에서 아티팩트의 이름과 크기를 볼 수 있습니다. {% data variables.product.product_name %} UI를 사용하여 아티팩트를 다운로드하면 아티팩트의 일부로 개별적으로 업로드된 모든 파일이 단일 파일로 압축됩니다. 즉, Zip 파일의 크기가 아닌 업로드된 아티팩트 크기에 따라 청구 금액이 계산됩니다.

{% data variables.product.product_name %}는 빌드 아티팩트 업로드 및 다운로드에 사용할 수 있는 두 가지 작업을 제공합니다. 자세한 내용은 {% ifversion fpt 또는 ghec %}[actions/upload-artifact 및 download-artifact](https://github.com/actions/upload-artifact) actions{[](https://github.com/actions/download-artifact)% else %} `actions/upload-artifact` 및 `download-artifact` {% data variables.location.product_location %}{% endif %}에 대한 작업을 참조하세요.

작업 간에 데이터를 공유하려면 다음을 수행합니다.

* **파일 업로드**: 업로드된 파일에 이름을 지정하고 작업이 끝나기 전에 데이터를 업로드합니다.
* **파일 다운로드**: 동일한 워크플로 실행 중에 업로드된 아티팩트만 다운로드할 수 있습니다. 파일을 다운로드할 때 이름으로 참조할 수 있습니다.

작업 단계는 실행기 컴퓨터에서 동일한 환경을 공유하지만 고유한 개별 프로세스에서 실행됩니다. 작업의 단계 간에 데이터를 전달하려면 입력 및 출력을 사용할 수 있습니다. 입력과 출력에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 메타데이터 구문](/articles/metadata-syntax-for-github-actions)”을 참조하세요.

{% ifversion actions-caching %}

{% data reusables.actions.comparing-artifacts-caching %}

종속성 캐싱에 대한 자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching)”을 참조하세요.

{% endif %}

## 빌드 및 테스트 아티팩트 업로드

CI(연속 통합) 워크플로를 만들어 코드를 빌드하고 테스트할 수 있습니다. {% data variables.product.prodname_actions %}를 사용하여 CI를 수행하는 방법에 대한 자세한 내용은 “[연속 통합 정보](/articles/about-continuous-integration)”를 참조하세요.

코드를 빌드하고 테스트하는 출력은 종종 배포할 수 있는 테스트 실패 및 프로덕션 코드를 디버그하는 데 사용할 수 있는 파일을 생성합니다. 리포지토리에 푸시된 코드를 빌드 및 테스트하고 성공 또는 실패 상태를 보고하도록 워크플로를 구성할 수 있습니다. 배포에 사용할 빌드 및 테스트 출력을 업로드하고, 실패한 테스트 또는 크래시를 디버그하고, 테스트 도구 모음 검사를 볼 수 있습니다.

이 `upload-artifact` 작업을 사용하여 아티팩트를 업로드할 수 있습니다. 아티팩트를 업로드할 때 단일 파일이나 디렉터리 또는 여러 파일이나 디렉터리를 지정할 수 있습니다. 특정 파일 또는 디렉터리를 제외하고 와일드카드 패턴을 사용할 수도 있습니다. 아티팩트 이름을 제공하는 것이 좋지만 이름이 제공되지 않으면 `artifact`가 기본 이름으로 사용됩니다. 구문에 대한 자세한 내용은 {% data variables.location.product_location %}{% endif %}에서 {% ifversion fpt 또는 ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact) action{% else %} `actions/upload-artifact` 작업을 참조하세요.

### 예제

예를 들어 리포지토리 또는 웹 애플리케이션에는 CSS 및 JavaScript로 변환해야 하는 SASS 및 TypeScript 파일이 포함될 수 있습니다. 빌드 구성이 `dist` 디렉터리에서 컴파일된 파일을 출력하는 경우 모든 테스트가 성공적으로 완료되면 `dist` 디렉터리의 파일을 웹 애플리케이션 서버에 배포합니다.

```
|-- hello-world (repository)
|   └── dist
|   └── tests
|   └── src
|       └── sass/app.scss
|       └── app.ts
|   └── output
|       └── test
|   
```

이 예제에서는 `src` 디렉터리에서 코드를 빌드하고 `tests` 디렉터리에서 테스트를 실행하는 Node.js 프로젝트에 대한 워크플로를 만드는 방법을 보여 줍니다. `npm test`를 실행하면 `output/test/` 디렉터리에 저장된 `code-coverage.html` 코드 검사 보고서가 생성된다고 가정할 수 있습니다.

워크플로는 `dist` 디렉터리에 프로덕션 아티팩트를 업로드하지만 markdown 파일은 제외합니다. 또한 `code-coverage.html` 보고서를 다른 아티팩트로 업로드합니다.

```yaml{:copy}
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

## 사용자 지정 아티팩트 보존 기간 구성

워크플로에서 만든 개별 아티팩트에 대한 사용자 지정 보존 기간을 정의할 수 있습니다. 워크플로를 사용하여 새 아티팩트를 만들 때 `upload-artifact` 작업에 `retention-days`를 사용할 수 있습니다. 이 예제에서는 `my-artifact`라는 이름의 아티팩트에 대한 사용자 지정 보존 기간을 5일로 설정하는 방법을 보여 줍니다.

```yaml{:copy}
  - name: 'Upload Artifact'
    uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: my-artifact
      path: my_file.txt
      retention-days: 5
```

`retention-days` 값은 리포지토리, 조직 또는 엔터프라이즈에서 설정한 보존 한도를 초과할 수 없습니다.

## 아티팩트 다운로드 또는 삭제

워크플로를 실행하는 동안 [`download-artifact`](https://github.com/actions/download-artifact) 작업을 사용하여 이전에 동일한 워크플로 실행에서 업로드된 아티팩트를 다운로드할 수 있습니다.

워크플로 실행이 완료되면 {% data variables.product.prodname_dotcom %}에서 또는 REST API를 사용하여 아티팩트를 다운로드 또는 삭제할 수 있습니다. 자세한 내용은 “[워크플로 아티팩트 다운로드](/actions/managing-workflow-runs/downloading-workflow-artifacts)”, “[워크플로 아티팩트 제거](/actions/managing-workflow-runs/removing-workflow-artifacts)”, “[Artifacts REST API](/rest/reference/actions#artifacts)”를 참조하세요.

### 워크플로 실행 중 아티팩트 다운로드

[`actions/download-artifact`](https://github.com/actions/download-artifact) 작업은 워크플로 실행 중 이전에 업로드한 아티팩트 다운로드에 사용할 수 있습니다.

{% note %}

**참고:** 동일한 워크플로 실행 중에 업로드된 워크플로 내 아티팩트만 다운로드할 수 있습니다.

{% endnote %}

아티팩트의 이름을 지정하여 개별 아티팩트를 다운로드합니다. 이름을 지정하지 않고 아티팩트를 업로드한 경우 기본 이름은 `artifact`입니다.

```yaml
- name: Download a single artifact
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: my-artifact
```

이름을 지정하지 않고 워크플로 실행의 모든 아티팩트를 다운로드할 수도 있습니다. 이 기능은 많은 아티팩트로 작업하는 경우에 유용할 수 있습니다.

```yaml
- name: Download all workflow run artifacts
  uses: {% data reusables.actions.action-download-artifact %}
```

모든 워크플로 실행의 아티팩트가 다운로드되면 각 아티팩트의 디렉터리가 해당 이름을 사용하여 만들어집니다.

구문에 대한 자세한 내용은 {% data variables.location.product_location %}{% endif %}에서 {% ifversion fpt 또는 ghec %}[actions/download-artifact](https://github.com/actions/download-artifact) action{% else %} `actions/download-artifact` 작업을 참조하세요.

## 워크플로의 작업 간 데이터 전달

`upload-artifact` 및 `download-artifact` 작업을 사용하여 워크플로의 작업 간에 데이터를 공유할 수 있습니다. 이 예제 워크플로에서는 동일한 워크플로의 작업 간에 데이터를 전달하는 방법을 보여 줍니다. 자세한 내용은 {% ifversion fpt 또는 ghec %}[actions/upload-artifact 및 download-artifact](https://github.com/actions/upload-artifact) actions{[](https://github.com/actions/download-artifact)% else %} `actions/upload-artifact` 및 `download-artifact` {% data variables.location.product_location %}{% endif %}에 대한 작업을 참조하세요.

이전 작업의 아티팩트에 종속된 작업은 종속 작업이 성공적으로 완료될 때까지 기다려야 합니다. 이 워크플로는 `needs` 키워드를 사용하여 `job_1`, `job_2`, `job_3`가 순차적으로 실행되도록 합니다. 예를 들어 `job_2`에는 `needs: job_1` 구문을 사용하는 `job_1`이 필요합니다.

작업 1은 다음 단계를 수행합니다.
- 수학 계산을 수행하고 결과를 `math-homework.txt`라는 텍스트 파일에 저장합니다.
- `upload-artifact` 작업을 사용하여 `math-homework.txt` 파일을 `homework` 아티팩트 이름으로 업로드합니다.

작업 2는 이전 작업의 결과를 사용합니다.
- 이전 작업에서 업로드된 `homework` 아티팩트를 다운로드합니다. 기본적으로 `download-artifact` 작업은 단계가 실행 중인 작업 영역 디렉터리에 아티팩트 다운로드합니다. `path` 입력 매개 변수를 사용하여 다른 다운로드 디렉터리를 지정할 수 있습니다.
- `math-homework.txt` 파일의 값을 읽고, 수학 계산을 수행하고, 결과를 `math-homework.txt`에 다시 저장하여 내용을 덮어씁니다.
- `math-homework.txt` 파일을 업로드합니다. 업로드는 동일한 이름을 공유하기 때문에 이전에 업로드한 아티팩트를 덮어씁니다.

작업 3는 이전 작업에 업로드된 결과를 표시합니다.
- `homework` 아티팩트를 다운로드합니다.
- 수학 수식의 결과를 로그에 출력합니다.

이 워크플로 예제에서 수행되는 전체 수학 연산은 `(3 + 7) x 9 = 90`입니다.

```yaml{:copy}
name: Share data between jobs

on: [push]

jobs:
  job_1:
    name: Add 3 and 7
    runs-on: ubuntu-latest
    steps:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - name: Upload math result for job 1
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: homework
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: homework
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: homework
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: homework
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```

워크플로 실행은 생성한 모든 아티팩트를 보관합니다. 보관된 아티팩트 다운로드에 대한 자세한 내용은 “[워크플로 아티팩트 다운로드](/actions/managing-workflow-runs/downloading-workflow-artifacts)”를 참조하세요.
![수학을 수행하기 위해 작업 간에 데이터를 전달하는 워크플로](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow-updated.png)

{% ifversion fpt or ghec %}

## 추가 참고 자료

- “[{% data variables.product.prodname_actions %}에 대한 청구 관리](/billing/managing-billing-for-github-actions)”

{% endif %}

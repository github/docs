---
title: 스크립트를 사용하여 실행기에서 코드 테스트
shortTitle: Use scripts to test your code on a runner
intro: 'CI(연속 통합)를 위해 필수 {% data variables.product.prodname_actions %} 기능을 사용하는 방법입니다.'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 05204ce87cd5b8ef3260c997d36a9656fc08d7f1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093971'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## 예제 개요

{% data reusables.actions.example-workflow-intro-ci %} 이 워크플로가 트리거되면 {% data variables.product.prodname_dotcom %} Docs 사이트에 끊어진 링크가 있는지 여부를 확인하는 스크립트가 자동으로 실행됩니다.

{% data reusables.actions.example-diagram-intro %}

![워크플로 단계의 개요 다이어그램](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## 이 예제에서 사용되는 기능

{% data reusables.actions.example-table-intro %}

| **기능**  | **구현** |
| --- | --- | 
{% data reusables.actions.push-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | 리포지토리에 따라 다른 실행기에서 작업 실행: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | 타사 작업 사용: | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| | 실행기에서 스크립트 실행: | `./script/rendered-content-link-checker.mjs` 사용 |

## 예제 워크플로

{% data reusables.actions.example-docs-engineering-intro %} [`check-broken-links-github-github.yml`](https://github.com/github/docs/blob/main/.github/workflows/check-broken-links-github-github.yml).

{% data reusables.actions.note-understanding-example %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:100%"></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: 'Link Checker: All English'

# **What it does**: Renders the content of every page and check all internal links.
# **Why we have it**: To make sure all links connect correctly.
# **Who does it impact**: Docs content.

on:
  workflow_dispatch:
  push:
    branches:
      - main
  pull_request:

permissions:
  contents: read
  # Needed for the 'trilom/file-changes-action' action
  pull-requests: read

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

jobs:
  check-links:
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm

      - name: Install
        run: npm ci

      # Creates file "${{ env.HOME }}/files.json", among others
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'

      # For verification
      - name: Show files changed
        run: cat $HOME/files.json

      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json

      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</tr>
</td>
</tbody>
</table>

## 예제 이해

{% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>코드</b></th>
    <th style="width:40%"><b>설명</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: 'Link Checker: All English'
```
</td>
<td>

{% data reusables.actions.explanation-name-key %}
</td>
</tr>
<tr>
<td>

```yaml{:copy}
on:
```
</td>
<td>

`on` 키워드를 사용하면 워크플로를 실행할 때 트리거되는 이벤트를 정의할 수 있습니다. 여기에서 여러 이벤트를 정의할 수 있습니다. 자세한 내용은 “[워크플로 트리거](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)”를 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

UI에서 이 워크플로를 수동으로 실행할 수 있도록 하려면 `workflow_dispatch` 이벤트를 추가합니다. 자세한 내용은 [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)를 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  push:
    branches:
      - main
```
</td>
<td>

커밋이 `main` 분기에 푸시될 때마다 워크플로가 자동으로 실행되도록 `push` 이벤트를 추가합니다. 자세한 내용은 [`push`](/actions/using-workflows/events-that-trigger-workflows#push)를 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

끌어오기 요청을 만들거나 업데이트할 때마다 워크플로가 자동으로 실행되도록 `pull_request` 이벤트를 추가합니다. 자세한 내용은 [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request)를 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
permissions:
  contents: read
  pull-requests: read
```
</td>
<td>

`GITHUB_TOKEN`에 부여된 기본 사용 권한을 수정합니다. 워크플로의 요구 사항에 따라 달라집니다. 자세한 내용은 “[작업에 권한 할당](/actions/using-jobs/assigning-permissions-to-jobs)”을 참조하세요.
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
concurrency:
  group: '${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'
```
{% endraw %}
</td>
<td>

특정 이벤트에 대한 동시성 그룹을 만들고 `||` 연산자를 사용하여 대체 값을 정의합니다. 자세한 내용은 “[동시성 사용](/actions/using-jobs/using-concurrency)”을 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

동일한 동시성 그룹에서 현재 실행 중인 작업 또는 워크플로를 모두 취소합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

워크플로 파일에서 실행되는 모든 작업을 함께 그룹화합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  check-links:
```
</td>
<td>

`jobs` 키 내에 저장된 ID `check-links`를 사용하여 작업을 정의합니다.
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
    runs-on: ${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}
```
{% endraw %}
</td>
<td>

워크플로를 실행하는 리포지토리에 따라 {% data variables.product.prodname_dotcom %} 호스팅 실행기 또는 자체 호스팅 실행기에서 실행되도록 작업을 구성합니다. 이 예제에서는 리포지토리의 이름이 `docs-internal`로 지정되고 `github` 조직 내에 있는 경우 자체 호스팅 실행기에서 작업이 실행됩니다. 리포지토리가 이 경로와 일치하지 않으면 {% data variables.product.prodname_dotcom %}에서 호스트하는 `ubuntu-latest` 실행기에서 실행됩니다. 이러한 옵션에 대한 자세한 내용은 “[작업에 대한 실행기 선택](/actions/using-jobs/choosing-the-runner-for-a-job)”을 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

`check-links` 작업의 일부로 실행될 모든 단계를 함께 그룹화합니다. 워크플로의 각 작업에는 고유한 `steps` 섹션이 있습니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
```
</td>
<td>

`uses` 키워드는 작업에 `actions/checkout`으로 이름이 지정된 작업을 검색하도록 지시합니다. 이 작업은 리포지토리를 체크 아웃하고 실행기로 다운로드하여 코드에 대해 작업(예: 도구 테스트)을 실행할 수 있도록 합니다. 워크플로가 리포지토리의 코드에 대해 실행되거나 리포지토리에 정의된 작업을 사용할 때마다 체크 아웃 작업을 사용해야 합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm
```
</td>
<td>

이 단계에서는 `actions/setup-node` 작업을 사용하여 실행기에서 지정된 버전의 Node.js 소프트웨어 패키지를 설치합니다. 그러면 `npm` 명령에 액세스할 수 있습니다.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Install
        run: npm ci
```
</td>
<td>

`run` 키워드는 실행기에서 명령을 실행하도록 작업에 지시합니다. 이 경우 `npm ci`를 사용하여 프로젝트에 대한 npm 소프트웨어 패키지를 설치합니다.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'
```
</td>
<td>

`trilom/file-changes-action` 작업을 사용하여 변경된 모든 파일을 수집합니다. 이 예제는 `a6ca26c14274c33b15e6499323aac178af06ad4b` SHA를 사용하여 특정 버전의 작업에 고정됩니다.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Show files changed
        run: cat $HOME/files.json
```
</td>
<td>

`files.json`의 내용을 나열합니다. 워크플로 실행 로그에 표시되며 디버깅에 유용할 수 있습니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json
```
</td>
<td>

이 단계에서는 `run` 명령을 사용하여 `script/rendered-content-link-checker.mjs`의 리포지토리에 저장된 스크립트를 실행하고 실행에 필요한 모든 매개 변수를 전달합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</td>
<td>

또한 이 단계에서는 `run` 명령을 사용하여 `script/rendered-content-link-checker.mjs`의 리포지토리에 저장된 스크립트를 실행하고 다른 매개 변수 집합을 전달합니다.
</tr>

</tbody>
</table>

## 다음 단계

{% data reusables.actions.learning-actions %}

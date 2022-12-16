---
title: '동시성, 식 및 테스트 매트릭스 사용'
shortTitle: 'Use concurrency, expressions, and a test matrix'
intro: 'CI(연속 통합)를 위해 고급 {% data variables.product.prodname_actions %} 기능을 사용하는 방법입니다.'
versions:
  fpt: '*'
  ghes: '>= 3.5'
  ghae: '>= 3.5'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 8e34f9e9c553f5ea908b9a1340385db490bd4d1b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093891'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## 예제 개요

{% data reusables.actions.example-workflow-intro-ci %} 이 워크플로가 트리거되면 `npm test`와의 테스트 조합 매트릭스를 사용하여 코드를 테스트합니다.

{% data reusables.actions.example-diagram-intro %}

![워크플로 단계의 개요 다이어그램](/assets/images/help/images/overview-actions-using-concurrency-expressions-and-a-test-matrix.png)

## 이 예제에서 사용되는 기능

{% data reusables.actions.example-table-intro %}

| **기능**  | **구현** |
| --- | --- |
{% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | 리포지토리에 따라 다른 실행기에서 작업 실행: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.if-conditions-table-entry %} | 매트릭스를 사용하여 다른 테스트 구성 만들기: | [`matrix`](/actions/using-jobs/using-a-build-matrix-for-your-jobs)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | 종속성 캐싱: | [`actions/cache`](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows)| | 실행기에서 테스트 실행: | `npm test`|

## 예제 워크플로

{% data reusables.actions.example-docs-engineering-intro %} [`test.yml`](https://github.com/github/docs/blob/main/.github/workflows/test.yml).

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
name: Node.js Tests

# **What it does**: Runs our tests.
# **Why we have it**: We want our tests to pass before merging code.
# **Who does it impact**: Docs engineering, open-source engineering contributors.

on:
  workflow_dispatch:
  pull_request:
  push:
    branches:
      - main

permissions:
  contents: read
  # Needed for the 'trilom/file-changes-action' action
  pull-requests: read

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

jobs:
  test:
    # Run on self-hosted if the private repo or ubuntu-latest if the public repo
    # See pull # 17442 in the private repo for context
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    timeout-minutes: 60
    strategy:
      fail-fast: false
      matrix:
        # The same array lives in test-windows.yml, so make any updates there too.
        test-group:
          [
            content,
            graphql,
            meta,
            rendering,
            routing,
            unit,
            linting,
            translations,
          ]
    steps:
      # Each of these ifs needs to be repeated at each step to make sure the required check still runs
      # Even if if doesn't do anything
      - name: Check out repo
        uses: {% data reusables.actions.action-checkout %}
        with:
          # Not all test suites need the LFS files. So instead, we opt to
          # NOT clone them initially and instead, include them manually
          # only for the test groups that we know need the files.
          lfs: {% raw %}${{ matrix.test-group == 'content' }}{% endraw %}
          # Enables cloning the Early Access repo later with the relevant {% data variables.product.pat_generic %}
          persist-credentials: 'false'

      - name: Figure out which docs-early-access branch to checkout, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        id: check-early-access
        uses: {% data reusables.actions.action-github-script %}
        env:
          BRANCH_NAME: {% raw %}${{ github.head_ref || github.ref_name }}{% endraw %}
        with:
          github-token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          result-encoding: string
          script: |
            // If being run from a PR, this becomes 'my-cool-branch'.
            // If run on main, with the `workflow_dispatch` action for
            // example, the value becomes 'main'.
            const { BRANCH_NAME } = process.env
            try {
              const response = await github.repos.getBranch({
                owner: 'github',
                repo: 'docs-early-access',
                BRANCH_NAME,
              })
              console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
              return BRANCH_NAME
            } catch (err) {
              if (err.status === 404) {
                console.log(`There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`)
                return 'main'
              }
              throw err
            }

      - name: Check out docs-early-access too, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: github/docs-early-access
          token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          path: docs-early-access
          ref: {% raw %}${{ steps.check-early-access.outputs.result }}{% endraw %}

      - name: Merge docs-early-access repo's folders
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        run: |
          mv docs-early-access/assets assets/images/early-access
          mv docs-early-access/content content/early-access
          mv docs-early-access/data data/early-access
          rm -r docs-early-access

      # This is necessary when LFS files where cloned but does nothing
      # if actions/checkout was run with `lfs:false`.
      - name: Checkout LFS objects
        run: git lfs checkout

      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        id: get_diff_files
        with:
          # So that `steps.get_diff_files.outputs.files` becomes
          # a string like `foo.js path/bar.md`
          output: ' '

      - name: Insight into changed files
        run: |

          # Must to do this because the list of files can be HUGE. Especially
          # in a repo-sync when there are lots of translation files involved.
          echo {% raw %}"${{ steps.get_diff_files.outputs.files }}" > get_diff_files.txt{% endraw %}

      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.14.x
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Cache nextjs build
        uses: {% data reusables.actions.action-cache %}
        with:
          path: .next/cache
          key: {% raw %}${{ runner.os }}-nextjs-${{ hashFiles('package*.json') }}{% endraw %}

      - name: Run build script
        run: npm run build

      - name: Run tests
        env:
          DIFF_FILE: get_diff_files.txt
          CHANGELOG_CACHE_FILE_PATH: tests/fixtures/changelog-feed.json
        run: npm test -- {% raw %}tests/${{ matrix.test-group }}/{% endraw %}
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
name: Node.js Tests
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

UI에서 이 워크플로를 수동으로 실행할 수 있도록 하려면 `workflow_dispatch` 이벤트를 추가합니다. 자세한 내용은 [`workflow_dispatch`](/actions/reference/events-that-trigger-workflows#workflow_dispatch)를 참조하세요.
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
  push:
    branches:
      - main
```
</td>
<td>

커밋이 `main` 필터와 일치하는 분기에 푸시될 때마다 워크플로가 자동으로 실행되도록 `push` 이벤트를 추가합니다. 자세한 내용은 [`push`](/actions/using-workflows/events-that-trigger-workflows#push)를 참조하세요.
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


```yaml{:copy}
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
```
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
  test:
```
</td>
<td>

`jobs` 키 내에 저장된 ID `test`를 사용하여 작업을 정의합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
```
</td>
<td>

워크플로를 실행하는 리포지토리에 따라 {% data variables.product.prodname_dotcom %} 호스팅 실행기 또는 자체 호스팅 실행기에서 실행되도록 작업을 구성합니다. 이 예제에서는 리포지토리의 이름이 `docs-internal`로 지정되고 `github` 조직 내에 있는 경우 자체 호스팅 실행기에서 작업이 실행됩니다. 리포지토리가 이 경로와 일치하지 않으면 {% data variables.product.prodname_dotcom %}에서 호스트하는 `ubuntu-latest` 실행기에서 실행됩니다. 이러한 옵션에 대한 자세한 내용은 “[작업에 대한 실행기 선택](/actions/using-jobs/choosing-the-runner-for-a-job)”을 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    timeout-minutes: 60
```
</td>
<td>

작업이 자동으로 취소되기 전에 실행되는 최대 시간(분)을 설정합니다. 자세한 내용은 [`timeout-minutes`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)를 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    strategy:
```
</td>
<td>
  이 섹션에서는 작업에 대한 빌드 매트릭스를 정의합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      fail-fast: false
```
</td>
<td>

`fail-fast`를 `false`로 설정하면 매트릭스 작업이 실패할 때 {% data variables.product.prodname_dotcom %}에서 진행 중인 모든 작업을 취소하지 못합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      matrix:
        test-group:
          [
            content,
            graphql,
            meta,
            rendering,
            routing,
            unit,
            linting,
            translations,
          ]
```
</td>
<td>

테스트 그룹 배열을 사용하여 `test-group`이라는 매트릭스를 만듭니다. 이러한 값은 `npm test`에 의해 실행될 테스트 그룹의 이름과 일치합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

`test` 작업의 일부로 실행될 모든 단계를 함께 그룹화합니다. 워크플로의 각 작업에는 고유한 `steps` 섹션이 있습니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out repo
        uses: {% data reusables.actions.action-checkout %}
        with:
          lfs: {% raw %}${{ matrix.test-group == 'content' }}{% endraw %}
          persist-credentials: 'false'
```
</td>
<td>

`uses` 키워드는 작업에 `actions/checkout`으로 이름이 지정된 작업을 검색하도록 지시합니다. 이 작업은 리포지토리를 체크 아웃하고 실행기로 다운로드하여 코드에 대해 작업(예: 도구 테스트)을 실행할 수 있도록 합니다. 워크플로가 리포지토리의 코드에 대해 실행되거나 리포지토리에 정의된 작업을 사용할 때마다 체크 아웃 작업을 사용해야 합니다. `with` 키를 사용하여 작업에 몇 가지 추가 옵션이 제공됩니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Figure out which docs-early-access branch to checkout, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        id: check-early-access
        uses: {% data reusables.actions.action-github-script %}
        env:
          BRANCH_NAME: {% raw %}${{ github.head_ref || github.ref_name }}{% endraw %}
        with:
          github-token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          result-encoding: string
          script: |
            // If being run from a PR, this becomes 'my-cool-branch'.
            // If run on main, with the `workflow_dispatch` action for
            // example, the value becomes 'main'.
            const { BRANCH_NAME } = process.env
            try {
              const response = await github.repos.getBranch({
                owner: 'github',
                repo: 'docs-early-access',
                BRANCH_NAME,
              })
              console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
              return BRANCH_NAME
            } catch (err) {
              if (err.status === 404) {
                console.log(`There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`)
                return 'main'
              }
              throw err
            }
```
</td>
<td>

현재 리포지토리가 `github/docs-internal` 리포지토리인 경우 이 단계에서는 `actions/github-script` 작업을 사용하여 `docs-early-access`라는 분기가 있는지 여부를 확인하는 스크립트를 실행합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out docs-early-access too, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: github/docs-early-access
          token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          path: docs-early-access
          ref: {% raw %}${{ steps.check-early-access.outputs.result }}{% endraw %}
```
</td>
<td>

현재 리포지토리가 `github/docs-internal` 리포지토리인 경우 이 단계에서는 `github/docs-early-access`에서 이전 단계에서 식별된 분기를 확인합니다.
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Merge docs-early-access repo's folders
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        run: |
          mv docs-early-access/assets assets/images/early-access
          mv docs-early-access/content content/early-access
          mv docs-early-access/data data/early-access
          rm -r docs-early-access
```
</td>
<td>

현재 리포지토리가 `github/docs-internal` 리포지토리인 경우 이 단계에서는 `run` 키워드를 사용하여 `docs-early-access` 리포지토리의 폴더를 주 리포지토리의 폴더로 이동하는 셸 명령을 실행합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Checkout LFS objects
        run: git lfs checkout
```
</td>
<td>

이 단계에서는 리포지토리에서 LFS 개체를 확인하는 명령을 실행합니다.
</td>
</tr>
<tr>
<td>


```yaml{:copy}
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        id: get_diff_files
        with:
          # So that `steps.get_diff_files.outputs.files` becomes
          # a string like `foo.js path/bar.md`
          output: ' '
```
</td>
<td>

이 단계에서는 `trilom/file-changes-action` 작업을 사용하여 끌어오기 요청에서 변경된 파일을 수집합니다. 이 파일은 다음 단계에서 분석할 수 있습니다. 이 예제는 `a6ca26c14274c33b15e6499323aac178af06ad4b` SHA를 사용하여 특정 버전의 작업에 고정됩니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Insight into changed files
        run: |
          echo {% raw %}"${{ steps.get_diff_files.outputs.files }}" > get_diff_files.txt{% endraw %}
```
</td>
<td>

이 단계에서는 이전 단계의 출력을 사용하여 끌어오기 요청에서 변경된 파일 목록이 포함된 파일을 만드는 셸 명령을 실행합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.14.x
          cache: npm
```
</td>
<td>

이 단계에서는 `actions/setup-node` 작업을 사용하여 실행기에서 지정된 버전의 `node` 소프트웨어 패키지를 설치합니다. 그러면 `npm` 명령에 액세스할 수 있습니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Install dependencies
        run: npm ci
```
</td>
<td>

이 단계에서는 `npm ci` 셸 명령을 실행하여 프로젝트에 대한 npm 소프트웨어 패키지를 설치합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Cache nextjs build
        uses: {% data reusables.actions.action-cache %}
        with:
          path: .next/cache
          key: {% raw %}${{ runner.os }}-nextjs-${{ hashFiles('package*.json') }}{% endraw %}
```
</td>
<td>

이 단계에서는 `actions/cache` 작업을 사용하여 Next.js 빌드를 캐시하므로 워크플로는 매번 처음부터 다시 빌드하지 않고, 빌드의 캐시를 검색합니다. 자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”을 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run build script
        run: npm run build
```
</td>
<td>

이 단계는 빌드 스크립트를 실행합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run tests
        env:
          DIFF_FILE: get_diff_files.txt
          CHANGELOG_CACHE_FILE_PATH: tests/fixtures/changelog-feed.json
        run: npm test -- {% raw %}tests/${{ matrix.test-group }}/{% endraw %}
```
</td>
<td>

이 단계에서는 `npm test`를 사용하여 테스트를 실행하고, 테스트 매트릭스는 행렬의 각 작업에 대해 {% raw %}`${{ matrix.test-group }}`{% endraw %}에 다른 값을 제공합니다. `DIFF_FILE` 환경 변수를 사용하여 변경된 파일을 파악하고 changelog 캐시 파일에 `CHANGELOG_CACHE_FILE_PATH` 환경 변수를 사용합니다.
</td>
</tr>
</tbody>
</table>

## 다음 단계

{% data reusables.actions.learning-actions %}

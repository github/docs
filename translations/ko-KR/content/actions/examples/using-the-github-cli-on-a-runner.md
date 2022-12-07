---
title: 실행기에서 GitHub CLI 사용
shortTitle: Use the GitHub CLI on a runner
intro: 'CI(연속 통합)를 위해 고급 {% data variables.product.prodname_actions %} 기능을 사용하는 방법입니다.'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: e0787d09cd194de0038d259c1aff777cc91a4a6a
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111587'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## 예제 개요

{% data reusables.actions.example-workflow-intro-ci %} 이 워크플로가 트리거되면 {% data variables.product.prodname_dotcom %} Docs 사이트에 끊어진 링크가 있는지 여부를 확인하는 스크립트가 자동으로 실행됩니다. 끊어진 링크가 있으면 워크플로는 {% data variables.product.prodname_dotcom %} CLI에서 세부 정보를 사용하여 {% data variables.product.prodname_dotcom %} 이슈를 만듭니다.

{% data reusables.actions.example-diagram-intro %}

![워크플로 단계의 개요 다이어그램](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## 이 예제에서 사용되는 기능

{% data reusables.actions.example-table-intro %}

| **기능**  | **구현** |
| --- | --- |
{% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.if-conditions-table-entry %} {% data reusables.actions.secrets-table-entry %} {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | 타사 작업 사용: | [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | 실행기에서 셸 명령 실행: | [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | 실행기에서 스크립트 실행: | `script/check-english-links.js` 사용 | | 출력 파일 생성: | Piping the output using the `>` 연산자를 사용하여 출력 파이프 | | {% data variables.product.prodname_cli %}를 사용하여 기존 이슈 확인: | [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | {% data variables.product.prodname_cli %}를 사용하여 이슈에 주석 달기: | [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## 예제 워크플로

{% data reusables.actions.example-docs-engineering-intro %} [`check-all-english-links.yml`](https://github.com/github/docs/blob/6e01c0653836c10d7e092a17566a2c88b10504ce/.github/workflows/check-all-english-links.yml).

{% data reusables.actions.note-understanding-example %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:70%"></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: Check all English links

# **What it does**: This script once a day checks all English links and reports in issues.
# **Why we have it**: We want to know if any links break.
# **Who does it impact**: Docs content.

on:
  workflow_dispatch:
  schedule:
    - cron: '40 19 * * *' # once a day at 19:40 UTC / 11:40 PST

permissions:
  contents: read
  issues: write

jobs:
  check_all_english_links:
    name: Check all links
    if: github.repository == 'github/docs-internal'
    runs-on: ubuntu-latest
    env:
      GITHUB_TOKEN: {% raw %}${{ secrets.DOCUBOT_READORG_REPO_WORKFLOW_SCOPES }}{% endraw %}
      FIRST_RESPONDER_PROJECT: Docs content first responder
      REPORT_AUTHOR: docubot
      REPORT_LABEL: broken link report
      REPORT_REPOSITORY: github/docs-content
    steps:
      - name: Check out repo's default branch
        uses: {% data reusables.actions.action-checkout %}
      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm
      - name: npm ci
        run: npm ci
      - name: npm run build
        run: npm run build
      - name: Run script
        run: |
          script/check-english-links.js > broken_links.md

      # check-english-links.js returns 0 if no links are broken, and 1 if any links
      # are broken. When an Actions step's exit code is 1, the action run's job status
      # is failure and the run ends. The following steps create an issue for the
      # broken link report only if any links are broken, so {% raw %}`if: ${{ failure() }}`{% endraw %}
      # ensures the steps run despite the previous step's failure of the job.

      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "title=$(head -1 broken_links.md)" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
{%- endif %}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Create issue from file
        id: broken-link-report
        uses: peter-evans/create-issue-from-file@b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e
        with:
          token: {% raw %}${{ env.GITHUB_TOKEN }}{% endraw %}

          title: {% raw %}${{ steps.check.outputs.title }}{% endraw %}
          content-filepath: ./broken_links.md
          repository: {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}
          labels: {% raw %}${{ env.REPORT_LABEL }}{% endraw %}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Close and/or comment on old issues
        env:
          {% raw %}NEW_REPORT_URL: 'https://github.com/${{ env.REPORT_REPOSITORY }}/issues/${{ steps.broken-link-report.outputs.issue-number }}'{% endraw %}
        run: |
          gh alias set list-reports "issue list \
                                       --repo {% raw %}${{ env.REPORT_REPOSITORY }} \{% endraw %}
                                       --author {% raw %}${{ env.REPORT_AUTHOR }} \{% endraw %}
                                       --label {% raw %}'${{ env.REPORT_LABEL }}'"{% endraw %}

          # Link to the previous report from the new report that triggered this
          # workflow run.

          previous_report_url=$(gh list-reports \
                                  --state all \
                                  --limit 2 \
                                  --json url \
                                  --jq '.[].url' \
                                  | grep -v {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} | head -1)

          gh issue comment {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} --body "⬅️ [Previous report]($previous_report_url)"

          # If an old report is open and assigned to someone, link to the newer
          # report without closing the old report.

          for issue_url in $(gh list-reports \
                                  --json assignees,url \
                                  --jq '.[] | select (.assignees != []) | .url'); do
            if [ "$issue_url" != {% raw %}"${{ env.NEW_REPORT_URL }}"{% endraw %} ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }}{% endraw %})"
            fi
          done

          # Link to the newer report from any older report that is still open,
          # then close the older report and remove it from the first responder's
          # project board.

          for issue_url in $(gh list-reports \
                                  --search 'no:assignee' \
                                  --json url \
                                  --jq '.[].url'); do
            if [ "$issue_url" != {% raw %}"${{ env.NEW_REPORT_URL }}"{% endraw %} ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }})"{% endraw %}
              gh issue close $issue_url
              gh issue edit $issue_url --remove-project "{% raw %}${{ env.FIRST_RESPONDER_PROJECT }}"{% endraw %}
            fi
          done
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
name: Check all English links
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
  workflow_dispatch:
  schedule:
    - cron: '40 20 * * *' # once a day at 20:40 UTC / 12:40 PST
```
</td>
<td>

`workflow_dispatch` 및 `scheduled`를 워크플로에 대한 트리거로 정의합니다.

* `workflow_dispatch`를 사용하면 UI에서 이 워크플로를 수동으로 실행할 수 있습니다. 자세한 내용은 [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)를 참조하세요.
* `schedule` 이벤트를 사용하면 `cron` 구문을 사용하여 워크플로를 자동으로 트리거하는 정기적인 간격을 정의할 수 있습니다. 자세한 내용은 [`schedule`](/actions/reference/events-that-trigger-workflows#schedule)를 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
permissions:
  contents: read
  issues: write
```
</td>
<td>

`GITHUB_TOKEN`에 부여된 기본 사용 권한을 수정합니다. 워크플로의 요구 사항에 따라 달라집니다. 자세한 내용은 “[작업에 권한 할당](/actions/using-jobs/assigning-permissions-to-jobs)”을 참조하세요.
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
  check_all_english_links:
    name: Check all links
```
</td>
<td>

`jobs` 키 내에 저장된 ID가 `check_all_english_links`이고 이름이 `Check all links`인 작업을 정의합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

리포지토리 이름이 `docs-internal`이고 `github` 조직 내에 있는 경우에만 `check_all_english_links` 작업이 실행됩니다. 그렇지 않으면 작업이 _건너뛴 것_ 으로 표시됩니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

Ubuntu Linux 실행기에서 실행되도록 작업을 구성합니다. 즉, {% data variables.product.prodname_dotcom %}에서 호스트된 새 가상 머신에서 작업이 실행됩니다. 다른 실행기를 사용하는 구문 예제는 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)”을 참조하세요.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    env:
      GITHUB_TOKEN: {% raw %}${{ secrets.DOCUBOT_READORG_REPO_WORKFLOW_SCOPES }}{% endraw %}
      REPORT_AUTHOR: docubot
      REPORT_LABEL: broken link report
      REPORT_REPOSITORY: github/docs-content
```
</td>
<td>

사용자 지정 환경 변수를 만들고, 사용자 지정 [비밀](/actions/security-guides/encrypted-secrets)을 사용하도록 기본 제공 `GITHUB_TOKEN` 변수를 다시 정의합니다. 이러한 변수는 워크플로의 뒷부분에서 참조됩니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

`check_all_english_links` 작업의 일부로 실행될 모든 단계를 함께 그룹화합니다. 워크플로의 각 작업에는 고유한 `steps` 섹션이 있습니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out repo's default branch
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
      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.8.x
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
      - name: Run the "npm ci" command
        run: npm ci
      - name: Run the "npm run build" command
        run: npm run build
```
</td>
<td>

`run` 키워드는 실행기에서 명령을 실행하도록 작업에 지시합니다. 이 경우 `npm ci` 및 `npm run build` 명령은 별도의 단계로 실행되어 리포지토리에 Node.js 애플리케이션을 설치하고 빌드합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run script
        run: |
          script/check-english-links.js > broken_links.md
```
</td>
<td>

이 `run` 명령은 리포지토리의 `script/check-english-links.js`에 저장된 스크립트를 실행하고 출력을 `broken_links.md` 파일로 파이프합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "title=$(head -1 broken_links.md)" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
{%- endif %}
```
</td>
<td>

`check-english-links.js` 스크립트가 끊어진 링크를 검색하고 0이 아닌(살패) 종료 상태를 반환하는 경우 [워크플로 명령](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter)을 사용하여 `broken_links.md` 파일의 첫 번째 줄 값이 있는 출력을 설정합니다(다음 단계에서 사용됨).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Create issue from file
        id: broken-link-report
        uses: peter-evans/create-issue-from-file@b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e
        with:
          token: {% raw %}${{ env.GITHUB_TOKEN }}{% endraw %}

          title: {% raw %}${{ steps.check.outputs.title }}{% endraw %}
          content-filepath: ./broken_links.md
          repository: {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}
          labels: {% raw %}${{ env.REPORT_LABEL }}{% endraw %}
```
</td>
<td>

`peter-evans/create-issue-from-file` 작업을 사용하여 새 {% data variables.product.prodname_dotcom %} 이슈를 만듭니다. 이 예제는 `b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e` SHA를 사용하여 특정 버전의 작업에 고정됩니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Close and/or comment on old issues
        env:
          NEW_REPORT_URL: 'https://github.com/{% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}/issues/{% raw %}${{ steps.broken-link-report.outputs.issue-number }}{% endraw %}'
        run: |
          gh alias set list-reports "issue list \
                                       --repo {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %} \
                                       --author {% raw %}${{ env.REPORT_AUTHOR }}{% endraw %} \
                                       --label '{% raw %}${{ env.REPORT_LABEL }}{% endraw %}'"
          previous_report_url=$(gh list-reports \
                                  --state all \
                                  --limit 2 \
                                  --json url \
                                  --jq '.[].url' \
                                  | grep -v {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} | head -1)

          gh issue comment {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} --body "⬅️ [Previous report]($previous_report_url)"
```
</td>
<td>

[`gh issue list`](https://cli.github.com/manual/gh_issue_list)를 사용하여 이전 실행에서 이전에 만든 이슈를 찾습니다. 이후 단계에서 더 간단히 처리하기 위해 `gh list-reports`로 [별칭이 지정](https://cli.github.com/manual/gh_alias_set)됩니다. 이슈 URL을 가져오기 위해 `jq` 식은 결과 JSON 출력을 처리합니다.

[`gh issue comment`](https://cli.github.com/manual/gh_issue_comment)는 이전 이슈에 연결되는 새 이슈에 주석을 추가하는 데 사용됩니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
          for issue_url in $(gh list-reports \
                                  --json assignees,url \
                                  --jq '.[] | select (.assignees != []) | .url'); do
            if [ "$issue_url" != "${{ env.NEW_REPORT_URL }}" ]; then
              gh issue comment $issue_url --body "➡️ [Newer report](${{ env.NEW_REPORT_URL }})"
            fi
          done
```
</td>
<td>

이전 실행의 이슈가 열려 있고 다른 사람에게 할당된 경우 [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment)를 사용하여 새 이슈에 대한 링크가 있는 주석을 추가합니다.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
          for issue_url in $(gh list-reports \
                                  --search 'no:assignee' \
                                  --json url \
                                  --jq '.[].url'); do
            if [ "$issue_url" != "{% raw %}${{ env.NEW_REPORT_URL }}{% endraw %}" ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }}{% endraw %})"
              gh issue close $issue_url
              gh issue edit $issue_url --remove-project "{% raw %}${{ env.FIRST_RESPONDER_PROJECT }}{% endraw %}"
            fi
          done
```
</td>
<td>

이전 실행의 이슈가 열려 있고 다른 사용자에게 할당되지 않은 경우 다음을 수행합니다.

* [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment)를 사용하여 새 이슈에 대한 링크가 있는 주석을 추가합니다.
* [`gh issue close`](https://cli.github.com/manual/gh_issue_close)를 사용하여 이전 이슈를 닫습니다.
* [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit)로 이전 이슈를 편집하여 특정 {% data variables.product.prodname_dotcom %} 프로젝트 보드에서 제거합니다.
</td>
</tr>
</tbody>
</table>

## 다음 단계

{% data reusables.actions.learning-actions %}

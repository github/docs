---
title: 在运行器上使用 GitHub CLI
shortTitle: Use the GitHub CLI on a runner
intro: '如何使用高级 {% data variables.product.prodname_actions %} 功能进行持续集成 (CI)。'
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
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111583'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## 示例概述

{% data reusables.actions.example-workflow-intro-ci %} 此工作流触发后，会自动运行一个脚本，用于检查 {% data variables.product.prodname_dotcom %} Docs 站点是否有任何损坏的链接。 如果找到任何损坏的链接，工作流将使用 {% data variables.product.prodname_dotcom %} CLI 创建包含详细信息的 {% data variables.product.prodname_dotcom %} 问题。

{% data reusables.actions.example-diagram-intro %}

![工作流步骤概述图](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## 此示例中使用的功能

{% data reusables.actions.example-table-intro %}

| **功能**  | **实现** |
| --- | --- |
{% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.if-conditions-table-entry %} {% data reusables.actions.secrets-table-entry %} {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | 使用第三方操作：| [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | 在运行器上运行 shell 命令：| [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | 在运行器上运行脚本：| 使用 `script/check-english-links.js` | | 生成输出文件：| 使用 `>` 运算符通过管道传输输出 | | 使用 {% data variables.product.prodname_cli %} 检查现有问题：| [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | 使用 {% data variables.product.prodname_cli %} 对问题进行注释：| [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## 示例工作流

{% data reusables.actions.example-docs-engineering-intro %} [`check-all-english-links.yml`](https://github.com/github/docs/blob/6e01c0653836c10d7e092a17566a2c88b10504ce/.github/workflows/check-all-english-links.yml)。

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

## 了解示例

{% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>代码</b></th>
    <th style="width:40%"><b>解释</b></th>
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

将 `workflow_dispatch` 和 `scheduled` 定义为工作流的触发器：

* 通过 `workflow_dispatch`，可从 UI 手动运行此工作流。 有关详细信息，请参阅 [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)。
* 通过 `schedule` 事件，可使用 `cron` 语法来定义自动触发工作流的定期间隔。 有关详细信息，请参阅 [`schedule`](/actions/reference/events-that-trigger-workflows#schedule)。
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

修改授予 `GITHUB_TOKEN` 的默认权限。 这将因工作流的需求而异。 有关详细信息，请参阅“[为作业分配权限](/actions/using-jobs/assigning-permissions-to-jobs)”。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

将工作流文件中运行的所有作业组合在一起。
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

定义 ID 为 `check_all_english_links`、名称为 `Check all links` 的作业，该作业存储在 `jobs` 密钥中。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

仅当存储库名为 `docs-internal` 且位于 `github` 组织内时，才运行 `check_all_english_links` 作业。 否则，作业会被标记为“跳过”。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

配置作业在 Ubuntu Linux 运行器上运行。 这意味着作业将在 {% data variables.product.prodname_dotcom %}. 托管的新虚拟机上执行。 有关使用其他运行器的语法示例，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)”。
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

创建自定义环境变量，并重新定义内置的 `GITHUB_TOKEN` 变量以使用自定义[机密](/actions/security-guides/encrypted-secrets)。 稍后将在工作流中引用这些变量。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

将作为 `check_all_english_links` 作业一部分运行的所有步骤组合在一起。 工作流中的每个作业都有其自己的 `steps` 部分。
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

`uses` 关键字指示作业检索名为 `actions/checkout` 的操作。 这是检出仓库并将其下载到运行器的操作，允许针对您的代码运行操作（例如测试工具）。 只要工作流程针对仓库的代码运行，或者您使用仓库中定义的操作，您都必须使用检出操作。
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

此步骤使用 `actions/setup-node` 操作在运行器上安装指定版本的 `node` 软件包，以便你可访问 `npm` 命令。
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

`run` 关键字指示作业在运行器上执行命令。 在这种情况下，`npm ci` 和 `npm run build` 命令作为单独的步骤运行，用于在存储库中安装和生成 Node.js 应用程序。
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

此 `run` 命令执行存储库 (`script/check-english-links.js`) 中存储的脚本，并通过管道将输出传递给名为 `broken_links.md` 的文件。
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

如果 `check-english-links.js` 脚本检测到损坏的链接并返回非零（失败）退出状态，则使用[工作流命令](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter)设置具有 `broken_links.md` 文件第一行值的输出（下一步中会用到它）。
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

使用 `peter-evans/create-issue-from-file` 操作创建新的 {% data variables.product.prodname_dotcom %} 问题。 此示例使用 `b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e` SHA 固定到操作的特定版本。
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

使用 [`gh issue list`](https://cli.github.com/manual/gh_issue_list) 查找之前在早期运行中创建的问题。 在后续步骤中，为了简化处理，这将[别名](https://cli.github.com/manual/gh_alias_set)设置为 `gh list-reports`。 若要获取问题 URL，`jq` 表达式将处理生成的 JSON 输出。

然后，使用 [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) 向链接到上一个问题的新问题添加注释。
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

如果上一次运行中的问题已打开且已分配给某人，则使用 [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) 添加注释并附上指向新问题的链接。
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

如果上一次运行中的问题已打开但未分配给任何人，则：

* 使用 [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) 添加一个的注释并附上指向新问题的链接。
* 使用 [`gh issue close`](https://cli.github.com/manual/gh_issue_close) 关闭旧问题。
* 使用 [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit) 编辑旧问题，将其从特定的 {% data variables.product.prodname_dotcom %} 项目板中删除。
</td>
</tr>
</tbody>
</table>

## 后续步骤

{% data reusables.actions.learning-actions %}

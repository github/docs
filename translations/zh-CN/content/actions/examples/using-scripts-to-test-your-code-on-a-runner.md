---
title: 使用脚本在运行器上测试代码
shortTitle: 使用脚本在运行器上测试代码
intro: '如何使用必要 {% data variables.product.prodname_actions %} 功能进行持续集成 (CI)。'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## 示例概述

{% data reusables.actions.example-workflow-intro-ci %} 此工作流程被触发时，它会自动运行一个脚本，用于检查 {% data variables.product.prodname_dotcom %} 文档网站是否有任何断开的链接。

{% data reusables.actions.example-diagram-intro %}

![工作流程步骤概览图](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## 此示例中使用的功能

{% data reusables.actions.example-table-intro %}

| **功能** | **实现** |
| ------ | ------ |
|        |        |
{% data reusables.actions.push-table-entry %}
{% data reusables.actions.pull-request-table-entry %}
{% data reusables.actions.workflow-dispatch-table-entry %}
{% data reusables.actions.permissions-table-entry %}
{% data reusables.actions.concurrency-table-entry %}
|在不同的运行器上运行作业，具体取决于存储库：| [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)|
{% data reusables.actions.checkout-action-table-entry %}
{% data reusables.actions.setup-node-table-entry %}
|使用第三方操作：| [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| |在运行器上运行脚本：|使用 `./script/rendered-content-link-checker.mjs` |

## 示例工作流程

{% data reusables.actions.example-docs-engineering-intro %} [`link-check-all.yml`](https://github.com/github/docs/blob/main/.github/workflows/link-check-all.yml).

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

## 了解示例

{% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>代码</b></th>
    <th style="width:40%"><b>说明</b></th>
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

“on”关键字允许您定义在工作流程运行时触发的事件。 您可以在此处定义多个事件。 更多信息请参阅“[触发工作流程](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)”。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

如果您希望能够从 UI 手动运行此工作流程，请添加“workflow_dispatch”事件。 更多信息请参阅 [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)。
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

添加 'push' 事件，以便每次将提交推送到分支 `main` 时，工作流程都会自动运行。 更多信息请参阅 [`push`](/actions/using-workflows/events-that-trigger-workflows#push)。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

添加“pull_request”事件，以便每次创建或更新拉取请求时工作流程自动运行。 更多信息请参阅 [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request)。
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

修改授予“GITHUB_TOKEN”的默认权限。 这将因工作流程的需求而异。 更多信息请参阅“[为作业分配权限](/actions/using-jobs/assigning-permissions-to-jobs)”。
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

为特定事件创建并发组，并使用“||' 运算符来定义回退值。 更多信息请参阅“[使用并发](/actions/using-jobs/using-concurrency)”。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

取消同一并发组中任何当前正在运行的作业或工作流程。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

将工作流程文件中运行的所有作业组合在一起。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  check-links:
```
</td>
<td>

定义 ID 为“check-links”的作业，该作业存储在“jobs”键中。
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

将作业配置为在 {% data variables.product.prodname_dotcom %} 托管的运行器或自托管运行器上运行，具体取决于运行工作流程的存储库。 在此示例中，如果存储库名为“docs-internal”并且位于“github”组织内，则作业将在自托管运行器上运行。 如果存储库与此路径不匹配，则它将在 {% data variables.product.prodname_dotcom %} 托管的“ubuntu-latest”运行器上运行。 有关这些选项的更多信息，请参阅“[为作业选择运行器](/actions/using-jobs/choosing-the-runner-for-a-job)”。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

组合将作为“check-links”作业一部分运行的所有步骤。 工作流程中的每个作业都有自己的“steps”部分。
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

“uses”关键字告诉作业检索名为“actions/checkout”的操作。 这是检出仓库并将其下载到运行器的操作，允许针对您的代码运行操作（例如测试工具）。 只要工作流程针对仓库的代码运行，或者您使用仓库中定义的操作，您都必须使用检出操作。
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

此步骤使用“actions/setup-node”操作在运行器上安装指定版本的 Node.js 软件包，这使您可以访问“npm”命令。
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

“run”关键字指示作业在运行器上执行命令。 在这种情况下，“npm ci”用于为项目安装 npm 软件包。
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

使用“trilom/file-changes-action”操作来收集所有已更改的文件。 此示例使用 'a6ca26c14274c33b15e6499323aac178af06ad4b' SHA固定到操作的特定版本。
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

列出“files.json”的内容。 这将在工作流程运行的日志中可见，并且对于调试非常有用。
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

此步骤使用“run”命令执行存储在存储库中的“script/rendered-content-link-checker.mjs”中的脚本，并传递运行所需的所有参数。
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

此步骤还使用“run”命令来执行存储在存储库中的“script/rendered-content-link-checker.mjs”中的脚本，并传递一组不同的参数。
</tr>

</tbody>
</table>

## 后续步骤

{% data reusables.actions.learning-actions %}

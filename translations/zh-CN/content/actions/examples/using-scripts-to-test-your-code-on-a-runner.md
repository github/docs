---
title: Using scripts to test your code on a runner
shortTitle: Using scripts to test your code on a runner
intro: 'How to use essential {% data variables.product.prodname_actions %} features for continuous integration (CI).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
showMiniToc: false
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

- [示例概述](#example-overview)
- [此示例中使用的功能](#features-used-in-this-example)
- [示例工作流程](#example-workflow)
- [了解示例](#understanding-the-example)
- [后续步骤](#next-steps)

## 示例概述

{% data reusables.actions.example-workflow-intro-ci %} When this workflow is triggered, it automatically runs a script that checks whether the {% data variables.product.prodname_dotcom %} Docs site has any broken links.

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
| Using a third-party action: | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| | Running a script on the runner: | Using `./script/rendered-content-link-checker.mjs` |

## 示例工作流程

{% data reusables.actions.example-docs-engineering-intro %} [`link-check-all.yml`](https://github.com/github/docs/blob/main/.github/workflows/link-check-all.yml).

{% data reusables.actions.note-understanding-example %}

<table style="width:350px">
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

<table style="width:350px">
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

Add the `workflow_dispatch` event if you want to be able to manually run this workflow from the UI. For more information, see [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
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

Add the `push` event, so that the workflow runs automatically every time a commit is pushed to a branch called `main`. 更多信息请参阅 [`push`](/actions/using-workflows/events-that-trigger-workflows#push)。
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

Defines a job with the ID `check-links` that is stored within the `jobs` key.
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

Groups together all the steps that will run as part of the `check-links` job. 工作流程中的每个作业都有自己的“steps”部分。
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

This step uses the `actions/setup-node` action to install the specified version of the Node.js software package on the runner, which gives you access to the `npm` command.
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

The `run` keyword tells the job to execute a command on the runner. In this case, `npm ci` is used to install the npm software packages for the project.
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

Uses the `trilom/file-changes-action` action to gather all the changed files. 此示例使用 'a6ca26c14274c33b15e6499323aac178af06ad4b' SHA固定到操作的特定版本。
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

Lists the contents of `files.json`. This will be visible in the workflow run's log, and can be useful for debugging.
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

This step uses `run` command to execute a script that is stored in the repository at `script/rendered-content-link-checker.mjs` and passes all the parameters it needs to run.
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

This step also uses `run` command to execute a script that is stored in the repository at `script/rendered-content-link-checker.mjs` and passes a different set of parameters.
</tr>

</tbody>
</table>

## 后续步骤

{% data reusables.actions.learning-actions %}

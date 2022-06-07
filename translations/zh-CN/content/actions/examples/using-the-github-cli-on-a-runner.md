---
title: Using the GitHub CLI on a runner
shortTitle: Using the GitHub CLI on a runner
intro: 'How to use advanced {% data variables.product.prodname_actions %} features for continuous integration (CI).'
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

- [Example overview](#example-overview)
- [Features used in this example](#features-used-in-this-example)
- [示例工作流程](#example-workflow)
- [Understanding the example](#understanding-the-example)
- [后续步骤](#next-steps)

## Example overview

{% data reusables.actions.example-workflow-intro-ci %} When this workflow is triggered, it automatically runs a script that checks whether the {% data variables.product.prodname_dotcom %} Docs site has any broken links. If any broken links are found, the workflow uses the {% data variables.product.prodname_dotcom %} CLI to create a {% data variables.product.prodname_dotcom %} issue with the details.

{% data reusables.actions.example-diagram-intro %}

![Overview diagram of workflow steps](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## Features used in this example

{% data reusables.actions.example-table-intro %}

| **功能** | **实现** |
| ------ | ------ |
|        |        |
{% data reusables.actions.cron-table-entry %}
{% data reusables.actions.permissions-table-entry %}
{% data reusables.actions.if-conditions-table-entry %}
{% data reusables.actions.secrets-table-entry %}
{% data reusables.actions.checkout-action-table-entry %}
{% data reusables.actions.setup-node-table-entry %}
| Using a third-party action: | [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | Running shell commands on the runner: | [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | Running a script on the runner: | Using `script/check-english-links.js` | | Generating an output file: | Piping the output using the `>` operator | | Checking for existing issues using {% data variables.product.prodname_cli %}: | [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | Commenting on an issue using {% data variables.product.prodname_cli %}: | [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## 示例工作流程

{% data reusables.actions.example-docs-engineering-intro %} [`check-all-english-links.yml`](https://github.com/github/docs/blob/main/.github/workflows/check-all-english-links.yml).

{% data reusables.actions.note-understanding-example %}

<table style="width:350px">
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
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
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

## Understanding the example

{% data reusables.actions.example-explanation-table-intro %}

<table style="width:350px">
<thead>
  <tr>
    <th style="width:60%"><b>代码</b></th>
    <th style="width:40%"><b>Explanation</b></th>
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

Defines the `workflow_dispatch` and `scheduled` as triggers for the workflow:

* The `workflow_dispatch` lets you manually run this workflow from the UI. For more information, see [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
* The `schedule` event lets you use `cron` syntax to define a regular interval for automatically triggering the workflow. For more information, see [`schedule`](/actions/reference/events-that-trigger-workflows#schedule).
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

Modifies the default permissions granted to `GITHUB_TOKEN`. This will vary depending on the needs of your workflow. For more information, see "[Assigning permissions to jobs](/actions/using-jobs/assigning-permissions-to-jobs)."
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Groups together all the jobs that run in the workflow file.
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

Defines a job with the ID `check_all_english_links`, and the name `Check all links`, that is stored within the `jobs` key.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

Only run the `check_all_english_links` job if the repository is named `docs-internal` and is within the `github` organization. Otherwise, the job is marked as _skipped_.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

配置作业在 Ubuntu Linux 运行器上运行。 This means that the job will execute on a fresh virtual machine hosted by {% data variables.product.prodname_dotcom %}. For syntax examples using other runners, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)."
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

Creates custom environment variables, and redefines the built-in `GITHUB_TOKEN` variable to use a custom [secret](/actions/security-guides/encrypted-secrets). These variables will be referenced later in the workflow.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Groups together all the steps that will run as part of the `check_all_english_links` job. Each job in the workflow has its own `steps` section.
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

The `uses` keyword tells the job to retrieve the action named `actions/checkout`. 这是检出仓库并将其下载到运行器的操作，允许针对您的代码运行操作（例如测试工具）。 只要工作流程针对仓库的代码运行，或者您使用仓库中定义的操作，您都必须使用检出操作。
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

This step uses the `actions/setup-node` action to install the specified version of the `node` software package on the runner, which gives you access to the `npm` command.
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

The `run` keyword tells the job to execute a command on the runner. In this case, the `npm ci` and `npm run build` commands are run as separate steps to install and build the Node.js application in the repository.
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

This `run` command executes a script that is stored in the repository at `script/check-english-links.js`, and pipes the output to a file called `broken_links.md`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
```
</td>
<td>

If the `check-english-links.js` script detects broken links and returns a non-zero (failure) exit status, then use a [workflow command](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter) to set an output that has the value of the first line of the `broken_links.md` file (this is used the next step).
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

Uses the `peter-evans/create-issue-from-file` action to create a new {% data variables.product.prodname_dotcom %} issue. This example is pinned to a specific version of the action, using the `b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e` SHA.
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

Uses [`gh issue list`](https://cli.github.com/manual/gh_issue_list) to locate the previously created issue from earlier runs. This is [aliased](https://cli.github.com/manual/gh_alias_set) to `gh list-reports` for simpler processing in later steps. To get the issue URL, the `jq` expression processes the resulting JSON output.

[`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) is then used to add a comment to the new issue that links to the previous one.
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

If an issue from a previous run is open and assigned to someone, then use [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) to add a comment with a link to the new issue.
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

If an issue from a previous run is open and is not assigned to anyone, then:

* Use [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) to add a comment with a link to the new issue.
* Use [`gh issue close`](https://cli.github.com/manual/gh_issue_close) to close the old issue.
* Use [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit) to edit the old issue to remove it from a specific {% data variables.product.prodname_dotcom %} project board.
</td>
</tr>
</tbody>
</table>

## 后续步骤

{% data reusables.actions.learning-actions %}

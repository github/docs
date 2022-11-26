---
title: ランナーでの GitHub CLI の使用
shortTitle: Use the GitHub CLI on a runner
intro: '継続的インテグレーション (CI) のために高度な {% data variables.product.prodname_actions %} 機能を使用する方法。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111586'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## サンプルの概要

{% data reusables.actions.example-workflow-intro-ci %}このワークフローがトリガーされると、{% data variables.product.prodname_dotcom %} Docs サイトに壊れたリンクがあるかどうかを確認するスクリプトが自動的に実行されます。 壊れたリンクが見つかった場合、ワークフローで詳しい情報を含む {% data variables.product.prodname_dotcom %} のイシューが {% data variables.product.prodname_dotcom %} CLI を使用して作成されます。

{% data reusables.actions.example-diagram-intro %}

![ワークフローのステップの概要図](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## この例で使用されている機能

{% data reusables.actions.example-table-intro %}

| **機能**  | **実装** |
| --- | --- |
{% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.if-conditions-table-entry %} {% data reusables.actions.secrets-table-entry %} {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | サード パーティのアクションの使用: | [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | ランナーでのシェル コマンドの実行: | [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | ランナーでのスクリプトの実行: | `script/check-english-links.js` の使用 | | 出力ファイルの生成: | `>` 演算子を使用した出力のパイプ処理 | | {% data variables.product.prodname_cli %} を使用した既存のイシューの確認: | [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | {% data variables.product.prodname_cli %} を使用したイシューへのコメント: | [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## ワークフローの例

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

## 例の説明

{% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%">"<b>コード</b>"</th>
    <th style="width:40%"><b>説明</b></th>
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

ワークフローのトリガーとして `workflow_dispatch` と `scheduled` を定義します。

* `workflow_dispatch` を使用すると、UI からこのワークフローを手動で実行できます。 詳細については、「[`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)」を参照してください。
* `schedule` イベントにより、`cron` 構文を使用して、ワークフローを自動的にトリガーするための一定の間隔を定義できます。 詳細については、「[`schedule`](/actions/reference/events-that-trigger-workflows#schedule)」を参照してください。
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

`GITHUB_TOKEN` に付与される既定のアクセス許可を変更します。 これはワークフローのニーズによって異なります。 詳しい情報については、「[ジョブへのアクセス許可の割り当て](/actions/using-jobs/assigning-permissions-to-jobs)」を参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

ワークフロー ファイルで実行されるすべてのジョブをグループ化します。
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

ID `check_all_english_links` と名前 `Check all links` を持つジョブを定義します。これは `jobs` キー内に格納されます。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

リポジトリが `docs-internal` という名前で、`github` という Organization 内にある場合のみ、`check_all_english_links` ジョブを実行します。 それ以外の場合、ジョブは _"スキップ済み"_ としてマークされます。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

Ubuntu Linux ランナーで実行するようにジョブを設定します。 これは、ジョブが {% data variables.product.prodname_dotcom %} によってホストされている新しい仮想マシンで実行されるということです。 他のランナーを使う構文例については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)」を参照してください。
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

カスタム環境変数を作成し、組み込み `GITHUB_TOKEN` 変数を再定義してカスタム [シークレット](/actions/security-guides/encrypted-secrets)を使用します。 これらの変数は、ワークフローで後から参照されます。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

`check_all_english_links` ジョブの一部として実行されるすべてのステップをグループ化します。 ワークフロー内の各ジョブには、独自の `steps` セクションがあります。
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

`uses` キーワードは、`actions/checkout` という名前のアクションを取得するようにジョブに指示します。 これは、リポジトリをチェックアウトしてランナーにダウンロードし、コードに対してアクション（テストツールなど）を実行できるようにします。 ワークフローがリポジトリのコードに対して実行されるとき、またはリポジトリで定義されたアクションを使用しているときはいつでも、チェックアウトアクションを使用する必要があります。
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

このステップでは、`actions/setup-node` アクションを使用して、指定したバージョンの `node` ソフトウェア パッケージをランナーにインストールします。これにより、`npm` コマンドにアクセスできるようになります。
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

`run` キーワードは、ランナーでコマンドを実行するようにジョブに指示します。 この場合、Node.js アプリケーションをリポジトリにインストールしてビルドするための個別のステップとして、`npm ci` コマンドと `npm run build` コマンドが実行されます。
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

この `run` コマンドは、リポジトリの `script/check-english-links.js` に保存されているスクリプトを実行し、出力を `broken_links.md` というファイルにパイプで渡します。
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

`check-english-links.js` スクリプトで壊れたリンクが検出され、0 以外 (失敗) の終了状態が返された場合は、[ワークフロー コマンド](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter)を使用して、`broken_links.md` ファイルの先頭行の値を持つ出力を設定します (これは次のステップで使用されます)。
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

`peter-evans/create-issue-from-file` アクションを使用して、新しい {% data variables.product.prodname_dotcom %} のイシューを作成します。 この例は、`b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e` SHA を使用して、特定のバージョンのアクションに合わせて固定されています。
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

[`gh issue list`](https://cli.github.com/manual/gh_issue_list) を使用して、以前の実行から以前に作成したイシューを見つけます。 これには、後のステップでの処理を簡単にするために、`gh list-reports` という[別名](https://cli.github.com/manual/gh_alias_set)が付けられます。 イシューの URL を取得するために、`jq` 式で結果の JSON 出力を処理します。

次に [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) を使用して、以前のイシューにリンクするコメントを新しいイシューに追加します。
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

以前の実行でのイシューが未解決であり誰かに割り当てられている場合は、[`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) を使用して、新しいイシューへのリンクを含むコメントを追加します。
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

以前の実行でのイシューが未解決であり誰にも割り当てられない場合は、次のようになります。

* [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) を使用して、新しいイシューへのリンクを含むコメントを追加します。
* [`gh issue close`](https://cli.github.com/manual/gh_issue_close) を使用して以前のイシューを閉じます。
* [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit) を使用して以前のイシューを編集し、特定の {% data variables.product.prodname_dotcom %} プロジェクト ボードから削除します。
</td>
</tr>
</tbody>
</table>

## 次の手順

{% data reusables.actions.learning-actions %}

---
title: 'Actions を使用した {% data variables.product.prodname_projects_v2 %} の自動化'
shortTitle: Automating with Actions
intro: '{% data variables.product.prodname_actions %} を使ってプロジェクトを自動化できます。'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/automating-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c21e201e538d09826bd0d00f22fe60508c9d6a61
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106846'
---
## {% data variables.product.prodname_actions %}のワークフロー

このセクションでは、GraphQL APIと{% data variables.product.prodname_actions %}を使ってOrganizationのプロジェクトにPull Requestを追加する方法を紹介します。 このワークフローの例では、Pull Requestが"ready for review"としてマークされると、プロジェクトに新しいタスクが追加され、"Status"フィールドが"Todo"に設定され、現在の日付がカスタムの"Date posted"フィールドに追加されます。

必要に応じて、以下のワークフローの1つをコピーして、以下の表にあるように変更できます。

プロジェクトは複数のリポジトリにまたがることができますが、ワークフローは1つのリポジトリに固有です。 プロジェクトで追跡する各リポジトリにワークフローを追加します。ワークフロー ファイルの作成の詳細については、「[{% data variables.product.prodname_actions %} のクイックスタート](/actions/quickstart)」を参照してください。

この記事は、{% data variables.product.prodname_actions %}を基本的に理解していることを前提としています。 {% data variables.product.prodname_actions %} の詳細については、「[{% data variables.product.prodname_actions %}](/actions)」を参照してください。

API を使用してプロジェクトに加えることができるその他の変更の詳細については、「[API を使ったプロジェクト (ベータ) の管理](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)」を参照してください。

また、{% data variables.product.company_short %} によって管理され、指定されたプロジェクトに現在の issue または pull request を追加する **actions/add-to-project** ワークフローを使用することもできます。 詳しくは、[actions/add-to-project](https://github.com/actions/add-to-project) リポジトリと README を参照してください。

{% note %}

**注:** `GITHUB_TOKEN` はリポジトリ レベルをスコープとしており、{% data variables.projects.projects_v2 %} にはアクセスできません。 {% data variables.projects.projects_v2 %} にアクセスするために、{% data variables.product.prodname_github_app %} (Organization プロジェクトの場合に推奨) または {% data variables.product.pat_generic %} (ユーザー プロジェクトの場合に推奨) を作成できます。 以下には、どちらの方法のワークフローの例も示します。

{% endnote %}

### {% data variables.product.prodname_github_app %}で認証を行うワークフローの例

1. {% data variables.product.prodname_github_app %}を作成するか、自分のOrganizationが所有する既存の{% data variables.product.prodname_github_app %}を選択してください。 詳細については、「[{% data variables.product.prodname_github_app %} を作成する](/developers/apps/building-github-apps/creating-a-github-app)」を参照してください。
2. {% data variables.product.prodname_github_app %}に、Organizationプロジェクトに対する読み込み及び書き込み権限を与えてください。 詳細については、「[{% data variables.product.prodname_github_app %} の権限を編集する](/developers/apps/managing-github-apps/editing-a-github-apps-permissions)」を参照してください。

   {% note %}

   **注:** Organization プロジェクトおよびリポジトリ プロジェクトに対するアプリのアクセス許可を制御できます。 Organizationプロジェクトに対する読み書き権限を与えなければなりません。リポジトリプロジェクトに対する読み書き権限だけでは不十分です。

   {% endnote %}

3. Organizationに{% data variables.product.prodname_github_app %}をインストールしてください。 プロジェクトがアクセスする必要があるすべてのリポジトリにインストールしてください。 詳細については、「[{% data variables.product.prodname_github_apps %} のインストール](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository)」を参照してください。
4. {% data variables.product.prodname_github_app %}のIDを、リポジトリもしくはOrganizationのシークレットとして保存してください。 以下のワークフローでは、`APP_ID` をシークレットの名前に置き換えます。 アプリケーションIDは、アプリケーションの設定ページで、あるいはアプリケーションのAPIを通じて確認できます。 詳細については、「[アプリ](/rest/reference/apps#get-an-app)」を参照してください。
5. アプリケーションの秘密鍵を生成してください。 作成されたファイルの内容を、シークレットとしてリポジトリもしくはOrganizationに保存してください。 (`-----BEGIN RSA PRIVATE KEY-----` および `-----END RSA PRIVATE KEY-----` を含め、ファイルの内容全体を保存してください)。以下のワークフローでは、`APP_PEM` をシークレットの名前に置き換えます。 詳細については、「[{% data variables.product.prodname_github_apps %} による認証](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)」を参照してください。
6. 以下のワークフローでは、`YOUR_ORGANIZATION` を自身の組織の名前に置き換えます。 たとえば、「 `octo-org` 」のように入力します。 `YOUR_PROJECT_NUMBER`をプロジェクト番号に置き換えます。 プロジェクト番号を見つけるには、プロジェクトのURLを見てください。 たとえば、`https://github.com/orgs/octo-org/projects/5` のプロジェクト番号は 5 です。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Add PR to project
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Get project data
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectV2(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
                item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"

            echo 'ITEM_ID='$item_id >> $GITHUB_ENV

      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

      - name: Set fields
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          gh api graphql -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: Date!
            ) {
              set_status: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: { 
                  singleSelectOptionId: $status_value
                  }
              }) {
                projectV2Item {
                  id
                  }
              }
              set_date_posted: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: { 
                  date: $date_value
                }
              }) {
                projectV2Item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

### {% data variables.product.pat_generic %} を使って認証を行うワークフローの例

1. `project` スコープと `repo` スコープを使って {% data variables.product.pat_v1 %} を作成します。 詳しくは、「[{% data variables.product.pat_generic %} を作成する](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。
2. {% data variables.product.pat_generic %} をリポジトリまたは Organization のシークレットとして保存してください。
3. 以下のワークフローでは、`YOUR_TOKEN` をシークレットの名前に置き換えます。 `YOUR_ORGANIZATION` を自身の組織の名前に置き換えます。 たとえば、「 `octo-org` 」のように入力します。 `YOUR_PROJECT_NUMBER`をプロジェクト番号に置き換えます。 プロジェクト番号を見つけるには、プロジェクトのURLを見てください。 たとえば、`https://github.com/orgs/octo-org/projects/5` のプロジェクト番号は 5 です。

```yaml{:copy}
name: Add PR to project
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Get project data
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectV2(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
                item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"

            echo 'ITEM_ID='$item_id >> $GITHUB_ENV

      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

      - name: Set fields
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
        run: |
          gh api graphql -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: Date!
            ) {
              set_status: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: { 
                  singleSelectOptionId: $status_value
                  }
              }) {
                projectV2Item {
                  id
                  }
              }
              set_date_posted: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: { 
                  date: $date_value
                }
              }) {
                projectV2Item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

### ワークフローの説明

以下の表は、ワークフローの例のセクションについて説明しており、自分の利用方法にそれらのワークフローを適応させる方法を示します。

<table class="table-fixed">

<tr>
<td>

```yaml
on:
  pull_request:
    types:
      - ready_for_review
```

</td>
<td>
このワークフローは、リポジトリ内のPull Requestが"ready for review"としてマークされたときに実行されます。
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %} のみ:

```yaml
- name: Generate token
  id: generate_token
  uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
  with:
    app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
    private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}
```

</td>
<td>
<a href="https://github.com/tibdex/github-app-token">tibdex/github-app-token action</a> を使用して、アプリ ID と秘密キーからアプリのインストール アクセス トークンを生成します。 このインストール アクセス トークンは、後で、ワークフロー内で <code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code> としてアクセスされます。
<br>
<br>
<code>APP_ID</code> を、アプリ ID を含むシークレットの名前に置き換えます。
<br>
<br>
<code>APP_PEM</code> を、アプリの秘密キーを含むシークレットの名前に置き換えます。
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

{% data variables.product.pat_generic_caps %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
このステップのための環境変数を設定します。
<br>
<br>
{% data variables.product.pat_generic %} を使っている場合は、<code>YOUR_TOKEN</code> {% data variables.product.pat_generic %} を含んでいるシークレットの名前で置き換えてください。
<br>
<br>
<code>YOUR_ORGANIZATION</code> を自身の組織の名前に置き換えます。 たとえば、「 <code>octo-org</code> 」のように入力します。
<br>
<br>
<code>YOUR_PROJECT_NUMBER</code>をプロジェクト番号に置き換えます。 プロジェクト番号を見つけるには、プロジェクトのURLを見てください。 たとえば、<code>https://github.com/orgs/octo-org/projects/5</code> のプロジェクト番号は 5 です。
</td>
</tr>

<tr>
<td>

```yaml
gh api graphql -f query='
  query($org: String!, $number: Int!) {
    organization(login: $org){
      projectV2(number: $number) {
        id
        fields(first:20) {
          nodes {
            ... on ProjectV2Field {
              id
              name
            }
            ... on ProjectV2SingleSelectField {
              id
              name
              options {
                id
                name
              }
            }
          }
        }
      }
    }
  }'  -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json
```

</td>
<td>
<p><a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> を使用して、プロジェクトの ID に対するクエリを API に実行し、プロジェクト内の最初の 20 個のフィールドの名前と ID を返します。 <code>fields</code> は和集合を返し、クエリではインライン フラグメント (<code>... on</code>) を使用して <code>ProjectV2Field</code> フィールドと <code>ProjectV2SingleSelectField</code> フィールドに関する情報を返します。</p>

<p>応答は、<code>project_data.json</code> という名前のファイルに保存されます。</p>
</td>
</tr>

<tr>
<td>

```yaml
echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV
```

</td>
<td>
APIクエリからのレスポンスをパースし、関連するIDを環境変数として保存します。 これを変更して、様々なフィールドやオプションのIDを取得してください。 次に例を示します。
<ul>
<li><code>Team</code> という名前のフィールドの ID を取得するには、<code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code> を追加します。</li>
<li><code>Team</code> 単一選択フィールドの <code>Octoteam</code> という名前のオプションの ID を取得するには、<code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code> を追加します</li>
</ul>
<strong>注: </strong>このワークフローでは、プロジェクトに、"Todo" という名前のオプションを含む "Status" という名前の単一の選択フィールドと、"Date posted" という名前の日付フィールドがあることを前提としています。 テーブル中にあるフィールドにマッチするよう、このセクションは変更しなければなりません。
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

{% data variables.product.pat_generic_caps %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

</td>
<td>
このステップのための環境変数を設定します。 <code>GITHUB_TOKEN</code> は、前述のとおりです。 <code>PR_ID</code> は、このワークフローをトリガーする pull request の ID です。

</td>
</tr>

<tr>
<td>

```yaml
item_id="$( gh api graphql -f query='
  mutation($project:ID!, $pr:ID!) {
    addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
      item {
        id
      }
    }
  }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"
```

</td>
<td>
<a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> と API を使用して、このワークフローをトリガーした pull request をプロジェクトに追加します。 <code>jq</code> フラグは、応答を解析して、作成されたアイテムの ID を取得します。
</td>
</tr>

<tr>
<td>

```yaml
echo 'ITEM_ID='$item_id >> $GITHUB_ENV
```

</td>
<td>
作成されたアイテムのIDを環境変数として保存します。
</td>
</tr>

<tr>
<td>

```yaml
echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV
```

</td>
<td>
現在の日付を <code>yyyy-mm-dd</code> の形式で環境変数として保存します。
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

{% data variables.product.pat_generic_caps %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
```

</td>
<td>
このステップのための環境変数を設定します。 <code>GITHUB_TOKEN</code> は、前述のとおりです。

</td>
</tr>

<tr>
<td>

```yaml
gh api graphql -f query='
  mutation (
    $project: ID!
    $item: ID!
    $status_field: ID!
    $status_value: String!
    $date_field: ID!
    $date_value: Date!
  ) {
    set_status: updateProjectV2ItemFieldValue(input: {
      projectId: $project
      itemId: $item
      fieldId: $status_field
      value: { 
        singleSelectOptionId: $status_value
        }
    }) {
      projectV2Item {
        id
        }
    }
    set_date_posted: updateProjectV2ItemFieldValue(input: {
      projectId: $project
      itemId: $item
      fieldId: $date_field
      value: { 
        date: $date_value
      }
    }) {
      projectV2Item {
        id
      }
    }
  }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent
```

</td>
<td>
<code>Status</code> フィールドの値を <code>Todo</code> に設定します。 <code>Date posted</code> フィールドの値を設定します。
</td>
</tr>

</table>

---
title: プロジェクト（ベータ）の自動化
intro: 'API及び{% data variables.product.prodname_actions %}を使ってプロジェクトを管理できます。'
product: '{% data reusables.gated-features.actions %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
type: how_to
topics:
  - Projects
  - Workflows
  - Project management
---

## はじめに

この記事では、GraphQL API及び{% data variables.product.prodname_actions %}を使ってプロジェクトにPull Requestを追加する方法を紹介します。 Pull Requestが"ready for review"としてマークされると、プロジェクトに新しいタスクが追加され、"Status"フィールドが"Todo"に設定され、現在の日付がカスタムの"Date posted"フィールドに追加されます。

この記事は、{% data variables.product.prodname_actions %}を基本的に理解していることを前提としています。 {% data variables.product.prodname_actions %}に関する詳しい情報については「[{% data variables.product.prodname_actions %}](/actions) 」を参照してください。

{% data reusables.projects.projects-beta %}

{% data reusables.projects.api-beta %}

{% note %}

**ノート:** `GITHUB_TOKEN`は、プロジェクト（ベータ）にアクセスするのに必要なスコープを持っていません。 `org:write`スコープを持つトークンを作成し、リポジトリもしくはOrganizationにシークレットとして保存しなければなりません。 以下のワークフローでは、`YOUR_TOKEN`をそのシークレットの名前で置き換えてください。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。

{% endnote %}

## ワークフローの例

必要に応じて、このワークフローをコピーして、以下の表にあるように変更できます。 プロジェクトは複数のリポジトリにまたがることができますが、ワークフローは1つのリポジトリに固有です。 このワークフローを、プロジェクトに追跡させたいそれぞれのリポジトリに追加してください。 ワークフローファイルの作成に関する詳しい情報については「[{% data variables.product.prodname_actions %}のクイックスタート](/actions/quickstart)」を参照してください。

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
          GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectNext(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      id
                      name
                      settings
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectNext.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") |.settings | fromjson.options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectNextItem(input: {projectId: $project, contentId: $pr}) {
                projectNextItem {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectNextItem.projectNextItem.id')"

          echo 'ITEM_ID='$item_id >> $GITHUB_ENV

      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

      - name: Set fields
        env:
          GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
        run: |
          gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: String!
            ) {
              set_status: updateProjectNextItemField(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: $status_value
              }) {
                projectNextItem {
                  id
                  }
              }
              set_date_posted: updateProjectNextItemField(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: $date_value
              }) {
                projectNextItem {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

以下の表は、ワークフローのセクションについて説明し、それらを自分の利用方法に合わせて適応させる方法を示しています。

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

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
このステップのための環境変数を設定します。
<br>
<br>
<code>org:write</code>スコープを持つトークンを作成し、リポジトリあるいはOrganizationにシークレットとして保存します。 <code>YOUR_TOKEN</code>をシークレット名で置き換えてください。
<br>
<br>
<code>YOUR_ORGANIZATION</code>をOrganization名で置き換えてください。 たとえば<code>octo-org</code>というようにします。
<br>
<br>
<code>YOUR_PROJECT_NUMBER</code>をプロジェクト番号で置き換えてください。 プロジェクト番号を知るには、プロジェクトのURLを見てください。 たとえば<code>https://github.com/orgs/octo-org/projects/5</code>ではプロジェクト番号は5です。
</td>
</tr>

<tr>
<td>

```yaml
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query($org: String!, $number: Int!) {
    organization(login: $org){
      projectNext(number: $number) {
        id
        fields(first:20) {
          nodes {
            id
            name
            settings
          }
        }
      }
    }
  }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json
```

</td>
<td>
<a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a>を使って、プロジェクトのIDと、プロジェクトの最初の20個のフィールドのID、名前、設定を、APIに問い合わせます。 レスポンスは<code>project_data.json</code>というファイルに保存されます。
</td>
</tr>

<tr>
<td>

```yaml
echo 'PROJECT_ID='$(jq '.data.organization.projectNext.id' project_data.json) >> $GITHUB_ENV
echo 'DATE_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
echo 'TODO_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") |.settings | fromjson.options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV
```

</td>
<td>
APIクエリからのレスポンスをパースし、関連するIDを環境変数として保存します。 これを変更して、様々なフィールドやオプションのIDを取得してください。 例:
<ul>
<li><code>Team</code>というフィールドのIDを取得するには、<code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>を追加してください。</li>
<li><code>Team</code>フィールドの<code>Octoteam</code>というオプションのIDを取得するには、<code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Team") |.settings | fromjson.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code>を追加してください。</li>
</ul>
<strong>ノート:</strong> このワークフローは、プロジェクトが"Todo"というオプションを含む"Status"という単一選択フィールドと"Date posted"という日付フィールドを持つことを前提としています。 テーブル中にあるフィールドにマッチするよう、このセクションは変更しなければなりません。
</td>
</tr>

<tr>
<td>

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

</td>
<td>
このステップのための環境変数を設定します。 <code>GITHUB_TOKEN</code>は上で説明されています。 <code>PR_ID</code>は、このワークフローをトリガーしたPull RequestのIDです。

</td>
</tr>

<tr>
<td>

```yaml
item_id="$( gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation($project:ID!, $pr:ID!) {
    addProjectNextItem(input: {projectId: $project, contentId: $pr}) {
      projectNextItem {
        id
      }
    }
  }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectNextItem.projectNextItem.id')"
```

</td>
<td>
<a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a>とAPIを使って、このワークフローをトリガーしたPull Requestをプロジェクトに追加します。 <code>jq</code>フラグは、レスポンスをパースして作成されたアイテムのIDを取得します。
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
現在の日付を<code>yyyy-mm-dd</code>というフォーマットで環境変数に保存します。
</td>
</tr>

<tr>
<td>

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
```

</td>
<td>
このステップのための環境変数を設定します。 <code>GITHUB_TOKEN</code>は上で説明されています。

</td>
</tr>

<tr>
<td>

```yaml
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation (
    $project: ID!
    $item: ID!
    $status_field: ID!
    $status_value: String!
    $date_field: ID!
    $date_value: String!
  ) {
    set_status: updateProjectNextItemField(input: {
      projectId: $project
      itemId: $item
      fieldId: $status_field
      value: $status_value
    }) {
      projectNextItem {
        id
        }
    }
    set_date_posted: updateProjectNextItemField(input: {
      projectId: $project
      itemId: $item
      fieldId: $date_field
      value: $date_value
    }) {
      projectNextItem {
        id
      }
    }
  }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent
```

</td>
<td>
<code>Status</code>フィールドの値を<code>Todo</code>に設定します。 <code>Date posted</code>フィールドの値を設定します。
</td>
</tr>

</table>

## 次のステップ

APIを通じてプロジェクトに対して行える他の変更に関する情報については「[APIを使ったプロジェクトの管理](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)」を参照してください。 {% data variables.product.prodname_actions %}に関する詳しい情報については「[{% data variables.product.prodname_actions %}](/actions) 」を参照してください。

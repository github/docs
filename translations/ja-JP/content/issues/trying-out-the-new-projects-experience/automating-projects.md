---
title: プロジェクト（ベータ）の自動化
intro: '組み込みのワークフロー、あるいはAPIと{% data variables.product.prodname_actions %}を使ってプロジェクトを管理できます。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
  - Workflows
  - Project management
---

{% data reusables.projects.projects-beta %}

{% data reusables.projects.graphql-deprecation %}

## はじめに

プロジェクトの管理に役立つ自動化を追加できます。 プロジェクト（ベータ）には、UIを通じて設定できる組み込みのワークフローが含まれています。 加えて、GraphQL APIと{% data variables.product.prodname_actions %}でカスタムのワークフローを書くことができます。

## 組み込みのワークフロー

{% data reusables.projects.about-workflows %}

プロジェクトでは、組み込みのワークフローを有効化あるいは無効化できます。

{% data reusables.projects.enable-basic-workflow %}

## {% data variables.product.prodname_actions %}のワークフロー

このセクションでは、GraphQL APIと{% data variables.product.prodname_actions %}を使ってOrganizationのプロジェクトにPull Requestを追加する方法を紹介します。 このワークフローの例では、Pull Requestが"ready for review"としてマークされると、プロジェクトに新しいタスクが追加され、"Status"フィールドが"Todo"に設定され、現在の日付がカスタムの"Date posted"フィールドに追加されます。

必要に応じて、以下のワークフローの1つをコピーして、以下の表にあるように変更できます。

プロジェクトは複数のリポジトリにまたがることができますが、ワークフローは1つのリポジトリに固有です。 ワークフローを、プロジェクトに追跡させたいそれぞれのリポジトリに追加してください。 ワークフローファイルの作成に関する詳しい情報については「[{% data variables.product.prodname_actions %}のクイックスタート](/actions/quickstart)」を参照してください。

この記事は、{% data variables.product.prodname_actions %}を基本的に理解していることを前提としています。 {% data variables.product.prodname_actions %}に関する詳しい情報については「[{% data variables.product.prodname_actions %}](/actions) 」を参照してください。

APIを通じてプロジェクトに対して行える他の変更に関する情報については「[APIを使ったプロジェクトの管理](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)」を参照してください。

{% note %}

**ノート:** `GITHUB_TOKEN`はリポジトリレベルをスコープとしており、プロジェクト（ベータ）にはアクセスできません。 プロジェクト（ベータ）にアクセスするには、{% data variables.product.prodname_github_app %}（Organizationプロジェクトの場合に推奨）もしくは個人アクセストークン（ユーザプロジェクトの場合に推奨）を作成できます。 以下には、どちらの方法のワークフローの例も示します。

{% endnote %}

### {% data variables.product.prodname_github_app %}で認証を行うワークフローの例

1. {% data variables.product.prodname_github_app %}を作成するか、自分のOrganizationが所有する既存の{% data variables.product.prodname_github_app %}を選択してください。 詳しい情報については「[{% data variables.product.prodname_github_app %}の作成](/developers/apps/building-github-apps/creating-a-github-app)」を参照してください。
2. {% data variables.product.prodname_github_app %}に、Organizationプロジェクトに対する読み込み及び書き込み権限を与えてください。 詳しい除法については「[{% data variables.product.prodname_github_app %}の権限の編集](/developers/apps/managing-github-apps/editing-a-github-apps-permissions)」を参照してください。

   {% note %}

   **ノート:** アプリケーションのOrganizationプロジェクトに対する権限と、リポジトリプロジェクトに対する権限を制御できます。 Organizationプロジェクトに対する読み書き権限を与えなければなりません。リポジトリプロジェクトに対する読み書き権限だけでは不十分です。

   {% endnote %}

3. Organizationに{% data variables.product.prodname_github_app %}をインストールしてください。 プロジェクトがアクセスする必要があるすべてのリポジトリにインストールしてください。 詳しい情報については「[{% data variables.product.prodname_github_apps %}のインストール](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository)」を参照してください。
4. {% data variables.product.prodname_github_app %}のIDを、リポジトリもしくはOrganizationのシークレットとして保存してください。 以下のワークフローでは、`APP_ID`をシークレット名に置き換えてください。 アプリケーションIDは、アプリケーションの設定ページで、あるいはアプリケーションのAPIを通じて確認できます。 詳しい情報については「[アプリケーション](/rest/reference/apps#get-an-app)」を参照してください。
5. アプリケーションの秘密鍵を生成してください。 作成されたファイルの内容を、シークレットとしてリポジトリもしくはOrganizationに保存してください。 （ファイルの内容は、`-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`という部分も含めて全体をほぞんしてください。） 以下のワークフローでは、`APP_PEM`をシークレットの名前に置き換えてください。 詳しい情報については「[{% data variables.product.prodname_github_apps %}での認証](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)」を参照してください。
6. 以下のワークフローでは、`YOUR_ORGANIZATION`をOrganizationの名前で置き換えてください。 たとえば`octo-org`というようにします。 `YOUR_PROJECT_NUMBER`は、プロジェクトの番号で置き換えてください。 プロジェクト番号を知るには、プロジェクトのURLを見てください。 たとえば`https://github.com/orgs/octo-org/projects/5`ではプロジェクト番号は5です。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

### 個人アクセストークンで認証するワークフローの例

1. `project`及び`repo`スコープを持つ個人アクセストークンを作成します。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。
2. この個人アクセストークンをシークレットとしてリポジトリもしくはOrganizationに保存します。
3. 以下のワークフローでは、`YOUR_TOKEN`をそのシークレットの名前で置き換えてください。 `YOUR_ORGANIZATION`をOrganizationの名前で置き換えてください。 たとえば`octo-org`というようにします。 `YOUR_PROJECT_NUMBER`は、プロジェクトの番号で置き換えてください。 プロジェクト番号を知るには、プロジェクトのURLを見てください。 たとえば`https://github.com/orgs/octo-org/projects/5`ではプロジェクト番号は5です。

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

{% data variables.product.prodname_github_app %} only:

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
<a href="https://github.com/tibdex/github-app-token">tibdex/github-app-token action</a>を使い、アプリケーションIDと秘密鍵からアプリケーション用のインストールアクセストークンを生成します。 このインストールアクセストークンは、後にワークフロー内で<code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code>としてアクセスされます。
<br>
<br>
<code>APP_ID</code>はアプリケーションIDを含むシークレットの名前で置き換えてください。
<br>
<br>
<code>APP_PEM</code>は、アプリケーションの秘密鍵を含むシークレットの名前で置き換えてください。
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

Personal access token:

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
個人アクセストークンを使っているなら、<code>YOUR_TOKEN</code>を個人アクセストークンを含むシークレットの名前で置き換えてください。
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
<p>プロジェクトのIDに対して<a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a>を使ってAPIに問い合わせ、プロジェクトの最初の20個のフィールドのIDと名前を返します。 <code>fields</code>は共用体を返し、クエリはインラインフラグメント(<code>... on</code>)を使ってすべての<code>ProjectV2Field</code>及び<code>ProjectV2SingleSelectField</code>フィールドに関する情報を返します。</p>

<p>レスポンスは<code>project_data.json</code>というファイルに保存されます。</p>
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
APIクエリからのレスポンスをパースし、関連するIDを環境変数として保存します。 これを変更して、様々なフィールドやオプションのIDを取得してください。 例:
<ul>
<li><code>Team</code>というフィールドのIDを取得するには、<code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>を追加してください。</li>
<li>単一選択フィールド<code>Team</code>の<code>Octoteam</code>というオプションのIDを取得するには、<code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code>を追加してください。</li>
</ul>
<strong>ノート:</strong> このワークフローは、プロジェクトが"Todo"というオプションを含む"Status"という単一選択フィールドと"Date posted"という日付フィールドを持つことを前提としています。 テーブル中にあるフィールドにマッチするよう、このセクションは変更しなければなりません。
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

Personal access token:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
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

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

Personal access token:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
```

</td>
<td>
このステップのための環境変数を設定します。 <code>GITHUB_TOKEN</code>は上で説明されています。

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
<code>Status</code>フィールドの値を<code>Todo</code>に設定します。 <code>Date posted</code>フィールドの値を設定します。
</td>
</tr>

</table>

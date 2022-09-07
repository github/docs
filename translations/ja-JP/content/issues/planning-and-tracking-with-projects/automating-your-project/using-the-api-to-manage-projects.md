---
title: 'API を使用して {% data variables.product.prodname_projects_v2 %} を管理する'
shortTitle: Automating with the API
intro: GraphQL API を使用して、プロジェクトを自動化できます。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1ec0d34e302d97fcb3a6c87f37c8214f3965c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147723258'
---
この記事では、GraphQL API を使用してプロジェクトを管理する方法を説明します。 {% data variables.product.prodname_actions %} ワークフローで API を使用する方法について詳しくは、「[Actions を使った {% data variables.product.prodname_projects_v2 %} の自動化](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)」を参照してください。 使用可能なデータ型の完全な一覧については、「[リファレンス](/graphql/reference)」を参照してください。

{% data reusables.projects.graphql-deprecation %}

## 認証

{% curl %}

次のすべての cURL の例では、`TOKEN` を、`read:project` スコープ (クエリの場合) または `project` スコープ (クエリとミューテーションの場合) を持つトークンに置き換えます。 このトークンは、ユーザの場合は個人アクセストークンに、{% data variables.product.prodname_github_app %}の場合はインストールアクセストークンにできます。 個人用アクセス トークンの作成について詳しくは、「[個人アクセス トークンを使用する](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。 {% data variables.product.prodname_github_app %} のインストール アクセス トークンの作成の詳細については、「[{% data variables.product.prodname_github_apps %} を使用した認証](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)」を参照してください。

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} コマンドを実行する前に、`gh auth login --scopes "project"` を実行して認証する必要があります。 プロジェクトの読み取りだけを行い、編集を行う必要がないのであれば、`project` の代わりに `read:project` スコープを指定できます。 コマンド ライン認証の詳細については、「[gh auth login](https://cli.github.com/manual/gh_auth_login)」を参照してください。

{% endcli %}

{% cli %}

## 変数の使用

以下のすべての例で、変数を使ってスクリプトをシンプルにできます。 数値、ブール値、または null 値である変数を渡すには、`-F` を使用ます。 その他の変数の場合は、`-f` を使用します。 たとえば、次のように入力します。

```shell
my_org="octo-org"
my_num=5
gh api graphql -f query='
  query($organization: String! $number: Int!){
    organization(login: $organization){
      projectV2(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

詳細については、「[GraphQL での呼び出しの作成](/graphql/guides/forming-calls-with-graphql#working-with-variables)」を参照してください。

{% endcli %}

## プロジェクトに関する情報を見つける

プロジェクトに関するデータを取得するには、クエリを使ってください。 詳細については、「[クエリについて](/graphql/guides/forming-calls-with-graphql#about-queries)」を参照してください。

### OrganizationプロジェクトのノードIDを調べる

APIを通じてプロジェクトを更新するには、プロジェクトのノードIDを知る必要があります。

Organization名とプロジェクト番号が分かっていれば、OrganizationプロジェクトのノードIDを知ることができます。 `ORGANIZATION` を自身の組織の名前に置き換えます。 たとえば、「 `octo-org` 」のように入力します。 `NUMBER` をプロジェクト番号に置き換えます。 プロジェクト番号を見つけるには、プロジェクトのURLを見てください。 たとえば、`https://github.com/orgs/octo-org/projects/5` のプロジェクト番号は 5 です。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectV2(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>"){
      projectV2(number: <em>NUMBER</em>) {
        id
      }
    }
  }'
```
{% endcli %}

Organization中のすべてのプロジェクトのノードIDを見つけることもできます。 以下の例は、Orgazation中の最初の20個のプロジェクトのノードIDとタイトルを返します。 `ORGANIZATION` を自身の組織の名前に置き換えます。 たとえば、「 `octo-org` 」のように入力します。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsV2(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>") {
      projectsV2(first: 20) {
        nodes {
          id
          title
        }
      }
    }
  }'
```
{% endcli %}

### ユーザプロジェクトのノードIDを調べる 

APIを通じてプロジェクトを更新するには、プロジェクトのノードIDを知る必要があります。

ユーザプロジェクトのノードIDは、プロジェクト番号を知っていれば見つけることができます。 `USER` は、実際のユーザー名に置き換えます。 たとえば、「 `octocat` 」のように入力します。 `NUMBER`をプロジェクト番号に置き換えます。 プロジェクト番号を見つけるには、プロジェクトのURLを見てください。 たとえば、`https://github.com/users/octocat/projects/5` のプロジェクト番号は 5 です。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"query{user(login: \"<em>USER</em>\") {projectV2(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>"){
      projectV2(number: <em>NUMBER</em>) {
        id
      }
    }
  }'
```
{% endcli %}

自分のすべてのプロジェクトのノードIDを知ることもできます。 以下の例では、自分の最初の20個のプロジェクトのノードIDとタイトルが返されます。 `USER` をご自分のユーザー名に置き換えます。 たとえば、`octocat` のようにします。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"{user(login: \"<em>USER</em>\") {projectsV2(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>") {
      projectsV2(first: 20) {
        nodes {
          id
          title
        }
      }
    }
  }'
```
{% endcli %}

### フィールドのノードIDを見つける

フィールドの値を更新するには、フィールドのノードIDを知る必要があります。 加えて、単一選択フィールドの選択肢のIDと、繰り返しフィールドの繰り返しのIDも知る必要があります。

以下の例では、プロジェクト内の最初の 20 個のフィールドの ID、名前、設定、構成が返されます。 `PROJECT_ID` はプロジェクトのノード ID に置き換えます。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"query{ node(id: \"<em>PROJECT_ID</em>\") { ... on ProjectV2 { fields(first: 20) { nodes { ... on ProjectV2Field { id name } ... on ProjectV2IterationField { id name configuration { iterations { startDate id }}} ... on ProjectV2SingleSelectField { id name options { id name }}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
  node(id: "<em>PROJECT_ID</em>") {
    ... on ProjectV2 {
      fields(first: 20) {
        nodes {
          ... on ProjectV2Field {
            id
            name
          }
          ... on ProjectV2IterationField {
            id
            name
            configuration {
              iterations {
                startDate
                id
              }
            }
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
}'
```
{% endcli %}

応答は、次の例のようになります。

```json
{
  "data": {
    "node": {
      "fields": {
        "nodes": [
          {
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZY",
            "name": "Title"
          },
          {
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZc",
            "name": "Assignees"
          },
          {
            "id": "PVTSSF_lADOANN5s84ACbL0zgBZrZg",
            "name": "Status",
            "options": [
              {
                "id": "f75ad846",
                "name": "Todo"
              },
              {
                "id": "47fc9ee4",
                "name": "In Progress"
              },
              {
                "id": "98236657",
                "name": "Done"
              }
            ]
          },
          {
            "id": "PVTIF_lADOANN5s84ACbL0zgBah28",
            "name": "Iteration",
            "configuration": {
              "iterations": [
                {
                  "startDate": "2022-05-29",
                  "id": "cfc16e4d"
                }
              ]
            }
          }
        ]
      }
    }
  }
}
```

各フィールドには ID と名前があります。 単一選択フィールドは `ProjectV2SingleSelectField` オブジェクトとして返され、単一選択の各オプションの ID を見つけることができる `options` フィールドがあります。 繰り返しフィールドは `ProjectV2IterationField` オブジェクトとして返され、ID と各繰り返しに関する情報が含まれている `iterations` フィールドを含む `configuration` フィールドがあります。 

フィールドの名前と ID のみが必要で、繰り返しや単一選択フィールドのオプションに関する情報が必要ない場合は、`ProjectV2FieldCommon` オブジェクトを利用できます。 

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"query{ node(id: \"<em>PROJECT_ID</em>\") { ... on ProjectV2 { fields(first: 20) { nodes { ... on ProjectV2FieldCommon { id name }}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
  node(id: "<em>PROJECT_ID</em>") {
    ... on ProjectV2 {
      fields(first: 20) {
        nodes {
          ... on ProjectV2FieldCommon {
            id
            name
          }
        }
      }
    }
  }
}'
```
{% endcli %}

`ProjectV2FieldCommon` オブジェクトを使用する場合の応答は、次の例のようになります。

```json
{
  "data": {
    "node": {
      "fields": {
        "nodes": [
          {
            "__typename": "ProjectV2Field",
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZY",
            "name": "Title"
          },
          {
            "__typename": "ProjectV2Field",
            "id": "PVTF_lADOANN5s84ACbL0zgBZrZc",
            "name": "Assignees"
          },
          {
            "__typename": "ProjectV2SingleSelectField",
            "id": "PVTSSF_lADOANN5s84ACbL0zgBZrZg",
            "name": "Status"
          },
          {
            "__typename": "ProjectV2IterationField",
            "id": "PVTIF_lADOANN5s84ACbL0zgBah28",
            "name": "Iteration"
          }
        ]
      }
    }
  }
}
```

### プロジェクト中のアイテムに関する情報を見つける 

APIでクエリを行い、プロジェクト中のアイテムに関する情報を見つけることができます。

次の例では、プロジェクトの最初の 20 件の issue、pull request、ドラフト issue が返されます。 issue と pull request の場合は、タイトルと最初の 10 人の担当者も返されます。 ドラフト issue の場合は、タイトルと本文が返されます。 この例では、プロジェクトの最初の 8 つのフィールドのテキスト、日付、または単一選択フィールドのフィールド名と値も返されます。 `PROJECT_ID` はプロジェクトのノード ID に置き換えます。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"query{ node(id: \"<em>PROJECT_ID</em>\") { ... on ProjectV2 { items(first: 20) { nodes{ id fieldValues(first: 8) { nodes{ ... on ProjectV2ItemFieldTextValue { text field { ... on ProjectV2FieldCommon {  name }}} ... on ProjectV2ItemFieldDateValue { date field { ... on ProjectV2FieldCommon { name } } } ... on ProjectV2ItemFieldSingleSelectValue { name field { ... on ProjectV2FieldCommon { name }}}}} content{ ... on DraftIssue { title body } ...on Issue { title assignees(first: 10) { nodes{ login }}} ...on PullRequest { title assignees(first: 10) { nodes{ login }}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
        ... on ProjectV2 {
          items(first: 20) {
            nodes{
              id
              fieldValues(first: 8) {
                nodes{                
                  ... on ProjectV2ItemFieldTextValue {
                    text
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                  ... on ProjectV2ItemFieldDateValue {
                    date
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    name
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                }              
              }
              content{              
                ... on DraftIssue {
                  title
                  body
                }
                ...on Issue {
                  title
                  assignees(first: 10) {
                    nodes{
                      login
                    }
                  }
                }
                ...on PullRequest {
                  title
                  assignees(first: 10) {
                    nodes{
                      login
                    }
                  }
                }
              }
            }
          }
        }
      }
    }'
```
{% endcli %}

プロジェクトは、ユーザが表示権限を持たないアイテムを含んでいることがあります。 この場合、アイテムの種類は `REDACTED` として返されます。

## プロジェクトの更新 

プロジェクトを更新するには、ミューテーションを使ってください。 詳細については、「[ミューテーションについて](/graphql/guides/forming-calls-with-graphql#about-mutations)」を参照してください。

{% note %}

**注:** 同じ呼び出しで項目を追加および更新することはできません。 `addProjectV2ItemById` を使用して項目を追加してから、`updateProjectV2ItemFieldValue` を使用して項目を更新する必要があります。

{% endnote %}

### プロジェクトへのアイテムの追加

以下の例は、プロジェクトにIssueあるいはPull Requestを追加します。 `PROJECT_ID` はプロジェクトのノード ID に置き換えます。 `CONTENT_ID` は、追加する Issue または Pull Request のノード ID に置き換えます。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"mutation {addProjectV2ItemById(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {item {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2ItemById(input: {projectId: "<em>PROJECT_ID</em>" contentId: "<em>CONTENT_ID</em>"}) {
      item {
        id
      }
    }
  }'
```
{% endcli %}

レスポンスには、新しく作成されたアイテムのノードIDが含まれます。

```json
{
  "data": {
    "addProjectV2ItemById": {
      "item": {
        "id": "PVTI_lADOANN5s84ACbL0zgBVd94"
      }
    }
  }
}
```

既に存在しているアイテムを追加しようとすると、代わりに既存のアイテムのIDが返されます。

### プロジェクトへのドラフト issue の追加

次の例では、プロジェクトにドラフト issue を追加します。 `PROJECT_ID` はプロジェクトのノード ID に置き換えます。 `TITLE` と `BODY` は、新しいドラフト issue に必要なコンテンツに置き換えます。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"mutation {addProjectV2DraftIssue(input: {projectId: "<em>PROJECT_ID</em>" title: "<em>TITLE</em>" body: "<em>BODY</em>"}) {projectItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2DraftIssue(input: {projectId: "<em>PROJECT_ID</em>" title: "<em>TITLE</em>" body: "<em>BODY</em>"}) {
      projectItem {
        id
      }
    }
  }'
```
{% endcli %}

応答には、新しく作成されたドラフト issue のノード ID が含まれます。

```json
{
  "data": {
    "addProjectV2ItemById": {
      "projectItem": {
        "id": "PVTI_lADOANN5s84ACbL0zgBbxFc"
      }
    }
  }
}
```

### プロジェクトの設定の更新 

以下の例は、プロジェクトの設定を更新します。 `PROJECT_ID` はプロジェクトのノード ID に置き換えます。 `public` を `true` に設定し、{% data variables.product.product_name %} でプロジェクトをパブリックにします。 `readme` を変更し、プロジェクトの README に変更を加えます。

{% curl %}
```shell
curl --request POST \
--url https://api.github.com/graphql \
--header 'Authorization: Bearer <em>TOKEN</em>' \
--data '{"query":"mutation { updateProjectV2(input: { projectId: \"<em>PROJECT_ID</em>\", title: \"Project title\", public: false, readme: \"# Project README\n\nA long description\", shortDescription: \"A short description\"}) { projectV2 { id, title, readme, shortDescription }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2(
      input: {
        projectId: "<em>PROJECT_ID</em>", 
        title: "Project title",
        public: false,
        readme: "# Project README\n\nA long description",
        shortDescription: "A short description"
      }
    ) {
      projectV2 {
        id
        title
        readme
        shortDescription
      }
    }
  }'
```
{% endcli %}

### カスタムのテキスト、数値、日付フィールドの更新 

以下の例では、アイテムのテキスト フィールドの値を更新します。 `PROJECT_ID` はプロジェクトのノード ID に置き換えます。 `ITEM_ID` は、更新する項目のノード ID に置き換えます。 `FIELD_ID` は、更新するフィールドの ID に置き換えます。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: "<em>PROJECT_ID</em>" itemId: "<em>ITEM_ID</em>" fieldId: "<em>FIELD_ID</em>" value: { text: "Updated text" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: { 
          text: "Updated text"        
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }'
```
{% endcli %}

{% note %}

**注:** `updateProjectV2ItemFieldValue` を使用して `Assignees`、`Labels`、`Milestone`、`Repository` を変更することはできません。これらのフィールドは、プロジェクト項目ではなく、Pull Request と Issue のプロパティであるためです。 代わりに、次のミューテーションを使用できます。

- [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)
- [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)
- [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)
- [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)
- [updateIssue](/graphql/reference/mutations#updateissue)
- [updatePullRequest](/graphql/reference/mutations#updatepullrequest)
- [transferIssue](/graphql/reference/mutations#transferissue)

{% endnote %}

### 単一選択フィールドの更新

以下の例は、アイテムの単一選択フィールドの値を更新します。

- `PROJECT_ID` - これをプロジェクトのノード ID に置き換えます。
- `ITEM_ID` - これを、更新する項目のノード ID に置き換えます。
- `FIELD_ID` - これを、更新する単一選択フィールドの ID に置き換えます。
- `OPTION_ID` - これを、目的の単一選択オプションの ID に置き換えます。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: "<em>PROJECT_ID</em>" itemId: "<em>ITEM_ID</em>" fieldId: "<em>FIELD_ID</em>" value: { singleSelectOptionId: "<em>OPTION_ID</em>" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: { 
          singleSelectOptionId: "<em>OPTION_ID</em>"        
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }'
```
{% endcli %}

### 繰り返しフィールドの更新

以下の例は、アイテムの繰り返しフィールドの値を更新します。

- `PROJECT_ID` - これをプロジェクトのノード ID に置き換えます。
- `ITEM_ID` - これを、更新する項目のノード ID に置き換えます。
- `FIELD_ID` - これを、更新する繰り返しフィールドの ID に置き換えます。
- `ITERATION_ID` - これを、目的の繰り返しの ID に置き換えます。 これは、アクティブなまたは完了した繰り返しにすることができます。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectV2ItemFieldValue( input: { projectId: "<em>PROJECT_ID</em>" itemId: "<em>ITEM_ID</em>" fieldId: "<em>FIELD_ID</em>" value: { singleSelectOptionId: "<em>OPTION_ID</em>" }}) { projectV2Item { id }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectV2ItemFieldValue(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: { 
          iterationId: "<em>ITERATION_ID</em>"        
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }'
```
{% endcli %}

### プロジェクトからのアイテムの削除

以下の例は、プロジェクトからアイテムを削除します。 `PROJECT_ID` はプロジェクトのノード ID に置き換えます。 `ITEM_ID` は、削除する項目のノード ID に置き換えます。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: Bearer <em>TOKEN</em>' \
  --data '{"query":"mutation {deleteProjectV2Item(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    deleteProjectV2Item(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
      }
    ) {
      deletedItemId
    }
  }'
```
{% endcli %}

## Webhook の使用

Webhook を使用して、プロジェクトで発生するイベントをサブスクライブできます。 たとえば、アイテムが編集されると、{% data variables.product.product_name %} では、サーバーでの自動化をトリガーできる Webhook の構成済み URL に HTTP POST ペイロードを送信できます。 Webhook について詳しくは、「[Webhook について](/developers/webhooks-and-events/webhooks/about-webhooks)」を参照してください。 `projects_v2_item` Webhook イベントについて詳しくは、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#projects_v2_item)」をご覧ください。

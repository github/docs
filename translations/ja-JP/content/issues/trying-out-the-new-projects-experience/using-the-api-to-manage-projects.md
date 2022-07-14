---
title: APIを使ったプロジェクト（ベータ）の管理
intro: GraphQL APIを使って、プロジェクトに関する情報を見つけたり、プロジェクトを更新したりできます。
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Projects
---

{% data reusables.projects.graphql-deprecation %}

この記事では、GraphQL API を使用してプロジェクトを管理する方法を説明します。 {% data variables.product.prodname_actions %}ワークフローでのAPIの使用方法に関する詳しい情報については「[プロジェクト（ベータ）の自動化](/issues/trying-out-the-new-projects-experience/automating-projects)」を参照してください。 利用可能なデータタイプの完全なリストについては「[リファレンス](/graphql/reference)」を参照してください。

{% data reusables.projects.projects-beta %}

## 認証

{% curl %}

以下のすべてのcURLの例で、`TOKEN`を`read:projectプロジェクト`スコープ（クエリの場合）もしくは`project`スコープ（クエリ及びミューテーションの場合）を持つトークンで置き換えてください。 このトークンは、ユーザの場合は個人アクセストークンに、{% data variables.product.prodname_github_app %}の場合はインストールアクセストークンにできます。 個人アクセストークンの作成に関する詳しい情報については「[個人アクセストークンの作成](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。 {% data variables.product.prodname_github_app %}のためのインストールアクセストークンの作成に関する詳しい情報については「[{% data variables.product.prodname_github_apps %}での認証](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)」を参照してください。

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %}コマンドを実行する前に、`gh auth login --scopes "project"`を実行して認証を受けなければなりません。 読み取りだけが必要で、編集は必要ない場合、`project`の代わりに`read:project`スコープを提供することができます。 コマンドラインの認証に関する詳しい情報については「[ gh authログイン](https://cli.github.com/manual/gh_auth_login)」を参照してください。

{% endcli %}

{% cli %}

## 変数の利用

以下のすべての例で、変数を使ってスクリプトをシンプルにできます。 数値、論理値あるいはヌルである変数を渡すには、`-F`を使ってください。 その他の変数には`-f`を使ってください。 例,

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

詳しい情報については「[GraphQLでの呼び出しの形成](/graphql/guides/forming-calls-with-graphql#working-with-variables)」を参照してください。

{% endcli %}

## プロジェクトに関する情報を見つける

プロジェクトに関するデータを取得するには、クエリを使ってください。 詳しい情報については「[クエリについて](/graphql/guides/forming-calls-with-graphql#about-queries)」を参照してください。

### OrganizationプロジェクトのノードIDを調べる

APIを通じてプロジェクトを更新するには、プロジェクトのノードIDを知る必要があります。

Organization名とプロジェクト番号が分かっていれば、OrganizationプロジェクトのノードIDを知ることができます。 `ORGANIZATION`をOrganization名で置き換えてください。 たとえば`octo-org`というようにします。 `NUMBER`をプロジェクト番号で置き換えてください。 プロジェクト番号を知るには、プロジェクトのURLを見てください。 たとえば`https://github.com/orgs/octo-org/projects/5`ではプロジェクト番号は5です。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

Organization中のすべてのプロジェクトのノードIDを見つけることもできます。 以下の例は、Orgazation中の最初の20個のプロジェクトのノードIDとタイトルを返します。 `ORGANIZATION`をOrganization名で置き換えてください。 たとえば`octo-org`というようにします。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

ユーザプロジェクトのノードIDは、プロジェクト番号を知っていれば見つけることができます。 `USER`を自分のユーザ名で置き換えてください。 `octocat`などです。 `NUMBER`はプロジェクト番号で置き換えてください。 プロジェクト番号を知るには、プロジェクトのURLを見てください。 たとえば`https://github.com/users/octocat/projects/5`のプロジェクト番号は5です。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

自分のすべてのプロジェクトのノードIDを知ることもできます。 以下の例では、自分の最初の20個のプロジェクトのノードIDとタイトルが返されます。 `USER`は自分のユーザ名で置き換えてください。 `octocat`などです。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

以下の例は、プロジェクト内の最初の20個のフィールドのID、名前、設定、構成を返します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

レスポンスは以下の例のようになります。

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

各フィールドはIDと名前を持ちます。 単一選択フィールドは`ProjectV2SingleSelectField`オブジェクトとして返され、単一選択の各選択肢のIDを見つけることができる`options`フィールドがあります。 繰り返しのフィールドは`ProjectV2IterationField`オブジェクトとして返され、それぞれの繰り返しに関するIDと情報を持つ`iterations`フィールドを含む`configuration`を持っています。

フィールドのIDと名前だけが必要であり、繰り返しや単一選択フィールドの選択肢に関する情報は必要ない場合は、`ProjectV2FieldCommon`が利用できます。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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
}
```
{% endcli %}

`ProjectV2FieldCommon`オブジェクトを使った場合のレスポンスは、以下の例のようになります。

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

以下の例は、プロジェクト内の先頭の20個のIssue、Pull Request、ドラフトのIssueを返します。 IssueとPull Requestについては、タイトルと先頭の10人のアサインされた人も返します。 ドラフトのIssueについては、タイトルとbodyを返します。 この例は、プロジェクトの先頭の8つのフィールドについて、フィールド名と任意のテキスト、日付、単一選択フィールドの値も返します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

プロジェクトは、ユーザが表示権限を持たないアイテムを含んでいることがあります。 この場合、アイテムタイプは`REDACTED`として返されます。

## プロジェクトの更新

プロジェクトを更新するには、ミューテーションを使ってください。 詳しい情報については「[ミューテーションについて](/graphql/guides/forming-calls-with-graphql#about-mutations)」を参照してください。

{% note %}

**ノート:** 同じ呼び出し中で、アイテムを追加して更新することはできません。 アイテムを追加するために`addProjectV2ItemById`を使い、続いてアイテムを更新するために`updateProjectV2ItemFieldValue`を使わなければなりません。

{% endnote %}

### プロジェクトへのアイテムの追加

以下の例は、プロジェクトにIssueあるいはPull Requestを追加します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 `CONTENT_ID`を、追加したいIssueあるいはPull RequestのノードIDで置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

### プロジェクトへのドラフトIssueの追加

以下の例は、プロジェクトにドラフトのIssueを追加します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 `TITLE`と`BODY`を、新しいドラフトのIssueに設定したい内容で置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {addProjectV2DraftIssue(input: {projectId: "<em>PROJECT_ID</em>" title: "<em>TITLE</em>" body: "<em>BODY</em>"}) {item {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectV2DraftIssue(input: {projectId: "<em>PROJECT_ID</em>" title: "<em>TITLE</em>" body: "<em>BODY</em>"}) {
      item {
        id
      }
    }
  }'
```
{% endcli %}

レスポンスには、新たに作成されたドラフトのIssueのノードIDが含まれます。

```json
{
  "data": {
    "addProjectV2ItemById": {
      "item": {
        "id": "PVTI_lADOANN5s84ACbL0zgBbxFc"
      }
    }
  }
}
```

### プロジェクトの設定の更新

以下の例は、プロジェクトの設定を更新します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 プロジェクトを{% data variables.product.product_name %}上でパブリックにするために、`public`を`true`に設定してください。 プロジェクトのREADMEに変更を加えるため、`readme`を変更してください。

{% curl %}
```shell
curl --request POST \
--url https://api.github.com/graphql \
--header 'Authorization: token <em>TOKEN</em>' \
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

以下の例は、アイテムのテキストフィールドの値を更新します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 `ITEM_ID`を、更新したいアイテムのノードIDで置き換えてください。 `FIELD_ID`を、更新したいフィールドのIDで置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

**ノート:** ` updateProjectV2ItemFieldValue `を使って`Assignees`、`Labels`、`Milestone`、`Repository`を変更することはできません。これは、これらのフィールドがプロジェクトのアイテムのプロパティではなく、Pull RequestやIssueのプロパティだからです。 Instead, you may use the following mutations:

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

- `PROJECT_ID` - プロジェクトのノードIDで置き換えてください。
- `ITEM_ID` - 更新したいアイテムのノードIDで置き換えてください。
- `FIELD_ID` -  更新したい単一選択フィールドのIDで置き換えてください。
- `OPTION_ID` - 希望する単一選択の選択肢のIDで置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

- `PROJECT_ID` - プロジェクトのノードIDで置き換えてください。
- `ITEM_ID` - 更新したいアイテムのノードIDで置き換えてください。
- `FIELD_ID` -  更新したい繰り返しフィールドのIDで置き換えてください。
- `ITERATION_ID` - 希望する繰り返しのIDで置き換えてください。 これは、アクティブな繰り返しでも完了した繰り返しでもかまいません。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

### プロジェクトからのアイテムの削除

以下の例は、プロジェクトからアイテムを削除します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 `ITEM_ID`を、削除したいアイテムのノードIDで置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
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

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

この記事では、GraphQL API を使用してプロジェクトを管理する方法を説明します。 {% data variables.product.prodname_actions %}ワークフローでのAPIの使用方法に関する詳しい情報については「[プロジェクト（ベータ）の自動化](/issues/trying-out-the-new-projects-experience/automating-projects)」を参照してください。 利用可能なデータタイプの完全なリストについては「[リファレンス](/graphql/reference)」を参照してください。

{% data reusables.projects.projects-beta %}

## 認証

{% curl %}

以下のすべてのcURLの例で、`TOKEN`を`read:org`スコープ（クエリの場合）もしくは`write:org`スコープ（クエリ及びミューテーションの場合）を持つトークンで置き換えてください。 このトークンは、ユーザの場合は個人アクセストークンに、{% data variables.product.prodname_github_app %}の場合はインストールアクセストークンにできます。 個人アクセストークンの作成に関する詳しい情報については「[個人アクセストークンの作成](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。 {% data variables.product.prodname_github_app %}のためのインストールアクセストークンの作成に関する詳しい情報については「[{% data variables.product.prodname_github_apps %}での認証](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)」を参照してください。

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %}コマンドを実行する前に、`gh auth login --scopes "write:org"`を実行して認証を受けなければなりません。 プロジェクトの読み取りだけを行い、編集を行う必要がないのであれば、`--scopes`引数は省略できます。 コマンドラインの認証に関する詳しい情報については「[ gh authログイン](https://cli.github.com/manual/gh_auth_login)」を参照してください。

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
      projectNext(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

詳しい情報については「[GraphQLでの読み出しの形成]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#working-with-variables)」を参照してください。

{% endcli %}

## プロジェクトに関する情報を見つける

プロジェクトに関するデータを取得するには、クエリを使ってください。 詳しい情報については「[クエリについて]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-queries)」を参照してください。

### OrganizationプロジェクトのノードIDを調べる

APIを通じてプロジェクトを更新するには、プロジェクトのノードIDを知る必要があります。

Organization名とプロジェクト番号が分かっていれば、OrganizationプロジェクトのノードIDを知ることができます。 `ORGANIZATION`をOrganization名で置き換えてください。 たとえば`octo-org`というようにします。 `NUMBER`をプロジェクト番号で置き換えてください。 プロジェクト番号を知るには、プロジェクトのURLを見てください。 たとえば`https://github.com/orgs/octo-org/projects/5`ではプロジェクト番号は5です。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>"){
      projectNext(number: <em>NUMBER</em>) {
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
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>") {
      projectsNext(first: 20) {
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
  --data '{"query":"query{user(login: \"<em>USER</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>"){
      projectNext(number: <em>NUMBER</em>) {
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
  --data '{"query":"{user(login: \"<em>USER</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>") {
      projectsNext(first: 20) {
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

以下の例は、プロジェクト内の最初の20個のフィールドのID、名前、設定を返します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {fields(first: 20) {nodes {id name settings}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
      ... on ProjectNext {
        fields(first: 20) {
          nodes {
            id
            name
            settings
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
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE1OQ==",
            "name": "Title",
            "settings": "null"
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE2MA==",
            "name": "Assignees",
            "settings": "null"
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE2MQ==",
            "name": "Status",
            "settings": "{\"options\":[{\"id\":\"f75ad846\",\"name\":\"Todo\",\"name_html\":\"Todo\"},{\"id\":\"47fc9ee4\",\"name\":\"In Progress\",\"name_html\":\"In Progress\"},{\"id\":\"98236657\",\"name\":\"Done\",\"name_html\":\"Done\"}]}"
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQ3NTEwNw==",
            "name": "Iteration",
            "settings": "{\"configuration\":{\"duration\":7,\"start_day\":5,\"iterations\":[{\"id\":\"c4d8e84d\",\"title\":\"Iteration 2\",\"duration\":7,\"start_date\":\"2021-10-08\",\"title_html\":\"Iteration 2\"},{\"id\":\"fafa9c9f\",\"title\":\"Iteration 3\",\"duration\":7,\"start_date\":\"2021-10-15\",\"title_html\":\"Iteration 3\"}],\"completed_iterations\":[{\"id\":\"fa62c118\",\"title\":\"Iteration 1\",\"duration\":7,\"start_date\":\"2021-10-01\",\"title_html\":\"Iteration 1\"}]}}"
          }
        ]
      }
    }
  }
}
```

各フィールドはIDを持ちます。 加えて、単一選択フィールドと繰り返しフィールドは、`settings`値を持ちます。 単一選択の設定では、単一選択の各選択肢のIDを知ることができます。 繰り返しの設定では、繰り返しの期間、繰り返しの開始日（月曜の1から日曜の7まで）、未完了の繰り返しのリスト、完了した繰り返しのリストを知ることができます。 繰り返しのリスト中の各繰り返しについて、繰り返しのID、タイトル、期間、開始日を知ることができます。

### プロジェクト中のアイテムに関する情報を見つける

APIでクエリを行い、プロジェクト中のアイテムに関する情報を見つけることができます。

{% note %}

**ノート**: このAPIはドラフトIssueに関する情報は返しません。

{% endnote %}

以下の例は、プロジェクト中の最初の20個のアイテムのタイトルとIDを返します。 それぞれのアイテムについては、プロジェクト中の最初の8個のフィールドの値と名前も返します。 アイテムがIssueあるいはPull Requestの場合、アサインされた最初の10人のログインも返します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {items(first: 20) {nodes{title id fieldValues(first: 8) {nodes{value projectField{name}}} content{...on Issue {assignees(first: 10) {nodes{login}}} ...on PullRequest {assignees(first: 10) {nodes{login}}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
      ... on ProjectNext {
        items(first: 20) {
          nodes{
            title
            id
            fieldValues(first: 8) {
              nodes{
                value
                projectField{
                  name
                }
              }
            }
            content{
              ...on Issue {
                assignees(first: 10) {
                  nodes{
                    login
                  }
                }
              }
              ...on PullRequest {
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

プロジェクトは、ユーザが表示権限を持たないアイテムを含んでいることがあります。 この場合、レスポンスには編集済みのアイテムが含まれます。

```shell
{
  "node": {
  "title": "You can't see this item",
  ...
  }
}
```

## プロジェクトの更新

プロジェクトを更新するには、ミューテーションを使ってください。 詳しい情報については「[ミューテーションについて]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-mutations)」を参照してください。

{% note %}

**ノート:** 同じ呼び出し中で、アイテムを追加して更新することはできません。 `addProjectNextItem`を使ってアイテムを追加し、それから`updateProjectNextItemField`を使ってそのアイテムを更新しなければなりません。

{% endnote %}

### プロジェクトへのアイテムの追加

以下の例は、プロジェクトにIssueあるいはPull Requestを追加します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 `CONTENT_ID`を、追加したいIssueあるいはPull RequestのノードIDで置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {addProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    addProjectNextItem(input: {projectId: "<em>PROJECT_ID</em>" contentId: "<em>CONTENT_ID</em>"}) {
      projectNextItem {
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
    "addProjectNextItem": {
      "projectNextItem": {
        "id": "MDE1OlByb2plY3ROZXh0SXRlbTM0MjEz"
      }
    }
  }
}
```

既に存在しているアイテムを追加しようとすると、代わりに既存のアイテムのIDが返されます。

### プロジェクトの設定の更新

以下の例は、プロジェクトの設定を更新します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 プロジェクトを{% data variables.product.product_name %}上でパブリックにするために、`public`を`true`に設定してください。 `description`を修正して、プロジェクトのREADMEを変更してください。

{% curl %}
```shell
curl --request POST \
--url https://api.github.com/graphql \
--header 'Authorization: token <em>TOKEN</em>' \
--data '{"query":"mutation { updateProjectNext(input: { projectId: \"<em>PROJECT_ID</em>\", title: \"Project title\", public: false, description: \"# Project README\n\nA long description\", shortDescription: \"A short description\"}) { projectNext { id, title, description, shortDescription }}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectNext(
      input: {
        projectId: "<em>PROJECT_ID</em>", 
        title: "Project title",
        public: false,
        description: "# Project README\n\nA long description",
        shortDescription: "A short description"
      }
    ) {
      projectNext {
        id
        title
        description
        shortDescription
      }
    }
```
{% endcli %}

### カスタムのテキスト、数値、日付フィールドの更新

以下の例は、アイテムの日付フィールドの値を更新します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 `ITEM_ID`を、更新したいアイテムのノードIDで置き換えてください。 `FIELD_ID`を、更新したいフィールドのIDで置き換えてください。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"2021-5-11\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "2021-5-11"
      }
    ) {
      projectNextItem {
        id
      }
    }
  }'
```
{% endcli %}

{% note %}

**ノート:** `updateProjectNextItemField`を使って`Assignees`、`Labels`、`Milestone`、`Repository`を変更することはできません。これは、これらのフィールドがプロジェクトのアイテムのプロパティではなく、Pull RequestやIssueのプロパティだからです。 代わりに、[addAssigneesToAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addassigneestoassignable)、[removeAssigneesFromAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removeassigneesfromassignable)、[addLabelsToLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addlabelstolabelable)、[removeLabelsFromLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removelabelsfromlabelable)、[updateIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updateissue)、[updatePullRequest]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updatepullrequest)、[transferIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#transferissue)といったミューテーションを使ってください。

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
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>OPTION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "<em>OPTION_ID</em>"
      }
    ) {
      projectNextItem {
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
- `ITERATION_ID` - 希望する繰り返しのIDで置き換えてください。 これはアクティブな繰り返し（`iterations`配列から）もしくは完了した繰り返し（`completed_iterations`配列から）にできます。

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>ITERATION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "<em>ITERATION_ID</em>"
      }
    ) {
      projectNextItem {
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
  --data '{"query":"mutation {deleteProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    deleteProjectNextItem(
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

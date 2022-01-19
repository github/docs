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

この記事では、GraphQL API を使用してプロジェクトを管理する方法を説明します。 For more information about how to use the API in a {% data variables.product.prodname_actions %} workflow, see "[Automating projects (beta)](/issues/trying-out-the-new-projects-experience/automating-projects)." For a full list of the available data types, see "[Reference](/graphql/reference)."

{% data reusables.projects.projects-beta %}

## 認証

{% curl %}

以下のすべてのcURLの例で、`TOKEN`を`read:org`スコープ（クエリの場合）もしくは`write:org`スコープ（クエリ及びミューテーションの場合）を持つトークンで置き換えてください。 The token can be a personal access token for a user or an installation access token for a {% data variables.product.prodname_github_app %}. For more information about creating a personal access token, see "[Creating a personal access token](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)." For more information about creating an installation access token for a {% data variables.product.prodname_github_app %}, see "[Authenticating with {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)."

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Before running {% data variables.product.prodname_cli %} commands, you must authenticate by running `gh auth login --scopes "write:org"`. If you only need to read, but not edit, projects, you can omit the `--scopes` argument. コマンドラインの認証に関する詳しい情報については「[ gh authログイン](https://cli.github.com/manual/gh_auth_login)」を参照してください。

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

For more information, see "[Forming calls with GraphQL]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#working-with-variables)."

{% endcli %}

## プロジェクトに関する情報を見つける

プロジェクトに関するデータを取得するには、クエリを使ってください。 For more information, see "[About queries]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-queries)."

### Finding the node ID of an organization project

APIを通じてプロジェクトを更新するには、プロジェクトのノードIDを知る必要があります。

You can find the node ID of an organization project if you know the organization name and project number. `ORGANIZATION`をOrganization名で置き換えてください。 たとえば`octo-org`というようにします。 Replace `NUMBER` with the project number. プロジェクト番号を知るには、プロジェクトのURLを見てください。 たとえば`https://github.com/orgs/octo-org/projects/5`ではプロジェクト番号は5です。

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

### Finding the node ID of a user project

APIを通じてプロジェクトを更新するには、プロジェクトのノードIDを知る必要があります。

You can find the node ID of a user project if you know the project number. Replace `USER` with your user name. `octocat`などです。 `NUMBER`はプロジェクト番号で置き換えてください。 プロジェクト番号を知るには、プロジェクトのURLを見てください。 For example, `https://github.com/users/octocat/projects/5` has a project number of 5.

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

You can also find the node ID for all of your projects. The following example will return the node ID and title of your first 20 projects. Replace `USER` with your username. `octocat`などです。

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

フィールドの値を更新するには、フィールドのノードIDを知る必要があります。 Additionally, you will need to know the ID of the options for single select fields and the ID of the iterations for iteration fields.

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

各フィールドはIDを持ちます。 Additionally, single select fields and iteration fields have a `settings` value. In the single select settings, you can find the ID of each option for the single select. In the iteration settings, you can find the duration of the iteration, the start day of the iteration (from 1 for Monday to 7 for Sunday), the list of incomplete iterations, and the list of completed iterations. For each iteration in the lists of iterations, you can find the ID, title, duration, and start date of the iteration.

### プロジェクト中のアイテムに関する情報を見つける

APIでクエリを行い、プロジェクト中のアイテムに関する情報を見つけることができます。

{% note %}

**Note**: The API will not return information about draft issues.

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

プロジェクトは、ユーザが表示権限を持たないアイテムを含んでいることがあります。 In this case, the response will include a redacted item.

```shell
{
  "node": {
  "title": "You can't see this item",
  ...
  }
}
```

## プロジェクトの更新

プロジェクトを更新するには、ミューテーションを使ってください。 For more information, see "[About mutations]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-mutations)."

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

If you try to add an item that already exists, the existing item ID is returned instead.

### Updating a custom text, number, or date field

The following example will update the value of a date field for an item. `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 `ITEM_ID`を、更新したいアイテムのノードIDで置き換えてください。 `FIELD_ID`を、更新したいフィールドのIDで置き換えてください。

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

**ノート:** `updateProjectNextItemField`を使って`Assignees`、`Labels`、`Milestone`、`Repository`を変更することはできません。これは、これらのフィールドがプロジェクトのアイテムのプロパティではなく、Pull RequestやIssueのプロパティだからです。 Instead, you must use the [addAssigneesToAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addassigneestoassignable), [removeAssigneesFromAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removeassigneesfromassignable), [addLabelsToLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addlabelstolabelable), [removeLabelsFromLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removelabelsfromlabelable), [updateIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updateissue), [updatePullRequest]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updatepullrequest), or [transferIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#transferissue) mutations.

{% endnote %}

### Updating a single select field

The following example will update the value of a single select field for an item.

- `PROJECT_ID` - プロジェクトのノードIDで置き換えてください。
- `ITEM_ID` - 更新したいアイテムのノードIDで置き換えてください。
- `FIELD_ID` -  Replace this with the ID of the single select field that you want to update.
- `OPTION_ID` - Replace this with the ID of the desired single select option.

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

### Updating an iteration field

The following example will update the value of an iteration field for an item.

- `PROJECT_ID` - プロジェクトのノードIDで置き換えてください。
- `ITEM_ID` - 更新したいアイテムのノードIDで置き換えてください。
- `FIELD_ID` -  Replace this with the ID of the iteration field that you want to update.
- `ITERATION_ID` - Replace this with the ID of the desired iteration. This can be either an active iteration (from the `iterations` array) or a completed iteration (from the `completed_iterations` array).

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

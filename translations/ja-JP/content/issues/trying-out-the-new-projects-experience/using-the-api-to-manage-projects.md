---
title: APIを使ったプロジェクト（ベータ）の管理
intro: GraphQL APIを使って、プロジェクトに関する情報を見つけたり、プロジェクトを更新したりできます。
versions:
  fpt: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Projects
---

この記事では、GraphQL API を使用してプロジェクトを管理する方法を説明します。

{% data reusables.projects.projects-beta %}

{% data reusables.projects.api-beta %}

## 認証

{% include tool-switcher %}

{% curl %}

以下のすべてのcURLの例で、`TOKEN`を`read:org`スコープ（クエリの場合）もしくは`write:org`スコープ（クエリ及びミューテーションの場合）を持つトークンで置き換えてください。 トークンの作成に関する詳しい情報については「[個人アクセストークンの作成](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %}コマンドを実行する前に、`gh auth login`を実行して`read:org`スコープ（クエリの場合）あるいは`write:org`スコープ（クエリ及びミューティションの場合）を持つ認証トークンを渡さなければなりません。 ベータの間は、Webブラウザを使って認証を受けることはできません。 コマンドラインの認証に関する詳しい情報については「[ gh authログイン](https://cli.github.com/manual/gh_auth_login)」を参照してください。 トークンの作成に関する詳しい情報については「[個人アクセストークンの作成](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。

{% endcli %}

{% cli %}

## 変数の利用

以下のすべての例で、変数を使ってスクリプトをシンプルにできます。 数値、論理値あるいはヌルである変数を渡すには、`-F`を使ってください。 その他の変数には`-f`を使ってください。 例,

```shell
my_org="octo-org"
my_num=5
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query($organization: String! $number: Int!){
    organization(login: $organization){
      projectNext(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

詳しい情報については「[GraphQLでの呼び出しの形成](/graphql/guides/forming-calls-with-graphql#working-with-variables)」を参照してください。

{% endcli %}

## プロジェクトに関する情報を見つける

プロジェクトに関するデータを取得するには、クエリを使ってください。 詳しい情報については「[クエリについて](/graphql/guides/forming-calls-with-graphql#about-queries)」を参照してください。

### プロジェクトのノードIDを見つける

APIを通じてプロジェクトを更新するには、プロジェクトのノードIDを知る必要があります。

プロジェクトのノードIDは、Organization名とプロジェクト番号を知っていれば見つけることができます。 `ORGANIZATION`をOrganization名で置き換えてください。 たとえば`octo-org`というようにします。 `NUMBER`はプロジェクト番号で置き換えてください。 プロジェクト番号を見つけるには、プロジェクトのURLを見てください。 たとえば`https://github.com/orgs/octo-org/projects/5`ではプロジェクト番号は5です。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

### フィールドのノードIDを見つける

フィールドの値を更新するには、フィールドのノードIDを知る必要があります。 加えて、単一選択フィールドの例の場合、選択肢のIDを知る必要があります。

以下の例は、プロジェクト内の最初の20個のフィールドのID、名前、設定を返します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {fields(first: 20) {nodes {id name settings}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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
          }
        ]
      }
    }
  }
}
```

各フィールドはIDを持ちます。 加えて、単一選択フィールドの各選択肢はそれぞれIDを持ちます。

### プロジェクト中のアイテムに関する情報を見つける

APIでクエリを行い、プロジェクト中のアイテムに関する情報を見つけることができます。

以下の例は、プロジェクト中の最初の20個のアイテムのタイトルとIDを返します。 それぞれのアイテムについては、プロジェクト中の最初の8個のフィールドの値と名前も返します。 アイテムがIssueあるいはPull Requestの場合、アサインされた最初の10人のログインも返します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {items(first: 20) {nodes{title id fieldValues(first: 8) {nodes{value projectField{name}}} content{...on Issue {assignees(first: 10) {nodes{login}}} ...on PullRequest {assignees(first: 10) {nodes{login}}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

プロジェクトは、ユーザが表示権限を持たないアイテムを含んでいることがあります。 この場合、レスポンスには削減済みのアイテムが含まれます。

```shell
{
  "node": {
  "title": "You can't see this item",
  ...
  }
}
```

## プロジェクトの更新

プロジェクトを更新するには、ミューテーションを使ってください。 詳しい情報については「[ミューテーションについて](/graphql/guides/forming-calls-with-graphql#about-mutations)」を参照してください。

{% note %}

**ノート:** 同じ呼び出し中で、アイテムを追加して更新することはできません。 `addProjectNextItem`を使ってアイテムを追加し、それから`updateProjectNextItemField`を使ってそのアイテムを更新しなければなりません。

{% endnote %}

### プロジェクトへのアイテムの追加

以下の例は、プロジェクトにIssueあるいはPull Requestを追加します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 `CONTENT_ID`を、追加したいIssueあるいはPull RequestのノードIDで置き換えてください。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {addProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

すでに存在しているアイテムを追加しようとすると、代わりに既存のアイテムのIDが返されます。

### カスタムの、単一選択ではないフィールドの更新

以下の例は、日付フィールドを更新します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 `ITEM_ID`を、更新したいアイテムのノードIDで置き換えてください。 `FIELD_ID`を、更新したいフィールドのIDで置き換えてください。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"2021-5-11\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

**ノート:** `updateProjectNextItemField`を使って`Assignees`、`Labels`、`Milestone`、`Repository`を変更することはできません。これは、これらのフィールドがプロジェクトのアイテムのプロパティではなく、Pull RequestやIssueのプロパティだからです。 その代わりに、[addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable)、[removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable)、[addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable)、[removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable)、[updateIssue](/graphql/reference/mutations#updateissue)、[updatePullRequest](/graphql/reference/mutations#updatepullrequest)、[transferIssue](/graphql/reference/mutations#transferissue) といったミューテーションを使わなければなりません。

{% endnote %}

### 単一選択フィールドの更新

以下の例は、単一選択フィールドを更新します。
- `PROJECT_ID` - プロジェクトのノードIDで置き換えてください。
- `ITEM_ID` - 更新したいアイテムのノードIDで置き換えてください。
- `FIELD_ID` -  更新したいフィールドのIDで置き換えてください。
- `OPTION_ID` - 設定したい値のIDで置き換えてください。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>OPTION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

### プロジェクトからのアイテムの削除

以下の例は、プロジェクトからアイテムを削除します。 `PROJECT_ID`をプロジェクトのノードIDで置き換えてください。 `ITEM_ID`を、削除したいアイテムのノードIDで置き換えてください。

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {deleteProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
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

## リファレンス

### オブジェクト

#### ProjectNext

- [Closable](/graphql/reference/interfaces#closable)
- [Node](/graphql/reference/interfaces#node)
- [Updatable](/graphql/reference/interfaces#updatable)

**フィールド**

| 名前                               | 説明                                                                                                                                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `closed` (`Boolean!`)            | プロジェクトがクローズされていれば`true`。                                                                                                                                                                                                                               |
| `closedAt` (`DateTime!`)         | オブジェクトがクローズされた日時を示す。                                                                                                                                                                                                                                   |
| `createdAt` (`DateTime!`)        | オブジェクトが作成された日時を示す。                                                                                                                                                                                                                                     |
| `creator` (`Actor`)              | プロジェクトを最初に作成したアクター。                                                                                                                                                                                                                                    |
| `databaseId` (`Int`)             | データベースの主キーを示す。                                                                                                                                                                                                                                         |
| `description` (`String`)         | プロジェクトの説明。                                                                                                                                                                                                                                             |
| `fields` (`[ProjectNextField]!`) | プロジェクト中のフィールドのリスト。<br><br>**引数**<br>`after` (`String`): 指定されたカーソルの後に来るリスト中の要素を返す。<br>`before` (`String`): 指定されたカーソルの前に来るリスト中の要素を返す。<br>`first` (`Int`): リスト中の最初の*n*個の要素を返す。<br>`last` (`Int`): リスト中の最後の*n*個の要素を返す。 |
| `items` (`[ProjectNextItem]`)    | プロジェクト中のアイテムのリスト。<br><br>**引数**<br>`after` (`String`): 指定されたカーソルの後に来るリスト中の要素を返す。<br>`before` (`String`): 指定されたカーソルの前に来るリスト中の要素を返す。<br>`first` (`Int`): リスト中の最初の*n*個の要素を返す。<br>`last` (`Int`): リスト中の最後の*n*個の要素を返す。  |
| `number` (`Int!`)                | プロジェクトの番号。                                                                                                                                                                                                                                             |
| `owner` (`ProjectNextOwner!`)    | プロジェクトのオーナー。 現在はOrganizationの場合のみ。                                                                                                                                                                                                                     |
| `title` (`String!`)              | プロジェクトの名前。                                                                                                                                                                                                                                             |
| `updatedAt` (`DateTime!`)        | オブジェクトが最後に更新された日時を示す。                                                                                                                                                                                                                                  |
| `viewerCanUpdate` (`Boolean!`)   | 現在の閲覧者がこのオブジェクトを更新できるかを示す。                                                                                                                                                                                                                             |

#### ProjectNextConnection

ProjectNextのコネクションタイプ。

| 名前                          | 説明                  |
| --------------------------- | ------------------- |
| `edges` ([ProjectNextEdge]) | エッジのリスト。            |
| `nodes` ([ProjectNext])     | ノードのリスト。            |
| `pageInfo` (PageInfo!)      | ページネーションを支援するための情報。 |
| `totalCount` (Int!)         | コネクション中のアイテムの総数を示す。 |

#### ProjectNextEdge

| 名前                   | 説明                 |
| -------------------- | ------------------ |
| `cursor` (String!)   | ページネーションで使用するカーソル。 |
| `node` (ProjectCard) | エッジの最後にあるアイテム。     |

#### ProjectNextField

プロジェクト内のフィールド。

| 名前                         | 説明                    |
| -------------------------- | --------------------- |
| `createdAt` (`DateTime!`)  | オブジェクトが作成された日時を示す。    |
| `name` (`String!`)         | プロジェクトフィールドの名前。       |
| `project` (`ProjectNext!`) | このフィールドを含むプロジェクト。     |
| `settings` (`String`)      | プロジェクトフィールドの設定の文字列表現。 |
| `updatedAt` (`DateTime!`)  | オブジェクトが最後に更新された日時を示す。 |

#### ProjectNextFieldConnection

ProjectNextFieldのコネクションタイプ。

| 名前                               | 説明                  |
| -------------------------------- | ------------------- |
| `edges` ([ProjectNextFieldEdge]) | エッジのリスト。            |
| `nodes` ([ProjectNextField])     | ノードのリスト。            |
| `pageInfo` (PageInfo!)           | ページネーションを支援するための情報。 |
| `totalCount` (Int!)              | コネクション中のアイテムの総数を示す。 |

#### ProjectNextFieldEdge

| 名前                   | 説明                 |
| -------------------- | ------------------ |
| `cursor` (String!)   | ページネーションで使用するカーソル。 |
| `node` (ProjectCard) | エッジの最後にあるアイテム。     |

#### ProjectNextItem

- [ノード](/graphql/reference/interfaces#node)

`ProjectNext`内のアイテム。

| 名前                                             | 説明                                                                                                                                                                                                                                                   |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content` (`ProjectNextItemContent`)           | 参照されたIssueまたはPull Requestの内容。                                                                                                                                                                                                                        |
| `createdAt` (DateTime!)                        | オブジェクトが作成された日時を示す。                                                                                                                                                                                                                                   |
| `creator` (`Actor`)                            | このアイテムを作成したアクター。                                                                                                                                                                                                                                     |
| `databaseId` (`Int`)                           | データベースの主キーを示す。                                                                                                                                                                                                                                       |
| `fieldValues` (`[ProjectNextItemFieldValue]!`) | アイテムのフィールド値のリスト。<br><br>**引数**<br>`after` (`String`): 指定されたカーソルの後に来るリスト中の要素を返す。<br>`before` (`String`): 指定されたカーソルの前に来るリスト中の要素を返す。<br>`first` (`Int`): リスト中の最初の*n*個の要素を返す。<br>`last` (`Int`): リスト中の最後の*n*個の要素を返す。 |
| `project` (`ProjectNext!`)                     | このアイテムを含むプロジェクト。                                                                                                                                                                                                                                     |
| `title` (`String!`)                            | アイテムのタイトル。                                                                                                                                                                                                                                           |
| `updatedAt` (DateTime!)                        | オブジェクトが最後に更新された日時を示す。                                                                                                                                                                                                                                |

#### ProjectNextItemContent

`ProjectNextItem`に関連づけられたコンテンツ。

**型:**

- `issue` - Issueへの参照
- `pull request` - Pull Requestへの参照。

#### ProjectNextItemConnection

ProjectNextItemのコネクションタイプ。

| 名前                                | 説明                  |
| --------------------------------- | ------------------- |
| `edges` ([`ProjectNextItemEdge`]) | エッジのリスト。            |
| `nodes` ([`ProjectNextItem`])     | ノードのリスト。            |
| `pageInfo` (`PageInfo!`)          | ページネーションを支援するための情報。 |
| `totalCount` (`Int!`)             | コネクション中のアイテムの総数を示す。 |

#### ProjectNextItemEdge

| 名前                     | 説明                 |
| ---------------------- | ------------------ |
| `cursor` (`String!`)   | ページネーションで使用するカーソル。 |
| `node` (`ProjectCard`) | エッジの最後にあるアイテム。     |

#### ProjectNextItemFieldValue

- [ノード](/graphql/reference/interfaces#node)

`ProjectNext`中のアイテムの中のフィールドの値。

| 名前                                   | 説明                    |
| ------------------------------------ | --------------------- |
| `createdAt` (`DateTime!`)            | オブジェクトが作成された日時を示す。    |
| `creator` (`Actor`)                  | このアイテムを作成したアクター。      |
| `databaseId` (`Int`)                 | データベースの主キーを示す。        |
| `projectField` (`ProjectNextField!`) | この値を含むプロジェクトフィールド。    |
| `projectItem` (`ProjectNextItem!`)   | この値を含むプロジェクトアイテム。     |
| `updatedAt` (`DateTime!`)            | オブジェクトが最後に更新された日時を示す。 |
| `value`                              | フィールドの値。              |

#### ProjectNextItemFieldValueConnection

ProjectNextItemFieldValueのコネクションタイプ。

| 名前                                          | 説明                  |
| ------------------------------------------- | ------------------- |
| `edges` ([`ProjectNextItemFieldValueEdge`]) | エッジのリスト。            |
| `nodes` ([`ProjectNextItemFieldValue`])     | ノードのリスト。            |
| `pageInfo` (`PageInfo!`)                    | ページネーションを支援するための情報。 |
| `totalCount` (`Int!`)                       | コネクション中のアイテムの総数を示す。 |

#### ProjectNextItemEdge

コネクション中のエッジ。

| 名前                     | 説明                 |
| ---------------------- | ------------------ |
| `cursor` (`String!`)   | ページネーションで使用するカーソル。 |
| `node` (`ProjectCard`) | エッジの最後にあるアイテム。     |

### インターフェース

#### ProjectNextOwner

プロジェクトのオーナーを表します。

**実装**

- `Organization`

**フィールド**

| 名前                                        | 説明                                                                                                                                                                                                                                                          |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectNext` (`ProjectNext`)             | 数値でプロジェクトを見つける。<br><br>**引数**<br>`number`(`Int!`): 見つけるプロジェクトの番号。                                                                                                                                                                         |
| `projectsNext` (`ProjectNextConnection!`) | オーナーの配下のプロジェクトの次のアイテムのリスト。<br><br>**引数**<br>` after`(`String`): 指定されたカーソルの後に来るリスト中の要素を返す。<br>`before`(`String`): 指定されたカーソルの前に来るリスト中の要素を返す。<br>`first`(`Int`): リスト中の最初の*n*個の要素を返す。<br>`last`(`Int`): リスト中の最後の*n*個の要素を返す。 |

### ミューテーション

#### addProjectNextItem

既存のアイテム（IssueもしくはPull Request）をプロジェクトに追加します。

**入力フィールド**

- `input`(`AddProjectNextItemInput!`)

**返値フィールド**

| 名前                                    | 説明                           |
| ------------------------------------- | ---------------------------- |
| `clientMutationId` (`String`)         | ミューテーションを行っているクライアントの一意の識別子。 |
| `projectNextItem` (`ProjectNextItem`) | プロジェクトに追加されたアイテム。            |

#### updateProjectNextItemField

プロジェクトのアイテムのフィールドを更新します。

**入力フィールド**

- `input`(`UpdateProjectNextItemFieldInput!`)

**返値フィールド**

| 名前                                    | 説明                           |
| ------------------------------------- | ---------------------------- |
| `clientMutationId` (`String`)         | ミューテーションを行っているクライアントの一意の識別子。 |
| `projectNextItem` (`ProjectNextItem`) | プロジェクトに追加されたアイテム。            |

#### deleteProjectNextItem

プロジェクトからアイテムを削除します。

**入力フィールド**

- `input`(`DeleteProjectNextItemInput!`)

**返値フィールド**

| 名前                            | 説明                           |
| ----------------------------- | ---------------------------- |
| `clientMutationId` (`String`) | ミューテーションを行っているクライアントの一意の識別子。 |
| `deletedItemId` (`ID`)        | 削除されたアイテムのID。                |

### 入力オブジェクト

#### DeleteProjectNextItemInput

AddProjectNextItemの自動生成された入力タイプ。

**入力フィールド**

| 名前                            | 説明                                 |
| ----------------------------- | ---------------------------------- |
| `clientMutationId` (`String`) | ミューテーションを行っているクライアントの一意の識別子。       |
| `contentId` (`ID!`)           | 追加するアイテム（IssueあるいはPullRequest）のID。 |
| `projectId` (`ID!`)           | アイテムを追加するプロジェクトのID。                |

#### UpdateProjectNextItemFieldInput

UpdateProjectNextItemFieldの自動生成された入力タイプ。

**入力フィールド**

| 名前                            | 説明                                         |
| ----------------------------- | ------------------------------------------ |
| `clientMutationId` (`String`) | ミューテーションを行っているクライアントの一意の識別子。               |
| `fieldId` (`ID!`)             | 更新するフィールドのID。 現在はカスタムフィールドとステータスをサポートしている。 |
| `itemId` (`ID!`)              | 更新するアイテムのID。                               |
| `projectId` (`ID!`)           | プロジェクトのID。                                 |
| `value` (`String!`)           | フィールドに設定される値。                              |

#### DeleteProjectNextItemInput

DeleteProjectNextItemの自動生成された入力タイプ。

**入力フィールド**

| 名前                            | 説明                           |
| ----------------------------- | ---------------------------- |
| `clientMutationId` (`String`) | ミューテーションを行っているクライアントの一意の識別子。 |
| `itemId` (`ID!`)              | 削除されるアイテムのID。                |
| `projectId` (`ID!`)           | アイテムが削除されるプロジェクトのID。         |

---
title: Enterpriseアカウントの管理
intro: Enterpriseアカウントと、そのアカウントが所有するOrganizationをGraphQL APIで管理できます。
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### GraphQLでのEnterpriseアカウントの管理について

Organizationをモニターし、変更を行ってコンプライアンスを維持しやすくするために、Enterprise Accounts API及びAudit Log APIを利用できます。これらはGraphQL APIでのみ利用できます。

Enterpriseアカウントのエンドポイントは、GitHub Enterprise Cloud及びGitHub Enterprise Serverのどちらでも動作します。

GraphQLを利用すれば、指定したデータだけをリクエストして返してもらうことができます。 たとえば、GraphQLクエリを作成し、情報をリクエストすることで、Organizationに追加された新しいメンバーを全員みることができます。 あるいはミューテーションを行って変更をかけて、Enterpriseアカウントに管理者を招待できます。

Audit Log APIでは、誰かが以下のようなことをするのをモニターできます。
- Organizationあるいはリポジトリの設定へのアクセス。
- 権限の変更。
- Organization、リポジトリ、Teamへのユーザーの追加もしくは削除。
- ユーザを管理者に昇格。
- GitHub Appの権限の変更。

Audit Log APIを使えば、Audit logのデータのコピーを保持できます。 Audit Log APIで発行するクエリについては、GraphQLのレスポンスには最大で90から120日分のデータが含まれることがあります。 Audit Log APIで利用できるフィールドのリストについては、「[ AuditEntryインターフェース](/graphql/reference/interfaces#auditentry/)」を参照してください。

Enterprise APIを利用すると、以下のことができます。
- Enterpriseアカウントに属するすべてのOrganizationとリポジトリの取得と確認。
- Enterpriseアカウントの設定変更。
- EnterpriseアカウントとそのOrganizationに関する設定ポリシーの設定。
- Enterpriseアカウントへの管理者の招待。
- Enterpriseアカウント内での新しいOrganizationの作成。

Enterprise Accounts APIで利用できるフィールドのリストについては、「[Enterprise Accounts APIのGraphQLフィールドと型](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api)」を参照してください。

### EnterpriseアカウントでGraphQLを使い始める

GraphQLを使ってEnterpriseアカウントの管理を始めるには、以下のステップに従ってください。
 - 個人アクセストークンでの認証
 - GraphQLクライアントの選択もしくはGraphQL Explorerの利用
 - GraphQL APIを利用するためのInsomniaのセットアップ

クエリの例については「[Enterprise Accounts APIを使ったクエリの例](#an-example-query-using-the-enterprise-accounts-api)」を参照してください。

#### 1. 個人アクセストークンでの認証

1. GraphQLで認証を受けるには、開発者の設定から個人アクセストークン（PAT）を生成しなければなりません。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

2. アクセスしたいGHESの領域に対して、管理及び完全なコントロール権限を個人アクセストークンに付与してください。 プライベートリポジトリ、Organization、Team、ユーザデータ、Enterpriseの支払い及びプロフィールデータへのアクセスについての完全な権限に関しては、個人アクセストークンに対して以下のスコープを選択することをおすすめします。
    - `repo`
    - `admin:org`
    - `ユーザ`
    - `admin:enterprise`

  Enterpriseアカウントに固有にスコープは以下のとおりです。
    - `admin:enterprise`: Enterpriseの完全な制御を与えます（`manage_billing:enterprise`及び`read:enterprise`を含む）
    - `manage_billing:enterprise`: Enterpriseの支払いデータの読み書き。
    - `read:enterprise`: Enterpriseのプロフィールデータの読み取り。

4. 個人アクセストークンをコピーし、GraphQLクライアントに追加するまでは安全な場所に保管しておいてください。

#### 2. GraphQLクライアントの選択

GraphiQLもしくはベースURLの設定ができる他のスタンドアローンのGraphQLクライアントを使うことをおすすめします。

以下のGraphQLクライアントの利用を検討しても良いでしょう。
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

この次のステップではInsomniaを使います。

#### 3. EnterpriseアカウントでGitHub GraphQL APIを利用するためのInsomniaのセットアップ

1. GraphQLクライアントにベースURLと`POST`メソッドを追加してください。 GraphQLを使って情報をリクエスト（クエリ）したり、情報を変更（ミューテーション）したり、GitHub APIを使ってデータを転送したりする場合、デフォルトのHTTPメソッドは`POST`であり、ベースURLは以下の構文に従います。
    - Enterpriseインスタンスの場合は、`https://<HOST>/api/graphql`
    - GitHub Enterprise Cloudの場合は、`https://api.github.com/graphql`

2. 認証を受けるには、認証オプションのメニューを開き、**Bearer token**を選択してください。 次に、先ほどコピーした個人アクセストークンを追加してください。

 ![個人アクセストークンの権限オプション](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![個人アクセストークンの権限オプション](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. ヘッダー情報を含めてください。
   - ヘッダーとして`Content-Type`を、値として`application/json`を追加してください。 ![標準ヘッダー](/assets/images/developer/graphql/json-content-type-header.png) ![Audit Log APIのためのプレビュー値を持つヘッダー](/assets/images/developer/graphql/preview-header-for-2.18.png)

これでクエリを発行する準備ができました。

### Enterprise Accounts APIを使ったクエリの例

このGraphQLクエリは、Enterprise Accounts APIを使い、アプライアンス中の各Organization内の{% if currentVersion != "github-ae@latest" %}`パブリック`{% else %}`プライベート`{% endif %}なリポジトリの総数を要求しています。 このクエリをカスタマイズするには、`<enterprise-account-name>`をお使いのEnterpriseインスタンスのスラッグで置き換えてください。

{% if currentVersion != "github-ae@latest" %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # フラグメントの使い方
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... といったように最大でたとえば100個続く
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PRIVATE){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```
{% endif %}

次のGraphQLクエリの例は、Enterprise Accounts APIを使わずに各Organization内の{% if currentVersion != "github-ae@latest" %}`public`{% else %}` private`{% endif %}なリポジトリの数を取得するのがいかに難しいかを示します。  単一の変数だけをカスタマイズすれば済むようになることから、EnterpriseにとってGraphQLのEnterprise Accounts APIがこのタスクをシンプルにしてくれていることに注意してください。 このクエリをカスタマイズするには、`<name-of-organization-one>`や`<name-of-organization-two>`などを 自分のインスタンス上のOrganization名で置き換えてください。

{% if currentVersion != "github-ae@latest" %}
```graphql
# 各organizationに対して個別にクエリを実行
{
  organizationOneAlias: organization(login: "nameOfOrganizationOne") {
    # フラグメントの使い方
    ...repositories
  }
  organizationTwoAlias: organization(login: "nameOfOrganizationTwo") {
    ...repositories
  }
  # organizationThreeAlias ... といったように最大でたとえば100個続く
}

## フラグメントの定義方法
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```
{% else %}
```graphql
# 各organizationに対して個別にクエリを実行
{
  organizationOneAlias: organization(login: "name-of-organization-one") {
    # フラグメントの使い方
    ...repositories
  }
  organizationTwoAlias: organization(login: "name-of-organization-two") {
    ...repositories
  }
  # organizationThreeAlias ... といったように最大でたとえば100個続く
}

## フラグメントの定義方法
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```
{% endif %}

### 各Organizationに対して個別にクエリを行う

{% if currentVersion != "github-ae@latest" %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # フラグメントの使用方法
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... といったように最大でたとえば100個続く
}
# フラグメントの定義方法
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # フラグメントの使用方法
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... といったように最大でたとえば100個続く
}
# フラグメントの定義方法
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```

{% endif %}

このGraphQLクエリは、EnterpriseのOrganizationの最新の5つのログエントリを要求します。 このクエリをカスタマイズするには、`<org-name>`と`<user-name>`を置き換えてください。

```graphql
{
  organization(login: "<org-name>") {
    auditLog(last: 5, query: "actor:<user-name>") {
      edges {
        node {
          ... on AuditEntry {
# Audit Logのエントリを'Action'で取得
            action
            actorLogin
            createdAt
#  'Action'を実行したUser
           user{
              name
                email
            }
          }
        }
      }
    }
  }
}
```

GraphQLの使い始め方に関する詳しい情報については「[GraphQLの紹介](/graphql/guides/introduction-to-graphql)」及び「[GraphQLでの呼び出しの作成](/graphql/guides/forming-calls-with-graphql)」を参照してください。

### Enterprise Accounts APIでのGraphQLのフィールドと型

Enterprise Accounts APIで利用できる新しいクエリ、ミューテーション、スキーマ定義された型の概要を以下に示します。

Enterprise APIで利用できる新しいクエリ、ミューテーション、スキーマ定義された型に関する詳しい情報については、任意の[GraphQLリファレンスページ](/graphql)の詳細なGraphQLの定義があるサイドバーを参照してください。

GitHub上のGraphQL Explorer内からリファレンスドキュメントにアクセスできます。 詳しい情報については「[Explorerの利用](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)」を参照してください。 認証やレート制限の詳細など その他の情報については[ガイド](/graphql/guides)を参照してください。

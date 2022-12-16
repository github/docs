---
title: Enterpriseアカウントの管理
intro: Enterpriseアカウントと、そのアカウントが所有するOrganizationをGraphQL APIで管理できます。
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Manage enterprise accounts
ms.openlocfilehash: c55a2b23ff88214739402f78f00c2682c97df93b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106782'
---
## GraphQLでのEnterpriseアカウントの管理について

Organizationをモニターし、変更を行ってコンプライアンスを維持しやすくするために、Enterprise Accounts API及びAudit Log APIを利用できます。これらはGraphQL APIでのみ利用できます。

Enterpriseアカウントのエンドポイントは、GitHub Enterprise Cloud及びGitHub Enterprise Serverのどちらでも動作します。

GraphQL を使用すると、指定したデータのみを要求し、返すことができます。 たとえば、組織に追加された新しい組織メンバーの情報をすべて表示するには、GraphQL クエリ (つまり情報の要求) を作成します。 また、Enterprise アカウントに管理者を招待するための変化 (変更) を加えることもできます。

Audit Log API を使用すると、次のような場合を監視できます。
- 組織またはリポジトリの設定にアクセスする。
- アクセス許可を変更する。
- 組織、リポジトリ、またはチームのユーザーを追加または削除する。
- ユーザーを管理者に昇格させる。
- GitHub アプリのアクセス許可を変更する。

Audit Log API を使用すると、監査ログ データのコピーを保持できます。 Audit Log APIで発行するクエリについては、GraphQLのレスポンスには最大で90から120日分のデータが含まれることがあります。 Audit Log API で使用できるフィールドの一覧については、「[AuditEntry インターフェイス](/graphql/reference/interfaces#auditentry/)」を参照してください。

Enterprise APIを利用すると、以下のことができます。
- Enterpriseアカウントに属するすべてのOrganizationとリポジトリの取得と確認。
- Enterpriseアカウントの設定変更。
- EnterpriseアカウントとそのOrganizationに関する設定ポリシーの設定。
- Enterpriseアカウントへの管理者の招待。
- Enterpriseアカウント内での新しいOrganizationの作成。

エンタープライズ アカウント API で使用できるフィールドの一覧については、「[エンタープライズ アカウント API での GraphQL のフィールドと型](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api)」を参照してください。

## EnterpriseアカウントでGraphQLを使い始める

GraphQLを使ってEnterpriseアカウントの管理を始めるには、以下のステップに従ってください。
 - {% data variables.product.pat_generic %} で認証を行う
 - GraphQLクライアントの選択もしくはGraphQL Explorerの利用
 - GraphQL APIを利用するためのInsomniaのセットアップ

クエリの例については、「[エンタープライズ アカウント API を使ったクエリの例](#an-example-query-using-the-enterprise-accounts-api)」を参照してください。

### 1. {% data variables.product.pat_generic %} で認証を行う

{% data reusables.user-settings.graphql-classic-pat-only %}

1. GraphQL で認証を行うには、開発者の設定から {% data variables.product.pat_generic %} を生成する必要があります。 詳しくは、「[{% data variables.product.pat_generic %} を作成する](/github/authenticating-to-github/creating-a-personal-access-token)」をご覧ください。

2. アクセスしたい GHES の領域に対する {% data variables.product.pat_generic %} に、管理者とフル コントロールのアクセス許可を付与します。 プライベート リポジトリ、Organization、Team、ユーザー データ、および Enterprise の課金とプロフィールのデータへのアクセスに対するフル アクセス許可の場合は、{% data variables.product.pat_generic %} に対して次のスコープを選ぶことをお勧めします。
    - `repo`
    - `admin:org`
    - `user`
    - `admin:enterprise`

  Enterpriseアカウントに固有にスコープは以下のとおりです。
    - `admin:enterprise`: Enterprise のフル コントロールを付与します (`manage_runners:enterprise`、`manage_billing:enterprise`、`read:enterprise` を含みます)
    - `manage_billing:enterprise`: Enterprise の課金データの読み取りと書き込み。{% ifversion ghes or ghae %}
    - `manage_runners:enterprise`: GitHub Actions エンタープライズ ランナーとランナー グループを管理するためのアクセス。{% endif %}
    - `read:enterprise`: エンタープライズのプロファイル データを読み取ります。

3. {% data variables.product.pat_generic %} をコピーし、GraphQL クライアントに追加するまで安全な場所に保管しておきます。

### 2. GraphQL クライアントの選択

GraphiQLもしくはベースURLの設定ができる他のスタンドアローンのGraphQLクライアントを使うことをおすすめします。

以下のGraphQLクライアントの利用を検討しても良いでしょう。
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

この次のステップではInsomniaを使います。

### 3. エンタープライズ アカウントで GitHub GraphQL API を使用するための Insomnia の設定

1. ベース URL と `POST` メソッドを GraphQL クライアントに追加します。 GraphQL を使用して情報の要求 (クエリ)、情報の変更 (ミューテーション)、または GitHub API を使用してデータを転送する場合、既定の HTTP メソッドは `POST` であり、ベース URL は次の構文に従います。
    - エンタープライズ インスタンスの場合: `https://<HOST>/api/graphql`
    - GitHub Enterprise Cloud の場合: `https://api.github.com/graphql`

2. 認証するには、認証オプション メニューを開き、 **[ベアラー トークン]** を選択します。 次に、前にコピーした {% data variables.product.pat_generic %} を追加します。

 ![{% data variables.product.pat_generic %} のアクセス許可オプション](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![{% data variables.product.pat_generic %} のアクセス許可オプション](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. ヘッダー情報を含めてください。
   - `Content-Type` をヘッダーとして、`application/json` を値として追加します。
   ![標準ヘッダー](/assets/images/developer/graphql/json-content-type-header.png)
   ![監査ログ API のプレビュー値を含むヘッダー](/assets/images/developer/graphql/preview-header-for-2.18.png)

これでクエリを発行する準備ができました。

## Enterprise Accounts APIを使ったクエリの例

この GraphQL クエリは、エンタープライズ アカウント API を使用して、アプライアンスの各組織の {% ifversion not ghae %}`public`{% else %}`private`{% endif %} リポジトリの合計数を要求します。 このクエリをカスタマイズするには、`<enterprise-account-name>` をエンタープライズ アカウントのハンドルに置換します。 たとえば、エンタープライズ アカウントが `https://github.com/enterprises/octo-enterprise` にある場合は、`<enterprise-account-name>` を `octo-enterprise` に置換します。

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization($slug: String!) {
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
          repositories(privacy: PUBLIC){
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

次の GraphQL クエリの例では、エンタープライズ アカウント API を使用せずに、各組織の {% ifversion not ghae %}`public`{% else %}`private`{% endif %} リポジトリの数を取得することがいかに困難であるかを示しています。  単一の変数だけをカスタマイズすれば済むようになることから、EnterpriseにとってGraphQLのEnterprise Accounts APIがこのタスクをシンプルにしてくれていることに注意してください。 このクエリをカスタマイズするには、`<name-of-organization-one>` や `<name-of-organization-two>` などを、インスタンスの組織名に置換します。

{% ifversion not ghae %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "nameOfOrganizationOne") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "nameOfOrganizationTwo") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```
{% else %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "name-of-organization-one") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "name-of-organization-two") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```
{% endif %}

## 各Organizationに対して個別にクエリを行う

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
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
query privateRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```

{% endif %}

このGraphQLクエリは、EnterpriseのOrganizationの最新の5つのログエントリを要求します。 このクエリをカスタマイズするには、`<org-name>` と `<user-name>` を置換します。

```graphql
{
  organization(login: "<org-name>") {
    auditLog(last: 5, query: "actor:<user-name>") {
      edges {
        node {
          ... on AuditEntry {
# Get Audit Log Entry by 'Action'
            action
            actorLogin
            createdAt
# User 'Action' was performed on
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

GraphQL の概要の詳細については、「[GraphQL の紹介](/graphql/guides/introduction-to-graphql)」と「[GraphQL での呼び出しの作成](/graphql/guides/forming-calls-with-graphql)」を参照してください。

## Enterprise Accounts APIでのGraphQLのフィールドと型

Enterprise Accounts APIで利用できる新しいクエリ、ミューテーション、スキーマ定義された型の概要を以下に示します。

エンタープライズ アカウント API で使用できる新しいクエリ、ミューテーション、およびスキーマ定義型の詳細については、[GraphQL リファレンス ページ](/graphql)の詳細な GraphQL 定義が表示されているサイドバーを参照してください。

GitHub上のGraphQL Explorer内からリファレンスドキュメントにアクセスできます。 詳細については、「[Explorer の利用](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)」を参照してください。
認証やレート制限の詳細など、その他の情報については「[ガイド](/graphql/guides)」を参照してください。

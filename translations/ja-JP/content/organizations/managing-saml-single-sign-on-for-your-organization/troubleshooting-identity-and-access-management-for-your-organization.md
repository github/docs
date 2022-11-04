---
title: 組織の ID とアクセス管理のトラブルシューティング
intro: OrganizationのSAML SSO、Team同期、アイデンティティプロバイダ（IdP）との接続に関するエラーに対する一般的なトラブルシューティングをレビューして解決してください。
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Troubleshooting access
redirect_from:
  - /organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management
ms.openlocfilehash: d3110d61fb511f55aa840d0911c036dd342fa833
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106974'
---
{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% data reusables.saml.authentication-loop %}

## プロビジョニングされていない、あるいはSCIMによってプロビジョニング解除されたユーザがいる

ユーザのプロビジョニングの問題が生じた場合、ユーザがSCIMのメタデータを欠いているかどうかをチェックすることをおすすめします。 

{% data reusables.scim.changes-should-come-from-idp %}

OrganizationのメンバーがSCIMのメタデータを欠いている場合は、IdPを通じてそのユーザに対し、手作業でSCIMをプロビジョニングし直すことができます。

### SCIMメタデータを欠いたユーザの監査

期待どおりにプロビジョニングされていない、あるいはプロビジョニング解除されたユーザがいると考えられる、あるいはいることに気づいた場合は、Organizationのすべてのユーザを監査することをおすすめします。

ユーザがSCIMアイデンティティ（SCIMメタデータ）を外部アイデンティティに持っているかをチェックするには、{% data variables.product.prodname_dotcom %}上で一人ずつOrganizationメンバーのSCIMメタデータをレビューするか、{% data variables.product.prodname_dotcom %} APIを使ってプログラムですべてのOrganizationメンバーをチェックできます。

#### {% data variables.product.prodname_dotcom %}上のOrganizationメンバーの監査

Organization の所有者として、1 人の Organization メンバーに SCIM メタデータがあることを確認するには、次の URL にアクセスし、`<organization>` と `<username>` を置き換えます。 

> `https://github.com/orgs/<organization>/people/<username>/sso`

ユーザの外部アイデンティティにSCIMメタデータが含まれているなら、そのページにはSCIMアイデンティティセクションが表示されるはずです。 外部アイデンティティにSCIMメタデータが含まれていないなら、SCIMアイデンティティセクションは存在しません。

#### {% data variables.product.prodname_dotcom %} APIを通じたOrganizationメンバーの監査

Organizationオーナーは、SCIM REST APIあるいはGraphQLでクエリを行い、SCIMでプロビジョニングされたOrganizationのすべてのアイデンティティをリストできます。 

#### REST API を使用して

SCIM REST APIは、外部アイデンティティの下でSCIMメタデータが展開されているユーザのデータだけを返します。 Organizationの全メンバーのリストと、SCIMでプロビジョニングされているアイデンティティのリストを比較することをおすすめします。

詳細については、次を参照してください。
  - 「[SCIM でプロビジョニングされた ID を一覧表示する](/rest/reference/scim#list-scim-provisioned-identities)」
  - 「[Organization のメンバーを一覧表示する](/rest/reference/orgs#list-organization-members)」

#### GraphQLを利用する

この GraphQL クエリを実行すると、Organization 内の各ユーザーの SAML `NameId`、SCIM `UserName`、{% data variables.product.prodname_dotcom %} ユーザー名 (`login`) が表示されます。 このクエリを使用するには、`ORG` を実際の Organization 名に置き換えます。 

```graphql
{
  organization(login: "ORG") {
    samlIdentityProvider {
      ssoUrl
      externalIdentities(first: 100) {
        edges {
          node {
            samlIdentity {
              nameId
            }
            scimIdentity {
              username
            }
            user {
              login
            }
          }
        }
      }
    }
  }
}
```

```shell
curl -X POST -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{ "query": "{ organization(login: \"ORG\") { samlIdentityProvider { externalIdentities(first: 100) { pageInfo { endCursor startCursor hasNextPage } edges { cursor node { samlIdentity { nameId } scimIdentity {username}  user { login } } } } } } }" }'  https://api.github.com/graphql
```

GraphQL APIの利用に関する詳しい情報については、以下を参照してください。 
   - 「[GraphQL ガイド](/graphql/guides)」
   - 「[Graph エクスプローラー](/graphql/overview/explorer)」

### アイデンティティプロバイダを介したユーザのSCIM再プロビジョニング

IdPを介して、ユーザのSCIMを手動で再プロビジョニングできます。 たとえば、Oktaのプロビジョニングのエラーを解決するために、Oktaの管理ポータルで、{% data variables.product.prodname_dotcom %}アプリケーションに対してユーザの割り当てを解除してから割り当て直すことができます。 これにより、Oktaはそれらのユーザに対するSCIMメタデータを{% data variables.product.prodname_dotcom %}に展開するAPIコールを発行します。 詳細については、Okta ドキュメントの「[Unassign users from applications](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm)」 (アプリケーションからのユーザーの割り当て解除) または「[Assign users to applications](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm)」 (アプリケーションへのユーザーの割り当て) を参照してください。

ユーザのSCIMアイデンティティが作成されたことを確認するには、SCIMの外部アイデンティティを持っていないことが確認された一人のOrganizationメンバーで、このプロセスをテストすることをおすすめします。 手動でIdP内のユーザを更新したら、ユーザのSCIMアイデンティティが作成されたかを{% data variables.product.prodname_dotcom %} の
SCIM APIを使ってチェックできます。 詳細については、「[SCIM メタデータを欠いたユーザーの監査](#auditing-users-for-missing-scim-metadata)」または REST API エンドポイントの「[ユーザーの SCIM プロビジョニング情報の取得](/rest/reference/scim#get-scim-provisioning-information-for-a-user)」を参照してください。

ユーザのSCIMの再プロビジョニングでもうまくいかない場合は、{% data variables.product.prodname_dotcom %}サポートにお問い合わせください。

## 参考資料

- 「[Enterprise のアイデンティティおよびアクセス管理のトラブルシューティング](/admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise)」

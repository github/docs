---
title: Troubleshooting identity and access management for your organization
intro: OrganizationのSAML SSO、Team同期、アイデンティティプロバイダ（IdP）との接続に関するエラーに対する一般的なトラブルシューティングをレビューして解決してください。
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: アクセスのトラブルシューティング
redirect_from:
  - /organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management
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

Organizationのオーナーとして、一人のOrganizationメンバーにSCIMメタデータがあることを確認するには、`<organization>`と`<username>`を置き換えて以下のURLにアクセスしてください。

> `https://github.com/orgs/<organization>/people/<username>/sso`

ユーザの外部アイデンティティにSCIMメタデータが含まれているなら、そのページにはSCIMアイデンティティセクションが表示されるはずです。 外部アイデンティティにSCIMメタデータが含まれていないなら、SCIMアイデンティティセクションは存在しません。

#### {% data variables.product.prodname_dotcom %} APIを通じたOrganizationメンバーの監査

Organizationオーナーは、SCIM REST APIあるいはGraphQLでクエリを行い、SCIMでプロビジョニングされたOrganizationのすべてのアイデンティティをリストできます。

#### REST API を使用する

SCIM REST APIは、外部アイデンティティの下でSCIMメタデータが展開されているユーザのデータだけを返します。 Organizationの全メンバーのリストと、SCIMでプロビジョニングされているアイデンティティのリストを比較することをおすすめします。

詳しい情報については、以下を参照してください。
  - 「[SCIMでプロビジョニングされているアイデンティティのリスト](/rest/reference/scim#list-scim-provisioned-identities)」
  - 「[Organizationメンバーのリスト](/rest/reference/orgs#list-organization-members)」

#### GraphQLを利用する

このGraphQLのクエリは、Organizationの各ユーザのSAMLの`NameId`、SCIMの`UserName`及び{% data variables.product.prodname_dotcom %}のユーザ名（`login`）を表示します。 このクエリを使うには、`ORG`をOrganiozation名で置き換えてください。

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
curl -X POST -H "Authorization: Bearer <personal access token>" -H "Content-Type: application/json" -d '{ "query": "{ organization(login: \"ORG\") { samlIdentityProvider { externalIdentities(first: 100) { pageInfo { endCursor startCursor hasNextPage } edges { cursor node { samlIdentity { nameId } scimIdentity {username}  user { login } } } } } } }" }'  https://api.github.com/graphql
```

GraphQL APIの利用に関する詳しい情報については、以下を参照してください。
   - 「[GraphQLのガイド](/graphql/guides)」
   - 「[GraphQL explorer](/graphql/overview/explorer)」

### アイデンティティプロバイダを介したユーザのSCIM再プロビジョニング

IdPを介して、ユーザのSCIMを手動で再プロビジョニングできます。 たとえば、Oktaのプロビジョニングのエラーを解決するために、Oktaの管理ポータルで、{% data variables.product.prodname_dotcom %}アプリケーションに対してユーザの割り当てを解除してから割り当て直すことができます。 これにより、Oktaはそれらのユーザに対するSCIMメタデータを{% data variables.product.prodname_dotcom %}に展開するAPIコールを発行します。 詳しい情報についてはOktaのドキュメンテーションの「[Unassign users from applications](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm)」あるいは「[Assign users to applications](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm)」を参照してください。

ユーザのSCIMアイデンティティが作成されたことを確認するには、SCIMの外部アイデンティティを持っていないことが確認された一人のOrganizationメンバーで、このプロセスをテストすることをおすすめします。 手動でIdP内のユーザを更新したら、ユーザのSCIMアイデンティティが作成されたかを{% data variables.product.prodname_dotcom %} の SCIM APIを使ってチェックできます。 詳しい情報については「[ユーザのSCIMメタデータの欠如の監査](#auditing-users-for-missing-scim-metadata)」あるいはREST APIエンドポイントの「[ユーザのSCIMプロビジョニング情報の取得](/rest/reference/scim#get-scim-provisioning-information-for-a-user)」を参照してください。

ユーザのSCIMの再プロビジョニングでもうまくいかない場合は、{% data variables.product.prodname_dotcom %}サポートにお問い合わせください。

## 参考リンク

- "[Troubleshooting identity and access management for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise)"

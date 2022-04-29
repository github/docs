---
title: SCIM
intro: GitHub Organizationのメンバーのアクセスを、SCIM APIを使って制御及び管理できます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/scim
---

## About the SCIM API

### Organization 向け SCIM プロビジョニング

SCIM API は SCIM を有効にしたアイデンティティプロバイダ (IdPs) で、{% data variables.product.product_name %} Organization メンバーシップのプロビジョニングを自動化するために用いられます。 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIは、[SCIM標準](http://www.simplecloud.info/)バージョン2に基づいています。 IdP が使用するべき {% data variables.product.product_name %} SCIM エンドポイントは、`{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/` です。

{% note %}

**ノート:**
  - SCIM APIは[SAML SSO](/rest/overview/other-authentication-methods#authenticating-for-saml-sso)が有効化された[{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts)を利用する個々のOrganizationでのみ利用できます。 SCIMに関する詳しい情報については「[OrganizationのためのSCIMについて](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」を参照してください。
  - SCIM APIはEnterpriseアカウントで、あるいは{% data variables.product.prodname_emu_org %}と合わせて使うことはできません。

{% endnote %}

### SCIM API への呼び出しを認証する

SCIM API を使用するには、{% data variables.product.product_name %} Organization の所有者として認証する必要があります。 API は、[OAuth 2.0 Bearer](/developers/apps/authenticating-with-github-apps) トークンが `Authorization` ヘッダに含まれていることを想定しています。 個人アクセストークンを使用することもできますが、まず [SAML SSO Organizationで使用するためにトークンを承認する](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)必要があります。

### SAML および SCIM データのマッピング

{% data reusables.scim.nameid-and-username-must-match %}

### サポートされている SCIM ユーザ属性

| 名前                | 種類        | 説明                                                                                                                                                                                                                                             |
| ----------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userName`        | `string`  | ユーザのユーザ名。                                                                                                                                                                                                                                      |
| `name.givenName`  | `string`  | ユーザーの名。                                                                                                                                                                                                                                        |
| `name.familyName` | `string`  | ユーザーの姓。                                                                                                                                                                                                                                        |
| `emails`          | `array`   | ユーザのメール一覧。                                                                                                                                                                                                                                     |
| `externalId`      | `string`  | この識別子は SAML プロバイダによって生成され、GitHub ユーザと照合するためにSAML プロバイダによって一意の ID として使用されます。 ユーザの `externalID` は、SAML プロバイダ、または [SCIM プロビジョニング済み ID の一覧表示](#list-scim-provisioned-identities)エンドポイントを使用して、ユーザの GitHub ユーザ名やメールアドレスなどの他の既知の属性でフィルタして見つけることができます。 |
| `id`              | `string`  | GitHub SCIM エンドポイントによって生成された識別子。                                                                                                                                                                                                               |
| `active`          | `boolean` | ID がアクティブである（true）か、プロビジョニングを解除する必要がある（false）かを示すために使用する。                                                                                                                                                                                      |

{% note %}

**注釈:** SCIM API のエンドポイント URL では、大文字と小文字が区別されます。 たとえば、`Users` エンドポイントの最初の文字は大文字にする必要があります。

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}

---
title: SCIM
intro: SCIM API を使って、GitHub の Organization メンバーのアクセスを制御および管理できます。
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/scim
ms.openlocfilehash: 314ed9433ffeb1ef3f189795727a3b654c529c96
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883044'
---
## SCIM API について

### Organization 向け SCIM プロビジョニング

SCIM API は SCIM を有効にしたアイデンティティプロバイダ (IdPs) で、{% data variables.product.product_name %} Organization メンバーシップのプロビジョニングを自動化するために用いられます。 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API は [SCIM 標準](http://www.simplecloud.info/)のバージョン 2.0 に基づいています。 IdP で使用する必要がある {% data variables.product.product_name %} SCIM エンドポイントは `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`です。

{% note %}

**注:** 
  - SCIM API は、[SAML SSO](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) が有効になっている [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) を使用する個々の組織でのみ使用できます。 SCIM の詳細については、「[組織の SCIM について](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」を参照してください。
  - SCIM API は、エンタープライズ アカウントまたは {% data variables.product.prodname_emu_org %} では使用できません。

{% endnote %}

### SCIM API への呼び出しを認証する

SCIM API を使用するには、{% data variables.product.product_name %} Organization の所有者として認証する必要があります。 この API では、[OAuth 2.0 ベアラー](/developers/apps/authenticating-with-github-apps) トークンが `Authorization` ヘッダーに含まれることを想定しています。 個人用アクセス トークンを使用することもできますが、最初に [SAML SSO 組織で使用することを承認する](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)必要があります。

### SAML および SCIM データのマッピング

{% data reusables.scim.nameid-and-username-must-match %}

### サポートされている SCIM ユーザ属性

名前 | Type | 説明
-----|------|--------------
`userName`|`string` | ユーザのユーザ名。
`name.givenName`|`string` | ユーザーの名。
`name.familyName`|`string` | ユーザーの姓。
`emails` | `array` | ユーザのメール一覧。
`externalId` | `string` | この識別子は SAML プロバイダによって生成され、GitHub ユーザと照合するためにSAML プロバイダによって一意の ID として使用されます。 ユーザの `externalID` は、SAML プロバイダー、または [SCIM プロビジョニング済み ID の一覧表示](#list-scim-provisioned-identities)エンドポイントを使用して、ユーザーの GitHub ユーザー名やメールアドレスなどの他の既知の属性でフィルターして見つけることができます。
`id` | `string` | GitHub SCIM エンドポイントによって生成された識別子。
`active` | `boolean` | ID がアクティブである（true）か、プロビジョニングを解除する必要がある（false）かを示すために使用する。

{% note %}

**注:** SCIM API のエンドポイント URL では、大文字と小文字が区別されます。 たとえば、`Users` エンドポイントの最初の文字は大文字にする必要があります。

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}

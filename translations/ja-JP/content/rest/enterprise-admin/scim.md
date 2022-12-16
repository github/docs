---
title: SCIM
intro: SCIM API を使用して、ユーザーの作成とチーム メンバーシップを自動化できます。
versions:
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ef20e958e8a0680425e116f9d7e576291b793766
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107278'
---
{% data reusables.scim.ghes-beta-note %}

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
## SCIM API について

{% data variables.product.product_name %} には、SCIM 対応 ID プロバイダー (IdP) で使用するための SCIM API が用意されています。 IdP の統合では、API を使用して、認証に SAML シングル サインオン (SSO) を使う {% data variables.product.product_name %} インスタンスでユーザー アカウントを自動的にプロビジョニング、管理、またはプロビジョニング解除できます。 詳しくは、「[Enterprise IAM の SAML について](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)」を参照してください。

SCIM API は SCIM 2.0 に基づいています。 詳細については、[仕様](https://www.simplecloud.info/#Specification)に関する記事を参照してください。

### SCIM エンドポイント URL

IdP は、次のルート URL を使用して、{% data variables.product.product_name %} インスタンスの SCIM API と通信できます。

```
{% data variables.product.api_url_code %}/scim/v2/
```

SCIM API のエンドポイント URL では、大文字と小文字が区別されます。 たとえば、`Users` エンドポイントの最初の文字は大文字にする必要があります。

```shell
GET /scim/v2/Users/{scim_user_id}
```

### SCIM API への呼び出しを認証する

IdP での SCIM 統合では、{% data variables.product.product_name %} インスタンスの Enterprise 所有者に代わってアクションが実行されます。 詳細については、「[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)」を参照してください。

API に対する要求を認証するには、IdP で SCIM を構成するユーザーは、`admin:enterprise` スコープを持つ {% data variables.product.pat_v1 %} を使用する必要があります。このスコープは、IdP が要求の `Authorization` ヘッダーで指定する必要があります。 {% data variables.product.pat_v1_plural %} について詳しくは、「[{% data variables.product.pat_generic %} の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。

{% note %}

**注:** Enterprise 所有者は、SCIM API への要求の認証のために {% data variables.product.pat_v1 %} を生成して使用する必要があります。 {% ifversion ghes > 3.8 %}{% data variables.product.pat_v2_caps %} と {% endif %}GitHub アプリの呼び出し元は、現時点ではサポートされていません。

{% endnote %}

### SAML と SCIM データのマッピングについて
  
{% data variables.product.product_name %} インスタンスにより、SAML SSO で正常に認証された各ユーザーが SCIM ID にリンクされます。 ID を正常にリンクするには、SAML IdP と SCIM の統合で、各ユーザーに一致する SAML `NameID` と SCIM `userName` の値を使用する必要があります。

{% ifversion ghes > 3.7 %} {% note %}

**注:** {% data variables.product.product_name %} で SAML IdP として Azure AD が使用されている場合、{% data variables.product.product_name %} では、`NameID` と `userName` を使用する代わりに、最初にユーザーと一致するように SCIM `externalId` 要求と SAML `http://schemas.microsoft.com/identity/claims/objectidentifier` 要求も確認されます。 

{% endnote %} {% endif %}

### サポートされている SCIM ユーザー属性

SCIM API の `User` エンドポイントでは、要求のパラメーター内で次の属性がサポートされます。

| 名前 | 型 | 説明 |
| :- | :- | :- |
| `displayName` | String | 人が判読できるユーザーの名前。 |
| `name.formatted` | String | 表示用に書式設定された、すべてのミドル ネーム、役職、サフィックスを含む、ユーザーのフル ネーム。
| `name.givenName` | String | ユーザーの名。 |
| `name.familyName` | String | ユーザーの姓。 |
| `userName` | String | IdP によって生成されたユーザーのユーザー名。 使用する前に[正規化](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization)を行います。 
| `emails` | Array | ユーザーのメールの一覧。 |
| `roles` | Array | ユーザーのロールの一覧。 |
| `externalId` | String | この識別子は、IdP プロバイダーによって生成されます。 ユーザーの `externalId` は、IdP で、または [SCIM でプロビジョニングされたアイデンティティの一覧表示](#list-scim-provisioned-identities-for-an-enterprise)エンドポイントを使用し、{% data variables.product.product_name %} インスタンスのユーザーのユーザー名やメール アドレスなどの他の既知の属性でフィルター処理して見つけることができます。 |
| `id` | String | インスタンスの SCIM エンドポイントによって生成された識別子。 |
| `active` | Boolean | ID がアクティブである (`true`) か、中断する必要がある (`false`) かを示します。 |


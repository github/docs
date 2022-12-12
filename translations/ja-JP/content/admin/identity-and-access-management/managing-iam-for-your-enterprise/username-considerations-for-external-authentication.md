---
title: 外部認証のユーザー名に関する考慮事項
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}{% ifversion ghes %}認証に CAS、LDAP、または SAML{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %} を使うとき、{% endif %}{% data variables.product.product_name %} は、特定のルールに従って、{% ifversion ghec or ghae %}Enterprise での{% elsif ghes %}インスタンスでの{% endif %}各ユーザー アカウントのユーザー名を決定します。'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 8a330fe790665ef360bc5a5841e20ec8df002eb0
ms.sourcegitcommit: 00814c80b0f5fa76188c378a1196ef8fc5288113
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120752'
---
{% ifversion ghec %} {% note %}

**注:** この記事は、{% data variables.product.prodname_emus %} にのみ適用されます。 {% data variables.product.prodname_emus %} を使用せずに {% data variables.product.prodname_ghe_cloud %} を使用する場合、ユーザー名は {% data variables.product.prodname_dotcom %} ではなく、ユーザーによって作成されます。

{% endnote %} {% endif %}

## 外部認証を使用するユーザー名について

{% ifversion ghes %}

CAS、LDAP、または SAML を使用して、{% data variables.product.product_name %} の外部認証を構成できます。 詳細については、「[エンタープライズの認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)」を参照してください。

外部認証を使用する場合、{% data variables.location.product_location %} は、ユーザーが初めて外部認証システムを介して {% data variables.location.product_location %} にサインインしたときに、各ユーザーのユーザー名を自動的に作成します。

{% elsif ghec %}

{% data variables.product.prodname_emus %} のエンタープライズを使用する場合、エンタープライズのメンバーは、SAML ID プロバイダー (IdP) を介して {% data variables.product.prodname_dotcom %} にアクセスするように認証します。 詳細については、「[{% data variables.product.prodname_emus %} について](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)」および「[エンタープライズの認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)」を参照してください。

{% data variables.product.prodname_dotcom %} は、ユーザー アカウントが SCIM を介してプロビジョニングされるときに、IdP によって提供される識別子を正規化し、アンダースコアとショート コードを追加することで、各ユーザーのユーザー名を自動的に作成します。 複数の識別子が同じユーザー名に正規化されると、ユーザー名の競合が発生し、最初のユーザー アカウントのみが作成されます。 ユーザー名の問題を解決するには、正規化されたユーザー名が一意であり、39 文字の上限に収まるように IdP で変更を加えます。

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %}

{% elsif ghae %}

{% data variables.product.product_name %} は認証に SAML SSO を使用し、ユーザーが初めて ID プロバイダー (IdP) を介してサインインするときに、各ユーザーのユーザー名を自動的に作成します。

{% endif %}

{% ifversion ghec %}
## {% data variables.enterprise.prodname_managed_users %} のユーザー名について

{% data variables.enterprise.prodname_emu_enterprise %} を作成する際、エンタープライズのメンバーのユーザー名のサフィックスとして使用されるショート コードを選択します。 {% data reusables.enterprise-accounts.emu-shortcode %} SAML SSO を構成するセットアップ ユーザーのユーザー名は、 **@<em>SHORT-CODE</em>_admin** の形式になります。 

ID プロバイダーから新しいユーザーをプロビジョニングする場合、新しい {% data variables.enterprise.prodname_managed_user %} には、 **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>** の形式の {% data variables.product.prodname_dotcom %} ユーザー名が付きます。 <em>IDP-USERNAME</em> コンポーネントは、IdP から送信された SCIM `userName` 属性値を正規化することによって形成されます。 

| ID プロバイダー                 | {% data variables.product.prodname_dotcom %} のユーザー名  |
|-----------------------------------|----------------------|
| Azure Active Directory (Azure AD) | _IDP-USERNAME_ は、ゲスト アカウントの `#EXT#` を含まない UPN (ユーザー プリンシパル名) の `@` 文字の前の文字を正規化することによって形成されます。 |
| Okta                              | _IDP-USERNAME_ は、IdP によって提供される、正規化されたユーザー名属性です。               |

これらの規則により、IdP が複数のユーザーに同じ _IDP-USERNAME_ を提供する可能性があります。 たとえば、Azure AD の場合、次の UPN は同じユーザー名になります。

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`

これによりユーザー名が競合し、最初のユーザーのみがプロビジョニングされます。 詳細については、「[ユーザー名の問題の解決](#resolving-username-problems)」を参照してください。
{% endif %}

ユーザー名{% ifversion ghec %} (アンダースコアと短いコードを含む) {% endif %}は 39 文字を超えてはなりません。

## ユーザー名の正規化について

{% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} のユーザー アカウントのユーザー名には、英数字とダッシュ (`-`) のみを含めることができます。

{% ifversion ghec %}SAML 認証を構成すると、{% data variables.product.product_name %} は IdP から送信された SCIM `userName` 属性値を使用して、{% data variables.product.prodname_dotcom_the_website %} 上の対応するユーザー アカウントのユーザー名を決定します。 この値にサポートされていない文字が含まれている場合、{% data variables.product.product_name %} は、次の規則に従ってユーザー名を正規化します。
{% elsif ghes %}CAS、LDAP、または SAML 認証を構成する場合、{% data variables.product.product_name %} は、外部認証プロバイダーのユーザー アカウントの識別子を使用して、{% data variables.product.product_name %} 上の対応するユーザー アカウントのユーザー名を決定します。 識別子にサポートされていない文字が含まれている場合、{% data variables.product.product_name %} は次の規則に従ってユーザー名を正規化します。
{% elsif ghae %}SAML 認証を構成すると、{% data variables.product.product_name %} は IdP 上のユーザー アカウントの識別子を使用して、{% data variables.product.product_name %} の対応するユーザー アカウントのユーザー名を決定します。 識別子にサポートされていない文字が含まれている場合、{% data variables.product.product_name %} は次の規則に従ってユーザー名を正規化します。
{% endif %}

1. {% data variables.product.product_name %} は、アカウントのユーザー名に含まれている非英数字をダッシュに変換します。 たとえば、`mona.the.octocat` というユーザー名は `mona-the-octocat` に正規化されます。 変換されたユーザ名の先頭及び末尾はダッシュであってはならないことに注意してください。 2つの連続するダッシュを含めることもできません。

1. メール アドレスから作成されたユーザー名は、`@` 文字の前の正規化された文字から作成されます。

1. ドメイン アカウントから作成されるユーザー名は、`\\` 区切りの後の正規化された文字から作成されます。 

1. 複数のアカウントが変換後に同じ {% data variables.product.product_name %} のユーザー名になる場合、最初のユーザー アカウントだけが作成されます。 同じユーザ名のそれ以降のユーザは、サインインできません。 {% ifversion ghec %}詳細については、「[ユーザー名の問題の解決](#resolving-username-problems)」を参照してください。{% endif %}

### ユーザー名の正規化の例

| プロバイダーの識別子 | {% data variables.product.prodname_dotcom %} で正規化されたユーザー名 | 結果 |
| :- | :- | :- |
| The.Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | このユーザ名の作成は成功します。 |
| !The.Octocat | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | このユーザ名はダッシュで始まるので作成されません。 |
| The.Octocat! | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}` | このユーザ名はダッシュで終わるので作成されません。 |
| The!!Octocat | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | このユーザ名には連続する2つのダッシュが含まれるので作成されません。 |
| The!Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | このユーザ名は作成されません。 変換されたユーザ名は正当ですが、すでに存在しています。 |
| `The.Octocat@example.com` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | このユーザ名は作成されません。 変換されたユーザ名は正当ですが、すでに存在しています。 |
| `internal\\The.Octocat` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | このユーザ名は作成されません。 変換されたユーザ名は正当ですが、すでに存在しています。 |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | このユーザー名は、39 文字の制限を超えているため、作成されません。 |

{% ifversion not ghec %}
### SAML を使用したユーザー名の正規化について

{% ifversion ghes %}{% data variables.location.product_location %} に対して SAML 認証を構成した場合、{% endif %}{% data variables.product.product_name %} は、優先順位の降順で並べられた SAML 応答の次のアサーションの 1 つによって、各ユーザーのユーザー名を決定します。

1. カスタム `username` 属性 (定義済みかつ存在する場合)
1. `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` アサーション (存在する場合)
1. `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` アサーション (存在する場合)
1. `NameID` 要素

{% data variables.product.product_name %} には、他の属性が存在する場合でも `NameID` 要素が必要です。 詳細については、「[SAML 構成リファレンス](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)」をご覧ください。

{% data variables.product.product_name %} は、IdP からの `NameID` と {% data variables.location.product_location %} {% ifversion ghae %}内の{% else %}上の{% endif %}ユーザー名の間にマッピングを作成するため、`NameID` は永続的で一意であり、ユーザーのライフサイクルで変更される可能性はありません。

{% ifversion ghes %} {% note %}

**注**: IdP でユーザーの `NameID` が変更されない場合、ユーザーが {% data variables.location.product_location %} にサインインするときにエラー メッセージが表示されます。 ユーザーのアクセス権を復元するには、ユーザー アカウントの `NameID` マッピングを更新する必要があります。 詳細については、「[ユーザーの SAML `NameID` の更新](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)」を参照してください。

{% endnote %} {% endif %} {% endif %}

{% ifversion ghec %}
## ユーザー名の問題の解決

新しいユーザーをプロビジョニングするとき、ユーザー名 (アンダースコアとショート コードを含む) が 39 文字より長い場合、またはエンタープライズ内の既存のユーザーと競合する場合、プロビジョニングの試行は `409` エラーで失敗します。 

この問題を解決するには、正規化されたすべてのユーザー名が文字数制限内に収まり、一意になるように、IdP で次のいずれかの変更を加える必要があります。
- 問題を引き起こしている個々のユーザーの `userName` 属性値を変更します
- 全ユーザーの `userName` 属性のマッピングを変更します
- 全ユーザーのカスタムの `userName` 属性を構成します

属性のマッピングを変更すると、既存の {% data variables.enterprise.prodname_managed_users %} のユーザー名が更新されますが、アクティビティ履歴を含め、アカウントに関して他は何も変更されません。

{% note %}

**注:** {% data variables.contact.github_support %} は、属性マッピングのカスタマイズやカスタム式の構成に関するサポートを提供できません。 ご質問がある場合は、IdP にお問い合わせください。

{% endnote %}

### Azure AD に関するユーザー名の問題の解決

Azure AD でユーザー名の問題を解決するには、競合しているユーザーのユーザー プリンシパル名の値を変更するか、`userName` 属性の属性マッピングを変更します。 属性マッピングを変更する場合は、既存の属性を選択するか、式を使用して、プロビジョニングされたすべてのユーザーが一意の正規化されたエイリアスを持っていることを確認できます。

1. Azure ADで、{% data variables.product.prodname_emu_idp_application %} アプリケーションを開きます。
1. 左側のサイドバーで、 **[プロビジョニング]** をクリックします。
1. **[プロビジョニングの編集]** をクリックします。
1. **[マッピング]** を展開し、 **[Azure Active Directory ユーザーをプロビジョニングする]** をクリックします。
1. {% data variables.product.prodname_dotcom %} `userName` 属性マッピングをクリックします。 
1. 属性マッピングを変更します。
   - Azure AD の既存の属性を {% data variables.product.prodname_dotcom %} の `userName` 属性にマップするには、目的の属性フィールドをクリックします。 次に、プロビジョニング サイクルが約 40 分以内に発生するまで保存して待機します。
   - 既存の属性の代わりに式を使用するには、Mapping 型を「式」に変更し、この値をすべてのユーザーに対して一意にするカスタム式を追加します。 たとえば、`[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]` を使用できます。 詳細については、Microsoft Docs の「[Azure Active Directory で属性マッピングの式を記述するためのリファレンス](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/functions-for-customizing-application-data)」を参照してください。

### Okta に関するユーザー名の問題の解決

Okta でユーザー名の問題を解決するには、{% data variables.product.prodname_emu_idp_application %} アプリケーションの属性マッピング設定を更新します。

1. Okta で {% data variables.product.prodname_emu_idp_application %} アプリケーションを開きます。
1. **[サインオン]** をクリックします。
1. [設定] セクションで **[編集]** をクリックします。
1. "アプリケーション ユーザー名の形式" を更新します。
{% endif %}

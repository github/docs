---
title: SAML 構成リファレンス
shortTitle: SAML reference
intro: '{% ifversion ghec %}{% data variables.product.product_name %} 上の組織またはエンタープライズ{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %} 上のエンタープライズ{% endif %}の SAML メタデータを確認できます。また、使用できる SAML 属性と応答の要件の詳細を把握できます。'
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
ms.openlocfilehash: 896d1281d28268f669957bfbf0df43d3a1d6a76e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147683720'
---
## SAML 構成について

{% data variables.product.product_name %} への認証に SAML シングル サインオン (SSO) を使用するには、{% data variables.product.product_name %}{% endif %} に対するエンタープライズまたは組織の外部 SAML ID プロバイダー (IdP) と {% ifversion ghes %}{% data variables.product.product_location %}{% elsif ghec %}{% data variables.product.product_location %}{% elsif ghae %}の企業の両方を構成する必要があります。 SAML 構成では、{% data variables.product.product_name %} は SAML サービス プロバイダーとして機能します。

{% data variables.product.product_name %} 向けの SAML SSO を構成する場合は、SAML IdP から一意の値を入力する必要があります。また、IdP では {% data variables.product.product_name %} から一意の値を入力する必要もあります。 {% data variables.product.product_name %} の SAML SSO の構成に関する詳しい情報については、「[Enterprise 向けの SAML シングルサインオンを設定する](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %}」または「[Organization 向けの SAML シングルサインオンを有効化してテストする](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}」を参照してください。

## SAMLのメタデータ

{% ifversion ghec %}

{% data variables.product.product_name %} の SP メタデータは、SAML SSO を使用する Organization または Enterprise のいずれかに使用できます。 {% data variables.product.product_name %} では、`urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` バインディングを使用します。

### 組織

Enterprise 内の個々の Organization 向けの SAML SSO を構成できます。 また、{% data variables.product.product_name %} で個々の Organization を使用し、Enterprise アカウントを使用しない場合は、Organization 向けの SAML SSO を構成できます。 詳細については、「[Organization で SAML シングル サインオンを管理する](/organizations/managing-saml-single-sign-on-for-your-organization)」を参照してください。

{% data variables.product.product_location %} 上の Organization の SP メタデータは `https://github.com/orgs/ORGANIZATION/saml/metadata` で入手できます。ここで、**ORGANIZATION** は、{% data variables.product.product_location %} 上でご使用の Organization の名前です。

| 値 | その他の名前 | 説明 | 例 |
| :- | :- | :- | :- |
| SP エンティティ ID | SP URL、対象ユーザー制限 | {% data variables.product.product_location %} 上の Organization のトップレベル URL | `https://github.com/orgs/ORGANIZATION` |
| SP アサーションコンシューマーサービス (ACS) URL | 応答、受信者、または宛先 URL | IdP が SAML レスポンスを送信する URL | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| SP シングルサインオン (SSO) URL | | IdP が SSO を開始する URL |  `https://github.com/orgs/ORGANIZATION/saml/sso` |

### Enterprise

{% data variables.product.product_location %} 上の Enterprise の SP メタデータは `https://github.com/enterprises/ENTERPRISE/saml/metadata` で入手できます。ここで、**ENTERPRISE** は、{% data variables.product.product_location %} 上でご使用の Enterprise の名前です。

| 値 | その他の名前 | 説明 | 例 |
| :- | :- | :- | :- |
| SP エンティティ ID | SP URL、対象ユーザー制限 | {% data variables.product.product_location %} 上の Enterprise のトップレベル URL | `https://github.com/enterprises/ENTERPRISE` |
| SP アサーションコンシューマーサービス (ACS) URL | 応答、受信者、または宛先 URL | IdP が SAML レスポンスを送信する URL | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| SP シングルサインオン (SSO) URL | | IdP が SSO を開始する URL |  `https://github.com/enterprises/ENTERPRISE/saml/sso` |

{% elsif ghes %}

{% data variables.product.product_location %} の SP メタデータは、`http(s)://HOSTNAME/saml/metadata` で入手できます。ここで、**HOSTNAME** は、インスタンスのホスト名です。 {% data variables.product.product_name %} では、`urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` バインディングを使用します。

| 値 | その他の名前 | 説明 | 例 |
| :- | :- | :- | :- |
| SP エンティティ ID | SP URL、対象ユーザー制限 | {% data variables.product.product_name %} のトップレベル URL | `http(s)://HOSTNAME`
| SP アサーションコンシューマーサービス (ACS) URL | 応答、受信者、または宛先 URL | IdP が SAML レスポンスを送信する URL | `http(s)://HOSTNAME/saml/consume` |
| SP シングルサインオン (SSO) URL | | IdP が SSO を開始する URL |  `http(s)://HOSTNAME/sso` |

{% elsif ghae %}

{% data variables.product.product_name %} 上の Enterprise の SP メタデータは、`https://HOSTNAME/saml/metadata` で入手できます。ここで、**HOSTNAME** は、{% data variables.product.product_name %} 上の Enterprise のホスト名です。 {% data variables.product.product_name %} では、`urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` バインディングを使用します。

| 値 | その他の名前 | 説明 | 例 |
| :- | :- | :- | :- |
| SP エンティティ ID | SP URL、対象ユーザー制限 | {% data variables.product.product_name %} のトップレベル URL | `https://HOSTNAME` |
| SP アサーションコンシューマーサービス (ACS) URL | 応答、受信者、または宛先 URL | IdP が SAML レスポンスを送信する URL | `https://HOSTNAME/saml/consume` |
| SP シングルサインオン (SSO) URL | | IdP が SSO を開始する URL |  `https://HOSTNAME/sso` |

{% endif %}

## SAMLの属性

{% data variables.product.product_name %} では、次の SAML の属性を使用できます。{% ifversion ghes %} 属性名は、`administrator` 属性を除いて、管理コンソールで変更できます。 詳しい情報については、「[管理コンソールへのアクセス](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)」を参照してください。{% endif %}

| 名前 | 必須 | 説明 |
| :- | :- | :- |
| `NameID` | はい | 永続ユーザ識別子。 任意の名前識別子の形式を使用できます。 {% ifversion ghec %}{% data variables.product.prodname_emus %} で Enterprise を使用する場合、{% endif %}代替アサーションのいずれかが指定されていない限り、{% data variables.product.product_name %} は、`NameID` 要素を正規化し、ユーザー名として使用します。 詳しい情報については、「[外部認証のユーザー名に関する考慮事項](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)」を参照してください。<br><br>{% note %}**メモ:** 人間が判別できる、永続的識別子を使うことが重要です。 `urn:oasis:names:tc:SAML:2.0:nameid-format:transient` のような一時的な識別子の形式を使うと、サインインのたびにアカウントが再リンクされます。このことは、承認管理に悪影響を及ぼします。{% endnote %}  |
| `SessionNotOnOrAfter` | No | 関連付けられたセッションが {% data variables.product.product_name %} によって無効化される日付。 無効になった後、{% ifversion ghec or ghae %}Enterprise のリソース {% elsif ghes %}{% data variables.product.product_location %}{% endif %} にアクセスするには、ユーザーはもう一度認証を行う必要があります。 詳しい情報については、「[セッションの継続時間とタイムアウト](#session-duration-and-timeout)」を参照してください。 |
{%- ifversion ghes or ghae %} | `administrator` | いいえ | 値が `true`の場合、{% data variables.product.product_name %} によって、ユーザーは自動的に{% ifversion ghes %}サイト管理者{% elsif ghae %}Enterprise オーナー{% endif %}に昇格されます。 この属性を `true` 以外に設定すると、値が空白でない限り、降格になります。 この属性を省略するか、値を空白にすると、ユーザーのロールは変更されません。 | | `username` | いいえ | {% data variables.product.product_location %} のユーザー名。 | {%- endif %} | `full_name` | いいえ | {% ifversion ghec %}Enterprise 向けの SAML SSO を構成し、{% data variables.product.prodname_emus %} を使用する場合、{% else %} {% endif %} ユーザーのプロファイル ページに表示するユーザーのフル ネーム。 | | `emails` | いいえ | ユーザーのメール アドレス。{% ifversion ghes or ghae %} 複数のアドレスを指定できます。{% endif %}{% ifversion ghec or ghes %} {% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} 間でライセンス使用状況を同期する場合、{% data variables.product.prodname_github_connect %} では、`emails` を使用して、製品間で一意のユーザーを識別します。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} 間のライセンス使用状況を同期する](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)」を参照してください。{% endif %} | | `public_keys` | いいえ | {% ifversion ghec %}Enterprise 向けの SAML SSO を構成し、{% data variables.product.prodname_emus %} を使用する場合、{% else %} {% endif %} ユーザーのパブリック SSH キー。 複数のキーを指定できます。 | | `gpg_keys` | いいえ | {% ifversion ghec %}Enterprise 向けの SAML SSO を構成し、{% data variables.product.prodname_emus %} を使用する場合、{% else %} {% endif %} ユーザーの GPG キー。 複数のキーを指定できます。 |

属性に複数の値を指定するには、複数の `<saml2:AttributeValue>` 要素を使用します。

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## SAML 応答の要件

{% data variables.product.product_name %} では、IdP からの応答メッセージが次の要件を満たしている必要があります。

- IdP では、ルート応答ドキュメントで `<Destination>` 要素を指定し、ルート応答ドキュメントが署名されている場合にのみ ACS URL と一致する必要があります。 IdP によってアサーションに署名されている場合、{% data variables.product.product_name %} ではアサーションが無視されます。
- IdP では常に、`<AudienceRestriction>` 要素の一部として `<Audience>` 要素を指定する必要があります。 値は、{% data variables.product.product_name %} の `EntityId` と一致する必要があります。{% ifversion ghes or ghae %} この値は、{% data variables.product.product_location %} にアクセスする URL です。たとえば、{% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`、`https://SUBDOMAIN.github.us`、`https://SUBDOMAIN.ghe.com`{% endif %} などです。{% endif %}
  
  {%- ifversion ghec %}
  - Organization の SAML を構成する場合、この値は `https://github.com/orgs/ORGANIZATION`です。
  - Enterprise の SAML を構成する場合、この値は `https://github.com/enterprises/ENTERPRISE`です。
  {%- endif %}
- IdP では、応答内の各アサーションをデジタル署名で保護する必要があります。 これは、個々の `<Assertion>` 要素に署名するか、`<Response>` 要素に署名することで実現できます。
- IdP では、`<Subject>` 要素の一部として `<NameID>` 要素を指定する必要があります。 任意の永続的な名前識別子の形式を使用できます。
- IdP には `Recipient` 属性を含める必要があり、これは ACS URL に設定される必要があります。 次の例は、属性を示しています。

     ```xml
     <samlp:Response ...>
       <saml:Assertion ...>
         <saml:Subject>
           <saml:NameID ...>...</saml:NameID>
           <saml:SubjectConfirmation ...>
             <saml:SubjectConfirmationData Recipient="https://{% ifversion ghec %}github.com/enterprises/ENTERPRISE{% elsif ghes %}HOSTNAME{% elsif ghae %}SUBDOMAIN.ghe.com{% endif %}/saml/consume" .../>
           </saml:SubjectConfirmation>
         </saml:Subject>
         <saml:AttributeStatement>
           <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
             <saml:AttributeValue>monalisa</saml:AttributeValue>
           </saml:Attribute>
         </saml:AttributeStatement>
       </saml:Assertion>
     </samlp:Response>
     ```

## セッションの継続期間とタイムアウト

ユーザーが IdP で認証を行い、無期限に承認されるのを防ぐために、{% data variables.product.product_name %} では、{% ifversion ghec or ghae %}Enterprise のリソース{% elsif ghes %}{% data variables.product.product_location %}{% endif %}へのアクセス権を持つ各ユーザー アカウントのセッションを定期的に無効にします。 無効になると、ユーザーは IdP でもう一度認証を行う必要があります。 既定では、IdP で `SessionNotOnOrAfter` 属性の値がアサートされない場合、{% data variables.product.product_name %} では、IdP による認証に成功してから {% ifversion ghec %}24 時間{% elsif ghes or ghae %}1 週間{% endif %}後にセッションを無効にします。

セッションの持続期間をカスタマイズするために、IdP で `SessionNotOnOrAfter` 属性の値を定義できる場合があります。 24 時間未満の値を定義すると、{% data variables.product.product_name %} は、{% data variables.product.product_name %} がリダイレクトを開始するたびに、ユーザーに認証を求める場合があります。

{% ifversion ghec %}認証エラーを防ぐため、最短セッション期間を 4 時間にすることをお勧めします。 詳しくは、[SAML 認証のトラブルシューティング](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate)に関する記事をご覧ください。
{% endif %}

{% note %}

**注**:

- Azure AD の場合、SAML トークンの構成可能な有効期間ポリシーでは、{% data variables.product.product_name %} のセッション タイムアウトは制御されません。
- Okta は現在、{% data variables.product.product_name %} での SAML 認証中に `SessionNotOnOrAfter` 属性を送信しません。 詳しい情報については、Okta にお問い合わせください。

{% endnote %}

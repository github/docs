---
title: SAML認証
shortTitle: Troubleshoot SAML SSO
intro: 'SAML シングル サインオン (SSO) を使っていて、ユーザーが {% data variables.location.product_location %}にアクセスするための認証を行うことができない場合、問題のトラブルシューティングを行うことができます。'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: d15a3686045a4d570feb60cade2320f939cc0d86
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107254'
---
{% ifversion ghes %}
## SAML 認証に関する問題について

{% data variables.product.product_name %} は、 _/var/log/github/auth.log_ の認証ログに失敗した SAML 認証のエラーメッセージをログ記録します。 このログ ファイルで応答を確認したり、より詳細なログ記録を構成したりすることもできます。

SAML 応答の要件の詳細については、「[SAML 構成リファレンス](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements)」を参照してください。

## SAML デバッグの構成

{% data variables.product.product_name %} を構成して、SAML 認証の試行ごとに詳細なデバッグ ログを _/var/log/github/auth.log_ に書き込むことができます。 この追加の出力を使用して、失敗した認証試行のトラブルシューティングを行うことができる場合があります。

{% warning %}

**警告**:

- SAML デバッグは一時的にのみ有効にし、トラブルシューティングが完了したらすぐにデバッグを無効にします。 デバッグを有効のままにすると、ログのサイズが通常よりも大幅に速くなり、{% data variables.product.product_name %} のパフォーマンスに悪影響を及ぼす可能性があります。
- 運用環境で設定を適用する前に、ステージング環境で {% data variables.location.product_location %}の新しい認証設定をテストします。 詳細については、「[ステージング インスタンスのセットアップ](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)」を参照してください。

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
1. [SAML デバッグ] でドロップダウンを選択し、 **[有効]** をクリックします。

   ![SAML デバッグを有効にするドロップダウンのスクリーンショット](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. SAML IdP を介して {% data variables.location.product_location %}へのサインインを試みます。

1. {% data variables.location.product_location %}で _/var/log/github/auth.log_ のデバッグ出力を確認します。

1. トラブルシューティングが完了したら、ドロップダウンを選択し、 **[無効]** をクリックします。

   ![SAML デバッグを無効にするドロップダウンのスクリーンショット](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

## _auth.log_ での応答のデコード

_auth.log_ の一部の出力は Base64 でエンコードされる場合があります。 管理シェルにアクセスし、{% data variables.location.product_location %}の `base64` ユーティリティを使用して、これらの応答をデコードできます。 詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。

```shell
$ base64 --decode ENCODED_OUTPUT
```

## エラー:「別のユーザがすでにアカウントを所有しています」

ユーザーが SAML 認証を使って初めて {% data variables.location.product_location %}にサインインすると、{% data variables.product.product_name %} によってインスタンスにユーザー アカウントが作成され、SAML `NameID` がアカウントにマップされます。

ユーザーが再びサインインすると、{% data variables.product.prodname_ghe_server %} は、アカウントの `NameID` マッピングと IdP の応答を比較します。 IdP の応答の `NameID` が、{% data variables.product.product_name %} がユーザーに対して想定している `NameID` と一致しなくなると、サインインは失敗します。 ユーザには次のメッセージが表示されます。

> 別のユーザが既にアカウントを所有しています。 管理者に認証ログを確認するようご依頼ください。

このメッセージは通常、その人のユーザ名またはメールアドレスが IdP で変更されたということを示します。 {% data variables.product.prodname_ghe_server %} のユーザー アカウントの `NameID` マッピングが、IdP 上のユーザーの `NameID` と一致していることを確認します。 詳細については、「[ユーザーの SAML `NameID` の更新](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)」を参照してください。

## SAMLレスポンスが署名されていなかった場合、あるいは署名が内容とマッチしなかった場合、authログに以下のエラーメッセージが残されます。

`Recipient` が {% data variables.location.product_location %}の ACS URL と一致しない場合、ユーザーが認証を試みたときに、次の 2 つのエラー メッセージのいずれかが認証ログに表示されます。

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

IdP の `Recipient` の値を、{% data variables.location.product_location %}の完全な ACS URL に設定してください。 たとえば、`https://ghe.corp.example.com/saml/consume` のようにします。

## エラー:「SAML レスポンスが署名されていないか、変更されています」

IdP が SAML レスポンスに署名しない場合、または署名が内容と一致しない場合、次のエラーメッセージが認証ログに表示されます。

```
SAML Response is not signed or has been modified.
```

IdP で {% data variables.product.product_name %} アプリケーションの署名済みアサーションを設定していることを確認してください。

## エラー:「Audience が無効です」または「アサーションが見つかりません」

IdP の応答に `Audience` の値がないか、または正しくない場合は、認証ログに次のエラー メッセージが表示されます。

```
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

IdP の `Audience` の値を {% data variables.location.product_location %}の `EntityId` に設定します。これは、インスタンスの完全な URL です。 たとえば、「 `https://ghe.corp.example.com` 」のように入力します。
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %} {% data reusables.saml.authentication-loop %} {% endif %}

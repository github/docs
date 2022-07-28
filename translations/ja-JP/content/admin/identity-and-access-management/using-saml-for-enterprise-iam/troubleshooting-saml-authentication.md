---
title: SAML認証
shortTitle: Troubleshoot SAML SSO
intro: 'If you use SAML single sign-on (SSO) and people are unable to authenticate to access {% data variables.product.product_location %}, you can troubleshoot the problem.'
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
---

{% ifversion ghes %}
## About problems with SAML authentication

{% data variables.product.product_name %} logs error messages for failed SAML authentication in the authentication log at _/var/log/github/auth.log_. You can review responses in this log file, and you can also configure more verbose logging.

For more information about SAML response requirements, see "[SAML configuration reference](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements)."

## Configuring SAML debugging

You can configure {% data variables.product.product_name %} to write verbose debug logs to _/var/log/github/auth.log_ for every SAML authentication attempt. You may be able to troubleshoot failed authentication attempts with this extra output.

{% warning %}

**警告**:

- Only enable SAML debugging temporarily, and disable debugging immediately after you finish troubleshooting. If you leave debugging enabled, the size of your log may increase much faster than usual, which can negatively impact the performance of {% data variables.product.product_name %}.
- Test new authentication settings for {% data variables.product.product_location %} in a staging environment before you apply the settings in your production environment. 詳しい情報については "[ステージングインスタンスのセットアップ](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)"を参照してください。

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "SAML debugging", select the drop-down and click **Enabled**.

   ![Screenshot of drop-down to enable SAML debugging](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. Attempt to sign into {% data variables.product.product_location %} through your SAML IdP.

1. Review the debug output in _/var/log/github/auth.log_ on {% data variables.product.product_location %}.

1. When you're done troubleshooting, select the drop-down and click **Disabled**.

   ![Screenshot of drop-down to disable SAML debugging](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

## Decoding responses in _auth.log_

Some output in _auth.log_ may be Base64-encoded. You can access the administrative shell and use the `base64` utility on {% data variables.product.product_location %} to decode these responses. 詳しい情報については「[管理シェル（SSH）にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。

```shell
$ base64 --decode <em>ENCODED OUTPUT</em>
```

## エラー:「別のユーザがすでにアカウントを所有しています」

When a user signs into {% data variables.product.product_location %} for the first time with SAML authentication, {% data variables.product.product_name %} creates a user account on the instance and maps the SAML `NameID` to the account.

ユーザが再度サインインすると、{% data variables.product.prodname_ghe_server %} はアカウントの `NameID` マッピングを IdP のレスポンスと比較します。 IdP のレスポンスの `NameID` が、{% data variables.product.product_name %} がユーザに対して想定している `NameID` とマッチしなくなると、サインインは失敗します。 ユーザには次のメッセージが表示されます。

> 別のユーザが既にアカウントを所有しています。 管理者に認証ログを確認するようご依頼ください。

このメッセージは通常、その人のユーザ名またはメールアドレスが IdP で変更されたということを示します。 Ensure that the `NameID` mapping for the user account on {% data variables.product.prodname_ghe_server %} matches the user's `NameID` on your IdP. For more information, see "[Updating a user's SAML `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)."

## SAMLレスポンスが署名されていなかった場合、あるいは署名が内容とマッチしなかった場合、authログに以下のエラーメッセージが残されます。

If the `Recipient` does not match the ACS URL for {% data variables.product.product_location %}, one of the following two error messages will appear in the authentication log when a user attempts to authenticate.

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

Ensure that you set the value for `Recipient` on your IdP to the full ACS URL for {% data variables.product.product_location %}. たとえば、`https://ghe.corp.example.com/saml/consume` などです。

## エラー:「SAML レスポンスが署名されていないか、変更されています」

IdP が SAML レスポンスに署名しない場合、または署名が内容と一致しない場合、次のエラーメッセージが認証ログに表示されます。

```
SAML Response is not signed or has been modified.
```

IdP で {% data variables.product.product_name %} アプリケーションの署名済みアサーションを設定していることを確認してください。

## エラー:「Audience が無効です」または「アサーションが見つかりません」

IdP のレスポンスに `Audience` の値がないか、または正しくない場合、次のエラーメッセージが認証ログに表示されます。

```
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

Ensure that you set the value for `Audience` on your IdP to the `EntityId` for {% data variables.product.product_location %}, which is the full URL to your instance. たとえば、`https://ghe.corp.example.com` などです。
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %}
{% data reusables.saml.authentication-loop %}
{% endif %}

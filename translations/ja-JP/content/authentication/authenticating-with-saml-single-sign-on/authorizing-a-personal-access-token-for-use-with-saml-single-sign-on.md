---
title: SAMLシングルサインオンで利用するために個人アクセストークンを認可する
intro: SAMLシングルサインオン (SSO) を使う Organization で個人アクセストークンを使うためには、まずそのキーを認可しなければなりません。
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: PAT with SAML
---

既存の個人アクセストークンを認可することも、[新しい個人アクセストークンを作成](/github/authenticating-to-github/creating-a-personal-access-token)して認可することもできます。

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
3. Next to the token you'd like to authorize, click **Configure SSO**. ![Screenshot of the dropdown menu to configure SSO for a personal access token](/assets/images/help/settings/sso-allowlist-button.png)
4. To the right of the organization you'd like to authorize the token for, click **Authorize**. ![トークン認可ボタン](/assets/images/help/settings/token-authorize-button.png)

## 参考リンク

- [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)
- [SAML シングルサインオンでの認証について](/articles/about-authentication-with-saml-single-sign-on)

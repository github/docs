---
title: SAMLシングルサインオンで利用するために個人アクセストークンを認可する
intro: SAMLシングルサインオン (SSO) を使う Organization で個人アクセストークンを使うためには、まずそのキーを認可しなければなりません。
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - SSO
---

既存の個人アクセストークンを認可することも、[新しい個人アクセストークンを作成](/github/authenticating-to-github/creating-a-personal-access-token)して認可することもできます。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
3. 認可したいトークンの隣の [**Enable SSO**] (SSO を有効化) または [**Disable SSO**] (SSOを無効化) をクリックします。 ![SSO トークン認可ボタン](/assets/images/help/settings/sso-allowlist-button.png)
4. アクセストークンを認可する Organization を見つけます。
4. [**Authorize**] をクリックします。 ![トークン認可ボタン](/assets/images/help/settings/token-authorize-button.png)

### 参考リンク

- [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)
- [SAML シングルサインオンでの認証について](/articles/about-authentication-with-saml-single-sign-on)

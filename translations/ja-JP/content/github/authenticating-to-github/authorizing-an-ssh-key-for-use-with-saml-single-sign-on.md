---
title: SAMLシングルサインオンで利用するためにSSHキーを認可する
intro: 'SAML シングルサインオン (SSO) を使う Organization で SSH キーを使うためには、まずそのキーを認可しなければなりません。'
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

既存の SSH キーを認可することも、新しい SSH キーを作成して認可することもできます。 新しい SSH キーの作成に関する詳しい情報については「[新しい SSH キーを生成して ssh-agent へ追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

{% note %}

**メモ:** SSH キーの認可が Organization によって取り消された場合、同じキーを再度認可することはできません。 新しい SSH キーを生成して認可する必要があります。 新しい SSH キーの作成に関する詳しい情報については「[新しい SSH キーを生成して ssh-agent へ追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. 認可したい SSH キーの隣の [**Enable SSO**] (SSO を有効化) または [**Disable SSO**] (SSOを無効化) をクリックします。 ![SSO トークン認可ボタン](/assets/images/help/settings/ssh-sso-button.png)
4. SSH キーを認可する Organization を見つけます。
5. [**Authorize**] をクリックします。 ![トークン認可ボタン](/assets/images/help/settings/ssh-sso-authorize.png)

### 参考リンク

- [既存の SSH キーのチェック](/articles/checking-for-existing-ssh-keys)
- [SAML シングルサインオンでの認証について](/articles/about-authentication-with-saml-single-sign-on)

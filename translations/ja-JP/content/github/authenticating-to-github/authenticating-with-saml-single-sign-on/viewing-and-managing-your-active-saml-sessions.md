---
title: アクティブな SAML セッションの表示と管理
intro: セキュリティ設定でアクティブな SAML セッションを表示および削除することができます。
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/viewing-and-managing-your-active-saml-sessions
versions:
  free-pro-team: '*'
topics:
  - SSO
---
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. [Sessions] で、アクティブな SAML セッションを確認できます。 ![アクティブな SAML セッションのリスト](/assets/images/help/settings/saml-active-sessions.png)
4. セッションの詳細を表示するには、[**See more**] をクリックします。 ![SAML セッションの詳細を開くボタン](/assets/images/help/settings/saml-expand-session-details.png)
5. セッションを取り消すには、[**Revoke SAML**] をクリックします。 ![SAML セッションを削除するボタン](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **メモ:** セッションを削除すると、その Organization に対する SAML 認証が削除されます。 Organization に再びアクセスするには、アイデンティティプロバイダを介してシングルサインオンする必要があります。 詳細は「[SAML SSO による認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」を参照してください。

  {% endnote %}

### 参考リンク

- 「[SAML SSO による認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」

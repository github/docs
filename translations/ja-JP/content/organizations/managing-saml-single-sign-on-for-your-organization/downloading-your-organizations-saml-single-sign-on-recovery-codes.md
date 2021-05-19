---
title: Organization の SAML シングルサインオンのリカバリコードをダウンロードする
intro: 'Organization のアイデンティティプロバイダを利用できない場合でも変わりなく {% data variables.product.product_name %} にアクセスできるよう、Organization の管理者は Organization 用に SAML シングルサインオンのリカバリコードをダウンロードする必要があります。'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

リカバリコードは共有や配布しないでください。 [LastPass](https://lastpass.com/)、[1Password](https://1password.com/)、[Keeper](https://keepersecurity.com/) などのパスワードマネージャで保存することをおすすめします。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
5. [SAML single sign-on] の下にあるリカバリコードに関する注意書きの [**Save your recovery codes**] をクリックします。 ![リカバリコードを表示し保存するリンク](/assets/images/help/saml/saml_recovery_codes.png)
6. [**Download**]、[**Print**]、または [**Copy**] をクリックしてリカバリコードを保存します。 ![リカバリコードをダウンロード、印刷、コピーするボタン](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **メモ:** リカバリコードがあれば IdP を使用できないときに {% data variables.product.product_name %}に戻れます。 新しいリカバリコードを生成すると、「シングルサインオンのリカバリコード」ページに表示されているリカバリコードは自動的に更新されます。

  {% endnote %}

7. リカバリコードを {% data variables.product.product_name %}へのアクセス回復のために一度使用すると、再利用はできません。 {% data variables.product.product_name %} へのアクセスは、シングルサインオンを使用してサインインするか聞かれるまでの 24 時間だけ有効です。

### 参考リンク

- [SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)
- 「[アイデンティティプロバイダが利用できない場合の Organization へのアクセス](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)」

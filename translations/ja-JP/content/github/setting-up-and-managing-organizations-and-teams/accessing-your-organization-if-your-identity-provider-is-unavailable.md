---
title: アイデンティティプロバイダが利用できない場合の Organization へのアクセス
intro: 'アイデンティティプロバイダが利用できない場合でも、Organization の管理者はシングルサインオンをバイパスし、リカバリコードを利用して {% data variables.product.product_name %}にサインインできます。'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/accessing-your-organization-if-your-identity-provider-is-unavailable
versions:
  free-pro-team: '*'
---

Organization の管理者は、シングルサインオンをバイパスするために、[ダウンロード済み、あるいは保存済みのリカバリコードのいずれか](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)を利用できます。 そうしたリカバリコードを、すでに [ LastPass](https://lastpass.com/)、[1Password](https://1password.com/)、[ Keeper](https://keepersecurity.com/) などのパスワードマネージャーに保存しているかもしれません。

{% note %}

**メモ:** リカバリコードは一度しか使えず、順番に使わなければなりません。 リカバリコードにより、アクセスが 24 時間許可されます。

{% endnote %}

1. シングルサインオンをバイパスするには、シングルサインオンダイアログの下部で、[**Use a recovery code**] をクリックします。 ![リカバリコードを入力するためのリンク](/assets/images/help/saml/saml_use_recovery_code.png)
2. [Recovery Code] フィールドにリカバリコードを入力します。 ![リカバリコードを入力するフィールド](/assets/images/help/saml/saml_recovery_code_entry.png)
3. [**Verify**] をクリックします。 ![リカバリコードを検証するボタン](/assets/images/help/saml/saml_verify_recovery_codes.png)

一度使用したリカバリコードは二度と使用できないということを覚えておいてください。 リカバリコードは再利用できません。

### 参考リンク

- [SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)

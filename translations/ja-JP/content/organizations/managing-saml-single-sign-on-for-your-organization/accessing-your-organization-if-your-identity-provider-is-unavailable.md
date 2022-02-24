---
title: アイデンティティプロバイダが利用できない場合の Organization へのアクセス
intro: 'アイデンティティプロバイダが利用できない場合でも、Organization の管理者はシングルサインオンをバイパスし、リカバリコードを利用して {% data variables.product.product_name %}にサインインできます。'
redirect_from:
  - /articles/accessing-your-organization-if-your-identity-provider-is-unavailable
  - /github/setting-up-and-managing-organizations-and-teams/accessing-your-organization-if-your-identity-provider-is-unavailable
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 利用不可能なアイデンティティプロバイダ
---

Organization の管理者は、シングルサインオンをバイパスするために、[ダウンロード済み、あるいは保存済みのリカバリコードのいずれか](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)を利用できます。 You may have saved these to a password manager, such as [LastPass](https://lastpass.com/) or [1Password](https://1password.com/).

{% data reusables.saml.recovery-code-caveats %}

{% data reusables.saml.recovery-code-access %}

## 参考リンク

- [SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)

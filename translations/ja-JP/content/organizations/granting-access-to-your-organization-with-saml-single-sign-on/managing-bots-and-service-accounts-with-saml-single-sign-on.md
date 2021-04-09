---
title: SAML シングルサインオンでボットおよびサービスアカウントを管理する
intro: SAML シングルサインオンを有効にしている Organization は、ボットおよびサービスアカウントへのアクセスを維持できます。
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

ボットおよびサービスアカウントへのアクセスを維持するために、Organization の管理者はその Organization に対して SAML シングルサインオンを[有効化](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)することはできますが、[強制](/articles/enforcing-saml-single-sign-on-for-your-organization)することは**できません**。 Organization に対して SAML シングルサインオンを強制する必要がある場合は、アイデンティティプロバイダ (IdP) を利用してボットまたはサービスアカウントに外部アイデンティティを作成する方法があります。

{% warning %}

**注釈:** Organization に対して SAML シングルサインオンを強制しておらず、ボットおよびサービスアカウントに対して IdP で外部 ID を設定して**いない**場合、それらは Organization から削除されます。

{% endwarning %}

### 参考リンク

- [SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)

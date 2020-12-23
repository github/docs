---
title: Organization で SAML シングルサインオンを施行する
intro: Organization のオーナーと管理者は、SAML SSO を施行して Organization のすべてのメンバーがアイデンティティプロバイダを介して認証する必要があるようにできます。
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
versions:
  free-pro-team: '*'
---

Organization で SAML SSO を施行すると、SAML アイデンティティプロバイダ (IdP) を介して認証していないすべてのメンバーは、管理者も含め、Organization から削除され、削除について知らせるメールが届きます。 Organization の IdP で 外部アイデンティティを設定していないボットとサービスアカウントも削除されます。 ボットとサービスアカウントの詳細については、「[SAML シングルサインオンでボットおよびサービスアカウントを管理する](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)」を参照してください。 Organization のメンバーが正常にシングルサインオンを完了すると、メンバーを復元できます。

Organization が、Enterprise アカウントによって所有されている場合、Enterprise アカウントに SAML を有効化すると、Organization レベルの SAML 設定がオーバーライドされます。 詳細は、「[Enterprise アカウントでセキュリティ設定を強制する](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)」を参照してください。

{% tip %}

**ヒント:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

1. Organization で SAML SSO を有効化およびテストします。 この処理の詳細については、「[Organization での SAML シングルサインオンの有効化とテスト](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)」を参照してください。
2. [**Require SAML SSO authentication for all members of the SAML SSO Org organization**] を選択した後、IdP を介して認証をしていない Organization のメンバーが表示されます。 SAML SSO を施行すると、これらのメンバーは Organization から削除されます。
3. [**Enforce SAML SSO**] をクリックして SAML SSO を施行して、リストされた Organization のメンバーを削除します。

### 参考リンク

- [SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)

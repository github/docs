---
title: Enterprise アカウントで Organization の Team 同期を管理する
intro: 'アイデンティティプロバイダ (IdP) と {% data variables.product.product_name %} の間のチーム同期を有効にして、Enterprise アカウントが所有する Organization が IdP グループを介してチームメンバーシップを管理できるようにすることができます。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  free-pro-team: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account
---

### Enterprise アカウントのチーム同期について

Azure AD を IdP として使用する場合は、Enterprise アカウントのチーム同期を有効にして、Organization のオーナーとチームメンテナが、Enterprise アカウントが所有する Organization のチームを IdP グループと同期できるようにすることができます。

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Organization ごとの Team 同期の設定と管理も可能です。 詳細は「[Organization の Team 同期を管理する](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」を参照してください。

### 必要な環境

あなた、または Azure AD の管理者は Azure AD のグローバル管理者、または特権ロール管理者になっている必要があります。

サポート対象の IdP で、Enterprise アカウントの Organization に対して SAMLシングルサインオンを有効にする必要があります。 詳しい情報については、「[Enterprise アカウントで Organization 用に SAML シングルサインオンを有効にする](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)」参照してください。

SAML SSO とサポートされる IdP を使用して Enterprise アカウントに認証される必要があります。 詳しい情報については「[SAMLシングルサインオンで認証する](/articles/authenticating-with-saml-single-sign-on)」を参照してください。

### Azure AD で Team の同期を管理する

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Enterprise アカウントに接続する IdP のテナント詳細を確認してから、[**Approve**] をクリックします。 ![特定の IdP テナントに対して、Team の同期を有効化するペンディングリクエストと、リクエストを承認またはキャンセルするオプション](/assets/images/help/teams/approve-team-synchronization.png)
8. Team 同期を無効にするには、 [**Disable team synchronization**] をクリックします。 ![Team の同期を無効化する](/assets/images/help/teams/disable-team-synchronization.png)

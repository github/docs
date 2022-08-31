---
title: Managing team synchronization for organizations in your enterprise
intro: 'You can enable team synchronization between Azure AD and {% data variables.product.product_name %} to allow organizations owned by your enterprise account to manage team membership through IdP groups.'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
shortTitle: Teamの同期の管理
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## Enterprise アカウントのチーム同期について

If you use SAML at the enterprise level with Azure AD as your IdP, you can enable team synchronization for your enterprise account to allow organization owners and team maintainers to synchronize teams in the organizations owned by your enterprise accounts with IdP groups.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Organization ごとの Team 同期の設定と管理も可能です。 詳細は「[Organization の Team 同期を管理する](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」を参照してください。

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## 必要な環境

あなた、または Azure AD の管理者は Azure AD のグローバル管理者、または特権ロール管理者になっている必要があります。

You must enforce SAML single sign-on for organizations in your enterprise account with your supported IdP. 詳しい情報については、「[Enterprise 向けのSAML シングルサインオンを設定する](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

SAML SSO とサポートされる IdP を使用して Enterprise アカウントに認証される必要があります。 詳しい情報については「[SAMLシングルサインオンで認証する](/articles/authenticating-with-saml-single-sign-on)」を参照してください。

## Azure AD で Team の同期を管理する

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Enterprise アカウントに接続する IdP のテナント詳細を確認してから、[**Approve**] をクリックします。 ![特定の IdP テナントに対して、Team の同期を有効化するペンディングリクエストと、リクエストを承認またはキャンセルするオプション](/assets/images/help/teams/approve-team-synchronization.png)
8. Team 同期を無効にするには、 [**Disable team synchronization**] をクリックします。 ![Team の同期を無効化する](/assets/images/help/teams/disable-team-synchronization.png)

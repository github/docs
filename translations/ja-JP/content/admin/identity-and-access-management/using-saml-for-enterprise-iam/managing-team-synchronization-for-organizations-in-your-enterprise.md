---
title: Enterprise で Organization の Team 同期を管理する
intro: 'Azure AD と {% data variables.product.product_name %} の間で Team の同期を有効にして、Enterprise アカウントによって所有される Organization で IdP グループを介して Team のメンバーシップを管理できるようにすることができます。'
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
shortTitle: Manage team synchronization
ms.openlocfilehash: 1e29d70b0b8fcf78a8b03834e9436112634c636f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076936'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Enterprise アカウントのチーム同期について

IdP が Azure AD のときに Enterprise レベルで SAML を使うと、Enterprise アカウントで Team 同期を有効にすることで、Organization の所有者と Team のメンテナンス担当者が、Enterprise アカウントによって所有される Organization のチームを IdP のグループと同期できるようにすることができます。

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Organization ごとの Team 同期の設定と管理も可能です。 詳細については、「[Organization の Team 同期を管理する](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」を参照してください。

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## 前提条件

あなた、または Azure AD の管理者は Azure AD のグローバル管理者、または特権ロール管理者になっている必要があります。
 
サポート対象の IdP を使用して、Enterprise アカウントの Organization に対して SAML シングルサインオンを適用にする必要があります。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

SAML SSO とサポートされる IdP を使用して Enterprise アカウントに認証される必要があります。 詳細については、「[SAML シングル サインオンで認証する](/articles/authenticating-with-saml-single-sign-on)」を参照してください。

## Azure AD で Team の同期を管理する

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
7. Enterprise アカウントに接続する IdP テナントの詳細を確認し、 **[承認]** をクリックします。
  ![特定の IdP テナントに対して、Team 同期を有効化する保留中の要求と、要求を承認またはキャンセルするオプション](/assets/images/help/teams/approve-team-synchronization.png)
8. Team の同期を無効にするには、 **[Team の同期を無効にする]** をクリックします。
  ![Team の同期を無効にする](/assets/images/help/teams/disable-team-synchronization.png)

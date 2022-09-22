---
title: Organization に対する許可 IP アドレスを管理する
intro: 接続を許可される IP アドレスのリストを設定することで、Organizationのプライベートアセットに対するアクセスを制限することができます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
permissions: Organization owners can manage allowed IP addresses for an organization.
ms.openlocfilehash: 5d0a9bbc9b2207e088e2051025a8844e7cf0dbec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147707300'
---
## 許可 IP アドレスについて

特定の IP アドレスに対する許可リストを設定することで、Organizationのプライベートアセットへのアクセスを制限できます。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %} {% note %}

**注:** IP 許可リストを使用できるのは、{% data variables.product.prodname_ghe_cloud %} を使用する Organization だけです。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

許可リストをセットアップした場合は、Organizationにインストールした{% data variables.product.prodname_github_apps %}に設定されたIPアドレスを自動的に許可リストに追加するかを選択することもできます。 {% data variables.product.prodname_github_app %}の作者は、自分のアプリケーションのための許可リストを、アプリケーションが実行されるIPアドレスを指定して設定できます。 それらの許可リストを継承すれば、アプリケーションからの接続リクエストが拒否されるのを避けられます。 詳細については、「[{% data variables.product.prodname_github_apps %} によるアクセスの許可](#allowing-access-by-github-apps)」を参照してください。

Enterprise アカウントで Organization に対して許可される IP アドレスを設定することもできます。 詳細については、「[エンタープライズでのセキュリティ設定のポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)」を参照してください。

## 許可 IP アドレスを追加する

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## 許可 IP アドレスを有効化する

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. [IP 許可リスト] で、 **[IP 許可リストを有効にする]** を選択します。
  ![IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. **[保存]** をクリックします。

## {% data variables.product.prodname_github_apps %}によるアクセスの許可

許可リストを使っているなら、Organizationにインストールした{% data variables.product.prodname_github_apps %}に設定されたIPアドレスを自動的に許可リストに追加するかも選択できます。 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

作成した {% data variables.product.prodname_github_app %} の許可リストを作成する方法の詳細については、「[GitHub App に対する許可 IP アドレスを管理する](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)」を参照してください。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. [IP 許可リスト] で、 **[インストール済みの GitHub App の IP 許可リストの構成を有効にする]** を選択します。
  ![GitHub App IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. **[保存]** をクリックします。

## 許可 IP アドレスを編集する

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. **[Update]** をクリックします。
{% data reusables.identity-and-permissions.check-ip-address %}

{% ifversion ip-allow-list-address-check %}
## IP アドレスが許可されているかどうかを確認する

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.check-ip-address-step %} {% endif %}

## 許可 IP アドレスを削除する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## IP許可リストで {% data variables.product.prodname_actions %} を使用する

{% data reusables.actions.ip-allow-list-self-hosted-runners %}

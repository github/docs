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
shortTitle: 許可 IPアドレスの管理
permissions: Organization owners can manage allowed IP addresses for an organization.
---

## 許可 IP アドレスについて

特定の IP アドレスに対する許可リストを設定することで、Organizationのプライベートアセットへのアクセスを制限できます。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %}
{% note %}

**ノート:** IP許可リストを使用できるのは、{% data variables.product.prodname_ghe_cloud %}を使用するOrganizationだけです。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

許可リストをセットアップした場合は、Organizationにインストールした{% data variables.product.prodname_github_apps %}に設定されたIPアドレスを自動的に許可リストに追加するかを選択することもできます。 {% data variables.product.prodname_github_app %}の作者は、自分のアプリケーションのための許可リストを、アプリケーションが実行されるIPアドレスを指定して設定できます。 それらの許可リストを継承すれば、アプリケーションからの接続リクエストが拒否されるのを避けられます。 詳しい情報については「[{% data variables.product.prodname_github_apps %}によるアクセスの許可](#allowing-access-by-github-apps)」を参照してください。

Enterprise アカウントで Organization に対して許可される IP アドレスを設定することもできます。 詳しい情報については、「[Enterprise にセキュリティ設定のポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)」以下を参照してください。

## 許可 IP アドレスを追加する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

## 許可 IP アドレスを有効化する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. [IP allow list] で、「**Enable IP allow list**」を選択します。 ![IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. [**Save**] をクリックします。

## {% data variables.product.prodname_github_apps %}によるアクセスの許可

許可リストを使っているなら、Organizationにインストールした{% data variables.product.prodname_github_apps %}に設定されたIPアドレスを自動的に許可リストに追加するかも選択できます。

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

作成した{% data variables.product.prodname_github_app %}に許可リストを作成する方法に関する詳しい情報については「[GitHub Appに対して許可されたIPアドレスの管理](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)」を参照してください。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. "IP allow list（IP許可リスト）"の下で、**Enable IP allow list configuration for installed GitHub Apps（インストールされたGitHub AppsのIP許可リスト設定の有効化）**を選択してください。 ![GitHub AppにIPアドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. [**Save**] をクリックします。

## 許可 IP アドレスを編集する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. [**Update**] をクリックします。

## 許可 IP アドレスを削除する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## IP許可リストで {% data variables.product.prodname_actions %} を使用する

{% data reusables.actions.ip-allow-list-self-hosted-runners %}

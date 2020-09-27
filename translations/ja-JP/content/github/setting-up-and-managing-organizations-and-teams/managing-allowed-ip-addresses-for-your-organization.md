---
title: Organization に対する許可 IP アドレスを管理する
intro: 接続を許可される IP アドレスのリストを設定することで、Organization のアセットに対するアクセスを制限することができます。
product: '{{ site.data.reusables.gated-features.allowed-ip-addresses }}'
versions:
  free-pro-team: '*'
---

Organization のオーナーは、Organization に対する許可 IP アドレスを管理できます。

### 許可 IP アドレスについて

特定の IP アドレスに対する許可リストを設定することで、Organization アセットへのアクセスを制限できます。 {{ site.data.reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions }}

{{ site.data.reusables.identity-and-permissions.ip-allow-lists-cidr-notation }}

{{ site.data.reusables.identity-and-permissions.ip-allow-lists-enable }}

Enterprise アカウントで Organization に対して許可される IP アドレスを設定することもできます。 詳細は、「[Enterprise アカウントでセキュリティ設定を強制する](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)」を参照してください。

### 許可 IP アドレスを追加する

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-add-ip }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-add-description }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-add-entry }}

### 許可 IP アドレスを有効化する

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
3. [IP allow list] で、「**Enable IP allow list**」を選択します。 ![IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
4. [**Save**] をクリックします。

### 許可 IP アドレスを編集する

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-edit-entry }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-edit-ip }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-edit-description }}
8. [**Update**] をクリックします。

### 許可 IP アドレスを削除する

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-delete-entry }}
{{ site.data.reusables.identity-and-permissions.ip-allow-lists-confirm-deletion }}

### IP許可リストで {{ site.data.variables.product.prodname_actions }} を使用する

{{ site.data.reusables.github-actions.ip-allow-list-self-hosted-runners }}

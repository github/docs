---
title: Enterprise へのネットワークトラフィックを制限する
shortTitle: ネットワークトラフィックを制限する
intro: IP 許可リストを使用して、Enterprise へのアクセスを指定された IP アドレスからの接続に制限できます。
versions:
  github-ae: '*'
---

### IP 許可リストについて
デフォルトでは、許可されたユーザは任意の IP アドレスから Enterprise にアクセスできます。 Enterprise のオーナーは、特定の IP アドレスに対する許可リストを設定することで、Enterprise アカウントの Organization が所有するアセットへのアクセスを制限できます。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

許可 IP アドレスを、Organization ごとに設定することもできます。 詳細は「[ Organization に対する許可 IP アドレスを管理する](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)」を参照してください。

既定では、Azure ネットワークセキュリティグループ (NSG) ルールで、ポート 22、80、443、および 25 ですべてのインバウンドトラフィックが開いたままになります。 Enterprise オーナーは {% data variables.contact.github_support %} に問い合わせて、インスタンスのアクセス制限を設定できます。

Azure NSG を使用したインスタンスレベルの制限については、Enterprise インスタンスへのアクセスを許可する必要がある IP アドレスを {% data variables.contact.github_support %} に問い合わせてください。 標準の CIDR (Classless Inter-Domain Routing) 形式を使用してアドレス範囲を指定します。 {% data variables.contact.github_support %} は、HTTP、SSH、HTTPS、SMTP を介したネットワークアクセスを制限するために、Enterprise に適切なファイアウォールルールを設定します。 詳しい情報については、「[{% data variables.contact.github_support %} からの支援を受ける](/admin/enterprise-support/receiving-help-from-github-support)」を参照してください。

### 許可 IP アドレスを追加する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### 許可 IP アドレスを有効化する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. [IP allow list] で、「**Enable IP allow list**」を選択します。 ![IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. [**Save**] をクリックします。

### 許可 IP アドレスを編集する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. [**Update**] をクリックします。

### 許可 IP アドレスを削除する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### IP許可リストで {% data variables.product.prodname_actions %} を使用する

{% data reusables.github-actions.ip-allow-list-hosted-runners %}

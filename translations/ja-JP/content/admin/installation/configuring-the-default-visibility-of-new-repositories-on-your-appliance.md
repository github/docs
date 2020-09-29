---
title: アプライアンスにおける新しいリポジトリのデフォルトの可視性の設定
intro: 'Web インターフェースを使って {% data variables.product.prodname_ghe_server %} アプライアンス上に作成される新しいすべてのリポジトリに対するデフォルトの可視性は、パブリックまたはプライベートに設定できます。'
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
versions:
  enterprise-server: '*'
---

{% data variables.product.product_location_enterprise %}上に新しいリポジトリを作るときには、そのリポジトリの可視性を選択しなければなりません。 そのインタンスのデフォルトの可視性の設定をする際には、デフォルトで選択される可視性を選択します。 リポジトリの可視性に関する詳しい情報については、「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」を参照してください。

サイト管理者がメンバーに対して特定の種類のリポジトリの作成を禁止している場合、可視性の設定のデフォルトがその種類になっていても、メンバーはその種類のリポジトリを作成できません。 詳しい情報については、「[インスタンスでリポジトリ作成を制限する](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)」を参照してください。

{% tip %}

**Tip:** リポジトリの可視性を変更できる能力をサイト管理者のみに制限できます。 詳しい情報については"[ユーザによるリポジトリの可視性の変更の禁止](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility)."を参照してください。

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. "Default repository visibility（デフォルトのリポジトリの可視性）"の下で、ドロップダウンメニューを使ってデフォルトの可視性を選択してください。![インスタンスにおけるデフォルトのリポジトリの可視化性を選択するためのドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

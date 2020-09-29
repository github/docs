---
title: Enterprise 向けのパッケージサポートを設定する
intro: '各パッケージエコシステムを有効化または無効化することで、Enterprise の {% data variables.product.prodname_registry %} を設定できます。'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

インスタンスの各パッケージエコシステムを有効化または無効化できます。 以前に有効化したエコシステムを**読み取り専用**に設定して、新しいパッケージのアップロードを防ぎつつ、既存のパッケージをダウンロードできるようにすることができます。

Docker で {% data variables.product.prodname_registry %} を使用するには、インスタンスで Subdomain Isolation を有効にする必要があります。 詳しい情報については、「[Subdomain Isolation の有効化](/enterprise/admin/configuration/enabling-subdomain-isolation)」を参照してください。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. [Ecosystem Toggles] の下で、パッケージの種類ごとに [**Enabled**]、[**Read-Only**]、または [**Disabled**] を選択します。 ![エコシステムの切り替え](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png)
{% data reusables.enterprise_management_console.save-settings %}

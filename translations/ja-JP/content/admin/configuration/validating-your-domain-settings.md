---
title: ドメイン設定の検証
intro: '{% data variables.product.product_location %}を最初に起動する前に、ドメイン設定が適切に行われていることを確認してください。'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
  - /enterprise/admin/configuration/validating-your-domain-settings
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. アプライアンスのDNS及びSSLの設定をテストするには、**Test domain settings（ドメイン設定のテスト）**をクリックしてください。 ![[Test domain settings] ボタン](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

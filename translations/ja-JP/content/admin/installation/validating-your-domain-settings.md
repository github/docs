---
title: ドメイン設定の検証
intro: '{{ site.data.variables.product.product_location_enterprise }}を最初に起動する前に、ドメイン設定が適切に行われていることを確認してください。'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.hostname-menu-item }}
4. アプライアンスのDNS及びSSLの設定をテストするには、**Test domain settings（ドメイン設定のテスト）**をクリックしてください。 ![[Test domain settings] ボタン](/assets/images/enterprise/management-console/test-domain-settings.png)
{{ site.data.reusables.enterprise_management_console.test-domain-settings-failure }}
{{ site.data.reusables.enterprise_management_console.save-settings }}

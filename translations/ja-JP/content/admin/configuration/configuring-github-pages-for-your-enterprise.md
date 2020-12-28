---
title: Configuring GitHub Pages for your enterprise
intro: 'You can enable or disable {% data variables.product.prodname_pages %} for your enterprise and choose whether to make sites publicly accessible.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages/
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages/
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise/
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### Enabling public sites for {% data variables.product.prodname_pages %}

{% if enterpriseServerVersions contains currentVersion %}If private mode is enabled on your enterprise, the {% else %}The {% endif %}public cannot access {% data variables.product.prodname_pages %} sites hosted by your enterprise unless you enable public sites.

{% warning %}

**Warning:** If you enable public sites for {% data variables.product.prodname_pages %}, every site in every repository on your enterprise will be accessible to the public.

{% endwarning %}

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. **Public Pages（公開ページ）**を選択してください。 ![[Public Pages] を有効化するチェックボックス](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
5. Under "Pages policies", select **Public {% data variables.product.prodname_pages %}**. ![Checkbox to enable public {% data variables.product.prodname_pages %}](/assets/images/enterprise/business-accounts/public-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}
{% endif %}

### Disabling {% data variables.product.prodname_pages %} for your enterprise

{% if enterpriseServerVersions contains currentVersion %}
If subdomain isolation is disabled for your enterprise, you should also disable
{% data variables.product.prodname_pages %} to protect yourself from potential security vulnerabilities. 詳しい情報については、「[Subdomain Isolation の有効化](/admin/configuration/enabling-subdomain-isolation)」を参照してください。
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. **Enable Pages（ページの有効化）**の選択を解除してください。 ![{% data variables.product.prodname_pages %} を無効化するチェックボックス](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
5. Under "Pages policies", deselect **Enable {% data variables.product.prodname_pages %}**. ![{% data variables.product.prodname_pages %} を無効化するチェックボックス](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### 参考リンク

- [プライベートモードの有効化](/admin/configuration/enabling-private-mode)
{% endif %}

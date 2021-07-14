---
title: Enabling GitHub Advanced Security for your enterprise
shortTitle: Enabling GitHub Advanced Security
intro: 'You can configure {% data variables.product.product_name %} to include {% data variables.product.prodname_GH_advanced_security %}. This provides extra features that help users find and fix security problems in their code.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghes: '>=2.22'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
---

## About enabling {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes > 3.0 %}
When you enable {% data variables.product.prodname_GH_advanced_security %} for your enterprise, repository administrators in all organizations can enable the features unless you set up a policy to restrict access. For more information, see "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)."
{% else %}
When you enable {% data variables.product.prodname_GH_advanced_security %} for your enterprise, repository administrators in all organizations can enable the features. {% ifversion ghes = 3.0 %}For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."{% endif %}
{% endif %}

## Prerequisites for enabling {% data variables.product.prodname_GH_advanced_security %}

1. Upgrade your license for {% data variables.product.product_name %} to include {% data variables.product.prodname_GH_advanced_security %}.{% ifversion ghes > 3.0 %} For information about licensing, see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)."{% endif %}
2. Upload the new license to {% data variables.product.product_location %}. For more information, see "[Managing your GitHub Enterprise license](/admin/overview/managing-your-github-enterprise-license#downloading-a-new-license-and-uploading-it-to-github-enterprise-server)."{% ifversion ghes > 2.22 %}
3. Review the prerequisites for the features you plan to enable.

    - {% data variables.product.prodname_code_scanning_capc %}, see "[Configuring {% data variables.product.prodname_code_scanning %} for your appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)."
    - {% data variables.product.prodname_secret_scanning_caps %}, see "[Configuring {% data variables.product.prodname_secret_scanning %} for your appliance](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)."{% endif %}

## Checking whether your license includes {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes > 3.0 %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. If your license includes {% data variables.product.prodname_GH_advanced_security %}, the license page includes a section showing details of current usage.
![{% data variables.product.prodname_GH_advanced_security %} section of Enterprise license](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
{% endif %}

{% ifversion ghes = 2.22 or ghes = 3.0 %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. If your license includes {% data variables.product.prodname_GH_advanced_security %}, there is an **{% data variables.product.prodname_advanced_security %}** entry in the left sidebar.
![Advanced Security sidebar](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}
{% endif %}

## Enabling and disabling {% data variables.product.prodname_GH_advanced_security %} features

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes > 2.22 %}
1. Under "{% data variables.product.prodname_advanced_security %}," select the features that you want to enable and deselect any features you want to disable.
![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% else %}
1. Under "{% data variables.product.prodname_advanced_security %}," click **{% data variables.product.prodname_code_scanning_capc %}**.
![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %}
{% data reusables.enterprise_management_console.save-settings %}

When {% data variables.product.product_name %} has finished restarting, you're ready to set up any additional resources required for newly enabled features. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %} for your appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance)."

## Enabling or disabling {% data variables.product.prodname_GH_advanced_security %} via the administrative shell (SSH)

You can enable or disable features programmatically on {% data variables.product.product_location %}. For more information about the administrative shell and command-line utilities for {% data variables.product.prodname_ghe_server %}, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" and "[Command-line utilities](/admin/configuration/command-line-utilities#ghe-config)."

For example, you can enable {% data variables.product.prodname_code_scanning %} with your infrastructure-as-code tooling when you deploy an instance for staging or disaster recovery.

1. SSH into {% data variables.product.product_location %}.
1. Enable {% data variables.product.prodname_code_scanning %}.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
2. Optionally, disable {% data variables.product.prodname_code_scanning %}.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
3. Apply the configuration.
    ```shell
  ghe-config-apply
  ```

{% ifversion ghes > 2.22 %}To enable and disable {% data variables.product.prodname_secret_scanning %} in the same way, set: `ghe-config app.secret-scanning.enabled` true or false and apply the configuration.{% endif %}

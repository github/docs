---
title: Enabling GitHub Advanced Security for your enterprise
shortTitle: Enabling GitHub Advanced Security
intro: 'You can configure {% data variables.product.product_name %} to include {% data variables.product.prodname_GH_advanced_security %}. This provides extra features that help users find and fix security problems in their code.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/enabling-github-advanced-security-for-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise
versions:
  ghes: '*'
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

When you enable {% data variables.product.prodname_GH_advanced_security %} for your enterprise, repository administrators in all organizations can enable the features unless you set up a policy to restrict access. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."

{% ifversion secret-scanning-enterprise-level-api %}{% data reusables.secret-scanning.secret-scanning-enterprise-level-api %}{% endif %}

For guidance on a phased deployment of GitHub Advanced Security, see "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)."

## Checking whether your license includes {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. If your license includes {% data variables.product.prodname_GH_advanced_security %}, the license page includes a section showing details of current usage.

## Prerequisites for enabling {% data variables.product.prodname_GH_advanced_security %}

1. Upgrade your license for {% data variables.product.product_name %} to include {% data variables.product.prodname_GH_advanced_security %}. For information about licensing, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."
1. Download the new license file. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."
1. Upload the new license file to {% data variables.product.prodname_ghe_server %}. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."
1. Review the prerequisites for the features you plan to enable.

    * {% data variables.product.prodname_code_scanning_caps %}, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)."
    * {% data variables.product.prodname_secret_scanning_caps %}, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)."
    * {% data variables.product.prodname_dependabot %}, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

## Enabling and disabling {% data variables.product.prodname_GH_advanced_security %} features

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," select the features that you want to enable and deselect any features you want to disable.
{% data reusables.enterprise_management_console.save-settings %}

When {% data variables.product.product_name %} has finished restarting, you're ready to set up any additional resources required for newly enabled features. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)."

## Enabling or disabling {% data variables.product.prodname_GH_advanced_security %} features via the administrative shell (SSH)

You can enable or disable features programmatically on {% data variables.product.prodname_ghe_server %}. For more information about the administrative shell and command-line utilities for {% data variables.product.prodname_ghe_server %}, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-config)."

For example, you can enable any {% data variables.product.prodname_GH_advanced_security %} feature with your infrastructure-as-code tooling when you deploy an instance for staging or disaster recovery.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Enable features for {% data variables.product.prodname_GH_advanced_security %}.

    * To enable {% data variables.product.prodname_code_scanning %}, enter the following commands.

      ```shell copy
      ghe-config app.minio.enabled true
      ghe-config app.code-scanning.enabled true
      ```

    * To enable {% data variables.product.prodname_secret_scanning %}, enter the following command.

      ```shell copy
      ghe-config app.secret-scanning.enabled true
      ```

    * To enable the dependency graph, enter the following command.

      ```shell copy
      ghe-config app.dependency-graph.enabled true
      ```

1. Optionally, disable features for {% data variables.product.prodname_GH_advanced_security %}.

    * To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.

      ```shell copy
      ghe-config app.code-scanning.enabled false
      ```

      * Optionally, if you disable {% data variables.product.prodname_code_scanning %}, you can also disable the internal MinIO service for {% data variables.product.prodname_GH_advanced_security %}. If {% data variables.product.prodname_dependabot_updates %} are enabled for the instance and you want to disable this service, you must also disable {% data variables.product.prodname_dependabot_updates %}. Disabling the service does not affect MinIO storage for {% data variables.product.prodname_actions %} or {% data variables.product.prodname_registry %}. For more information about {% data variables.product.prodname_dependabot_updates %}, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

        * To disable {% data variables.product.prodname_dependabot_updates %}, enter the following command.

          ```shell copy
          ghe-config app.dependabot.enabled false
          ```

        * To disable MinIO, enter the following command.

          ```shell copy
          ghe-config app.minio.enabled false
          ```

    * To disable {% data variables.product.prodname_secret_scanning %}, enter the following command.

      ```shell copy
      ghe-config app.secret-scanning.enabled false
      ```

    * To disable the dependency graph, enter the following command.

      ```shell
      ghe-config app.dependency-graph.enabled false
      ```

{% data reusables.enterprise.apply-configuration %}

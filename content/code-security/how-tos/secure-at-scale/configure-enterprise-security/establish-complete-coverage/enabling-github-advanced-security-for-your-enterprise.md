---
title: Enabling {% data variables.product.prodname_GHAS %} products for your enterprise
shortTitle: Enable {% data variables.product.prodname_GHAS %}
intro: You can configure {% data variables.product.prodname_ghe_server %} to include {% data variables.product.prodname_GHAS %} products. This provides extra features that help users find and fix security problems in their code.
product: '{% data reusables.gated-features.ghas-ghec %}'
allowTitleToDifferFromFilename: true
redirect_from:
  - /admin/advanced-security/enabling-github-advanced-security-for-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise
  - /admin/managing-code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise
  - /admin/managing-code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise
versions:
  ghes: '*'
contentType: how-tos
category:
  - Secure at scale
---

## About enabling {% data variables.product.prodname_GHAS %} products

{% data reusables.advanced-security.ghas-helps-developers %}

When you enable {% data variables.product.prodname_GHAS %} for your enterprise, repository administrators in all organizations can enable the features unless you set up a policy to restrict access. See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).

{% data reusables.secret-scanning.secret-scanning-enterprise-level-api %}

For guidance on a phased deployment of {% data variables.product.prodname_GHAS %}, see [AUTOTITLE](/code-security/tutorials/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale).

## Checking whether your license includes {% data variables.product.prodname_AS %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab-ghes %}
1. If your license includes {% data variables.product.prodname_GHAS_cs_or_sp %}, the license page includes a section showing details of current usage.

## Prerequisites for enabling {% data variables.product.prodname_cs_and_sp %}

1. Upgrade your {% data variables.product.prodname_enterprise %} license to include {% data variables.product.prodname_cs_and_sp %}. For information about licensing, see [AUTOTITLE](/billing/concepts/product-billing/github-advanced-security).
1. Download the new license file. See [AUTOTITLE](/billing/how-tos/manage-server-licenses/download-your-license).
1. Upload the new license file to {% data variables.product.prodname_ghe_server %}. See [AUTOTITLE](/billing/how-tos/manage-server-licenses/upload-new-license).
1. Review the prerequisites for the features you plan to enable.

    * {% data variables.product.prodname_code_scanning_caps %}, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning).
    * {% data variables.product.prodname_secret_scanning_caps %}, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configure-secret-scanning#prerequisites-for-secret-scanning).
    * {% data variables.product.prodname_dependabot %}, see [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).

## Enabling and disabling {% data variables.product.prodname_AS %} features

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," select the features that you want to enable and deselect any features you want to disable.
{% data reusables.enterprise_management_console.save-settings %}

When {% data variables.product.prodname_ghe_server %} has finished restarting, you're ready to set up any additional resources required for newly enabled features. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance).

## Enabling or disabling {% data variables.product.prodname_AS %} features via the administrative shell (SSH)

You can enable or disable features programmatically on {% data variables.product.prodname_ghe_server %}. For more information about the administrative shell and command-line utilities for {% data variables.product.prodname_ghe_server %}, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh) and [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-config).

For example, you can enable any {% data variables.product.prodname_AS %} feature with your infrastructure-as-code tooling when you deploy an instance for staging or disaster recovery.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Enable features for {% data variables.product.prodname_AS %}.

    * To enable {% data variables.product.prodname_code_scanning %}, enter the following commands.

      ```shell copy
      ghe-config app.minio.enabled true
      ghe-config app.code-scanning.enabled true
      ```

    * To enable {% data variables.product.prodname_secret_scanning %}, enter the following command.

      ```shell copy
      ghe-config app.secret-scanning.enabled true
      ```

{% ifversion secret-scanning-validity-check-partner-patterns %}

    * Optionally, to enable validity checks for {% data variables.product.prodname_secret_scanning %}:
        * Enter the following command:

           ```shell copy
           ghe-config app.secret-scanning.validity-checks-available-on-instance true`
           ```

         * To check whether outbound connection is possible, use:

           ```shell copy
           /usr/local/share/enterprise/ghe-secret-scanning-validity-checks-connection-test
           ```
{% endif %}

    * To enable the dependency graph, enter the following command.

      ```shell copy
      ghe-config app.dependency-graph.enabled true
      ```

1. Optionally, disable features for {% data variables.product.prodname_AS %}.

    * To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.

      ```shell copy
      ghe-config app.code-scanning.enabled false
      ```

      * Optionally, if you disable {% data variables.product.prodname_code_scanning %}, you can also disable the internal MinIO service for {% data variables.product.prodname_AS %}. If {% data variables.product.prodname_dependabot_updates %} are enabled for the instance and you want to disable this service, you must also disable {% data variables.product.prodname_dependabot_updates %}. Disabling the service does not affect MinIO storage for {% data variables.product.prodname_actions %} or {% data variables.product.prodname_registry %}. For more information about {% data variables.product.prodname_dependabot_updates %}, see [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise).

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

---
title: Enabling the dependency graph for your enterprise
intro: You can allow users to identify their projects' dependencies by enabling the dependency graph.
shortTitle: Enable dependency graph
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
redirect_from:
  - /admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise
---

## About the dependency graph

{% data reusables.dependabot.about-the-dependency-graph %} For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

After you enable the dependency graph for your enterprise, you can enable {% data variables.product.prodname_dependabot %} to detect insecure dependencies in your repository and automatically fix the vulnerabilities. For more information, see [AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

You can enable the dependency graph via the {% data variables.enterprise.management_console %} or the administrative shell. We recommend using the {% data variables.enterprise.management_console %} unless your instance uses clustering.

## Enabling the dependency graph via the {% data variables.enterprise.management_console %}

If your instance uses clustering, you cannot enable the dependency graph with the {% data variables.enterprise.management_console %} and must use the administrative shell instead. For more information, see [Enabling the dependency graph via the administrative shell](#enabling-the-dependency-graph-via-the-administrative-shell).

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," select **Dependency graph**.
{% data reusables.enterprise_management_console.save-settings %}
1. Click **Visit your instance**.

## Enabling the dependency graph via the administrative shell

{% data reusables.enterprise_site_admin_settings.sign-in %}
1. In the administrative shell, enable the dependency graph:

    ```shell
    ghe-config app.dependency-graph.enabled true
    ```

   > [!NOTE]
   > For more information about enabling access to the administrative shell via SSH, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

1. Apply the configuration.

    ```shell
    ghe-config-apply
    ```

1. Return to {% data variables.product.prodname_ghe_server %}.

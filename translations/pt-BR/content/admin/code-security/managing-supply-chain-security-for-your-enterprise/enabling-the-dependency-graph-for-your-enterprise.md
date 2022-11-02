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
---

## About the dependency graph

{% data reusables.dependabot.about-the-dependency-graph %} For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"

After you enable the dependency graph for your enterprise, you can enable {% data variables.product.prodname_dependabot %} to detect insecure dependencies in your repository{% ifversion ghes %} and automatically fix the vulnerabilities{% endif %}. For more information, see "[Enabling {% data variables.product.prodname_dependabot %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

{% ifversion ghes %}
You can enable the dependency graph via the {% data variables.enterprise.management_console %} or the administrative shell. We recommend using the {% data variables.enterprise.management_console %} unless {% data variables.location.product_location %} uses clustering.

## Enabling the dependency graph via the {% data variables.enterprise.management_console %}

If {% data variables.location.product_location %} uses clustering, you cannot enable the dependency graph with the {% data variables.enterprise.management_console %} and must use the administrative shell instead. For more information, see "[Enabling the dependency graph via the administrative shell](#enabling-the-dependency-graph-via-the-administrative-shell)."

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," click **Dependency graph**.
![Checkbox to enable or disable the dependency graph](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Click **Visit your instance**.

## Enabling the dependency graph via the administrative shell

{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. In the administrative shell, enable the dependency graph on {% data variables.location.product_location %}:
    {% ifversion ghes %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Apply the configuration.
    ```shell
    $ ghe-config-apply
    ```
3. Return to {% data variables.product.prodname_ghe_server %}.

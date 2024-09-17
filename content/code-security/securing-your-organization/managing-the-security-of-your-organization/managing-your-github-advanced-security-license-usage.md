---
title: Managing your GitHub Advanced Security license usage
shortTitle: Manage GHAS licenses
intro: 'You can understand and control {% data variables.product.prodname_GH_advanced_security %} license usage for repositories in your organization.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note %}

## About {% data variables.product.prodname_GH_advanced_security %} billing and licenses

{% ifversion fpt %}

{% data reusables.advanced-security.ghas-license-info-for-fpt %}

For information on managing your {% data variables.product.prodname_GH_advanced_security %} license usage, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/securing-your-organization/managing-the-security-of-your-organization/managing-your-github-advanced-security-license-usage).

{% else %}

To use {% data variables.product.prodname_GH_advanced_security %} (GHAS) features on private or internal repositories with unique active committers, you must have available GHAS licenses. With {% data variables.product.prodname_security_configurations %}, you can easily understand the GHAS license usage of repositories in your organization, as well as the number of available GHAS licenses in your enterprise. Additionally, if you need to make more GHAS licenses available to secure a high-impact repository, you can quickly disable GHAS features on private and internal repositories at scale.

To learn about GHAS licenses, as well as unique and active committers, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."

## Understanding your {% data variables.product.prodname_GH_advanced_security %} license usage

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. In the "Apply configurations" section, your current license usage will be displayed as "NUMBER-USED out of NUMBER-PURCHASED available {% data variables.product.prodname_GH_advanced_security %} licenses in use by YOUR-ENTERPRISE."

    ![Screenshot of the "Apply configurations" section. The current GHAS license usage for the enterprise is outlined in dark orange.](/assets/images/help/security-configurations/current-ghas-license-usage.png)

1. Optionally, to find specific repositories in your organization, filter the repository table. To learn more, see "[AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/filtering-repositories-in-your-organization-using-the-repository-table)."
1. To quickly identify the number of GHAS licenses needed to enable GHAS features on a specific repository, in that repository's row of the repository table, read "NUMBER licenses required".
1. To view license usage for multiple repositories in your organization, select the repositories from the repository table. In the "Apply configurations" section, you will see the number of licenses required to apply GHAS features to the repositories, as well as the number of licenses made available if you disable GHAS features on those repositories.

    ![Screenshot of the "Apply configurations" section. The potential changes to GHAS license usage for the enterprise are outlined in dark orange.](/assets/images/help/security-configurations/ghas-licenses-used-or-freed.png)

## Turning off {% data variables.product.prodname_GH_advanced_security %} features on select repositories in your organization

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. Optionally, in the "Apply configurations" section, filter for specific repositories on which you would like to disable GHAS. To learn more, see "[AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/filtering-repositories-in-your-organization-using-the-repository-table)."
1. In the repository table, select repositories with one of three methods:
     * Select each individual repository you would like to disable GHAS features on.
     * To select all repositories displayed on the current page of the repository table, select **NUMBER repositories**.
     * After selecting **NUMBER repositories**, to select _all_ repositories in your organization that match any filters you have applied, click **Select all**.

    Once you have selected the desired repositories, in the "Apply configurations" section, you can see how many GHAS licenses will become available when you disable GHAS features on those repositories. For more information, see "[Understanding your {% data variables.product.prodname_GH_advanced_security %} license usage](#understanding-your-github-advanced-security-license-usage)."
1. Select the **Apply configuration** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **Disable {% data variables.product.prodname_GH_advanced_security %}**.
1. To finish disabling GHAS features on the selected private or internal repositories, in the "Disable {% data variables.product.prodname_GH_advanced_security %}?" window, click **Disable {% data variables.product.prodname_GH_advanced_security %}**.

    {% note %}

    **Notes:**
    * Disabling GHAS features for a private or internal repository will also detach that repository from any linked {% data variables.product.prodname_security_configuration %}.
    * Disabling GHAS features through the repository table _will not_ disable those features on public repositories since they do not require {% data variables.product.prodname_GH_advanced_security %} licenses.

    {% endnote %}

{% endif %}

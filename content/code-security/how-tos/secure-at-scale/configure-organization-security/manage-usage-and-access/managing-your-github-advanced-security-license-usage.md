---
title: Managing your paid use of {% data variables.product.prodname_AS %}
shortTitle: Manage paid GHAS use
intro: You can understand and control the costs of using {% data variables.product.prodname_GH_cs_and_sp %} in repositories in your organization.
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.security-org-enable %}'
product: '{% data reusables.gated-features.ghas-billing %}'
versions:
  feature: security-configurations
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/managing-the-security-of-your-organization/managing-your-github-advanced-security-license-usage
contentType: how-tos
---

## Requirements for enabling {% data variables.product.prodname_AS %} products

To use {% data variables.product.prodname_GHAS_cs_or_sp %} on private or internal repositories with unique active committers, you must have licenses available. The user-interface and options depend on how you pay for {% data variables.product.prodname_AS %}.

* **Metered billing:** by default, there is no limit on how many licenses you can consume. See {% data reusables.advanced-security.control-use-cost-links %}.
* **Volume/subscription billing** ({% data variables.product.prodname_enterprise %} only)**:**  once the licenses you have purchased are all in use, you cannot enable {% data variables.product.prodname_GHAS_cs_or_sp %} on additional repositories until you free up or buy additional licenses.

With {% data variables.product.prodname_security_configurations %}, you can easily understand the license usage of repositories in your organization, as well as the number of available {% data variables.product.prodname_GHAS_cs_or_sp %} licenses in your {% data variables.enterprise.enterprise_or_org %}. Additionally, if you need to make more licenses available to secure a high-impact repository, you can quickly disable {% data variables.product.prodname_GHAS_cs_or_sp %}{% ifversion fpt or ghec %} on private and internal repositories{% endif %} at scale.

To learn about licensing for {% data variables.product.prodname_GHAS_cs_and_sp %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

## Understanding your license usage

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. In the "Apply configurations" section, your current license usage will be displayed. {% ifversion ghas-products %}This screenshot shows metered usage. If you have bought a volume/subscription license, then the number of licenses available is also reported.

    ![Screenshot of the "Apply configurations" section. The current license use for the enterprise is outlined in dark orange.](/assets/images/help/security-configurations/current-sp-cs-license-usage.png)
   {% else %}
   `NUMBER-USED out of NUMBER-PURCHASED available GitHub Advanced Security licenses in use by YOUR-ENTERPRISE.`
    ![Screenshot of the "Apply configurations" section. The current license use for the enterprise is outlined in dark orange.](/assets/images/help/security-configurations/current-ghas-license-usage.png)
    {% endif %}

1. Optionally, to find specific repositories in your organization, filter the repository table. To learn more, see [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/filtering-repositories-in-your-organization-using-the-repository-table).
{% ifversion ghas-products %}
<!--This functionality is shown in modal dialogs when you enable a security configuration following the release of separate SKUs for GHAS.-->
{% else %}
1. To quickly identify the number of licenses needed to enable {% data variables.product.prodname_GH_cs_and_sp %} on a specific repository, in that repository's row of the repository table, read "NUMBER licenses required".
1. To view license usage for multiple repositories in your organization, select the repositories from the repository table. In the "Apply configurations" section, you will see the number of licenses required to apply {% data variables.product.prodname_GH_cs_and_sp %} to the repositories, as well as the number of licenses made available if you disable {% data variables.product.prodname_GH_cs_or_sp %} on those repositories.

    ![Screenshot of the "Apply configurations" section. The potential changes to GHAS license usage for the enterprise are outlined in dark orange.](/assets/images/help/security-configurations/ghas-licenses-used-or-freed.png)
{% endif %}

{% ifversion ghec %}
> [!TIP]
> For information about buying more volume/subscription licenses, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/managing-your-github-advanced-security-licensing).
{% endif %}

## Turning off {% data variables.product.prodname_cs_or_sp %}

The simplest way to turn off all {% data variables.product.prodname_cs_or_sp %} features for one or more repositories is to create a security configuration where the product is disabled at the top level. You can apply this custom configuration to repositories where you want to turn off paid features.

> [!TIP]
> Ensure that you give your custom configuration a very clear name, for example: "No Code Security" or "Secret Protection and Supply chain only" to avoid confusion.

For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration) and [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

{% ifversion ghec or ghes %}
To prevent future enablement of security features, we recommend you ask your enterprise administrator to set the enterprise account's {% data variables.product.prodname_AS %} policies so that:
* {% data variables.product.prodname_AS %} is **not available**.
* Repository administrators are **not allowed** to enable or disable {% data variables.product.prodname_AS %} features for their repositories.
See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).
{% endif %}

---
title: Managing your paid use of {% data variables.product.prodname_AS %}
shortTitle: Manage paid GHAS use
intro: Control the costs of {% data variables.product.prodname_GH_cs_and_sp %} in your organization.
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.security-org-enable %}'
product: '{% data reusables.gated-features.ghas-billing %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /code-security/securing-your-organization/managing-the-security-of-your-organization/managing-your-github-advanced-security-license-usage
contentType: how-tos
category:
  - Secure at scale
---

## Prerequisites

Before you can effectively manage your paid use of {% data variables.product.prodname_AS %}, you should understand how {% data variables.product.prodname_AS %} is billed. See [AUTOTITLE](/billing/concepts/product-billing/github-advanced-security).

## Understanding your license usage

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. Click the **Repositories** tab.
1. In the "Apply configurations" section, your current license usage will be displayed. This screenshot shows metered usage. If you have bought a volume/subscription license, then the number of licenses available is also reported.

    ![Screenshot of the "Apply configurations" section. The current license use for the enterprise is outlined in dark orange.](/assets/images/help/security-configurations/current-sp-cs-license-usage.png)

1. Optionally, to find specific repositories in your organization, filter the repository table. To learn more, see [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/filtering-repositories-in-your-organization-using-the-repository-table).
<!--This functionality is shown in modal dialogs when you enable a security configuration following the release of separate SKUs for GHAS.-->

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

---
title: Adding GitHub Advanced Security to your organization or enterprise
intro: 'You can sign up for GitHub Advanced Security products from the settings for your organization or enterprise account to prevent data leaks and keep vulnerabilities out of your codebase.'
permissions: '{% ifversion fpt %}Organization{% else %}Enterprise{% endif %} owners can sign up for {% data variables.product.prodname_GH_cs_or_sp %}'
product: '{% data reusables.gated-features.ghas-billing %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /billing/managing-billing-for-github-advanced-security/signing-up-for-github-advanced-security
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/signing-up-for-github-advanced-security
topics:
  - Billing
  - Advanced Security
  - Enterprise
shortTitle: Add Advanced Security
contentType: how-tos
---

## Checking your current plan

Your organization must use a {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} plan before you can enable {% data variables.product.prodname_GH_cs_or_sp %} on private repositories.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans_or_licensing %}

Your current plan is shown with any options to upgrade to a different plan.

## Starting to use {% data variables.product.prodname_AS %}

{% ifversion fpt %}
If your organization uses a {% data variables.product.prodname_team %} plan, you are ready to start enabling {% data variables.product.prodname_GH_cs_and_sp %} at the organization and repository level. Whenever you enable a feature or apply a configuration, a modal dialog shows detailed information with estimated billing changes. You can confirm your change or return to the page without making changes.

The most effective way to control and enable these features is using security configurations, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/choosing-a-security-configuration-for-your-repositories).

{% elsif ghec %}
If you use volume/subscription billing, then you will need to purchase licenses before you can start using {% data variables.product.prodname_GH_cs_or_sp %} on private or internal repositories.

If your enterprise uses metered billing, then you are ready to start enabling {% data variables.product.prodname_GH_cs_and_sp %} at the enterprise, organization, and repository level. Whenever you enable a feature or apply a configuration, a modal dialog shows detailed information with estimated billing changes. You can confirm your change or return to the page without making changes.

{% endif %}

## Purchasing licenses for organizations

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans_or_licensing %}
1. To the right of "{% data variables.product.prodname_GHAS %}", click **Buy {% data variables.product.prodname_AS %}**.

   ![Screenshot of the {% data variables.product.prodname_AS %} section of the enterprise licensing screen. The "Buy {% data variables.product.prodname_AS %}" button is outlined in orange.](/assets/images/help/enterprises/ghas-buy-advanced-security-button.png)

{% ifversion ghec %}

## Purchasing licenses for enterprises

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}
1. To the right of "{% data variables.product.prodname_GHAS %}", click **Buy {% data variables.product.prodname_AS %}**.

   ![Screenshot of the {% data variables.product.prodname_AS %} section of the enterprise licensing screen. The "Buy {% data variables.product.prodname_AS %}" button is outlined in orange.](/assets/images/help/enterprises/ghas-buy-advanced-security-button.png)

{% data reusables.advanced-security.purchase-ghas %}

{% endif %}

## Further reading

* [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale){% ifversion ghec %}
* [AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale){% endif %}

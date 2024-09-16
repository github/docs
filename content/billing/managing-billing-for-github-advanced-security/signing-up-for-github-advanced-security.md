---
title: Signing up for GitHub Advanced Security
intro: "You can sign up for {% data variables.product.prodname_GH_advanced_security %} from your enterprise account's settings to take advantage of extra security features that {% data variables.product.prodname_dotcom %} makes available to customers under a {% data variables.product.prodname_GH_advanced_security %} license."
permissions: 'Enterprise owners can sign up for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas-ghec %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: Sign up for Advanced Security
---
{% ifversion metered-ghe-ghas %}

{% data reusables.billing.ghas-metered-billing-note-with-link %}

{% endif %}

## Purchasing {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. To the right of "GitHub Advanced Security", click **Buy Advanced Security**.

   ![Screenshot of the {% data variables.product.prodname_GH_advanced_security %} section of the enterprise licensing screen. The "Buy Advanced Security" button is outlined in orange.](/assets/images/help/enterprises/ghas-buy-advanced-security-button.png)

{% data reusables.advanced-security.purchase-ghas %}

## Further reading

* [Introduction to adopting {% data variables.product.prodname_GH_advanced_security %} at scale](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)
* [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale)

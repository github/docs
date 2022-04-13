---
title: Enforcing policies for Advanced Security in your enterprise
intro: 'You can enforce policies to manage {% data variables.product.prodname_GH_advanced_security %} features within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_GH_advanced_security %} in an enterprise.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Policies
  - Secret scanning
  - Security
redirect_from:
  - /admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-policies-for-advanced-security-in-your-enterprise-account
shortTitle: Advanced Security policies
---

## About policies for {% data variables.product.prodname_GH_advanced_security %} in your enterprise

{% data reusables.advanced-security.ghas-helps-developers %} For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."

{% ifversion ghes or ghec %}If you purchase a license for {% data variables.product.prodname_GH_advanced_security %}, any{% else %}Any{% endif %} organization on {% data variables.product.product_location %} can use {% data variables.product.prodname_advanced_security %} features. You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} use {% data variables.product.prodname_advanced_security %}.

## Enforcing a policy for the use of {% data variables.product.prodname_GH_advanced_security %} in your enterprise

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %}
{% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}

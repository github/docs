---
title: Migrating from {% data variables.product.prodname_GHAS %} to {% data variables.product.prodname_cs_and_sp %}
intro: 'Learn how you can migrate from a combined license for {% data variables.product.prodname_AS %} features to one of the new SKUs.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.ghas-billing %}'
versions:
  ghec: '*'
  ghes: '> 3.16'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Licensing
  - Code Security
  - Secret Protection
shortTitle: Migrating to new GHAS SKUs
---

## New SKUs for {% data variables.product.prodname_AS %} features

<!-- expires 2025-05-31 -->

<!-- On expiry, check with the stakeholder. If nothing else, remove the date from the start of this paragraph and check the information for Metered-billing users is still appropriate. Possibly the whole article can be deleted. Reference: release 5202 -->

From April 1, 2025, {% data variables.product.prodname_AS %} features are available under two separate stock keeping units (SKUs) for {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %} users. {% data variables.product.prodname_ghe_server %} users will be able to use the two new SKUs from version 3.17.

<!-- end expires 2025-05-31 -->

{% data reusables.advanced-security.ghas-products-bullets %}

For detailed information about the separate SKUs, see [feature summary and pricing information](https://github.com/enterprise/advanced-security#pricing) and [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).

## New users of {% data variables.product.prodname_AS %}

{% data variables.product.prodname_ghe_cloud %} users who don't already use {% data variables.product.prodname_GHAS %}, and {% data variables.product.prodname_team %} users, can start using {% data variables.product.prodname_cs_and_sp %} with metered billing immediately.

To get started, apply the GitHub-recommended security configuration or a custom configuration to one or more repositories. Applying a configuration with {% data variables.product.prodname_cs_or_sp %} enabled to internal or private repositories will be tracked and billed by active, unique committer.

For more information, see:

* [Metered billing](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#metered-billing)
* [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)
* [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration)
* [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)

In addition, enterprise customers can talk to their existing account team or [request a demo](https://github.com/security/advanced-security/secret-protection).

## Existing  {% data variables.product.prodname_AS %} users

If you already pay to use {% data variables.product.prodname_AS %} features, the migration options available to you depend on your existing billing model.

### Metered billing users

If you are an existing self-serve customer, instructions on how to transition from the combined {% data variables.product.prodname_GHAS %} product to the new {% data variables.product.prodname_GH_cs_and_sp %} SKUs will be announced over the next 30 days.

You'll receive an email notification when the new plans are available to your enterprise. Transitioning to the two separate products will be self-serve and optional.

### Volume/subscription billing users

When your license is due for renewal, you can choose to continue with licenses for {% data variables.product.prodname_GHAS %}, migrate to {% data variables.product.prodname_cs_or_sp %} subscription licenses, or migrate to metered billing.

### Questions?

If you have any questions, contact [{% data variables.product.github %}'s Sales team](https://enterprise.github.com/contact).

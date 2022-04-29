---
title: Organization
intro: "The Organization Interactions API allows organization owners to temporarily restrict which type of user can comment, open issues, or create pull requests in the organization's public repositories."
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

{% data reusables.interactions.interactions-detail %} Here's more about the types of {% data variables.product.product_name %} users:

* {% data reusables.interactions.existing-user-limit-definition %} in the organization.
* {% data reusables.interactions.contributor-user-limit-definition %} in the organization.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the organization.

Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization. To set different interaction limits for individual repositories owned by the organization, use the [Repository](#repository) interactions endpoints instead.
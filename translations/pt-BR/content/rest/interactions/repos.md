---
title: Repository
intro: 'The Repository Interactions API allows people with owner or admin access to temporarily restrict which type of user can comment, open issues, or create pull requests in a public repository.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

{% data reusables.interactions.interactions-detail %} Here's more about the types of {% data variables.product.product_name %} users:

* {% data reusables.interactions.existing-user-limit-definition %} in the repository.
* {% data reusables.interactions.contributor-user-limit-definition %} in the repository.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the repository.

If an interaction limit is enabled for the user or organization that owns the repository, the limit cannot be changed for the individual repository. Instead, use the [User](#user) or [Organization](#organization) interactions endpoints to change the interaction limit.
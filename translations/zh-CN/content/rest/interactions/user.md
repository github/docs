---
title: 用户
intro: 'The User Interactions API allows you to temporarily restrict which type of user can comment, open issues, or create pull requests on your public repositories.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户类型的更多信息：

* {% data reusables.interactions.existing-user-limit-definition %} from interacting with your repositories.
* {% data reusables.interactions.contributor-user-limit-definition %} from interacting with your repositories.
* {% data reusables.interactions.collaborator-user-limit-definition %} from interacting with your repositories.

Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user. To set different interaction limits for individual repositories owned by the user, use the [Repository](#repository) interactions endpoints instead.

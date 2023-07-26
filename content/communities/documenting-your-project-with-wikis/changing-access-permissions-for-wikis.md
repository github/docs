---
title: Changing access permissions for wikis
intro: 'Only repository collaborators can edit a {% ifversion fpt or ghec or ghes %}public{% endif %} repository''s wiki by default, but you can allow anyone with an account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} to edit your wiki.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/changing-access-permissions-for-wikis
  - /github/building-a-strong-community/changing-access-permissions-for-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Change access permissions
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under Features, unselect **Restrict editing to collaborators only**.

## Further reading

- "[AUTOTITLE](/communities/documenting-your-project-with-wikis/disabling-wikis)"

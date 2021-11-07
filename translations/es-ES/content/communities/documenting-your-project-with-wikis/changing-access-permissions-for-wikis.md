---
title: Cambiar permisos de acceso para wikis
intro: 'Only repository collaborators can edit a {% ifversion fpt or ghec or ghes %}public{% endif %} repository''s wiki by default, but you can allow anyone with an account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} to edit your wiki.'
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
shortTitle: Cambiar los permisos de acceso
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En Features (Características), quita la marca de selección de **Restrict edits to collaborators only** (Restringir ediciones a colaboradores solamente). ![Edición de restricción de wikis](/assets/images/help/wiki/wiki_restrict_editing.png)

## Leer más

- "[Inhabilitar wikis](/communities/documenting-your-project-with-wikis/disabling-wikis)"

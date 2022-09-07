---
title: Cambiar permisos de acceso para wikis
intro: 'Solo los colaboradores del repositorio pueden editar el wiki de un repositorio {% ifversion fpt or ghec or ghes %}público{% endif %}, pero puedes permitir que cualquiera que tenga una cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} edite dicho wiki.'
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

---
title: Alterar as permissões de acesso para wikis
intro: 'Somente os colaboradores do repositório podem editar o wiki de {% ifversion fpt or ghec or ghes %}público{% endif %} por padrão, mas você pode permitir que qualquer pessoa com uma conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} edite seu wiki.'
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
shortTitle: Alterar permissões de acesso
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em Features (Recursos), desmarque **Restrict edits to collaborators only** (Restringir edições apenas a colaboradores). ![Edição de restrição de wiki](/assets/images/help/wiki/wiki_restrict_editing.png)

## Leia mais

- "[Desabilitar wikis](/communities/documenting-your-project-with-wikis/disabling-wikis)"

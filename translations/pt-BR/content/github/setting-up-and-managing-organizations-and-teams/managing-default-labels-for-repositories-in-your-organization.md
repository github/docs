---
title: Gerenciar etiquetas padrão para repositórios na organização
intro: É possível personalizar as etiquetas que são incluídas em cada repositório novo na organização.
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Os proprietários da organização podem gerenciar as etiquetas padrão para repositórios na organização.

As etiquetas padrão são incluídas em cada repositório novo na organização, mas qualquer pessoa com acesso de gravação ao repositório pode editá-las ou excluí-las nesse repositório mais tarde. Adicionar, editar ou excluir uma etiqueta padrão não adiciona, edita ou exclui essa etiqueta dos repositórios existentes.

### Criar etiquetas padrão

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{{ site.data.reusables.organizations.repository-defaults }}
{% else %}
{{ site.data.reusables.organizations.repository-labels }}
{% endif %}
5. Em "Repository labels" (Etiquetas de repositório), clique em **New label** (Nova etiqueta). ![Botão New label (Nova etiqueta)](/assets/images/help/organizations/new-label-button.png)
{{ site.data.reusables.project-management.name-label }}
{{ site.data.reusables.project-management.label-description }}
{{ site.data.reusables.project-management.label-color-randomizer }}
{{ site.data.reusables.project-management.create-label }}

### Editar etiquetas padrão

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{{ site.data.reusables.organizations.repository-defaults }}
{% else %}
{{ site.data.reusables.organizations.repository-labels }}
{% endif %}
{{ site.data.reusables.project-management.edit-label }}
{{ site.data.reusables.project-management.name-label }}
{{ site.data.reusables.project-management.label-description }}
{{ site.data.reusables.project-management.label-color-randomizer }}
{{ site.data.reusables.project-management.save-label }}

### Excluir etiquetas padrão

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{{ site.data.reusables.organizations.repository-defaults }}
{% else %}
{{ site.data.reusables.organizations.repository-labels }}
{% endif %}
{{ site.data.reusables.project-management.delete-label }}
{{ site.data.reusables.project-management.confirm-label-deletion }}

### Leia mais

- "[Sobre etiquetas](/articles/about-labels)"

---
title: Gerenciar etiquetas padrão para repositórios na organização
intro: É possível personalizar as etiquetas que são incluídas em cada repositório novo na organização.
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Gerenciar etiquetas padrão
---

Os proprietários da organização podem gerenciar as etiquetas padrão para repositórios na organização.

As etiquetas padrão são incluídas em cada repositório novo na organização, mas qualquer pessoa com acesso de gravação ao repositório pode editá-las ou excluí-las nesse repositório mais tarde. Adicionar, editar ou excluir uma etiqueta padrão não adiciona, edita ou exclui essa etiqueta dos repositórios existentes.

## Criar etiquetas padrão

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}

5. Em "Repository labels" (Etiquetas de repositório), clique em **New label** (Nova etiqueta). ![Botão New label (Nova etiqueta)](/assets/images/help/organizations/new-label-button.png)
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

## Editar etiquetas padrão

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

## Excluir etiquetas padrão

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.delete-label %}
{% data reusables.project-management.confirm-label-deletion %}

## Leia mais

- "[Sobre etiquetas](/articles/about-labels)"

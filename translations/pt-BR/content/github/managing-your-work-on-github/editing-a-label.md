---
title: Editar uma etiqueta
intro: 'Nos repositórios em que você tem acesso de gravação, é possível editar nome, cor e descrição de uma etiqueta existente.'
redirect_from:
  - /articles/editing-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### Leia mais

- "[Sobre etiquetas](/articles/about-labels)"
- "[Criar uma etiqueta](/articles/creating-a-label)"
- "[Excluir uma etiqueta](/articles/deleting-a-label)"
- "[Aplicar etiquetas a problemas e pull requests](/articles/applying-labels-to-issues-and-pull-requests)"
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
- "[Gerenciar etiquetas padrão nos repositórios da organização](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}

---
title: Criar uma etiqueta
intro: 'Em repositórios que você tem acesso de gravação, é possível criar etiquetas para organizar problemas e pull requests.'
redirect_from:
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests/
  - /articles/creating-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Dica:** também é possível criar uma etiqueta no menu suspenso Labels (Etiquetas) em um problema ou uma pull request.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. À direita do campo de pesquisa, clique em **New label** (Nova etiqueta).
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### Leia mais

- "[Sobre etiquetas](/articles/about-labels)"
- "[Aplicar etiquetas a problemas e pull requests](/articles/applying-labels-to-issues-and-pull-requests)"
- "[Editar uma etiqueta](/articles/editing-a-label)"
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
- "[Gerenciar etiquetas padrão nos repositórios da organização](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}

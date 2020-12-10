---
title: Excluir uma etiqueta
intro: 'Nos repositórios em que você tem acesso de gravação, é possível excluir um rótulo se você já não precisa mais classificar problemas ou pull requests.'
redirect_from:
  - /articles/deleting-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

A exclusão de uma etiqueta a removerá de qualquer problema ou pull request em que ela tenha sido aplicada.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### Leia mais

- "[Aplicar etiquetas a problemas e pull requests](/articles/applying-labels-to-issues-and-pull-requests)"
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
- "[Gerenciar etiquetas padrão nos repositórios da organização](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}

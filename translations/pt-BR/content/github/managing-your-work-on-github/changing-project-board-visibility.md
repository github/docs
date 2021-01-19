---
title: Alterar a visibilidade dos quadros de projeto
intro: 'As an organization owner or project board admin, you can make a project board {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or private.'
redirect_from:
  - /articles/changing-project-board-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**Tip:** When you make your project board {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %}, organization members are given read access by default. Você pode conceder a integrantes específicos da organização permissões de gravação ou de administrador dando às equipes acesso ao quadro de projeto em que eles estão ativos ou adicionando-os ao quadro de projeto como um colaborador. Para obter mais informações, consulte "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

1. Navigate to the project board you want to make

{% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or private.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. Clique em **Salvar**.

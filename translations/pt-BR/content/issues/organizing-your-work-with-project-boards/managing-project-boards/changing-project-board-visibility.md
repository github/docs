---
title: Alterar a visibilidade dos quadros de projeto
intro: 'Como proprietário ou administrador de um projeto da organização, você pode tornar um quadro de projeto {% if currentVersion == "github-ae@latest" %}interno{% else %}público{% endif %} ou privado.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**Dica:** Ao tornar seu quadro de projeto {% if currentVersion == "github-ae@latest" %}interno{% else %}público{% endif %}, os integrantes da organização recebem acesso de leitura por padrão. Você pode conceder a integrantes específicos da organização permissões de gravação ou de administrador dando às equipes acesso ao quadro de projeto em que eles estão ativos ou adicionando-os ao quadro de projeto como um colaborador. Para obter mais informações, consulte "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

1. Acesse o quadro de projeto que você deseja tornar {% if currentVersion == "github-ae@latest" %}interno{% else %}público{% endif %} ou privado.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. Clique em **Salvar**.

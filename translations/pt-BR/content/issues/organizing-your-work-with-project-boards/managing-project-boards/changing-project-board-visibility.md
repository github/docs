---
title: 'Alterando a visibilidade de {% data variables.product.prodname_project_v1 %}'
intro: 'Como proprietário da organização ou administrador de {% data variables.projects.projects_v1_board %}, você pode tornar um {% data variables.projects.projects_v1_board %} {% ifversion ghae %}interno{% else %}público{% endif %} ou privado.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Alterar visibilidade
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**Dica:** Ao se tornar o seu {% data variables.projects.projects_v1_board %} {% ifversion ghae %}interno{% else %}público{% endif %}, os integrantes da organização recebem acesso de leitura por padrão. Você pode dar permissões de gravação ou de administrador a certos integrantes da organização, dando acesso a equipes nas quais estão ou adicionando-os ao {% data variables.projects.projects_v1_board %} como colaborador. For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% endtip %}

1. Acesse o quadro de projeto que você deseja tornar {% ifversion ghae %}interno{% else %}público{% endif %} ou privado.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. Clique em **Salvar**.

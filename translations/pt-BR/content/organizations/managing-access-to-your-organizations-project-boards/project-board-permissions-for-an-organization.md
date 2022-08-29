---
title: 'Permissões de {% data variables.product.prodname_project_v1_caps %} de para uma organização'
intro: 'Os proprietários da organização e pessoas com permissões de administrador para {% data variables.projects.projects_v1_board %} podem personalizar quem leu, escreveu e as permissões de administrador para o {% data variables.projects.projects_v1_boards %} da sua organização.'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 'Permissões do {% data variables.product.prodname_project_v1_caps %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

## Visão geral das permissões

Existem três níveis de permissões para um {% data variables.projects.projects_v1_board %} para pessoas e equipes:

{% data reusables.project-management.project-board-permissions %}

Organization owners and people with admin permissions can give a person access to an organization {% data variables.projects.projects_v1_board %} individually, as an outside collaborator or organization member, or through their membership in a team or organization. Um colaborador externo é uma pessoa que não é integrante da organização mas recebeu permissões para colaborar na organização.

Os proprietários da organização e as pessoas com permissões de administradores em um {% data variables.projects.projects_v1_board %} também podem:
- Definir permissões de quadro de projeto padrão para todos os integrantes da organização.
- Gerenciar o acesso de integrantes, equipes e colaboradores externos da organização ao quadro de projeto. Para obter mais informações, consulte "[Gerenciando o acesso da equipe a uma organização {% data variables.product.prodname_project_v1 %}](/articles/managing-team-access-to-an-organization-project-board)", "[Gerenciando o acesso de um indivíduo a uma organização {% data variables.product.prodname_project_v1 %}](/articles/managing-an-individual-s-access-to-an-organization-project-board)", ou "[Gerenciando o acesso a um {% data variables.product.prodname_project_v1 %} para os integrantes da organização](/articles/managing-access-to-a-project-board-for-organization-members)."
- Gerenciar a visibilidade do quadro de projeto. Para obter mais informações, consulte "[Gerenciando o acesso a um {% data variables.product.prodname_project_v1 %} para os integrantes da organização](/articles/managing-access-to-a-project-board-for-organization-members)".

## Permissões em cascata para {% data variables.projects.projects_v1_boards %}

{% data reusables.project-management.cascading-permissions %}

Por exemplo, se um proprietário da organização deu permissões de leitura a todos os integrantes da organização para um {% data variables.projects.projects_v1_board %}, e um administrador do {% data variables.projects.projects_v1_board %} conece a um integrante da organização permissões de gravação para esse quadro como colaborador individual, essa pessoa teria permissões de gravação no {% data variables.projects.projects_v1_board %}.

## visibilidade de {% data variables.projects.projects_v1_board_caps %}

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% data reusables.project-management.project-board-visibility %} Você pode alterar a visibilidade de {% data variables.projects.projects_v1_board %} de privada para {% ifversion ghae %}interna{% else %}{% endif %} e novamente para privada. Para obter mais informações, consulte "[Alterando a visibilidade de {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility)".

## Leia mais

- "[Alterando a visibilidade de {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility)"
- "[Gerenciando o acesso de um indivíduo a uma organização de {% data variables.product.prodname_project_v1 %}](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Gerenciando o acesso de uma equipe a uma organização de {% data variables.product.prodname_project_v1 %}](/articles/managing-team-access-to-an-organization-project-board)"
- "[Gerenciando o acesso a um {% data variables.product.prodname_project_v1 %} para os integrantes da organização](/articles/managing-access-to-a-project-board-for-organization-members)".

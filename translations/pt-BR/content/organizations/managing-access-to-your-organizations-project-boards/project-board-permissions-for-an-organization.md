---
title: Permissões do quadro de projeto da organização
intro: 'Proprietários da organização e pessoas com permissões de administradores de quadro de projeto podem personalizar quem tem permissões de leitura, gravação e de administrador nos quadros de projeto da organização.'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

### Visão geral das permissões

Existem três níveis de permissões em um quadro de projeto para pessoas e equipes:

{% data reusables.project-management.project-board-permissions %}

Os proprietários da organização e pessoas com permissões de administrador podem conceder acesso a alguém a um quadro de projeto da organização individualmente, como colaborador externo ou integrante da organização, ou ainda, por meio da associação dele a uma equipe ou organização. Um colaborador externo é uma pessoa que não é integrante da organização mas recebeu permissões para colaborar na organização.

Proprietários da organização e pessoas com permissões de administrador em um quadro de projeto também podem:
- Definir permissões de quadro de projeto padrão para todos os integrantes da organização.
- Gerenciar o acesso de integrantes, equipes e colaboradores externos da organização ao quadro de projeto. Para obter mais informações, consulte "[Gerenciar o acesso da equipe a um quadro de projeto da organização](/articles/managing-team-access-to-an-organization-project-board)", "[Gerenciar o acesso de um indivíduo a um quadro de projeto da organização](/articles/managing-an-individual-s-access-to-an-organization-project-board)" ou "[Gerenciar o acesso de integrantes da organização a um quadro de projeto](/articles/managing-access-to-a-project-board-for-organization-members)".
- Gerenciar a visibilidade do quadro de projeto. Para obter mais informações, consulte "[Gerenciar o acesso de integrantes da organização a um quadro de projeto](/articles/managing-access-to-a-project-board-for-organization-members)".

### Permissões de acesso em cascata para quadros de projeto

{% data reusables.project-management.cascading-permissions %}

Por exemplo, se um proprietário da organização concedeu a todos os integrantes de uma equipe permissões de leitura em um quadro de projeto e um administrador de quadro de projeto concede permissões de gravação a um integrante da equipe naquele quadro de projeto como um colaborador individual, essa pessoa teria permissões de gravação no quadro de projeto.

### Visibilidade do quadro de projeto

{% data reusables.project-management.project-board-visibility %} Você pode alterar a visibilidade do quadro de projeto de privado para {% if currentVersion == "github-ae@latest" %}interno{% else %}public{% endif %} e novamente para privado. Para obter mais informações, consulte "[Alterar a visibilidade do quadro de projeto](/articles/changing-project-board-visibility)".

### Leia mais

- "[Alterar a visibilidade do quadro de projeto](/articles/changing-project-board-visibility)"
- "[Gerenciar o acesso de um indivíduo a um quadro de projeto da organização](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Gerenciar o acesso da equipe a um quadro de projeto da organização](/articles/managing-team-access-to-an-organization-project-board)"
- "[Gerenciar o acesso de integrantes da organização a um quadro de projeto](/articles/managing-access-to-a-project-board-for-organization-members)"

---
title: Gerenciar acesso de integrantes da organização a um quadro de projeto
intro: 'Como proprietário da organização ou administrador de quadro de projeto, você pode configurar um nível de permissão padrão para todos os integrantes da organização.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Por padrão, os integrantes de uma organização têm acesso de gravação nos quadros de projetos da organização, exceto se os proprietários da organização ou os administradores de quadro de projeto configurarem permissões diferentes para quadros de projetos específicos.

### Configurar um nível referencial de permissão para todos os integrantes da organização

{% tip %}

**Dica:** você pode dar a um integrante da organização as permissões mais altas em um um quadro de projeto. Para obter mais informações, consulte "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. Em "Organization member permission" (Permissão de integrante da organização), escolha um nível referencial de permissão para todos os integrantes da organização: **Read** (Leitura), **Write** (Gravação), **Admin** (Administrador) ou **None** (Nenhuma). ![Opções de permissões a quadro de projeto para todos os integrantes da organização](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. Clique em **Salvar**.

### Leia mais

- "[Gerenciar o acesso de um indivíduo a um quadro de projeto da organização](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Gerenciar o acesso da equipe a um quadro de projeto da organização](/articles/managing-team-access-to-an-organization-project-board)"
- "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)"

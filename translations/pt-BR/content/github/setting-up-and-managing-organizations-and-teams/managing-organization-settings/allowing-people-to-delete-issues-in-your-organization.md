---
title: Permitir que as pessoas excluam problemas em sua organização
intro: Os proprietários da organização podem permitir que determinadas pessoas excluam problemas em repositórios que pertencem à sua organização.
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---
Por padrão, os problemas não podem ser excluídos dos repositórios de uma organização. Um proprietário da organização deve habilitar esse recurso primeiro para todos os repositórios da organização.

Uma vez habilitado, os proprietários da organização e as pessoas com permissões de administrador em um repositório pertencente à organização podem excluir os problemas. As pessoas com permissões de administrador em um repositório incluem integrantes da organização e colaboradores externos com privilégios administrativos. Para obter mais informações, consulte "[ Níveis de permissão do repositório da organização](/articles/repository-permission-levels-for-an-organization/)" e "[Excluir um problema](/articles/deleting-an-issue)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Issue deletion" (Exclusão do problema), selecione **Allow members to delete issues for this organization** (Permitir que integrantes excluam problemas dessa organização). ![Caixa de seleção para permitir que as pessoas excluam problemas](/assets/images/help/settings/issue-deletion.png)
6. Clique em **Salvar**.

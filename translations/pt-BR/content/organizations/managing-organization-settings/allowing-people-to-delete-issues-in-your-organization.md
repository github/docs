---
title: Permitir que as pessoas excluam problemas em sua organização
intro: Os proprietários da organização podem permitir que determinadas pessoas excluam problemas em repositórios que pertencem à sua organização.
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Permitir exclusão de problema
---

Por padrão, os problemas não podem ser excluídos dos repositórios de uma organização. Um proprietário da organização deve habilitar esse recurso primeiro para todos os repositórios da organização.

Once enabled, organization owners and people with admin access in an organization-owned repository can delete issues. People with admin access in a repository include organization members and outside collaborators who were given admin access. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)" and "[Deleting an issue](/articles/deleting-an-issue)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Issue deletion" (Exclusão do problema), selecione **Allow members to delete issues for this organization** (Permitir que integrantes excluam problemas dessa organização). ![Caixa de seleção para permitir que as pessoas excluam problemas](/assets/images/help/settings/issue-deletion.png)
6. Clique em **Salvar**.

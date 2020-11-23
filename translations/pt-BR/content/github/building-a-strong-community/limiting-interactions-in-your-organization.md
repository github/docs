---
title: Restringir interações na organização
intro: 'You can temporarily enforce a period of limited activity for certain users in all public repositories owned by your organization.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
permissions: Organization owners can limit interactions in an organization.
---

### About temporary interaction limits

Limiting interactions in your organization enables temporary interaction limits for all public repositories owned by the organization. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your organization's public repositories.

{% data reusables.community.types-of-interaction-limits %}

Members of the organization are not affected by any of the limit types.

Quando você habilita restrições de atividades para toda a organização, você não pode habilitar ou desabilitar restrições de interação em repositórios individuais. For more information on limiting activity for an individual repository, see "[Limiting interactions in your repository](/articles/limiting-interactions-in-your-repository)."

Organization owners can also block users for a specific amount of time. Após o término do bloqueio, o usuário é automaticamente desbloqueado. Para obter mais informações, consulte "[Bloquear um usuário em sua organização](/articles/blocking-a-user-from-your-organization)".

### Restringir interações na organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
1. In the organization settings sidebar, click **Moderation settings**. !["Moderation settings" in the organization settings sidebar](/assets/images/help/organizations/org-settings-moderation-settings.png)
1. Under "Moderation settings", click **Interaction limits**. !["Interaction limits" in the organization settings sidebar](/assets/images/help/organizations/org-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![Opções Temporary interaction limit (Restrições de interação temporárias)](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

### Leia mais
- "[Denunciar abuso ou spam](/articles/reporting-abuse-or-spam)"
- "[Gerenciar o acesso de um indivíduo a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Níveis de permissão do repositório de conta de usuário](/articles/permission-levels-for-a-user-account-repository)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"

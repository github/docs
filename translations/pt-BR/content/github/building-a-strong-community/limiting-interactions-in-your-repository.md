---
title: Restringir interações no repositório
intro: 'You can temporarily enforce a period of limited activity for certain users on a public repository.'
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
permissions: People with admin permissions to a repository can temporarily limit interactions in that repository.
---

### About temporary interaction limits

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your repository.

{% data reusables.community.types-of-interaction-limits %}

You can also enable activity limitations on all repositories owned by your user account or an organization. If a user-wide or organization-wide limit is enabled, you can't limit activity for individual repositories owned by the account. For more information, see "[Limiting interactions for your user account](/github/building-a-strong-community/limiting-interactions-for-your-user-account)" and "[Limiting interactions in your organization](/github/building-a-strong-community/limiting-interactions-in-your-organization)."

### Restringir interações no repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the left sidebar, click **Moderation settings**. !["Moderation settings" in repository settings sidebar](/assets/images/help/repository/repo-settings-moderation-settings.png)
1. Under "Moderation settings", click **Interaction limits**. ![Interaction limits (Restrições de interação) em Settings (Configurações) do repositório ](/assets/images/help/repository/repo-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![Opções Temporary interaction limit (Restrições de interação temporárias)](/assets/images/help/repository/temporary-interaction-limits-options.png)

### Leia mais
- "[Denunciar abuso ou spam](/articles/reporting-abuse-or-spam)"
- "[Gerenciar o acesso de um indivíduo a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Níveis de permissão do repositório de conta de usuário](/articles/permission-levels-for-a-user-account-repository)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"

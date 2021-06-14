---
title: Restringir interações na organização
intro: É possível aplicar temporariamente um período de atividade limitada para determinados usuários em todos os repositórios públicos pertencentes à sua organização.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
permissions: Os proprietários da organização podem limitar interações em uma organização.
topics:
  - comunidade
---
### Sobre limites temporários de interação

O limite de interações na organização habilita limites de interação temporária para todos os repositórios públicos pertencentes à organização. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Após a duração do seu limite passar, os usuários podem retomar a atividade normal nos repositórios públicos da sua organização.

{% data reusables.community.types-of-interaction-limits %}

Os integrantes da organização não são afetados por nenhum dos tipos de limite.

Quando você habilita restrições de atividades para toda a organização, você não pode habilitar ou desabilitar restrições de interação em repositórios individuais. Para obter mais informações sobre limitação de atividade para um repositório individual, consulte "[Limitar interações no repositório](/articles/limiting-interactions-in-your-repository)".

Os proprietários da organização também podem bloquear os usuários por um determinado período de tempo. Após o término do bloqueio, o usuário é automaticamente desbloqueado. Para obter mais informações, consulte "[Bloquear um usuário em sua organização](/articles/blocking-a-user-from-your-organization)".

### Restringir interações na organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
1. Na barra lateral de configurações da organização, clique em **Configurações de moderação**. !["Configurações de moderação" na barra lateral das configurações da organização](/assets/images/help/organizations/org-settings-moderation-settings.png)
1. Em "Configurações de moderação", clique em **Limites de interação**. !["Limites de interação" na barra lateral de configurações da organização](/assets/images/help/organizations/org-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![Opções Temporary interaction limit (Restrições de interação temporárias)](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

### Leia mais
- "[Denunciar abuso ou spam](/articles/reporting-abuse-or-spam)"
- "[Gerenciar o acesso de um indivíduo a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Níveis de permissão do repositório de conta de usuário](/articles/permission-levels-for-a-user-account-repository)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"

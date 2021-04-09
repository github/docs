---
title: Restringir interações no repositório
intro: É possível aplicar temporariamente um período de atividades limitadas para certos usuários em um repositório público.
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
permissions: As pessoas com permissões de administrador em um repositório podem limitar temporariamente as interações nesse repositório.
topics:
  - comunidade
---

### Sobre limites temporários de interação

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Após a duração do seu limite, os usuários podem retomar à atividade normal no seu repositório.

{% data reusables.community.types-of-interaction-limits %}

Você também pode habilitar limitações de atividade em todos os repositórios pertencentes à sua conta de usuário ou organização. Se o limite de um usuário ou organização estiver habilitado, não será possível limitar a atividade para repositórios individuais pertencentes à conta. Para obter mais informações, consulte "[Limitar interações para a sua conta de usuário](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-user-account)" e "[Limitar interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)".

### Restringir interações no repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Na barra lateral esquerda, clique em **Configurações de moderação**. !["Configurações de moderação" na barra lateral de configurações do repositório](/assets/images/help/repository/repo-settings-moderation-settings.png)
1. Em "Configurações de moderação", clique em **Limites de interação**. ![Interaction limits (Restrições de interação) em Settings (Configurações) do repositório ](/assets/images/help/repository/repo-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![Opções Temporary interaction limit (Restrições de interação temporárias)](/assets/images/help/repository/temporary-interaction-limits-options.png)

### Leia mais
- "[Denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Gerenciar o acesso de um indivíduo a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Níveis de permissão do repositório de conta de usuário](/articles/permission-levels-for-a-user-account-repository)"
- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"

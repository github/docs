---
title: Restringir interações no repositório
intro: É possível aplicar temporariamente um período de atividades limitadas para certos usuários em um repositório público.
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limitar interações no repositório
---

## Sobre limites temporários de interação

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Após a duração do seu limite, os usuários podem retomar à atividade normal no seu repositório.

{% data reusables.community.types-of-interaction-limits %}

Você também pode habilitar limitações de atividade em todos os repositórios pertencentes à sua conta pessoal ou a uma organização. Se o limite de um usuário ou organização estiver habilitado, não será possível limitar a atividade para repositórios individuais pertencentes à conta. Para obter mais informações, consulte "[Limitar interações para a sua conta pessoal](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-user-account)" e "[Limitar interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)".

## Restringir interações no repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Na barra lateral, selecione **Opções de moderação de {% octicon "comment-discussion" aria-label="The comment-discussion icon" %}** e, em seguida, clique em **limites de interação**.
{% data reusables.community.set-interaction-limit %}
  ![Opções Temporary interaction limit (Restrições de interação temporárias)](/assets/images/help/repository/temporary-interaction-limits-options.png)

## Leia mais
- "[Denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Gerenciar o acesso de um indivíduo a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Níveis de permissão para o repositório de uma conta pessoal](/articles/permission-levels-for-a-user-account-repository)"
- "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Gerenciando moderadores na sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"

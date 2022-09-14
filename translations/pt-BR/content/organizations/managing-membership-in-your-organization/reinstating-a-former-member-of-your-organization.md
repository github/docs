---
title: Como reinstaurar um antigo membro da sua organização
intro: 'Os proprietários da organização podem {% ifversion fpt or ghec %}convidar ex-integrantes da organização a voltar a juntar-se{% else %}e adicionar ex-integrantes {% endif%} à sua organização e escolher se deseja restaurar a função anterior, as permissões de acesso, as bifurcações e as configurações dessa pessoa.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Reinstate a member
ms.openlocfilehash: b9ad15f9fc882206ed7b335bcc6dea698c2f1f8e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145093240'
---
## Sobre a reintegração de integrantes

Se um usuário for removido da sua organização de uma das seguintes maneiras, os privilégios e configurações de acesso do usuário serão salvos por três meses. 

- Você removeu manualmente o usuário da organização. Para obter mais informações, confira "[Como remover um membro da sua organização](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)".{% ifversion not ghae %}
- O usuário foi removido da sua organização porque você solicitou aos integrantes e colaboradores externos que habilitassem a autenticação de dois fatores (2FA). Para obter mais informações, confira "[Como exigir a autenticação de dois fatores na sua organização](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)".{% endif %}{% ifversion fpt or ghec %}
- O usuário foi removido da sua organização porque você aplicou o logon único SAML. Para obter mais informações, confira "[Como impor o logon único do SAML para sua organização](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}
- Você converteu um integrante da organização em um colaborador externo. Para obter mais informações, confira "[Como converter um membro da organização em um colaborador externo](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)".

Você poderá restaurar os privilégios do usuário se {% ifversion fpt or ghec %}convidá-lo{% else %}adicioná-lo{% endif %} novamente na organização durante esse período.

{% note %}

**Observação:** {% data reusables.saml.removed-users-can-rejoin %} Você não precisa convidar esses usuários para ingressar novamente. Em vez disso, o usuário pode acessar sua conta pessoal, acessar a organização e clicar no banner para efetuar a autenticação por meio do logon único SAML.

{% endnote %}

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Ao restabelecer um ex-integrante da organização, você pode restaurar:
 - A função do usuário na organização
 - As bifurcações privadas de repositórios de propriedade da organização
 - A associação nas equipes da organização
 - Os acessos e permissões anteriores nos repositórios da organização
 - As estrelas dos repositórios da organização
 - As atribuições de problemas na organização
 - As assinaturas do repositório (configurações de notificação para inspecionar, não inspecionar ou ignorar as atividades de um repositório)

{% ifversion ghes %} Se um membro da organização foi removido da organização porque não usou a autenticação de dois fatores e sua organização ainda exige que os membros usem a 2FA, o ex-membro precisa habilitar a autenticação de dois fatores para que você possa restabelecer a associação dele.
{% endif %}

{% ifversion fpt or ghec %} Se a sua organização tiver uma assinatura paga por usuário, uma licença não utilizada precisará estar disponível para que você possa restabelecer um ex-membro da organização. Para obter mais informações, confira "[Sobre os preços por usuário](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-scim %} {% endif %}

## Como reinstaurar um antigo membro da sua organização

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
6. Escolha se deseja restaurar os privilégios anteriores dessa pessoa na organização ou limpar os privilégios anteriores e definir novas permissões de acesso. Depois, clique em **Convidar e restabelecer** ou **Convidar e começar de novo**.
  ![Escolher se as informações serão restauradas](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. Escolha se deseja restaurar os privilégios anteriores dessa pessoa na organização ou limpar os privilégios anteriores e definir novas permissões de acesso. Depois, clique em **Adicionar e restabelecer** ou **Adicionar e começar de novo**.
  ![Escolher se os privilégios serão restaurados](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. Se você limpou os privilégios anteriores de um ex-membro da organização, escolha uma função para o usuário e, opcionalmente, adicione-o a algumas equipes e clique em **Enviar convite**.
  ![Opções Função e Equipe e botão Enviar convite](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. Se você limpou os privilégios anteriores de um ex-membro da organização, escolha uma função para o usuário e, opcionalmente, adicione-o a algumas equipes e clique em **Adicionar membro**.
  ![Opções Função e Equipe e botão Adicionar membro](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Leitura adicional

- "[Como converter um membro da organização em um colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"

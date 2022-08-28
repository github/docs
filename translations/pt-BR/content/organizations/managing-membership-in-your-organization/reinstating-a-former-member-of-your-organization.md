---
title: Restabelecer ex-integrantes da organização
intro: 'Os proprietários da organização podem {% ifversion fpt %}convidar ex-integrantes da organização a voltar a juntar-se{% else %}e adicinar ex-integrantes {% endif%} à sua organização e escolher se deseja restaurar a função anterior, as permissões de acesso, as bifurcações e as configurações dessa pessoa.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Restabelecer um integrante
---

## Sobre a reintegração de integrantes

Se você [remover um usuário da sua organização](/articles/removing-a-member-from-your-organization){% ifversion ghae %} ou{% else %},{% endif %} [converter um integrante da organização em um colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator){% ifversion not ghae %}, ou um usuário foi removido da sua organização porque você [pediu aos integrantes e colaboradores externos para habilitar a autenticação de dois fatores (2FA)](/articles/requiring-two-factor-authentication-in-your-organization){% endif %}, os privilégios e configurações do usuário ficarão salvos por três meses. Você poderá restaurar os privilégios do usuário se {% ifversion fpt %}convidá-lo{% else %}adicioná-lo{% endif %} novamente na organização durante esse período.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Ao restabelecer um ex-integrante da organização, você pode restaurar:
 - A função do usuário na organização
 - As bifurcações privadas de repositórios de propriedade da organização
 - A associação nas equipes da organização
 - Os acessos e permissões anteriores nos repositórios da organização
 - As estrelas dos repositórios da organização
 - As atribuições de problemas na organização
 - As assinaturas do repositório (configurações de notificação para inspecionar, não inspecionar ou ignorar as atividades de um repositório)

{% ifversion ghes %}
Se um integrante foi removido da organização por não usar a autenticação de dois fatores e a organização ainda exigir essa autenticação, o ex-integrante precisará habilitar a autenticação de dois fatores antes de você restabelecer a associação.
{% endif %}

{% ifversion fpt %}
Se a sua organização tem uma assinatura paga por usuário, uma licença não utilizada deve estar disponível antes de você poder restabelecer um antigo integrante da organização. Para obter mais informações, consulte "[Sobre preços por usuário](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-scim %}
{% endif %}

## Restabelecer ex-integrantes da organização

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% ifversion fpt %}
6. Escolha se deseja restaurar os privilégios anteriores da pessoa na organização ou apagar os privilégios anteriores e definir novas permissões de acesso, depois clique em **Invite and reinstate** (Convidar e restabelecer) ou em **Invite and start fresh** (Convidar e começar do zero). ![Escolher restaurar as informações ou não](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Escolha se deseja restaurar os privilégios anteriores da pessoa na organização ou apagar os privilégios anteriores e definir novas permissões de acesso, depois clique em **Add and reinstate** (Adicionar e restabelecer) ou em **Add and start fresh** (Adicionar e começar do zero). ![Escolher se deseja restaurar os privilégios](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% ifversion fpt %}
7. Se você apagou os privilégios anteriores de um ex-integrante da organização, escolha uma função para o usuário e adicione-o em algumas equipes (opcional), depois clique em **Send invitation** (Enviar convite). ![Opções Role and team (Função e equipe) e botão send invitation (enviar convite)](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Se você apagou os privilégios anteriores de um ex-integrante da organização, escolha uma função para o usuário e adicione-o em algumas equipes (opcional), depois clique em **Add member** (Adicionar integrante). ![Opções Role and team (Função e equipe) e botão add member (adicionar integrante)](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% ifversion fpt %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Leia mais

- "[Converter um integrante da organização em colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"

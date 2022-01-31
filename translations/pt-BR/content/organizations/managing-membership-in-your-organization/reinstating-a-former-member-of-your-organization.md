---
title: Restabelecer ex-integrantes da organização
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
shortTitle: Restabelecer um integrante
---

## Sobre a reintegração de integrantes

If a user is removed from your organization in one of the following ways, the user's access privileges and settings are saved for three months.

- You manually removed the user from your organization. For more information, see "[Removing a member from your organization](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)."{% ifversion not ghae %}
- The user was removed from your organization because you've required members and outside collaborators to enable two-factor authentication (2FA). For more information, see "[Requiring two-factor authentication in your organization](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)."{% endif %}{% ifversion fpt or ghec %}
- The user was removed from your organization because you enforced SAML single sign-on. For more information, see "[Enforcing SAML single sign-on for your organization](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}{% endif %}
- You converted an organization member to an outside collaborator. Para obter mais informações, consulte "[Convertendo um integrante da organização em um colaborador externo](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)."

Você poderá restaurar os privilégios do usuário se {% ifversion fpt or ghec %}convidá-lo{% else %}adicioná-lo{% endif %} novamente na organização durante esse período.

{% note %}

**Note:** {% data reusables.saml.removed-users-can-rejoin %} You do not need to invite these users to rejoin. Instead, the user can sign into their personal account, navigate to the organization, and click the banner to authenticate via SAML single sign-on.

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

{% ifversion ghes %}
Se um integrante foi removido da organização por não usar a autenticação de dois fatores e a organização ainda exigir essa autenticação, o ex-integrante precisará habilitar a autenticação de dois fatores antes de você restabelecer a associação.
{% endif %}

{% ifversion fpt or ghec %}
Se a sua organização tem uma assinatura paga por usuário, uma licença não utilizada deve estar disponível antes de você poder restabelecer um antigo integrante da organização. Para obter mais informações, consulte "[Sobre preços por usuário](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-scim %}
{% endif %}

## Restabelecer ex-integrantes da organização

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% ifversion fpt or ghec %}
6. Escolha se deseja restaurar os privilégios anteriores da pessoa na organização ou apagar os privilégios anteriores e definir novas permissões de acesso, depois clique em **Invite and reinstate** (Convidar e restabelecer) ou em **Invite and start fresh** (Convidar e começar do zero). ![Escolher restaurar as informações ou não](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Escolha se deseja restaurar os privilégios anteriores da pessoa na organização ou apagar os privilégios anteriores e definir novas permissões de acesso, depois clique em **Add and reinstate** (Adicionar e restabelecer) ou em **Add and start fresh** (Adicionar e começar do zero). ![Escolher se deseja restaurar os privilégios](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% ifversion fpt or ghec %}
7. Se você apagou os privilégios anteriores de um ex-integrante da organização, escolha uma função para o usuário e adicione-o em algumas equipes (opcional), depois clique em **Send invitation** (Enviar convite). ![Opções Role and team (Função e equipe) e botão send invitation (enviar convite)](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Se você apagou os privilégios anteriores de um ex-integrante da organização, escolha uma função para o usuário e adicione-o em algumas equipes (opcional), depois clique em **Add member** (Adicionar integrante). ![Opções Role and team (Função e equipe) e botão add member (adicionar integrante)](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% ifversion fpt or ghec %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Leia mais

- "[Converter um integrante da organização em colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"

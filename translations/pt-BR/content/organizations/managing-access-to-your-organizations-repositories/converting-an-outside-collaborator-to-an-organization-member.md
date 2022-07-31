---
title: Remover um colaborador externo em integrante da organização
intro: 'Se desejar fornecer a um colaborador externo nos repositórios da sua organização permissões mais amplas dentro da organização, você poderá {% ifversion fpt or ghec %}convidá-lo a se tornar um integrante{% else %}torná-lo um integrante{% endif %} da organização.'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'Organization owners can {% ifversion fpt or ghec %}invite users to join{% else %}add users to{% endif %} an organization.'
topics:
  - Organizations
  - Teams
shortTitle: Converter colaborador em integrante
---

{% ifversion fpt or ghec %}
Se a organização tiver uma assinatura paga por usuário, ela deverá ter uma licença não utilizada disponível para você poder convidar um integrante para participar da organização ou restabelecer um ex-integrante da organização. Para obter mais informações, consulte "[Sobre preços por usuário](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %}
Se sua organização [exigir integrantes, use a autenticação de dois fatores](/articles/requiring-two-factor-authentication-in-your-organization), os usuários {% ifversion fpt or ghec %}que você convidar devem [habilitar a autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa) antes de aceitar o convite.{% else %}deve [habilitar a autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa) antes que você possa adicioná-los à organização.{% endif %}
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% ifversion fpt or ghec %}
5. À direita do nome do colaborador externo que você deseja que se torne integrante, use o menu suspenso {% octicon "gear" aria-label="The gear icon" %} e clique em **Convidar para a organização**.![Convidar colaboradores externos para a organização](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png)
{% else %}
5. À direita do nome do colaborador externo que você deseja que se torne integrante, clique em **Invite to organization** (Convidar para a organização).![Convidar colaboradores externos para a organização](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png)
{% endif %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role-send-invitation %}
{% ifversion fpt or ghec %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Leia mais

- "[Converter um integrante da organização em colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"

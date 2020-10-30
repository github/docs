---
title: Remover um colaborador externo em integrante da organização
intro: 'Se desejar fornecer a um colaborador externo nos repositórios da sua organização permissões mais amplas dentro da organização, você poderá {% if currentVersion == "free-pro-team@latest" %}convidá-lo a se tornar um integrante{% else %}torná-lo um integrante{% endif %} da organização.'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Dicas**:
- Somente proprietários da organização podem {% if currentVersion == "free-pro-team@latest" %}convidar usuários para ingressar em{% else %}adicionar usuários a{% endif %} uma organização. Para obter mais informações, consulte "[Níveis de permissão para uma organização](/articles/permission-levels-for-an-organization)".{% if currentVersion == "free-pro-team@latest" %}
- Se a organização tiver uma assinatura paga por usuário, ela deverá ter uma licença não utilizada disponível para você poder convidar um integrante para participar da organização ou restabelecer um ex-integrante da organização. Para obter mais informações, consulte "[Sobre preços por usuário](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-expiration %}{% endif %}
- Se a organização [exigir que os integrantes usem a autenticação de dois fatores](/articles/requiring-two-factor-authentication-in-your-organization), os usuários {% if currentVersion == "free-pro-team@latest" %}que você convida deverão [habilitar a autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa) para que possam aceitar o convite.{% else %}deverão [habilitar a autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa) para que você possa adicioná-los à organização.{% endif %}

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
5. À direita do nome do colaborador externo que você deseja que se torne um membro, use o
{% octicon "gear" aria-label="The gear icon" %} menu suspenso e clique em **Convidar para a organização**.![Convidar colaboradores externos para a organização](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png)
{% else %}
5. À direita do nome do colaborador externo que você deseja que se torne integrante, clique em **Invite to organization** (Convidar para a organização).![Convidar colaboradores externos para a organização](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png)
{% endif %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role-send-invitation %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### Leia mais

- "[Converter um integrante da organização em colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"

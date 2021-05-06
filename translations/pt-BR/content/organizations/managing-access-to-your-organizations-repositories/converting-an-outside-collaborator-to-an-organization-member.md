---
title: Remover um colaborador externo em integrante da organização
intro: 'Se você quiser conceder a um colaborador externo permissões mais amplas nos repositórios da sua organização dentro de sua organização, você pode {% if currentVersion == "free-pro-team@latest" %} convidá-los a tornar-se um integrante de{% else %}torná-los um integrante da{% endif %} organização.'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: 'Organization owners can {% if currentVersion == "free-pro-team@latest" %}invite users to join{% else %}add users to{% endif %} an organization.'
topics:
  - Organizations
  - Teams
---

{% if currentVersion == "free-pro-team@latest" %}
Se a organização tiver uma assinatura paga por usuário, ela deverá ter uma licença não utilizada disponível para você poder convidar um integrante para participar da organização ou restabelecer um ex-integrante da organização. Para obter mais informações, consulte "[Sobre preços por usuário](/articles/about-per-user-pricing)". {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% if currentVersion != "github-ae@latest" %}
Se a sua organização [exigir que os integrantes usem a autenticação de dois fatores](/articles/requiring-two-factor-authentication-in-your-organization), os usuários {% if currentVersion == "free-pro-team@latest" %}que você convidar devem [habilitar a autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa) antes que possam aceitar o convite.{% else %}devem [habilitar a autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa) antes de adicioná-la à organização.{% endif %}
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
5. To the right of the name of the outside collaborator you want to become a member, use the {% octicon "gear" aria-label="The gear icon" %} drop-down menu and click **Invite to organization**.![Convidar colaboradores externos para a organização](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png)
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

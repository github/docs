---
title: Adicionar pessoas à organização
intro: 'Você pode tornar qualquer pessoa um integrante da sua organização usando o respectivo nome de usuário no {% data variables.product.product_name %} ou o endereço de e-mail dela.'
redirect_from:
  - Adding people to your organization
versions:
  enterprise-server: '*'
  github-ae: '*'
permissions: 'Os proprietários da organização podem adicionar pessoas a uma organização.'
---

{% if currentVersion != "github-ae@latest" %}
Se sua organização [exige que os integrantes usem a autenticação de dois fatores](/articles/requiring-two-factor-authentication-in-your-organization), os usuários deverão [habilitar a autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa) para que você possa adicioná-los à organização.
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.choose-user-license %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}

### Leia mais
- "[Adicionar integrantes da organização a uma equipe](/articles/adding-organization-members-to-a-team)"

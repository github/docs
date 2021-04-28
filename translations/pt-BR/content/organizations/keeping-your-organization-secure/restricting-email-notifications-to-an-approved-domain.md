---
title: Restringir notificações de e-mail para um domínio aprovado
intro: 'Para evitar a divulgação de informações da organização para contas pessoais, os proprietários da organização podem restringir as notificações de e-mail sobre a atividade da organização a um domínio verificado.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

### Sobre restrições de e-mail

Quando notificações de e-mail restritas são habilitadas em uma organização, os integrantes só podem usar um endereço de e-mail associado aos domínios verificados da organização para receber notificações de e-mail sobre a atividade da organização. Para obter mais informações, consulte "[Verificar o domínio da sua organização](/articles/verifying-your-organization-s-domain)".

Os colaboradores externos não estão sujeitos a restrições de notificações por e-mail para domínios verificados. Para obter mais informações sobre colaboradores externos, consulte "[Níveis de permissão para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization#outside-collaborators)".

Se a sua organização pertencer a uma conta corporativa, os integrantes da organização poderão receber notificações sobre quaisquer domínios verificados para a conta corporativa, além de quaisquer domínios verificados para a organização. Para obter mais informações, consulte "[Verificar o domínio da sua conta corporativa](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)".

### Restringir notificações de e-mail para um domínio aprovado

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. Clique em **Salvar**.

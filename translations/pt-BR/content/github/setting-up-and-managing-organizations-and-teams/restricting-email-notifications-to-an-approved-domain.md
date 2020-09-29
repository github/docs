---
title: Restringir notificações de e-mail para um domínio aprovado
intro: 'Para evitar a divulgação de informações da organização para contas pessoais, os proprietários da organização podem restringir as notificações de e-mail sobre a atividade da organização a um domínio verificado.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
---

Quando as restrições das notificações de e-mail são habilitadas na organização, os integrantes só conseguem receber notificações de e-mail sobre atividades da organização em um endereço de e-mail associado ao domínio verificado da organização. Para obter mais informações, consulte "[Verificar o domínio da sua organização](/articles/verifying-your-organization-s-domain)".

Os colaboradores externos não estão sujeitos a restrições de notificações por e-mail para domínios verificados. Para obter mais informações sobre colaboradores externos, consulte "[Níveis de permissão para uma organização](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. Em "Enforcement preferences" (Preferências de aplicação), selecione **Restrict email notifications to domain email** (Restringir notificações de e-mail aos e-mails do domínio). ![Caixa de seleção para restringir as notificações de e-mail aos e-mails do domínio verificado](/assets/images/help/organizations/restrict-email-notifications-to-domain.png)
6. Clique em **Salvar**.

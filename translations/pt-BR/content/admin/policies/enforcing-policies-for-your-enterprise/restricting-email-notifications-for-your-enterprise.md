---
title: Restringir notificações por e-mail para sua empresa
intro: 'Você pode impedir que as informações da sua empresa se convertam em contas de e-mail pessoais, restringindo domínios em que os integrantes podem receber notificações por e-mail sobre a atividade em organizações pertencentes à sua empresa.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policies
redirect_from:
  - /admin/policies/restricting-email-notifications-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/restricting-email-notifications-for-your-enterprise-account
shortTitle: Restringir notificações de e-mail
---

## Sobre restrições de e-mail para a sua empresa

Ao restringir as notificações por e-mail, os integrantes da empresa só podem usar um endereço de e-mail em um domínio verificado ou aprovado para receber notificações de e-mail sobre a atividade em organizações pertencentes à sua empresa.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

Os domínios podem ser herdados da empresa ou configurados para a organização específica. Para mais informações, consulte "[verificar ou aprovar um domínio para a sua empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)" e[Restringir notificações de e-mail para a sua organização](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

{% data reusables.notifications.email-restrictions-verification %}

Se restrições de e-mail estiverem habilitadas para uma empresa, os proprietários da organização não poderão desabilitar restrições de e-mail para qualquer organização que pertence à empresa. Se ocorrerem alterações que resultem em uma organização não ter domínios verificados ou aprovados, herdado de uma empresa pertencente à organização ou para uma organização específica, as restrições de e-mail serão desabilitadas para a organização.

## Restringir notificações por e-mail para sua empresa

Antes de restringir as notificações por e-mail para a sua empresa, você deve verificar ou aprovar pelo menos um domínio para a empresa. {% ifversion ghec %} Para obter mais informações, consulte "[Verificar ou aprovar um domínio para a sua empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.organizations.restrict-email-notifications %}
1. Clique em **Salvar**.

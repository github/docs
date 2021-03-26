---
title: Restringir notificações de e-mail da conta corporativa para domínios aprovados
intro: Você pode impedir que as informações da sua empresa vazem para contas pessoais, restringindo notificações de e-mail sobre a atividade em organizações pertencentes à sua conta corporativa para domínios verificados.
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
permissions: Os proprietários das empresas podem restringir notificações de e-mail para uma conta corporativa.
topics:
  - enterprise
---

### Sobre restrições de e-mail para a sua conta corporativa

Ao restringir notificações de e-mail para domínios verificados, os integrantes da empresa só poderão usar um endereço de e-mail associado a um domínio verificado para receber notificações de e-mail sobre a atividade em organizações pertencentes à sua conta corporativa. Os domínios podem ser herdados da conta corporativa ou configurados para a organização específica. Para obter mais informações sobre restrições de e-mail para organizações, consulte "[Restringir notificações de e-mail para um domínio aprovado](/github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain)".

Se restrições de e-mail estiverem habilitadas para uma conta corporativa, os proprietários da organização não poderão desabilitar restrições de e-mail para qualquer organização que pertence à conta corporativa. Se ocorrerem alterações que resultem em uma organização não ter domínios verificados, herdado de uma conta corporativa pertencente à organização ou para uma organização específica, as restrições de e-mail serão desabilitadas para a organização.

### Restringir notificações de e-mail para a conta corporativa

Antes de restringir as notificações de e-mail para a conta corporativa, você deve verificar pelo menos um domínio para a conta corporativa. Para obter mais informações, consulte "[Verificar o domínio da sua conta corporativa](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.organizations.restrict-email-notifications %}
1. Clique em **Salvar**.

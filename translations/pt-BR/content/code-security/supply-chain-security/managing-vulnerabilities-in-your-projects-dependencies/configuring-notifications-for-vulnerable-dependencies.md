---
title: Configurar notificações para dependências vulneráveis
shortTitle: Configurar notificações
intro: 'Otimize como você recebe notificações sobre alertas de {% data variables.product.prodname_dependabot %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
---

<!--For this article in earlier GHES versions, see /content/github/managing-security-vulnerabilities-->

## Sobre notificações para dependências vulneráveis

Quando {% data variables.product.prodname_dependabot %} detecta dependências vulneráveis nos seus repositórios, geramos um alerta de {% data variables.product.prodname_dependabot %} e o exibimos na aba Segurança do repositório. {% data variables.product.product_name %} notifica os mantenedores dos repositórios afetados sobre o novo alerta de acordo com as suas preferências de notificação.{% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %} está habilitado por padrão em todos os repositórios públicos. Para {% data variables.product.prodname_dependabot_alerts %}, por padrão, você receberá {% data variables.product.prodname_dependabot_alerts %} por e-mail, agrupado pela vulnerabilidade específica.
{% endif %}

{% ifversion fpt or ghec %}Se você é proprietário de uma organização, você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios da sua organização com um clique. Você também pode definir se a detecção de dependências vulneráveis será habilitada ou desabilitada para repositórios recém-criados. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)".
{% endif %}

{% ifversion ghes or ghae-issue-4864 %}
Por padrão, se o proprietário da sua empresa configurou e-mail para notificações na sua empresa, você receberá {% data variables.product.prodname_dependabot_alerts %} por e-mail.

Os proprietários das empresas também podem habilitar {% data variables.product.prodname_dependabot_alerts %} sem notificações. Para obter mais informações, consulte[Habilitando o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} na sua conta corporativa](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)."
{% endif %}

## Configurar notificações para {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes > 3.1 or ghec %}
Quando um novo alerta do {% data variables.product.prodname_dependabot %} é detectado, {% data variables.product.product_name %} notifica todos os usuários com acesso a {% data variables.product.prodname_dependabot_alerts %} para o repositório de acordo com suas preferências de notificação. Você receberá alertas se estiver acompanhando o repositório, caso tenha habilitado notificações para alertas de segurança ou para toda a atividade no repositório e não estiver ignorando o repositório. Para obter mais informações, consulte “[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
{% endif %}

Você pode definir as configurações de notificação para si mesmo ou para sua organização no menu suspenso Gerenciar notificações {% octicon "bell" aria-label="The notifications bell" %} exibido na parte superior de cada página. Para obter mais informações, consulte “[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![Opções {% data variables.product.prodname_dependabot_alerts %} ](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**Observação:** Você pode filtrar as suas notificações sobre {% data variables.product.company_short %} para mostrar alertas de {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} Para obter mais informações, consulte "[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Como reduzir o ruído das notificações para dependências vulneráveis

Se você estiver preocupado em receber muitas notificações para {% data variables.product.prodname_dependabot_alerts %}, recomendamos que você opte pelo resumo semanal de e-mail ou desabilite as notificações enquanto mantém {% data variables.product.prodname_dependabot_alerts %} habilitado. Você ainda pode navegar para ver seu {% data variables.product.prodname_dependabot_alerts %} na aba Segurança do seu repositório. Para obter mais informações, consulte "[Visualizar e atualizar dependências vulneráveis no seu repositório](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository). "

## Leia mais

- "[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Gerenciar notificações da sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

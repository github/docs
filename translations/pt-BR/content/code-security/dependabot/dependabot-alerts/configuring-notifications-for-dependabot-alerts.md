---
title: Configurando notificações para alertas do Dependabot
shortTitle: Configurar notificações
intro: 'Otimize a forma como você recebe notificações sobre {% data variables.product.prodname_dependabot_alerts %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
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

## Sobre notificações para {% data variables.product.prodname_dependabot_alerts %}

Quando {% data variables.product.prodname_dependabot %} detectar dependências vulneráveis {% ifversion GH-advisory-db-supports-malware %} ou malware{% endif %} em seus repositórios, geramos um alerta de {% data variables.product.prodname_dependabot %} e o exibimos na guia Segurança do repositório. {% data variables.product.product_name %} notifica os mantenedores dos repositórios afetados sobre o novo alerta de acordo com as suas preferências de notificação.{% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %} está habilitado por padrão em todos os repositórios públicos. Para {% data variables.product.prodname_dependabot_alerts %}, por padrão, você receberá {% data variables.product.prodname_dependabot_alerts %} por e-mail, agrupado pela vulnerabilidade específica.
{% endif %}

{% ifversion fpt or ghec %}Se você é proprietário de uma organização, você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios da sua organização com um clique. Você também pode definir se {% data variables.product.prodname_dependabot_alerts %} será habilitado ou desabilitado para repositórios recém-criados. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)".
{% endif %}

{% ifversion ghes or ghae %}
Por padrão, se o proprietário da sua empresa configurou e-mail para notificações na sua empresa, você receberá {% data variables.product.prodname_dependabot_alerts %} por e-mail.

Os proprietários das empresas também podem habilitar {% data variables.product.prodname_dependabot_alerts %} sem notificações. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
{% endif %}

## Configurar notificações para {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes or ghec %}
Quando um novo alerta do {% data variables.product.prodname_dependabot %} é detectado, {% data variables.product.product_name %} notifica todos os usuários com acesso a {% data variables.product.prodname_dependabot_alerts %} para o repositório de acordo com suas preferências de notificação. Você receberá alertas se estiver acompanhando o repositório, caso tenha habilitado notificações para alertas de segurança ou para toda a atividade no repositório e não estiver ignorando o repositório. Para obter mais informações, consulte “[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
{% endif %}

Você pode definir as configurações de notificação para si mesmo ou para sua organização no menu suspenso Gerenciar notificações {% octicon "bell" aria-label="The notifications bell" %} exibido na parte superior de cada página. Para obter mais informações, consulte “[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![Opções {% data variables.product.prodname_dependabot_alerts %} ](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**Observação:** Você pode filtrar suas notificações em {% data variables.product.company_short %} para mostrar {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} Para obter mais informações, consulte "[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Como reduzir o ruído das notificações para {% data variables.product.prodname_dependabot_alerts %}

Se você estiver preocupado em receber muitas notificações para {% data variables.product.prodname_dependabot_alerts %}, recomendamos que você opte pelo resumo semanal de e-mail ou desabilite as notificações enquanto mantém {% data variables.product.prodname_dependabot_alerts %} habilitado. Você ainda pode navegar para ver seu {% data variables.product.prodname_dependabot_alerts %} na aba Segurança do seu repositório. Para obter mais informações, consulte "[Visualizando e atualizando {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

## Leia mais

- "[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Gerenciar notificações da sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

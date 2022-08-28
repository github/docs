---
title: Configurar notificações para dependências vulneráveis
shortTitle: Configurar notificações
intro: 'Otimize como você recebe notificações sobre alertas de {% data variables.product.prodname_dependabot %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
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

### Sobre notificações para dependências vulneráveis

Quando {% data variables.product.prodname_dependabot %} detecta dependências vulneráveis nos seus repositórios, geramos um alerta de {% data variables.product.prodname_dependabot %} e o exibimos na aba Segurança do repositório. {% data variables.product.product_name %} notifica os mantenedores dos repositórios afetados sobre o novo alerta de acordo com as suas preferências de notificação.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_dependabot %} está habilitado por padrão em todos os repositórios públicos. Para {% data variables.product.prodname_dependabot_alerts %}, por padrão, você receberá {% data variables.product.prodname_dependabot_alerts %} por e-mail, agrupado pela vulnerabilidade específica.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}Se você é proprietário de uma organização, você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios da sua organização com um clique. Você também pode definir se a detecção de dependências vulneráveis será habilitada ou desabilitada para repositórios recém-criados. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
Por padrão, se o administrador do site tiver configurado o e-mail para notificações na sua empresa, você receberá {% data variables.product.prodname_dependabot_alerts %} por e-mail.{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}Os administradores do site também podem habilitar {% data variables.product.prodname_dependabot_alerts %} sem notificações. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

### Configurar notificações para {% data variables.product.prodname_dependabot_alerts %}

Você pode definir as configurações de notificação para si mesmo ou para sua organização no menu suspenso Gerenciar notificações {% octicon "bell" aria-label="The notifications bell" %} exibido na parte superior de cada página. Para obter mais informações, consulte “[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![Opções {% data variables.product.prodname_dependabot_alerts %} ](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**Observação:** Você pode filtrar as suas notificações sobre {% data variables.product.company_short %} para mostrar alertas de {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} Para obter mais informações, consulte "[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

### Como reduzir o ruído das notificações para dependências vulneráveis

Se você estiver preocupado em receber muitas notificações para {% data variables.product.prodname_dependabot_alerts %}, recomendamos que você opte pelo resumo semanal de e-mail ou desabilite as notificações enquanto mantém {% data variables.product.prodname_dependabot_alerts %} habilitado. Você ainda pode navegar para ver seu {% data variables.product.prodname_dependabot_alerts %} na aba Segurança do seu repositório. Para obter mais informações, consulte "[Visualizar e atualizar dependências vulneráveis no seu repositório](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository). "

### Leia mais

- "[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Gerenciar notificações da sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

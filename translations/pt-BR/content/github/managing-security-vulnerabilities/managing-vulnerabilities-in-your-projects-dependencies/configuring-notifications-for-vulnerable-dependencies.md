---
title: Configurar notificações para dependências vulneráveis
shortTitle: Configurar notificações
intro: 'Otimiza como você recebe notificações sobre {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}alertas de segurança{% endif %}.'
versions:
  enterprise-server: '>=2.21 <=2.22'
topics:
  - Security
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
---
<!--See /content/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies for the current version of this article -->

### Sobre notificações para dependências vulneráveis

{% if currentVersion ver_gt "enterprise-server@2.21" %}When {% data variables.product.prodname_dependabot %} detects vulnerable dependencies in your repositories, we generate a {% data variables.product.prodname_dependabot %} alert and display it on the Security tab for the repository. {% data variables.product.product_name %} notifies the maintainers of affected repositories about the new alert according to their notification preferences.{% else %}When {% data variables.product.product_name %} detects vulnerable dependencies in your repositories, it sends security alerts.{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.21" %}
O administrador do seu site precisa habilitar alertas de segurança para dependências vulneráveis para
{% data variables.product.product_location %} antes de você poder usar o recurso. Para obter mais informações, consulte "[Habilitar alertas para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server){% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
Por padrão, se o administrador do site tiver configurado e-mail para notificações na sua empresa, você receberá
{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} por e-mail.{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}Os administradores do site também podem habilitar {% data variables.product.prodname_dependabot_alerts %} sem notificações. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}Site administrators can also enable security alerts without notifications. Para obter mais informações, consulte "[Habilitar alertas de segurança para dependências vulneráveis no {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

### Configurar notificações para {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %}

Você pode definir as configurações de notificação para si mesmo ou para sua organização no menu suspenso Gerenciar notificações {% octicon "bell" aria-label="The notifications bell" %} exibido na parte superior de cada página. Para obter mais informações, consulte “[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
  ![Opções {% data variables.product.prodname_dependabot_alerts %} ](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![Opções de alerta de segurança](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**Observação:** Você filtrar as notificações de {% data variables.product.company_short %} para mostrar os alertas de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% else %}segurança {% endif %} do {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} Para obter mais informações, consulte "[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

### Como reduzir o ruído das notificações para dependências vulneráveis

If you are concerned about receiving too many notifications for {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, we recommend you opt into the weekly email digest, or turn off notifications while keeping {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} enabled. You can still navigate to see your {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} in your repository's Security tab.

### Leia mais

- "[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Gerenciar notificações da sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

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

{% if currentVersion ver_gt "enterprise-server@2.21" %}Quando {% data variables.product.prodname_dependabot %} detecta dependências vulneráveis nos seus repositórios, geramos um alerta de {% data variables.product.prodname_dependabot %} e o exibimos na aba Segurança do repositório. {% data variables.product.product_name %} notifica os mantenedores dos repositórios afetados sobre o novo alerta de acordo com as suas preferências de notificação.{% else %}Quando {% data variables.product.product_name %} detecta dependências vulneráveis no seu repositório, ele envia alertas de segurança.{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.21" %}
O administrador do seu site precisa habilitar alertas de segurança para dependências vulneráveis para {% data variables.product.product_location %} antes de poder usar o recurso. Para obter mais informações, consulte "[Habilitar alertas para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server){% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
Por padrão, se o administrador do site tiver configurado o e-mail para notificações na sua empresa, você receberá {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} por e-mail.{% endif %}

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

Se você estiver preocupado em receber muitas notificações para {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %}, recomendamos que você opte pelo resumo semanal por e-mail ou que você desative as notificações ao mesmo tempo em que mantém os {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} habilitados. Você ainda pode acessar os seus {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} na aba de Segurança do seu repositório.

### Leia mais

- "[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Gerenciar notificações da sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

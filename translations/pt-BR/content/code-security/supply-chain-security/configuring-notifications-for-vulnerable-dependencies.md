---
title: Configurar notificações para dependências vulneráveis
shortTitle: Configurar notificações
intro: 'Otimiza como você recebe notificações sobre {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}alertas de segurança{% endif %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - segurança
---

### Sobre notificações para dependências vulneráveis

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 1" %}Quando {% data variables.product.prodname_dependabot %} detecta dependências vulneráveis nos seus repositórios, geramos um alerta {% data variables.product.prodname_dependabot %} e exibimo-lo na aba Segurança do repositório. {% data variables.product.product_name %} notifica os mantenedores dos repositórios afetados sobre o novo alerta de acordo com suas preferências de notificação.{% else %}Quando {% data variables.product.product_name %} detecta dependências vulneráveis no seu repositório, ele envia alertas de segurança.{% endif %}{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_dependabot %} está habilitado por padrão em todos os repositórios públicos. Para {% data variables.product.prodname_dependabot_alerts %}, por padrão, você receberá {% data variables.product.prodname_dependabot_alerts %} por e-mail, agrupado pela vulnerabilidade específica.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}Se você é proprietário de uma organização, você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios da sua organização com um clique. Você também pode definir se a detecção de dependências vulneráveis será habilitada ou desabilitada para repositórios recém-criados. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.21" %}
O administrador do seu site precisa habilitar alertas de segurança para dependências vulneráveis para {% data variables.product.product_location %} antes de poder usar o recurso. Para obter mais informações, consulte "[Habilitar alertas para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server){% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
Por padrão, se o administrador do site tiver configurado o e-mail para notificações na sua empresa, você receberá {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} por e-mail.{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}Os administradores do site também podem habilitar {% data variables.product.prodname_dependabot_alerts %} sem notificações. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}Site administrators can also enable security alerts without notifications. Para obter mais informações, consulte "[Habilitar alertas de segurança para dependências vulneráveis no {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

### Configurar notificações para {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %}

Você pode definir as configurações de notificação para si mesmo ou para sua organização no menu suspenso Gerenciar notificações {% octicon "bell" aria-label="The notifications bell" %} exibido na parte superior de cada página. Para obter mais informações, consulte “[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
  ![Opções {% data variables.product.prodname_dependabot_alerts %} ](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![Opções de alerta de segurança](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**Observação:** Você filtrar as notificações de {% data variables.product.company_short %} para mostrar os alertas de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% else %}segurança {% endif %} do {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 9" % %}{% data reusables.repositories.security-alerts-x-github-severity %} Para obter mais informações, consulte {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 0" %}"[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[Sobre notificações de e-mail](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}."{% endif %}

### Como reduzir o ruído das notificações para dependências vulneráveis

Se você estiver preocupado em receber muitas notificações para {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 1" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %}, recomendamos que você opte pelo resumo semanal por e-mail ou desative as notificações ao mesmo tempo que mantém os {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 1" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} habilitados. Você ainda pode navegar para ver os seus {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 1" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} na aba de Segurança do seu repositório. {% if currentVersion == "free-pro-team@latest" %} Para obter mais informações, consulte "[Visualizar e atualizar dependências vulneráveis no seu repositório](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)".{% endif %}

### Leia mais

- "[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Gerenciar notificações da sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

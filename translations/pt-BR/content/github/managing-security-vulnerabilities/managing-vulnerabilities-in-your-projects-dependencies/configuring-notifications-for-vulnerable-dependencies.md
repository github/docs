---
title: Configurar notificações para dependências vulneráveis
shortTitle: Configurar notificações
intro: 'Otimiza como você recebe notificações sobre {% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}alertas de segurança{% endif %}.'
versions:
  ghes: '* <=2.22'
topics:
  - Security
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
---

<!--See /content/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies for the current version of this article -->

## Sobre notificações para dependências vulneráveis

{% ifversion ghes %}Quando {% data variables.product.prodname_dependabot %} detecta dependências vulneráveis nos seus repositórios, geramos um alerta de {% data variables.product.prodname_dependabot %} e o exibimos na aba Segurança do repositório. {% data variables.product.product_name %} notifica os mantenedores dos repositórios afetados sobre o novo alerta de acordo com as suas preferências de notificação.{% else %}Quando {% data variables.product.product_name %} detecta dependências vulneráveis no seu repositório, ele envia alertas de segurança.{% endif %}

{% ifversion ghes %}
Por padrão, se o administrador do site tiver configurado o e-mail para notificações na sua empresa, você receberá {% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} por e-mail.{% endif %}

{% ifversion ghes %}Os administradores do site também podem habilitar {% data variables.product.prodname_dependabot_alerts %} sem notificações. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

## Configurar notificações para {% ifversion ghes %}alertas de segurança do {% data variables.product.prodname_dependabot_alerts %}{% else %}{% endif %}

Você pode definir as configurações de notificação para si mesmo ou para sua organização no menu suspenso Gerenciar notificações {% octicon "bell" aria-label="The notifications bell" %} exibido na parte superior de cada página. Para obter mais informações, consulte “[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion ghes %}
  ![Opções {% data variables.product.prodname_dependabot_alerts %} ](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![Opções de alerta de segurança](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**Observação:** Você filtrar as notificações de {% data variables.product.company_short %} para mostrar os alertas de {% ifversion fpt or ghes %}{% else %}segurança {% endif %} do {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} Para obter mais informações, consulte "[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Como reduzir o ruído das notificações para dependências vulneráveis

Se você estiver preocupado em receber muitas notificações para {% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %}, recomendamos que você opte pelo resumo semanal por e-mail ou que você desative as notificações ao mesmo tempo em que mantém os {% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} habilitados. Você ainda pode acessar os seus {% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} na aba de Segurança do seu repositório.

## Leia mais

- "[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Gerenciar notificações da sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

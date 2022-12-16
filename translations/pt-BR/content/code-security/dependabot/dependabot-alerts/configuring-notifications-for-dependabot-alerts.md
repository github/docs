---
title: Configurando notificações para alertas do Dependabot
shortTitle: Configure notifications
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
ms.openlocfilehash: 570a41570821b61aa68d625c92e6e9384e893f1a
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/05/2022
ms.locfileid: '148134889'
---
## Sobre as notificações de {% data variables.product.prodname_dependabot_alerts %}.

Quando o {% data variables.product.prodname_dependabot %} detecta dependências vulneráveis {% ifversion GH-advisory-db-supports-malware %} ou malware{% endif %} nos seus repositórios, geramos um alerta do {% data variables.product.prodname_dependabot %} que é exibido na guia Segurança do repositório. O {% data variables.product.product_name %} notifica os mantenedores dos repositórios afetados sobre o novo alerta de acordo com as preferências de notificação.{% ifversion fpt or ghec %} Por padrão, o {% data variables.product.prodname_dependabot %} está habilitado em todos os repositórios públicos. Para {% data variables.product.prodname_dependabot_alerts %}, por padrão, você receberá {% data variables.product.prodname_dependabot_alerts %} por e-mail, agrupado pela vulnerabilidade específica.
{% endif %} 

{% ifversion fpt or ghec %}Se você é proprietário de uma organização, habilite ou desabilite os {% data variables.product.prodname_dependabot_alerts %} em todos os repositórios da organização com um clique. Você também pode definir se os {% data variables.product.prodname_dependabot_alerts %} serão habilitados ou desabilitados para repositórios recém-criados. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)".
{% endif %}

{% ifversion ghes or ghae %} Por padrão, se o proprietário da sua empresa configurou o email para receber notificações sobre sua empresa, você receberá os {% data variables.product.prodname_dependabot_alerts %} por email.

Os proprietários das empresas também podem habilitar {% data variables.product.prodname_dependabot_alerts %} sem notificações. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

## Configurar notificações para {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes or ghec %} Quando um novo alerta do {% data variables.product.prodname_dependabot %} é detectado, o {% data variables.product.product_name %} notifica todos os usuários com acesso aos {% data variables.product.prodname_dependabot_alerts %} no repositório de acordo com as respectivas preferências de notificação. Você receberá alertas se estiver acompanhando o repositório, caso tenha habilitado notificações para alertas de segurança ou para toda a atividade no repositório e não estiver ignorando o repositório. Para obter mais informações, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
{% endif %}

Você pode definir as configurações de notificação para si mesmo ou para sua organização no menu suspenso Gerenciar notificações {% octicon "bell" aria-label="The notifications bell" %} exibido na parte superior de cada página. Para obter mais informações, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion update-notification-settings-22 %} ![Captura de tela das opções {% data variables.product.prodname_dependabot_alerts %} ](/assets/images/help/dependabot/dependabot-notification-frequency.png){% endif %}{% ifversion ghes > 3.7 or ghae > 3.7 %} ![Captura de tela das opções {% data variables.product.prodname_dependabot_alerts %} ](/assets/images/help/enterprises/dependabot-alerts-options-no-UI.png){% endif %}{% ifversion ghes < 3.8 or ghae < 3.8 %} ![Captura de tela das opções {% data variables.product.prodname_dependabot_alerts %} ](/assets/images/help/notifications-v2/dependabot-alerts-options.png){% endif %}


{% note %}

**Observação:** você pode filtrar suas notificações no {% data variables.product.company_short %} para mostrar os {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, confira "[Como gerenciar notificações na sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} Para obter mais informações, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Como reduzir as notificações desnecessárias de {% data variables.product.prodname_dependabot_alerts %}.

Se você estiver preocupado em receber muitas notificações para {% data variables.product.prodname_dependabot_alerts %}, recomendamos que você opte pelo resumo semanal de e-mail ou desabilite as notificações enquanto mantém {% data variables.product.prodname_dependabot_alerts %} habilitado. Você ainda pode navegar para ver os {% data variables.product.prodname_dependabot_alerts %} na guia Segurança do repositório. Para obter mais informações, confira "[Como ver os {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)".

## Leitura adicional

- "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)"
- "[Como gerenciar notificações na sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"

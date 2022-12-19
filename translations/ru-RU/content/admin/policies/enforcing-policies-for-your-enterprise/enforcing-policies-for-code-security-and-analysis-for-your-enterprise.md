---
title: Применение политик безопасности и анализа кода для вашего предприятия
intro: 'Вы можете применить политики для управления использованием {% ifversion security-feature-enablement-policies %}code security and analysis{% else %}{% данных variables.product.prodname_GH_advanced_security %}{% endif %} в организациях предприятия.'
permissions: 'Enterprise owners can enforce {% ifversion security-feature-enablement-policies %}code security and analysis{% endif %} policies for {% data variables.product.prodname_GH_advanced_security %} in an enterprise.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Policies
  - Secret scanning
  - Security
redirect_from:
  - /admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-policies-for-advanced-security-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise
shortTitle: Code security & analysis
ms.openlocfilehash: 25c580911b69decabe94fd7f376e17bcea949b35
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093780'
---
{% ifversion security-feature-enablement-policies %}
## Сведения о политиках безопасности и анализа кода в организации

Вы можете применять политики для управления использованием функций безопасности и анализа кода в организациях, принадлежащих вашей организации. Вы можете разрешить или запретить пользователям доступ администратора к репозиторию, чтобы включить или отключить функции безопасности и анализа.
{% else %}
## Сведения о политиках для {% data variables.product.prodname_GH_advanced_security %} на предприятии
{% endif %}

{% data reusables.advanced-security.ghas-helps-developers %} Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security).

{% ghes ifversion или ghec %} Если вы приобрели лицензию для {% данных variables.product.prodname_GH_advanced_security %}, любая{% еще %}Любая{% endif %} организация{% ifversion ghec %} принадлежит вашей организации{% endif %} для {% данных variables.location.product_location %} может использовать функции {% данных variables.product.prodname_advanced_security %}. Вы можете применять политики для управления тем, как члены предприятия в {% data variables.product.product_name %} используют {% data variables.product.prodname_advanced_security %}.

{% ifversion security-feature-enablement-policies %}
## Применение политики для управления использованием {% данных variables.product.prodname_dependabot_alerts %} в организации

Во всех организациях, принадлежащих вашей организации, вы можете разрешить участникам с разрешениями администратора для репозиториев включить или отключить {% данных variables.product.prodname_dependabot_alerts %} и изменить параметры {% данных variables.product.prodname_dependabot_alerts %}.

{% данных, многократно используемых.enterprise-accounts.access-enterprise %} {% данных reusables.enterprise-accounts.policies-tab %} {% данных, многократно используемых.enterprise-accounts.code-security-and-analysis-policies %}
1. В разделе "Изменение параметров {% данных variables.product.prodname_dependabot_alerts %}" используйте раскрывающееся меню и выберите политику.

   ![Снимок экрана: раскрывающийся список "Изменение параметров оповещений Dependabot"](/assets/images/help/enterprises/change-dependabot-alerts-settings.png)

{% endif %}

## Применение политики для использования {% данных variables.product.prodname_GH_advanced_security %} в организациях предприятия

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% данных, многократно используемых.enterprise-accounts.access-enterprise %} {% данных reusables.enterprise-accounts.policies-tab %} {% ifversion security-feature-enablement-policies %} {% данных, многократно используемых.enterprise-accounts.code-security-and-analysis-policies %} {% else %} {% данных, многократно используемых.enterprise-accounts.advanced-security-policies %} {% endif %} {% ifversion security-feature-enablement-policies %}
1. В разделе "{% данных variables.product.prodname_GH_advanced_security %} политик в разделе "Доступность" выберите раскрывающееся меню и выберите политику для организаций, принадлежащих вашей организации.

   ![Снимок экрана: раскрывающийся список "Доступность"](/assets/images/help/enterprises/advanced-security-policies-availability.png){% else %}

{% данных, многократно используемых.enterprise-accounts.advanced-security-organization-policy-drop-down %} {% endif %} {% данных, многократно используемых.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}

{% ifversion security-feature-enablement-policies %}
## Применение политики для управления использованием функций {% данных variables.product.prodname_GH_advanced_security %} в репозиториях предприятия

Во всех организациях предприятия вы можете разрешить или запретить пользователям доступ администратора к репозиториям для управления использованием функций {% данных variables.product.prodname_GH_advanced_security %} в репозиториях. {% данных, многократно используемых.advanced-security.ghas-must-be-enabled %}

{% данных, многократно используемых.enterprise-accounts.access-enterprise %} {% данных reusables.enterprise-accounts.policies-tab %} {% данных, многократно используемых.enterprise-accounts.code-security-and-analysis-policies %}
1. В разделе "{% данных variables.product.prodname_GH_advanced_security %} политик в разделе "Включение или отключение {% данных variables.product.prodname_GH_advanced_security %}" используйте раскрывающееся меню и выберите политику.

   ![Снимок экрана: раскрывающийся список "Включение или отключение данных {% variables.product.prodname_GH_advanced_security %}"](/assets/images/help/enterprises/advanced-security-policies-enable-or-disable.png)

## Применение политики для управления использованием {% данных variables.product.prodname_secret_scanning %} в репозиториях предприятия

Во всех организациях предприятия вы можете разрешить или запретить пользователям доступ администратора к репозиториям для управления и настройки {% данных variables.product.prodname_secret_scanning %} для репозиториев. {% данных, многократно используемых.advanced-security.ghas-must-be-enabled %}

{% данных, многократно используемых.enterprise-accounts.access-enterprise %} {% данных reusables.enterprise-accounts.policies-tab %} {% данных, многократно используемых.enterprise-accounts.code-security-and-analysis-policies %}
1. В разделе "{% данных variables.product.prodname_GH_advanced_security %} политик в разделе "Изменение параметров {% данных variables.product.prodname_secret_scanning %}" используйте раскрывающееся меню и выберите политику.

   ![Снимок экрана: раскрывающийся список "Изменение данных {% variables.product.prodname_secret_scanning %} параметров"](/assets/images/help/enterprises/advanced-security-policies-secret-scanning.png)

{% endif %}

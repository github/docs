---
title: Управление предельными суммами расходов для Codespaces
intro: Можно настроить предельную сумму расходов для использования {% data variables.product.prodname_codespaces %}.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Enterprise
- Organizations
- Spending limits
- User account
- Billing
shortTitle: Spending limits
ms.openlocfilehash: 340dae657304e5a2c9fb31d3a205e0b45f47a7b5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145088065"
---
## <a name="about-spending-limits-for--data-variablesproductprodname_codespaces-"></a>Сведения о предельной сумме расходов для {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

После достижения предельной суммы расходов в вашей организации или репозитории больше нельзя будет создавать новые среды codespace и запускать существующие среды codespace. Все существующие запущенные среды codespace не отключаются. Если вы не измените предельную сумму расходов, с вас не будет взиматься сумма сверх установленного предела.

Дополнительные сведения о стоимости использования {% data variables.product.prodname_codespaces %} см. в статье "[Сведения о выставлении счетов за {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)".

{% ifversion ghec %}
## <a name="using-your-azure-subscription"></a>Использование подписки Azure
Если вы приобрели {% data variables.product.prodname_enterprise %} в рамках соглашения Microsoft Enterprise Agreement, то можете подключить свой идентификатор подписки Azure к корпоративной учетной записи, чтобы включить {% data variables.product.prodname_codespaces %} и оплачивать использование этой функции. Дополнительные сведения см. в разделе [Подключение подписки Azure к организации](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

## <a name="managing-the-spending-limit-for--data-variablesproductprodname_codespaces--for-your-organization"></a>Управление предельной суммой расходов за {% data variables.product.prodname_codespaces %} для организации

Владельцы организаций и менеджеры по выставлению счетов могут управлять предельной суммой расходов за {% data variables.product.prodname_codespaces %} для организации.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## <a name="managing-the-spending-limit-for--data-variablesproductprodname_codespaces--for-your-enterprise-account"></a>Управление предельной суммой расходов за {% data variables.product.prodname_codespaces %} для корпоративной учетной записи

Владельцы предприятий и менеджеры по выставлению счетов могут управлять предельной суммой расходов за {% data variables.product.prodname_codespaces %} для корпоративной учетной записи.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Над разделом "Ежемесячное использование {% data variables.product.prodname_codespaces %}" нажмите **Предельная сумма расходов**.
  ![Вкладка "Предельная сумма расходов"](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>Экспорт изменений при достижении предельной суммы расходов

{% data reusables.codespaces.exporting-changes %}
## <a name="managing-usage-and-spending-limit-email-notifications"></a>Управление уведомлениями по электронной почте об использовании и предельной сумме расходов

Уведомления по электронной почте отправляются владельцам учетных записей и менеджерам по выставлению счетов, когда расходы достигают 50 %, 75 %, 90 % и 100 % от предельной суммы расходов для вашей учетной записи. 

Эти уведомления можно в любое время отключить в нижней части страницы **Предельная сумма расходов**.

![Снимок экрана: параметры уведомлений о счетах по электронной почте](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## <a name="further-reading"></a>Дополнительные материалы

- "[Ограничение доступа к типам компьютеров](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
- [Управление выставлением счетов для Codespaces в вашей организации](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)

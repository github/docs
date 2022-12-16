---
title: Управление предельными суммами расходов для GitHub Codespaces
intro: Можно настроить предельную сумму расходов для использования {% data variables.product.prodname_github_codespaces %}.
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
redirect_from:
- /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
ms.openlocfilehash: e9765c3aa4d02e0246a420532d93c6d4bbac4fcf
ms.sourcegitcommit: f21fd2e4622528489b02916e5faa5c1fc2d51a87
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/13/2022
ms.locfileid: "148045119"
---
## Сведения об управлении предельными суммами расходов для {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

{% данных, многократно используемых.codespaces.codespaces-monthly-billing %} 

После достижения предельной суммы расходов в вашей организации или репозитории больше нельзя будет создавать новые среды codespace и запускать существующие среды codespace. Все существующие запущенные среды codespace не отключаются. Если вы не измените предельную сумму расходов, с вас не будет взиматься сумма сверх установленного предела.

Дополнительные сведения о ценах на {% данных variables.product.prodname_github_codespaces %} см. в разделе "[О выставлении счетов за {% данных variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% ifversion ghec %}
## Использование подписки Azure
Если вы приобрели {% данных variables.product.prodname_enterprise %} через microsoft Соглашение Enterprise, вы можете подключить идентификатор подписки Azure к корпоративной учетной записи, чтобы включить и оплатить использование {% данных variables.product.prodname_github_codespaces %}. Дополнительные сведения см. в разделе [Подключение подписки Azure к организации](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

## Управление предельной суммой расходов за {% data variables.product.prodname_codespaces %} для организации

Владельцы организаций и менеджеры по выставлению счетов могут управлять лимитом расходов для {% данных variables.product.prodname_github_codespaces %} для организации.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Управление предельной суммой расходов за {% data variables.product.prodname_codespaces %} для корпоративной учетной записи

Владельцы предприятия и менеджеры по выставлению счетов могут управлять лимитом расходов для {% данных variables.product.prodname_github_codespaces %} для корпоративной учетной записи.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Нажмите кнопку " **Предел расходов**".
  ![Вкладка "Предельная сумма расходов"](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Экспорт изменений при достижении предельной суммы расходов

{% data reusables.codespaces.exporting-changes %}
## Управление уведомлениями по электронной почте об использовании и предельной сумме расходов

Уведомления по электронной почте отправляются владельцам учетных записей и менеджерам по выставлению счетов, когда расходы достигают 50 %, 75 %, 90 % и 100 % от предельной суммы расходов для вашей учетной записи. 

Эти уведомления можно в любое время отключить в нижней части страницы **Предельная сумма расходов**.

![Снимок экрана: параметры уведомлений о счетах по электронной почте](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## Дополнительные материалы

- "[Ограничение доступа к типам компьютеров](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
- "[Управление затратами на {% данных variables.product.prodname_github_codespaces %} в организации](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"

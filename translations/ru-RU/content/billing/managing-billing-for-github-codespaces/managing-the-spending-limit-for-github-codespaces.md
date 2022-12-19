---
title: Управление предельной суммой расходов для GitHub Codespaces
intro: 'Можно настроить предельную сумму расходов для использования {% data variables.product.prodname_github_codespaces %}.'
shortTitle: Spending limit
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces
ms.openlocfilehash: 87dd5204bb41ddaef911562cfb4662125e04139a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160296'
---
## Сведения о предельной сумме расходов на {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-free-for-personal-intro %} Дополнительные сведения см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% data reusables.codespaces.codespaces-spending-limit-requirement %} {% data reusables.codespaces.codespaces-monthly-billing %} 

После достижения предельной суммы расходов вы больше не сможете создавать новые codespace и запускать существующие codespace. Все существующие codespace, которые по-прежнему выполняются, будут завершены в течение короткого времени, но плата за использование не будет взиматься после достижения предельной суммы расходов.

{% ifversion ghec %}
## Использование подписки Azure
Если вы приобрели {% data variables.product.prodname_enterprise %} через Соглашение Enterprise Майкрософт, вы можете подключить идентификатор подписки Azure к корпоративной учетной записи, чтобы включить и оплатить использование {% data variables.product.prodname_github_codespaces %}. Дополнительные сведения см. в разделе [Подключение подписки Azure к организации](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

## Управление предельной суммой расходов на {% data variables.product.prodname_github_codespaces %} для личной учетной записи

Вы можете установить предельную сумму расходов для {% data variables.product.prodname_github_codespaces %} для своей личной учетной записи.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

## Управление предельной суммой расходов {% data variables.product.prodname_github_codespaces %} для учетной записи организации

Владельцы организаций и менеджеры по выставлению счетов могут управлять предельной суммой расходов для {% data variables.product.prodname_github_codespaces %} для организации.

{% note %}

**Примечание**. Организации, принадлежащие корпоративной учетной записи, не могут указывать собственную предельную сумму расходов, так как она указана в параметрах предприятия.

{% endnote %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Управление предельной суммой расходов {% data variables.product.prodname_github_codespaces %} для корпоративной учетной записи

Владельцы предприятия и менеджеры по выставлению счетов могут управлять предельной суммой расходов для {% data variables.product.prodname_github_codespaces %} для корпоративной учетной записи.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Щелкните **Предельная сумма расходов**.

   ![Вкладка "Предельная сумма расходов"](/assets/images/help/settings/spending-limit-tab-enterprise.png)

{% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Экспорт изменений при достижении предельной суммы расходов

{% data reusables.codespaces.exporting-changes %}

## Управление уведомлениями по электронной почте об использовании и предельной сумме расходов

Email уведомления отправляются владельцам учетных записей и менеджерам по выставлению счетов, когда расходы достигают 75%, 90% и 100% от предельной суммы расходов учетной записи. 

Вы можете отключить эти уведомления в любое время, перейдя в нижнюю часть страницы "Планы выставления счетов & / Ежемесячные пределы расходов" и снимите флажок **Оповещения об ограничениях расходов** .

Только для личных учетных записей вы также можете отключить уведомления по электронной почте, отправляемые при использовании 75%, 90% и 100 % бесплатного использования, включенного в вашу личную учетную запись. Для этого снимите флажок **Включенные оповещения о ресурсах** .

![Снимок экрана: параметры уведомлений о счетах по электронной почте](/assets/images/help/codespaces/codespaces-spending-limit-notifications.png)

## Дополнительные материалы

- "[Ограничение доступа к типам компьютеров](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
- [Управление затратами на {% data variables.product.prodname_github_codespaces %} в организации](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)

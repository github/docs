---
title: Управление предельной суммой расходов для GitHub Actions
intro: 'Можно настроить предельную сумму расходов для использования {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - Spending limits
  - User account
shortTitle: Spending limits for Actions
ms.openlocfilehash: c1bd595a866b9e48fa4e82ebe93718328514fad9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088095'
---
## Сведения о предельных суммах расходов за {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} Дополнительную информацию о ценах на потребление {% data variables.product.prodname_actions %} см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

{% ifversion ghec %} Если вы приобрели {% data variables.product.prodname_enterprise %} в рамках Соглашения Enterprise Майкрософт, то вы можете подключить свой идентификатор подписки Azure к корпоративной учетной записи, чтобы включить и оплатить использование {% data variables.product.prodname_actions %} свыше объемов, включенных в вашу учетную запись. Дополнительные сведения см. в разделе [Подключение подписки Azure к организации](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

Как только вы задали предельную сумму расходов, отличную от 0 долл. США, вы будете оплачивать любые существующие превышения в текущем расчетном периоде. Например, если ваша организация использует {% data variables.product.prodname_team %}, не допускает избыточное использование и создает артефакты рабочего процесса, которые увеличивают объемы потребления хранилища в месяц с 1,9 до 2,1 ГБ, вы сможете использовать немного больше объема хранилища, чем 2 ГБ, включаемых в продукт.

Так как вы не включили избытки, следующая попытка создания артефакта рабочего процесса завершится ошибкой. Вы не получите счет за превышение в размере 0,1 ГБ в этом месяце. Однако если включить избыток, первый счет будет включать 0,1 ГБ существующего превышения для текущего цикла выставления счетов, а также любое дополнительное избыточное использование.

## Управление предельной суммой расходов за {% data variables.product.prodname_actions %} для личной учетной записи

Любой пользователь может управлять предельной суммой расходов за {% data variables.product.prodname_actions %} для своей личной учетной записи.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %}

## Управление предельной суммой расходов за {% data variables.product.prodname_actions %} для организации

Владельцы организаций и менеджеры по выставлению счетов могут управлять предельной суммой расходов за {% data variables.product.prodname_actions %} для организации.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-actions-packages %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Управление предельной суммой расходов за {% data variables.product.prodname_actions %} для корпоративной учетной записи

Владельцы предприятий и менеджеры по выставлению счетов могут управлять предельной суммой расходов за {% data variables.product.prodname_actions %} для корпоративной учетной записи.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Над разделом "Ежемесячное использование {% data variables.product.prodname_actions %} и Packages" нажмите **Предельная сумма расходов**.
  ![Вкладка "Предельная сумма расходов"](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Управление уведомлениями по электронной почте об использовании и предельной сумме расходов
{% data reusables.billing.email-notifications %}

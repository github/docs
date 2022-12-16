---
title: Управление предельной суммой расходов для GitHub Packages
intro: 'Можно настроить предельную сумму расходов для использования {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Packages
  - Spending limits
  - User account
shortTitle: Your spending limit
ms.openlocfilehash: 0919283804124e2e925793dd3d4969b80f46ed30
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884152'
---
## Сведения о предельной сумме расходов для {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} Дополнительные сведения о ценах на использование {% data variables.product.prodname_registry %}см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).

{% ifversion ghec %} Если вы приобрели {% data variables.product.prodname_enterprise %} в рамках Соглашения Enterprise Майкрософт, то вы можете подключить свой идентификатор подписки Azure к корпоративной учетной записи, чтобы включить и оплатить использование {% data variables.product.prodname_registry %} свыше объемов, включенных в вашу учетную запись. Дополнительные сведения см. в разделе [Подключение подписки Azure к организации](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

Как только вы задали предельную сумму расходов, отличную от 0 долл. США, вы будете оплачивать любые существующие превышения в текущем расчетном периоде. Например, если ваша организация использует {% data variables.product.prodname_team %}, то избыточное использование не допускается, и публикуется новая версия частного пакета, которая увеличивает использование хранилища в месяц с 1,9 ГБ до 2,1 ГБ. При публикации версии будет использоваться немного больше, чем 2 ГБ, включаемых в продукт.

Поскольку вы не включили избыток, следующая попытка опубликовать версию пакета завершится ошибкой. Вы не получите счет за превышение в размере 0,1 ГБ в этом месяце. Однако если включить избыток, первый счет будет включать 0,1 ГБ существующего превышения для текущего цикла выставления счетов, а также любое дополнительное избыточное использование.

## Управление предельной суммой расходов за {% data variables.product.prodname_registry %} для личной учетной записи

Любой пользователь может управлять предельной суммой расходов на {% data variables.product.prodname_registry %} для собственной личной учетной записи.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %}

## Управление предельной суммой расходов за {% data variables.product.prodname_registry %} для организации

Владельцы организаций и менеджеры по выставлению счетов могут управлять предельной суммой расходов за {% data variables.product.prodname_registry %} для организации.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-actions-packages %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Управление предельной суммой расходов за {% data variables.product.prodname_registry %} для корпоративной учетной записи

Владельцы предприятий и менеджеры по выставлению счетов могут управлять предельной суммой расходов за {% data variables.product.prodname_registry %} для корпоративной учетной записи.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Над разделом "Ежемесячное использование {% data variables.product.prodname_actions %} и Packages" нажмите **Предельная сумма расходов**.
  ![Вкладка "Предельная сумма расходов"](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Управление уведомлениями по электронной почте об использовании и предельной сумме расходов
{% data reusables.billing.email-notifications %}

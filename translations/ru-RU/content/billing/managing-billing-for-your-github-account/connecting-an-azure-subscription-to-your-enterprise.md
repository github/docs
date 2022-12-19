---
title: Подключение подписки Azure к предприятию
intro: 'Вы можете использовать Соглашение Microsoft Enterprise, чтобы включить и оплатить {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} и {% data variables.product.prodname_github_codespaces %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Connect an Azure subscription
ms.openlocfilehash: a5473ff19e403eb21242982e005663d1c8ac5962
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110885'
---
## Сведения о подписках Azure и {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Дополнительные сведения см. в статьях [Сведения о выставлении счетов за {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) и [Сведения о выставлении счетов за {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).

{% note %}

**Примечание.** Если ваша корпоративная учетная запись находится в Соглашении Enterprise от Майкрософт, подключение подписки Azure является единственным способом использовать {% data variables.product.prodname_actions %} и {% data variables.product.prodname_registry %} помимо включенных сумм или использовать {% data variables.product.prodname_codespaces %} в целом.

{% endnote %}

После подключения подписки Azure вы также можете управлять предельными суммами расходов.

- [Управление предельной суммой расходов для {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)
- [Управление предельной суммой расходов для {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)
- [Управление предельной суммой расходов для {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)

## Подключение подписки Azure к корпоративной учетной записи

Чтобы подключить подписку Azure, необходимо иметь разрешения владельца для подписки.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. В разделе "Сведения об оплате" нажмите **Добавить подписку Azure**.
1. Чтобы войти в учетную запись Майкрософт, следуйте подсказкам.
1. Проверьте подсказку "Запрошенные разрешения". Если вы соглашаетесь с условиями, нажмите **Принять**.
1. В разделе "Выбор подписки" выберите идентификатор подписки Azure, которую требуется подключить к предприятию.

   {% note %}

   **Примечание.** {% data variables.product.company_short %} для проверки разрешений подписки запрашивает доступ только для чтения, чтобы отобразить список доступных подписок. Чтобы выбрать подписку Azure, необходимо иметь разрешения владельца для подписки. Если у арендатора по умолчанию нет необходимых разрешений, может потребоваться указать идентификатор другого арендатора. Дополнительные сведения см. в статье о [платформе удостоверений Майкрософт и потоке кода авторизации OAuth 2,0](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) в документации Майкрософт.

   {% endnote %}
1. Нажмите кнопку **Соединить**.

## Отключение подписки Azure от корпоративной учетной записи

После отключения подписки Azure от корпоративной учетной записи объем потребления больше не может превышать суммы, включенные в план.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. В разделе "Подписка Azure" справа от идентификатора подписки, которую вы хотите отключить, нажмите **{% octicon "trash" aria-label="The trash icon" %}** .
1. Проверьте подсказку, а затем нажмите кнопку **Удалить**.

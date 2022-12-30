---
title: Обработка отмены плана
intro: 'Отмена приложения {% data variables.product.prodname_marketplace %} запускает веб-перехватчик [события `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) с действием `cancelled`, которое запускает поток отмены уровня.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /developers/github-marketplace/handling-plan-cancellations
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Plan cancellations
ms.openlocfilehash: 253506f1ac32f55649dd533559a7a16508cca98f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089613'
---
Дополнительные сведения об отмене в связи с выставлением счетов см. в разделе [Выставление счетов клиентов в {% data variables.product.prodname_marketplace %}](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace).

## Шаг 1. Событие отмены

Если клиент решил отменить заказ в {% data variables.product.prodname_marketplace %}, GitHub отправляет веб-перехватчик [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) с действием `cancelled` в приложение, когда отмена вступает в силу. Если клиент отменяет бесплатную пробную версию, приложение получит событие немедленно. Когда клиент отменяет платный план, отмена будет выполнена в конце периода выставления счетов.

## Шаг 2. Отключение учетных записей клиентов

Когда клиент отменяет бесплатный или платный план, ваше приложение должно выполнить следующие действия, чтобы завершить отмену:

1. отключить учетную запись клиента, отменившего план;
1. отозвать токен OAuth, полученный приложением для клиента;
1. для приложения OAuth удалить все веб-перехватчики, созданные приложением для репозиториев;
1. удалить все данные клиента в течение 30 дней после получения события `cancelled`.

{% note %}

**Примечание**. Мы рекомендуем использовать ключ `effective_date` веб-перехватчика [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/), чтобы определить, когда произойдет изменение плана, и периодически синхронизировать [Список учетных записей для плана](/rest/reference/apps#list-accounts-for-a-plan). Дополнительные сведения о веб-перехватчиках см. в разделе [События веб-перехватчиков {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

{% endnote %}

---
title: События веб-перехватчика для API GitHub Marketplace
intro: 'Приложение {% data variables.product.prodname_marketplace %} получает сведения об изменениях плана пользователя из веб-перехватчика событий покупки на Marketplace. Событие покупки на Marketplace активируется при совершении покупки, отмене или изменении плана оплаты пользователем.'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /developers/github-marketplace/webhook-events-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhook events
ms.openlocfilehash: 31afac532a1b10c462085f0403d4ed210750ca77
ms.sourcegitcommit: fb740a96852435c748dad95d560327e80b4cef19
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/24/2022
ms.locfileid: '148105679'
---
## {% data variables.product.prodname_marketplace %} покупка полезных данных веб-перехватчика

Запросы веб-перехватчиков `POST` содержат специальные символы. Дополнительные сведения см. в разделе [Заголовки доставки веб-перехватчиков](/webhooks/event-payloads/#delivery-headers). GitHub не выполняет повторную отправку в случае сбоя доставки. Убедитесь, что приложение может принимать все полезные данные веб-перехватчика, отправленные GitHub.

Отмена и понижение уровня вступают в силу в первый день следующего цикла выставления счетов. События понижения уровня и отмены отправляются, когда новый план вступает в силу в начале следующего цикла выставления счетов. События для новых покупок и обновлений начинаются немедленно. Используйте `effective_date` в полезных данных веб-перехватчика, чтобы определить, когда начнется изменение.

{% data reusables.marketplace.marketplace-malicious-behavior %}

Все `marketplace_purchase` полезные данные веб-перехватчика будут содержать следующие сведения:


Ключ | Тип | Описание
----|------|-------------
`action` | `string` | Действие, выполненное для создания веб-перехватчика. Может быть `purchased`, `cancelled`, `pending_change`, `pending_change_cancelled` или `changed`. Дополнительные сведения см. в примере полезных данных веб-перехватчика ниже. **Примечание.** Полезные данные `pending_change` и `pending_change_cancelled` содержат те же ключи, которые показаны в [`changed` примере полезных данных.](#example-webhook-payload-for-a-changed-event)
`effective_date` | `string` | Дата, когда `action` вступает в силу.
`sender` | `object` | Человек, который взял `action`, который вызвал веб-перехватчик.
`marketplace_purchase` | `object` | Информация о покупке {% data variables.product.prodname_marketplace %}.

Объект `marketplace_purchase` содержит следующие ключи:

Ключ | Тип | Описание
----|------|-------------
`account` | `object` | Учетные записи `organization` или `user`, связанные с подпиской. Учетные записи организации будут включать `organization_billing_email` — адрес электронной почты администратора организации. Чтобы найти адреса электронной почты для личных учетных записей, можно использовать конечную точку [Получение пользователя, прошедшего проверку подлинности](/rest/reference/users#get-the-authenticated-user).
`billing_cycle` | `string` | Может иметь значение `yearly` или `monthly`. Если владелец `account` использует бесплатный план GitHub и приобрел бесплатный план {% data variables.product.prodname_marketplace %}, `billing_cycle` будет иметь значение `nil`.
`unit_count`  | `integer` | Количество приобретенных единиц.
`on_free_trial` | `boolean` | `true`, если `account` доступен в пробной бесплатной версии.
`free_trial_ends_on` | `string` | Дата истечения срока действия бесплатной пробной версии.
`next_billing_date` | `string` | Дата начала следующего цикла выставления счетов. Если владелец `account` использует бесплатный план GitHub.com и приобрел бесплатный план {% data variables.product.prodname_marketplace %}, `next_billing_date` будет иметь значение `nil`.
`plan` | `object` | План, приобретенный `user` или `organization`.

Объект `plan` содержит следующие ключи:

Ключ | Тип | Описание
----|------|-------------
`id` | `integer` | Уникальный идентификатор этого плана.
`name` | `string` | Имя плана.
`description` | `string` | Описание этого плана.
`monthly_price_in_cents` | `integer` | Цена этого плана за месяц в центах (валюта США). Например, листинг, который стоит 10 долларов США в месяц, будет иметь значение "1000 центов".
`yearly_price_in_cents` | `integer` | Цена этого плана за год в центах (валюта США). Например, листинг, который стоит 100 долларов США в год, будет иметь значение "120 000 центов".
`price_model` | `string` | Модель ценообразования для этого листинга. Может иметь значение `FLAT_RATE`, `PER_UNIT` или `FREE`.
`has_free_trial` | `boolean` | `true`, если в этом листинге предлагается бесплатная пробная версия.
`unit_name` | `string` | Имя единицы. Если модель ценообразования отличается от `per-unit`, будет иметь значение `nil`.
`bullet` | `array of strings` | Имена маркеров, заданных в тарифном плане.

<br/>

### Пример полезных данных веб-перехватчика для события `purchased`
В этом примере приведены полезные данные события `purchased`.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

### Пример полезных данных веб-перехватчика для события `changed`

Изменения в плане включают обновления и понижения уровня. В этом примере представлены полезные данные событий `changed`, `pending_change` и `pending_change_cancelled`. Действие определяет, какое из этих трех событий произошло.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

### Пример полезных данных веб-перехватчика для события `cancelled`

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}

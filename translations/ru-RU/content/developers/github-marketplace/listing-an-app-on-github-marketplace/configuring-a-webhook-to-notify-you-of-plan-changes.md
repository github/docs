---
title: Настройка веб-перехватчика для уведомления об изменениях плана
intro: 'После [создания черновой версии списка {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/) можно настроить веб-перехватчик, который уведомит вас о внесении изменений в планы учетной записи клиента. После настройки веб-перехватчика можно [обрабатывать `marketplace_purchase`типы событий](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) в приложении.'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /developers/github-marketplace/configuring-a-webhook-to-notify-you-of-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhooks for plan changes
ms.openlocfilehash: 85ffaa8809860ff4b693075e416723717296f86c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089701'
---
Веб-перехватчик событий {% data variables.product.prodname_marketplace %} можно настроить только на странице профиля приложения в {% data variables.product.prodname_marketplace %}. Все остальные события можно настроить на [странице параметров разработчика приложения](https://github.com/settings/developers). Если вы еще не создали профиль в {% data variables.product.prodname_marketplace %}, см. раздел [Создание черновика профиля в {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/).

## Создание объекта Webhook

Чтобы создать веб-перехватчик для профиля в {% data variables.product.prodname_marketplace %}, щелкните **Веб-перехватчик** на левой боковой панели [страницы профиля в {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Вы увидите следующие параметры конфигурации веб-перехватчика, необходимые для его настройки:

### URL-адрес полезных данных

{% data reusables.webhooks.payload_url %}

### Тип содержимого

{% data reusables.webhooks.content_type %} GitHub рекомендует использовать тип содержимого `application/json`.

### Секрет

{% data reusables.webhooks.secret %}

### Активен

По умолчанию доставки веб-перехватчика имеют статус "Активно". Вы можете отключить доставку полезных данных веб-перехватчика, отменив выбор статуса "Активно". Если вы отключили доставку данных веб-перехватчика, перед отправкой приложения на проверку необходимо выбрать статус "Активно".

## Просмотр доставленных данных веб-перехватчика

После настройки веб-перехватчика {% data variables.product.prodname_marketplace %} вы сможете проверить полезные данные запроса `POST` на странице **Веб-перехватчик** в [профиле приложения в {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). GitHub не выполняет повторную отправку в случае сбоя доставки. Убедитесь, что приложение может принимать все полезные данные веб-перехватчика, отправленные GitHub.

![Проверка последних доставленных данных веб-перехватчиков {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_webhook_deliveries.png)

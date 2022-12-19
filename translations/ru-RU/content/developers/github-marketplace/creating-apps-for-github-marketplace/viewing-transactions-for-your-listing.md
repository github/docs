---
title: Просмотр транзакций для профиля
intro: "На странице транзакций {% data variables.product.prodname_marketplace %} можно загрузить и просмотреть все транзакции для списка {% data variables.product.prodname_marketplace %}. Вы можете просмотреть транзакции за прошедший день (24\_часа), неделю, месяц или за весь период времени, в течение которого было получено список {% data variables.product.prodname_github_app %}."
redirect_from:
  - /marketplace/github-marketplace-transactions
  - /developers/github-marketplace/viewing-transactions-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing transactions
ms.openlocfilehash: f0e02ca4038131752d4a5fab54de1f1f539289c2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089741'
---
{% note %}

**Примечание.** Поскольку для агрегирования данных требуется время, вы заметите небольшую задержку в отображаемых датах. При выборе периода времени в верхней части страницы отображаются точные даты для метрик.

{% endnote %}


Вы можете просматривать или скачивать данные транзакций, чтобы отслеживать действия в подписке. Нажмите кнопку **Экспорт в CSV**, чтобы скачать файл `.csv`. Вы также можете выбрать период времени для просмотра и поиска на странице транзакций.

## Поля данных транзакций

* **date:** дата транзакции в формате `yyyy-mm-dd`.
* **app_name:** имя приложения.
* **user_login:** имя входа пользователя с подпиской.
* **user_id:** идентификатор пользователя с подпиской.
* **user_type:** тип учетной записи GitHub, `User` или `Organization`.
* **country:** трехбуквенный код страны.
* **amount_in_cents:** сумма транзакции в центах. Если значение меньше стоимости плана, пользователь обновляется и новый план рассчитывается пропорционально. Нулевое значение указывает, что пользователь отменил план.
* **renewal_frequency:** частота продления подписки, `Monthly` или `Yearly`.
* **marketplace_listing_plan_id:** `id` плана подписки.
* **region:** название региона, указанного в адресе выставления счетов.
* **postal_code:** почтовый индекс, указанный в адресе выставления счетов.

![Аналитика Marketplace](/assets/images/marketplace/marketplace_transactions.png)

## Доступ к транзакциям {% data variables.product.prodname_marketplace %}

Чтобы получить доступ к транзакциям {% data variables.product.prodname_marketplace %}, выполните указанные ниже действия.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. Выберите {% data variables.product.prodname_github_app %}, для которого нужно просмотреть транзакции.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Перейдите на вкладку **Транзакции**.
7. При желании выберите другой период времени, щелкнув раскрывающийся список "Период" в правом верхнем углу страницы "Транзакции".
![Период времени Marketplace](/assets/images/marketplace/marketplace_insights_time_period.png)

---
title: Просмотр метрики для вашего вывода списка
intro: 'На странице "Аналитика " {% data variables.product.prodname_marketplace %} отображаются метрики для {% data variables.product.prodname_github_app %}. Метрики можно использовать для отслеживания производительности {% data variables.product.prodname_github_app %}, а также для принятия более взвешенных решений о ценообразовании, планах, бесплатных пробных версиях и способах визуализации результатов маркетинговых кампаний.'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/github-marketplace-insights
  - /marketplace/github-marketplace-insights
  - /developers/github-marketplace/viewing-metrics-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing metrics
ms.openlocfilehash: 92fde52b0edbc7c11ac22d641bc4d9c4bd02709f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089749'
---
Вы можете просмотреть метрики за прошедший день (24 часа), неделю, месяц или за весь период времени, в течение которого было получено список {% data variables.product.prodname_github_app %}.

{% note %}

**Примечание.** Поскольку для агрегирования данных требуется время, вы заметите небольшую задержку в отображаемых датах. При выборе периода времени в верхней части страницы отображаются точные даты для метрик.

{% endnote %}

## Метрики производительности

На странице "Аналитика" отображаются следующие метрики производительности за выбранный период времени:

* **Стоимость подписки:** общий возможный доход (в долларах США) от подписок. Это значение представляет собой возможный доход, если планы или бесплатные пробные версии не отменены, а все кредитные транзакции выполнены успешно. Стоимость подписки включает полную стоимость планов, которые начинаются с бесплатной пробной версии в выбранный период времени, даже если в этот период финансовые операции не выполнялись. Стоимость подписки также включает полную стоимость обновленных планов за выбранный период времени, но без пропорционально распределенной суммы. Чтобы просмотреть и скачать отдельные транзакции, см. страницу [Транзакции GitHub Marketplace](/marketplace/github-marketplace-transactions/).
* **Посетители**: количество людей, просмотревших страницу в выводе списка GitHub Apps. Это число включает как вошедших, так и не вошедших в систему посетителей.
* **Просмотры страниц:** количество просмотров страниц в полученном выводе списка GitHub Apps. Один посетитель может сгенерировать несколько просмотров страницы.

{% note %}

**Примечание.** Расчетная стоимость вашей подписки может быть намного выше, чем количество транзакций, обработанных за этот период. 

{% endnote %}

### Производительность преобразования

* **Уникальные посетители целевой страницы:** количество пользователей, просмотревших целевую страницу GitHub App.
* **Уникальные посетители страницы оформления заказа:** количество пользователей, просмотревших одну из страниц оформления заказа GitHub App.
* **Страница оформления заказа на новые подписки:** общее количество платных подписок, бесплатных пробных версий и бесплатных подписок. См. раздел "Разбивка общего количества подписок", чтобы узнать конкретное количество подписок каждого типа.

![Аналитика Marketplace](/assets/images/marketplace/marketplace_insights.png)

Чтобы получить доступ к аналитическим сведениям {% data variables.product.prodname_marketplace %}, сделайте следующее:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. Выберите {% data variables.product.prodname_github_app %}, для которого нужно просмотреть аналитику.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Перейдите на вкладку **Аналитика**.
7. При желании выберите другой период времени, щелкнув раскрывающийся список "Период" в правом верхнем углу страницы "Аналитика".
![Период времени Marketplace](/assets/images/marketplace/marketplace_insights_time_period.png)

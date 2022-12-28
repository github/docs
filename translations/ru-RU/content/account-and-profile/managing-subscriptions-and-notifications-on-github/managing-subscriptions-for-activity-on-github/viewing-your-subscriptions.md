---
title: Просмотр подписок
intro: 'Чтобы понять, откуда поступают ваши уведомления и проанализировать объем уведомлений, рекомендуется регулярно просматривать подписки и наблюдаемые репозитории.'
redirect_from:
  - /articles/subscribing-to-conversations
  - /articles/unsubscribing-from-conversations
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories
  - /articles/unwatching-repositories
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
  - /github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: View subscriptions
ms.openlocfilehash: 2e3fca1f56e26e9f17a56911b93480a538c715ec
ms.sourcegitcommit: 37e362868bd023d87b257fb2436ae76a81dc8f8b
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008775'
---
Вы получаете уведомления о своих подписках о текущей активности в {% data variables.product.product_name %}. Есть много причин подписки на беседу. Дополнительные сведения см. в разделе [Сведения об уведомлениях](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions).

Мы рекомендуем выполнить аудит и отменить подписку в рамках работоспособного рабочего процесса уведомлений. Дополнительные сведения о вариантах отмены подписки см. в разделе [Управление подписками](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions).

## Определение причин для получения слишком большого числа уведомлений

Если в папке «Входящие» слишком много уведомлений, которыми требуется управлять, возможно, вы оформили слишком много подписок. Также можно попробовать изменить параметры уведомлений, чтобы уменьшить количество подписок и типов уведомлений, которые вы получаете. Например, вы можете отключить параметры для автоматического отслеживания всех репозиториев и всех обсуждений команды при каждом присоединении к команде или репозиторию.

{% ifversion update-notification-settings-22 %} ![ Снимок экрана: параметры автоматического просмотра для команд и репозиториев](/assets/images/automatically-watch-repos-and-teams.png) {% else %} ![Снимок экрана: параметры автоматического просмотра для команд и репозиториев](/assets/images/help/notifications-v2/automatic-watching-example.png){% endif %}

Дополнительные сведения см. в разделе [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching).

Общие сведения о подписках репозитория см. в разделе [Просмотр репозиториев, которые вы отслеживаете](#reviewing-repositories-that-youre-watching). {% tip %}

**Совет.** Вы можете выбрать типы событий, о которых вы хотите получать уведомления, с помощью параметра **Настраиваемые** в раскрывающемся списке **Отслеживать/отменить отслеживание** на [странице отслеживания](https://github.com/watching) или на любой странице репозитория в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).

{% endtip %}

Многие люди забывают о репозиториях, которые они когда-то решили отслеживать. На странице «Отслеживаемые репозитории» можно быстро отменить отслеживание репозиториев. Дополнительные сведения о способах отмены подписки см. в разделе [Рекомендации по отмене отслеживания](https://github.blog/changelog/2020-11-10-unwatch-recommendations/) в {% data variables.product.prodname_blog %} и разделе [Управление подписками](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions). Вы также можете создать рабочий процесс рассмотрения, чтобы помочь в управлении уведомлениями. Рекомендации по работе с рабочими процессами см. в разделе [Настройка рабочего процесса для рассмотрения уведомлений](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications).

## Просмотр всех подписок

{% data reusables.notifications.access_notifications %}
1. На левой боковой панели в списке репозиториев, от которых вы получаете уведомления, используйте раскрывающийся список «Управление уведомлениями», чтобы щелкнуть **Параметры уведомлений**.
  ![Параметры раскрывающегося меню «Управление уведомлениями»](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Используйте фильтры и сортировку, чтобы сузить список подписок и начать отмену подписок на беседы, для которых больше не требуется получать уведомления.

  ![Страница «Подписки»](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**Советы**
- Чтобы просмотреть подписки, о которых вы, возможно, забыли, выполните сортировку по критерию «последние оформленные подписки».

- Чтобы просмотреть список репозиториев, для которых вы по-прежнему можете получать уведомления, см. список репозиториев в раскрывающемся меню «Фильтр по репозиторию».

{% endtip %}

## Просмотр репозиториев, которые вы отслеживаете

1. На левой боковой панели в списке репозиториев используйте раскрывающийся список «Управление уведомлениями» и щелкните **Отслеживаемые репозитории**.
  ![Параметры раскрывающегося меню «Управление уведомлениями»](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Оцените репозитории, которые вы отслеживаете, и решите, являются ли их обновления по-прежнему актуальными и полезными. При отслеживании репозитория вы будете получать уведомления обо всех беседах для этого репозитория.
![Страница «Отслеживаемые уведомления»](/assets/images/help/notifications-v2/watched-notifications-custom.png)

  {% tip %}

  **Совет.** Вместо отслеживания репозитория рекомендуется получать уведомления только при наличии обновлений для {% data reusables.notifications-v2.custom-notification-types %} (если он включен для репозитория) или любого сочетания этих параметров. Можно также полностью отменить отслеживание репозитория.
  
  При отмене отслеживания репозитория вы по-прежнему будете получать уведомления, когда вы @mentioned или участвуете в потоке. При настройке получения уведомлений для определенных типов событий вы будете получать уведомления только при наличии обновлений для этих типов событий в репозитории, если вы участвуете в потоке либо если вы или команда, где вы участвуете, является @mentioned.

  {% endtip %}

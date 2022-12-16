---
title: Глобальные веб-перехватчики
intro: 'На предприятии установлены глобальные веб-перехватчики. Глобальные веб-перехватчики можно использовать для автоматического мониторинга, реагирования или применения правил для пользователей, организаций, команд и репозиториев на предприятии.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0066ad821aeab046000991fee0b736997e39b7b8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099119'
---
Глобальные веб-перехватчики могут подписаться на такие типы событий, как [организация](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [пользователь](/developers/webhooks-and-events/webhook-events-and-payloads#user), [репозиторий](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [команда](/developers/webhooks-and-events/webhook-events-and-payloads#team), [член](/developers/webhooks-and-events/webhook-events-and-payloads#member), [членство](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [вилка](/developers/webhooks-and-events/webhook-events-and-payloads#fork) и [проверка связи](/developers/webhooks-and-events/about-webhooks#ping-event).

*Этот API доступен только администраторам сайта, [прошедшим проверку подлинности](/rest/overview/resources-in-the-rest-api#authentication).* Если получить доступ к нему попытаются обычные пользователи, будет выведен ответ `404`. Сведения о настройке глобальных веб-перехватчиков см. в разделе [Сведения о глобальных веб-перехватчиках](/enterprise/admin/user-management/about-global-webhooks).

{% данных reusables.user-settings.enterprise-admin-api-classic-pat-only %}

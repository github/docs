---
title: Настройка политики источников ссылок для предприятия
shortTitle: Configure referrer policy
intro: 'Вы можете увеличить конфиденциальность {% данных variables.location.product_location %}, настроив политику для запросов между источниками.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 7e767d8d131428627ee4fd5c2842d278471b4720
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098317'
---
## Сведения о политике источников ссылок для предприятия

Политика ссылки управляет сведениями, которые {% данных variables.product.product_name %} передаются в заголовках HTTP при посещении ссылки из {% данных variables.location.product_location %} на внешний сайт.

По умолчанию, когда пользователь на {% данных variables.location.product_location %} посещает ссылку на другой сайт из файла или примечания к экземпляру, запрос включает имя узла для экземпляра в виде обычного текста в заголовке `Referer` . Если ссылка ведет на внешний веб-сайт, владелец веб-сайта может прочитать имя узла для вашего экземпляра в запросах или файлах журнала.

Вы можете управлять сведениями, которые отправляет {% data variables.product.product_name %} при посещении пользователем ссылки из вашего экземпляра.

## Включение политики источников ссылок `same-origin`

Вы можете включить `same-origin` политику ссылки, чтобы указать современным браузерам исключить имя узла для {% данных variables.location.product_location %} из запросов на внешние веб-сайты. Этот параметр применяется ко всем ссылкам из веб-интерфейса экземпляра. По умолчанию {% data variables.product.product_name %} использует политики источников ссылок `origin-when-cross-origin` и `strict-origin-when-cross-origin`, а это значит, что имя узла вашего экземпляра будет отображаться в HTTP- и HTTPS-запросах на внешних веб-сайтах.

{% note %}

**Примечание**. Изменение политики источников ссылок на `same-origin` может повлиять на внешние сайты, которые ожидают имя узла в заголовках HTTP для запроса.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. В разделе "Политика источников ссылок агента пользователя" выберите **Включить политику ссылок одного источника для всех организаций**.
  ![Флажок для включения политики ссылок одного источника](/assets/images/enterprise/settings/referrer-policy-checkbox.png)
1. Выберите команду **Сохранить**.
  ![Кнопка "Сохранить" для включения политики ссылок одного источника](/assets/images/enterprise/settings/referrer-policy-save-button.png)

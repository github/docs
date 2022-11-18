---
title: Проверить пакеты
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3202e9e108f8020986d7abe14679df45307df337
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063197'
---
{% note %}

  **Примечание.** Приложение GitHub получает только одно событие [`check_suite`](/webhooks/event-payloads/#check_suite) для каждой фиксации SHA, даже если фиксация SHA отправляется сразу в несколько ветвей. Чтобы узнать, когда фиксация SHA отправляется в ветвь, можно подписаться на события ветви [`create`](/webhooks/event-payloads/#create).

{% endnote %}

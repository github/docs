---
title: Использование действий в GitHub AE
intro: '{% data variables.product.prodname_ghe_managed %} включает большинство действий {% data variables.product.prodname_dotcom %}, созданных пользователем.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
shortTitle: Use actions
ms.openlocfilehash: a8439a08f73667b7d048b31e2c9eb3968ba2e957
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120371'
---
Рабочие процессы {% data variables.product.prodname_actions %} могут использовать _действия_, представляющие собой отдельные задачи, которые можно объединить для создания заданий и настройки рабочего процесса. Вы можете создавать собственные действия или использовать и настраивать действия, которые предоставляются сообществом {% data variables.product.prodname_dotcom %}.

## Официальные действия, объединенные с {% data variables.product.prodname_ghe_managed %}

Большинство официальных действий, созданных {% data variables.product.prodname_dotcom %}, автоматически объединяются с {% data variables.product.prodname_ghe_managed %} и сканируются в определенный момент времени из {% data variables.product.prodname_marketplace %}. Когда ваш экземпляр {% data variables.product.prodname_ghe_managed %}. обновляется, объединенные официальные действия также обновляются.

К объединенным официальным действиям относятся, в частности, действия `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler` и различные действия `actions/setup-`. Чтобы узнать, какие из официальных действий включены, перейдите к следующим организациям в вашем экземпляре: 
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

Файлы каждого действия хранятся в репозитории в организациях `actions` и `github`. Каждый репозиторий действий включает необходимые теги, ветви и SHA фиксаций, которые рабочие процессы могут использовать для ссылки на действие.

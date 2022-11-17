---
title: Сведения о веб-перехватчиках
intro: 'Узнайте, как веб-перехватчики помогают вам создать и настроить интеграции.'
redirect_from:
  - /webhooks
  - /developers/webhooks-and-events/about-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 08b038d5a35c4c692502545e640d04993d169b6a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112387'
---
Веб-перехватчики позволяют создавать или настраивать интеграции, такие как [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) или [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), которые подписываются на определенные события на сайте GitHub.com. Когда запускается одно из этих событий, мы отправляем полезные данные HTTP POST веб-перехватчику, используя настроенный URL-адрес. Веб-перехватчики можно использовать для обновления внешнего средства отслеживания проблем, активации сборок CI, обновления зеркала резервного копирования или даже развертывания на рабочем сервере. Вы ограничены только вашим воображением.

Веб-перехватчики можно установить в {% ifversion ghes or ghae %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/),{% endif %} [организации][org-hooks], в определенном [репозитории][repo-hooks] или в {% data variables.product.prodname_github_app %}. После установки веб-перехватчик будет отправляться каждый раз, когда возникнет одно или несколько событий подписки.

Можно создать до {% ifversion ghes or ghae %}250{% else %}20{% endif %} веб-перехватчиков для каждого события в каждом экземпляре целевого объекта установки {% ifversion ghes or ghae %}({% data variables.product.prodname_ghe_server %}, для конкретной организации или конкретного репозитория).{% else %}(для конкретной организации или конкретного репозитория).{% endif %}

## События

{% data reusables.webhooks.webhooks_intro %}

Каждое событие соответствует определенному набору действий, которые могут произойти в вашей организации и (или) репозитории. Например, если подписаться на событие `issues`, вы будете получать детализированные полезные данные при каждом открытии, закрытии, маркировке проблемы и т. д.

Полный список доступных событий веб-перехватчика и их полезных данных см. в разделе [События и полезные данные веб-перехватчика](/developers/webhooks-and-events/webhook-events-and-payloads).

## Событие проверки связи

{% data reusables.webhooks.ping_short_desc %}

Дополнительные сведения о полезных данных веб-перехватчика события `ping` см. в этом событии [`ping`](/webhooks/event-payloads/#ping).

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#webhooks

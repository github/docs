---
title: Сведения об использовании действий в организации
intro: '{% data variables.product.product_name %} включает большинство действий авторства {% data variables.product.prodname_dotcom %}, а также предоставляет возможности доступа к другим действиям из {% data variables.product.prodname_dotcom_the_website %} и {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: About actions in your enterprise
ms.openlocfilehash: ac77d792a336c9da30e6ee3d5bbb0e382a8fb6b7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099188'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о действиях с {% data variables.product.product_name %}

Рабочие процессы {% data variables.product.prodname_actions %} могут использовать _действия_, представляющие собой отдельные задачи, которые можно объединить для создания заданий и настройки рабочего процесса. Вы можете создавать собственные действия или использовать и настраивать действия, которые предоставляются сообществом {% data variables.product.prodname_dotcom %}.

{% данных reusables.actions.enterprise-no-internet-actions %} Разработчики могут ограничить использование действий, хранящихся в {% данных variables.location.product_location %}, включая большинство официальных действий {% данных variables.product.company_short %}, а также любые действия, создаваемые разработчиками. Кроме того, чтобы разработчики могли использовать все преимущества полной экосистемы действий, созданных отраслевыми лидерами и сообществом разработчиков решений с открытым кодом, вы можете настроить доступ к другим действиям из {% data variables.product.prodname_dotcom_the_website %}. 

Рекомендуется разрешить автоматический доступ ко всем действиям из {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghes %}Однако для этого требуется {% data variables.product.product_name %}, чтобы создать исходящие подключения к {% data variables.product.prodname_dotcom_the_website %}. Если вы не хотите разрешать такие подключения или{% else %}если{% endif %} вам требуется более строгий контроль над действиями, которые используются на предприятия, можно вручную синхронизировать конкретные действия из {% data variables.product.prodname_dotcom_the_website %}.

## Официальные действия, связанные с корпоративным экземпляром

{% data reusables.actions.actions-bundled-with-ghes %}

Связанные официальные действия также включают следующие действия.
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- Различные действия `actions/setup-`

Чтобы просмотреть все официальные действия, включенные в ваш экземпляр предприятия, перейдите к организации `actions` в своем экземпляре: <code>https://<em>HOSTNAME</em>/actions</code>.

Для использования этих действий не требуется подключение между {% данными variables.location.product_location %} и {% данных variables.product.prodname_dotcom_the_website %}.

Каждое действие является репозиторием в организации `actions`, и каждое действие-репозиторий включает необходимые теги, ветви и SHA фиксации, которые рабочие процессы могут использовать для ссылки на действие. Дополнительные сведения об обновлении связанных официальных действий см. в разделе [Использование последней версии официальных связанных действий](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions).

{% note %}

**Примечания.** 
- При использовании действий установки (таких как `actions/setup-LANGUAGE`) для {% data variables.product.product_name %} с локальными средствами выполнения тестов может потребоваться настроить кэш для средств выполнения тестов, у которых нет доступа к Интернету. Дополнительные сведения см. в разделе [Настройка кэша инструментов для локально размещенных средств выполнения без доступа к Интернету](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access).
- При обновлении {% data variables.product.product_name %} действия в пакете автоматически заменяются версиями по умолчанию в пакете обновления.

{% endnote %}

## Настройка доступа к действиям в {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.access-actions-on-dotcom %}

Чтобы включить доступ к действиям с сайта {% data variables.product.prodname_dotcom_the_website %}, рекомендуется включить автоматический доступ ко всем действиям. Это можно сделать с помощью {% data variables.product.prodname_github_connect %} для интеграции {% data variables.product.product_name %} с {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения см. в статье [Включение автоматического доступа к действиям {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect). 

{% ifversion ghes %} {% note %}

**Примечание:** Прежде чем настроить доступ к действиям в {% данных variables.product.prodname_dotcom_the_website %}, необходимо настроить {% данных variables.location.product_location %} для использования {% данных variables.product.prodname_actions %}. Дополнительные сведения см. в статье "[Начало работы с {% data variables.product.prodname_actions %} для GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".


{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

Кроме того, если требуется более строгий контроль над тем, какие действия разрешены в вашей организации, или если вы не хотите разрешать исходящие подключения к {% data variables.product.prodname_dotcom_the_website %}, можно вручную загрузить и синхронизировать действия на корпоративный экземпляр с помощью средства `actions-sync`. Дополнительные сведения см. в статье "[Синхронизация действий вручную с сайта {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)".

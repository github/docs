---
title: Ограничение взаимодействий в вашем репозитории
intro: Вы можете временно применить период ограниченной активности для определенных пользователей в общедоступном репозитории.
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limit interactions in repo
ms.openlocfilehash: 0b49e1bfdf29be5dc270a453512701c9369c5933
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067253'
---
## Сведения о временных ограничениях взаимодействия

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} По истечении срока действия ограничения пользователи могут возобновить нормальную работу в вашем репозиторий.

{% data reusables.community.types-of-interaction-limits %}

Вы также можете включить ограничения действий для всех репозиториев, принадлежащих вашей личной учетной записи или организации. Если включено ограничение на уровне пользователя или всей организации, вы не можете ограничить действие для отдельных репозиториев, принадлежащих учетной записи. Дополнительные сведения см. в статьях [Ограничение взаимодействий для личной учетной записи](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account) и [Ограничение взаимодействий в организации](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization).

## Ограничение взаимодействий в вашем репозитории

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. На боковой панели выберите **{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} Параметры модерации**, а затем щелкните **Ограничения взаимодействия**.
{% data reusables.community.set-interaction-limit %} ![Параметры временного ограничения взаимодействия](/assets/images/help/repository/temporary-interaction-limits-options.png)

## Дополнительные материалы
- [Сообщение о нарушении или спаме](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Управление доступом пользователя к репозиторию организации](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [Уровни разрешений для репозитория личной учетной записи](/articles/permission-levels-for-a-user-account-repository)
- [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [Управление модераторами в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)

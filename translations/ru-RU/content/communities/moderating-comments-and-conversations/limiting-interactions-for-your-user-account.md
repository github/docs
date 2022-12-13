---
title: Ограничение взаимодействия с учетной записью пользователя
intro: You can temporarily enforce a period of limited activity for certain users in all public repositories owned by your personal account.
versions:
  fpt: '*'
  ghec: '*'
permissions: Anyone can limit interactions for their own personal account.
redirect_from:
- /github/building-a-strong-community/limiting-interactions-for-your-user-account
topics:
- Community
shortTitle: Limit interactions in account
ms.openlocfilehash: d303a15507d923f8c35d40432ba09e4ccf377536
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092386"
---
## <a name="about-temporary-interaction-limits"></a>Сведения о временных ограничениях взаимодействия

Ограничение взаимодействий для личной учетной записи включает временные ограничения взаимодействия для всех общедоступных репозиториев, принадлежащих этой личной учетной записи. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} По истечении срока действия ограничения пользователи могут возобновить нормальную работу в общедоступных репозиториях.

{% data reusables.community.types-of-interaction-limits %}

При включении ограничений действий на уровне пользователя не удастся включить или отключить ограничения взаимодействия для отдельных репозиториев. Дополнительные сведения об ограничении действий для отдельного репозитория см. в разделе "[Ограничение взаимодействий в репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".

Вы также можете заблокировать пользователей. Дополнительные сведения см. в статье [Блокировка пользователя из личной учетной записи](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account). 

## <a name="limiting-interactions-for-your-personal-account"></a>Ограничение взаимодействий для личной учетной записи

{% data reusables.user-settings.access_settings %}
1. В разделе "Доступ" на боковой панели выберите **{% octicon "report" aria-label="The report icon" %} Модерация** и нажмите **Ограничения взаимодействия**.
{% data reusables.community.set-interaction-limit %} ![Параметры временного ограничения взаимодействия](/assets/images/help/settings/user-account-temporary-interaction-limits-options.png)

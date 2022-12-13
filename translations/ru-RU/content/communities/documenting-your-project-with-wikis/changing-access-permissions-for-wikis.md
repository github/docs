---
title: Изменение прав доступа для вики-сайтов
intro: 'Только участники совместной работы репозитория могут изменять вики-сайт репозитория {% ifversion fpt или ghec или ghes %}public{% endif %} репозитория по умолчанию, но вы можете разрешить любому пользователю с учетной записью {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} для редактирования вики-сайта.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/changing-access-permissions-for-wikis
  - /github/building-a-strong-community/changing-access-permissions-for-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Change access permissions
ms.openlocfilehash: cc69a849a2557339af0a1baec7a2ed548fa85e3a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099348'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе "Компоненты" отмените выбор параметра **Разрешить редактирование только участникам совместной работы**.
   ![Ограничение редактирования вики-сайтов](/assets/images/help/wiki/wiki_restrict_editing.png)

## Дополнительные материалы

- "[Отключение вики-сайтов](/communities/documenting-your-project-with-wikis/disabling-wikis)"

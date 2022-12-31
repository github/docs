---
title: Сведения о веб-канале новостей организации
intro: 'Вы можете использовать канал новостей вашей организации, чтобы отслеживать последние действия в репозиториях, принадлежащих этой организации.'
redirect_from:
  - /articles/news-feed
  - /articles/about-your-organization-s-news-feed
  - /articles/about-your-organizations-news-feed
  - /github/setting-up-and-managing-organizations-and-teams/about-your-organizations-news-feed
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Organization news feed
ms.openlocfilehash: 09c6d9e363d876ce97c57e9046ff624e157eeb52
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098556'
---
В веб-канале новостей организации отображаются действия других пользователей в репозиториях, которые принадлежат ей. С помощью веб-канала новостей организации можно узнать, когда кто-то открывает, закрывает или объединяет проблему или запрос на вытягивание, создает или удаляет ветвь, создает тег или выпуск, оставляет комментарий к проблеме, выполняет запрос на вытягивание или фиксацию, а также отправляет новые фиксации в {% data variables.product.product_name %}.

## Доступ к веб-каналу новостей организации

1. {% данных variables.product.signin_link %} к вашей учетной записи на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %}.
2. Откройте {% data reusables.user-settings.personal_dashboard %}.
3. Щелкните переключатель контекста учетной записи в левом верхнем углу страницы.
  ![Кнопка переключателя контекста в версии Enterprise](/assets/images/help/organizations/account_context_switcher.png)
4. Выберите организацию в раскрывающемся меню.{% ifversion fpt or ghec %} ![Меню переключателя контекста в версии dotcom](/assets/images/help/organizations/account-context-switcher-selected-dotcom.png){% else %} ![Меню переключателя контекста в версии Enterprise](/assets/images/help/organizations/account_context_switcher.png){% endif %}

---
title: Ссылки на выпуски
intro: 'Вы можете предоставлять общий доступ к каждому выпуску, создаваемому на сайте GitHub, используя уникальный URL-адрес.'
redirect_from:
  - /articles/linking-to-releases
  - /github/administering-a-repository/linking-to-releases
  - /github/administering-a-repository/releasing-projects-on-github/linking-to-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 9b07e71c6e6d35839d485e5e37c795ac3c663d0b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136670'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Чтобы скопировать уникальный URL-адрес в буфер обмена, найдите нужный выпуск, щелкните правой кнопкой мыши его заголовок и скопируйте URL-адрес.
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Заголовок выпуска](/assets/images/help/releases/release-title.png) {% else %} ![Заголовок выпуска](/assets/images/help/releases/release-title-old.png) {% endif %}
1. Можно также щелкнуть правой кнопкой мыши элемент **Последний выпуск** и скопировать URL-адрес, чтобы поделиться им. Суффикс этого URL-адреса всегда `/releases/latest`.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Меню сравнения тегов выпусков](/assets/images/help/releases/refreshed-release-latest.png) {% else %} ![Тег последнего выпуска](/assets/images/help/releases/release_latest_release_tag.png) {% endif %} Для ссылки непосредственно на скачиваемый ресурс последнего выпуска, который был отправлен вручную, используйте путь `/owner/name/releases/latest/download/asset-name.zip`.

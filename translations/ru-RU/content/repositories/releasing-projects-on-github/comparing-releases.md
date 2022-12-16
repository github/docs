---
title: Сравнение выпусков
intro: 'Вы можете сравнить теги выпуска, чтобы просмотреть изменения в различных выпусках репозитория.'
permissions: People with read access to a repository can view and compare releases.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/comparing-releases
  - /github/administering-a-repository/releasing-projects-on-github/comparing-releases
ms.openlocfilehash: 12ec28717e8de8575a58487b02d5665044f471eb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136676'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Рядом с выпуском, который нужно использовать в качестве основного, щелкните **Сравнить**.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Меню выбора тегов для сравнения выпусков](/assets/images/help/releases/refreshed-compare-tags.png) {% else %} ![Меню выбора тегов для сравнения выпусков](/assets/images/help/releases/compare-tags-menu.png) {% endif %}
4. В раскрывающемся меню "Сравнить" выберите теги, которые требуется сравнить.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Меню выбора тегов для сравнения выпусков](/assets/images/help/releases/refreshed-compare-tags-menu-options.png) {% else %} ![Пункты в меню выбора тегов для сравнения выпусков](/assets/images/help/releases/compare-tags-menu-options.png) {% endif %}

---
title: Отмена публикации сайта GitHub Pages
intro: 'Вы можете отменить публикацию сайта {% data variables.product.prodname_pages %}, чтобы сайт больше не был доступен.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page
  - /articles/unpublishing-a-project-page
  - /articles/unpublishing-a-project-pages-site
  - /articles/unpublishing-a-user-pages-site
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Unpublish Pages site
ms.openlocfilehash: bfb22638b51560cb0006cca49a55b9842d8b807d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109551'
---
{% ifversion pages-custom-workflow %}

Если отменить публикацию сайта, он больше не будет доступен. Это не затронет существующие параметры репозитория и его содержимое.

{% data reusables.repositories.navigate-to-repo %}
1. В **{% data variables.product.prodname_pages %}** рядом с сообщением **Ваш сайт доступен по адресу** щелкните значок {% octicon "kebab-horizontal" aria-label="the horizontal kebab icon" %}.
1. В открывшемся меню выберите **Отменить публикацию сайта**.

   ![Раскрывающееся меню с вариантом отмены публикации сайта](/assets/images/help/pages/unpublish-site.png)

{% else %}

## Отмена публикации сайта проекта

{% data reusables.repositories.navigate-to-repo %}
2. Если в репозитории существует ветвь `gh-pages`, удалите ветвь `gh-pages`. Дополнительные сведения см. в разделе [Создание и удаление ветвей репозитория](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch).
3. Если ветвь `gh-pages` была источником публикации, {% ifversion fpt or ghec %}перейдите к шагу 6{% else %}ваш сайт теперь не опубликован, и вы можете пропустить оставшиеся шаги{% endif %}.
{% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
5. В разделе "{% data variables.product.prodname_pages %}" используйте раскрывающееся меню **Источник** и выберите **Нет.** 
  ![Раскрывающееся меню для выбора источника публикации {% data reusables.pages.update_your_dns_settings %}](/assets/images/help/pages/publishing-source-drop-down.png)

## Отмена публикации сайта пользователя или организации

{% data reusables.repositories.navigate-to-repo %}
2. Удалите ветвь, используемую в качестве источника публикации, или удалите весь репозиторий. Дополнительные сведения см. в разделах [Создание и удаление ветвей в репозитории](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch) и [Удаление репозитория](/articles/deleting-a-repository).
{% data reusables.pages.update_your_dns_settings %}

{% endif %}

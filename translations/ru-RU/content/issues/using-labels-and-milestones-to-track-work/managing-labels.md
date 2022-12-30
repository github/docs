---
title: Управление метками
intro: 'Вы можете классифицировать {% ifversion fpt or ghec %}проблемы, запросы на вытягивание и обсуждения{% else %}проблемы и запросы на вытягивание{% endif %} путем создания, редактирования, применения и удаления меток.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
type: how_to
ms.openlocfilehash: 42feddd5ebbdee81140d3aab48b81f83a2c6e69f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135269'
---
## Сведения о метках

Вы можете управлять работой с {% data variables.product.product_name %} путем создания меток, что позволяет категоризировать {% ifversion fpt or ghec %}проблемы, запросы на вытягивание и обсуждения{% else %}проблемы и запросы на вытягивание{% endif %}. Можно применить метки в репозитории, в котором была создана метка. После создания метки ее можно использовать для любой {% ifversion fpt or ghec %}проблемы, запроса на вытягивание или обсуждения{% else %}проблемы или запроса на вытягивание{% endif %} в этом репозитории.

## Сведения о метках по умолчанию

{% data variables.product.product_name %} предоставляет метки по умолчанию в каждом новом репозитории. Эти метки по умолчанию можно использовать для создания стандартного рабочего процесса в репозитории.

Метка | Описание
---  | ---
`bug` | Указывает на непредвиденное или нежелательное поведение{% ifversion fpt or ghes or ghec %}
`documentation` | Указывает на необходимость усовершенствования или дополнения документации{% endif %}
`duplicate` | Указывает на аналогичные {% ifversion fpt or ghec %}проблемы, запросы на вытягивание или обсуждения{% else %}проблемы или запросы на вытягивание{% endif %}
`enhancement` | Указывает на новые запросы функций
`good first issue` | Указывает на серьезную проблему для новых участников
`help wanted` | Указывает, что координатору требуется помощь по проблеме или запросу на вытягивание.
`invalid` | Указывает, что {% ifversion fpt or ghec %}проблема, запрос на вытягивание или обсуждение{% else %}проблема или запрос на вытягивание{% endif %} больше не имеет значения
`question` | Указывает, что требуется дополнительная информация о {% ifversion fpt or ghec %}проблеме, запросе на вытягивание или обсуждении{% else %}проблеме или запросе на вытягивание{% endif %}
`wontfix` | Указывает, что работа с {% ifversion fpt or ghec %}проблемой, запросом на вытягивание или обсуждением{% else %}проблемой или запросом на вытягивание{% endif %} не будет продолжена

Метки по умолчанию включаются в каждый новый репозиторий при создании репозитория, но позже их можно изменить или удалить.

Проблемы с меткой `good first issue` используются для заполнения страницы репозитория `contribute`. Пример страницы `contribute` см. здесь: [статье github/docs/contribute](https://github.com/github/docs/contribute). 

{% ifversion fpt or ghes or ghec %} Владельцы организации могут настроить метки по умолчанию для репозиториев в своей организации. Дополнительные сведения см. в разделе [Управление метками по умолчанию для репозиториев в организации](/articles/managing-default-labels-for-repositories-in-your-organization).
{% endif %}

## Создание метки

Любой пользователь с доступом на запись в репозиторий может создать метку.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. Справа от поля поиска нажмите кнопку **Новая метка**.
{% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## Применение метки

Любой пользователь с доступом к репозиторию может применять и закрывать метки.

1. Перейдите к {% ifversion fpt or ghec %}проблеме, запросу на вытягивании или обсуждению{% else %}проблеме или запросу на вытягивание{% endif %}.
1. На боковой панели справа от раздела "Метки" нажмите {% octicon "gear" aria-label="The gear icon" %}, а затем щелкните метку.
  ![Раскрывающееся меню "Метки"](/assets/images/help/issues/labels-drop-down.png)

## Изменение метки

Любой пользователь с доступом на запись к репозиторию может редактировать существующие метки.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## Удаление метки

Любой пользователь с доступом на запись к репозиторию может удалить существующие метки.

Удаление метки приведет к удалению метки из проблем и запросов на вытягивание.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.delete-label %}

## Дополнительные материалы
- [Фильтрация и поиск проблем и запросов на вытягивание](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests){% ifversion fpt or ghes or ghec %}
- [Управление метками по умолчанию для репозиториев в организации](/articles/managing-default-labels-for-repositories-in-your-organization){% endif %}{% ifversion fpt or ghec %}
- [Содействие внесению полезных вкладов в разработку проекта с помощью меток](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels){% endif %}
- [Базовый синтаксис записи и форматирования](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#using-emoji)

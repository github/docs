---
title: Назначение проблем и запросов на вытягивание другим пользователям GitHub
intro: 'Назначенные лица разъясняют, кто работает над конкретными проблемами и запросами на вытягивание.'
permissions: 'Anyone with write access to a repository can assign issues and pull requests. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/assigning-issues-and-pull-requests-to-other-github-users
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
  - /issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Assign issues & PRs
ms.openlocfilehash: 0e1f4029ddcd180e892e43257ae3a75d0046ce1d
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878453'
---
## Сведения о пользователях, которым назначены проблемы и запросы на вытягивание

Вы можете назначить несколько пользователей для каждой проблемы или запроса на вытягивание, включая себя, всех, кто прокомментировал проблему или запрос на вытягивание, всех пользователей с разрешениями на запись в репозитории и членов организации с разрешениями на чтение в репозитории. Дополнительные сведения см. в разделе [Разрешения на доступ к {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github).

Для проблем и запросов на вытягивание в общедоступных репозиториях, а также в частных репозиториях для платной учетной записи можно назначать до 10 пользователей. Частные репозитории в бесплатном плане ограничены одним пользователем на одну проблему или запрос на вытягивание.

## Назначение отдельной проблемы или запроса на вытягивание

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Откройте проблему или запрос на вытягивание, который вы хотите кому-то назначить.
4. Если никто не назначен проблеме или запросу на вытягивание, нажмите кнопку **Назначить себе**.
  ![Элемент "Назначить себе"](/assets/images/help/issues/assign_yourself.png)
5. В меню справа нажмите **Кому назначено**.
   ![Пункт меню "Кому назначено"](/assets/images/help/issues/assignee_menu.png)
6. Чтобы назначить пользователю проблему или запрос на вытягивание, начните вводить имя пользователя, а затем щелкните это имя, когда оно отобразится. Вы можете назначить для проблемы или запроса на вытягивание до 10 пользователей.
  ![Раскрывающееся меню с назначением проблем](/assets/images/help/issues/issues_assigning_dropdown.png)

## Назначение нескольких проблем или запросов на вытягивание

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Установите флажок рядом с элементами, которые вы хотите кому-то назначить.
  ![Флажок "Метаданные проблем"](/assets/images/help/issues/issues_assign_checkbox.png)
4. В верхнем правом углу нажмите кнопку **Назначить**.
5. Чтобы назначить пользователю элементы, начните вводить имя пользователя, а затем щелкните это имя, когда оно отобразится. Вы можете назначить для проблемы или запроса на вытягивание до 10 пользователей.
  ![Раскрывающееся меню с назначением проблем](/assets/images/help/issues/issues_assigning_dropdown.png)

## Дополнительные материалы

* [Фильтрация проблем и запросов на вытягивание по пользователям, которым назначены элементы](/articles/filtering-issues-and-pull-requests-by-assignees)

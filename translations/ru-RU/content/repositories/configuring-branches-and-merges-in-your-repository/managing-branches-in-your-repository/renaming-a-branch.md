---
title: Переименование ветви
intro: Вы можете изменить имя ветви в репозитории.
permissions: 'People with write permissions to a repository can rename a branch in the repository unless it is the [default branch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch){% ifversion fpt or ghec or ghes > 3.3 %} or a [protected branch](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% endif %}. People with admin permissions can rename the default branch{% ifversion fpt or ghec or ghes > 3.3 %} and protected branches{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/renaming-a-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/renaming-a-branch
ms.openlocfilehash: 114f6c52cd30d82349c834549fd6ffa6eb3dc978
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093660'
---
## Сведения о переименовании ветвей

Вы можете переименовать ветвь в репозитории на {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Сведения о ветвях](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches).

При переименовании ветви на {% данных variables.location.product_location %}все URL-адреса, содержащие старое имя ветви, автоматически перенаправляются на эквивалентный URL-адрес переименованной ветви. Также обновятся политики защиты ветвей, базовая ветвь для открытых запросов на вытягивание (в том числе и для вилок) и черновики выпусков. После завершения переименования на домашней странице репозитория на {% data variables.product.prodname_dotcom %} будут показаны инструкции для участников по обновлению их локальных сред Git.

В отличие от URL-адресов файлов, не происходит автоматическое перенаправление URL-адресов необработанных файлов. Кроме того, {% data variables.product.prodname_dotcom %} не осуществляет перенаправление, если пользователи выполняют команду `git pull` для предыдущего имени ветви.

Переименование не отслеживается в рабочих процессах {% data variables.product.prodname_actions %}. Поэтому при использовании опубликованного в репозитории действия с `@{old-branch-name}` работа будет нарушена. Мы рекомендуем добавить новую ветвь с исходным содержимым и выполнить дополнительную фиксацию, чтобы сообщить пользователям об устаревшем имени ветви и предложить им перейти на новое имя.

## Переименование ветви

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. В списке ветвей щелкните значок {% octicon "pencil" aria-label="The edit icon" %} справа от ветви, которую требуется переименовать.
    ![Значок карандаша справа от ветви, которую требуется переименовать](/assets/images/help/branch/branch-rename-edit.png)
1. Введите новое имя ветви.
    ![Текстовое поле для ввода нового имени ветви](/assets/images/help/branch/branch-rename-type.png)
1. Просмотрите сведения о локальных средах и щелкните **Переименовать ветвь**.
    ![Сведения о локальных средах и кнопка "Переименовать ветвь"](/assets/images/help/branch/branch-rename-rename.png)

## Обновление локального клона после изменения имени ветви

После переименования ветви в репозитории на {% data variables.product.product_name %} каждому участнику совместной работы с локальным клоном репозитория необходимо обновить клон.

Чтобы обновить имя ветви по умолчанию, выполните следующие команды в локальном клоне репозитория на компьютере.

```shell
$ git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME
$ git fetch origin
$ git branch -u origin/NEW-BRANCH-NAME NEW-BRANCH-NAME
$ git remote set-head origin -a
```

При необходимости выполните следующую команду, чтобы удалить ссылки для отслеживания старого имени ветви.
```
$ git remote prune origin
```

---
title: Изменение ветви по умолчанию
intro: 'Если в репозитории есть несколько ветвей, можно настроить любую ветвь как ветвь по умолчанию.'
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
  - /github/administering-a-repository/changing-the-default-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/changing-the-default-branch
topics:
  - Repositories
shortTitle: Change the default branch
ms.openlocfilehash: e8f88499ab258e5855804288a4f811b38237df97
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136970'
---
## Сведения об изменении ветви по умолчанию

Можно выбирать ветвь по умолчанию для репозитория. Ветвь по умолчанию — это базовая ветвь для запросов на вытягивание и фиксаций кода. Дополнительные сведения о ветви по умолчанию см. в разделе [Сведения о ветвях](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch).

{% ifversion not ghae %} {% note %}

**Примечание**. Если вы используете мост Git-Subversion, изменение ветви по умолчанию повлияет на содержимое ветви `trunk` и на `HEAD`, который отображается при перечислении ссылок на удаленный репозиторий. Дополнительные сведения см. в разделах [Поддержка клиентов Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients) и [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html) документации по Git.

{% endnote %} {% endif %}

Можно также переименовать ветвь по умолчанию. Дополнительные сведения см. в разделе [Переименование ветви](/github/administering-a-repository/renaming-a-branch).

{% data reusables.branches.set-default-branch %}

## Предварительные требования

Чтобы изменить ветвь по умолчанию, репозиторий должен иметь несколько ветвей. Дополнительные сведения см. в разделе [Создание и удаление ветвей репозитория](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch).

## Изменение ветви по умолчанию

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. В разделе "Ветвь по умолчанию" справа от имени ветви по умолчанию щелкните {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}.
   ![Значок переключения с двумя стрелками справа от имени текущей ветви по умолчанию](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. Откройте раскрывающийся список, а затем щелкните имя ветви.
   ![Раскрывающийся список для выбора новой ветви по умолчанию](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. Нажмите кнопку **Обновить**.
   ![Кнопка "Обновить" после выбора новой ветви по умолчанию](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. Прочтите предупреждение, а затем щелкните **Я понимаю, обновить ветвь по умолчанию.** 
   !["Я понимаю, обновить ветвь по умолчанию." кнопка для выполнения обновления](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)


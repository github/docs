---
title: Изменение файлов
intro: 'Вы можете редактировать файлы непосредственно в {% data variables.product.product_name %} в любом репозитории с помощью редактора файлов.'
redirect_from:
  - /articles/editing-files
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
  - /articles/editing-files-in-another-user-s-repository
  - /github/managing-files-in-a-repository/editing-files-in-another-users-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Edit files
ms.openlocfilehash: 515b773aaa9dd2a93d6c0b4b70adb3ef10afe082
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136562'
---
## Редактирование файлов в репозитории

{% tip %}

**Tip**: {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**Примечание.** В редакторе файлов {% data variables.product.product_name %} используется [CodeMirror](https://codemirror.net/).

{% endnote %}

1. В репозитории перейдите к файлу, который вы хотите изменить.
{% data reusables.repositories.edit-file %}
3. На вкладке **Изменить файл** внесите необходимые изменения в файл.
![Новое содержимое в файле](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %} {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Редактирование файлов в репозитории другого пользователя

При изменении файла в репозитории другого пользователя мы автоматически [создаем вилку репозитория](/articles/fork-a-repo) и [открываем запрос на вытягивание](/articles/creating-a-pull-request).

1. В репозитории другого пользователя перейдите к папке, содержащей файл, который требуется изменить. Щелкните имя файла, который нужно изменить.
2. Над содержимым файла щелкните {% octicon "pencil" aria-label="The edit icon" %}. На этом этапе GitHub создает вилку репозитория.
3. Внесите необходимые изменения в файл.
![Новое содержимое в файле](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %} {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
6. Щелкните **Предложить изменение файла**.
![Кнопка "Зафиксировать изменения"](/assets/images/help/repository/propose_file_change_button.png)
7. Введите название и описание для запроса на вытягивание.
![Страница описания запроса на вытягивание](/assets/images/help/pull_requests/pullrequest-description.png)
8. Щелкните **Создать запрос на вытягивание**.
![Кнопка "Запрос на вытягивание"](/assets/images/help/pull_requests/pullrequest-send.png)

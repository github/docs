---
title: Перемещение файла в новое расположение
intro: 'Вы можете перенести файл в другой каталог в {% data variables.product.product_name %} или с помощью командной строки.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/moving-a-file-to-a-new-location-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Move a file
ms.openlocfilehash: 17f0e4dde2865f7c849c481f68acc05ed1cfd7d9
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009175'
---
При изменении  расположения файла можно в той же фиксации [обновить содержимое файла](/articles/editing-files-in-your-repository) или [присвоить ему новое имя](/articles/renaming-a-file).

## Перемещение файла в новое расположение в {% data variables.product.product_name %}

{% tip %}

**Совет**.

- Если вы попытаетесь переместить файл в репозиторий, к которому у вас нет доступа, мы создадим вилку проекта к вашей личной учетной записи и поможем отправить [запрос на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) в исходный репозиторий после того, как вы зафиксируете внесенное изменение.
- Некоторые файлы, например образы, требуют перемещения из командной строки. Дополнительные сведения см. в разделе [Перемещение файла в новое расположение с помощью командной строки](/articles/moving-a-file-to-a-new-location-using-the-command-line).
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. В репозитории перейдите к файлу, который вы хотите переместить.
2. В правом верхнем углу представления файла щелкните {% octicon "pencil" aria-label="The edit icon" %}, чтобы открыть редактор файлов.
![Значок редактирования файлов](/assets/images/help/repository/move-file-edit-file-icon.png)
3. В поле "Имя файла" измените имя файла согласно следующим рекомендациям: ![Изменение имени файла](/assets/images/help/repository/moving_files.gif)
    - Чтобы переместить файл **во вложенную папку**, введите имя нужной папки, а затем `/`. Имя новой папки станет новым элементом на панели навигации.
    - Чтобы переместить файл в каталог **над текущим расположением файла**, поместите курсор в начало поля имени файла, а затем введите `../`, чтобы перейти на один полный уровень каталога вверх, или введите ключ `backspace`, чтобы изменить имя родительской папки.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Перемещение файла в новое расположение с помощью командной строки 

Для перемещения файлов по репозиторию с помощью командной строки нужно удалить файл из старого расположения и добавить в новое.

Многие файлы можно [перемещать непосредственно в {% data variables.product.product_name %}](/articles/moving-a-file-to-a-new-location), но для некоторых файлов, таких как образы, необходимо использовать командную строку.

{% data reusables.command_line.manipulating_file_prereqs %}

1. На компьютере переместите файл в новое расположение в каталоге, созданном на локальном компьютере при клонировании репозитория.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Для проверки старых и новых расположений файлов используйте `git status`.
  ```shell
  $ git status
  > # On branch YOUR-BRANCH
  > # Changes not staged for commit:
  > #   (use "git add/rm <file>..." to update what will be committed)
  > #   (use "git checkout -- <file>..." to discard changes in working directory)
  > #
  > #     deleted:    /OLD-FOLDER/IMAGE.PNG
  > #
  > # Untracked files:
  > #   (use "git add <file>..." to include in what will be committed)
  > #
  > #     /NEW-FOLDER/IMAGE.PNG
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
{% data reusables.git.stage_for_commit %} Это действие приведет к удалению (команда `git rm`) файла из старого расположения и его добавлению (команда `git add`) в новое.
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit.
  # {% data reusables.git.unstage-codeblock %}
  ```
5. Для проверки изменений, подготовленных для фиксации, используйте `git status`.
  ```shell
  $ git status
  > # On branch YOUR-BRANCH
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #    renamed:    /old-folder/image.png -> /new-folder/image.png
  # Displays the changes staged for commit
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Move file to new directory"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

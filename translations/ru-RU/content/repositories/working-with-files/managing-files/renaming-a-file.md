---
title: Переименование файла
intro: 'Любой файл в репозитории можно переименовать непосредственно в {% data variables.product.product_name %} или с помощью командной строки.'
redirect_from:
  - /articles/renaming-a-file
  - /github/managing-files-in-a-repository/renaming-a-file
  - /articles/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/renaming-a-file
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/renaming-a-file-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f841c1f2071d59b28b04681528ba4420fc5b08e4
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009856'
---
## Переименование файла в {% data variables.product.product_name %}

Переименование файла позволяет также [переместить файл в новое расположение](/articles/moving-a-file-to-a-new-location).

{% tip %}

**Совет**.

- Если вы попытаетесь переименовать файл в репозитории, к которому у вас нет доступа, мы создадим вилку проекта к вашей личной учетной записи и поможем отправить [запрос на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) в исходный репозиторий после того, как вы зафиксируете внесенное изменение.
- Имена файлов, создаваемых через веб-интерфейс, могут содержать только буквенно-цифровые символы и дефисы (`-`). Чтобы использовать другие символы, создайте и зафиксируйте файлы локально, а затем отправьте их в репозиторий.
- Некоторые файлы, например изображения, переименовываются из командной строки. Дополнительные сведения см. в разделе [Переименование файла с помощью командной строки](/articles/renaming-a-file-using-the-command-line).

{% endtip %}

1. В репозитории перейдите к файлу рабочего процесса, который вы хотите переименовать.
2. В правом верхнем углу представления файла щелкните {% octicon "pencil" aria-label="The edit icon" %}, чтобы открыть редактор файлов.
![Значок редактирования файлов](/assets/images/help/repository/edit-file-icon.png)
3. Измените имя файла по своему желанию в поле имени файла. Одновременно можно обновить и содержимое этого файла.
![Редактирование имени файла](/assets/images/help/repository/changing-file-name.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Переименование файла с помощью командной строки 

Любой файл в репозитории можно переименовать через командную строку.

Многие файлы можно [переименовывать непосредственно в {% data variables.product.product_name %}](/articles/renaming-a-file), но для некоторых файлов, таких как изображения, необходимо использовать командную строку.

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. Переименуйте файл, указав старое имя файла и имя, на которое вы хотите его изменить. Это позволит зафиксировать внесенное изменение.
  ```shell
  $ git mv OLD-FILENAME NEW-FILENAME
  ```
4. Для проверки старых и новых имен файлов используйте `git status`.
  ```shell
  $ git status
  > # On branch YOUR-BRANCH
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #     renamed: OLD-FILENAME -> NEW-FILENAME
  > #
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Rename file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}


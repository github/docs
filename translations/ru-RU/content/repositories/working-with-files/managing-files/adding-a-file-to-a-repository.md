---
title: Добавление файла в репозиторий
intro: 'Можно отправить и зафиксировать существующий файл в репозиторий {% data variables.product.product_name %} или с помощью командной строки.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-large-files/about-large-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Add a file
ms.openlocfilehash: ae5a795f4e5faab662946d6b933224a5bc57ab99
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098005'
---
## Добавление файла в репозиторий {% data variables.product.product_name %}

Файлы, добавляемые в репозиторий через браузер, не могут превышать {% data variables.large_files.max_github_browser_size %}. Вы можете добавлять большие файлы (до {% data variables.large_files.max_github_size %}) через командную строку. Дополнительные сведения см. в разделе [Добавление файла в репозиторий с помощью командной строки](#adding-a-file-to-a-repository-using-the-command-line). Чтобы добавить файлы размером больше {% data variables.large_files.max_github_size %}, необходимо использовать {% data variables.large_files.product_name_long %}. Дополнительные сведения см. в разделе [Сведения о больших файлах на {% data variables.product.product_name %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github).

{% tip %}

**Советы**
- Одновременно можно отправить несколько файлов в {% data variables.product.product_name %}.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Над списком файлов в раскрывающемся списке **Добавить файлы** щелкните **Отправить файлы**.
  ![Пункт "Отправить файлы" в раскрывающемся списке "Добавить файлы"](/assets/images/help/repository/upload-files-button.png)
3. Перетащите файл или папку, которую вы хотите отправить в репозиторий, в дерево файлов.
![Область перетаскивания](/assets/images/help/repository/upload-files-drag-and-drop.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %}
6. Щелкните **Зафиксировать изменения**.
![Кнопка "Зафиксировать изменения"](/assets/images/help/repository/commit-changes-button.png)

## Добавление файла в репозиторий с помощью командной строки

Существующий файл можно отправить в репозиторий на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} с помощью командной строки.

{% tip %}

**Совет.** Вы также можете [добавить существующий файл в репозиторий с веб-сайта {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. На компьютере переместите файл, который вы хотите передать в {% data variables.product.product_name %} в локальный каталог, который был создан при клонировании репозитория.
{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %} {% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

## Дополнительные материалы

- [Добавление локально размещенного кода в {% data variables.product.product_name %}](/get-started/importing-your-projects-to-github/importing-source-code-to-github//adding-locally-hosted-code-to-github)

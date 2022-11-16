---
title: Настройка Git Large File Storage
intro: 'После [установки {% data variables.large_files.product_name_short %}](/articles/installing-git-large-file-storage/) необходимо связать его с большим файлом в репозитории.'
redirect_from:
  - /articles/configuring-large-file-storage
  - /articles/configuring-git-large-file-storage
  - /github/managing-large-files/configuring-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/configuring-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Configure Git LFS
ms.openlocfilehash: 363e89be0c729b8ea6d5313cec0c7ce61654f229
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331763'
---
Если в репозитории есть файлы, с которыми вы хотите использовать {% data variables.product.product_name %}, необходимо сначала удалить их из репозитория, а затем добавить их в {% data variables.large_files.product_name_short %} локально. Дополнительные сведения см. в разделе [Перемещение файла в репозитории в {% data variables.large_files.product_name_short %}](/articles/moving-a-file-in-your-repository-to-git-large-file-storage).

{% data reusables.large_files.resolving-upload-failures %}

{% ifversion ghes or ghae %}

{% tip %}

**Примечание.** Прежде чем пытаться отправить большой файл в {% data variables.product.product_name %}, включите {% data variables.large_files.product_name_short %} на предприятии. Дополнительные сведения см. в разделе [Настройка Git Large File Storage в GitHub Enterprise Server](/enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/).

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Измените текущий рабочий каталог на существующий репозиторий, который вы хотите использовать с {% data variables.large_files.product_name_short %}.
3. Чтобы связать тип файла в репозитории с {% data variables.large_files.product_name_short %}, введите `git {% data variables.large_files.command_name %} track`, а затем имя расширения файла, который необходимо автоматически отправить в {% data variables.large_files.product_name_short %}.

  Например, чтобы привязать _PSD_-файл, введите следующую команду:
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  Каждый тип файла, который требуется связать с {% data variables.large_files.product_name_short %}, необходимо добавить с `git {% data variables.large_files.command_name %} track`. Эта команда изменяет файл *GITATTRIBUTES* репозитория и связывает большие файлы с {% data variables.large_files.product_name_short %}.

  {% note %}

  **Примечание:** Настоятельно рекомендуем зафиксировать локальный файл *GITATTRIBUTES* в репозитории.

    - Использование глобального файла *GITATTRIBUTES*, связанного с {% data variables.large_files.product_name_short %}, может привести к конфликтам при участии в других проектах Git.
    - Включение файла *GITATTRIBUTES* в репозитории позволяет пользователям создавать вилки или свежие клоны, чтобы упростить совместную работу с помощью {% data variables.large_files.product_name_short %}.
    - Включение файла *GITATTRIBUTES* в репозиторий позволяет дополнительно включать объекты {% data variables.large_files.product_name_short %} в ZIP-файл и архивы tarball.

  {% endnote %}

4. Добавьте файл в репозиторий, соответствующий связанному расширению:
  ```shell
  $ git add path/to/file.psd
  ```
5. Зафиксируйте файл и отправьте его в {% data variables.product.product_name %}:
  ```shell
  $ git commit -m "add file.psd"
  $ git push
  ```
  Вы увидите некоторые диагностические сведения об отправке файла:
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

## Дополнительные материалы

- [Совместная работа с помощью {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"{% ifversion fpt or ghec %}
- [Управление объектами {% data variables.large_files.product_name_short %} в архивах репозитория](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository){% endif %}

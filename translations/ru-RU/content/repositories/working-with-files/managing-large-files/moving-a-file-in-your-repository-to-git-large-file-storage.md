---
title: Перемещение файла в репозитории в Git Large File Storage
intro: 'Если вы настроили {% data variables.large_files.product_name_short %} и у вас есть файл в репозитории, который необходимо отслеживать в {% data variables.large_files.product_name_short %}, необходимо сначала удалить его из репозитория.'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Move a file to Git LFS
ms.openlocfilehash: fc03edc2ef82be8d7edb106a8c4a2a0b8efbeedb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136499'
---
После установки {% data variables.large_files.product_name_short %} и настройки отслеживания {% data variables.large_files.product_name_short %} можно переместить файлы из обычного отслеживания Git в {% data variables.large_files.product_name_short %}. Дополнительные сведения см. в разделе [Установка {% data variables.large_files.product_name_long %}](/github/managing-large-files/installing-git-large-file-storage) и [Настройка {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage).

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**Совет.** Если появляется сообщение об ошибке "Превышен предельный размер файла {% data variables.large_files.product_name_short %}, равный {% data variables.large_files.max_github_size %}" при попытке отправить файлы в Git, можно использовать `git lfs migrate` вместо `filter branch` или BFG Repo Cleaner для перемещения большого файла в {% data variables.large_files.product_name_long %}. Дополнительные сведения о команде `git lfs migrate` см. в объявлении о выпуске [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released).

{% endtip %}

1.  Удалите файл из журнала Git репозитория с помощью команды `filter-branch` или BFG Repo-Cleaner. Подробные сведения об их использовании см. в разделе [Удаление конфиденциальных данных из репозитория](/articles/removing-sensitive-data-from-a-repository).
2. Настройте отслеживание файла и отправьте его в {% data variables.large_files.product_name_short %}. Дополнительные сведения об этой процедуре см. в статье [Настройка {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage).

## Дополнительные материалы

- [Сведения о {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)
- [Совместная работа с помощью {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)
- [Установка {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)

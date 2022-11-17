---
title: Удаление файлов из хранилища больших файлов Git
intro: 'Если вы настроили {% data variables.large_files.product_name_short %} для репозитория, можно удалить все файлы или подмножество файлов из {% data variables.large_files.product_name_short %}.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
  - /github/managing-large-files/removing-files-from-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/removing-files-from-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove files
ms.openlocfilehash: 4aa8b6789a916616b43b2b995174e64e25856ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136496'
---
## Удаление одного файла

1.  Удалите файл из журнала Git репозитория с помощью команды `filter-branch` или BFG Repo-Cleaner. Подробные сведения об их использовании см. в разделе [Удаление конфиденциальных данных из репозитория](/articles/removing-sensitive-data-from-a-repository).
2. Перейдите к *GITATTRIBUTES*-файлу.

  {% note %}

  **Примечание.** *GITATTRIBUTES*-файл обычно сохраняется в локальном репозитории. В некоторых случаях может создаваться глобальный *GITATTRIBUTES*-файл, содержащий все связи {% data variables.large_files.product_name_short %}.

  {% endnote %}
3. Найдите и удалите связанное правило отслеживания {% data variables.large_files.product_name_short %} в *GITATTRIBUTES*-файле.
4. Сохраните и закройте *GITATTRIBUTES*-файл.

## Удаление всех файлов в репозитории {% data variables.large_files.product_name_short %}

1. Удалите файлы из журнала Git репозитория с помощью команды `filter-branch` или BFG Repo-Cleaner. Подробные сведения об их использовании см. в разделе [Удаление конфиденциальных данных из репозитория](/articles/removing-sensitive-data-from-a-repository).
2. Чтобы удалить {% data variables.large_files.product_name_short %} (если нужно) в репозитории, выполните следующий код:
  ```shell
  $ git lfs uninstall
  ```
  Для версий {% data variables.large_files.product_name_short %} ниже 1.1.0 выполните следующий код:
  ```shell
  $ git lfs uninit
  ```

## Объекты {% data variables.large_files.product_name_short %} в вашем репозитории

После удаления файлов из {% data variables.large_files.product_name_short %} объекты {% data variables.large_files.product_name_short %} остаются в удаленном хранилище{% ifversion fpt or ghec %} и продолжают учитываться в квоте хранилища {% data variables.large_files.product_name_short %}{% endif %}.

Чтобы удалить объекты {% data variables.large_files.product_name_short %} из репозитория, {% ifversion fpt or ghec %}удалите репозиторий и создайте его заново. При удалении репозитория также удаляются все связанные проблемы, звезды и вилки. Дополнительные сведения см. в разделе [Удаление репозитория](/github/administering-a-repository/deleting-a-repository). Если вам нужно стереть удаленный объект, а удалить репозиторий не удается, [обратитесь в службу поддержки](/github/working-with-github-support) за помощью. {% else %}обратитесь к администратору {% data variables.product.prodname_enterprise %} для архивации объектов. Архивированные объекты стираются через три месяца.{% endif %}

{% note %}

**Примечание.** Если вы удалили один файл, а другие объекты {% data variables.large_files.product_name_short %} хотите сохранить в репозитории, то после удаления и повторного создания репозитория измените конфигурацию файлов, связанных с {% data variables.large_files.product_name_short %}. Дополнительные сведения см. в разделах [Удаление одного файла](#removing-a-single-file) и [Настройка конфигурации {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)."

{% endnote %}

## Дополнительные материалы

- [Сведения о {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)
- [Совместная работа с помощью {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)
- [Установка {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)

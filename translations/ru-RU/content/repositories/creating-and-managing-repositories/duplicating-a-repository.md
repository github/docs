---
title: Дублирование репозиториев
intro: 'Чтобы сохранить зеркало репозитория без создания вилки, можно выполнить специальную команду клонирования, а затем зеркальную передачу данных в новый репозиторий.'
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 4c893597918cb4837e88d13aa6a51b769ab13dd1
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135489'
---
{% ifversion fpt or ghec %}

{% note %}

**Примечание.** Если у вас есть проект, размещенный в другой системе управления версиями, можно автоматически импортировать проект в {% data variables.product.prodname_dotcom %} с помощью средства импортирования {% data variables.product.prodname_dotcom %} Importer. Дополнительную информацию см. в разделе [Сведения о средстве импортирования {% data variables.product.prodname_dotcom %} Importer](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer).

{% endnote %}

{% endif %}

Перед отправкой исходного репозитория в новую копию или _зеркальное_ отображение репозитория необходимо [создать новый репозиторий](/articles/creating-a-new-repository) на {% data variables.location.product_location %}. В приведенных ниже примерах `exampleuser/new-repository` или `exampleuser/mirrored` — это зеркала.

## Зеркало репозитория

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Создайте "чистый" клон репозитория.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. Отправьте зеркало в новый репозиторий.
  ```shell
  $ cd OLD-REPOSITORY.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
4. Удалите временный локальный репозиторий, созданный ранее.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## Зеркало репозитория, содержащего объекты {% data variables.large_files.product_name_long %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Создайте "чистый" клон репозитория. Замените пример имени пользователя на имя пользователя или организации, которым принадлежит репозиторий, и замените пример имени репозитория на имя репозитория, который нужно дублировать.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. Перейдите к репозиторию, который вы только что клонировали.
  ```shell
  $ cd OLD-REPOSITORY.git
  ```
4. Извлеките объекты {% data variables.large_files.product_name_long %} репозитория.
  ```shell
  $ git lfs fetch --all
  ```
5. Отправьте зеркало в новый репозиторий.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
6. Отправьте объекты {% data variables.large_files.product_name_long %} репозитория в зеркало.
  ```shell
  $ git lfs push --all https://github.com/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
7. Удалите временный локальный репозиторий, созданный ранее.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## Зеркало репозитория в другом расположении

Если вы хотите отобразить репозиторий в другое расположение, а также получать обновления из исходного, можно клонировать зеркало и периодически отправлять изменения.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Создайте "чистый" зеркальный клон репозитория.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/REPOSITORY-TO-MIRROR.git
  ```
3. Задайте вашему зеркалу расположение для отправки.
  ```shell
  $ cd REPOSITORY-TO-MIRROR
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/MIRRORED
  ```
Как и в случае с "чистым" клоном, зеркальный содержит все удаленные ветви и теги, но все локальные ссылки будут перезаписаны при каждом извлечении, поэтому он всегда будет совпадать с исходным репозиторием. Задание URL-адреса для отправок упрощает отправку в зеркало.

4. Чтобы обновить зеркало, получите обновления и отправьте их.
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %}
## Дополнительные материалы

* [Отправка изменений на GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)
* [Сведения о хранилище больших файлов Git и GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)
* [О GitHub Importer](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)

{% endif %}

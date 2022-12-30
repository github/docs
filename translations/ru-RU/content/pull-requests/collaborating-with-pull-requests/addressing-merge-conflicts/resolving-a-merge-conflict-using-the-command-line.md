---
title: Разрешение конфликта слияния с помощью командной строки
intro: Устраните конфликты слияния с помощью командной строки и текстового редактора.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts in Git
ms.openlocfilehash: 411b02950a4cdc023f47fd2d84f8623d35cc4ac2
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009912'
---
Конфликты слияния возникают, если вносятся конкурирующие изменения в ту же строку файла или если один пользователь изменяет файл, а другой этот же файл удаляет. Дополнительную информацию см. в разделе [Сведения о конфликтах слияния](/articles/about-merge-conflicts/).

{% tip %}

**Совет.** Можно использовать редактор конфликтов в {% data variables.product.product_name %}, чтобы разрешать конкурирующие конфликты слияния изменений строк между ветвями, которые являются частью запроса на вытягивание. Дополнительные сведения см. в разделе [Устранение конфликта слияния в GitHub](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github).

{% endtip %}

## Конкурирующие конфликты слияния изменений строк

Чтобы разрешить конфликт слияния, вызванный конкурирующими изменениями строк, необходимо выбрать, какие изменения из разных ветвей включить в новую фиксацию.

Например, если несколько человек редактировали файл _styleguide.md_ в одних и тех же строках в разных ветвях одного и того же репозитория Git, будет получена ошибка конфликта слияния при попытке выполнить слияние для этих ветвей. Необходимо разрешить этот конфликт слияния с помощью новой фиксации, прежде чем можно будет выполнить слияние для этих ветвей.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Перейдите в локальный репозиторий Git, в котором есть конфликт слияния.
  ```shell
  cd REPOSITORY-NAME
  ```
3. Создайте список файлов, затронутых конфликтом слияния. В этом примере у файла *styleguide.md* есть конфликт слияния.
  ```shell
  $ git status
  > # On branch branch-b
  > # You have unmerged paths.
  > #   (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #   (use "git add <file>..." to mark resolution)
  > #
  > # both modified:      styleguide.md
  > #
  > no changes added to commit (use "git add" and/or "git commit -a")
  ```
4. Откройте избранный текстовый редактор, например [{% данных variables.product.prodname_vscode %}](https://code.visualstudio.com/), и перейдите к файлу с конфликтами слияния.
5. Чтобы увидеть начало конфликта слияния в файле, выполните в нем поиск метки конфликта `<<<<<<<`. При открытии файла в текстовом редакторе вы увидите изменения из ГЛАВНОЙ или базовой ветви после строки `<<<<<<< HEAD`. Далее вы увидите `=======`, который отделяет ваши изменения от изменений в другой ветви, а затем `>>>>>>> BRANCH-NAME`. В этом примере один человек написал "открыть проблему" в базовой или ГЛАВНОЙ ветви, а другой написал "задать свой вопрос в IRC" в ветви сравнения или `branch-a`.

    ```
    If you have questions, please
    <<<<<<< HEAD
    open an issue
    =======
    ask your question in IRC.
    >>>>>>> branch-a
    ```
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} В этом примере оба изменения включены в окончательное слияние:

  ```shell
  If you have questions, please open an issue or ask in our IRC channel if it's more urgent.
  ```
7. Добавьте или внесите свои изменения.
  ```shell
  $ git add .
  ```
8. Зафиксируйте изменения с помощью комментария.
  ```shell
  $ git commit -m "Resolved merge conflict by incorporating both suggestions."
  ```

Теперь можно выполнять слияние ветвей в командной строке или [отправить изменения в удаленный репозиторий](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) в {% data variables.product.product_name %} и [выполнить слияние изменений](/articles/merging-a-pull-request/) в запросе на вытягивание.

## Конфликты слияния файлов удалены

Чтобы разрешить конфликт слияния, вызванный конкурирующими изменениями в файле, когда один пользователь удаляет файл в одной ветви, а другой этот же файл редактирует, необходимо выбрать, следует ли удалить или сохранить удаленный файл в новой фиксации.

Например, если вы редактировали файл, такой как *README.md*, а другой человек удалил его же в другой ветви того же репозитория Git, вы получите сообщение об ошибке конфликта слияния при попытке выполнить слияние для этих веток. Необходимо разрешить этот конфликт слияния с помощью новой фиксации, прежде чем можно будет выполнить слияние для этих ветвей.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Перейдите в локальный репозиторий Git, в котором есть конфликт слияния.
  ```shell
  cd REPOSITORY-NAME
  ```
2. Создайте список файлов, затронутых конфликтом слияния. В этом примере у файла *README.md* есть конфликт слияния.
  ```shell
  $ git status
  > # On branch main
  > # Your branch and 'origin/main' have diverged,
  > # and have 1 and 2 different commits each, respectively.
  > #  (use "git pull" to merge the remote branch into yours)
  > # You have unmerged paths.
  > #  (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #  (use "git add/rm <file>..." as appropriate to mark resolution)
  > #
  > #   deleted by us:   README.md
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
3. Откройте избранный текстовый редактор, например [{% данных variables.product.prodname_vscode %}](https://code.visualstudio.com/), и перейдите к файлу с конфликтами слияния.
6. Решите, следует ли сохранить удаленный файл. Возможно, потребуется просмотреть последние изменения, внесенные в удаленный файл, в текстовом редакторе.

 Чтобы добавить удаленный файл обратно в репозиторий, выполните следующие действия:
  ```shell
  $ git add README.md
  ```
 Чтобы удалить этот файл из репозитория, выполните следующие действия:
  ```shell
  $ git rm README.md
  > README.md: needs merge
  > rm 'README.md'
  ```
7. Зафиксируйте изменения с помощью комментария.
  ```shell
  $ git commit -m "Resolved merge conflict by keeping README.md file."
  > [branch-d 6f89e49] Merge branch 'branch-c' into branch-d
  ```

Теперь можно выполнять слияние ветвей в командной строке или [отправить изменения в удаленный репозиторий](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) в {% data variables.product.product_name %} и [выполнить слияние изменений](/articles/merging-a-pull-request/) в запросе на вытягивание.

## Дополнительные материалы

- [Сведения о конфликтах слияния](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)
- [Локальное получение для изменения запросов на вытягивание](/articles/checking-out-pull-requests-locally/)

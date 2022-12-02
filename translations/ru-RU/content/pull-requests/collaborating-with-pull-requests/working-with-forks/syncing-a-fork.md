---
title: Синхронизация вилки
intro: 'Синхронизируйте вилку репозитория, чтобы гарантировать его актуальность в вышестоящем репозитории.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /articles/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
permissions: People with write access for a forked repository can sync the fork to the upstream repository.
ms.openlocfilehash: 85b149e26cb65a428d7e9b66aea99d6b62430ae0
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188331'
---
## Синхронизация ветви вилки из пользовательского веб-интерфейса

{% ifversion syncing-fork-web-ui %}
1. На {% data variables.product.product_name %} перейдите на главную страницу разветвленного репозитория, который требуется синхронизировать с вышестоящим репозиторием.
2. Выберите раскрывающийся список **Синхронизировать вилку**.
    ![Выделенный раскрывающийся список "Синхронизировать вилку"](/assets/images/help/repository/sync-fork-dropdown.png)
3. Просмотрите сведения о фиксациях из вышестоящего репозитория, а затем щелкните **Обновить ветвь**.
    ![Модальное окно "Синхронизация вилки" с выделенной кнопкой "Обновить ветвь"](/assets/images/help/repository/update-branch-button.png) {% else %}
1. На {% data variables.product.product_name %} перейдите на главную страницу разветвленного репозитория, который требуется синхронизировать с вышестоящим репозиторием.
2. Выберите раскрывающийся список **Получить вышестоящий репозиторий**.
    ![Раскрывающийся список "Получить вышестоящий репозиторий"](/assets/images/help/repository/fetch-upstream-drop-down.png)
3. Просмотрите сведения о фиксациях из вышестоящего репозитория, а затем щелкните **Получить и объединить**.
    ![Кнопка "Получить и объединить"](/assets/images/help/repository/fetch-and-merge-button.png){% endif %}

Если изменения из вышестоящего репозитория вызывают конфликты, {% data variables.product.company_short %} предложит создать запрос на вытягивание для разрешения конфликтов.

## Синхронизация ветви вилки с помощью {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Дополнительные сведения о {% data variables.product.prodname_cli %} см. в статье ["Общие сведения о {% data variables.product.prodname_cli %}"](/github-cli/github-cli/about-github-cli).

Чтобы обновить удаленную вилку из родительского элемента, используйте подкоманду `gh repo sync -b BRANCHNAME` и укажите имена вилки и ветви в качестве аргументов.

```shell
$ gh repo sync owner/cli-fork -b BRANCH_NAME
```

Если изменения из вышестоящего репозитория вызывают конфликт, то {% data variables.product.prodname_cli %} не сможет синхронизироваться. Вы можете задать флаг `-force` для перезаписи целевой ветви.

## Синхронизация ветви вилки из командной строки

Прежде чем синхронизировать вилку с вышестоящим репозиторием, необходимо настроить удаленный репозиторий, указывающий на вышестоящий репозиторий в Git. Дополнительные сведения см. в разделе [Настройка удаленного репозитория для вилки](/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Измените текущий рабочий каталог на локальный проект.
3. Получение ветвей и их соответствующих фиксаций из вышестоящего репозитория. Фиксации в `BRANCHNAME` будут храниться в локальной ветви `upstream/BRANCHNAME`.

  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
  >  * [new branch]      main     -> upstream/main
  ```

4. Извлеките локальную ветвь вилки по умолчанию — в этом примере мы используем `main`.

  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```

5. Объедините изменения из вышестоящей ветви по умолчанию ( в данном случае `upstream/main`) с локальной ветвью по умолчанию. Это приведет к синхронизации ветви вилки по умолчанию с вышестоящим репозиторием без потери локальных изменений.

  ```shell
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ```
  
  Если локальная ветвь не имеет уникальных фиксаций, Git выполнит быстрое перемещение вперед. Дополнительные сведения см. в статье [Базовое ветвление и слияние](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) в документации по Git.
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ``` 
  Если локальная ветвь имела уникальные фиксации, возможно, потребуется устранить конфликты. Дополнительные сведения см. в разделе [Устранение конфликтов слияния](/github/collaborating-with-pull-requests/addressing-merge-conflicts).

{% tip %}

**Совет.** При синхронизации вилки обновляется только локальная копия репозитория. Чтобы обновить вилку на {% data variables.location.product_location %}, необходимо [отправить изменения](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}

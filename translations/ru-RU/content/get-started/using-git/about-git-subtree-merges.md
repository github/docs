---
title: Сведения о слияниях поддеревьев Git
redirect_from:
  - /articles/working-with-subtree-merge
  - /subtree-merge
  - /articles/about-git-subtree-merges
  - /github/using-git/about-git-subtree-merges
  - /github/getting-started-with-github/about-git-subtree-merges
  - /github/getting-started-with-github/using-git/about-git-subtree-merges
intro: 'Если вам нужно управлять несколькими проектами в одном репозитории, можно использовать *слияние поддеревьев* для обработки всех ссылок.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: eb50228a4e256b1511ff65d21ce855a2d765ad86
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008840'
---
## Сведения о слияниях поддеревьев

Как правило, слияние поддеревьев используется для хранения репозитория в репозитории. "Подрепозиторий" хранится в папке основного репозитория.

Лучший способ объяснить слияние поддеревьев — показать это на примере. Будет выполнено:

- Создание пустого репозитория с именем `test`, который представляет проект
- Слияние в него другого репозитория в виде поддерева с именем `Spoon-Knife`.
- Проект `test` будет использовать этот подпроект, как если бы он был частью того же репозитория.
- Получение обновлений из `Spoon-Knife` в проект `test`.

## Настройка пустого репозитория для слияния поддеревьев

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Создайте новый каталог и перейдите в него.
  ```shell
  $ mkdir test
  $ cd test
  ```
3. Инициализируйте новый репозиторий Git.
  ```shell
  $ git init
  > Initialized empty Git repository in /Users/octocat/tmp/test/.git/
  ```
4. Создайте и зафиксируйте новый файл.
  ```shell
  $ touch .gitignore
  $ git add .gitignore
  $ git commit -m "initial commit"
  > [main (root-commit) 3146c2a] initial commit
  >  0 files changed, 0 insertions(+), 0 deletions(-)
  >  create mode 100644 .gitignore
  ```

## Добавление нового репозитория как поддерева

1. Добавьте новый удаленный URL-адрес, указывающий на отдельный интересующий нас проект.
  ```shell
  $ git remote add -f spoon-knife https://github.com/octocat/Spoon-Knife.git
  > Updating spoon-knife
  > warning: no common commits
  > remote: Counting objects: 1732, done.
  > remote: Compressing objects: 100% (750/750), done.
  > remote: Total 1732 (delta 1086), reused 1558 (delta 967)
  > Receiving objects: 100% (1732/1732), 528.19 KiB | 621 KiB/s, done.
  > Resolving deltas: 100% (1086/1086), done.
  > From https://github.com/octocat/Spoon-Knife
  >  * [new branch]      main     -> Spoon-Knife/main
  ```
2. Выполните для проекта `Spoon-Knife` слияние в локальный проект Git. Это не изменяет файлы локально, но подготавливает Git к следующему шагу.

  Если вы используете Git 2.9 или более поздней версии:
  ```shell
  $ git merge -s ours --no-commit --allow-unrelated-histories spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```

  Если вы используете Git 2.8 или более ранней версии:
  ```shell
  $ git merge -s ours --no-commit spoon-knife/main
  > Automatic merge went well; stopped before committing as requested
  ```
3. Создайте каталог с именем **spoon-knife** и скопируйте в него журнал Git проекта `Spoon-Knife`.
  ```shell
  $ git read-tree --prefix=spoon-knife/ -u spoon-knife/main
  ```
4. Зафиксируйте изменения, чтобы обеспечить их безопасность.
  ```shell
  $ git commit -m "Subtree merged in spoon-knife"
  > [main fe0ca25] Subtree merged in spoon-knife
  ```

Хотя мы добавили только один подпроект, в репозиторий Git можно включить любое количество подпроектов.

{% tip %}

**Совет.** Если вы создадите новый клон репозитория в будущем, добавленные удаленные элементы не будут созданы. Вам придется снова добавить их с помощью [ команды `git remote add`](/github/getting-started-with-github/managing-remote-repositories).

{% endtip %}

## Синхронизация с обновлениями и изменениями

При добавлении подпроекта он не будет автоматически синхронизироваться с вышестоящими изменениями. Необходимо обновить подпроект с помощью следующей команды:

```shell
$ git pull -s subtree REMOTE-NAME BRANCH-NAME
```

В примере выше это будет выглядеть примерно так:

```shell
$ git pull -s subtree spoon-knife main
```

## Дополнительные материалы

- [Глава "Расширенное слияние" из книги _Pro Git_](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)
- [Практическое руководство по использованию стратегии слияния поддеревьев](https://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html)

---
title: Отправка фиксаций в удаленный репозиторий
intro: Используйте `git push` для отправки фиксаций в локальной ветви в удаленный репозиторий.
redirect_from:
  - /articles/pushing-to-a-remote
  - /articles/pushing-commits-to-a-remote-repository
  - /github/using-git/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/using-git/pushing-commits-to-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Push commits to a remote
ms.openlocfilehash: eddfa45f64e7caacfce0c59fe14002cbb4b5e318
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009214'
---
## О `git push`
Команда `git push` принимает два аргумента:

* имя удаленного репозитория, например, `origin`;
* Имя ветви, например `main`

Пример:

```shell
git push REMOTE-NAME BRANCH-NAME
```

Например, вы обычно выполняете команду `git push origin main` для отправки локальных изменений в веб-репозиторий.

## Переименование ветвей

Чтобы переименовать ветвь, используйте ту же команду `git push`, добавив к ней еще один аргумент: имя новой ветви. Пример:

```shell
git push REMOTE-NAME LOCAL-BRANCH-NAME:REMOTE-BRANCH-NAME
```

`LOCAL-BRANCH-NAME` отправляется в `REMOTE-NAME`, но при этом переименовывается в `REMOTE-BRANCH-NAME`.

## Обработка ошибок не быстрого перемещения вперед

Если локальная копия репозитория не синхронизирована с вышестоящим репозиторием, в который выполняется отправка, вы получите следующее сообщение: `non-fast-forward updates were rejected`.
В таком случае перед отправкой локальных изменений необходимо извлечь или "получить" изменения из вышестоящего репозитория.

Дополнительные сведения об этой ошибке см. в разделе [Обработка ошибок не быстрого перемещения вперед](/github/getting-started-with-github/dealing-with-non-fast-forward-errors).

## Отправка тегов

По умолчанию команда `git push` без дополнительных параметров отправляет все ветви, имена которых соответствуют именам удаленных ветвей.

Чтобы отправить отдельный тег, можно использовать ту же команду, что и для отправки ветви:

```shell
git push REMOTE-NAME TAG-NAME
```

Чтобы отправить все теги, можно ввести следующую команду:

```shell
git push REMOTE-NAME --tags
```

## Удаление удаленных ветви или тега

На первый взгляд синтаксис удаления ветви может показаться непонятным:

```shell
git push REMOTE-NAME:BRANCH-NAME
```

Обратите внимание на пробел, стоящий перед двоеточием. Эта команда напоминает ту, которая используется для переименования ветви. Тем не менее, она указывает Git _выполнить пустую отправку_ в ветвь `BRANCH-NAME` в репозитории `REMOTE-NAME`. Таким образом, команда `git push` удаляет ветвь в удаленном репозитории.

## Удаленные репозитории и вилки

Безусловно, вы уже знаете, что на GitHub [можно создавать "вилки" репозиториев](https://guides.github.com/overviews/forking/).

При клонировании собственного репозитория вы предоставляете ему удаленный URL-адрес, который Git использует для получения и отправки обновлений. Для совместной работы с исходным репозиторием следует добавить в локальный клон Git новый удаленный URL-адрес (обычно называется `upstream`):

```shell
git remote add upstream THEIR_REMOTE_URL
```

Теперь вы можете получать обновления и ветви из *их* вилки:

```shell
git fetch upstream
# Grab the upstream remote's branches
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/OCTOCAT/REPO
>  * [new branch]      main     -> upstream/main
```

После внесения локальных изменений вы можете отправить локальную ветвь в GitHub и [инициировать запрос на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Дополнительные сведения о работе с вилками см. в разделе [Синхронизация вилки](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).

## Дополнительные материалы

- [Глава "Удаленные репозитории" из книги "Pro Git"](https://git-scm.com/book/ch5-2.html)
- [Главная страница `git remote`](https://git-scm.com/docs/git-remote.html)
- [Памятка по Git](/articles/git-cheatsheet)
- [Рабочие процессы Git](/github/getting-started-with-github/git-workflows)
- [Справочник по Git](https://guides.github.com/introduction/git-handbook/)

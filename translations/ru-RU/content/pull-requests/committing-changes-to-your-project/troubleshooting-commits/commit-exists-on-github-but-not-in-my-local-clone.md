---
title: 'Фиксация существует в GitHub, но не в локальном клоне'
intro: 'Иногда фиксацию можно просматривать в {% data variables.product.product_name %}, но она не будет существовать в локальном клоне репозитория.'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/troubleshooting-commits/commit-exists-on-github-but-not-in-my-local-clone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit missing in local clone
ms.openlocfilehash: 09b1fc05f21eedc4cefb60c1d876ba000758290d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094508'
---
При просмотре определенной фиксации в командной строке с помощью `git show` может возникнуть неустранимая ошибка.

Например, вы можете получить ошибку `bad object` локально:

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

Однако при просмотре фиксации на {% данных variables.location.product_location %}вы сможете увидеть ее без каких-либо проблем:

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

Существует несколько возможных объяснений:

* Локальный репозиторий устарел.
* Ветвь, содержащая фиксацию, была удалена, поэтому ссылка на фиксацию больше не существует.
* Кто-то выполнил отправку фиксации с параметром --force.

## Локальный репозиторий устарел.

В локальном репозитории еще нет фиксации. Чтобы получить сведения из удаленного репозитория в локальный клон, используйте `git fetch`:

```shell
$ git fetch REMOTE
```

Это позволит безопасно скопировать сведения из удаленного репозитория в локальный клон без внесения изменений в извлеченные файлы. Вы можете использовать `git fetch upstream` для получения сведений из репозитория, который вы разветвили, или `git fetch origin`, чтобы получить сведения из репозитория, который вы только клонировали.

{% tip %}

**Совет.** Дополнительные сведения см. в статье об [управлении удаленными репозиториями и получением данных](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) в книге [Pro Git](https://git-scm.com/book).

{% endtip %}

## Ветвь, содержащая фиксацию, была удалена

Если участник совместной работы в репозитории удалил ветвь, содержащую фиксацию, или отправил фиксацию в ветвь с параметром --force, недостающая фиксация может быть потеряна (т. е. к ней невозможно будет перейти по ссылке), поэтому вы не сможете получить ее в локальный клон.

К счастью, если у участника совместной работы есть локальный клон репозитория с отсутствующей фиксацией, он может отправить ее обратно в {% data variables.product.product_name %}.  Необходимо убедиться, что на фиксацию ссылается локальная ветвь, а затем отправить ее как новую ветвь в {% data variables.product.product_name %}.

Предположим, что у пользователя по-прежнему есть локальная ветвь (например, `B`), которая содержит фиксацию.  Она может отслеживать ветвь, которая была удалена или получила фиксацию с параметром --force, и эти изменения пока не поступили в локальную ветвь.  Чтобы сохранить фиксацию, они могут отправить локальную ветвь в новую ветвь (например, `recover-B`) на {% data variables.product.product_name %}.  В этом примере предположим, что у них есть удаленный репозиторий `upstream`, через который у них есть доступ на отправку в `github.com/$account/$repository`.

Другой пользователь выполняет:

```shell
$ git branch recover-B B
# Create a new local branch referencing the commit
$ git push upstream B:recover-B
# Push local B to new upstream branch, creating new reference to commit
```

Теперь *вы* можете выполнить:

```shell
$ git fetch upstream recover-B
# Fetch commit into your local repository.
```

## Избегание отправки с параметром --force

Избегайте отправки в репозиторий с параметром --force, если только в этом нет крайней необходимости. Особенно если у нескольких пользователей есть разрешение на отправку в репозиторий. Если кто-то выполняет отправку в репозиторий с параметром --force, эта операция может перезаписать фиксации, на которых другие пользователи основывают свою работу. Отправка с параметром --force меняет журнал репозитория и может привести к повреждению запросов на вытягивание.

## Дополнительные материалы

- ["Работа с удаленными репозиториями" из книги _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- ["Восстановление данных" из книги _Pro Git_](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)

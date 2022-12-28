---
title: О перемещении изменений между ветвями в Git
redirect_from:
  - /rebase
  - /articles/interactive-rebase
  - /articles/about-git-rebase
  - /github/using-git/about-git-rebase
  - /github/getting-started-with-github/about-git-rebase
  - /github/getting-started-with-github/using-git/about-git-rebase
intro: 'Команда `git rebase` позволяет легко изменить ряд фиксаций, изменив журнал репозитория. Вы можете переупорядочивать, изменять фиксации или выполнять их сжатие.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 83518644864623c452f7fa1e8bd4cbd42f80a7cf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094372'
---
Как правило, команда `git rebase` используется в следующих целях:

* изменение предыдущих сообщений о фиксациях;
* объединение нескольких фиксаций в одну;
* удаление или отмена фиксаций, которые больше не нужны.

{% warning %}

**Предупреждение**. Так как изменение журнала фиксаций может затруднить работу всех остальных пользователей репозитория, перемещать фиксации из одной ветви в другую после отправки в репозиторий не рекомендуется. Сведения о безопасном перебазе данных на {% variables.location.product_location %}см. в разделе "[Сведения о слиянии запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

{% endwarning %}

## Перемещение фиксаций между ветвями

Чтобы переместить все фиксации между другой ветвью и текущей, в оболочке (командной строке в Windows или терминале в MacOS и Linux) можно ввести следующую команду:

```shell
$ git rebase --interactive OTHER-BRANCH-NAME
```

## Перемещение фиксаций на момент времени

Чтобы переместить последние несколько фиксаций в текущей ветви, в оболочке можно ввести следующую команду:

```shell
$ git rebase --interactive HEAD~7
```

## Команды, доступные при перемещении изменений между ветвями

При перемещении изменений между ветвями доступны шесть команд.

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> просто означает, что фиксация включается. Изменение порядка команд <code>pick</code> изменяет порядок фиксаций при перемещении изменений из одной ветви в другую. Если вы решили не включать фиксацию, удалите всю строку. </dd>

<dt><code>reword</code></dt>
<dd>Команда <code>reword</code> аналогична команде <code>pick</code>, но после ее использования процесс перемещения изменений из одной ветви в другую приостанавливается, что дает возможность изменить сообщение о фиксации. Любые изменения, внесенные фиксацией, не затрагиваются. </dd>

<dt><code>edit</code></dt>
<dd>Если вы решили применить к фиксации команду <code>edit</code>, то получите возможность добавить фиксацию или изменить ее полностью. Вы также можете создать дополнительные фиксации, прежде чем продолжать перемещение изменений из одной ветви в другую. Это позволяет разделить большую фиксацию на меньшие или удалить ошибочные изменения, внесенные в фиксации. </dd>

<dt><code>squash</code></dt>
<dd>Эта команда позволяет объединить две или более фиксаций в одну. Фиксация вносится в вышестоящую. GIT дает возможность написать новое сообщение о фиксации с описанием обоих изменений.</dd>

<dt><code>fixup</code></dt>
<dd>Эта команда похожа на <code>squash</code>, но сообщение подлежащей слиянию фиксации удаляется. Фиксация просто объединяется с вышестоящей фиксацией, сообщение которой используется для описания обоих изменений.</dd>

<dt><code>exec</code></dt>
<dd>Позволяет выполнять произвольные команды оболочки применительно к фиксации.</dd>
</dl>

## Пример использования `git rebase`

Независимо от используемой команды GIT запустит [текстовый редактор по умолчанию](/github/getting-started-with-github/associating-text-editors-with-git) и откроет файл с подробными сведениями о фиксациях в выбранном диапазоне. Этот файл выглядит примерно так:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Rebase 41a72e6..7b36971 onto 41a72e6
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

Последовательно разобрав эти сведения, можно прийти к следующим выводам:

- Перечислены семь фиксаций, то есть между отправной точкой и текущим состоянием ветви произошло семь изменений.
- Фиксации, выбранные для перемещения, отсортированы в порядке от самых старых изменений (вверху) до самых новых (внизу).
- Каждая строка содержит команду (по умолчанию `pick`), SHA фиксации и сообщение о фиксации. Процедура `git rebase` сосредоточена на операциях с этими тремя столбцами. Внесенные изменения *перемещаются* в ваш репозиторий.
- После завершения фиксаций GIT сообщает диапазон фиксаций, с которыми ведется работа (`41a72e6..7b36971`).
- Наконец, GIT оказывает некоторую помощь, сообщая команды, которые доступны при перемещении фиксаций между ветвями.

## Дополнительные материалы

- [Перемещение изменений из одной ветви в другую в GIT](/articles/using-git-rebase)
- [Глава "Ветвление Git" из книги _Pro Git_](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [Глава "Интерактивное перемещение изменений из одной ветви в другую" из книги _Pro Git_](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- [Уплотнение фиксаций путем перемещения изменений из одной ветви в другую](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)
- Раздел [Синхронизация ветви](/desktop/contributing-to-projects/syncing-your-branch) в документации по {% data variables.product.prodname_desktop %}

---
title: Перемещений изменений из одной ветви в другую в GIT в командной строке
redirect_from:
  - /articles/using-git-rebase
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git/using-git-rebase-on-the-command-line
intro: Вот краткое руководство по использованию `git rebase` в командной строке.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git rebase
ms.openlocfilehash: e0d2d2d10da187d6cc38a72a44e8235ec1f6f73f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145134654'
---
## Перемещение изменений из одной ветви в другую в GIT

В этом примере будут рассмотрены все доступные команды `git rebase`, кроме `exec`.

Мы начнем перемещение изменений из одной ветви в другую с ввода `git rebase --interactive HEAD~7` в терминале. В выбранном текстовом редакторе отобразятся следующие строки:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B
```

В этом примере будут выполнены следующие действия:

* сжатие пятой фиксации (`fa39187`) с фиксацией `"Patch A"` (`1fc6c95`) с помощью команды `squash`;
* перемещение последней фиксации (`7b36971`) вверх в положение перед фиксацией `"Patch B"` (`6b2481b`) и сохранение ее как `pick`;
* слияние фиксации `"A fix for Patch B"` (`c619268`) с фиксацией `"Patch B"` (`6b2481b`) и игнорирование сообщения о фиксации с помощью команды `fixup`;
* разделение третьей фиксации (`dd1475d`) на две фиксации меньшего размера с помощью команды `edit`;
* исправление сообщения о фиксации с орфографической ошибкой (`4ca2acc`) с помощью команды `reword`.

Наконец-то. Похоже, предстоит потрудиться, но, действуя последовательно, мы сможем легко внести все эти изменения.

Для начала нам потребуется изменить команды в файле, чтобы они выглядели следующим образом:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Мы изменили команду `pick` в каждой строке на интересующую нас команду.

Теперь сохраните и закройте редактор Будет запущено интерактивной перемещение изменения из одной ветви в другую.

GIT пропускает первую команду перемещения изменений, `pick 1fc6c95`, так как она не нужна, и переходит к следующей команде: `squash fa39187`. Так как для этой операции требуются входные данные, GIT снова открывает текстовый редактор. Открываемый файл выглядит примерно так:

```
# This is a combination of two commits.
# The first commit's message is:

Patch A

# This is the 2nd commit message:

something to add to patch A

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   a
#
```

Посредством этого файла GIT сообщает, что произойдет в результате данной операции `squash`. В нем указывается первое сообщение о фиксации (`"Patch A"`) и второе сообщение (`"something to add to patch A"`). Если эти сообщения о фиксациях вас устраивают, вы можете сохранить файл и закрыть редактор. В противном случае можно изменить сообщение фиксации, просто изменив текст.

После закрытия редактора перемещение изменений из одной ветви в другую продолжается:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

GIT обрабатывает две команды `pick` (для `pick 7b36971` и `pick 6b2481b`). *Также* обрабатывается команда `fixup` (`fixup c619268`), так как она не требует взаимодействия. Команда `fixup` объединяет изменения из `c619268` с предыдущей фиксацией (`6b2481b`). Оба изменения будут иметь одно и то же сообщение о фиксации: `"Patch B"`.

GIT достигает операции `edit dd1475d`, останавливается и выводит следующее сообщение в терминале:

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

На этом этапе можно внести дополнительные изменения в любой из файлов проекта. Для каждого вносимого изменения необходимо выполнить новую фиксацию, и это можно сделать с помощью команды `git commit --amend`. Завершив внесение всех изменений, можно выполнить `git rebase --continue`.

После этого GIT переходит к команде `reword 4ca2acc`.  Снова открывается текстовый редактор, и выводятся следующие сведения:

```
i cant' typ goods

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD^1 <file>..." to unstage)
#
# modified:   a
#
```

Как и ранее, GIT отображает сообщение о фиксации для редактирования. Вы можете изменить текст (`"i cant' typ goods"`), сохранить файл и закрыть редактор. GIT завершит перемещение изменений из одной ветви в другую, и вы вернетесь в терминал.

## Отправка перемещенного между ветвями кода на GitHub

Так как вы изменили журнал GIT, стандартная команда `git push origin` работать **не будет**. Вам потребуется изменить команду путем принудительной отправки последних изменений:

```shell
# Don't override changes
$ git push origin main --force-with-lease

# Override changes
$ git push origin main --force
```

{% warning %}

Принудительная отправка имеет серьезные последствия, так как она приводит к изменению исторической последовательности фиксаций для ветви. Используйте ее с осторожностью, особенно если к репозиторию имеет доступ множество пользователей.

{% endwarning %}

## Дополнительные материалы

* [Разрешение конфликтов слияния после перемещения изменений из одной ветви в другую в GIT](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase)

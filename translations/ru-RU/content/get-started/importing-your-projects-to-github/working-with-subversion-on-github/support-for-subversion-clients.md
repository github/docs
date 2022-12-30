---
title: Поддержка клиентов Subversion
intro: 'Доступ к репозиториям GitHub осуществляется с клиентов Git и Subversion (SVN). В этой статье рассматривается использование клиента Subversion на сайте GitHub и некоторые распространенные проблемы, с которыми вы можете столкнуться.'
redirect_from:
  - /articles/support-for-subversion-clients
  - /github/importing-your-projects-to-github/support-for-subversion-clients
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/support-for-subversion-clients
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Support for Subversion clients
ms.openlocfilehash: af8a43c8fb57b324b315977acd1912e0eb34f094
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009916'
---
GitHub поддерживает клиенты Subversion через протокол HTTPS. Для передачи команды svn в GitHub используется мост Subversion.

## Поддерживаемые функции Subversion в GitHub

### Извлечение

Прежде всего необходимо извлечь код из Subversion.  Так как в клонах GitHub рабочий каталог (в котором редактируются файлы) отделен от данных репозитория, в рабочем каталоге в каждый момент времени находится только одна ветвь.

Извлечение кода в Subversion выполняется по-другому: оно смешивает данные репозитория с рабочими каталогами, поэтому для каждой ветви и тега, которые извлекаются, создается рабочий каталог. Для репозиториев с большим числом ветвей и тегов на извлечение всего содержимого может потребоваться слишком много времени, поэтому следует начать с частичного извлечения.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %}

3. Создайте пустой каталог извлечения для репозитория:
  ```shell
  $ svn co --depth empty https://github.com/USER/REPO
  > Checked out revision 1.
  $ cd REPO
  ```

4. Получите ветвь `trunk`. Мост Subversion сопоставляет магистраль с ветвью HEAD Git.
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. Получите пустой каталог извлечения для каталога `branches`.  В этом каталоге будут находиться все ветви кроме `HEAD`, и в нем также будут создаваться ветви функций.
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

### Создание ветвей

Вы также можете создавать ветви с помощью моста Subversion для GitHub.

В клиенте svn сделайте ветвь "master" текущей, обновив `trunk`:
```shell
$ svn up trunk
> At revision 1.
```

Затем можно создать новую ветвь с помощью `svn copy`:
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

Вы можете проверить существование новой ветви в раскрывающемся списке ветвей репозитория:

![branch-snapshot](/assets/images/help/branch/svnflow-branch-snapshot.png)

Наличие новой ветви также можно подтвердить с помощью командной строки:

```shell
$ git fetch
> From https://github.com/USER/REPO/
> * [new branch]    more_awesome -> origin/more_awesome
```

### Отправка фиксаций в Subversion

После того, как вы добавили некоторые функции и исправили несколько ошибок, необходимо зафиксировать эти изменения в GitHub. Сделать это можно точно так же, как в привычной системе управления версиями Subversion. Измените файлы и используйте команду `svn commit` для записи изменений:

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitting file data .
> Committed revision 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitting file data .
> Committed revision 4.
```

### Переключение между ветвями

Чтобы переключиться между ветвями, для начала следует извлечь `trunk`:

```shell
$ svn co --depth empty https://github.com/USER/REPO/trunk
```

Затем можно переключиться на другую ветвь:

```shell
$ svn switch https://github.com/USER/REPO/branches/more_awesome
```

## Просмотр SHA фиксации Git для фиксации Subversion

Сервер Subversion в GitHub предоставляет SHA фиксации Git для каждой фиксации Subversion.

Чтобы просмотреть SHA фиксации Git, необходимо запросить удаленное свойство `git-commit`, не находящееся в системе управления версиями.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/USER/REPO
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

С помощью SHA фиксации можно, например, найти соответствующую фиксацию Git в GitHub.

## Дополнительные материалы

* [Свойства Subversion, поддерживаемые GitHub](/articles/subversion-properties-supported-by-github)

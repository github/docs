---
title: Пропуск файлов
redirect_from:
  - /git-ignore
  - /ignore-files
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
  - /github/getting-started-with-github/getting-started-with-git/ignoring-files
intro: 'Вы можете настроить Git для игнорирования файлов, которые вы не хотите возвращать в {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5029723554732356f5d5ef83e4b598bbb309cb38
ms.sourcegitcommit: c45cc7325ed19e69ddd7506e46fcafd0b5182b3f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/12/2022
ms.locfileid: '148019529'
---
## Настройка игнорируемых файлов для одного репозитория

Вы можете создать файл *.gitignore* в корневом каталоге репозитория, чтобы сообщить Git, какие файлы и каталоги следует игнорировать при фиксации.
Чтобы поделиться правилами игнорирования с другими пользователями, которые клонируют репозиторий, зафиксируйте файл *.gitignore* в репозитории.

GitHub поддерживает официальный список рекомендуемых файлов *.gitignore* для многих популярных операционных систем, сред и языков в общедоступном репозитории `github/gitignore`. Вы также можете использовать gitignore.io, чтобы создать *файл .gitignore* для вашего сочетания операционной системы, языка программирования или интегрированной среды разработки. Дополнительные сведения см. в разделе [github/gitignore](https://github.com/github/gitignore) и на сайте [gitignore.io](https://www.gitignore.io/).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Перейдите к расположению репозитория Git.
3. Создайте *файл .gitignore* для репозитория.
   ```shell
   $ touch .gitignore
  ```

   Если команда будет выполнена успешно, она не выведет никаких данных.
   
Пример файла *.gitignore* см. в разделе [Некоторые распространенные конфигурации .gitignore](https://gist.github.com/octocat/9257657) в репозитории Octocat.

Если вы хотите игнорировать файл, который уже был отправлен в репозиторий, необходимо отменить отслеживание файла перед тем, как добавлять правило для игнорирования файла. В терминале распакуйте файл.

```shell
$ git rm --cached FILENAME
```

## Настройка игнорируемых файлов для всех репозиториев на компьютере

Вы также можете создать глобальный *файл .gitignore*, чтобы определить список правил для игнорирования файлов в каждом репозитории Git на компьютере. Например, можно создать файл *~/.gitignore_global* и добавить в него некоторые правила.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Настройте Git, чтобы использовать файл исключения *~/.gitignore_global* для всех репозиториев Git.
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

## Исключение локальных файлов без создания файла *.gitignore*

Если вы не хотите создавать файл *.gitignore* для совместного использования с другими пользователями, можно создать правила, которые не фиксируются в репозитории. Этот метод можно использовать для локально создаваемых файлов, которые не должны создавать другие пользователи, например, для файлов, создаваемых редактором.

Откройте файл *.git/info/exclude*, находящийся в корневом каталоге репозитория Git, в предпочитаемом текстовом редакторе. Любое добавляемое здесь правило не будет синхронизироваться, и будут игнорироваться только файлы для локального репозитория.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Перейдите к расположению репозитория Git.
3. В предпочитаемом текстовом редакторе откройте файл *.git/info/exclude*.

## Дополнительные материалы

* [Пропускание файлов](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) в документации по Git
* [.gitignore](https://git-scm.com/docs/gitignore) в документации по Git
* [Коллекция полезных шаблонов *.gitignore*](https://github.com/github/gitignore) в репозитории github/gitignore
* Сайт [gitignore.io](https://www.gitignore.io/)

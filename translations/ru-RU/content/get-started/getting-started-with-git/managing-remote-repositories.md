---
title: Управление удаленными репозиториями
intro: 'Узнайте, как работать с локальными репозиториями на компьютере и удаленными репозиториями, размещенными в {% data variables.product.product_name %}.'
redirect_from:
  - /categories/18/articles
  - /remotes
  - /categories/managing-remotes
  - /articles/managing-remote-repositories
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
  - /articles/removing-a-remote
  - /github/using-git/removing-a-remote
  - /github/using-git/managing-remote-repositories
  - /github/getting-started-with-github/managing-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/managing-remote-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manage remote repositories
ms.openlocfilehash: d89a9c008128154e7de045be0de54db04168cb33
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185054'
---
## Добавление удаленного репозитория

Чтобы добавить новый удаленный репозиторий, выполните команду `git remote add` в терминале в каталоге, в котором хранится репозиторий.

Команда `git remote add` принимает два аргумента:
* имя удаленного репозитория, например, `origin`;
* URL-адрес удаленного репозитория, например, `https://{% data variables.command_line.backticks %}/user/repo.git`.

Пример:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/USER/REPO.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (push)
```

Дополнительные сведения о том, какой URL-адрес следует использовать, см. в разделе [Сведения об удаленных репозиториях](/github/getting-started-with-github/about-remote-repositories).

### Устранение неполадок: удаленный источник уже существует

Эта ошибка означает, что вы попытались добавить удаленный репозиторий с именем, которое уже существует в локальном репозитории.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

Возможные пути устранения проблемы указаны ниже.
* Используйте другое имя для нового удаленного репозитория.
* Переименуйте существующий удаленный репозиторий перед добавлением нового удаленного репозитория. Дополнительные сведения см. в разделе [Переименование удаленного репозитория](#renaming-a-remote-repository) ниже.
* Удалите существующий удаленный репозиторий перед добавлением нового удаленного репозитория. Дополнительные сведения см. в разделе [Удаление удаленного репозитория](#removing-a-remote-repository) ниже.

## Изменение URL-адреса удаленного репозитория

Команда `git remote set-url` изменяет существующий URL-адрес удаленного репозитория.

{% tip %}

**Совет:** Сведения о различиях между URL-адресами HTTPS и SSH см. в разделе [Сведения об удаленных репозиториях](/github/getting-started-with-github/about-remote-repositories).

{% endtip %}

Команда `git remote set-url` принимает два аргумента:

* Имя существующего удаленного репозитория. Например, к распространенным вариантам относятся `origin` и `upstream`.
* Новый URL-адрес удаленного репозитория. Пример:
  * Если вы переходите на протокол HTTPS, URL-адрес может выглядеть так:
```shell
https://{% data variables.command_line.backticks %}/USERNAME/REPOSITORY.git
```
  * Если вы переходите на SSH, URL-адрес может выглядеть так:
```shell
git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
```

### Переключение удаленных URL-адресов с SSH на HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Измените текущий рабочий каталог на локальный проект.
3. Выведите список существующих удаленных объектов, чтобы получить имя удаленного репозитория, которое требуется изменить.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (push)
  ```
4. Переключите URL-адрес удаленного репозитория с SSH на HTTPS, выполнив команду `git remote set-url`.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  ```
5. Убедитесь, что URL-адрес удаленного репозитория изменен.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```

При следующем выполнении команд `git fetch`, `git pull` и `git push` для удаленного репозитория вам будет предложено указать имя пользователя и пароль GitHub. {% data reusables.user-settings.password-authentication-deprecation %}

Вы можете [использовать вспомогатель учетных данных](/github/getting-started-with-github/caching-your-github-credentials-in-git) , чтобы Git запоминал ваше имя пользователя GitHub и {% data variables.product.pat_generic %} при каждом разговоре с GitHub.

### Переключение удаленных URL-адресов с HTTPS на SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Измените текущий рабочий каталог на локальный проект.
3. Выведите список существующих удаленных объектов, чтобы получить имя удаленного репозитория, которое требуется изменить.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```
4. Переключите URL-адрес удаленного репозитория с HTTPS на SSH, выполнив команду `git remote set-url`.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
  ```
5. Убедитесь, что URL-адрес удаленного репозитория изменен.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (push)
  ```

### Устранение неполадок: удаленный репозиторий "[имя]" отсутствует

Эта ошибка означает, что удаленного репозитория, который вы пытались изменить, не существует:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Убедитесь, что вы правильно указали имя удаленного репозитория.

## Переименование удаленного репозитория

Используйте команду `git remote rename` для переименования существующего удаленного репозитория.

Команда `git remote rename` принимает два аргумента:
* имя существующего удаленного репозитория, например, `origin`;
* новое имя удаленного репозитория, например, `destination`.

## Пример

В этих примерах предполагается, что [клонирование выполняется с помощью HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls) (это рекомендуемый вариант).

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Устранение неполадок: не удалось переименовать раздел конфигурации "remote.[старое имя]" в "remote.[новое имя]"

Эта ошибка означает, что удаленного репозитория с указанным старым именем не существует.

Вы можете проверить существующие удаленные репозитории, выполнив команду `git remote -v`:

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Устранение неполадок: удаленный репозиторий [новое имя] уже существует

Эта ошибка означает, что удаленный репозиторий с именем, которое вы хотите использовать, уже существует. Чтобы решить эту проблему, используйте другое имя удаленного репозитория или переименуйте имеющийся удаленный репозиторий.

## Удаление удаленного репозитория 

Чтобы удалить удаленный URL-адрес из репозитория, используйте команду `git remote rm`.

Команда `git remote rm` принимает один аргумент:
* имя удаленного репозитория, например, `destination`.

При удалении удаленного URL-адреса из репозитория выполняется только отмена привязки для локальных и удаленных репозиториев. Сам удаленный репозиторий не удаляется.

## Пример

В этих примерах предполагается, что [клонирование выполняется с помощью HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls) (это рекомендуемый вариант).

```shell
$ git remote -v
# View current remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

{% warning %}

**Примечание.** Команда `git remote rm` не удаляет удаленный репозиторий с сервера. Она просто удаляет удаленный репозиторий и его ссылки из локального репозитория.

{% endwarning %}

### Устранение неполадок. Не удалось удалить раздел конфигурации "remote.[имя]"

Эта ошибка означает, что удаленного репозитория, который вы пытались удалить, не существует:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Убедитесь, что вы правильно указали имя удаленного репозитория.

## Дополнительные материалы

- ["Работа с удаленными репозиториями" из книги _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)

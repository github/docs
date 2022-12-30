---
title: Получение изменений из удаленного репозитория
intro: Для доступа к удаленным репозиториям можно использовать распространенные команды Git.
redirect_from:
  - /articles/fetching-a-remote
  - /articles/getting-changes-from-a-remote-repository
  - /github/using-git/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/using-git/getting-changes-from-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Get changes from a remote
ms.openlocfilehash: a2206fa40d70f17d225bd0cf00d8ecced9fd1c09
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009860'
---
## Параметры для получения изменений

Эти команды особенно полезны при взаимодействии с [удаленным репозиторием](/github/getting-started-with-github/about-remote-repositories). Команды `clone` и `fetch` позволяют скачать удаленный код с удаленного URL-адреса репозитория на локальный компьютер, `merge` используется для слияния работы, проделанной вами и другими пользователями, а `pull` представляет собой комбинацию команд `fetch` и `merge`.

## Клонирование репозитория

Чтобы получить полную копию репозитория другого пользователя, используйте команду `git clone` в следующем виде:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
# Clones a repository to your computer
```

При клонировании репозитория можно выбрать один из [нескольких различных URL-адресов](/github/getting-started-with-github/about-remote-repositories). После входа в {% data variables.product.prodname_dotcom %} эти URL-адеса будут указаны под сведениями о репозитории:

![Список удаленных URL-адресов](/assets/images/help/repository/remotes-url.png)

При выполнении команды `git clone` происходит следующее:
- Создается новая папка с именем `repo`.
- Она инициализируется как репозиторий Git.
- Создается удаленный узел с именем `origin`, ведущий на URL-адрес, из которого вы клонировали репозиторий.
- С этого адреса скачиваются все файлы и фиксации репозитория.
- Извлекается ветвь по умолчанию.

Для каждой ветви `foo` в удаленном репозитории создается соответствующая ветвь удаленного отслеживания `refs/remotes/origin/foo` в локальном репозитории. Обычно имена ветвей удаленного отслеживания можно сокращать до `origin/foo`.

## Получение изменений из удаленного репозитория

Используйте команду `git fetch` для получения новых работ, выполненных другими людьми. Команда получения данных из репозитория захватывает все новые ветви и теги удаленного отслеживания, *не* сливая эти изменения с вашими собственными ветвями.

Если у вас уже есть локальный репозиторий с удаленным URL-адресом, настроенный для желаемого проекта, вы можете получать все новые сведения, выполняя в терминале команду `git fetch *remotename*`:

```shell
$ git fetch REMOTE-NAME
# Fetches updates made to a remote repository
```

Если нет, вы всегда можете добавить новый удаленный репозиторий, а затем получить из него данные. Дополнительные сведения см. в разделе [Управление удаленными репозиториями](/github/getting-started-with-github/managing-remote-repositories).

## Слияние изменений с локальной ветвью

Слияние объединяет локальные изменения с изменениями, внесенными другими людьми.

Обычно сливаются ветвь удаленного отслеживания (т. е. ветвь, полученная из удаленного репозитория) и локальная ветвь:

```shell
$ git merge REMOTE-NAME/BRANCH-NAME
# Merges updates made online with your local work
```

## Вытягивание изменений из удаленного репозитория

`git pull` — это удобное сочетание клавиш для выполнения `git fetch` и `git merge ` в одной команде:

```shell
$ git pull REMOTE-NAME BRANCH-NAME
# Grabs online updates and merges them with your local work
```

Поскольку `pull` приводит к слиянию полученных изменений, перед выполнением команды `pull` нужно зафиксировать локальную работу Если возникнет [конфликт слияния](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line), который вы не сможете разрешить, или вы решите выйти из слияния, используйте команду `git merge --abort`, чтобы вернуть ветвь туда, где она находилась до вытягивания.

## Дополнительные материалы

- ["Работа с удаленными репозиториями" из книги _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes){% ifversion fpt or ghec %}
- [Устранение проблем с подключением](/articles/troubleshooting-connectivity-problems){% endif %}

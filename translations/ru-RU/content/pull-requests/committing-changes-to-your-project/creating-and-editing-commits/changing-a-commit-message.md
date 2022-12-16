---
title: Изменение сообщения о фиксации
redirect_from:
  - /articles/can-i-delete-a-commit-message
  - /articles/changing-a-commit-message
  - /github/committing-changes-to-your-project/changing-a-commit-message
  - /github/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message
intro: 'Если сообщение о фиксации содержит нечеткую, неправильную или конфиденциальную информацию, вы можете изменить ее локально и отправить новую фиксацию с новым сообщением в {% data variables.product.product_name %}. Вы также можете изменить сообщение о фиксации, чтобы добавить недостающие сведения.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 70cd5386c6594081950364efe09969f97a153d43
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094708'
---
## Изменение последнего сообщения о фиксации

Последнее сообщение о фиксации можно изменить с помощью команды `git commit --amend`.

В GIT текст сообщения о фиксации является частью фиксации. Изменение сообщения о фиксации приведет к изменению идентификатора фиксации, т. е. контрольной суммы SHA1, служащей именем фиксации. Фактически создается новая фиксация вместо старой.

## Фиксация не отправлена на сайт

Если фиксация существует только в локальном репозитории и не была отправлена в {% данных variables.location.product_location %}, можно изменить сообщение фиксации `git commit --amend` с помощью команды.

1. В командной строке перейдите к репозиторию, содержащему фиксацию, которую нужно изменить.
2. Введите `git commit --amend` и нажмите клавишу **ВВОД**.
3. В текстовом редакторе измените сообщение о фиксации и сохраните фиксацию.
    - Вы можете добавить соавтора, добавив к фиксации заключительную часть. Дополнительные сведения см. в разделе [Создание фиксации с несколькими авторами](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).
{% ifversion fpt or ghec %}
    - Вы можете создавать фиксации от имени организации, добавляя к фиксации заключительную часть. Дополнительные сведения см. в разделе [Создание фиксации от имени организации](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization). {% endif %}

Новая фиксация и сообщение появятся в {% данных variables.location.product_location %} при следующей отправке.

{% tip %}

Вы можете изменить текстовый редактор по умолчанию для GIT с помощью параметра `core.editor`. Дополнительные сведения см. в разделе [Базовая настройка клиента](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration) в руководстве по GIT.

{% endtip %}

## Изменение более старых или нескольких сообщений о фиксациях

Если вы уже перенаправили фиксацию в {% данных variables.location.product_location %}, вам придется принудительно отправить фиксацию с измененным сообщением.

{% warning %}

Мы настоятельно не рекомендуем выполнять принудительную отправку, так как это изменяет журнал репозитория. При принудительной отправке пользователям, которые уже клонировали репозиторий, придется вручную исправить свой локальный журнал. Дополнительные сведения см. в разделе [Восстановление после вышестоящего перемещения изменения из одной ветви в другую](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase) в руководстве по GIT.

{% endwarning %}

**Изменение сообщения для последней отправленной фиксации**

1. Выполните [описанные выше действия](/articles/changing-a-commit-message#commit-has-not-been-pushed-online), чтобы изменить сообщение о фиксации.
2. Используйте команду `push --force-with-lease`, чтобы принудительно отправить фиксацию вместо старой.
  ```shell
  $ git push --force-with-lease origin EXAMPLE-BRANCH
  ```

**Изменение сообщения для старой фиксации или нескольких фиксаций**

Если необходимо изменить сообщение для нескольких фиксаций или более старой фиксации, можно использовать интерактивное перемещение изменения из одной ветви в другую, а затем выполнить принудительную отправку, чтобы изменить журнал фиксаций.

1. В командной строке перейдите к репозиторию, содержащему фиксацию, которую нужно изменить.
2. Используйте команду `git rebase -i HEAD~n`, чтобы отобразить список `n` последних фиксаций в текстовом редакторе по умолчанию.

    ```shell
    # Displays a list of the last 3 commits on the current branch
    $ git rebase -i HEAD~3
    ```
    Список будет выглядеть примерно так:

    ```shell
    pick e499d89 Delete CNAME
    pick 0c39034 Better README
    pick f7fde4a Change the commit message but push the same commit.

    # Rebase 9fdb3bd..f7fde4a onto 9fdb3bd
    #
    # Commands:
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out
    ```
3. Замените `pick` на `reword` перед каждым сообщением о фиксации, которое нужно изменить.
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. Сохраните и закройте файл со списком фиксаций.
5. В каждом полученном файле фиксации введите новое сообщение о фиксации, сохраните файл и закройте его.
6. Когда вы будете готовы отправить изменения в GitHub, используйте команду push --force, чтобы принудительно отправить старую фиксацию.
```shell
$ git push --force origin EXAMPLE-BRANCH
```

Дополнительные сведения об интерактивном перемещении изменения из одной ветви в другую см. в разделе [Интерактивный режим](https://git-scm.com/docs/git-rebase#_interactive_mode) в руководстве по GIT.

{% tip %}

Как и ранее, изменение сообщения о фиксации приведет к созданию новой фиксации с новым идентификатором. Однако в данном случае каждая фиксация после измененной также получит новый идентификатор, так как она содержит идентификатор родительской фиксации.

{% endtip %}

{% warning %}

Если в сообщение о фиксации включены конфиденциальные сведения, при принудительной отправке измененной фиксации исходная фиксация может остаться на {% data variables.product.product_name %}. Старая фиксация не будет включаться в последующие клоны; однако она по-прежнему может быть кэширована на {% data variables.product.product_name %} и доступна по идентификатору фиксации. Чтобы удалить старую фиксацию из удаленного репозитория, необходимо обратиться в {% data variables.contact.contact_support %} и сообщить ее идентификатор.

{% endwarning %}

## Дополнительные материалы

* [Подписывание фиксаций](/articles/signing-commits)

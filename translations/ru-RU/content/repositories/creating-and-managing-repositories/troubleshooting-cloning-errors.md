---
title: Устранение ошибок клонирования
intro: 'Если у вас возникли проблемы с клонированием репозитория, рассмотрите эти распространенные ошибки.'
redirect_from:
  - /articles/error-the-requested-url-returned-error-403
  - /articles/error-the-requested-url-returned-error-401
  - /articles/error-did-you-run-git-update-server-info-on-the-server
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs
  - /articles/https-cloning-errors
  - /github/creating-cloning-and-archiving-repositories/https-cloning-errors
  - /articles/error-repository-not-found
  - /github/creating-cloning-and-archiving-repositories/error-repository-not-found
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
  - /github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 01ee7c0c1403100570c1fd8b990e6adfe8831f80
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094004'
---
## Ошибки клонирования HTTPS

При использовании HTTPS с GIT распространен ряд ошибок. Обычно они указывают на то, что у вас старая версия GIT или нет доступа к репозиторию.

Ниже приведен пример возможной ошибки HTTPS:

```shell
> error: The requested URL returned error: 401 while accessing
> https://{% data variables.command_line.codeblock %}/USER/REPO.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed
```

```shell
> Error: The requested URL returned error: 403 while accessing
> https://{% data variables.command_line.codeblock %}/USER/REPO.git/info/refs
> fatal: HTTP request failed
```

```shell
> Error: https://{% data variables.command_line.codeblock %}/USER/REPO.git/info/refs not found: did you run git
> update-server-info on the server?
```

### Проверка версии GIT

Ограничений на минимальную версию GIT, требуемую для взаимодействия с {% data variables.product.product_name %}, нет, но, по нашему опыту, версия 1.7.10 является удобной, стабильной версией, доступной на многих платформах. Последнюю версию всегда можно скачать на [веб-сайте GIT](https://git-scm.com/downloads).

### Проверка правильности удаленного репозитория

Репозиторий, который вы пытаетесь получить, должен существовать в {% данных variables.location.product_location %}, и URL-адрес учитывает регистр.

Чтобы узнать URL-адрес локального репозитория, можно открыть командную строку и ввести `git remote -v`:

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

Кроме того, можно изменить URL-адрес с помощью приложения [{% data variables.product.prodname_desktop %}](https://desktop.github.com/).

### Предоставление маркера доступа

Чтобы получить доступ к {% данных variables.product.prodname_dotcom %}, необходимо пройти проверку подлинности с помощью {% данных variables.product.pat_generic %} вместо пароля. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

{% data reusables.command_line.provide-an-access-token %}

### Проверить свои разрешения

При появлении запроса на ввод имени пользователя и пароля используйте учетную запись с доступом к репозиторию.

{% tip %}

**Совет**. Если вы не хотите вводить учетные данные при каждом взаимодействии с удаленным репозиторием, можно включить [кэширование учетных данных](/github/getting-started-with-github/caching-your-github-credentials-in-git). Если кэширование учетных данных уже используется, убедитесь в том, что на компьютере кэшированы правильные учетные данные. Неправильные или устаревшие учетные данные не позволят пройти проверку подлинности.

{% endtip %}

### Использование SSH

Если вы ранее настроили ключи SSH, можно использовать URL-адрес клонирования SSH вместо HTTPS.  Дополнительные сведения см. в разделе [Сведения об удаленных репозиториях](/github/getting-started-with-github/about-remote-repositories).

## Ошибка: репозиторий не найден

{% ifversion fpt или ghae или ghec %} Если при клонирование репозитория возникает эта ошибка, это означает, что репозиторий не существует или у вас нет разрешения на доступ к нему. {% else %} Если при клонирование репозитория возникает эта ошибка, это означает, что репозиторий не существует, у вас нет разрешения на доступ к нему, или {% данных variables.location.product_location %} находится в закрытом режиме. {% endif %} В зависимости от причины существует несколько решений этой ошибки.

### Проверка правильности написания

Всегда есть вероятность опечатки. Кроме того, в именах репозиториев учитывается регистр символов.  Если вы попытаетесь клонировать `git@{% data variables.command_line.codeblock %}:user/repo.git`, но репозиторий на самом деле называется `User/Repo`, произойдет эта ошибка.

Чтобы избежать этой ошибки, при клонировании всегда копируйте URL-адрес клона со страницы репозитория, а затем вставляйте его. Дополнительные сведения см. в разделе [Клонирование репозитория](/articles/cloning-a-repository).

Сведения об обновлении удаленного репозитория см. в разделе [Управление удаленными репозиториями](/github/getting-started-with-github/managing-remote-repositories).

### Проверка разрешений

Если вы пытаетесь клонировать частный репозиторий, но не имеете разрешения на его просмотр, произойдет эта ошибка.

Убедитесь в том, что у вас есть один из следующих уровней доступа:

* владелец репозитория;
* [участник совместной работы](/articles/inviting-collaborators-to-a-personal-repository) над репозиторием;
* [участник команды](/articles/adding-organization-members-to-a-team), которая имеет доступ к репозиторию (если репозиторий принадлежит организации).

### Проверка доступа по протоколу SSH

В редких случаях может отсутствовать доступ к репозиторию по протоколу SSH из-за неправильной настройки.

Убедитесь в том, что используемый ключ SSH связан с личной учетной записью на {% data variables.product.product_name %}. Это можно проверить, введя в командную строку следующую команду:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% ifversion fpt or ghec %} Если репозиторий принадлежит организации и вы используете ключ SSH, созданный приложением OAuth, доступ к приложению может быть ограничен владельцем организации. Дополнительные сведения см. в разделе [Сведения об ограничениях доступа к приложению OAuth](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions).
{% endif %}

Дополнительные сведения см. в разделе [Добавление нового ключа SSH в учетную запись GitHub](/articles/adding-a-new-ssh-key-to-your-github-account).

{% ifversion ghes %}
### Проверка режима, в котором находится экземпляр

Если администратор сайта включил частный режим в экземпляре GitHub Enterprise, анонимные клоны по `git://` будут отключены. Если вам не удается клонировать репозиторий, обратитесь к администратору сайта.
{% endif %}

### Проверка существования репозитория

Если все остальное не удается, убедитесь, что репозиторий действительно существует в {% данных variables.location.product_location %}!
Если вы пытаетесь выполнить отправку в несуществующий репозиторий, произойдет эта ошибка.

## Ошибка: файл HEAD удаленного репозитория ссылается на несуществующую ветвь; не удалось выполнить извлечение

Эта ошибка возникает, если ветвь репозитория по умолчанию удалена на {% данных variables.location.product_location %}.

Обнаружить эту ошибку легко: GIT предупредит вас при попытке клонировать репозиторий:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/USER/REPO.git
# Clone a repo
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

Чтобы устранить эту ошибку, необходимо быть администратором репозитория на {% данных variables.location.product_location %}.
Вам потребуется [изменить ветвь по умолчанию](/github/administering-a-repository/changing-the-default-branch) репозитория.

После этого можно получить список всех доступных ветвей из командной строки:

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

Затем можно просто переключиться на новую ветвь:

```shell
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```

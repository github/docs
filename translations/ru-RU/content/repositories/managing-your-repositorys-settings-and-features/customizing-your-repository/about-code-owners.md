---
title: О владельцах кода
intro: 'Файл CODEOWNERS можно использовать для определения отдельных лиц или команд, ответственных за код в репозитории.'
redirect_from:
  - /articles/about-codeowners
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 12265f0627ca6d0feb34244aab1c021b5ae6cc10
ms.sourcegitcommit: 9315c7dae9a673a2f8958df7632bf1af206a0bed
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188241'
---
Пользователи с разрешениями администратора или владельца могут настроить файл CODEOWNERS в репозитории.

Пользователи, которых вы выбираете в качестве владельцев кода, должны иметь разрешения на запись в репозитории. Если владелец кода является командой, то эта команда должна быть видимой и должна иметь разрешения на запись, даже если все отдельные участники команды уже имеют разрешения на запись напрямую, через членство в организации или через другое членство в команде.

## О владельцах кода

Владельцы кода автоматически получают запрос для проверки, когда кто-то открывает запрос на вытягивание, который изменяет код, принадлежащий владельцам. Владельцы кода не получают запросов для проверки черновиков запросов на вытягивание автоматически. Дополнительные сведения о черновиках запросов на вытягивание см. в разделе [Сведения о запросах на вытягивание](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests). Когда вы помечаете черновик запроса на вытягивание как готовый к проверке, владельцы кода автоматически получают уведомления. Если вы преобразуете запрос на вытягивание в черновик, для пользователей, которые уже подписаны на уведомления, подписка отменена не будет. Дополнительные сведения см. в разделе [Изменение этапа запроса на вытягивание](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request).

Если пользователь с разрешениями администратора или владельца включил необходимые проверки, он также может потребовать утверждения от владельца кода, прежде чем автор сможет объединить запрос на вытягивание в репозитории. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging).

Если у файла есть владелец кода, вы можете просмотреть, кто является владельцем кода, перед открытием запроса на вытягивание. Для этого перейдите к файлу в репозитории и наведите указатель мыши на {% octicon "shield-lock" aria-label="The edit icon" %}.

![Владелец кода для файла в репозитории](/assets/images/help/repository/code-owner-for-a-file.png)

## Расположение файла CODEOWNERS

Чтобы использовать файл CODEOWNERS, создайте новый файл `CODEOWNERS` в корневом каталоге, каталоге `docs/` или `.github/` репозитория, в ветви, в которую вы хотите добавить владельцев кода.

Каждый файл CODEOWNERS назначает владельцам кода одну ветвь в репозитории. Таким образом, можно назначить разных владельцев кода для различных ветвей, например, `@octo-org/codeowners-team` для базы кода в ветви по умолчанию и `@octocat` для сайта {% data variables.product.prodname_pages %} в ветви `gh-pages`.

Чтобы владельцы кода получали запросы на проверку, файл CODEOWNERS должен находиться в базовой ветви запроса на вытягивание. Например, если вы назначаете `@octocat` в качестве владельца кода для файлов *.js* в ветви `gh-pages` репозитория, то при открытии запроса на вытягивание, содержащего изменения в файлах *.js* между головной ветвью и `gh-pages`, `@octocat` будет получать запросы на проверку.

## Размер файла CODEOWNERS

Размер файла CODEOWNERS не должен превышать 3 МБ. Если размер файла CODEOWNERS превышает это ограничение, то файл не будет загружен, и, следовательно, сведения о владельце кода не будут отображаться, а соответствующие владельцы кода не будут получать запросы для просмотра изменений в запросе на вытягивание.

Чтобы уменьшить размер файла CODEOWNERS, используйте шаблоны с подстановочными знаками для консолидации нескольких записей в одну запись.

## Синтаксис файла CODEOWNERS

{% warning %}

**Предупреждение.** Существуют некоторые правила синтаксиса для файлов gitignore, которые *не работают* в файлах CODEOWNERS:
- экранирование шаблона, начинающегося с `#`, с помощью `\`, так как такой шаблон рассматривается как шаблон, а не как комментарий;
- использование `!` для отмены шаблона;
- использование `[ ]` для определения диапазона символов.

{% endwarning %}

Файл CODEOWNERS использует шаблон, который соответствует большинству правил, используемых в файлах [gitignore](https://git-scm.com/docs/gitignore#_pattern_format) . За шаблоном следует одно или несколько имен пользователей или имен команд {% data variables.product.prodname_dotcom %} в стандартном формате `@username` или `@org/team-name`. Пользователям и командам необходимо явно предоставить доступ `write` в репозитории, даже если у членов команды уже есть доступ.

{% ifversion fpt or ghec%} В большинстве случаев вы{% else %}Вы{% endif %} также можете ссылаться на пользователя по адресу электронной почты, который был добавлен в его учетную запись в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, например `user@example.com`. {% ifversion fpt or ghec %} Адрес электронной почты нельзя использовать для ссылки на {% data variables.enterprise.prodname_managed_user %}. Дополнительные сведения о {% data variables.enterprise.prodname_managed_users %} см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users){% ifversion fpt %}в документации по {% data variables.product.prodname_ghe_cloud %}. {% else %}". {% endif %} {% endif %}

Пути CODEOWNERS чувствительны к регистру, так как {% data variables.product.prodname_dotcom %} использует файловую систему с учетом регистра. Так как файлы CODEOWNERS обрабатываются {% data variables.product.prodname_dotcom %}, то даже в системах, которые не учитывают регистр (например, macOS), в файлах CODEOWNERS должны указываться пути и имена файлов с правильным регистром.

{% ifversion codeowners-errors %} Если какая-либо строка в файле CODEOWNERS содержит недопустимый синтаксис, эта строка будет пропущена. При переходе к файлу CODEOWNERS в репозитории на {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, вы увидите все ошибки, выделенные. Список ошибок в файле CODEOWNERS репозитория также доступен через API. Дополнительные сведения см. в разделе [Репозитории](/rest/reference/repos#list-codeowners-errors) в документации по REST API.
{% else %} Если в файле CODEOWNERS есть строка, содержащая недопустимый синтаксис, то файл не будет обрабатываться и использоваться для запроса проверок.
{% endif %}

### Пример файла CODEOWNERS
```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @global-owner1 and @global-owner2 will be requested for
# review when someone opens a pull request.
*       @global-owner1 @global-owner2

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @js-owner and not the global
# owner(s) will be requested for a review.
*.js    @js-owner #This is an inline comment.

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
*.go docs@example.com

# Teams can be specified as code owners as well. Teams should
# be identified in the format @org/team-name. Teams must have
# explicit write access to the repository. In this example,
# the octocats team in the octo-org organization owns all .txt files.
*.txt @octo-org/octocats

# In this example, @doctocat owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @doctocat

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# In this example, @octocat owns any file in an apps directory
# anywhere in your repository.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @doctocat

# In this example, any change inside the `/scripts` directory
# will require approval from @doctocat or @octocat.
/scripts/ @doctocat @octocat

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github
```

## Файлы CODEOWNERS и защита ветвей
Владельцы репозитория могут добавлять правила защиты ветви, чтобы измененный код проверялся владельцами измененных файлов. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches).

## Дополнительные материалы

- [Создание файлов](/articles/creating-new-files)
- [Приглашение участников совместной работы в личный репозиторий](/articles/inviting-collaborators-to-a-personal-repository)
- [Управление доступом пользователя к репозиторию организации](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [Управление доступом команды к репозиторию организации](/articles/managing-team-access-to-an-organization-repository)
- [Просмотр проверки запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)

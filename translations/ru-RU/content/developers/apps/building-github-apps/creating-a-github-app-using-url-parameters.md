---
title: Создание GitHub App с использованием параметров URL-адреса
intro: 'Вы можете предварительно выбрать параметры нового {% data variables.product.prodname_github_app %} с помощью [параметров запроса](https://en.wikipedia.org/wiki/Query_string) URL-адреса, чтобы быстро настроить новую конфигурацию {% data variables.product.prodname_github_app %}.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-using-url-parameters
  - /developers/apps/creating-a-github-app-using-url-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation query parameters
ms.openlocfilehash: aa54eb3dcd66e86c04a1e95e4da2d45d7858a996
ms.sourcegitcommit: a3e975955acbabbd582bb298a6c09aa81572bf52
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009944'
---
## Сведения параметрах URL-адреса {% data variables.product.prodname_github_app %}

Вы можете добавить параметры запроса к этим URL-адресам, чтобы предварительно выбрать конфигурацию {% data variables.product.prodname_github_app %} в личной учетной записи или учетной записи организации:

* **Личная учетная запись:** `{% data variables.product.oauth_host_code %}/settings/apps/new`
* **Учетная запись организации:** `{% data variables.product.oauth_host_code %}/organizations/:org/settings/apps/new`

Пользователь, создающий приложение, может изменить предварительно выбранные значения на странице регистрации {% data variables.product.prodname_github_app %} перед отправкой приложения. Если вы не включите обязательные параметры в строку запроса URL-адреса, например `name`, пользователь, создающий приложение, должен будет ввести значение перед отправкой приложения.

Для приложений, которым требуется секрет для защиты веб-перехватчика, значение секрета должно быть установлено в форме пользователем, создающим приложение, а не с помощью параметров запроса. Дополнительные сведения см. в разделе [Обеспечение безопасности веб-перехватчиков](/developers/webhooks-and-events/webhooks/securing-your-webhooks).

Следующий URL-адрес создает новое общедоступное приложение с именем `octocat-github-app` с предварительно настроенным описанием и URL-адресом обратного вызова. Этот URL-адрес также выбирает разрешения на чтение и запись для `checks`, подписывается на события веб-перехватчика `check_run` и `check_suite`, а также выбирает вариант запроса авторизации пользователя (OAuth) во время установки:

```text
{% data variables.product.oauth_host_code %}/settings/apps/new?name=octocat-github-app&description=An%20Octocat%20App&callback_urls[]=https://example.com&request_oauth_on_install=true&public=true&checks=write&events[]=check_run&events[]=check_suite
```

Полный список доступных параметров запроса, разрешений и событий приведен в разделах ниже.

## Параметры конфигурации {% data variables.product.prodname_github_app %}

 Имя | Тип | Описание
-----|------|-------------
`name` | `string` | Имя {% data variables.product.prodname_github_app %}. Присвойте своему приложению краткое и понятное имя. Это имя должно отличаться от имени существующего пользователя GitHub, если только это не ваше собственное имя пользователя или организации. Краткая версия имени вашего приложения будет отображаться в пользовательском интерфейсе, когда ваша интеграция выполнит действие.
`description` | `string` | Описание {% data variables.product.prodname_github_app %}.
`url` | `string` | Полный URL-адрес домашней страницы сайта {% data variables.product.prodname_github_app %}.
`callback_urls` | `array of strings` | Полный URL-адрес для перенаправления после авторизации установки. Вы можете указать до 10 URL-адресов обратного вызова. Эти URL-адреса будут использоваться, если вашему приложению необходимо идентифицировать и авторизовать запросы от пользователя к серверу. Например, `callback_urls[]=https://example.com&callback_urls[]=https://example-2.com`.
`request_oauth_on_install` | `boolean` | Если ваше приложение выполняет авторизацию пользователей с помощью потока OAuth, вы можете установить для этого параметра значение `true`. Это позволит пользователям авторизовать приложение при его установке, уменьшив количество шагов. Если вы выберете этот вариант, `setup_url` станет недоступным и пользователи будут перенаправлены на ваш `callback_url` после установки приложения.
`setup_url` | `string` | Полный URL-адрес для перенаправления после установки {% data variables.product.prodname_github_app %}, если для приложения требуется дополнительная настройка после установки.
`setup_on_update` | `boolean` | Задайте значение `true`, чтобы перенаправлять людей на URL-адрес настройки при обновлении установок, например после добавления или удаления репозиториев.
`public` | `boolean` | Задайте значение `true`, если приложение {% data variables.product.prodname_github_app %} доступно для всех пользователей, или `false` — если оно доступно только владельцу.
`webhook_active` | `boolean` | Задайте значение `false`, чтобы отключить веб-перехватчик. Веб-перехватчик включен по умолчанию.
`webhook_url` | `string` | Полный URL-адрес, на который вы хотите отправлять полезные данные события веб-перехватчика.
{% ifversion ghae %}`webhook_secret` | `string` | Вы можете указать секрет для защиты ваших веб-перехватчиков. Дополнительные сведения см. на странице [Защита веб-перехватчиков](/webhooks/securing/).
{% endif %}`events` | `array of strings` | События веб-перехватчика. Для некоторых событий веб-перехватчика необходимо получить разрешения `read` или `write` для ресурса, прежде чем выбрать событие при регистрации нового {% data variables.product.prodname_github_app %}. Сведения о доступных событиях и необходимых для них разрешениях см. в разделе [События веб-перехватчика {% data variables.product.prodname_github_app %}](#github-app-webhook-events). Вы можете выбрать несколько событий в строке запроса. Например, `events[]=public&events[]=label`.{% ifversion ghes < 3.4 %}
`domain` | `string` | URL-адрес ссылки на содержимое.{% endif %}
`single_file_name` | `string` | Это узкоспециализированное разрешение, позволяющее приложению получать доступ к одному файлу в любом репозитории. При задании разрешения `read` или `write` для `single_file` в этом поле указывается путь к одному файлу, которым будет управлять {% data variables.product.prodname_github_app %}. {% ifversion fpt or ghes or ghec %} Если вам нужно управлять несколькими файлами, см. `single_file_paths` ниже. {% endif %}{% ifversion fpt or ghes or ghec %}
`single_file_paths` | `array of strings` | Этот параметр позволяет приложению получить доступ к десяти указанным файлам в репозитории. При задании разрешения `read` или `write` для `single_file` этот массив может хранить пути до десяти файлов, которыми будет управлять {% data variables.product.prodname_github_app %}. Все эти файлы получают одно и то же разрешение, заданное `single_file`, и не имеют отдельных индивидуальных разрешений. При настройке двух или более файлов API возвращает `multiple_single_files=true`, в противном случае возвращается `multiple_single_files=false`.{% endif %}

## Разрешения {% data variables.product.prodname_github_app %}

Вы можете выбрать разрешения в строке запроса, используя имя разрешения из приведенной ниже таблицы в качестве имени параметра запроса и тип разрешения в качестве значения запроса. Например, чтобы выбрать разрешения `Read & write` в пользовательском интерфейсе для `contents`, в строке запроса нужно указать `&contents=write`. Чтобы выбрать разрешения `Read-only` в пользовательском интерфейсе для `&blocking=read`, в строке запроса нужно указать `blocking`. Чтобы выбрать `no-access` в пользовательском интерфейсе для `checks`, ваша строка запроса не должна содержать разрешение `checks`.

Разрешение | Описание
---------- | -----------
[`administration`](/rest/reference/permissions-required-for-github-apps#administration) | Предоставляет доступ к различным конечным точкам для администрирования организации и репозитория. Это может быть `none`, `read` или `write`.{% ifversion fpt or ghec %}
[`blocking`](/rest/reference/permissions-required-for-github-apps#blocking-users) | Предоставляет доступ к [API блокирования пользователей](/rest/reference/users#blocking). Это может быть `none`, `read` или `write`.{% endif %}
[`checks`](/rest/reference/permissions-required-for-github-apps#checks) | Предоставляет доступ к [API проверок](/rest/reference/checks). Это может быть `none`, `read` или `write`.{% ifversion ghes < 3.4 %}
`content_references` | Предоставляет доступ к конечной точке [Создание вложения с содержимым](/rest/reference/apps#create-a-content-attachment). Это может быть `none`, `read` или `write`.{% endif %}
[`contents`](/rest/reference/permissions-required-for-github-apps#contents) |  Предоставляет доступ к различным конечным точкам, которые позволяют изменять содержимое репозитория. Это может быть `none`, `read` или `write`.
[`deployments`](/rest/reference/permissions-required-for-github-apps#deployments) | Предоставляет доступ к [API развертываний](/rest/reference/repos#deployments). Это может быть `none`, `read` или `write`.{% ifversion fpt or ghes or ghec %}
[`emails`](/rest/reference/permissions-required-for-github-apps#email-addresses) | Предоставляет доступ к [API сообщений электронной почты](/rest/reference/users#emails). Это может быть `none`, `read` или `write`.{% endif %}
[`followers`](/rest/reference/permissions-required-for-github-apps#followers) | Предоставляет доступ к [API подписчиков](/rest/reference/users#followers). Это может быть `none`, `read` или `write`.
[`gpg_keys`](/rest/reference/permissions-required-for-github-apps#gpg-keys) | Предоставляет доступ к [API ключей GPG](/rest/reference/users#gpg-keys). Это может быть `none`, `read` или `write`.
[`issues`](/rest/reference/permissions-required-for-github-apps#issues) | Предоставляет доступ к [API проблем](/rest/reference/issues). Это может быть `none`, `read` или `write`.
[`keys`](/rest/reference/permissions-required-for-github-apps#git-ssh-keys) | Предоставляет доступ к [API открытых ключей](/rest/reference/users#keys). Это может быть `none`, `read` или `write`.
[`members`](/rest/reference/permissions-required-for-github-apps#members) |  Предоставляет доступ для управления участниками организации. Это может быть `none`, `read` или `write`.{% ifversion fpt or ghec %}
[`metadata`](/rest/reference/permissions-required-for-github-apps#metadata) | Предоставляет доступ к конечным точкам только для чтения, которые не допускают утечки конфиденциальных данных. Может иметь значение `read` или `none`. Если вы устанавливаете для {% data variables.product.prodname_github_app %} какое-либо разрешение, по умолчанию задается значение `read`. Если же вы не указываете никаких разрешений, по умолчанию задается значение `none`.
[`organization_administration`](/rest/reference/permissions-required-for-github-apps#organization-administration) | Предоставляет доступ к конечной точке [Обновление организации](/rest/reference/orgs#update-an-organization) и [API ограничений взаимодействия с организацией](/rest/reference/interactions#set-interaction-restrictions-for-an-organization). Это может быть `none`, `read` или `write`.{% endif %}
[`organization_hooks`](/rest/reference/permissions-required-for-github-apps#organization-webhooks) | Предоставляет доступ к [API веб-перехватчиков организации](/rest/reference/orgs#webhooks/). Это может быть `none`, `read` или `write`.
`organization_plan` | Предоставляет доступ для получения сведений о плане организации с помощью конечной точки [Получение организации](/rest/reference/orgs#get-an-organization). Это может быть `none` или `read`.
[`organization_projects`](/rest/reference/permissions-required-for-github-apps#organization-projects) |  Предоставляет доступ к [API проектов](/rest/reference/projects). Это может быть `none`, `read`, `write` или `admin`.{% ifversion fpt or ghec %}
[`organization_user_blocking`](/rest/reference/permissions-required-for-github-apps#organization-user-blocking) | Предоставляет доступ к [API блокирования пользователей организации](/rest/reference/orgs#blocking). Это может быть `none`, `read` или `write`.{% endif %}
[`pages`](/rest/reference/permissions-required-for-github-apps#pages) | Предоставляет доступ к [API страниц](/rest/reference/repos#pages). Это может быть `none`, `read` или `write`.
`plan` | Предоставляет доступ для получения сведений о плане GitHub пользователя с помощью конечной точки [Получение пользователя](/rest/reference/users#get-a-user). Это может быть `none` или `read`.
[`pull_requests`](/rest/reference/permissions-required-for-github-apps#pull-requests) | Предоставляет доступ к различным конечным точкам запросов на вытягивание. Это может быть `none`, `read` или `write`.
[`repository_hooks`](/rest/reference/permissions-required-for-github-apps#repository-webhooks) | Предоставляет доступ к [API веб-перехватчиков репозитория](/rest/reference/repos#hooks). Это может быть `none`, `read` или `write`.
[`repository_projects`](/rest/reference/permissions-required-for-github-apps#repository-projects) |  Предоставляет доступ к [API проектов](/rest/reference/projects). Это может быть `none`, `read`, `write` или `admin`.{% ifversion ghes or ghec %}
[`secret_scanning_alerts`](/rest/reference/permissions-required-for-github-apps#secret-scanning-alerts) |  Предоставляет доступ к [API сканирования секретов](/rest/reference/secret-scanning). Это может быть `none`, `read` или `write`.{% endif %}{% ifversion fpt or ghes or ghec %}
[`security_events`](/rest/reference/permissions-required-for-github-apps#code-scanning-alerts) |  Предоставляет доступ к [API сканирования кода](/rest/reference/code-scanning/). Это может быть `none`, `read` или `write`.{% endif %}
[`single_file`](/rest/reference/permissions-required-for-github-apps#single-file) | Предоставляет доступ к [API содержимого](/rest/reference/repos#contents). Это может быть `none`, `read` или `write`.
[`starring`](/rest/reference/permissions-required-for-github-apps#starring) | Предоставляет доступ к [API пометки звездочкой](/rest/reference/activity#starring). Это может быть `none`, `read` или `write`.
[`statuses`](/rest/reference/permissions-required-for-github-apps#commit-statuses) | Предоставляет доступ к [API состояний](/rest/reference/commits#commit-statuses). Это может быть `none`, `read` или `write`.
[`team_discussions`](/rest/reference/permissions-required-for-github-apps#team-discussions) | Предоставляет доступ к [API обсуждений в команде](/rest/reference/teams#discussions) и [API комментария к обсуждению в команде](/rest/reference/teams#discussion-comments). Это может быть `none`, `read` или `write`.
[`vulnerability_alerts`](/rest/reference/permissions-required-for-github-apps#dependabot-alerts)| Предоставляет доступ для получения {% data variables.product.prodname_dependabot_alerts %} в репозитории. Дополнительные сведения см. на странице [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts). Это может быть `none`, `read` или `write`.
`watching` | Предоставляет доступ к репозиториям списков и изменений, на которые подписан пользователь. Это может быть `none`, `read` или `write`.

## События веб-перехватчика {% data variables.product.prodname_github_app %}

Имя события веб-перехватчика | Требуемое разрешение | Описание
------------------ | ------------------- | -----------
[`check_run`](/webhooks/event-payloads/#check_run) |`checks` | {% data reusables.webhooks.check_run_short_desc %}
[`check_suite`](/webhooks/event-payloads/#check_suite) |`checks` | {% data reusables.webhooks.check_suite_short_desc %}
[`commit_comment`](/webhooks/event-payloads/#commit_comment) | `contents` | {% data reusables.webhooks.commit_comment_short_desc %}{% ifversion ghes < 3.4 %}
[`content_reference`](/webhooks/event-payloads/#content_reference) |`content_references` | {% data reusables.webhooks.content_reference_short_desc %}{% endif %}
[`create`](/webhooks/event-payloads/#create) | `contents` | {% data reusables.webhooks.create_short_desc %}
[`delete`](/webhooks/event-payloads/#delete) | `contents` | {% data reusables.webhooks.delete_short_desc %}
[`deployment`](/webhooks/event-payloads/#deployment) | `deployments` | {% data reusables.webhooks.deployment_short_desc %}
[`deployment_status`](/webhooks/event-payloads/#deployment_status) | `deployments` | {% data reusables.webhooks.deployment_status_short_desc %}
[`fork`](/webhooks/event-payloads/#fork) | `contents` | {% data reusables.webhooks.fork_short_desc %}
[`gollum`](/webhooks/event-payloads/#gollum) | `contents` | {% data reusables.webhooks.gollum_short_desc %}
[`issues`](/webhooks/event-payloads/#issues) | `issues` | {% data reusables.webhooks.issues_short_desc %}
[`issue_comment`](/webhooks/event-payloads/#issue_comment) | `issues` | {% data reusables.webhooks.issue_comment_short_desc %}
[`label`](/webhooks/event-payloads/#label) | `metadata` | {% data reusables.webhooks.label_short_desc %}
[`member`](/webhooks/event-payloads/#member) | `members` | {% data reusables.webhooks.member_short_desc %}
[`membership`](/webhooks/event-payloads/#membership) | `members` | {% data reusables.webhooks.membership_short_desc %}
[`milestone`](/webhooks/event-payloads/#milestone) | `pull_request` | {% data reusables.webhooks.milestone_short_desc %}{% ifversion fpt or ghec %}
[`org_block`](/webhooks/event-payloads/#org_block) | `organization_administration` | {% data reusables.webhooks.org_block_short_desc %}{% endif %}
[`organization`](/webhooks/event-payloads/#organization) | `members` | {% data reusables.webhooks.organization_short_desc %}
[`page_build`](/webhooks/event-payloads/#page_build) | `pages` | {% data reusables.webhooks.page_build_short_desc %}
[`project`](/webhooks/event-payloads/#project) | `repository_projects` или `organization_projects` | {% data reusables.webhooks.project_short_desc %}
[`project_card`](/webhooks/event-payloads/#project_card) | `repository_projects` или `organization_projects` | {% data reusables.webhooks.project_card_short_desc %}
[`project_column`](/webhooks/event-payloads/#project_column) | `repository_projects` или `organization_projects` | {% data reusables.webhooks.project_column_short_desc %}
[`public`](/webhooks/event-payloads/#public) | `metadata` | {% data reusables.webhooks.public_short_desc %}
[`pull_request`](/webhooks/event-payloads/#pull_request) | `pull_requests` | {% data reusables.webhooks.pull_request_short_desc %}
[`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | `pull_request` | {% data reusables.webhooks.pull_request_review_short_desc %}
[`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | `pull_request` | {% data reusables.webhooks.pull_request_review_comment_short_desc %}
[`pull_request_review_thread`](/webhooks/event-payloads/#pull_request_review_thread) | `pull_request` | {% data reusables.webhooks.pull_request_review_thread_short_desc %}
[`push`](/webhooks/event-payloads/#push) | `contents` | {% data reusables.webhooks.push_short_desc %}
[`release`](/webhooks/event-payloads/#release) | `contents` | {% data reusables.webhooks.release_short_desc %}
[`repository`](/webhooks/event-payloads/#repository) |`metadata` | {% data reusables.webhooks.repository_short_desc %}{% ifversion fpt or ghec %}
[`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) | `contents` | Позволяет интеграторам, использующим GitHub Actions, запускать пользовательские события.{% endif %}
[`status`](/webhooks/event-payloads/#status) | `statuses` | {% data reusables.webhooks.status_short_desc %}
[`team`](/webhooks/event-payloads/#team) | `members` | {% data reusables.webhooks.team_short_desc %}
[`team_add`](/webhooks/event-payloads/#team_add) | `members` | {% data reusables.webhooks.team_add_short_desc %}
[`watch`](/webhooks/event-payloads/#watch) | `metadata` | {% data reusables.webhooks.watch_short_desc %}

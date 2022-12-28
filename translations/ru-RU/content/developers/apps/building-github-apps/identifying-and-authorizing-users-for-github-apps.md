---
title: Идентификация и авторизация пользователей для приложений GitHub
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
  - /developers/apps/identifying-and-authorizing-users-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Identify & authorize users
ms.openlocfilehash: 302e7a25931c3af2957dae7a67e0ca080fc5bd50
ms.sourcegitcommit: f54d01e643f994ce48f0774dbc680ad77dd6193f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160583'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

Когда приложение GitHub действует от имени пользователя, оно выполняет запросы между пользователями. Эти запросы должны быть авторизованы с помощью маркера доступа пользователя. Запросы типа "пользователь — сервер" включают запрос данных для пользователя, например определение того, какие репозитории отобразить определенному пользователю. Эти запросы также включают действия, инициированные пользователем, например запуск сборки.

{% data reusables.apps.expiring_user_authorization_tokens %}

## Идентификация пользователей на вашем сайте

Чтобы авторизовать пользователей для стандартных приложений, запущенных в браузере, используйте [поток веб-приложений](#web-application-flow).

Чтобы авторизовать пользователей для автономных приложений без прямого доступа к браузеру, таких как инструменты CLI или менеджеры учетных данных Git, используйте [поток устройства](#device-flow). Поток устройства использует [предоставление разрешения авторизации устройства](https://tools.ietf.org/html/rfc8628) OAuth 2.0.

## Процесс для веб-приложения

При использовании потока веб-приложения процесс идентификации пользователей на вашем сайте выглядит следующим образом:

1. Пользователи перенаправляются для запроса удостоверения GitHub.
2. Пользователи перенаправляются из GitHub обратно на сайт.
3. Ваше приложение GitHub получает доступ к API с маркером доступа пользователя.

Если выбрать **Запрашивать авторизацию пользователя (OAuth) во время установки** при создании или изменении приложения, шаг 1 будет выполнен во время его установки. Дополнительные сведения см. в разделе [Авторизация пользователей во время установки](/apps/installing-github-apps/#authorizing-users-during-installation).

### 1. Запрос удостоверения GitHub пользователя
Направьте пользователя по следующему URL-адресу в его браузере:

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Когда приложение GitHub указывает параметр `login`, оно предлагает пользователям определенную учетную запись для входа и авторизации приложения.

#### Параметры

Имя | Тип | Описание
-----|------|------------
`client_id` | `string` | **Обязательный.** Идентификатор клиента для вашего приложения GitHub. Его можно найти в [параметрах приложения GitHub](https://github.com/settings/apps) при выборе приложения. **Примечание**. Идентификатор приложения и идентификатор клиента не совпадают и не являются взаимозаменяемыми.
`redirect_uri` | `string` | URL-адрес в приложении, на который пользователи будут направляться после авторизации. Он должен точно совпадать с {% ifversion fpt or ghes or ghec %} одним из URL-адресов, которые вы указали в качестве **URL-адреса обратного вызова** {% else %} URL-адреса, который вы указали в поле **-адреса обратного вызова авторизации пользователя**{% endif %} при настройке приложения GitHub и не может содержать никаких дополнительных параметров.
`state` | `string` | Он должен содержать случайную строку для защиты от атак в форме подделки и может содержать любые другие произвольные данные.
`login` | `string` | Предлагает определенную учетную запись для входа и авторизации приложения.
`allow_signup` | `string` | Будет ли пользователям, не прошедшим проверку подлинности, предлагаться возможность подписаться на {% data variables.product.prodname_dotcom %} во время потока OAuth. Значение по умолчанию — `true`. Используйте значение `false`, когда политика запрещает регистрацию.

{% note %}

**Примечание**. Вам не нужно указывать области в запросе авторизации. В отличие от традиционной авторизации OAuth, маркер авторизации ограничен разрешениями, связанными с вашим приложением GitHub и разрешениями пользователя.

{% endnote %}

### 2. Перенаправление пользователей из GitHub обратно на ваш сайт

Если пользователь принимает ваш запрос, GitHub перенаправляет обратно на ваш сайт с временным `code` в параметре кода, а также с состоянием, указанным на предыдущем шаге в параметре `state`. Если состояния не совпадают, это значит, что запрос был создан третьей стороной, и процесс следует прервать.

{% note %}

**Примечание**. Если выбрать **Запрашивать авторизацию пользователя (OAuth) во время установки** при создании или изменении приложения, GitHub вернет временный `code`, который нужно будет обменять на маркер доступа. Параметр `state` не возвращается, когда GitHub инициирует поток OAuth во время установки приложения.

{% endnote %}

Обменяйте этот `code` на маркер доступа.  Когда маркеры с истекающим сроком действия включены, срок действия маркера доступа истекает через 8 часов, а срок действия маркера обновления — через 6 месяцев. При каждом обновлении маркера вы получаете новый маркер обновления. Дополнительные сведения см. в разделе [Обновление токенов доступа между пользователями и сервером](/developers/apps/refreshing-user-to-server-access-tokens).

Пользовательские маркеры с истекающим сроком действия на данный момент являются дополнительной функцией и могут быть изменены. Сведения о включении функции ограничения срока действия маркеров "пользователь —сервер" см. в разделе [Активация дополнительных функций для приложений](/developers/apps/activating-optional-features-for-apps).

Отправьте запрос в следующую конечную точку для получения маркера доступа:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Параметры

Имя | Тип | Описание
-----|------|------------
`client_id` | `string` | **Обязательный.** Идентификатор клиента для вашего приложения GitHub.
`client_secret` | `string`   | **Обязательный.** Секрет клиента для вашего приложения GitHub.
`code` | `string`   | **Обязательный.** Код, полученный в качестве ответа на шаге 1.
`redirect_uri` | `string` | URL-адрес в приложении, на который пользователи будут направляться после авторизации. Он должен точно совпадать с {% ifversion fpt or ghes or ghec %} одним из URL-адресов, которые вы указали в качестве **URL-адреса обратного вызова** {% else %} URL-адреса, который вы указали в поле **-адреса обратного вызова авторизации пользователя**{% endif %} при настройке приложения GitHub и не может содержать никаких дополнительных параметров.

#### Ответ

По умолчанию ответ принимает следующий вид. Параметры ответа `expires_in`, `refresh_token` и `refresh_token_expires_in` возвращаются только в том случае, если включено ограничение срока действия маркеров доступа "пользователь — сервер".

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": 28800,
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```

### 3. Приложение GitHub обращается к API с маркером доступа пользователя

Маркер доступа пользователя позволяет приложению GitHub отправлять запросы к API от имени пользователя.

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Например, в curl можно задать заголовок авторизации следующим образом:

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Процесс для устройства

{% note %}

**Примечание**. Процесс для устройства находится в стадии общедоступной бета-версии и может быть изменен.

{% endnote %}

Процесс для устройства позволяет авторизовать пользователей для автономного приложения, например средства CLI или диспетчера учетных данных GIT.

{% ifversion device-flow-is-opt-in %}Прежде чем использовать процесс для устройства с целью идентификации и авторизации пользователей, необходимо сначала включить его в параметрах приложения. Дополнительные сведения о включении потоков устройств см. в разделе [Изменение приложения GitHub](/developers/apps/managing-github-apps/modifying-a-github-app). {% endif %}Дополнительные сведения об авторизации пользователей с помощью процесса для устройства см. в разделе [Авторизация приложений OAuth](/developers/apps/authorizing-oauth-apps#device-flow).

## Проверка доступа пользователя к ресурсам установки

После получения токена OAuth для пользователя можно проверить, к каким установкам этот пользователь имеет доступ.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations

Кроме того, можно проверить, какие репозитории доступны пользователю для установки.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Дополнительные сведения см. в статьях: [Список установок приложений, доступных для маркера доступа пользователя](/rest/apps#list-app-installations-accessible-to-the-user-access-token) и [Список репозиториев, доступных для маркера доступа пользователя](/rest/apps#list-repositories-accessible-to-the-user-access-token).

## Обработка отозванной авторизации приложения GitHub

Если пользователь отзывает свою авторизацию приложения GitHub, приложение по умолчанию получит веб-перехватчик [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization). Приложения GitHub не могут отменить подписку на это событие. {% data reusables.webhooks.authorization_event %}

## Разрешения уровня пользователя

Вы можете добавить разрешения уровня пользователя в свое приложение GitHub для доступа к пользовательским ресурсам, таким как электронные письма пользователей. Такие разрешения предоставляются отдельными пользователями в рамках [потока авторизации пользователей](#identifying-users-on-your-site). Разрешения уровня пользователя отличаются от [разрешений на уровне репозитория и организации](/rest/overview/permissions-required-for-github-apps), которые предоставляются во время установки в организации или личной учетной записи.

Разрешения уровня пользователя можно выбрать в параметрах приложения GitHub в разделе **Разрешения пользователя** на странице **Разрешения и веб-перехватчики**. Дополнительные сведения о выборе разрешений см. в статье [Изменение разрешений приложения GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/).

Когда пользователь устанавливает ваше приложение в своей учетной записи, в запросе на установку будут перечислены разрешения уровня пользователя, которые запрашивает приложение, и приведено объяснение, что приложение может запрашивать эти разрешения у отдельных пользователей.

Так как разрешения уровня пользователя предоставляются отдельным пользователям, их можно добавить в имеющееся приложение, не запрашивая у пользователей обновление. Однако вам потребуется отправить существующих пользователей через поток авторизации пользователей, чтобы авторизовать новое разрешение и получить новый маркер от пользователя к серверу для этих запросов.

## Запросы между пользователем и сервером

Хотя большая часть вашего взаимодействия с API должна происходить с использованием ваших маркеров доступа установки от сервера к серверу, некоторые конечные точки позволяют выполнять действия с помощью API с использованием маркера доступа пользователя. Ваше приложение может выполнять следующие запросы, используя конечные точки [GraphQL](/graphql) или [REST](/rest).

### Поддерживаемые конечные точки

{% ifversion fpt or ghec %}
#### Средства выполнения действий

* [Список приложений средств выполнения для репозитория](/rest/actions#list-runner-applications-for-a-repository)
* [Список локальных средств выполнения для репозитория](/rest/actions#list-self-hosted-runners-for-a-repository)
* [Получение локального средства выполнения для репозитория](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [Удаление локального средства выполнения из репозитория](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [Создание токена регистрации для репозитория](/rest/actions#create-a-registration-token-for-a-repository)
* [Создание токена удаления для репозитория](/rest/actions#create-a-remove-token-for-a-repository)
* [Список приложений средств выполнения для организации](/rest/actions#list-runner-applications-for-an-organization)
* [Список локальных средств выполнения для организации](/rest/actions#list-self-hosted-runners-for-an-organization)
* [Получение локального средства выполнения для организации](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [Удаление локального средства выполнения для организации](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [Создание токена регистрации для организации](/rest/actions#create-a-registration-token-for-an-organization)
* [Создание токена удаления для организации](/rest/actions#create-a-remove-token-for-an-organization)

#### Секреты действий

* [Получение открытого ключа репозитория](/rest/actions#get-a-repository-public-key)
* [Список секретов репозитория](/rest/actions#list-repository-secrets)
* [Получение секрета репозитория](/rest/actions#get-a-repository-secret)
* [Создание или обновление секрета репозитория](/rest/actions#create-or-update-a-repository-secret)
* [Удаление секрета репозитория](/rest/actions#delete-a-repository-secret)
* [Получение открытого ключа организации](/rest/actions#get-an-organization-public-key)
* [Список секретов организации](/rest/actions#list-organization-secrets)
* [Получение секрета организации](/rest/actions#get-an-organization-secret)
* [Создание или обновление секрета организации](/rest/actions#create-or-update-an-organization-secret)
* [Список выбранных репозиториев для секрета организации](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [Настройка выбранных репозиториев для секрета организации](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [Добавление выбранного репозитория к секрету организации](/rest/actions#add-selected-repository-to-an-organization-secret)
* [Удаление выбранного репозитория из секрета организации](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [Удаление секрета организации](/rest/actions#delete-an-organization-secret) {% endif %}

{% ifversion fpt or ghec %}
#### Artifacts

* [Список артефактов для репозитория](/rest/actions#list-artifacts-for-a-repository)
* [Список артефактов выполнения рабочего процесса](/rest/actions#list-workflow-run-artifacts)
* [Получение артефакта](/rest/actions#get-an-artifact)
* [Удаление артефакта](/rest/actions#delete-an-artifact)
* [Загрузка артефакта](/rest/actions#download-an-artifact) {% endif %}

#### Проверка запусков

* [Создание выполнения проверки](/rest/checks#create-a-check-run)
* [Получение выполнения проверки](/rest/checks#get-a-check-run)
* [Обновление выполнения проверки](/rest/checks#update-a-check-run)
* [Список аннотаций выполнения проверки](/rest/checks#list-check-run-annotations)
* [Список выполнений проверок в наборе проверок](/rest/checks#list-check-runs-in-a-check-suite)
* [Список выполнений проверок для ссылки на Git](/rest/checks#list-check-runs-for-a-git-reference)

#### Проверить пакеты

* [Создание набора проверок](/rest/checks#create-a-check-suite)
* [Получение набора проверок](/rest/checks#get-a-check-suite)
* [Повторный запрос набора проверок](/rest/checks#rerequest-a-check-suite)
* [Обновление параметров репозитория для наборов проверок](/rest/checks#update-repository-preferences-for-check-suites)
* [Список наборов проверок для ссылки Git](/rest/checks#list-check-suites-for-a-git-reference)

#### Правила поведения

* [Получение всех правил поведения](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [Получение правил поведения](/rest/codes-of-conduct#get-a-code-of-conduct)

#### Состояния развертывания

* [Список состояний развертывания](/rest/deployments#list-deployment-statuses)
* [Создание состояния развертывания](/rest/deployments#create-a-deployment-status)
* [Получение состояния развертывания](/rest/deployments#get-a-deployment-status)

#### Развернутые приложения

* [Перечислить развертывания](/rest/deployments#list-deployments)
* [Создание развертывания](/rest/deployments#create-a-deployment)
* [Получение развертывания](/rest/deployments#get-a-deployment)
* [Удаление развертывания](/rest/deployments#delete-a-deployment)

#### События

* [Список общедоступных событий для сети репозиториев](/rest/activity#list-public-events-for-a-network-of-repositories)
* [Список событий общественных организаций](/rest/activity#list-public-organization-events)

#### Веб-каналы

* [Получение веб-каналов](/rest/activity#get-feeds)

#### Большие двоичные объекты Git

* [Создание BLOB-объекта](/rest/git#create-a-blob)
* [Получение большого двоичного объекта](/rest/git#get-a-blob)

#### Фиксация Git

* [Создание фиксации](/rest/git#create-a-commit)
* [Получение фиксации](/rest/git#get-a-commit)

#### Ссылки на Git

* [Создание ссылки](/rest/git#create-a-reference)
* [Получение ссылки](/rest/git#get-a-reference)
* [Список совпадающих ссылок](/rest/git#list-matching-references)
* [Обновление ссылки](/rest/git#update-a-reference)
* [Удаление ссылки](/rest/git#delete-a-reference)

#### Теги Git

* [Создание объекта тега](/rest/git#create-a-tag-object)
* [Получение тега](/rest/git#get-a-tag)

#### Деревья Git

* [Создание дерева](/rest/git#create-a-tree)
* [Получение дерева](/rest/git#get-a-tree)

#### Шаблоны Gitignore

* [Получение всех шаблонов gitignore](/rest/gitignore#get-all-gitignore-templates)
* [Получение шаблона gitignore](/rest/gitignore#get-a-gitignore-template)

#### Установки

* [Список репозиториев, доступных для маркера доступа пользователя](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
#### Ограничения взаимодействия

* [Получение ограничений взаимодействия для организации](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [Настройка ограничений взаимодействия для организации](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [Удаление ограничений взаимодействия для организации](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [Получение ограничений взаимодействия для репозитория](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [Настройка ограничений взаимодействия для репозитория](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [Удаление ограничений взаимодействия для репозитория](/rest/interactions#remove-interaction-restrictions-for-a-repository) {% endif %}

#### Уполномоченные по проблеме

* [Добавление уполномоченных к проблеме](/rest/issues#add-assignees-to-an-issue)
* [Удаление уполномоченных из проблемы](/rest/issues#remove-assignees-from-an-issue)

#### Комментарии к проблеме

* [Список комментариев к проблеме](/rest/issues#list-issue-comments)
* [Создание комментария к проблеме](/rest/issues#create-an-issue-comment)
* [Список комментариев к проблемам для репозитория](/rest/issues#list-issue-comments-for-a-repository)
* [Получение комментария к проблеме](/rest/issues#get-an-issue-comment)
* [Обновление комментария к проблеме](/rest/issues#update-an-issue-comment)
* [Удаление комментария к проблеме](/rest/issues#delete-an-issue-comment)

#### События проблемы

* [Список проблемных событий](/rest/issues#list-issue-events)

#### Временная шкала проблем

* [Список событий временной шкалы для проблемы](/rest/issues#list-timeline-events-for-an-issue)

#### Проблемы

* [Список проблем, назначенных пользователю, прошедшему проверку подлинности](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [Список уполномоченных](/rest/issues#list-assignees)
* [Проверка возможности назначения пользователя](/rest/issues#check-if-a-user-can-be-assigned)
* [Список проблем репозитория](/rest/issues#list-repository-issues)
* [Создание проблемы](/rest/issues#create-an-issue)
* [Получение проблемы](/rest/issues#get-an-issue)
* [Обновление проблемы](/rest/issues#update-an-issue)
* [Блокировка проблемы](/rest/issues#lock-an-issue)
* [Разблокировка проблемы](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
#### Задания

* [Получение задания для выполнения рабочего процесса](/rest/actions#get-a-job-for-a-workflow-run)
* [Скачивание журналов заданий для запуска рабочего процесса](/rest/actions#download-job-logs-for-a-workflow-run)
* [Список заданий для запуска рабочего процесса](/rest/actions#list-jobs-for-a-workflow-run) {% endif %}

#### Метки

* [Список меток для проблемы](/rest/issues#list-labels-for-an-issue)
* [Добавление меток для проблемы](/rest/issues#add-labels-to-an-issue)
* [Настройка меток для проблемы](/rest/issues#set-labels-for-an-issue)
* [Удаление всех меток из проблемы](/rest/issues#remove-all-labels-from-an-issue)
* [Удаление метки из проблемы](/rest/issues#remove-a-label-from-an-issue)
* [Список меток для репозитория](/rest/issues#list-labels-for-a-repository)
* [Создание Label](/rest/issues#create-a-label)
* [Получение метки](/rest/issues#get-a-label)
* [Обновление метки](/rest/issues#update-a-label)
* [Удаление метки](/rest/issues#delete-a-label)
* [Получение метки для каждой проблемы в вехе](/rest/issues#list-labels-for-issues-in-a-milestone)

#### Лицензии

* [Получение всех часто используемых лицензий](/rest/licenses#get-all-commonly-used-licenses)
* [Получение лицензии](/rest/licenses#get-a-license)

#### Markdown

* [Преобразование для просмотра документа Markdown](/rest/markdown#render-a-markdown-document)
* [Преобразование для просмотра документа Markdown в режиме RAW](/rest/markdown#render-a-markdown-document-in-raw-mode)

#### Meta

* [Meta](/rest/meta#meta)

#### Вехи

* [Список вех](/rest/issues#list-milestones)
* [Создание вехи](/rest/issues#create-a-milestone)
* [Получение вехи](/rest/issues#get-a-milestone)
* [Обновление вехи](/rest/issues#update-a-milestone)
* [Удаление вехи](/rest/issues#delete-a-milestone)

#### Перехватчики организации

* [Список веб-перехватчиков организации](/rest/orgs#webhooks/#list-organization-webhooks)
* [Создание веб-перехватчика организации](/rest/orgs#webhooks/#create-an-organization-webhook)
* [Получение веб-перехватчика организации](/rest/orgs#webhooks/#get-an-organization-webhook)
* [Обновление веб-перехватчика организации](/rest/orgs#webhooks/#update-an-organization-webhook)
* [Удаление веб-перехватчика организации](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [Проверка связи с веб-перехватчиком организации](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
#### Приглашения организации

* [Список ожидающих приглашений организаций](/rest/orgs#list-pending-organization-invitations)
* [Создание приглашений организации](/rest/orgs#create-an-organization-invitation)
* [Список команд приглашений организаций](/rest/orgs#list-organization-invitation-teams) {% endif %}

#### Участники организации

* [Список участников организации](/rest/orgs#list-organization-members)
* [Проверка членства пользователя в организации](/rest/orgs#check-organization-membership-for-a-user)
* [Удаление участника организации](/rest/orgs#remove-an-organization-member)
* [Получение членства в организации для пользователя](/rest/orgs#get-organization-membership-for-a-user)
* [Настройка членства в организации для пользователя](/rest/orgs#set-organization-membership-for-a-user)
* [Удаление членства в организации для пользователя](/rest/orgs#remove-organization-membership-for-a-user)
* [Список участников общественных организаций](/rest/orgs#list-public-organization-members)
* [Проверка членства пользователя в общественной организации](/rest/orgs#check-public-organization-membership-for-a-user)
* [Настройка членства в общедоступной организации для пользователя, прошедшего проверку подлинности](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [Удаление членства в общедоступной организации для пользователя, прошедшего проверку подлинности](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

#### Организация сторонних участников совместной работы

* [Список сторонних участников совместной работы для организации](/rest/orgs#list-outside-collaborators-for-an-organization)
* [Преобразование участника организации в стороннего участника совместной работы](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [Удаление стороннего участника совместной работы из организации](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
#### Перехватчики предварительного получения организации

* [Список перехватчиков предварительного получения для организации](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Получение перехватчика предварительного получения для организации](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Обновление принудительного использования перехватчика предварительного получения для организации](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Отмена принудительного использования перехватчика предварительного получения для организации](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) {% endif %}

#### Командные проекты организации

* [Список командных проектов](/rest/teams#list-team-projects)
* [Проверка разрешений группы для проекта](/rest/teams#check-team-permissions-for-a-project)
* [Добавление или обновление разрешений для командного проекта](/rest/teams#add-or-update-team-project-permissions)
* [Удаление проекта из команды](/rest/teams#remove-a-project-from-a-team)

#### Репозитории команды организации

* [Список репозиториев команды](/rest/teams#list-team-repositories)
* [Проверка разрешений команды для репозитория](/rest/teams#check-team-permissions-for-a-repository)
* [Добавление или обновление разрешений на репозиторий команды](/rest/teams#add-or-update-team-repository-permissions)
* [Удаление репозитория из команды](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
#### Синхронизация команды организации

* [Список групп IdP для команды](/rest/teams#list-idp-groups-for-a-team)
* [Создание или обновление групповых подключений IdP](/rest/teams#create-or-update-idp-group-connections)
* [Список групп IdP для организации](/rest/teams#list-idp-groups-for-an-organization) {% endif %}

#### Команды организации

* [Список команд](/rest/teams#list-teams)
* [Создание команды](/rest/teams#create-a-team)
* [Получение команды по имени](/rest/teams#get-a-team-by-name)
* [Обновление команды](/rest/teams#update-a-team)
* [Удаление команды](/rest/teams#delete-a-team) {% ifversion fpt or ghec %}
* [Список ожидающих приглашений в команду](/rest/teams#list-pending-team-invitations) {% endif %}
* [Список членов команды](/rest/teams#list-team-members)
* [Получение членства в команде для пользователя](/rest/teams#get-team-membership-for-a-user)
* [Добавление или обновление членства в команде для пользователя](/rest/teams#add-or-update-team-membership-for-a-user)
* [Удаление членства в команде для пользователя](/rest/teams#remove-team-membership-for-a-user)
* [Список дочерних команд](/rest/teams#list-child-teams)
* [Список команд для пользователя, прошедшего проверку подлинности](/rest/teams#list-teams-for-the-authenticated-user)

#### Организации

* [Список организаций](/rest/orgs#list-organizations)
* [Добавление организации](/rest/orgs#get-an-organization)
* [Обновление организации](/rest/orgs#update-an-organization)
* [Список членства в организациях для пользователя, прошедшего проверку подлинности](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [Получение членства в организации для пользователя, прошедшего проверку подлинности](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [Обновление членства в организации для пользователя, прошедшего проверку подлинности](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [Список организаций для пользователя, прошедшего проверку подлинности](/rest/orgs#list-organizations-for-the-authenticated-user)
* [Список организаций для пользователя](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
#### Авторизация учетных данных организаций

* [Список авторизаций системы единого входа SAML для организации](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [Удаление авторизации системы единого входа SAML для организации](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### Организации Scim

* [Список подготовленных удостоверений SCIM](/rest/scim#list-scim-provisioned-identities)
* [Подготовка к работе и приглашение пользователя SCIM](/rest/scim#provision-and-invite-a-scim-user)
* [Получение информации о подготовке к работе SCIM для пользователя](/rest/scim#get-scim-provisioning-information-for-a-user)
* [Настройка информации SCIM для подготовленного к работе пользователя](/rest/scim#set-scim-information-for-a-provisioned-user)
* [Обновление атрибута пользователя SCIM](/rest/scim#update-an-attribute-for-a-scim-user)
* [Удаление пользователя SCIM из организации](/rest/scim#delete-a-scim-user-from-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### Импорт источников

* [Получение сведений о состоянии импорта](/rest/migrations#get-an-import-status)
* [Запуск импорта](/rest/migrations#start-an-import)
* [Обновление импорта](/rest/migrations#update-an-import)
* [Отмена импорта](/rest/migrations#cancel-an-import)
* [Получение авторов фиксации](/rest/migrations#get-commit-authors)
* [Сопоставление автора фиксации](/rest/migrations#map-a-commit-author)
* [Получение больших файлов](/rest/migrations#get-large-files)
* [Обновление настроек Git LFS](/rest/migrations#update-git-lfs-preference) {% endif %}

#### Участники совместной работы проекта

* [Список участников совместной работы проекта](/rest/projects#list-project-collaborators)
* [Добавление участника совместной работы проекта](/rest/projects#add-project-collaborator)
* [Удалить участника совместной работы проекта](/rest/projects#remove-project-collaborator)
* [Получить разрешение проекта для пользователя](/rest/projects#get-project-permission-for-a-user)

#### Проекты

* [Список проектов организации](/rest/projects#list-organization-projects)
* [Создание проекта организации](/rest/projects#create-an-organization-project)
* [Получение проекта](/rest/projects#get-a-project)
* [Обновление проекта](/rest/projects#update-a-project)
* [Удаление проекта](/rest/projects#delete-a-project)
* [Список столбцов проекта](/rest/projects#list-project-columns)
* [Создание столбца проекта](/rest/projects#create-a-project-column)
* [Получение столбца проекта](/rest/projects#get-a-project-column)
* [Обновление столбца проекта](/rest/projects#update-a-project-column)
* [Удаление столбца проекта](/rest/projects#delete-a-project-column)
* [Список карточек проекта](/rest/projects#list-project-cards)
* [Создание карточки проекта](/rest/projects#create-a-project-card)
* [Перемещение столбца проекта](/rest/projects#move-a-project-column)
* [Получение карточки проекта](/rest/projects#get-a-project-card)
* [Обновление карточки проекта](/rest/projects#update-a-project-card)
* [Удаление карточки проекта](/rest/projects#delete-a-project-card)
* [Перемещение карточки проекта](/rest/projects#move-a-project-card)
* [Список проектов репозитория](/rest/projects#list-repository-projects)
* [Создание проекта репозитория](/rest/projects#create-a-repository-project)

#### Комментарии к вытягиванию

* [Список комментариев к проверке в запросе на вытягивание](/rest/pulls#list-review-comments-on-a-pull-request)
* [Создание комментария к проверке для запроса на вытягивание](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [Список комментариев к проверке в репозитории](/rest/pulls#list-review-comments-in-a-repository)
* [Получение комментария к проверке для запроса на вытягивание](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [Обновление комментария к проверке для запроса на вытягивание](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [Удаление комментария к проверке для запроса на вытягивание](/rest/pulls#delete-a-review-comment-for-a-pull-request)

#### События проверки запроса на вытягивание

* [Закрытие проверки для запроса на вытягивание](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [Отправка проверки для запроса на вытягивание](/rest/pulls#submit-a-review-for-a-pull-request)

#### Запросы на проверку запроса на вытягивание

* [Список запрашиваемых рецензентов для запроса на вытягивание](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [Запрашивание у рецензентов запроса на вытягивание](/rest/pulls#request-reviewers-for-a-pull-request)
* [Удаление запрашиваемых рецензентов из запроса на вытягивание](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

#### Проверки запросов на вытягивание

* [Список проверок для запроса на вытягивание](/rest/pulls#list-reviews-for-a-pull-request)
* [Создание проверки для запроса на вытягивание](/rest/pulls#create-a-review-for-a-pull-request)
* [Получение проверки для запроса на вытягивание](/rest/pulls#get-a-review-for-a-pull-request)
* [Обновление проверки для запроса на вытягивание](/rest/pulls#update-a-review-for-a-pull-request)
* [Список комментариев для проверки запроса на вытягивание](/rest/pulls#list-comments-for-a-pull-request-review)

#### Запросы данных

* [Список запросов на вытягивание](/rest/pulls#list-pull-requests)
* [Создание запроса на включение изменений](/rest/pulls#create-a-pull-request)
* [Получение запроса на вытягивание](/rest/pulls#get-a-pull-request)
* [Обновление запроса на вытягивание](/rest/pulls#update-a-pull-request)
* [Список фиксаций в запросе на вытягивание](/rest/pulls#list-commits-on-a-pull-request)
* [Список файлов запросов на вытягивание](/rest/pulls#list-pull-requests-files)
* [Проверка объединения запроса на вытягивание](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [Объединение запроса на вытягивание (кнопка "Объединить")](/rest/pulls#merge-a-pull-request)

#### Реакции

* [Удаление реакции](/rest/reactions)
* [Список реакций на комментарий фиксации](/rest/reactions#list-reactions-for-a-commit-comment)
* [Создание реакции на комментарий фиксации](/rest/reactions#create-reaction-for-a-commit-comment)
* [Список реакций на проблему](/rest/reactions#list-reactions-for-an-issue)
* [Создание реакции на проблему](/rest/reactions#create-reaction-for-an-issue)
* [Список реакций на комментарий к проблеме](/rest/reactions#list-reactions-for-an-issue-comment)
* [Создание реакции на комментарий к проблеме](/rest/reactions#create-reaction-for-an-issue-comment)
* [Список реакций на комментарий к проверке запроса на вытягивание](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [Создание реакции на комментарий к проверке запроса на вытягивание](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [Список реакций на комментарий в групповом обсуждении](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [Создание реакции на комментарий в групповом обсуждении](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [Список реакций для группового обсуждения](/rest/reactions#list-reactions-for-a-team-discussion)
* [Создание реакции для группового обсуждения](/rest/reactions#create-reaction-for-a-team-discussion)
* [Удаление реакции на комментарий фиксации](/rest/reactions#delete-a-commit-comment-reaction)
* [Удаление реакции на проблему](/rest/reactions#delete-an-issue-reaction)
* [Удаление реакции на комментарий к фиксации](/rest/reactions#delete-an-issue-comment-reaction)
* [Удаление реакции на комментарий к запросу на вытягивание](/rest/reactions#delete-a-pull-request-comment-reaction)
* [Удаление реакции на групповое обсуждение](/rest/reactions#delete-team-discussion-reaction)
* [Удаление реакции на комментарий в групповом обсуждении](/rest/reactions#delete-team-discussion-comment-reaction)

#### Репозитории

* [Список репозиториев организации](/rest/repos#list-organization-repositories)
* [Создание репозитория для пользователя, прошедшего проверку подлинности](/rest/repos#create-a-repository-for-the-authenticated-user)
* [Получение репозитория](/rest/repos#get-a-repository)
* [Обновление репозитория](/rest/repos#update-a-repository)
* [Удаление репозитория](/rest/repos#delete-a-repository)
* [Сравнение двух фиксаций](/rest/commits#compare-two-commits)
* [Список участников репозитория](/rest/repos#list-repository-contributors)
* [Список вилок](/rest/repos#list-forks)
* [Создание вилки](/rest/repos#create-a-fork)
* [Список языков репозитория](/rest/repos#list-repository-languages)
* [Список меток репозитория](/rest/repos#list-repository-tags)
* [Список команд репозитория](/rest/repos#list-repository-teams)
* [Перенос репозитория](/rest/repos#transfer-a-repository)
* [Список общедоступных репозиториев](/rest/repos#list-public-repositories)
* [Список репозиториев для пользователя, прошедшего проверку подлинности](/rest/repos#list-repositories-for-the-authenticated-user)
* [Список репозиториев для пользователя](/rest/repos#list-repositories-for-a-user)
* [Создание репозитория с использованием шаблона репозитория](/rest/repos#create-repository-using-a-repository-template)

#### Деятельность репозитория

* [Список звездочетов](/rest/activity#list-stargazers)
* [Список наблюдателей](/rest/activity#list-watchers)
* [Список репозиториев, отмеченных пользователем](/rest/activity#list-repositories-starred-by-a-user)
* [Проверка того, помечен ли репозиторий звездочкой пользователем, прошедшим проверку подлинности](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Пометка репозитория звездочкой для пользователя, прошедшего проверку подлинности](/rest/activity#star-a-repository-for-the-authenticated-user)
* [Снятие пометки звездочкой с репозитория для пользователя, прошедшего проверку подлинности](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [Список репозиториев, просмотренных пользователем](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
#### Автоматические исправления безопасности репозитория

* [Включение автоматических исправлений безопасности](/rest/repos#enable-automated-security-fixes)
* [Отключение автоматических исправлений безопасности](/rest/repos#disable-automated-security-fixes) {% endif %}

#### Ветви репозитория

* [Список ветвей](/rest/branches#list-branches)
* [Получение ветви](/rest/branches#get-a-branch)
* [Получение защиты ветвей](/rest/branches#get-branch-protection)
* [Обновление защиты ветвей](/rest/branches#update-branch-protection)
* [Удаление защиты ветвей](/rest/branches#delete-branch-protection)
* [Получение защиты ветви администратора](/rest/branches#get-admin-branch-protection)
* [Настройка защиты ветви администратора](/rest/branches#set-admin-branch-protection)
* [Удаление защиты ветви администратора](/rest/branches#delete-admin-branch-protection)
* [Получение защиты проверки запросов на вытягивание](/rest/branches#get-pull-request-review-protection)
* [Обновление защиты проверки запросов на вытягивание](/rest/branches#update-pull-request-review-protection)
* [Удаление защиты проверки запросов на вытягивание](/rest/branches#delete-pull-request-review-protection)
* [Получение защиты сигнатуры фиксации](/rest/branches#get-commit-signature-protection)
* [Создание защиты сигнатуры фиксации](/rest/branches#create-commit-signature-protection)
* [Удаление защиты сигнатуры фиксации](/rest/branches#delete-commit-signature-protection)
* [Получение защиты проверки состояния](/rest/branches#get-status-checks-protection)
* [Обновление защиты проверки состояния](/rest/branches#update-status-check-protection)
* [Удаление защиты проверки состояния](/rest/branches#remove-status-check-protection)
* [Получение всех контекстов проверки состояния](/rest/branches#get-all-status-check-contexts)
* [Добавление контекстов проверки состояния](/rest/branches#add-status-check-contexts)
* [Добавление контекстов проверки состояния](/rest/branches#set-status-check-contexts)
* [Удаление контекстов проверки состояния](/rest/branches#remove-status-check-contexts)
* [Получение ограничений доступа](/rest/branches#get-access-restrictions)
* [Удаление ограничений доступа](/rest/branches#delete-access-restrictions)
* [Список команд с доступом к защищенной ветви](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [Добавление ограничений доступа для команды](/rest/branches#add-team-access-restrictions)
* [Настройка ограничения доступа для команды](/rest/branches#set-team-access-restrictions)
* [Удаление ограничения доступа для команды](/rest/branches#remove-team-access-restrictions)
* [Список пользовательских ограничений защищенной ветви](/rest/repos#list-users-with-access-to-the-protected-branch)
* [Добавление ограничений доступа пользователя](/rest/branches#add-user-access-restrictions)
* [Настройка ограничений доступа пользователя](/rest/branches#set-user-access-restrictions)
* [Удаление ограничений доступа пользователя](/rest/branches#remove-user-access-restrictions)
* [Слияние ветви](/rest/branches#merge-a-branch)

#### Участники совместной работы репозитория

* [Список участников совместной работы репозитория](/rest/collaborators#list-repository-collaborators)
* [Проверка того, является ли пользователь участником совместной работы репозитория](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [Добавление участника совместной работы репозитория](/rest/collaborators#add-a-repository-collaborator)
* [Удаление участника совместной работы репозитория](/rest/collaborators#remove-a-repository-collaborator)
* [Получение разрешений репозитория для пользователя](/rest/collaborators#get-repository-permissions-for-a-user)

#### Комментарии фиксации репозитория

* [Список комментариев фиксации для репозитория](/rest/commits#list-commit-comments-for-a-repository)
* [Получение комментария фиксации](/rest/commits#get-a-commit-comment)
* [Обновление комментария фиксации](/rest/commits#update-a-commit-comment)
* [Удаление комментария фиксации](/rest/commits#delete-a-commit-comment)
* [Список комментариев фиксации](/rest/commits#list-commit-comments)
* [Создание комментария фиксации](/rest/commits#create-a-commit-comment)

#### Фиксации репозитория

* [Вывод списка фиксаций](/rest/commits#list-commits)
* [Получение фиксации](/rest/commits#get-a-commit)
* [Список ветвей для головной фиксации](/rest/commits#list-branches-for-head-commit)
* [Список запросов на вытягивание, связанных с фиксацией](/rest/repos#list-pull-requests-associated-with-commit)

#### Сообщество репозитория

* [Получение правил поведения для репозитория](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository) {% ifversion fpt or ghec %}
* [Получение метрик профиля сообщества](/rest/metrics#get-community-profile-metrics) {% endif %}

#### Содержимое репозитория

* [Скачивание архива репозитория](/rest/repos#download-a-repository-archive)
* [Получение содержимого репозитория](/rest/repos#get-repository-content)
* [Создание или обновление содержимого файла](/rest/repos#create-or-update-file-contents)
* [Удаление файла](/rest/repos#delete-a-file)
* [Получение README репозитория](/rest/repos#get-a-repository-readme)
* [Получение лицензии на репозиторий](/rest/licenses#get-the-license-for-a-repository)

#### Сообщения о событиях репозитория

* [Создание события отправки репозитория](/rest/repos#create-a-repository-dispatch-event)

#### Перехватчики репозитория

* [Список веб-перехватчиков репозитория](/rest/webhooks#list-repository-webhooks)
* [Создание веб-перехватчика репозитория](/rest/webhooks#create-a-repository-webhook)
* [Получение веб-перехватчика репозитория](/rest/webhooks#get-a-repository-webhook)
* [Обновление веб-перехватчика репозитория](/rest/webhooks#update-a-repository-webhook)
* [Удаление веб-перехватчика репозитория](/rest/webhooks#delete-a-repository-webhook)
* [Проверка связи с веб-перехватчиком репозитория](/rest/webhooks#ping-a-repository-webhook)
* [Тестирование отправки веб-перехватчика-репозитория](/rest/repos#test-the-push-repository-webhook)

#### Приглашения репозитория

* [Список приглашений репозитория](/rest/collaborators#list-repository-invitations)
* [Обновление приглашений репозитория](/rest/collaborators#update-a-repository-invitation)
* [Удаление приглашения репозитория](/rest/collaborators#delete-a-repository-invitation)
* [Список приглашений в репозиторий для пользователя, прошедшего проверку подлинности](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [Принятие приглашения в репозиторий](/rest/collaborators#accept-a-repository-invitation)
* [Отклонение приглашения в репозиторий](/rest/collaborators#decline-a-repository-invitation)

#### Ключи репозитория

* [Список ключей развертывания](/rest/deployments#list-deploy-keys)
* [Создание ключа развертывания](/rest/deployments#create-a-deploy-key)
* [Получение ключа развертывания](/rest/deployments#get-a-deploy-key)
* [Удаление ключа развертывания](/rest/deployments#delete-a-deploy-key)

#### Страницы репозитория

* [Получение сайта GitHub Pages](/rest/pages#get-a-github-pages-site)
* [Создание сайта GitHub Pages](/rest/pages#create-a-github-pages-site)
* [Обновление информации о сайте GitHub Pages](/rest/pages#update-information-about-a-github-pages-site)
* [Удаление сайта GitHub Pages](/rest/pages#delete-a-github-pages-site)
* [Список сборок GitHub Pages](/rest/pages#list-github-pages-builds)
* [Запрос сборки GitHub Pages](/rest/pages#request-a-github-pages-build)
* [Получение сборки GitHub Pages](/rest/pages#get-github-pages-build)
* [Получение последней сборки страниц](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
#### Перехватчики предварительного получения репозитория

* [Список перехватчиков предварительного получения для репозитория](/enterprise/user/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Получение перехватчика предварительного получения для репозитория](/enterprise/user/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Обновление принудительного использования перехватчика предварительного получения для репозитория](/enterprise/user/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Удаление принудительного использования перехватчика предварительного получения для репозитория](/enterprise/user/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) {% endif %}

#### Выпуски репозитория

* [Вывод списка выпусков](/rest/repos#list-releases)
* [Создание выпуска](/rest/repos#create-a-release)
* [Получение выпуска](/rest/repos#get-a-release)
* [Обновление выпуска](/rest/repos#update-a-release)
* [Удаление выпуска](/rest/repos#delete-a-release)
* [Список ресурсов выпуска](/rest/repos#list-release-assets)
* [Получение ресурса выпуска](/rest/repos#get-a-release-asset)
* [Обновление ресурса выпуска](/rest/repos#update-a-release-asset)
* [Удаление ресурса выпуска](/rest/repos#delete-a-release-asset)
* [Получение последней версии](/rest/repos#get-the-latest-release)
* [Получение выпуска по имени метки](/rest/repos#get-a-release-by-tag-name)

#### Статистика репозитория

* [Получение еженедельной активности фиксации](/rest/metrics#get-the-weekly-commit-activity)
* [Получение активности фиксации за последний год](/rest/metrics#get-the-last-year-of-commit-activity)
* [Получение всех действий по фиксации участников](/rest/metrics#get-all-contributor-commit-activity)
* [Получение еженедельного количества фиксаций](/rest/metrics#get-the-weekly-commit-count)
* [Получение почасового количества фиксаций за каждый день](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
#### Оповещения об уязвимостях репозитория

* [Включение оповещений об уязвимостях](/rest/repos#enable-vulnerability-alerts)
* [Отключение оповещений об уязвимостях](/rest/repos#disable-vulnerability-alerts) {% endif %}

#### Root

* [Корневая конечная точка](/rest#root-endpoint)
* [Эмодзи](/rest/emojis#emojis)
* [Получение сведений о состоянии ограничения скорости для пользователя, прошедшего проверку подлинности](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

#### Поиск

* [Поиск по коду](/rest/search#search-code)
* [Поиск фиксаций](/rest/search#search-commits)
* [Поиск меток](/rest/search#search-labels)
* [Поиск репозиториев](/rest/search#search-repositories)
* [Поиск тем](/rest/search#search-topics)
* [Поиск пользователей](/rest/search#search-users)

#### Состояния

* [Получение сведений о комбинированном состоянии для конкретной ссылки](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [Список состояний фиксации для справки](/rest/commits#list-commit-statuses-for-a-reference)
* [Создание состояния фиксации](/rest/commits#create-a-commit-status)

#### Обсуждения в команде

* [Список обсуждений](/rest/teams#list-discussions)
* [Создание обсуждения](/rest/teams#create-a-discussion)
* [Получение обсуждения](/rest/teams#get-a-discussion)
* [Обновление обсуждения](/rest/teams#update-a-discussion)
* [Удаление обсуждения](/rest/teams#delete-a-discussion)
* [Список комментариев к обсуждениям](/rest/teams#list-discussion-comments)
* [Создание комментария к обсуждению](/rest/teams#create-a-discussion-comment)
* [Получение комментария к обсуждению](/rest/teams#get-a-discussion-comment)
* [Обновление комментария к обсуждению](/rest/teams#update-a-discussion-comment)
* [Удаление комментария к обсуждению](/rest/teams#delete-a-discussion-comment)

#### Разделы

* [Получение всех тем репозитория](/rest/repos#get-all-repository-topics)
* [Замена всех тем репозитория](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
#### Трафик

* [Получение клонов репозитория](/rest/metrics#get-repository-clones)
* [Получение лучших путей перехода](/rest/metrics#get-top-referral-paths)
* [Получение лучших источников перехода](/rest/metrics#get-top-referral-sources)
* [Получение просмотров страницы](/rest/metrics#get-page-views) {% endif %}

{% ifversion fpt or ghec %}
#### Блокировка пользователей

* [Список пользователей, заблокированных пользователем, прошедшим проверку подлинности](/rest/users#list-users-blocked-by-the-authenticated-user)
* [Проверка того, не заблокирован ли пользователь другим пользователем, прошедшим проверку подлинности](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Список пользователей, заблокированных организацией](/rest/orgs#list-users-blocked-by-an-organization)
* [Проверка, не заблокирован ли пользователь организацией](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Блокировка пользователя в организации](/rest/orgs#block-a-user-from-an-organization)
* [Разблокировка пользователя в организации](/rest/orgs#unblock-a-user-from-an-organization)
* [Блокировка пользователя](/rest/users#block-a-user)
* [Разблокировка пользователя](/rest/users#unblock-a-user) {% endif %}

{% ifversion fpt or ghes or ghec %}
#### Электронные письма для пользователей

{% ifversion fpt or ghec %}
* [Настройка видимости основного адреса электронной почты для пользователя, прошедшего проверку подлинности](/rest/users#set-primary-email-visibility-for-the-authenticated-user) {% endif %}
* [Список адресов электронной почты для пользователя, прошедшего проверку подлинности](/rest/users#list-email-addresses-for-the-authenticated-user)
* [Добавление адресов электронной почты](/rest/users#add-an-email-address-for-the-authenticated-user)
* [Удаление адресов электронной почты](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [Список общедоступных адресов электронной почты для пользователя, прошедшего проверку подлинности](/rest/users#list-public-email-addresses-for-the-authenticated-user) {% endif %}

#### Подписчики пользователя

* [Список подписчиков пользователя](/rest/users#list-followers-of-a-user)
* [Список людей, на которых подписан пользователь](/rest/users#list-the-people-a-user-follows)
* [Проверка того, подписан ли на человека пользователь, прошедший проверку подлинности](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [Подписка на пользователя](/rest/users#follow-a-user)
* [Отмена подписки на пользователя](/rest/users#unfollow-a-user)
* [Проверка того, подписан ли пользователь на другого пользователя](/rest/users#check-if-a-user-follows-another-user)

#### Ключи GPG пользователя

* [Список ключей GPG для пользователя, прошедшего проверку подлинности](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [Создание ключа GPG для пользователя, прошедшего проверку подлинности](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [Получение ключа GPG для пользователя, прошедшего проверку подлинности](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [Удаление ключа GPG для пользователя, прошедшего проверку подлинности](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [Список ключей GPG для пользователя](/rest/users#list-gpg-keys-for-a-user)

#### Открытые ключи пользователя

* [Список открытых ключей SSH для пользователя, прошедшего проверку подлинности](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [Создание открытых ключей SSH для пользователя, прошедшего проверку подлинности](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [Получение открытых ключей SSH для пользователя, прошедшего проверку подлинности](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [Удаление открытых ключей SSH для пользователя, прошедшего проверку подлинности](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [Список открытых ключей для пользователя](/rest/users#list-public-keys-for-a-user)

#### Пользователи

* [Получение пользователя, прошедшего проверку подлинности](/rest/users#get-the-authenticated-user)
* [Список установок приложений, доступных для маркера доступа пользователя](/rest/apps#list-app-installations-accessible-to-the-user-access-token) {% ifversion fpt or ghec %}
* [Список подписок для пользователя, прошедшего проверку подлинности](/rest/apps#list-subscriptions-for-the-authenticated-user) {% endif %}
* [Список пользователей](/rest/users#list-users)
* [Получение пользователя](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
#### Выполнение рабочего процесса

* [Список выполнений рабочего процесса для репозитория](/rest/actions#list-workflow-runs-for-a-repository)
* [Получение выполнения рабочего процесса](/rest/actions#get-a-workflow-run)
* [Отмена выполнения рабочего процесса](/rest/actions#cancel-a-workflow-run)
* [Скачивание журналов выполнения рабочего процесса](/rest/actions#download-workflow-run-logs)
* [Удаление журналов выполнения рабочего процесса](/rest/actions#delete-workflow-run-logs)
* [Повторное выполнение рабочего процесса](/rest/actions#re-run-a-workflow)
* [Список выполнений рабочего процесса](/rest/actions#list-workflow-runs)
* [Получение данных об использовании выполнения рабочего процесса](/rest/actions#get-workflow-run-usage) {% endif %}

{% ifversion fpt or ghec %}
#### Рабочие процессы

* [Список рабочих процессов репозитория](/rest/actions#list-repository-workflows)
* [Получение рабочего процесса](/rest/actions#get-a-workflow)
* [Получение использования рабочего процесса](/rest/actions#get-workflow-usage) {% endif %}

## Дополнительные материалы

- [Сведения о проверке подлинности для {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)


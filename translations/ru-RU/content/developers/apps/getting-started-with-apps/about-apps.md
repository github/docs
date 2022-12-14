---
title: Сведения о приложениях
intro: 'Вы можете создавать интеграции с API-интерфейсами {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} для повышения гибкости и снижения уровня сложности в вашем рабочем процессе. {% ifversion fpt or ghec %} Вы также можете использовать интеграции совместно с другими пользователями в [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace).{% endif %}'
redirect_from:
  - /apps/building-integrationssetting-up-a-new-integration
  - /apps/building-integrations
  - /apps/getting-started-with-building-apps
  - /apps/about-apps
  - /developers/apps/about-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: a66af14f6047b2aff435ac4ac8dc83d7a1181e92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107360'
---
Приложения на {% data variables.product.prodname_dotcom %} позволяют автоматизировать и оптимизировать рабочий процесс. Вы можете создавать приложения для улучшения рабочего процесса.{% ifversion fpt or ghec %} Вы также можете публиковать приложения или продавать их в [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace). Дополнительные сведения о размещении приложения в {% data variables.product.prodname_marketplace %} см. в разделе [Начало работы с GitHub Marketplace](/marketplace/getting-started/).{% endif %}

{% data reusables.marketplace.github_apps_preferred %}, но GitHub поддерживает как {% data variables.product.prodname_oauth_apps %}, так и {% data variables.product.prodname_github_apps %}. Сведения о выборе типа приложения см. в разделе [Различия между приложениями GitHub и приложениями OAuth](/developers/apps/differences-between-github-apps-and-oauth-apps).

{% data reusables.apps.general-apps-restrictions %}

Пошаговое руководство по созданию {% data variables.product.prodname_github_app %} см. в разделе [Создание первого {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app).

## Сведения о {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} — самостоятельные сущности на GitHub. {% data variables.product.prodname_github_app %} выступает от своего имени, выполняя действия через API напрямую с помощью собственного удостоверения, то есть вам не нужна отдельная учетная запись бота или службы.

{% data variables.product.prodname_github_apps %} могут устанавливаться непосредственно в организациях и личных учетных записях и получать доступ к определенным репозиториям. Они поставляются со встроенными веб-перехватчиками и конкретными разрешениями. При настройке {% data variables.product.prodname_github_app %} можно выбрать репозитории, к которым у него должен быть доступ. Например, можно настроить приложение с именем `MyGitHub` , которое записывает проблемы в `octocat` репозитории и _только_ репозиторий `octocat` . Чтобы установить {% data variables.product.prodname_github_app %}, необходимо быть владельцем организации или администратором репозитория.

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %} должны где-то размещаться. Пошаговые инструкции, касающиеся серверов и размещения, см. в разделе [Создание первого {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app).

Чтобы улучшить рабочий процесс, можно создать {% data variables.product.prodname_github_app %}, содержащее несколько скриптов или все приложение, а затем подключить это приложение к другим средствам. Например, {% data variables.product.prodname_github_apps %} можно подключать к GitHub, Slack, другим собственным приложениям, почтовым программам или другим API.

При создании {% data variables.product.prodname_github_apps %} учитывайте перечисленные ниже особенности.

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* {% data variables.product.prodname_github_app %} должно выполнять действия независимо от пользователя (если приложение не использует маркер ["пользователь-сервер"](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests)). {% data reusables.apps.expiring_user_authorization_tokens %}

* {% data variables.product.prodname_github_app %} должно быть интегрировано с определенными репозиториями.
* {% data variables.product.prodname_github_app %} должно быть подключено к личной учетной записи или к организации.
* Не ожидайте от {% data variables.product.prodname_github_app %} тех же возможностей, которые есть у пользователя.
* Не используйте {% data variables.product.prodname_github_app %}, если вам просто нужна служба входа с помощью GitHub. Однако {% data variables.product.prodname_github_app %} может использовать [процесс идентификации пользователей](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) для выполнения входа _и_ других действий.
* Не создавайте {% data variables.product.prodname_github_app %}, если вы хотите действовать _только_ как пользователь GitHub и делать все, что может пользователь.{% ifversion fpt or ghec %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

Чтобы приступить к разработке {% data variables.product.prodname_github_apps %}, начните с раздела [Создание {% data variables.product.prodname_github_app %}](/apps/building-github-apps/creating-a-github-app/).{% ifversion fpt or ghec %} Сведения об использовании манифестов {% data variables.product.prodname_github_app %}, которые позволяют пользователям создавать предварительно настроенные {% data variables.product.prodname_github_apps %}, см. в разделе [Создание {% data variables.product.prodname_github_apps %} на основе манифеста](/apps/building-github-apps/creating-github-apps-from-a-manifest/).{% endif %}

## Сведения о {% data variables.product.prodname_oauth_apps %}

OAuth2 — это протокол, который позволяет внешним приложениям запрашивать авторизацию для доступа к частным сведениям в учетной записи пользователя {% data variables.product.prodname_dotcom %} без использования пароля. Это предпочтительнее, чем обычная проверка подлинности, так как токены могут быть ограничены определенными типами данных и могут отзываться пользователями в любое время.

{% data reusables.apps.deletes_ssh_keys %}

{% data variables.product.prodname_oauth_app %} использует {% data variables.product.prodname_dotcom %} в качестве поставщика удостоверений для проверки подлинности пользователя, который предоставляет доступ к приложению. Это означает, что когда пользователь предоставляет доступ к {% data variables.product.prodname_oauth_app %}, он предоставляет разрешения для _всех_ репозиториев, к которым у него есть доступ в учетной записи, а также ко всем организациям, к которым он относится и которые не заблокировали сторонний доступ.

Создание {% data variables.product.prodname_oauth_app %} — хороший вариант, если вам нужно реализовать более сложные процессы, для которых недостаточно простого скрипта. Обратите внимание, что {% data variables.product.prodname_oauth_apps %} должны где-то размещаться.

При создании {% data variables.product.prodname_oauth_apps %} учитывайте перечисленные ниже особенности.

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* {% data variables.product.prodname_oauth_app %} всегда должно выступать в качестве прошедшего проверку подлинности пользователя {% data variables.product.prodname_dotcom %} при выполнении любых действий на {% data variables.product.prodname_dotcom %} (например, при предоставлении уведомлений пользователям).
* {% data variables.product.prodname_oauth_app %} можно использовать в качестве поставщика удостоверений. Для этого нужно включить функцию "Вход с помощью {% data variables.product.prodname_dotcom %}" для пользователя, прошедшего проверку подлинности.
* Не создавайте {% data variables.product.prodname_oauth_app %}, если приложение должно работать с одним репозиторием. При использовании области OAuth `repo` {% data variables.product.prodname_oauth_apps %} может работать со _всеми_ репозиториями пользователя, прошедшего проверку подлинности.
* Не создавайте {% data variables.product.prodname_oauth_app %} для работы от имени вашей команды или организации. {% data variables.product.prodname_oauth_apps %} аутентифицируются как один пользователь, поэтому если пользователь создаст {% data variables.product.prodname_oauth_app %} для организации, а затем покинет организацию, доступа к приложению не будет ни у кого.{% ifversion fpt or ghec %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

Дополнительные сведения о {% data variables.product.prodname_oauth_apps %} см. в разделах [Создание {% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/creating-an-oauth-app/) и [Регистрация приложения](/rest/guides/basics-of-authentication#registering-your-app).

## {% данных variables.product.pat_generic_caps %}s

[{% данных variables.product.pat_generic %}](/articles/creating-a-personal-access-token-for-the-command-line/) — это строка символов, которая работает аналогично [маркеру OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/), в который можно указать разрешения с помощью [областей](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). {% данных variables.product.pat_generic %} также похож на пароль, но у вас может быть много из них, и вы можете отозвать доступ к каждому из них в любое время.

Например, можно включить {% данных variables.product.pat_generic %} для записи в репозитории. При выполнении команды cURL или написании скрипта, [создающего проблему](/rest/reference/issues#create-an-issue) в репозитории, необходимо передать {% данных variables.product.pat_generic %} для проверки подлинности. Вы можете хранить {% данных variables.product.pat_generic %} в качестве переменной среды, чтобы избежать ввода данных при каждом использовании.

Помните об этих идеях при использовании {% данных variables.product.pat_generic %}s:

* Маркер должен представлять только вас.
* Вы можете выполнять однократные запросы cURL.
* Вы можете выполнять личные скрипты.
* Не настраивайте скрипт для использования от имени всей команды или организации.
* Не настраивайте общую личную учетную запись для работы в качестве пользователя бота.
* Предоставьте маркеру минимальные привилегии, необходимые ему.
* Задайте срок действия для {% данных variables.product.pat_generic %}s, чтобы обеспечить безопасность информации.

## Выбор создаваемой интеграции

Прежде чем приступить к созданию интеграции, необходимо определить оптимальный способ доступа, проверки подлинности и взаимодействия с интерфейсами API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. На следующем рисунке приведены некоторые вопросы о том, следует ли использовать {% данных variables.product.pat_generic %}s, {% данных variables.product.prodname_github_apps %}или {% данных variables.product.prodname_oauth_apps %} для интеграции.

![Базовый процесс выбора типа приложений](/assets/images/intro-to-apps-flow.png)

Дайте ответы на следующие вопросы о том, как должна работать интеграция и к чему требуется доступ:

* Будет ли интеграция действовать только от моего имени или работать скорее как приложение?
* Должна ли она действовать независимо от меня как самостоятельная сущность?
* Будет ли она иметь доступ ко всему, к чему есть доступ у меня, или нужно ограничить доступ?
* Будет ли она простой или сложной? Например, {% данных variables.product.pat_generic %}s хорошо подходит для простых скриптов и cURL, тогда как {% данных variables.product.prodname_oauth_app %} может обрабатывать более сложные скрипты.

## Запрос поддержки

{% data reusables.support.help_resources %}

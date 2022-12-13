---
title: Интеграция Jira с личными проектами
intro: 'Вы можете интегрировать Jira Cloud с личной учетной записью для сканирования фиксаций и запросов на вытягивание, создав соответствующие метаданные и гиперссылки в любых упомянутых проблемах Jira.'
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: bc88d865cd9c1c88caf5498eab330b6f11cd2ec0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165168'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
1. Нажмите **Регистрация нового приложения**.
2. В поле **Имя приложения** введите "Jira".
3. В поле **URL-адрес домашней страницы** введите полный URL-адрес экземпляра Jira.
4. В поле **URL-адрес обратного вызова авторизации** введите полный URL-адрес экземпляра Jira.
5. Нажмите кнопку **Зарегистрировать приложение**.
![Кнопка "Регистрация приложения"](/assets/images/help/oauth/register-application-button.png)
8. В разделе **Приложения разработчика**, обратите внимание на значения "Идентификатор клиента" и "Секрет клиента".
![Идентификатор и секрет клиента](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## Дополнительные материалы

- [Интеграция Jira с корпоративной панелью проекта](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Подключение Jira Cloud к GitHub</a> (документация Atlassian)

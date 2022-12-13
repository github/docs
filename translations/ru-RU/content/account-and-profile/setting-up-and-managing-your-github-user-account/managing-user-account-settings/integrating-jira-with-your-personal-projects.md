---
title: Интеграция Jira с личными проектами
intro: You can integrate Jira Cloud with your personal account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues.
redirect_from:
- /articles/integrating-jira-with-your-personal-projects
- /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: a9106d979aa0f219bd20fc5b27042dfe8e81fc8c
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088893"
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
1. Нажмите **Регистрация нового приложения**.
2. В поле **Имя приложения** введите "Jira".
3. В поле **URL-адрес домашней страницы** введите полный URL-адрес экземпляра Jira.
4. В поле **URL-адрес обратного вызова авторизации** введите полный URL-адрес экземпляра Jira.
5. Нажмите кнопку **Зарегистрировать приложение**.
![Кнопка "Зарегистрировать приложение"](/assets/images/help/oauth/register-application-button.png)
8. В разделе **Приложения разработчика**, обратите внимание на значения "Идентификатор клиента" и "Секрет клиента".
![Идентификатор и секрет клиента](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## <a name="further-reading"></a>Дополнительные материалы

- [Интеграция Jira с корпоративной панелью проекта](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Подключение Jira Cloud к GitHub</a> (документация Atlassian)

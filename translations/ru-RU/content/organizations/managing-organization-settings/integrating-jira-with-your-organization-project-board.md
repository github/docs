---
title: Интеграция Jira с корпоративной панелью проекта
intro: 'Вы можете интегрировать Jira Cloud с учетной записью организации для сканирования фиксаций и запросов на вытягивание, создав соответствующие метаданные и гиперссылки в любых упомянутых проблемах Jira.'
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/integrating-jira-with-your-organization-project-board
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira
ms.openlocfilehash: 0b773dc865373ab006f7c596b50ac81af5d6636a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125731'
---
{% ifversion ghes > 3.4 or ghae-issue-5658 %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. На боковой панели слева выберите **{% octicon "code" aria-label="The code icon" %} Параметры разработчика**, а затем щелкните **OAuth Apps**.
  ![Вкладка приложений OAuth на левой боковой панели](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Щелкните **Создать приложение OAuth App**.
{% else %} {% data reusables.user-settings.access_settings %}
1. В левой боковой панели в разделе **Параметры организации** щелкните название организации.
![Боковая панель "Имя организации"](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. На левой боковой панели в разделе **Параметры разработки** щелкните **Приложения OAuth**.
  ![Вкладка приложений OAuth на левой боковой панели](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Нажмите **Регистрация нового приложения**.
{% endif %}
1. В поле **Имя приложения** введите "Jira".
2. В поле **URL-адрес домашней страницы** введите полный URL-адрес экземпляра Jira.
3. В поле **URL-адрес обратного вызова авторизации** введите полный URL-адрес экземпляра Jira.
4. Нажмите кнопку **Зарегистрировать приложение**.
![Кнопка "Регистрация приложения"](/assets/images/help/oauth/register-application-button.png)
9. В разделе **Приложения, принадлежащие организации**, обратите внимание на значения "Идентификатор клиента" и "Секрет клиента".
![Идентификатор и секрет клиента](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## Дополнительные материалы

- [Интеграция Jira с личными проектами](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Подключение Jira Cloud к GitHub</a> (документация Atlassian)

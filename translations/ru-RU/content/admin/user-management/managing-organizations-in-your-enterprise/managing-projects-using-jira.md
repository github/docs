---
title: Управление проектами с помощью Jira
intro: 'Jira можно интегрировать с {% data variables.product.product_name %} для управления проектами.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira
  - /enterprise/admin/articles/project-management-using-jira
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-projects-using-jira
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Project management
shortTitle: Project management with Jira
ms.openlocfilehash: da1a02894bf8c916089de94a8642396ba7ceabe4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115144'
---
## Подключение Jira к организации {% data variables.product.prodname_enterprise %}

1. Войдите в учетную запись {% data variables.product.prodname_enterprise %} по адресу http[s]://[имя_узла]/login. Если вход уже выполнен, щелкните логотип {% data variables.product.prodname_dotcom %} в левом верхнем углу.
2. Щелкните значок профиля под логотипом {% data variables.product.prodname_dotcom %} и выберите организацию, к которой нужно подключить Jira.

  ![Выбор организации](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. Щелкните ссылку **Изменить параметры _имя организации_**.

  ![Изменение параметров организации](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. На левой боковой панели в разделе **Параметры разработки** щелкните **Приложения OAuth**.

  ![Выбор приложений OAuth](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. Нажмите кнопку **Зарегистрировать новое приложение**.

  ![Кнопка "Зарегистрировать новое приложение"](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. Задайте значения параметрам:
    - В поле **Имя приложения** введите "Jira" или любое имя, которое вы хотите использовать для идентификации экземпляра Jira.
    - В поле **URL-адрес домашней страницы** введите полный URL-адрес экземпляра Jira.
    - В поле **URL-адрес обратного вызова авторизации** введите полный URL-адрес экземпляра Jira.
7. Нажмите кнопку **Зарегистрировать приложение**.
8. Запомните отображаемые в верхней части страницы **идентификатор клиента** и **секрет клиента**. Они понадобятся для настройки экземпляра Jira.

## Настройка экземпляра Jira

1. В экземпляре Jira войдите в учетную запись с правами администратора.
2. В верхней части страницы щелкните значок параметров (шестеренка) и выберите **Приложения**.

  ![Выбор приложений в параметрах Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. На левой боковой панели в разделе **Интеграции** щелкните **Учетные записи DVCS**.

  ![Меню интеграций Jira — учетные записи DVCS](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. Щелкните **Связать учетную запись Bitbucket Cloud или {% data variables.product.prodname_dotcom %}** .

  ![Связывание учетной записи GitHub с Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. В модальном окне **Добавление новой учетной записи** задайте значения параметрам {% data variables.product.prodname_enterprise %}:
    - В раскрывающемся меню **Узел** выберите **{% data variables.product.prodname_enterprise %}** .
    - В поле **Команда или учетная запись пользователя** введите имя вашей организации {% data variables.product.prodname_enterprise %} или личной учетной записи.
    - В поле **Ключ OAuth** введите идентификатор клиента приложения разработчика {% data variables.product.prodname_enterprise %}.
    - В поле **Секрет OAuth** введите секрет клиента приложения разработчика {% data variables.product.prodname_enterprise %}.
    - Если вы не хотите связывать новые репозитории, принадлежащие вашей организации {% data variables.product.prodname_enterprise %} или учетной записи пользователя, снимите флажок **Автоматически связывать новые репозитории**.
    - Если вы не хотите включать смарт-фиксации, снимите флажок **Включить смарт-фиксации**.
    - Нажмите кнопку **Добавить**.
6. Просмотрите разрешения, которые вы предоставляете учетной записи {% data variables.product.prodname_enterprise %}, и щелкните **Авторизовать приложение**.
7. При необходимости введите пароль для продолжения.

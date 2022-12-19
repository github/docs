---
title: Приостановка и возобновление работы пользователей
redirect_from:
  - /enterprise/admin/articles/suspending-a-user
  - /enterprise/admin/articles/unsuspending-a-user
  - /enterprise/admin/articles/viewing-suspended-users
  - /enterprise/admin/articles/suspended-users
  - /enterprise/admin/articles/suspending-and-unsuspending-users
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
  - /admin/user-management/suspending-and-unsuspending-users
intro: 'Если пользователь покидает или переходит в другую часть компании, необходимо удалить или изменить возможность доступа к данным {% variables.location.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Security
  - User account
shortTitle: Manage user suspension
ms.openlocfilehash: f1468af13d0322e8391138fdd5130234b7396fa2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094700'
---
Если сотрудники покидают компанию, вы можете приостановить действие их учетных записей {% data variables.product.prodname_ghe_server %}, чтобы открыть пользовательские лицензии в лицензии {% data variables.product.prodname_enterprise %}, сохраняя проблемы, комментарии, репозитории, gist и другие созданные данные. Приостановленные пользователи не могут выполнить вход в свой экземпляр и не могут отправлять или извлекать код.

При приостановке прав пользователя изменение вступит в силу немедленно без отправки пользователю уведомления. Если пользователь пытается извлечь или отправить данные в репозиторий, он получит следующее сообщение об ошибке:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

Перед приостановкой прав администраторов сайта необходимо понизить уровень их прав до обычных пользователей. Дополнительные сведения см. в разделе [Повышение или понижение уровня прав для роли администратора сайта](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator).

{% tip %}

**Примечание:** Если [синхронизация LDAP включена](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) для {% данных variables.location.product_location %}, пользователи автоматически приостанавливаются при удалении с сервера каталогов LDAP. Если для экземпляра включена синхронизация LDAP, обычные способы приостановки прав пользователей будут отключены.

{% endtip %}

## Приостановка работы пользователя на панели мониторинга администратора пользователя

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. В разделе "Приостановка учетной записи" в красном поле "Опасная зона" нажмите кнопку **Приостановить**.
![Кнопка "Приостановить"](/assets/images/enterprise/site-admin-settings/suspend.png)
6. Укажите причину приостановки разрешений пользователя.
![Причина приостановки](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

## Отмена приостановки работы пользователя на панели мониторинга администратора пользователя

Как и в случае приостановке прав пользователя, отмена такой приостановки также вступит в силу немедленно. Пользователь также не получит уведомления об этом.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. На левой боковой панели щелкните **Приостановленные пользователи**.
![Вкладка "Приостановленные пользователи"](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. Щелкните имя учетной записи пользователя, для которой требуется отменить приостановку.
![Приостановленный пользователь](/assets/images/enterprise/site-admin-settings/user/suspended-user.png) {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. В разделе "Приостановка учетной записи" в красном поле "Опасная зона" нажмите кнопку **Отменить приостановку**.
![Кнопка "Отменить приостановку"](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. Укажите причину для отмены приостановки разрешений пользователя.
![Причина для отмены приостановки](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

## Приостановка пользователя из командной строки

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Выполните команду [ghe-user-suspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-suspend) с указанием имени пользователя, работу которого требуется приостановить.
  ```shell
  $ ghe-user-suspend USERNAME
  ```

## Создание пользовательского сообщения для приостановленных пользователей

Вы можете создать пользовательское сообщение, которое приостановленные пользователи будут видеть при попытке входа.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. Нажмите кнопку **Добавить сообщение**.
![Добавление сообщения](/assets/images/enterprise/site-admin-settings/add-message.png)
6. Введите сообщение в поле **Сообщение о приостановленном пользователе**. Вы можете ввести Markdown или использовать панель инструментов Markdown для настройки стиля сообщения.
![Сообщение о приостановленном пользователе](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. Нажмите кнопку **Предварительный просмотр** в поле **Сообщение о приостановленном пользователе**, чтобы просмотреть отображаемое сообщение.
![кнопка предварительного просмотра](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. Просмотрите отрисованное сообщение.
![Отрисованное сообщение о приостановленном пользователе](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}

## Отмена приостановки пользователя из командной строки

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Выполните команду [ghe-user-unsuspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-unsuspend) с указанием имени пользователя, чтобы отменить приостановку.
  ```shell
  $ ghe-user-unsuspend USERNAME
  ```

## Дополнительные материалы
- [Приостановить пользователя](/rest/reference/enterprise-admin#suspend-a-user)

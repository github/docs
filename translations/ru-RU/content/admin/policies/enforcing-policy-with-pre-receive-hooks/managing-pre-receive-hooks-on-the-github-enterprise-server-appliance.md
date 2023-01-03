---
title: Управление перехватчиками предварительного получения на устройстве сервера GitHub Enterprise
intro: 'Определите, как пользователи будут использовать перехватчики предварительного получения на своем устройстве {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Manage pre-receive hooks
ms.openlocfilehash: 0e57f86b9a15d5001d6ab0d9f20578690ab5361f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112504'
---
## Создание перехватчиков предварительного получения

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
4. Нажмите кнопку **Добавить перехватчик предварительного получения**.
![Перехватчик предварительного получения](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. В поле **Имя перехватчика** введите имя создаваемого перехватчика.
![Имя перехватчика предварительного получения](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. В раскрывающемся меню **Среда** выберите среду, в которой нужно запустить обработчик.
![Среда перехватчика](/assets/images/enterprise/site-admin-settings/environment.png)
7. В разделе **Сценарий** раскрывающегося меню **Выбор репозитория перехватчика** выберите репозиторий, который содержит сценарий перехватчика предварительного получения. В раскрывающемся меню **Выбор файла** выберите имя файла сценария для перехватчика предварительного получения.
![Сценарий для перехватчика](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. Выберите **Использовать состояние выхода, чтобы принимать или отклонять push-уведомления** для принудительного применения сценария. Отмена выбора этого параметра позволяет протестировать сценарий, пока значение состояния выхода игнорируется. В этом режиме выходные данные сценария будут отображаться для пользователя в командной строке, но не в веб-интерфейсе.
![Использование состояния выхода](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. Выберите **Включить этот перехватчик предварительного получения для всех репозиториев по умолчанию**, если требуется, чтобы обработчик предварительного получения выполнялся во всех репозиториях.
![Включение перехватчика для всех репозиториев](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. Выберите **Администраторы могут включать и отключать этот перехватчик**, чтобы разрешить членам организации с разрешениями администратора или владельца выбрать, следует ли включать или отключать этот перехватчик предварительного получения.
![Администраторы включают или отключают перехватчик](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

## Редактирование перехватчиков предварительного получения

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
1. Рядом с перехватчиком предварительного получения, который необходимо изменить, нажмите {% octicon "pencil" aria-label="Значок редактирования" %}.
![Изменение предварительного получения](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

## Удаление перехватчиков предварительного получения

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
2. Рядом с перехватчиком предварительного получения, который требуется удалить, нажмите {% octicon "x" aria-label="X symbol" %}.
![Изменение предварительного получения](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

## Настройка перехватчиков предварительного получения для организации

Администратор организации может настроить разрешения перехватчика для организации только в том случае, если администратор сайта выбрал параметр **Администратор может включать или отключать этот параметр перехватчика** при создании перехватчика предварительного получения. Чтобы настроить перехватчики предварительного получения для репозитория, необходимо быть администратором или владельцем организации.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. На левой боковой панели нажмите **Перехватчики**.
![Боковая панель «Перехватчики»](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. Рядом с перехватчиком предварительного получения, который требуется настроить, щелкните раскрывающееся меню **Разрешения перехватчика**. Выберите, следует ли включить или отключить перехватчик предварительного получения либо разрешите его настройку администраторами репозитория.
![Разрешения перехватчика](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

## Настройка перехватчиков предварительного получения для репозитория

Владелец репозитория может настроить перехватчик только в том случае, если администратор сайта выбрал параметр **Администратор может включать или отключать этот параметр при создании перехватчика** при создании перехватчика предварительного получения. Владелец организации также должен выбрать разрешение перехватчика **Настраиваемый**. Чтобы настроить перехватчики предварительного получения для репозитория, необходимо быть владельцем репозитория.

{% data reusables.profile.enterprise_access_profile %}
2. Щелкните **Репозитории** и выберите репозиторий, для которого требуется настроить перехватчики предварительного получения.
![Репозитории](/assets/images/enterprise/repos/repositories.png) {% data reusables.repositories.sidebar-settings %}
4. На левой боковой панели нажмите **Перехватчики и службы**.
![Перехватчики и службы](/assets/images/enterprise/repos/hooks-services.png)
5. Рядом с перехватчиком предварительного получения, который требуется настроить, щелкните раскрывающееся меню **Разрешения перехватчика**. Выберите, следует ли включить или отключить перехватчик предварительного получения.
![Разрешения перехватчика репозитория](/assets/images/enterprise/repos/repo-hook-permissions.png)

---
title: Управление пользовательскими ролями репозитория для организации
intro: 'Вы можете создавать, изменять или удалять пользовательские роли репозитория для вашей организации.'
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Manage custom roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
ms.openlocfilehash: f7f8be4eda3ecf62a1b587a509881f9fee1a463f
ms.sourcegitcommit: ca040a1871ab5e929b596686ef955b02c5afa051
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/02/2022
ms.locfileid: '148131021'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## Пользовательские роли репозитория

{% data reusables.organizations.about-custom-repo-roles %} Дополнительные сведения см. в разделе [Сведения о пользовательских ролях репозитория](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles).

## Создание роли репозитория

Чтобы создать роль репозитория, добавьте разрешения в наследуемую роль и присвойте этой пользовательской роли имя.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
5. Нажмите кнопку **Создать роль**.
  ![Снимок экрана: кнопка "Создать роль"](/assets/images/help/organizations/repository-role-create-role.png)
4. В поле "Имя" введите имя роли репозитория.
  ![Поле для ввода имени роли репозитория](/assets/images/help/organizations/repository-role-name.png)
5. В поле "Описание" введите описание роли репозитория.
  ![Поле для ввода описания роли репозитория](/assets/images/help/organizations/repository-role-description.png)
6. В разделе "Выбор роли для наследования" выберите роль, которую нужно унаследовать.
  ![Выбор базовой роли репозитория](/assets/images/help/organizations/repository-role-base-role-option.png)
7. В разделе "Добавить разрешения" в раскрывающемся меню выберите разрешения, которые нужно включить в пользовательскую роль.
  ![Выбор уровней разрешений в раскрывающемся меню ролей репозитория](/assets/images/help/organizations/repository-role-drop-down.png)
7. Нажмите кнопку **Создать роль**.
  ![Подтверждение создания роли репозитория](/assets/images/help/organizations/repository-role-creation-confirm.png)

## Изменение роли репозитория

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. Справа от роли, которую нужно изменить, щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, а затем выберите **Изменить**.
  ![Команда "Изменить" в раскрывающемся меню для ролей репозитория](/assets/images/help/organizations/repository-role-edit-setting.png)
4. Внесите изменения, а затем нажмите кнопку **Обновить роль**.
  ![Изменение полей и обновление ролей репозитория](/assets/images/help/organizations/repository-role-update.png)

## Удаление роли репозитория

При удалении существующей роли репозитория все ожидающие приглашения, команды и пользователи с пользовательской ролью получат базовые разрешения организации.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. Справа от роли, которую нужно удалить, щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, а затем выберите **Удалить**.
  ![Команда "Удалить" в раскрывающемся меню для ролей репозитория](/assets/images/help/organizations/repository-role-delete-setting.png)
4. Просмотрите изменения для роли, которую нужно удалить, и нажмите кнопку **Удалить роль**.
  ![Подтверждение удаления роли репозитория](/assets/images/help/organizations/repository-role-delete-confirm.png)

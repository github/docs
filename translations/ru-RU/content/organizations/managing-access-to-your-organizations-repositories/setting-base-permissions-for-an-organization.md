---
title: Настройка базовых разрешений для организации
intro: Можно задать базовые разрешения для репозиториев, принадлежащих организации.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
- /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Set base permissions
ms.openlocfilehash: 734ced023e4a1043634650ff3e4305727397095c
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "146179930"
---
## Сведения о базовых разрешениях для организации

Вы можете задать базовые разрешения, которые применяются ко всем участникам организации при доступе ко всем репозиториям организации. Базовые разрешения не применяются к сторонним участникам совместной работы.

{% ifversion fpt or ghec %} По умолчанию у участников организации будут разрешения на **чтение** для репозиториев организации.{% endif %}

Если пользователь с правами администратора для репозитория организации предоставляет участнику более высокий уровень доступа для репозитория, этот более высокий уровень доступа переопределит базовое разрешение.

{% ifversion custom-repository-roles %} Если вы создали пользовательскую роль репозитория с наследуемой ролью, которая имеет уровень ниже, чем базовые разрешения организации, все члены, назначенные для этой роли, будут по умолчанию использовать базовые разрешения организации, а не наследуемую роль. Дополнительные сведения см. в разделе [Управление ролями репозитория для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{% endif %}

## Настройка базовых разрешений

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. В разделе "Базовые разрешения" используйте раскрывающийся список, чтобы выбрать новые базовые разрешения.
  ![Выбор нового уровня разрешений в раскрывающемся списке базовых разрешений](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Просмотрите изменения. Чтобы подтвердить, нажмите кнопку **Изменить разрешение по умолчанию на PERMISSION**.
  ![Проверка и подтверждение изменения базовых разрешений](/assets/images/help/organizations/base-permissions-confirm.png)

## Дополнительные материалы

- [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [Добавление сторонних участников совместной работы в репозитории в вашей организации](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)

---
title: Управление метками по умолчанию для репозиториев в организации
intro: 'Вы можете настроить метки, включенные в каждый новый репозиторий в вашей организации.'
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default labels
ms.openlocfilehash: a2591c84d3844bfdadc3c7321d7ce8eec2adf293
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125728'
---
Владельцы организации могут управлять метками по умолчанию для репозиториев в организации.

Метки по умолчанию включены в каждый новый репозиторий в вашей организации, однако любой пользователь с доступом на запись в репозиторий может позднее изменить или удалить метки в этом репозитории. Добавление, изменение или удаление метки по умолчанию не добавляет, не изменяет и не удаляет метку из существующих репозиториев.

## Создание метки по умолчанию

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}

5. В разделе «Метки репозитория» нажмите кнопку **Создать метку**.
  ![Кнопка «Создать метку»](/assets/images/help/organizations/new-label-button.png) {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## Редактирование метки по умолчанию

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}

{% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## Удаление метки по умолчанию

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}

{% data reusables.project-management.delete-label %} {% data reusables.project-management.confirm-label-deletion %}

## Дополнительные материалы

- [Сведения о метках](/articles/about-labels)

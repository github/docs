---
title: Ограничение на изменение видимости репозитория в организации
intro: 'Чтобы защитить данные организации, можно настроить разрешения для изменения видимости репозиториев в организации.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set visibility changes policy
permissions: Organization owners can restrict repository visibility changes for an organization.
ms.openlocfilehash: e404d8dea2e188ff5b0b0a8b15c9767374269436
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119248'
---
Вы можете ограничить доступ к изменению видимости репозиториев в организации, например, к изменению частного репозитория на общедоступный. Дополнительные сведения о видимости репозиториев см. в разделе [Сведения о репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility). 

Вы можете предоставить возможность изменять видимость репозитория только владельцам организации или разрешить изменять видимость всем, у кого есть права администратора в отношении репозитория.

{% warning %}

**Предупреждение**. Если этот параметр включен, он позволяет пользователям с правами администратора установить для существующего репозитория любую видимость, даже если вы не разрешаете создавать репозитории такого типа. Дополнительные сведения об ограничении видимости репозиториев во время создания см. в разделе [Ограничение на создание репозитория в организации](/articles/restricting-repository-creation-in-your-organization).

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. В разделе "Изменение видимости репозитория" снимите флажок **Разрешить членам изменять видимость репозитория для этой организации**.
![Флажок, разрешающий участникам изменять видимость репозитория](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Выберите команду **Сохранить**.

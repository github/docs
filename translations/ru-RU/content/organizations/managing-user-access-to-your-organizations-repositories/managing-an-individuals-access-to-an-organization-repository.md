---
title: Управление доступом пользователя к репозиторию организации
intro: 'Вы можете управлять доступом пользователей к репозиторию, принадлежащему вашей организации.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
  - /organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
permissions: People with admin access to a repository can manage access to the repository.
ms.openlocfilehash: 604dd0c62d06ffa501695db8836e56c95cb467b7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098516'
---
## Сведения о доступе к репозиториям организации

При удалении участника совместной работы из репозитория в организации этот участник теряет доступ на чтение и запись к репозиторию. Если репозиторий является частным, а участник совместной работы создает вилку в репозитории, эта вилка также удаляется, однако участник по-прежнему сохраняет все локальные клоны репозитория.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %}
## Управление доступом пользователя к репозиторию организации
Вы можете предоставить пользователю доступ к репозиторию или изменить уровень доступа пользователя к этому репозиторию в разделе параметров репозитория. Дополнительные сведения см. в разделе [Управление командами и людьми, имеющими доступ к репозиторию](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).
{% else %}
## Предоставление пользователю доступа к репозиторию

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-manage-access %} {% data reusables.organizations.invite-teams-or-people %}
1. В поле поиска начните вводить имя пользователя, которого нужно пригласить, а затем щелкните имя в списке совпадений.
  ![Поле поиска для ввода имени команды или пользователя, которого нужно пригласить в репозиторий](/assets/images/help/repository/manage-access-invite-search-field.png)
6. В разделе "Выбор роли" выберите роль репозитория, чтобы назначить пользователя, а затем нажмите кнопку **Добавить ИМЯ в РЕПОЗИТОРИЙ**.
  ![Выбор разрешений для команды или пользователя](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Управление доступом пользователя к репозиторию организации

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Щелкните **Участники** или **Сторонние участники совместной работы**, чтобы управлять пользователями с разными типами доступа. ![Кнопка для приглашения участников или сторонних участников совместной работы в организацию](/assets/images/help/organizations/select-outside-collaborators.png)
5. Справа от имени пользователя, которым вы хотите управлять, перейдите в раскрывающееся меню {% octicon "gear" aria-label="The Settings gear" %} и нажмите **Управление**.
  ![Ссылка для управления доступом](/assets/images/help/organizations/member-manage-access.png)
6. На странице "Управление доступом" рядом с репозиторием щелкните **Управление доступом**.
![Кнопка управления доступом для репозитория](/assets/images/help/organizations/repository-manage-access.png)
7. Просмотрите права доступа пользователя к указанному репозиторию, например, является ли он участником совместной работы или имеет доступ к репозиторию посредством членства в команде.
![Матрица доступа к репозиторию для пользователя](/assets/images/help/organizations/repository-access-matrix-for-user.png) {% endif %}
## Дополнительные материалы

{% ifversion fpt or ghec %}- [Ограничение взаимодействия с репозиторием](/articles/limiting-interactions-with-your-repository){% endif %}
- [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)

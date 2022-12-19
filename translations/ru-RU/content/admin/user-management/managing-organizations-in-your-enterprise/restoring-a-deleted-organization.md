---
title: Восстановление удаленной организации
intro: 'Вы можете частично восстановить организацию, ранее удаленную на {% данных variables.location.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Restore organization
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
ms.openlocfilehash: a39d517de4335b25a151b42902f208959e69f9a1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098743'
---
## Сведения о восстановлении организации

Панель мониторинга администрирования сайта позволяет восстановить организацию, которая ранее была удалена на {% данных variables.location.product_location %}, если индексы Elasticsearch журнала аудита содержат данные для `org.delete` события.

Сразу же после восстановления организация не будет точно такой же, какой была до удаления. Вам придется вручную восстановить все репозитории, принадлежащие организации. Дополнительные сведения см. в статье "[Восстановление удаленного репозитория](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)".

Можно также использовать журнал аудита, чтобы вручную повторно добавить команды и членов организации. Дополнительные сведения см. в разделе "[Восстановление членов и команд](#restoring-members-and-teams)".

## Восстановление организации

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. В разделе "Поиск пользователей, организаций, предприятий, команд, репозиториев, gist и приложений" выполните поиск организации.

  ![Снимок экрана: поле поиска и кнопка "Поиск"](/assets/images/enterprise/stafftools/search-field.png)

1. В разделе "Удаленные учетные записи" справа от организации, которую нужно восстановить, выберите раскрывающееся меню {% octicon "kebab-horizontal" aria-label="The edit icon" %} и щелкните **Создать повторно**.

   ![Снимок экрана: раскрывающееся меню для удаленной организации](/assets/images/enterprise/stafftools/recreate-organization.png)

## Восстановление членов и команд

Воспользуйтесь журналом аудита для поиска списка предыдущих членов и команд организации, а затем повторно создайте их вручную. Дополнительные сведения об использовании журнала аудита см. в статье "[Аудит пользователей на предприятии](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise)".

Во всех приведенных ниже поисковых фразах замените слово ORGANIZATION названием организации, а слово TEAM — названием команды.

### Восстановление членов организации

1. Чтобы найти всех пользователей, которые были добавлены в организацию и удалены из нее, выполните поиск `action:org.add_member org:ORGANIZATION` и `action:org.remove_member org:ORGANIZATION` в журнале аудита.
1. Вручную добавьте в организацию каждого пользователя, который по-прежнему должен быть ее членом. Дополнительные сведения см. в статье "[Добавление людей в организацию](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)".

### Восстановление команд

1. Чтобы найти название каждой команды, выполните поиск `action:team.create org:ORGANIZATION` в журнале аудита.
1. Повторно создайте команду вручную. Дополнительные сведения см. в статье "[Создание команды](/organizations/organizing-members-into-teams/creating-a-team)".
1. Чтобы найти членов, добавленных в каждую команду, выполните поиск `action:team.add_member team:"ORGANIZATION/TEAM"`.
1. Вручную повторно добавьте членов команды. Дополнительные сведения см. в статье "[Добавление членов организации в команду](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)".
1. Чтобы найти репозитории, к которым команде был предоставлен доступ, выполните поиск `action:team.add_repository team:"ORGANIZATION/TEAM"`.
1. Чтобы найти уровень доступа, предоставленный команде для каждого репозитория, выполните поиск `action:team.update_repository_permission team:"ORGANIZATION/TEAM"`.
1. Вручную снова предоставьте команде доступ. Дополнительные сведения см. в статье "[Управление доступом команды к репозиторию организации](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".

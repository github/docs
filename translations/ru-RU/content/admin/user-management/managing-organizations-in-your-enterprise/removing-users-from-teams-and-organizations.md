---
title: Удаление пользователей из команд и организаций
intro: 'Если участнику вашей организации больше не требуется доступ к определенным репозиториям, их можно удалить из команды, которая разрешает доступ. Если участнику организации больше не требуется доступ к репозиториям, принадлежащим организации, можно удалить их из организации.'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
shortTitle: Remove user membership
ms.openlocfilehash: 575cc032786b2bbbf264104002f503b5061df8e6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116296'
---
Удалять членов организации могут только владельцы или администраторы команды. Когда пользователь удаляется из команды или организации, их проблемы, запросы на вытягивание и комментарии в репозиториях организации остаются неизменными и по-прежнему приписываются пользователю.

{% warning %}

**Предупреждение.** При удалении из организации пользователь потеряет доступ к частным вилкам, которые у него есть в **частных репозиториях** организации. У него по-прежнему могут быть локальные копии этих вилок. Однако он не сможет синхронизировать их с репозиториями организации. Вы несете ответственность за то, чтобы пользователи, которые потеряли доступ к репозиторию, удалили любую конфиденциальную информацию или интеллектуальную собственность. Если пользователь, удаленный из организации, был членом организации, его доступ к частным вилкам репозиториев организации можно восстановить при условии, что пользователь [восстановлен в качестве члена организации](/articles/reinstating-a-former-member-of-your-organization) в течение трех месяцев после удаления из организации.

{% endwarning %}

## Удаление члена команды

{% ifversion ghes %}

{% warning %}

**Примечание.** {% data reusables.enterprise_management_console.badge_indicator %}

Чтобы удалить существующего члена команды, синхронизированной с группой LDAP, обратитесь к администратору LDAP.

{% endwarning %}

{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Выберите одного или нескольких пользователей, которых нужно удалить.
![Флажок рядом с членом организации](/assets/images/help/teams/team-member-check-box.png)
5. Над списком членов группы используйте раскрывающееся меню и нажмите щелкните **Удалить из команды**.
![Раскрывающееся меню с параметром для изменения роли](/assets/images/help/teams/bulk-edit-drop-down.png)

## Удаление пользователя из организации

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Рядом с именами пользователей, которых вы хотите удалить из организации, установите флажок.
![Флажок удаления пользователя](/assets/images/help/organizations/Organization-remove-user.png)
5. В верхней части страницы под именем организации нажмите кнопку **Удалить из организации**.
![Кнопка "Удалить из организации"](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

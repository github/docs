---
title: Преобразование участника организации во стороннего участника совместной работы
intro: Если текущему участнику вашей организации нужен доступ только к определенным репозиториям, таким как консультанты или временные сотрудники, их можно преобразовать во внешнего участника совместной работы.
permissions: Organization owners can convert an organization member to an outside collaborator.
redirect_from:
- /articles/converting-an-organization-member-to-an-outside-collaborator
- /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Convert member to collaborator
ms.openlocfilehash: 4b9330559895ec96cb6c842d89dbe4e9a8773685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "146754601"
---
## Сведения о преобразовании участников организации во внешних участников совместной работы

Вы можете преобразовать участника организации во внешнего участника совместной работы. Дополнительные сведения о внешних участниках совместной работы см. в статье [Добавление внешних участников совместной работы в репозитории организации](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization).

{% ifversion fpt or ghec %}Если организация принадлежит предприятию, преобразование{% elsif ghes or ghae %}Преобразование{% endif %} участника организации во внешнего участника совместной работы может ограничиваться. Дополнительные сведения см. в статье [Применение политик управления репозиторием в предприятии]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-{% ifversion fpt or ghec %}outside-{% endif %}collaborators-to-repositories){% ifversion ghec or ghes or ghae %}."{% elsif fpt %}" в документации по {% data variables.product.prodname_ghe_cloud %}.{% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

После преобразования участника организации в стороннего участника совместной работы у него будет доступ только к репозиториям, которые разрешены для его текущего членства команде. Пользователь больше не будет явным участником организации и больше не сможет выполнять следующие действия:

- Создание команд
- Просмотр всех участников и команд организации
- @mention любой видимой команды
- Быть координатором команды

Дополнительные сведения см. в статье "[Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Мы рекомендуем проверить доступ участника организации к репозиториям, чтобы убедиться, что они имеют ожидаемые права доступа. Дополнительные сведения см. в статье [Управление доступом отдельных пользователей к репозиторию организации](/articles/managing-an-individual-s-access-to-an-organization-repository).

При преобразовании участника организации в стороннего участника совместной работы его привилегии участника организации сохраняются в течение трех месяцев, чтобы можно было восстановить разрешения участников, если вы{% ifversion fpt or ghec %} пригласите их на повторное присоединение{% else %} добавьте их обратно в {% endif %} вашу организацию в течение этого периода. Дополнительные сведения см. в разделе [Восстановление бывшего участника вашей организации](/articles/reinstating-a-former-member-of-your-organization).

## Преобразование участника организации во стороннего участника совместной работы

{% note %}

**Примечание.** Вы не сможете преобразовать участника организации во внешнего участника совместной работы, если владелец организации{% ifversion not fpt %} или предприятия {% endif %} не предоставил вам возможность добавлять внешних участников совместной работы.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Выберите одного или нескольких пользователей, которые требуется преобразовать в сторонних участников совместной работы.
  ![Список участников с двумя выбранными участниками](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Над списком участников используйте раскрывающееся меню и нажмите кнопку **Преобразовать в стороннего участника совместной работы**.
  ![Раскрывающееся меню с параметром преобразования участников в сторонних участников совместной работы](/assets/images/help/teams/user-bulk-management-options.png)
6. Прочитайте сведения о преобразовании участников в сторонних участников совместной работы, а затем нажмите кнопку **Преобразовать в стороннего участника совместной работы**.
  ![Сведения о разрешениях внешних участников совместной работы и кнопка "Преобразовать в сторонних участников совместной работы"](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

## Дополнительные материалы

- [Добавление сторонних участников совместной работы в репозитории в вашей организации](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- "[Удаление внешнего участника совместной работы из репозитория организации](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
- [Преобразование стороннего участника совместной работы в участника организатора](/articles/converting-an-outside-collaborator-to-an-organization-member)

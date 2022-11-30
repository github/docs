---
title: Преобразование команды владельцев в улучшенные разрешения организации
intro: 'Если ваша организация была создана позднее, чем в сентябре 2015 года, по умолчанию у нее есть улучшенные разрешения организации. Организациям, созданным до сентября 2015 года, может потребоваться перенести прежние команды "Владельцы" и "Администраторы" в улучшенную модель разрешений. Роль "Владелец" теперь является административной ролью, которая предоставляется отдельным участникам вашей организации. Участникам вашей прежней команды владельцев автоматически предоставляются права владельца.'
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions
  - /articles/converting-an-owners-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-owners-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert Owners team
ms.openlocfilehash: ff4845a8d36ecc757a989ef669b645543addff2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880383'
---
Доступно несколько вариантов преобразования устаревшей команды владельцев.

- Присвойте команде новое имя, указывающее, что ее участники имеют особый статус в организации.
- Удалите команду после того, как все участники будут добавлены в команды, которым предоставлен необходимый доступ к репозиториям организации.

## Укажите новое имя для команды владельцев

{% tip %}

   **Примечание.** Так как "admin" — это термин, которым обозначают участников организации с определенными [правами доступа к конкретным репозиториям](/articles/repository-permission-levels-for-an-organization) в организации, мы рекомендуем избегать использования этого термина в любом выбранном вами имени группы.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. В поле "Имя команды" выберите новое имя для команды владельцев. Пример:
    - Если в вашей организации было очень мало участников команды владельцев, можно присвоить команде имя "Core".
    - Если все участники вашей организации были членами команды владельцев, то для того, чтобы они могли [@mention команды](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), можно присвоить команде имя "Employees".
  ![Поле имени команды, в котором имя команды "Владельцы" можно изменить на "Core"](/assets/images/help/teams/owners-team-new-name.png)
6. В описании команды нажмите кнопку **"Сохранить и продолжить**".
![Кнопка "Сохранить и продолжить"](/assets/images/help/teams/owners-team-save-and-continue.png)
7. При необходимости [сделайте команду *общедоступной*](/articles/changing-team-visibility).

## Удаление устаревшей команды владельцев

{% warning %}

**Примечание**. Если в вашей команде владельцев нет участников других команд, удаление команды приведет к удалению этих участников из организации. Перед удалением команды убедитесь, что участники уже являются непосредственными участниками организации или имеют доступ к необходимым репозиториям.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. В нижней части страницы просмотрите предупреждение и нажмите кнопку **"Удалить команду владельцев**".
  ![Ссылка для удаления команды владельцев](/assets/images/help/teams/owners-team-delete.png)

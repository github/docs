---
title: Проверка включения двухфакторной проверки у пользователей организации
intro: 'Вы можете просмотреть, для каких владельцев, участников организации и сторонних участников совместной работы включена двухфакторная проверка подлинности.'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View 2FA usage
ms.openlocfilehash: 20659ea2e1979123b15d9ee5d333655ad188b2e9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135077'
---
{% note %}

**Примечание.** Можно настроить требование, которое предусматривает, что для всех участников{% ifversion fpt or ghec %}, включая владельцев, менеджеров по выставлению счетов и{% else %} и{% endif %} сторонних участников совместной работы в организации, включена двухфакторная проверка подлинности. Дополнительные сведения см. в разделе [Настройка требования двухфакторной проверки подлинности в организации](/articles/requiring-two-factor-authentication-in-your-organization).

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Чтобы просмотреть участников организации, включая владельцев организации, которые включили или отключили двухфакторную проверку подлинности, щелкните **2FA** и выберите **Включено** или **Отключено**.
 ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. Чтобы просмотреть сторонних участников совместной работы в организации, на вкладке "Люди" щелкните **Сторонние участники совместной работы**.
![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. Чтобы проверить, какие сторонние участники совместной работы включили или отключили двухфакторную проверку подлинности, в правой части щелкните **2FA** и выберите **Включено** или **Отключено**.
![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

## Дополнительные материалы

- [Просмотр ролей пользователей в организации](/articles/viewing-people-s-roles-in-an-organization)

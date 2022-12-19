---
title: Просмотр ролей пользователей в организации
intro: You can view a list of the people in your organization and filter by their role. For more information on organization roles, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."
permissions: Organization members can see people's roles in the organization.
redirect_from:
- /articles/viewing-people-s-roles-in-an-organization
- /articles/viewing-peoples-roles-in-an-organization
- /github/setting-up-and-managing-your-github-user-account/viewing-peoples-roles-in-an-organization
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: View people in an organization
ms.openlocfilehash: d492821546b16a7c863d96867ef431362e7056ce
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088749"
---
## <a name="view-organization-roles"></a>Просмотр ролей организации

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Вы увидите список пользователей в вашей организации. Чтобы отфильтровать список по определенной роли, щелкните **Роль** и выберите нужную роль.
  ![click-role](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

Если в вашей организации используется {% data variables.product.prodname_ghe_cloud %}, вы также можете просматривать список владельцев предприятия, управляющих параметрами выставления счетов и политиками для всех организаций вашего предприятия. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization).

{% endif %}

{% if enterprise-owners-visible-for-org-members %}
## <a name="view-enterprise-owners-and-their-roles-in-an-organization"></a>Просмотр владельцев предприятия и их ролей в организации

Если ваша организация управляется корпоративной учетной записью, вы можете просматривать список владельцев предприятия, управляющих параметрами выставления счетов и политиками для всех организаций вашего предприятия. Дополнительные сведения о корпоративных учетных записях см. в разделе [Типы учетных записей {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts).

Вы также можете проверить, имеет ли владелец предприятия определенную роль в организации. Владельцы предприятия могут быть также участниками организации, выполнять другую роль в организации или не иметь никакой связи с организацией.

{% note %}

**Примечание.** Если вы являетесь владельцем организации, вы также можете предложить владельцу предприятия ту или иную роль в организации. Если владелец предприятия примет приглашение, будет использоваться место или лицензия в организации из числа лицензий, доступных для вашего предприятия. Дополнительные сведения о том, как работает лицензирование, см. в разделе [Роли в организации](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner).

{% endnote %}

| **Роль в предприятии** | **Роль в организации** | **Доступ или влияние организации** |
|----|----|----|----|
| Владелец предприятия | Нет связи или официальной роли в организации | Не имеет доступа к содержимому или репозиториям организации, но управляет корпоративными параметрами и политиками, влияющими на вашу организацию. |
| Владелец предприятия | Владелец организации | Может настраивать параметры организации и управлять доступом к ресурсам организации с помощью команд и т. д. | 
| Владелец предприятия | Участник организации | Имеет доступ к ресурсам и содержимому организации, включая репозитории, но не к параметрам организации. |

Инструкции по просмотру всех ролей в организации см. в разделе [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization). {% if custom-repository-roles %} Участник организации также может иметь настраиваемую роль в определенном репозитории. Дополнительные сведения см. в разделе [Управление настраиваемыми ролями репозитория для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}

Дополнительные сведения о роли владельца организации см. в разделе [Роли в организации](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner). 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. На левой боковой панели в разделе "Корпоративные разрешения" щелкните **Владельцы предприятия**.
  ![Снимок экрана: параметр "Владельцы предприятия" в боковом меню](/assets/images/help/organizations/enterprise-owners-sidebar.png)
5. Просмотрите список владельцев вашего предприятия. Если владелец предприятия также является участником вашей организации, вы сможете увидеть его роль в организации.

  ![Снимок экрана: список владельцев предприятия и их роли в организации](/assets/images/help/organizations/enterprise-owners-list-on-org-page.png)

{% endif %}

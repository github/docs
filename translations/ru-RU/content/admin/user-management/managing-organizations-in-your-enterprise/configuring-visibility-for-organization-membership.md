---
title: Настройка видимости для членства в организации
intro: Можно задать видимость для новых участников организации в корпоративной среде как "Общедоступная" или "Частная". Вы также можете запретить членам изменять видимость по умолчанию.
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
shortTitle: Set membership visibility
ms.openlocfilehash: e628fab4f8aa77579e0ce89f18a70813274928b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332347'
---
{% ifversion ghes %} Применить параметр по умолчанию ко всем текущим членам организации в экземпляре можно также с помощью программы командной строки. Например, если требуется, чтобы видимость каждого члена организации была общедоступной, в настройках администрирования в качестве значения параметра по умолчанию можно задать "Общедоступная" и применять этот параметр по умолчанию ко всем новым членам, а затем использовать программу командной строки для принудительного применения этого параметра к существующим членам.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
3. В разделе "Видимость членства в организации по умолчанию" в раскрывающемся меню выберите вариант **Частная** или **Общедоступная**.
  ![Раскрывающееся меню с параметром настройки видимости членства в организации по умолчанию: общедоступная или частная](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. Чтобы запретить членам изменять видимость членства на отличную от заданной по умолчанию, установите флажок **Применить к членам организации**.
  ![Флажок для применения параметра по умолчанию ко всем членам](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png) {% ifversion ghes %}
5. Чтобы применить новый параметр видимости ко всем существующим членам, воспользуйтесь программой командной строки `ghe-org-membership-update`. Дополнительные сведения см. в статье "[Программы командной строки](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-membership-update)".{% endif %}

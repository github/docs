---
title: Управление GitHub Mobile для предприятия
intro: 'Вы можете решить, могут ли пользователи использовать {% данных variables.product.prodname_mobile %} для подключения к {% данных variables.location.product_location %}.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Mobile
redirect_from:
  - /admin/configuration/configuring-your-enterprise/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
shortTitle: Manage GitHub Mobile
ms.openlocfilehash: 68488f8fdae8c750fc45267572b0c5c5f6aa2975
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098836'
---
## Сведения о {% data variables.product.prodname_mobile %}

{% данных variables.product.prodname_mobile %} позволяет пользователям выполнять анализ, совместную работу и управлять работой над {% данных variables.location.product_location %} с мобильного устройства после успешной проверки подлинности. {% data reusables.mobile.about-mobile %} Дополнительные сведения см. в разделе [{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile).

Вы можете разрешить или запретить пользователям использовать {% данных variables.product.prodname_mobile %} для проверки подлинности в {% данных variables.location.product_location %} и доступа к данным экземпляра. По умолчанию {% данных variables.product.prodname_mobile %} — {% ghes ifversion > 3.3 %} для пользователей, использующих {% данных variables.location.product_location %}. {% else %} не включен для пользователей, использующих {% данных variables.location.product_location %}. Чтобы разрешить подключение к экземпляру с помощью {% data variables.product.prodname_mobile %}, необходимо включить эту функцию для своего экземпляра.{% endif %}

{% ifversion ghes < 3.6 %} {% note %}

**Примечание.** Если вы обновили {% data variables.product.prodname_ghe_server %} до версии 3.4.0 или более поздней и ранее не отключали или не включали {% data variables.product.prodname_mobile %}, {% data variables.product.prodname_mobile %} будет включен по умолчанию. Если вы ранее отключили или включили {% data variables.product.prodname_mobile %} для экземпляра, то предпочтительные параметры будут сохранены при обновлении. Дополнительные сведения об обновлении экземпляра см. в разделе [Обновление {% data variables.product.product_name %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server).

{% endnote %} {% endif %}

## Включение или отключение {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}
1. На левой боковой панели щелкните **Mobile**.
  ![Кнопка Mobile на левой боковой панели консоли управления {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/click-mobile.png)
1. В разделе GitHub Mobile выберите или отмените выбор параметра **Включить приложения GitHub Mobile**.
  ![Флажок параметра "Включить приложения GitHub Mobile" в консоли управления {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png) {% data reusables.enterprise_management_console.save-settings %}

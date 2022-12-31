---
title: Включение автоматических проверок обновлений
intro: 'Вы можете включить автоматические проверки обновлений, чтобы {% данных variables.location.product_location %} проверял и скачивает последнюю версию {% данных variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/enabling-automatic-update-checks
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Enable automatic update checks
ms.openlocfilehash: 0c9ab4230458b4158629a6590b45fa85661e7fe9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098772'
---
При автоматическом скачивании пакета обновления для {% данных variables.location.product_location %}вы получите сообщение с сообщением об обновлении {% данных variables.product.prodname_ghe_server %}. Пакеты скачиваются в `/var/lib/ghe-updates` каталог на {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Обновление {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server).

Если для обновления доступно горячее исправление, загрузка `.hpkg` выполняется автоматически. В консоли управления можно установить исправление сразу или запланировать установку на более позднее время. Дополнительные сведения см. в разделе [Обновление с помощью горячего исправления](/enterprise/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch).

{% tip %}

**Совет:** Чтобы включить автоматические проверки обновлений, {% данных variables.location.product_location %} должен иметь возможность подключиться к `https://github-enterprise.s3.amazonaws.com`.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. Нажмите кнопку **«Да, автоматически проверять наличие обновлений»** .
![Кнопка включения автоматических обновлений](/assets/images/enterprise/management-console/enable_updates_button.png) {% data reusables.enterprise_management_console.save-settings %}

Чтобы узнать, обновлен ли ваш экземпляр, выберите баннер на вкладке «Обновления».

![Баннер, обозначающий выпуск сервера GitHub Enterprise](/assets/images/enterprise/management-console/up-to-date-banner.png)

В разделе **Журналы** отображается состояние последней проверки обновления.

![Журналы для обновления](/assets/images/enterprise/management-console/update-log.png)

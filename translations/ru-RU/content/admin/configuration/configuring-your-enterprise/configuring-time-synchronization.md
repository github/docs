---
title: Настройка синхронизации времени
intro: '{% data variables.product.prodname_ghe_server %} автоматически синхронизирует часы путем подключения к NTP-серверам. Можно задать NTP-серверы, используемые для синхронизации часов, или использовать NTP-серверы по умолчанию.'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings
  - /enterprise/admin/articles/setting-ntp-servers
  - /enterprise/admin/categories/time
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-time-synchronization
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure time settings
ms.openlocfilehash: 34ab851e50467a06eb0003d32306d1cd26e9a2d8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112835'
---
## Изменение NTP-серверов по умолчанию

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. На левой боковой панели нажмите **Время**.
    ![Кнопка "Время" на боковой панели {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/sidebar-time.png)
3. В поле "Основной NTP-сервер" введите имя узла основного NTP-сервера. В поле "Дополнительный NTP-сервер" введите имя узла вторичного NTP-сервера.
    ![Поля для первичных и вторичных NTP-серверов в {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/ntp-servers.png)
4. В нижней части страницы нажмите кнопку **Сохранить параметры**.
    ![Кнопка "Сохранить параметры" в {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/save-settings.png)
5. Ожидайте завершения запуска конфигурации.

## Исправление большого смещения времени

Протокол NTP постоянно исправляет несоответствия синхронизации в небольшом интервале времени. Для немедленной синхронизации времени можно использовать административную оболочку.

{% note %}

**Примечания.**
 - Невозможно изменить часовой пояс UTC.
 - Следует запретить гипервизору пытаться настроить часы виртуальной машины. Дополнительные сведения см. в документации, предоставленной поставщиком виртуализации.

{% endnote %}

- Используйте команду `chronyc` для синхронизации сервера с настроенным NTP-сервером. Пример:

```shell
$ sudo chronyc -a makestep
```

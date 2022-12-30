---
title: Просмотр журналов отправки
intro: Администраторы сайта могут просматривать список операций передачи данных Git для любого репозитория на предприятии.
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
  - /admin/user-management/viewing-push-logs
  - /admin/user-management/monitoring-activity-in-your-enterprise/viewing-push-logs
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
ms.openlocfilehash: 5477e981cc579d75de37e4ce06ea367b93d9790c
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008816'
---
Записи журнала отправки показывают следующее:

- Сторона, инициировавшая отправку
- Была ли отправка принудительной
- Ветвь, куда была выполнена отправка
- Протокол, используемый для отправки
- Исходный IP-адрес
- Клиент Git, использованный для отправки
- Хэши SHA до и после операции

## Просмотр журналов отправки для репозитория

1. Войдите в {% data variables.product.prodname_ghe_server %} в качестве администратора сайта.
1. Перейдите в репозиторий.
1. В правом верхнем углу страницы репозитория щелкните {% octicon "rocket" aria-label="The rocket ship" %}.
    ![Значок ракеты для доступа к параметрам администратора сайта](/assets/images/enterprise/site-admin-settings/access-new-settings.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
4. На левой боковой панели щелкните **Push Log** (Журнал отправки).
![Вкладка "Push log" (Журнал отправки)](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% ifversion ghes %}
## Просмотр журналов отправки репозитория в командной строке

{% data reusables.enterprise_installation.ssh-into-instance %}
1. В соответствующем репозитории Git откройте файл журнала аудита:
  ```shell
  ghe-repo OWNER/REPOSITORY -c "cat audit_log"
  ```
{% endif %}

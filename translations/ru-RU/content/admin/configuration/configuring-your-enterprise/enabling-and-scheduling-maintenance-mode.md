---
title: Включение и планирование режима обслуживания
intro: 'Некоторые стандартные процедуры обслуживания, такие как обновление данных {% variables.location.product_location %} или восстановление резервных копий, требуют, чтобы экземпляр был отключен для нормального использования.'
redirect_from:
  - /enterprise/admin/maintenance-mode
  - /enterprise/admin/categories/maintenance-mode
  - /enterprise/admin/articles/maintenance-mode
  - /enterprise/admin/articles/enabling-maintenance-mode
  - /enterprise/admin/articles/disabling-maintenance-mode
  - /enterprise/admin/guides/installation/maintenance-mode
  - /enterprise/admin/installation/enabling-and-scheduling-maintenance-mode
  - /enterprise/admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/enabling-and-scheduling-maintenance-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Maintenance
  - Upgrades
shortTitle: Configure maintenance mode
ms.openlocfilehash: 6bd4a49f4f1898b16d3fde1585436b3bd5519f30
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094324'
---
## Сведения о режиме обслуживания

Для некоторых типов операций требуется перевести данные {% variables.location.product_location %} в автономный режим и перевести их в режим обслуживания:
- Обновление до новой версии {% data variables.product.prodname_ghe_server %}
- Увеличение ресурсов ЦП, памяти или хранилища, выделенных для виртуальной машины
- Перенос данных из одной виртуальной машины в другую
- Восстановление данных из моментального снимка {% data variables.product.prodname_enterprise_backup_utilities %}
- Устранение определенных типов критических проблем с приложениями

Рекомендуется запланировать период обслуживания как минимум на 30 минут, чтобы предоставить пользователям время для подготовки. После того как период обслуживания будет запланирован, при входе на сайт все пользователи будут видеть баннер.



![Баннер пользователя о запланированном обслуживании](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

Когда экземпляр находится в режиме обслуживания, отклоняется весь обычный доступ HTTP и Git. Операции получения, клонирования и отправки Git также отклоняются с сообщением об ошибке, в котором указано, что сайт временно недоступен. В конфигурациях с высоким уровнем доступности репликация Git будет приостановлена. Задания GitHub Actions не будут выполняться. Вследствие посещения сайта в браузере появляется страница обслуживания.

![Экран-заставка режима обслуживания](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% ifversion ip-exception-list %}

Вы можете выполнить начальную проверку операции обслуживания, настроив список исключений IP, чтобы разрешить доступ к {% данных variables.location.product_location %} только из указанных IP-адресов и диапазонов. Попытки доступа к данным {% variables.location.product_location %} из IP-адресов, не указанных в списке исключений IP, получат ответ, согласованный с теми, которые отправляются, когда экземпляр находится в режиме обслуживания. 

{% endif %}

## Немедленное включение режима обслуживания и планирование периода обслуживания на более позднее время

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. В верхней части {% data variables.enterprise.management_console %} щелкните **Обслуживание**.
  ![Вкладка "Обслуживание"](/assets/images/enterprise/management-console/maintenance-tab.png)
3. В разделе "Включить и запланировать" определите, следует ли включить режим обслуживания немедленно либо запланировать период обслуживания на будущее.
    - Чтобы немедленно включить режим обслуживания, в раскрывающемся меню щелкните **сейчас**.
    ![Раскрывающееся меню с выбранным параметром для включения режима обслуживания сейчас](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - Чтобы запланировать период обслуживания на будущее, в раскрывающемся меню выберите время начала.
    ![Раскрывающееся меню с выбранным параметром планирования периода обслуживания через два часа](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. Нажмите **Включение режима обслуживания**.
  ![Флажок для включения или планирования режима обслуживания](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ip-exception-list %}

## Проверка изменений в режиме обслуживания с использованием списка исключений IP-адресов

Список исключений IP обеспечивает управляемый и ограниченный доступ к {% данных variables.location.product_location %}, который идеально подходит для начальной проверки работоспособности сервера после операции обслуживания. После включения {% данных variables.location.product_location %} будут выведены из режима обслуживания и доступны только для настроенных IP-адресов. Флажок режима обслуживания будет обновлен, чтобы автоматически устанавливать изменения состояния.

При повторном включении режима обслуживания список исключений IP-адресов будет отключен, а {% данных variables.location.product_location %} вернется в режим обслуживания. Если вы просто отключите список исключений IP- адресов, {% данных variables.location.product_location %} вернется к нормальной работе.

Вы также можете использовать служебную программу командной строки для настройки списка исключений IP-адресов. Дополнительные сведения см. в разделах [Служебные программы командной строки](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance) и [Доступ к административной оболочке (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. В верхней части {% data variables.enterprise.management_console %} щелкните **Обслуживание** и проверьте, включен ли режим обслуживания.
  ![Вкладка "Обслуживание"](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Выберите **Включить список исключений IP-адресов**.
 ![Флажок для включения списка исключений IP-адресов](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. В текстовом поле введите допустимый список разделенных пробелами IP-адресов или блоков CIDR, которые должны быть разрешены для доступа к {% данных variables.location.product_location %}.
 ![заполненное поле для IP-адресов](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. Выберите команду **Сохранить**.
![после сохранения списка исключений IP-адресов](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## Режим обслуживания планирования с помощью {% данных variables.product.prodname_enterprise_api %}

Вы можете запланировать обслуживание в разное время или даты с помощью {% данных variables.product.prodname_enterprise_api %}. Дополнительные сведения см. в статье [Консоль управления](/enterprise/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode).

## Включение или отключение режима обслуживания для всех узлов в кластере

С помощью служебной программы `ghe-cluster-maintenance` можно задать или отменить режим обслуживания для каждого узла в кластере.

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```

---
title: Мониторинг с помощью SNMP
intro: "{% data variables.product.prodname_enterprise %} предоставляет данные об использовании диска, ЦП, памяти и\_т.\_д. по протоколу SNMP."
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
  - /admin/enterprise-management/monitoring-using-snmp
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: 1afc6d9a34015c0b577fe891caefb5317346ca7a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093803'
---
SNMP является распространенным решением для мониторинга устройств в сети. Настоятельно рекомендуется включить SNMP, чтобы отслеживать работоспособность {% данных variables.location.product_location %} и знать, когда следует добавлять дополнительные объемы памяти, хранилища или процессора на хост-компьютер.

{% data variables.product.prodname_enterprise %} содержит стандартную установку SNMP, поэтому вы можете воспользоваться [многими подключаемыми модулями](https://www.monitoring-plugins.org/doc/man/check_snmp.html), которые предоставляются для Nagios или любой другой системы мониторинга.

## Настройка SNMP версии 2c

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.access-monitoring %} {% data reusables.enterprise_management_console.enable-snmp %}
4. В поле **Строка сообщества** введите новую строку сообщества. Если оставить это поле пустым, по умолчанию используется значение `public`.
![Поле для добавления строки сообщества](/assets/images/enterprise/management-console/community-string.png) {% data reusables.enterprise_management_console.save-settings %}
5. Проверьте конфигурацию SNMP, выполнив следующую команду на отдельной рабочей станции с поддержкой SNMP в сети:
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c COMMUNITY-STRING -O e HOSTNAME hrSystemDate.0
  ```

Это должно возвращать системное время на узле {% данных variables.location.product_location %}.

## Пользовательская безопасность

Если настроена поддержка SNMP версии 3, вы можете получить более высокий уровень безопасности с контролем на уровне пользователей благодаря модели безопасности пользователей (USM). Для каждого уникального пользователя можно отдельно настроить один из следующих уровней безопасности.
- `noAuthNoPriv`: этот уровень безопасности не предоставляет проверку подлинности и конфиденциальность.
- `authNoPriv`: этот уровень безопасности предоставляет проверку подлинности, но не предоставляет конфиденциальность. Чтобы отправить запрос на устройство, потребуется имя пользователя и пароль (длиной не менее восьми символов). Информация отправляется без шифрования, как в протоколе SNMP версии 2. В качестве протокола проверки подлинности может использоваться MD5 или SHA, по умолчанию — SHA.
- `authPriv`: этот уровень безопасности предоставляет проверку подлинности и конфиденциальность. Проверка подлинности является обязательной, пароль должен содержать не менее восьми символов, а ответы шифруются. Пароль конфиденциальности не является обязательным, но если он указан, то должен содержать не менее восьми символов. Если пароль конфиденциальности не указан, используется пароль проверки подлинности. В качестве протокола конфиденциальности может использоваться DES или AES, по умолчанию — AES.

## Настройка пользователей для SNMP версии 3

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.access-monitoring %} {% data reusables.enterprise_management_console.enable-snmp %}
4. Выберите **SNMP версии 3**.
![Кнопка для включения SNMP версии 3](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. В поле "Имя пользователя" введите уникальное имя для пользователя SNMP версии 3.
![Поле для ввода имени пользователя SNMP версии 3](/assets/images/enterprise/management-console/snmpv3-username.png)
6. В раскрывающемся меню **Уровень безопасности** выберите уровень безопасности для пользователя SNMP версии 3.
![Раскрывающееся меню для уровня безопасности пользователя SNMP версии 3](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. Для пользователей SNMP версии 3 с уровнем безопасности `authnopriv`: ![Параметры для уровня безопасности authnopriv](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. Для пользователей SNMP версии 3 с уровнем безопасности `authpriv`: ![Параметры для уровня безопасности authpriv](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - При необходимости в поле "Пароль конфиденциальности" введите пароль конфиденциальности.
    - В правой части раздела "Пароль конфиденциальности" выберите в раскрывающемся меню **Протокол** метод протокола конфиденциальности, который вы хотите использовать.
9. Нажмите кнопку **Добавить пользователя**.
![Кнопка для добавления пользователя SNMP версии 3](/assets/images/enterprise/management-console/snmpv3-adduser.png) {% data reusables.enterprise_management_console.save-settings %}

#### Запрос данных SNMP

В SNMP версии 3 доступны сведения об устройстве на аппаратном и программном уровнях. Из-за отсутствия шифрования и конфиденциальности, для уровней безопасности `noAuthNoPriv` и `authNoPriv` мы исключаем таблицу `hrSWRun` (1.3.6.1.2.1.25.4) из создаваемых отчетов SNMP. Если вы используете уровень безопасности `authPriv`, мы включаем эту таблицу. Дополнительные сведения см. в [справочной документации по API](https://oidref.com/1.3.6.1.2.1.25.4). 

В SNMP версии 2с доступны сведения об устройстве только на аппаратном уровне. Приложения и службы в {% data variables.product.prodname_enterprise %} не имеют настроенных идентификаторов OID для передачи метрик. Доступны несколько MIB, для получения списка которых можно выполнить `snmpwalk` на отдельной рабочей станции с поддержкой SNMP в сети:

```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
$ snmpwalk -v 2c -c COMMUNITY-STRING -O e HOSTNAME
```

Из доступных MIB для SNMP наиболее полезным является `HOST-RESOURCES-MIB` (1.3.6.1.2.1.25). В таблице ниже приведены некоторые важные объекты в этом MIB:

| Имя | OID | Описание |
| ---- | --- | ----------- |
| hrSystemDate.2 | 1.3.6.1.2.1.25.1.2 | Представление узлов о локальной дате и времени дня. |
| hrSystemUptime.0 | 1.3.6.1.2.1.25.1.1.0 | Сколько времени прошло с момента последней инициализации узла. |
| hrMemorySize.0 | 1.3.6.1.2.1.25.2.2.0 | Объем ОЗУ на виртуальной машине. |
| hrSystemProcesses.0 | 1.3.6.1.2.1.25.1.6.0 | Количество контекстов процесса, загруженных или выполняющихся на узле в данный момент. |
| hrStorageUsed.1 | 1.3.6.1.2.1.25.2.3.1.6.1 | Объем дискового пространства, потребляемого на узле, выраженный в hrStorageAllocationUnits. |
| hrStorageAllocationUnits.1 | 1.3.6.1.2.1.25.2.3.1.4.1 | Размер hrStorageAllocationUnit в байтах |

Например, чтобы получить `hrMemorySize` по протоколу SNMP версии 3, выполните следующую команду на отдельной рабочей станции с поддержкой SNMP в сети:
```shell
# username is the unique username of your SNMP v3 user
# auth password is the authentication password
# privacy password is the privacy password
# hostname is the IP or domain of your Enterprise instance
$ snmpget -v 3 -u USERNAME -l authPriv \
  -A "AUTH PASSWORD" -a SHA \
  -X "PRIVACY PASSWORD" -x AES \
  -O e HOSTNAME HOST-RESOURCES-MIB::hrMemorySize.0
```

Чтобы получить `hrMemorySize` по протоколу SNMP версии 2c, выполните следующую команду на отдельной рабочей станции с поддержкой SNMP в сети:
```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
snmpget -v 2c -c COMMUNITY-STRING HOSTNAME HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**Примечание:** чтобы предотвратить утечку сведений о службах, работающих на устройстве, мы исключаем таблицу `hrSWRun` (1.3.6.1.2.1.25.4) из создаваемых отчетов SNMP, если вы не используете уровень безопасности `authPriv` для SNMP версии 3. Если вы используете уровень безопасности `authPriv`, мы включаем таблицу `hrSWRun`.

{% endtip %}

Дополнительные сведения о сопоставлениях OID для популярных системных атрибутов SNMP см. в разделе [OID для статистики по ЦП, памяти и дискам в Linux SNMP](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html).

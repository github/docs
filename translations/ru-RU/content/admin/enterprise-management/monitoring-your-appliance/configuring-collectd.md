---
title: Настройка collectd
intro: '{% data variables.product.prodname_enterprise %} может собирать данные с помощью `collectd` и отправлять их на внешний сервер `collectd`. Помимо прочих метрик, мы собираем стандартный набор данных, таких как данные о загрузке ЦП, потреблении ресурсов памяти и дискового пространства, об объеме трафика сетевого интерфейса и ошибок, а также об общей нагрузке на виртуальную машину.'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd
  - /enterprise/admin/enterprise-management/configuring-collectd
  - /admin/enterprise-management/configuring-collectd
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: ec2a175f9449f3d6d8d69993e3803e01be41d60c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097864'
---
## Настройка внешнего сервера `collectd`

Если вы еще не настроили внешний `collectd` сервер, необходимо сделать это перед включением `collectd` переадресации на {% данных variables.location.product_location %}. Сервер `collectd` должен работать под управлением `collectd` версии 5.x или более поздней.

1. Войдите на сервер `collectd`.
2. Создайте или измените файл конфигурации `collectd`, чтобы загрузить подключаемый модуль сети и заполнить директивы сервера и порта соответствующими значениями. В большинстве распределений он находится в `/etc/collectd/collectd.conf`

Пример *collectd.conf* для запуска сервера `collectd`:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

## Включение переадресации collectd в {% data variables.product.prodname_enterprise %}

По умолчанию переадресация `collectd` выключена в {% data variables.product.prodname_enterprise %}. Чтобы включить и настроить переадресацию `collectd`, выполните следующие действия:

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. Под параметрами переадресации журналов выберите **Включить переадресацию collectd**.
1. В поле **Адрес сервера** введите адрес сервера `collectd`, на который вы хотите переадресовать статистику устройства {% data variables.product.prodname_enterprise %}.
1. В поле **Порт** введите порт, используемый для подключения к серверу `collectd`. (Значение по умолчанию — 25826)
1. В раскрывающемся меню **Настройки шифрования** выберите уровень безопасности взаимодействия с сервером `collectd`. (Нет, подписанные пакеты или зашифрованные пакеты.) {% data reusables.enterprise_management_console.save-settings %}

## Экспорт данных collectdс помощью `ghe-export-graphs`

Средство для командной строки `ghe-export-graphs` выполнит экспорт данных, которые `collectd` хранит в базах данных RRD. Эта команда преобразует данные в формат XML и экспортирует их в один tarball (`.tgz`).

Его основное предназначение — предоставить команде {% data variables.contact.contact_ent_support %} данные о производительности виртуальной машины без необходимости скачивать полный Пакет поддержки. Он не должен быть включен в обычный экспорт резервных копий, а аналога импорта не существует. Если вы обращаетесь к {% data variables.contact.contact_ent_support %}, мы можем запросить эти данные, чтобы помочь в устранении неполадок.

### Использование

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

## Устранение неполадок

### Центральный сервер collectd не получает данных

{% data variables.product.prodname_enterprise %} входит в комплект поставки с `collectd` версии 5.x. `collectd` 5.x не поддерживает обратную совместимость с серией выпусков 4.x. `collectd` Центральный сервер должен быть по крайней мере версии 5.x, чтобы принимать данные, отправленные с {% данных variables.location.product_location %}.

Для получения справки по дальнейшим вопросам или проблемам обратитесь к {% data variables.contact.contact_ent_support %}.

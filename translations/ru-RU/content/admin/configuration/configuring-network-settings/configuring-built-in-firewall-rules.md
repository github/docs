---
title: Настройка встроенных правил брандмауэра
intro: 'Вы можете просматривать правила брандмауэра по умолчанию и настраивать правила для {% данных variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-built-in-firewall-rules
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure firewall rules
ms.openlocfilehash: d91ca39c379454bf4cdebedf7085af38faf756f2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098326'
---
## Сведения о брандмауэре {% данных variables.location.product_location %}

{% data variables.product.prodname_ghe_server %} использует несложный брандмауэр Ubuntu (UFW) на виртуальном модуле. Дополнительные сведения см. в разделе [UFW](https://help.ubuntu.com/community/UFW) документации по Ubuntu. {% data variables.product.prodname_ghe_server %} автоматически обновляет список разрешенных служб брандмауэра с каждым выпуском.

После установки {% data variables.product.prodname_ghe_server %} все необходимые сетевые порты автоматически открываются для приема подключений. Каждый необязательный порт автоматически настроен как `deny`, а исходящая политика по умолчанию настроена как `allow`. Отслеживание состояния включено для всех новых подключений; обычно это сетевые пакеты с набором битов `SYN`. Дополнительную информацию см. в разделе [Сетевые порты](/enterprise/admin/guides/installation/network-ports).

Брандмауэр UFW также открывает несколько других портов, необходимых для правильной работы {% data variables.product.prodname_ghe_server %}. Дополнительные сведения о наборе правил UFW см. в статье о [UFW README](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213).

## Просмотр правил брандмауэра по умолчанию

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Чтобы просмотреть правила брандмауэра по умолчанию, выполните команду `sudo ufw status`. Должен отобразиться примерно такой результат:
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

## Добавление настраиваемых правил брандмауэра

{% warning %}

**Предупреждение.** Перед добавлением настраиваемых правил брандмауэра создайте резервную копию текущих правил на случай необходимости сброса к известному рабочему состоянию. Если сервер заблокирован, обратитесь к {% data variables.contact.contact_ent_support %}, чтобы перенастроить исходные правила брандмауэра. Восстановление исходных правил брандмауэра включает простой вашего сервера.

{% endwarning %}

1. Настройте настраиваемое правило брандмауэра.
2. Проверьте состояние каждого нового правила с помощью команды `status numbered`.
  ```shell
  $ sudo ufw status numbered
  ```
3. Чтобы создать резервную копию настраиваемых правил брандмауэра, выполните команду `cp` для перемещения правил в новый файл.
  ```shell
  $ sudo cp -r /etc/ufw ~/ufw.backup
  ```

После обновления {% данных variables.location.product_location %}необходимо повторно применить пользовательские правила брандмауэра. Рекомендуется создать сценарий для повторного применения настраиваемых правил брандмауэра.

## Восстановление правил брандмауэра по умолчанию

Если после изменения правил брандмауэра произошла ошибка, можно сбросить правила из исходной резервной копии.

{% warning %}

**Предупреждение.** Если вы не создали резервную копию исходных правил, прежде чем внести изменения в брандмауэр, обратитесь к {% data variables.contact.contact_ent_support %}, чтобы получить дополнительную помощь.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Чтобы восстановить предыдущие правила резервного копирования, скопируйте их обратно в брандмауэр с помощью команды `cp`.
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /etc/ufw
  ```
3. Перезапустите брандмауэр, выполнив команду `systemctl`.
  ```shell
  $ sudo systemctl restart ufw
  ```
4. С помощью команды `ufw status` убедитесь, что правила возвратились к своим значениям по умолчанию.
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

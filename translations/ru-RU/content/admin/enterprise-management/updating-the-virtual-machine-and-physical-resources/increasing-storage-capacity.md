---
title: Увеличение емкости хранилища
intro: 'Вы можете увеличить или изменить объем хранилища, доступного для репозиториев Git, баз данных, индексов поиска и других постоянных данных приложения.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
shortTitle: Increase storage capacity
ms.openlocfilehash: bdf8819d295dae4a93e03ca0381a1c0eed93943d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098764'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

По мере присоединения пользователей к {% данных variables.location.product_location %}может потребоваться изменить размер тома хранилища. Сведения об изменении размера хранилища см. в документации по платформе виртуализации.

## Требования и рекомендации

{% note %}

**Примечание.** Перед изменением объема хранилища переведите экземпляр в режим обслуживания.{% ifversion ip-exception-list %} Вы можете проверить изменения, настроив список исключений IP-адресов, чтобы разрешить доступ с указанных IP-адресов. {% endif %} Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

{% endnote %}

### Минимальные требования

{% data reusables.enterprise_installation.hardware-rec-table %}

## Увеличение размера секции данных

1. Измените размер существующего диска для тома пользователя с помощью средств платформы виртуализации.
{% data reusables.enterprise_installation.ssh-into-instance %}
3. Поместите устройство в режим обслуживания. Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).
4. Перезагрузите устройство, чтобы обнаружить выделение нового хранилища:
  ```shell
  $ sudo reboot
  ```
5. Выполните команду `ghe-storage-extend`, чтобы развернуть файловую систему `/data/user`:
  ```shell
  $ ghe-storage-extend
  ```

## Увеличение размера корневой секции с помощью нового устройства

1. Настройте новый экземпляр данных {% data variables.product.prodname_ghe_server %} с корневым диском большего размера, используя ту же версию, что и текущее устройство. Дополнительные сведения см. в разделе [Настройка экземпляра {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
2. Завершите работу текущего устройства:
  ```shell
  $ sudo poweroff
  ```
3. Отключите диск данных от текущего устройства с помощью средств платформы виртуализации.
4. Подключите диск данных к новому устройству с корневым диском большего объема.

## Увеличение размера корневой секции с помощью нового устройства

{% warning %}

**Предупреждение.** Перед увеличением размера корневой секции необходимо перевести экземпляр в режим обслуживания. Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

{% endwarning %}

1. Подключите новый диск к устройству {% data variables.product.prodname_ghe_server %}.
1. Выполните команду `lsblk`, чтобы определить имя устройства нового диска.
1. Выполните команду `parted`, чтобы отформатировать диск, изменив имя устройства на `/dev/xvdg`.
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
1. Чтобы остановить репликацию, выполните команду `ghe-repl-stop`.

   ```shell
   $ ghe-repl-stop
   ```
   
1. Выполните команду `ghe-upgrade`, чтобы установить полный пакет для конкретной платформы на секционированные диски. Универсальный пакет обновления с горячим исправлением, например `github-enterprise-2.11.9.hpkg`, не будет работать ожидаемым образом. После выполнения команды `ghe-upgrade` службы приложений будут автоматически завершены.

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
1. Завершение работы приложения:
  ```shell
  $ sudo poweroff
  ```
1. В гипервизоре удалите старый корневой диск и подключите новый корневой диск в том же расположении, где был подключен старый.
1. Запустите устройство.
1. Убедитесь, что системные службы работают правильно, а затем выпустите режим обслуживания. Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

Если устройство настроено для высокого уровня доступности или георепликации, не забудьте запустить репликацию на каждом узле реплики, используя `ghe-repl-start` после обновления хранилища на всех узлах.

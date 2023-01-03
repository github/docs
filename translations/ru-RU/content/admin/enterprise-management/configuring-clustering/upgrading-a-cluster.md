---
title: Обновление кластера
intro: 'Используйте административную оболочку (SSH) для обновления кластера {% data variables.product.prodname_ghe_server %} до последней версии выпуска.'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
  - /admin/enterprise-management/upgrading-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Upgrades
ms.openlocfilehash: fb098009acf64e92a3fa41a4be487c5503ec7cf2
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008877'
---
## Обновление с помощью горячего исправления
{% data reusables.enterprise_installation.hotpatching-explanation %} Скрипт установки горячего исправления устанавливает исправление на каждом узле в кластере и перезапускает службы в правильной последовательности, чтобы избежать простоя.

1. Создайте резервную копию данных с помощью [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
2. В административной оболочке любого узла выполните команду `ghe-cluster-hotpatch`, чтобы установить последнюю версию горячего исправления. Вы можете указать URL-адрес для горячего исправления или вручную скачать горячее исправление и указать имя локального файла.
  ```shell
  $ ghe-cluster-hotpatch https://HOTPATCH-URL/FILENAME.hpkg
  ```

## Обновление с помощью пакета обновления
Используйте пакет обновления для обновления кластера {% data variables.product.prodname_ghe_server %} до последней версии компонента. Например, можно выполнить обновление с `2.11` до `2.13`.

### Подготовка к обновлению

1. Просмотрите сведения о [конфигурации сети кластера](/enterprise/admin/guides/clustering/cluster-network-configuration) для обновляемой версии и при необходимости обновите конфигурацию.
2. Создайте резервную копию данных с помощью [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).
3. Запланируйте период обслуживания для конечных пользователей кластера {% data variables.product.prodname_ghe_server %}, так как он будет недоступен для нормального использования во время обновления. Режим обслуживания блокирует доступ пользователей и предотвращает изменения данных во время обновления кластера.
4. На [странице скачивания {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/download) скопируйте URL-адрес для *PKG*-файла обновления в буфер обмена.
5. В административной оболочке любого узла используйте команду `ghe-cluster-each` вместе с `curl` для скачивания пакета выпуска на каждый узел за один шаг. Используйте URL-адрес, скопированный на предыдущем шаге, в качестве аргумента.
  ```shell
  $ ghe-cluster-each -- "cd /home/admin && curl -L -O  https://PACKAGE-URL.pkg"
  > ghe-app-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  24.2M      0  0:00:20  0:00:20 --:--:-- 27.4M
  > ghe-data-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  21.3M      0  0:00:23  0:00:23 --:--:-- 25.8M
  > ghe-data-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.6M
  > ghe-app-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.8M      0  0:00:25  0:00:25 --:--:-- 17.6M
  > ghe-data-node-3:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-3:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.5M
  ```
6. Определите основной узел MySQL, который определен как `mysql-master = <hostname>` в `cluster.conf`. Этот узел будет обновлен последним.

### Обновление узлов кластера

1. Включите режим обслуживания в соответствии с запланированным периодом, подключившись к административной оболочке любого узла кластера и выполнив команду `ghe-cluster-maintenance -s`.
2. Подключитесь к административной оболочке каждого узла {% data variables.product.prodname_ghe_server %}, **за исключением основного узла MySQL**.
Выполните команду `ghe-upgrade`, указав имя файла пакета, скачанного на шаге 4 [подготовки к обновлению](#preparing-to-upgrade):
  ```shell
  $ ghe-upgrade PACKAGE-FILENAME.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
3. Процесс обновления перезагрузит узел после завершения. Убедитесь, что каждый узел можно `ping` после перезагрузки.
4. Подключитесь к административной оболочке основного узла MySQL. Выполните команду `ghe-upgrade`, указав имя файла пакета, скачанного на шаге 4 [подготовки к обновлению](#preparing-to-upgrade):
  ```shell
  $ ghe-upgrade PACKAGE-FILENAME.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
5. После завершения процесса обновления основной узел MySQL будет перезагружен. Убедитесь, что после перезагрузки каждый узел можно `ping`.{% ifversion ghes %}
6. Подключитесь к административной оболочке основного узла MySQL и выполните команду `ghe-cluster-config-apply`.
7. По завершении `ghe-cluster-config-apply`, убедитесь, что службы находятся в работоспособном состоянии, выполнив команду`ghe-cluster-status`.{ % endif %}
8. Выйдите из административной оболочки любого узла, выполнив команду `ghe-cluster-maintenance -u`.

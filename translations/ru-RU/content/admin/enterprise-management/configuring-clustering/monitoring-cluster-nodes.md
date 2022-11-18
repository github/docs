---
title: Мониторинг узлов кластера
intro: 'Кластер {% data variables.product.prodname_ghe_server %} состоит из избыточных служб, распределенных между двумя или более узлами. Если произошел сбой отдельной службы или всего узла, это не должно сразу стать очевидным для пользователей кластера. Однако учитывая, что это влияет на производительность и избыточность, важно отслеживать работоспособность кластера {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
  - /admin/enterprise-management/monitoring-cluster-nodes
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: b6dd89aac6a81ce5c00dc053847c8fb996523914
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008889'
---
## Проверка состояния кластера вручную

{% data variables.product.prodname_ghe_server %} имеет встроенную программу командной строки для мониторинга работоспособности кластера. При запуске команды `ghe-cluster-status` в административной оболочке выполняется ряд проверок работоспособности на каждом узле, включая проверку подключения и состояния службы. В выходных данных отображаются все результаты теста, включая текст `ok` или `error`. Например, чтобы отобразить только неудачные тесты, выполните следующую команду:

```shell
admin@ghe-data-node-0:~$ ghe-cluster-status | grep error
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**Примечание.** Если неудачные тесты отсутствуют, эта команда не выводит выходные данные. Это означает, что кластер работоспособен.

{% endnote %}

## Мониторинг состояния кластера с помощью Nagios

Можно настроить [Nagios](https://www.nagios.org/) для мониторинга {% data variables.product.prodname_ghe_server %}. Помимо мониторинга базового подключения к каждому из узлов кластера, можно проверять состояние кластера, настроив Nagios для использования команды `ghe-cluster-status -n`. В результате выполнения возвращаются выходные данные в формате, понятном Nagios.

### Предварительные требования
* Узел Linux, где выполняется Nagios.
* Сетевой доступ к кластеру {% data variables.product.prodname_ghe_server %}.

### Настройка узла Nagios
1. Создайте ключ SSH с пустой парольной фразой. Nagios использует его для проверки подлинности в кластере {% data variables.product.prodname_ghe_server %}.
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t ed25519
  > Generating public/private ed25519 key pair.
  > Enter file in which to save the key (/home/nagiosuser/.ssh/id_ed25519):
  > Enter passphrase (empty for no passphrase): LEAVE BLANK BY PRESSING ENTER
  > Enter same passphrase again: PRESS ENTER AGAIN
  > Your identification has been saved in /home/nagiosuser/.ssh/id_ed25519.
  > Your public key has been saved in /home/nagiosuser/.ssh/id_ed25519.pub.
  ```
  {% danger %}

  **Предупреждение системы безопасности.** Ключ SSH без парольной фразы может представлять угрозу безопасности, если он авторизован для полного доступа к узлу. Ограничьте авторизацию этого ключа одной командой только для чтения.

  {% enddanger %} {% note %}

  **Примечание.** Если вы используете дистрибутив Linux, который не поддерживает алгоритм Ed25519, используйте следующую команду:
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
  ```

  {% endnote %}
2. Скопируйте закрытый ключ (`id_ed25519`) в домашнюю папку `nagios` и задайте соответствующие права владения.
  ```shell
  nagiosuser@nagios:~$ sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/
  nagiosuser@nagios:~$ sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519
  ```

3. Чтобы авторизовать открытый ключ для выполнения *только* команды `ghe-cluster-status -n`, используйте префикс `command=` в файле `/data/user/common/authorized_keys`. В административной оболочке на любом узле измените этот файл, добавив открытый ключ, созданный на шаге 1. Пример: `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. Проверьте и скопируйте конфигурацию на каждый узел в кластере, выполнив команду `ghe-cluster-config-apply` на узле, где был изменен файл `/data/user/common/authorized_keys`.

  ```shell
  admin@ghe-data-node-0:~$ ghe-cluster-config-apply
  > Validating configuration
  > ...
  > Finished cluster configuration
  ```

5. Чтобы проверить, может ли подключаемый модуль Nagios успешно выполнить команду, запустите ее в интерактивном режиме с узла Nagios.
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H HOSTNAME -C "ghe-cluster-status -n" -t 30
  > OK - No errors detected
  ```

6. Создайте определение команды в конфигурации Nagios.
  ###### Пример определения

  ```
  define command {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
  }
  ```
7. Добавьте эту команду в определение службы для узла в кластере {% data variables.product.prodname_ghe_server %}.

  ###### Пример определения

  ```
  define host{
        use                     generic-host
        host_name               ghe-data-node-0
        alias                   ghe-data-node-0
        address                 10.11.17.180
        }

  define service{
          use                             generic-service
          host_name                       ghe-data-node-0
          service_description             GitHub Cluster Status
          check_command                   check_ssh_ghe_cluster
          }
  ```

После добавления определения в Nagios проверка службы выполняется в соответствии с конфигурацией. Вы должны увидеть только что настроенную службу в веб-интерфейсе Nagios.

![Пример Nagios](/assets/images/enterprise/cluster/nagios-example.png)

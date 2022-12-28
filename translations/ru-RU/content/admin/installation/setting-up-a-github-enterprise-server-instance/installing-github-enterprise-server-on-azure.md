---
title: Установка сервера GitHub Enterprise в Azure
intro: 'Чтобы установить {% data variables.product.prodname_ghe_server %} в Azure, необходимо выполнить развертывание в оптимизированном для памяти экземпляре, поддерживающем хранилище "Премиум".'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
  - /admin/installation/installing-github-enterprise-server-on-azure
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Azure
ms.openlocfilehash: 7d5d1024083e448785ca1429ffd71e343e7cd507
ms.sourcegitcommit: 152a2399e22f476eba91a74d1980b96f468f4d2c
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160868'
---
Вы можете развернуть {% data variables.product.prodname_ghe_server %} в глобальной среде Azure или Azure для государственных организаций.

## Предварительные требования

- {% data reusables.enterprise_installation.software-license %}
- Необходима учетная запись Azure, которая может подготавливать к работе новые компьютеры. Дополнительные сведения см. на [веб-сайте Майкрософт](https://azure.microsoft.com).
- Большинство действий, необходимых для запуска виртуальной машины (VM), также можно выполнить с помощью портала Azure. Однако для начальной настройки рекомендуется установить интерфейс командной строки (CLI) Azure. Ниже приведены примеры использования Azure CLI 2.0. Дополнительные сведения см. в руководстве Azure [Установка Azure CLI 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest).

## Рекомендации по оборудованию

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Определение типа виртуальной машины

Перед запуском {% data variables.location.product_location %} в Azure необходимо определить тип компьютера, который лучше всего соответствует потребностям вашей организации. Дополнительные сведения об оптимизированных для операций в памяти компьютерах см. в разделе [Размеры виртуальных машин, оптимизированных для операций в памяти](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes-memory) в документации Microsoft Azure. Минимальные требования к ресурсам для {% data variables.product.product_name %} см. в разделе [Минимальные требования](#minimum-requirements).


{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

## Создание виртуальной машины {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Найдите самый последний образ устройства {% data variables.product.prodname_ghe_server %}. Дополнительные сведения о команде `vm image list` см. в разделе [`az vm image list`](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list) документации Майкрософт.
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. Создайте виртуальную машину с помощью найденного образа устройства. Дополнительные сведения см. в разделе [`az vm create`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create) документации Майкрософт.

  Передайте параметры для имени виртуальной машины, группы ресурсов, размера виртуальной машины, имени предпочтительного региона Azure, имени виртуальной машины образа устройства, которое было указано на предыдущем шаге, и номера SKU хранилища для хранилища премиум-класса. Дополнительные сведения о группах ресурсов см. в разделе [Группы ресурсов](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups) в документации Майкрософт.

  ```shell
  $ az vm create -n VM_NAME -g RESOURCE_GROUP --size VM_SIZE -l REGION --image APPLIANCE_IMAGE_NAME --storage-sku Premium_LRS
  ```

3. Настройте параметры безопасности на виртуальной машине, чтобы открыть необходимые порты. Дополнительные сведения см. в разделе [`az vm open-port`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port) документации Майкрософт. В таблице ниже приведено описание каждого порта, чтобы определить, какие порты необходимо открыть.

  ```shell
  $ az vm open-port -n VM_NAME -g RESOURCE_GROUP --port PORT_NUMBER
  ```

  Эта таблица определяет, для чего используется каждый порт.

  {% data reusables.enterprise_installation.necessary_ports %}

4. Создайте и подключите к виртуальной машине новый незашифрованный диск данных, настроив размер в соответствии с количеством лицензий пользователя. Дополнительные сведения см. в разделе [`az vm disk attach`](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach) документации Майкрософт.

  Передайте параметры для имени виртуальной машины (например, `ghe-acme-corp`), группы ресурсов, номера SKU премиум-хранилища, размера диска (например, `200`) и имени полученного виртуального жесткого диска.

  ```shell
  $ az vm disk attach --vm-name VM_NAME -g RESOURCE_GROUP --sku Premium_LRS --new -z SIZE_IN_GB --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **Примечание:** Для непроизводственных экземпляров с достаточной пропускной способностью ввода-вывода рекомендуемый минимальный размер диска составляет 150 ГиБ с включенным кэшем для чтения и записи (`--caching ReadWrite`).

   {% endnote %}

## Настройка виртуальной машины {% data variables.product.prodname_ghe_server %}

1. Перед настройкой виртуальной машины необходимо дождаться ее перехода в состояние ReadyRole. Проверьте состояние виртуальной машины с помощью команды `vm list`. Дополнительные сведения см. в разделе [`az vm list`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list) документации Майкрософт.
  ```shell
  $ az vm list -d -g RESOURCE_GROUP -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus
  
  ```
  {% note %}
  
  **Примечание.** Azure не создает запись FQDNS для виртуальной машины автоматически. Дополнительные сведения см. в руководстве Azure о том, как [создать полное доменное имя на портале Azure для виртуальной машины Linux](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn).
  
  {% endnote %}
  
  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Дополнительные сведения см. в разделе [Настройка устройства {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
  {% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}
  
## Функции расширения Azure

{% data variables.product.product_name %} не поддерживает установку функций расширения Azure. Образ {% data variables.product.prodname_ghe_server %} поставляется с настроенным `waagent` пакетом, который поддерживает только базовые функции управления виртуальными машинами и блокирует расширенные функции управления виртуальными машинами. 

Чтобы избежать нестабильности системы экземпляра {% data variables.product.prodname_ghe_server %}, `walinuxagent` служба намеренно запускается в {% data variables.product.prodname_ghe_server %} в ограниченном режиме, явно не позволяя агенту устанавливать другие агенты. Функции управления виртуальными машинами, которые зависят от дополнительных агентов и расширений, помимо того, что поставляется с образом {% data variables.product.prodname_ghe_server %}, такие как расширение агента мониторинга для Azure Insights или Azure Backups, не поддерживаются.

Так как {% data variables.product.product_name %} запускает настраиваемую операционную систему Linux только с необходимыми приложениями и службами, установка или обновление пакетов операционной системы вручную приведет к перезаписи этих настроек и может привести к непредвиденному поведению. Подробнее см. в статье [Обзор системы](/admin/overview/system-overview).

## Дополнительные материалы

- [Обзор системы](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Сведения об обновлении до новых выпусков](/admin/overview/about-upgrades-to-new-releases){% endif %}

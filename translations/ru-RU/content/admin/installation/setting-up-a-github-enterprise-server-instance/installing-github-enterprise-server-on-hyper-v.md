---
title: Установка сервера GitHub Enterprise в Hyper-V
intro: 'Чтобы установить {% data variables.product.prodname_ghe_server %} на Hyper-V, необходимо выполнить развертывание на компьютере под управлением Windows Server (версии 2008-2019).'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
  - /admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Hyper-V
ms.openlocfilehash: ac551529067caf689ce662dc90b8864fe41e0a6b
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009135'
---
## Предварительные требования

- {% data reusables.enterprise_installation.software-license %}
- Требуется Windows Server версии от 2008 до 2019 с поддержкой Hyper-V.
- Большинство действий, необходимых для создания виртуальной машины, можно также выполнить с помощью [диспетчера Hyper-V](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts). Однако для начальной настройки рекомендуется использовать оболочку командной строки Windows PowerShell. Примеры использования PowerShell приведены ниже. Дополнительные сведения см. в руководстве Майкрософт [Начало работы с Windows PowerShell](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1).

## Рекомендации по оборудованию

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Скачивание образа {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. В разделе "Локальный {% data variables.product.prodname_dotcom %}" в раскрывающемся меню "Выбор гипервизора" щелкните **Hyper-V (VHD)** .
5. Нажмите **Скачать Hyper-V (VHD)** .

## Создание экземпляра {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. В PowerShell создайте новую виртуальную машину поколения 1, настройте размер на основе количества лицензий пользователя и подключите скачанный образ {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в разделе [New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps) документации Майкрософт.
  ```shell
  PS C:\> New-VM -Generation 1 -Name VM_NAME -MemoryStartupBytes MEMORY_SIZE -BootDevice VHD -VHDPath PATH_TO_VHD  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} Замените `PATH_TO_DATA_DISK` на путь к расположению, в котором создается диск. Дополнительные сведения см. в разделе [New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps) документации Майкрософт.
  ```shell
  PS C:\> New-VHD -Path PATH_TO_DATA_DISK -SizeBytes DISK_SIZE
  ```
3. Подключите диск данных к вашему экземпляру. Дополнительные сведения см. в разделе [Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps) документации Майкрософт.
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName VM_NAME -Path PATH_TO_DATA_DISK
  ```
4. Запустите виртуальную машину. Дополнительные сведения см. в разделе [Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps) документации Майкрософт.
  ```shell
  PS C:\> Start-VM -Name VM_NAME
  ```
5. Получите IP-адрес вашей виртуальной машины. Дополнительные сведения см. в разделе [Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps) документации Майкрософт.
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName VM_NAME).IpAddresses
  ```
6. Скопируйте IP-адрес виртуальной машины и вставьте его в веб-браузер.

## Настройка экземпляра {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Дополнительные сведения см. в статье [Настройка устройства {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Дополнительные материалы

- [Обзор системы](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Сведения об обновлении до новых выпусков](/admin/overview/about-upgrades-to-new-releases){% endif %}

---
title: Установка сервера GitHub Enterprise на VMware
intro: 'Чтобы установить {% data variables.product.prodname_ghe_server %} в VMware, необходимо загрузить клиент VMware vSphere, а затем загрузить и развернуть программное обеспечение {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware
  - /enterprise/admin/articles/installing-vmware-tools
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
  - /admin/installation/installing-github-enterprise-server-on-vmware
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on VMware
ms.openlocfilehash: 0e1c890552bad9de64f966ee9c1869bd963c211a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098751'
---
## Предварительные требования

- {% data reusables.enterprise_installation.software-license %}
- Необходимо иметь гипервизор VMware vSphere ESXi, примененный к компьютеру без операционной системы, на котором будут выполняться {% данных variables.location.product_location %}s. Поддерживаются версии от 5.5 до 6.7 для {% data variables.product.prodname_ghe_server %} 3.4 и более ранних версий. Версия ESX 7.0 поддерживается для {% data variables.product.prodname_ghe_server %} 3.5 и более поздних версий. Гипервизор ESXi бесплатный и не включает (дополнительный) vCenter Server. Дополнительные сведения см. в [документации по ESXi VMware](https://www.vmware.com/products/esxi-and-esx.html).
- Вам потребуется доступ к клиенту vSphere. Если у вас есть vCenter Server, можно использовать веб-клиент vSphere. Дополнительные сведения см. в руководстве по VMware [Выполнение входа в vCenter Server с помощью веб-клиента vSphere](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html).

## Рекомендации по оборудованию

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Скачивание образа {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. В разделе "Локальная среда {% data variables.product.prodname_dotcom %}" выберите раскрывающееся меню "Выберите свой гипервизор" и щелкните **ESXi/vSphere (OVA) от VMware**.
5. Щелкните **Скачать для ESXi/vSphere (OVA) от VMware**.

## Создание экземпляра {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Используя клиент Windows для vSphere или веб-клиент vCenter, импортируйте скачанный образ {% data variables.product.prodname_ghe_server %}. Инструкции см. в руководстве по VMware [Развертывание шаблона OVF или OVA](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html).
    - При выборе хранилища данных выберите хранилище с достаточным пространством для размещения дисков виртуальной машины. Минимальные спецификации оборудования, рекомендуемые для размера экземпляра, см. в разделе [Рекомендации по оборудованию](#hardware-considerations). Мы рекомендуем предварительную подготовку с отложенным обнулением.
    - Не устанавливайте флажок **Включить после развертывания**, так как после подготовки виртуальной машины необходимо добавить подключенный том хранилища для данных репозитория.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Инструкции см. в руководстве по VMware [Добавление нового жесткого диска к виртуальной машине](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html).

## Настройка экземпляра {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Дополнительные сведения см. в статье [Настройка устройства {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Дополнительные материалы

- [Обзор системы](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Сведения об обновлении до новых выпусков](/admin/overview/about-upgrades-to-new-releases){% endif %}
